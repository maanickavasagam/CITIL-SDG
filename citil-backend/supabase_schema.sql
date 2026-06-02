-- ============================================================
-- CITIL-SDG Database Schema
-- Run this entire file in Supabase → SQL Editor → New Query
-- ============================================================

-- Enable UUID extension (already enabled by default in Supabase)
create extension if not exists "uuid-ossp";


-- ── Students ─────────────────────────────────────────────────────────────────
create table if not exists students (
  id               uuid primary key default uuid_generate_v4(),
  name             text not null,
  register_no      text unique not null,
  department       text not null,
  year             int  not null check (year between 1 and 4),
  email            text,
  phone            text,
  attendance_pct   numeric(5,2) check (attendance_pct between 0 and 100),
  cgpa             numeric(4,2) check (cgpa between 0 and 10),
  backlogs         int  default 0,
  economic_status  text check (economic_status in ('low','medium','high')),
  sdg_goal         int  check (sdg_goal between 1 and 17),
  risk_score       numeric(5,2),
  risk_label       text check (risk_label in ('low','medium','high')),
  created_at       timestamptz default now(),
  updated_at       timestamptz default now()
);

-- Auto-update updated_at
create or replace function update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger students_updated_at
  before update on students
  for each row execute function update_updated_at();


-- ── Assessments ──────────────────────────────────────────────────────────────
create table if not exists assessments (
  id                  uuid primary key default uuid_generate_v4(),
  student_id          uuid references students(id) on delete cascade,
  attendance_pct      numeric(5,2) not null,
  cgpa                numeric(4,2) not null,
  backlogs            int not null default 0,
  economic_status     text not null,
  participation_score numeric(4,2),
  risk_score          numeric(5,2) not null,
  risk_label          text not null,
  created_at          timestamptz default now()
);


-- ── Row Level Security ───────────────────────────────────────────────────────
-- Our FastAPI backend uses the service role key, which bypasses RLS.
-- Still good practice to enable it for direct Supabase client access.

alter table students    enable row level security;
alter table assessments enable row level security;

-- Allow service role full access (FastAPI backend)
create policy "service role full access students"
  on students for all
  using (true)
  with check (true);

create policy "service role full access assessments"
  on assessments for all
  using (true)
  with check (true);


-- ── Indexes for common queries ───────────────────────────────────────────────
create index if not exists idx_students_department  on students(department);
create index if not exists idx_students_risk_label  on students(risk_label);
create index if not exists idx_students_sdg_goal    on students(sdg_goal);
create index if not exists idx_assessments_student  on assessments(student_id);
