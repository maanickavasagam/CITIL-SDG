import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
    BarChart, Bar, AreaChart, Area, LineChart, Line, PieChart, Pie, Cell,
    XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, Legend
} from 'recharts';
import {
    ShieldAlert, BookOpen, GraduationCap, Users, LayoutDashboard,
    AlertTriangle, TrendingUp, TrendingDown, Minus, ChevronRight,
    ArrowLeft, Activity, Clock, LogOut, CheckCircle2, Search,
    Filter, MoreVertical, ShieldCheck, Zap, Wallet, MapPin, Star, Shield, TrendingDown as TrendingDownIcon, BarChart2, IndianRupee, Bell,
    Sun, Moon, Eye, EyeOff, Cpu, Calendar, Sparkles, Building2, BarChart3
} from 'lucide-react';



const calculateDropoutWindow = (riskScore) => {
    if (riskScore >= 75) return "1–3 Months";
    if (riskScore >= 60) return "3–6 Months";
    if (riskScore >= 40) return "6–12 Months";
    return "Not Predicted";
};

const generateStudents = () => {
    const students = [
    {
        "id": "S193",
        "name": "Ishaan Bhattacharya",
        "dept": "CIVIL",
        "sem": 3,
        "attendance": [
            65,
            62,
            59,
            58,
            55
        ],
        "marks": [
            45,
            42,
            40,
            35,
            30
        ],
        "lmsLogins": [
            2,
            1,
            1,
            0,
            1
        ],
        "assignmentDelays": 3,
        "behaviorIncidents": 1,
        "competitions": 0,
        "prevGPA": 5.275115641202325,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Pending",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 87,
            "counselingRecommended": false,
            "stressCategory": "High"
        }
    },
    {
        "id": "S152",
        "name": "Suresh Rao",
        "dept": "MECH",
        "sem": 5,
        "attendance": [
            65,
            62,
            59,
            58,
            55
        ],
        "marks": [
            45,
            42,
            40,
            35,
            30
        ],
        "lmsLogins": [
            2,
            1,
            1,
            0,
            1
        ],
        "assignmentDelays": 5,
        "behaviorIncidents": 2,
        "competitions": 0,
        "prevGPA": 5.593350830469319,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Pending",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 88,
            "counselingRecommended": false,
            "stressCategory": "High"
        }
    },
    {
        "id": "S041",
        "name": "Simran Gupta",
        "dept": "MECH",
        "sem": 8,
        "attendance": [
            90,
            92,
            95,
            96,
            98
        ],
        "marks": [
            80,
            82,
            85,
            88,
            92
        ],
        "lmsLogins": [
            12,
            14,
            15,
            18,
            20
        ],
        "assignmentDelays": 0,
        "behaviorIncidents": 0,
        "competitions": 1,
        "prevGPA": 8.633229203610549,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 24,
            "counselingRecommended": false,
            "stressCategory": "Low"
        }
    },
    {
        "id": "S200",
        "name": "Sneha Sharma",
        "dept": "CIVIL",
        "sem": 4,
        "attendance": [
            65,
            62,
            59,
            58,
            55
        ],
        "marks": [
            45,
            42,
            40,
            35,
            30
        ],
        "lmsLogins": [
            2,
            1,
            1,
            0,
            1
        ],
        "assignmentDelays": 3,
        "behaviorIncidents": 1,
        "competitions": 0,
        "prevGPA": 5.928048312736784,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 88,
            "counselingRecommended": false,
            "stressCategory": "High"
        }
    },
    {
        "id": "S071",
        "name": "Ayaan Shukla",
        "dept": "ECE",
        "sem": 3,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 2,
        "behaviorIncidents": 0,
        "competitions": 0,
        "prevGPA": 7.501627432087994,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 62,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S038",
        "name": "Karan Dixit",
        "dept": "ECE",
        "sem": 7,
        "attendance": [
            90,
            92,
            95,
            96,
            98
        ],
        "marks": [
            80,
            82,
            85,
            88,
            92
        ],
        "lmsLogins": [
            12,
            14,
            15,
            18,
            20
        ],
        "assignmentDelays": 0,
        "behaviorIncidents": 0,
        "competitions": 2,
        "prevGPA": 9.578580208778458,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 24,
            "counselingRecommended": false,
            "stressCategory": "Low"
        }
    },
    {
        "id": "S167",
        "name": "Saanvi Pillai",
        "dept": "CIVIL",
        "sem": 7,
        "attendance": [
            65,
            62,
            59,
            58,
            55
        ],
        "marks": [
            45,
            42,
            40,
            35,
            30
        ],
        "lmsLogins": [
            2,
            1,
            1,
            0,
            1
        ],
        "assignmentDelays": 3,
        "behaviorIncidents": 2,
        "competitions": 0,
        "prevGPA": 5.5415598044372825,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 91,
            "counselingRecommended": false,
            "stressCategory": "High"
        }
    },
    {
        "id": "S188",
        "name": "Aarti Rao",
        "dept": "EEE",
        "sem": 8,
        "attendance": [
            65,
            62,
            59,
            58,
            55
        ],
        "marks": [
            45,
            42,
            40,
            35,
            30
        ],
        "lmsLogins": [
            2,
            1,
            1,
            0,
            1
        ],
        "assignmentDelays": 4,
        "behaviorIncidents": 1,
        "competitions": 0,
        "prevGPA": 5.583478258715394,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Pending",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 97,
            "counselingRecommended": false,
            "stressCategory": "High"
        }
    },
    {
        "id": "S128",
        "name": "Ramesh Bansal",
        "dept": "CSE",
        "sem": 3,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 2,
        "behaviorIncidents": 0,
        "competitions": 1,
        "prevGPA": 6.9253687056132005,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 69,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S158",
        "name": "Saanvi Iyer",
        "dept": "CSE",
        "sem": 3,
        "attendance": [
            65,
            62,
            59,
            58,
            55
        ],
        "marks": [
            45,
            42,
            40,
            35,
            30
        ],
        "lmsLogins": [
            2,
            1,
            1,
            0,
            1
        ],
        "assignmentDelays": 3,
        "behaviorIncidents": 1,
        "competitions": 0,
        "prevGPA": 5.0633842055707,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 89,
            "counselingRecommended": false,
            "stressCategory": "High"
        }
    },
    {
        "id": "S179",
        "name": "Ananya Nambiar",
        "dept": "ECE",
        "sem": 6,
        "attendance": [
            65,
            62,
            59,
            58,
            55
        ],
        "marks": [
            45,
            42,
            40,
            35,
            30
        ],
        "lmsLogins": [
            2,
            1,
            1,
            0,
            1
        ],
        "assignmentDelays": 3,
        "behaviorIncidents": 2,
        "competitions": 0,
        "prevGPA": 4.20703951932464,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Pending",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 97,
            "counselingRecommended": false,
            "stressCategory": "High"
        }
    },
    {
        "id": "S148",
        "name": "Sai Das",
        "dept": "CSE",
        "sem": 4,
        "attendance": [
            65,
            62,
            59,
            58,
            55
        ],
        "marks": [
            45,
            42,
            40,
            35,
            30
        ],
        "lmsLogins": [
            2,
            1,
            1,
            0,
            1
        ],
        "assignmentDelays": 5,
        "behaviorIncidents": 2,
        "competitions": 0,
        "prevGPA": 5.499764653670391,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 83,
            "counselingRecommended": false,
            "stressCategory": "High"
        }
    },
    {
        "id": "S039",
        "name": "Ramesh Malhotra",
        "dept": "MECH",
        "sem": 2,
        "attendance": [
            90,
            92,
            95,
            96,
            98
        ],
        "marks": [
            80,
            82,
            85,
            88,
            92
        ],
        "lmsLogins": [
            12,
            14,
            15,
            18,
            20
        ],
        "assignmentDelays": 0,
        "behaviorIncidents": 0,
        "competitions": 1,
        "prevGPA": 8.807329903479749,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 25,
            "counselingRecommended": false,
            "stressCategory": "Low"
        }
    },
    {
        "id": "S094",
        "name": "Vihaan Bhatia",
        "dept": "IT",
        "sem": 6,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 1,
        "behaviorIncidents": 0,
        "competitions": 0,
        "prevGPA": 6.7605849908281686,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 60,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S060",
        "name": "Ayaan Bhattacharya",
        "dept": "CSE",
        "sem": 2,
        "attendance": [
            90,
            92,
            95,
            96,
            98
        ],
        "marks": [
            80,
            82,
            85,
            88,
            92
        ],
        "lmsLogins": [
            12,
            14,
            15,
            18,
            20
        ],
        "assignmentDelays": 0,
        "behaviorIncidents": 0,
        "competitions": 1,
        "prevGPA": 8.819277741363088,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 29,
            "counselingRecommended": false,
            "stressCategory": "Low"
        }
    },
    {
        "id": "S052",
        "name": "Sneha Rao",
        "dept": "ECE",
        "sem": 1,
        "attendance": [
            90,
            92,
            95,
            96,
            98
        ],
        "marks": [
            80,
            82,
            85,
            88,
            92
        ],
        "lmsLogins": [
            12,
            14,
            15,
            18,
            20
        ],
        "assignmentDelays": 0,
        "behaviorIncidents": 0,
        "competitions": 2,
        "prevGPA": 9.477428632208488,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 24,
            "counselingRecommended": false,
            "stressCategory": "Low"
        }
    },
    {
        "id": "S015",
        "name": "Myra Grover",
        "dept": "MECH",
        "sem": 4,
        "attendance": [
            90,
            92,
            95,
            96,
            98
        ],
        "marks": [
            80,
            82,
            85,
            88,
            92
        ],
        "lmsLogins": [
            12,
            14,
            15,
            18,
            20
        ],
        "assignmentDelays": 0,
        "behaviorIncidents": 0,
        "competitions": 0,
        "prevGPA": 8.523861535993921,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 29,
            "counselingRecommended": false,
            "stressCategory": "Low"
        }
    },
    {
        "id": "S116",
        "name": "Tanya Pandey",
        "dept": "CIVIL",
        "sem": 5,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 2,
        "behaviorIncidents": 0,
        "competitions": 0,
        "prevGPA": 7.170597631870679,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 53,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S126",
        "name": "Priya Ahuja",
        "dept": "MECH",
        "sem": 1,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 2,
        "behaviorIncidents": 1,
        "competitions": 0,
        "prevGPA": 7.4666815868640235,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 59,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S053",
        "name": "Rahul Verma",
        "dept": "CIVIL",
        "sem": 6,
        "attendance": [
            90,
            92,
            95,
            96,
            98
        ],
        "marks": [
            80,
            82,
            85,
            88,
            92
        ],
        "lmsLogins": [
            12,
            14,
            15,
            18,
            20
        ],
        "assignmentDelays": 0,
        "behaviorIncidents": 0,
        "competitions": 2,
        "prevGPA": 8.79847074651553,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 26,
            "counselingRecommended": false,
            "stressCategory": "Low"
        }
    },
    {
        "id": "S051",
        "name": "Suresh Malhotra",
        "dept": "CSE",
        "sem": 6,
        "attendance": [
            90,
            92,
            95,
            96,
            98
        ],
        "marks": [
            80,
            82,
            85,
            88,
            92
        ],
        "lmsLogins": [
            12,
            14,
            15,
            18,
            20
        ],
        "assignmentDelays": 0,
        "behaviorIncidents": 0,
        "competitions": 1,
        "prevGPA": 9.919239790160272,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 25,
            "counselingRecommended": false,
            "stressCategory": "Low"
        }
    },
    {
        "id": "S096",
        "name": "Arjun Bhattacharya",
        "dept": "CIVIL",
        "sem": 2,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 1,
        "behaviorIncidents": 0,
        "competitions": 0,
        "prevGPA": 7.143383094039903,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 64,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S191",
        "name": "Ritika Rao",
        "dept": "CSE",
        "sem": 2,
        "attendance": [
            65,
            62,
            59,
            58,
            55
        ],
        "marks": [
            45,
            42,
            40,
            35,
            30
        ],
        "lmsLogins": [
            2,
            1,
            1,
            0,
            1
        ],
        "assignmentDelays": 4,
        "behaviorIncidents": 1,
        "competitions": 0,
        "prevGPA": 5.063094317296761,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Pending",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 85,
            "counselingRecommended": false,
            "stressCategory": "High"
        }
    },
    {
        "id": "S007",
        "name": "Ira Pandey",
        "dept": "ECE",
        "sem": 5,
        "attendance": [
            90,
            92,
            95,
            96,
            98
        ],
        "marks": [
            80,
            82,
            85,
            88,
            92
        ],
        "lmsLogins": [
            12,
            14,
            15,
            18,
            20
        ],
        "assignmentDelays": 0,
        "behaviorIncidents": 0,
        "competitions": 1,
        "prevGPA": 8.506516887696357,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 24,
            "counselingRecommended": false,
            "stressCategory": "Low"
        }
    },
    {
        "id": "S125",
        "name": "Navya Gupta",
        "dept": "ECE",
        "sem": 1,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 2,
        "behaviorIncidents": 0,
        "competitions": 0,
        "prevGPA": 7.543248923913433,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 56,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S049",
        "name": "Rishi Verma",
        "dept": "IT",
        "sem": 5,
        "attendance": [
            90,
            92,
            95,
            96,
            98
        ],
        "marks": [
            80,
            82,
            85,
            88,
            92
        ],
        "lmsLogins": [
            12,
            14,
            15,
            18,
            20
        ],
        "assignmentDelays": 0,
        "behaviorIncidents": 0,
        "competitions": 2,
        "prevGPA": 9.150369769733981,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 26,
            "counselingRecommended": false,
            "stressCategory": "Low"
        }
    },
    {
        "id": "S013",
        "name": "Gaurav Rao",
        "dept": "CSE",
        "sem": 2,
        "attendance": [
            90,
            92,
            95,
            96,
            98
        ],
        "marks": [
            80,
            82,
            85,
            88,
            92
        ],
        "lmsLogins": [
            12,
            14,
            15,
            18,
            20
        ],
        "assignmentDelays": 0,
        "behaviorIncidents": 0,
        "competitions": 1,
        "prevGPA": 8.91243269332392,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 29,
            "counselingRecommended": false,
            "stressCategory": "Low"
        }
    },
    {
        "id": "S135",
        "name": "Priya Bhattacharya",
        "dept": "CIVIL",
        "sem": 4,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 1,
        "behaviorIncidents": 0,
        "competitions": 1,
        "prevGPA": 7.867877188313685,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 60,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S050",
        "name": "Neha Iyer",
        "dept": "CSE",
        "sem": 5,
        "attendance": [
            90,
            92,
            95,
            96,
            98
        ],
        "marks": [
            80,
            82,
            85,
            88,
            92
        ],
        "lmsLogins": [
            12,
            14,
            15,
            18,
            20
        ],
        "assignmentDelays": 0,
        "behaviorIncidents": 0,
        "competitions": 1,
        "prevGPA": 8.967005218929762,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 24,
            "counselingRecommended": false,
            "stressCategory": "Low"
        }
    },
    {
        "id": "S046",
        "name": "Aditya Awasti",
        "dept": "CIVIL",
        "sem": 4,
        "attendance": [
            90,
            92,
            95,
            96,
            98
        ],
        "marks": [
            80,
            82,
            85,
            88,
            92
        ],
        "lmsLogins": [
            12,
            14,
            15,
            18,
            20
        ],
        "assignmentDelays": 0,
        "behaviorIncidents": 0,
        "competitions": 0,
        "prevGPA": 8.813826656163055,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 22,
            "counselingRecommended": false,
            "stressCategory": "Low"
        }
    },
    {
        "id": "S151",
        "name": "Shruti Singh",
        "dept": "CSE",
        "sem": 7,
        "attendance": [
            65,
            62,
            59,
            58,
            55
        ],
        "marks": [
            45,
            42,
            40,
            35,
            30
        ],
        "lmsLogins": [
            2,
            1,
            1,
            0,
            1
        ],
        "assignmentDelays": 3,
        "behaviorIncidents": 1,
        "competitions": 0,
        "prevGPA": 5.6751910993464145,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Pending",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 81,
            "counselingRecommended": false,
            "stressCategory": "High"
        }
    },
    {
        "id": "S154",
        "name": "Arjun Yadav",
        "dept": "ECE",
        "sem": 7,
        "attendance": [
            65,
            62,
            59,
            58,
            55
        ],
        "marks": [
            45,
            42,
            40,
            35,
            30
        ],
        "lmsLogins": [
            2,
            1,
            1,
            0,
            1
        ],
        "assignmentDelays": 3,
        "behaviorIncidents": 1,
        "competitions": 0,
        "prevGPA": 4.132279409387985,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Pending",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 91,
            "counselingRecommended": false,
            "stressCategory": "High"
        }
    },
    {
        "id": "S085",
        "name": "Vikas Nair",
        "dept": "MECH",
        "sem": 3,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 1,
        "behaviorIncidents": 0,
        "competitions": 0,
        "prevGPA": 7.05707978067691,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 68,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S121",
        "name": "Simran Dixit",
        "dept": "CSE",
        "sem": 7,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 2,
        "behaviorIncidents": 1,
        "competitions": 1,
        "prevGPA": 6.563102021452996,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 65,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S172",
        "name": "Ritika Pillai",
        "dept": "EEE",
        "sem": 3,
        "attendance": [
            65,
            62,
            59,
            58,
            55
        ],
        "marks": [
            45,
            42,
            40,
            35,
            30
        ],
        "lmsLogins": [
            2,
            1,
            1,
            0,
            1
        ],
        "assignmentDelays": 5,
        "behaviorIncidents": 2,
        "competitions": 0,
        "prevGPA": 5.47014656126237,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 98,
            "counselingRecommended": false,
            "stressCategory": "High"
        }
    },
    {
        "id": "S068",
        "name": "Aadhya Bose",
        "dept": "EEE",
        "sem": 8,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 2,
        "behaviorIncidents": 0,
        "competitions": 1,
        "prevGPA": 7.071360290910105,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 64,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S163",
        "name": "Darsh Mehta",
        "dept": "ECE",
        "sem": 4,
        "attendance": [
            65,
            62,
            59,
            58,
            55
        ],
        "marks": [
            45,
            42,
            40,
            35,
            30
        ],
        "lmsLogins": [
            2,
            1,
            1,
            0,
            1
        ],
        "assignmentDelays": 3,
        "behaviorIncidents": 1,
        "competitions": 0,
        "prevGPA": 4.878556566546818,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 96,
            "counselingRecommended": false,
            "stressCategory": "High"
        }
    },
    {
        "id": "S144",
        "name": "Arjun Dixit",
        "dept": "MECH",
        "sem": 6,
        "attendance": [
            65,
            62,
            59,
            58,
            55
        ],
        "marks": [
            45,
            42,
            40,
            35,
            30
        ],
        "lmsLogins": [
            2,
            1,
            1,
            0,
            1
        ],
        "assignmentDelays": 5,
        "behaviorIncidents": 2,
        "competitions": 0,
        "prevGPA": 5.906751613699303,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 91,
            "counselingRecommended": false,
            "stressCategory": "High"
        }
    },
    {
        "id": "S093",
        "name": "Pooja Grover",
        "dept": "MECH",
        "sem": 1,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 2,
        "behaviorIncidents": 0,
        "competitions": 1,
        "prevGPA": 7.539717355042528,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 67,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S174",
        "name": "Avni Narang",
        "dept": "ECE",
        "sem": 5,
        "attendance": [
            65,
            62,
            59,
            58,
            55
        ],
        "marks": [
            45,
            42,
            40,
            35,
            30
        ],
        "lmsLogins": [
            2,
            1,
            1,
            0,
            1
        ],
        "assignmentDelays": 3,
        "behaviorIncidents": 1,
        "competitions": 0,
        "prevGPA": 5.106264547934719,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 99,
            "counselingRecommended": false,
            "stressCategory": "High"
        }
    },
    {
        "id": "S056",
        "name": "Tarun Mehta",
        "dept": "CIVIL",
        "sem": 1,
        "attendance": [
            90,
            92,
            95,
            96,
            98
        ],
        "marks": [
            80,
            82,
            85,
            88,
            92
        ],
        "lmsLogins": [
            12,
            14,
            15,
            18,
            20
        ],
        "assignmentDelays": 0,
        "behaviorIncidents": 0,
        "competitions": 2,
        "prevGPA": 9.188540172476888,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 21,
            "counselingRecommended": false,
            "stressCategory": "Low"
        }
    },
    {
        "id": "S012",
        "name": "Suresh Bansal",
        "dept": "MECH",
        "sem": 3,
        "attendance": [
            90,
            92,
            95,
            96,
            98
        ],
        "marks": [
            80,
            82,
            85,
            88,
            92
        ],
        "lmsLogins": [
            12,
            14,
            15,
            18,
            20
        ],
        "assignmentDelays": 0,
        "behaviorIncidents": 0,
        "competitions": 0,
        "prevGPA": 9.360596205217881,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 24,
            "counselingRecommended": false,
            "stressCategory": "Low"
        }
    },
    {
        "id": "S196",
        "name": "Arjun Ahuja",
        "dept": "EEE",
        "sem": 4,
        "attendance": [
            65,
            62,
            59,
            58,
            55
        ],
        "marks": [
            45,
            42,
            40,
            35,
            30
        ],
        "lmsLogins": [
            2,
            1,
            1,
            0,
            1
        ],
        "assignmentDelays": 4,
        "behaviorIncidents": 1,
        "competitions": 0,
        "prevGPA": 4.452860210199037,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Pending",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 90,
            "counselingRecommended": false,
            "stressCategory": "High"
        }
    },
    {
        "id": "S123",
        "name": "Sneha Sinha",
        "dept": "IT",
        "sem": 7,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 2,
        "behaviorIncidents": 0,
        "competitions": 1,
        "prevGPA": 7.987839657489022,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 62,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S155",
        "name": "Shaurya Nair",
        "dept": "ECE",
        "sem": 7,
        "attendance": [
            65,
            62,
            59,
            58,
            55
        ],
        "marks": [
            45,
            42,
            40,
            35,
            30
        ],
        "lmsLogins": [
            2,
            1,
            1,
            0,
            1
        ],
        "assignmentDelays": 4,
        "behaviorIncidents": 2,
        "competitions": 0,
        "prevGPA": 5.838720641333196,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 93,
            "counselingRecommended": false,
            "stressCategory": "High"
        }
    },
    {
        "id": "S095",
        "name": "Aria Bose",
        "dept": "ECE",
        "sem": 7,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 2,
        "behaviorIncidents": 1,
        "competitions": 0,
        "prevGPA": 6.779741100542186,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 68,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S105",
        "name": "Siddharth Verma",
        "dept": "CSE",
        "sem": 4,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 2,
        "behaviorIncidents": 1,
        "competitions": 0,
        "prevGPA": 7.41923634660742,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 50,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S143",
        "name": "Aadhya Kumar",
        "dept": "ECE",
        "sem": 6,
        "attendance": [
            65,
            62,
            59,
            58,
            55
        ],
        "marks": [
            45,
            42,
            40,
            35,
            30
        ],
        "lmsLogins": [
            2,
            1,
            1,
            0,
            1
        ],
        "assignmentDelays": 3,
        "behaviorIncidents": 2,
        "competitions": 0,
        "prevGPA": 4.589337286509617,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 94,
            "counselingRecommended": false,
            "stressCategory": "High"
        }
    },
    {
        "id": "S192",
        "name": "Varun Nambiar",
        "dept": "EEE",
        "sem": 4,
        "attendance": [
            65,
            62,
            59,
            58,
            55
        ],
        "marks": [
            45,
            42,
            40,
            35,
            30
        ],
        "lmsLogins": [
            2,
            1,
            1,
            0,
            1
        ],
        "assignmentDelays": 3,
        "behaviorIncidents": 1,
        "competitions": 0,
        "prevGPA": 5.2909039366830894,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Pending",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 81,
            "counselingRecommended": false,
            "stressCategory": "High"
        }
    },
    {
        "id": "S034",
        "name": "Aditi Sinha",
        "dept": "EEE",
        "sem": 2,
        "attendance": [
            90,
            92,
            95,
            96,
            98
        ],
        "marks": [
            80,
            82,
            85,
            88,
            92
        ],
        "lmsLogins": [
            12,
            14,
            15,
            18,
            20
        ],
        "assignmentDelays": 0,
        "behaviorIncidents": 0,
        "competitions": 1,
        "prevGPA": 8.688453145335176,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 22,
            "counselingRecommended": false,
            "stressCategory": "Low"
        }
    },
    {
        "id": "S136",
        "name": "Vihaan Patel",
        "dept": "CIVIL",
        "sem": 4,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 1,
        "behaviorIncidents": 0,
        "competitions": 0,
        "prevGPA": 7.464081773639753,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 51,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S088",
        "name": "Vikas Dixit",
        "dept": "CIVIL",
        "sem": 7,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 2,
        "behaviorIncidents": 1,
        "competitions": 0,
        "prevGPA": 6.849700456701278,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 67,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S119",
        "name": "Kabir Iyer",
        "dept": "ECE",
        "sem": 2,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 2,
        "behaviorIncidents": 0,
        "competitions": 0,
        "prevGPA": 7.615695920831933,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 54,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S142",
        "name": "Megha Yadav",
        "dept": "ECE",
        "sem": 1,
        "attendance": [
            65,
            62,
            59,
            58,
            55
        ],
        "marks": [
            45,
            42,
            40,
            35,
            30
        ],
        "lmsLogins": [
            2,
            1,
            1,
            0,
            1
        ],
        "assignmentDelays": 3,
        "behaviorIncidents": 1,
        "competitions": 0,
        "prevGPA": 4.956893000153023,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 85,
            "counselingRecommended": false,
            "stressCategory": "High"
        }
    },
    {
        "id": "S031",
        "name": "Aarav Chauhan",
        "dept": "EEE",
        "sem": 2,
        "attendance": [
            90,
            92,
            95,
            96,
            98
        ],
        "marks": [
            80,
            82,
            85,
            88,
            92
        ],
        "lmsLogins": [
            12,
            14,
            15,
            18,
            20
        ],
        "assignmentDelays": 0,
        "behaviorIncidents": 0,
        "competitions": 2,
        "prevGPA": 9.426936586954755,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 28,
            "counselingRecommended": false,
            "stressCategory": "Low"
        }
    },
    {
        "id": "S009",
        "name": "Darsh Chauhan",
        "dept": "CSE",
        "sem": 3,
        "attendance": [
            90,
            92,
            95,
            96,
            98
        ],
        "marks": [
            80,
            82,
            85,
            88,
            92
        ],
        "lmsLogins": [
            12,
            14,
            15,
            18,
            20
        ],
        "assignmentDelays": 0,
        "behaviorIncidents": 0,
        "competitions": 0,
        "prevGPA": 9.743714320538134,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 27,
            "counselingRecommended": false,
            "stressCategory": "Low"
        }
    },
    {
        "id": "S063",
        "name": "Avni Pandey",
        "dept": "CIVIL",
        "sem": 4,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 1,
        "behaviorIncidents": 0,
        "competitions": 0,
        "prevGPA": 6.53486871260195,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 64,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S008",
        "name": "Ayaan Garg",
        "dept": "EEE",
        "sem": 1,
        "attendance": [
            90,
            92,
            95,
            96,
            98
        ],
        "marks": [
            80,
            82,
            85,
            88,
            92
        ],
        "lmsLogins": [
            12,
            14,
            15,
            18,
            20
        ],
        "assignmentDelays": 0,
        "behaviorIncidents": 0,
        "competitions": 1,
        "prevGPA": 9.244639841137888,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 27,
            "counselingRecommended": false,
            "stressCategory": "Low"
        }
    },
    {
        "id": "S189",
        "name": "Karan Kumar",
        "dept": "ECE",
        "sem": 1,
        "attendance": [
            65,
            62,
            59,
            58,
            55
        ],
        "marks": [
            45,
            42,
            40,
            35,
            30
        ],
        "lmsLogins": [
            2,
            1,
            1,
            0,
            1
        ],
        "assignmentDelays": 3,
        "behaviorIncidents": 2,
        "competitions": 0,
        "prevGPA": 5.419664730994656,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Pending",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 97,
            "counselingRecommended": false,
            "stressCategory": "High"
        }
    },
    {
        "id": "S043",
        "name": "Vihaan Malhotra",
        "dept": "CSE",
        "sem": 6,
        "attendance": [
            90,
            92,
            95,
            96,
            98
        ],
        "marks": [
            80,
            82,
            85,
            88,
            92
        ],
        "lmsLogins": [
            12,
            14,
            15,
            18,
            20
        ],
        "assignmentDelays": 0,
        "behaviorIncidents": 0,
        "competitions": 0,
        "prevGPA": 9.363127383635913,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 21,
            "counselingRecommended": false,
            "stressCategory": "Low"
        }
    },
    {
        "id": "S120",
        "name": "Saanvi Pandey",
        "dept": "CIVIL",
        "sem": 6,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 1,
        "behaviorIncidents": 0,
        "competitions": 1,
        "prevGPA": 6.745842180554255,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 65,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S027",
        "name": "Pooja Menon",
        "dept": "CSE",
        "sem": 1,
        "attendance": [
            90,
            92,
            95,
            96,
            98
        ],
        "marks": [
            80,
            82,
            85,
            88,
            92
        ],
        "lmsLogins": [
            12,
            14,
            15,
            18,
            20
        ],
        "assignmentDelays": 0,
        "behaviorIncidents": 0,
        "competitions": 0,
        "prevGPA": 8.879765472795993,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 27,
            "counselingRecommended": false,
            "stressCategory": "Low"
        }
    },
    {
        "id": "S042",
        "name": "Reyansh Joshi",
        "dept": "EEE",
        "sem": 8,
        "attendance": [
            90,
            92,
            95,
            96,
            98
        ],
        "marks": [
            80,
            82,
            85,
            88,
            92
        ],
        "lmsLogins": [
            12,
            14,
            15,
            18,
            20
        ],
        "assignmentDelays": 0,
        "behaviorIncidents": 0,
        "competitions": 0,
        "prevGPA": 9.568323744196691,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 22,
            "counselingRecommended": false,
            "stressCategory": "Low"
        }
    },
    {
        "id": "S108",
        "name": "Abhinav Bansal",
        "dept": "CIVIL",
        "sem": 1,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 1,
        "behaviorIncidents": 0,
        "competitions": 1,
        "prevGPA": 7.297104494511241,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 50,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S183",
        "name": "Aditya Garg",
        "dept": "ECE",
        "sem": 2,
        "attendance": [
            65,
            62,
            59,
            58,
            55
        ],
        "marks": [
            45,
            42,
            40,
            35,
            30
        ],
        "lmsLogins": [
            2,
            1,
            1,
            0,
            1
        ],
        "assignmentDelays": 3,
        "behaviorIncidents": 1,
        "competitions": 0,
        "prevGPA": 4.1885078175940205,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Pending",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 84,
            "counselingRecommended": false,
            "stressCategory": "High"
        }
    },
    {
        "id": "S022",
        "name": "Rishi Singh",
        "dept": "CSE",
        "sem": 6,
        "attendance": [
            90,
            92,
            95,
            96,
            98
        ],
        "marks": [
            80,
            82,
            85,
            88,
            92
        ],
        "lmsLogins": [
            12,
            14,
            15,
            18,
            20
        ],
        "assignmentDelays": 0,
        "behaviorIncidents": 0,
        "competitions": 2,
        "prevGPA": 9.65778512100511,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 29,
            "counselingRecommended": false,
            "stressCategory": "Low"
        }
    },
    {
        "id": "S178",
        "name": "Gaurav Arora",
        "dept": "EEE",
        "sem": 3,
        "attendance": [
            65,
            62,
            59,
            58,
            55
        ],
        "marks": [
            45,
            42,
            40,
            35,
            30
        ],
        "lmsLogins": [
            2,
            1,
            1,
            0,
            1
        ],
        "assignmentDelays": 4,
        "behaviorIncidents": 1,
        "competitions": 0,
        "prevGPA": 4.875711089992328,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 88,
            "counselingRecommended": false,
            "stressCategory": "High"
        }
    },
    {
        "id": "S079",
        "name": "Pihu Arora",
        "dept": "IT",
        "sem": 2,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 2,
        "behaviorIncidents": 1,
        "competitions": 0,
        "prevGPA": 6.888195589490707,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 56,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S184",
        "name": "Arjun Chatterjee",
        "dept": "ECE",
        "sem": 8,
        "attendance": [
            65,
            62,
            59,
            58,
            55
        ],
        "marks": [
            45,
            42,
            40,
            35,
            30
        ],
        "lmsLogins": [
            2,
            1,
            1,
            0,
            1
        ],
        "assignmentDelays": 3,
        "behaviorIncidents": 2,
        "competitions": 0,
        "prevGPA": 4.57525244984361,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 81,
            "counselingRecommended": false,
            "stressCategory": "High"
        }
    },
    {
        "id": "S066",
        "name": "Shivani Rao",
        "dept": "CSE",
        "sem": 3,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 1,
        "behaviorIncidents": 0,
        "competitions": 1,
        "prevGPA": 7.570440513193039,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 56,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S074",
        "name": "Sneha Kapoor",
        "dept": "CSE",
        "sem": 2,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 1,
        "behaviorIncidents": 0,
        "competitions": 0,
        "prevGPA": 7.102185445576447,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 60,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S026",
        "name": "Aditi Nair",
        "dept": "ECE",
        "sem": 2,
        "attendance": [
            90,
            92,
            95,
            96,
            98
        ],
        "marks": [
            80,
            82,
            85,
            88,
            92
        ],
        "lmsLogins": [
            12,
            14,
            15,
            18,
            20
        ],
        "assignmentDelays": 0,
        "behaviorIncidents": 0,
        "competitions": 1,
        "prevGPA": 9.471236110503304,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 27,
            "counselingRecommended": false,
            "stressCategory": "Low"
        }
    },
    {
        "id": "S084",
        "name": "Avni Nair",
        "dept": "CIVIL",
        "sem": 7,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 1,
        "behaviorIncidents": 0,
        "competitions": 1,
        "prevGPA": 7.536020209211266,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 65,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S185",
        "name": "Pihu Mishra",
        "dept": "CIVIL",
        "sem": 4,
        "attendance": [
            65,
            62,
            59,
            58,
            55
        ],
        "marks": [
            45,
            42,
            40,
            35,
            30
        ],
        "lmsLogins": [
            2,
            1,
            1,
            0,
            1
        ],
        "assignmentDelays": 3,
        "behaviorIncidents": 1,
        "competitions": 0,
        "prevGPA": 4.282670750802495,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 93,
            "counselingRecommended": false,
            "stressCategory": "High"
        }
    },
    {
        "id": "S160",
        "name": "Suresh Rao",
        "dept": "ECE",
        "sem": 3,
        "attendance": [
            65,
            62,
            59,
            58,
            55
        ],
        "marks": [
            45,
            42,
            40,
            35,
            30
        ],
        "lmsLogins": [
            2,
            1,
            1,
            0,
            1
        ],
        "assignmentDelays": 3,
        "behaviorIncidents": 2,
        "competitions": 0,
        "prevGPA": 5.022522267774378,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 93,
            "counselingRecommended": false,
            "stressCategory": "High"
        }
    },
    {
        "id": "S104",
        "name": "Shivani Yadav",
        "dept": "MECH",
        "sem": 3,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 1,
        "behaviorIncidents": 1,
        "competitions": 0,
        "prevGPA": 7.5458700385641695,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 51,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S057",
        "name": "Kavya Rao",
        "dept": "CSE",
        "sem": 6,
        "attendance": [
            90,
            92,
            95,
            96,
            98
        ],
        "marks": [
            80,
            82,
            85,
            88,
            92
        ],
        "lmsLogins": [
            12,
            14,
            15,
            18,
            20
        ],
        "assignmentDelays": 0,
        "behaviorIncidents": 0,
        "competitions": 0,
        "prevGPA": 9.300433441034803,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 29,
            "counselingRecommended": false,
            "stressCategory": "Low"
        }
    },
    {
        "id": "S156",
        "name": "Diya Malhotra",
        "dept": "CSE",
        "sem": 1,
        "attendance": [
            65,
            62,
            59,
            58,
            55
        ],
        "marks": [
            45,
            42,
            40,
            35,
            30
        ],
        "lmsLogins": [
            2,
            1,
            1,
            0,
            1
        ],
        "assignmentDelays": 5,
        "behaviorIncidents": 2,
        "competitions": 0,
        "prevGPA": 4.994287002959462,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 85,
            "counselingRecommended": false,
            "stressCategory": "High"
        }
    },
    {
        "id": "S170",
        "name": "Varun Nambiar",
        "dept": "ECE",
        "sem": 7,
        "attendance": [
            65,
            62,
            59,
            58,
            55
        ],
        "marks": [
            45,
            42,
            40,
            35,
            30
        ],
        "lmsLogins": [
            2,
            1,
            1,
            0,
            1
        ],
        "assignmentDelays": 4,
        "behaviorIncidents": 1,
        "competitions": 0,
        "prevGPA": 4.925345890559159,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Pending",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 92,
            "counselingRecommended": false,
            "stressCategory": "High"
        }
    },
    {
        "id": "S025",
        "name": "Rahul Reddy",
        "dept": "IT",
        "sem": 6,
        "attendance": [
            90,
            92,
            95,
            96,
            98
        ],
        "marks": [
            80,
            82,
            85,
            88,
            92
        ],
        "lmsLogins": [
            12,
            14,
            15,
            18,
            20
        ],
        "assignmentDelays": 0,
        "behaviorIncidents": 0,
        "competitions": 1,
        "prevGPA": 8.945267181727274,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 20,
            "counselingRecommended": false,
            "stressCategory": "Low"
        }
    },
    {
        "id": "S062",
        "name": "Aditya Desai",
        "dept": "MECH",
        "sem": 3,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 1,
        "behaviorIncidents": 1,
        "competitions": 0,
        "prevGPA": 6.608933931369421,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 51,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S018",
        "name": "Ritika Dixit",
        "dept": "CSE",
        "sem": 4,
        "attendance": [
            90,
            92,
            95,
            96,
            98
        ],
        "marks": [
            80,
            82,
            85,
            88,
            92
        ],
        "lmsLogins": [
            12,
            14,
            15,
            18,
            20
        ],
        "assignmentDelays": 0,
        "behaviorIncidents": 0,
        "competitions": 2,
        "prevGPA": 9.69107425708594,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 29,
            "counselingRecommended": false,
            "stressCategory": "Low"
        }
    },
    {
        "id": "S177",
        "name": "Deepak Shukla",
        "dept": "IT",
        "sem": 1,
        "attendance": [
            65,
            62,
            59,
            58,
            55
        ],
        "marks": [
            45,
            42,
            40,
            35,
            30
        ],
        "lmsLogins": [
            2,
            1,
            1,
            0,
            1
        ],
        "assignmentDelays": 4,
        "behaviorIncidents": 1,
        "competitions": 0,
        "prevGPA": 4.904978823597133,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 98,
            "counselingRecommended": false,
            "stressCategory": "High"
        }
    },
    {
        "id": "S159",
        "name": "Sara Narang",
        "dept": "MECH",
        "sem": 4,
        "attendance": [
            65,
            62,
            59,
            58,
            55
        ],
        "marks": [
            45,
            42,
            40,
            35,
            30
        ],
        "lmsLogins": [
            2,
            1,
            1,
            0,
            1
        ],
        "assignmentDelays": 5,
        "behaviorIncidents": 2,
        "competitions": 0,
        "prevGPA": 5.66201518380019,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 95,
            "counselingRecommended": false,
            "stressCategory": "High"
        }
    },
    {
        "id": "S059",
        "name": "Aditya Rao",
        "dept": "CIVIL",
        "sem": 8,
        "attendance": [
            90,
            92,
            95,
            96,
            98
        ],
        "marks": [
            80,
            82,
            85,
            88,
            92
        ],
        "lmsLogins": [
            12,
            14,
            15,
            18,
            20
        ],
        "assignmentDelays": 0,
        "behaviorIncidents": 0,
        "competitions": 0,
        "prevGPA": 9.236529561529263,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 20,
            "counselingRecommended": false,
            "stressCategory": "Low"
        }
    },
    {
        "id": "S197",
        "name": "Abhinav Ahuja",
        "dept": "ECE",
        "sem": 7,
        "attendance": [
            65,
            62,
            59,
            58,
            55
        ],
        "marks": [
            45,
            42,
            40,
            35,
            30
        ],
        "lmsLogins": [
            2,
            1,
            1,
            0,
            1
        ],
        "assignmentDelays": 4,
        "behaviorIncidents": 1,
        "competitions": 0,
        "prevGPA": 5.39119365273681,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Pending",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 80,
            "counselingRecommended": false,
            "stressCategory": "High"
        }
    },
    {
        "id": "S133",
        "name": "Atharva Rao",
        "dept": "EEE",
        "sem": 5,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 1,
        "behaviorIncidents": 0,
        "competitions": 0,
        "prevGPA": 7.8251781355870715,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 56,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S153",
        "name": "Ayaan Shukla",
        "dept": "EEE",
        "sem": 7,
        "attendance": [
            65,
            62,
            59,
            58,
            55
        ],
        "marks": [
            45,
            42,
            40,
            35,
            30
        ],
        "lmsLogins": [
            2,
            1,
            1,
            0,
            1
        ],
        "assignmentDelays": 5,
        "behaviorIncidents": 2,
        "competitions": 0,
        "prevGPA": 5.763238844341652,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Pending",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 95,
            "counselingRecommended": false,
            "stressCategory": "High"
        }
    },
    {
        "id": "S162",
        "name": "Sai Garg",
        "dept": "ECE",
        "sem": 1,
        "attendance": [
            65,
            62,
            59,
            58,
            55
        ],
        "marks": [
            45,
            42,
            40,
            35,
            30
        ],
        "lmsLogins": [
            2,
            1,
            1,
            0,
            1
        ],
        "assignmentDelays": 3,
        "behaviorIncidents": 2,
        "competitions": 0,
        "prevGPA": 4.120367729623512,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Pending",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 85,
            "counselingRecommended": false,
            "stressCategory": "High"
        }
    },
    {
        "id": "S002",
        "name": "Shruti Verma",
        "dept": "CSE",
        "sem": 4,
        "attendance": [
            90,
            92,
            95,
            96,
            98
        ],
        "marks": [
            80,
            82,
            85,
            88,
            92
        ],
        "lmsLogins": [
            12,
            14,
            15,
            18,
            20
        ],
        "assignmentDelays": 0,
        "behaviorIncidents": 0,
        "competitions": 1,
        "prevGPA": 9.981217928867606,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 29,
            "counselingRecommended": false,
            "stressCategory": "Low"
        }
    },
    {
        "id": "S020",
        "name": "Simran Rao",
        "dept": "MECH",
        "sem": 2,
        "attendance": [
            90,
            92,
            95,
            96,
            98
        ],
        "marks": [
            80,
            82,
            85,
            88,
            92
        ],
        "lmsLogins": [
            12,
            14,
            15,
            18,
            20
        ],
        "assignmentDelays": 0,
        "behaviorIncidents": 0,
        "competitions": 1,
        "prevGPA": 8.86732931659265,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 20,
            "counselingRecommended": false,
            "stressCategory": "Low"
        }
    },
    {
        "id": "S001",
        "name": "Siddharth Sethi",
        "dept": "MECH",
        "sem": 8,
        "attendance": [
            90,
            92,
            95,
            96,
            98
        ],
        "marks": [
            80,
            82,
            85,
            88,
            92
        ],
        "lmsLogins": [
            12,
            14,
            15,
            18,
            20
        ],
        "assignmentDelays": 0,
        "behaviorIncidents": 0,
        "competitions": 1,
        "prevGPA": 8.598955700692207,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 24,
            "counselingRecommended": false,
            "stressCategory": "Low"
        }
    },
    {
        "id": "S164",
        "name": "Karan Rao",
        "dept": "CSE",
        "sem": 4,
        "attendance": [
            65,
            62,
            59,
            58,
            55
        ],
        "marks": [
            45,
            42,
            40,
            35,
            30
        ],
        "lmsLogins": [
            2,
            1,
            1,
            0,
            1
        ],
        "assignmentDelays": 5,
        "behaviorIncidents": 2,
        "competitions": 0,
        "prevGPA": 4.173007356893745,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 97,
            "counselingRecommended": false,
            "stressCategory": "High"
        }
    },
    {
        "id": "S045",
        "name": "Avni Sinha",
        "dept": "IT",
        "sem": 5,
        "attendance": [
            90,
            92,
            95,
            96,
            98
        ],
        "marks": [
            80,
            82,
            85,
            88,
            92
        ],
        "lmsLogins": [
            12,
            14,
            15,
            18,
            20
        ],
        "assignmentDelays": 0,
        "behaviorIncidents": 0,
        "competitions": 2,
        "prevGPA": 9.96304054189819,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 26,
            "counselingRecommended": false,
            "stressCategory": "Low"
        }
    },
    {
        "id": "S081",
        "name": "Vihaan Kumar",
        "dept": "CSE",
        "sem": 8,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 1,
        "behaviorIncidents": 0,
        "competitions": 0,
        "prevGPA": 7.218590665436475,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 64,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S035",
        "name": "Saanvi Bhatia",
        "dept": "ECE",
        "sem": 8,
        "attendance": [
            90,
            92,
            95,
            96,
            98
        ],
        "marks": [
            80,
            82,
            85,
            88,
            92
        ],
        "lmsLogins": [
            12,
            14,
            15,
            18,
            20
        ],
        "assignmentDelays": 0,
        "behaviorIncidents": 0,
        "competitions": 1,
        "prevGPA": 9.172216267340312,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 20,
            "counselingRecommended": false,
            "stressCategory": "Low"
        }
    },
    {
        "id": "S109",
        "name": "Rohan Arora",
        "dept": "IT",
        "sem": 2,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 1,
        "behaviorIncidents": 0,
        "competitions": 0,
        "prevGPA": 7.300194583935984,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 67,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S077",
        "name": "Krishna Patel",
        "dept": "CSE",
        "sem": 1,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 1,
        "behaviorIncidents": 1,
        "competitions": 0,
        "prevGPA": 7.863645744669592,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 65,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S102",
        "name": "Ritik Grover",
        "dept": "IT",
        "sem": 4,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 2,
        "behaviorIncidents": 0,
        "competitions": 0,
        "prevGPA": 7.60338383392301,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 62,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S098",
        "name": "Tarun Sethi",
        "dept": "ECE",
        "sem": 4,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 1,
        "behaviorIncidents": 0,
        "competitions": 0,
        "prevGPA": 6.677962496338983,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 59,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S092",
        "name": "Ramesh Das",
        "dept": "CSE",
        "sem": 6,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 2,
        "behaviorIncidents": 1,
        "competitions": 0,
        "prevGPA": 6.825145516626726,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 58,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S065",
        "name": "Sneha Pandey",
        "dept": "CSE",
        "sem": 5,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 1,
        "behaviorIncidents": 0,
        "competitions": 0,
        "prevGPA": 7.838407789621881,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 53,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S021",
        "name": "Ramesh Malhotra",
        "dept": "MECH",
        "sem": 1,
        "attendance": [
            90,
            92,
            95,
            96,
            98
        ],
        "marks": [
            80,
            82,
            85,
            88,
            92
        ],
        "lmsLogins": [
            12,
            14,
            15,
            18,
            20
        ],
        "assignmentDelays": 0,
        "behaviorIncidents": 0,
        "competitions": 2,
        "prevGPA": 9.418312803010112,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 28,
            "counselingRecommended": false,
            "stressCategory": "Low"
        }
    },
    {
        "id": "S129",
        "name": "Megha Narang",
        "dept": "CSE",
        "sem": 1,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 2,
        "behaviorIncidents": 0,
        "competitions": 1,
        "prevGPA": 7.8421447845531285,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 67,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S127",
        "name": "Shruti Joshi",
        "dept": "EEE",
        "sem": 1,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 1,
        "behaviorIncidents": 1,
        "competitions": 0,
        "prevGPA": 6.55352400061274,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 51,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S149",
        "name": "Nisha Bansal",
        "dept": "EEE",
        "sem": 8,
        "attendance": [
            65,
            62,
            59,
            58,
            55
        ],
        "marks": [
            45,
            42,
            40,
            35,
            30
        ],
        "lmsLogins": [
            2,
            1,
            1,
            0,
            1
        ],
        "assignmentDelays": 5,
        "behaviorIncidents": 1,
        "competitions": 0,
        "prevGPA": 5.209469407085978,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 99,
            "counselingRecommended": false,
            "stressCategory": "High"
        }
    },
    {
        "id": "S171",
        "name": "Riya Grover",
        "dept": "IT",
        "sem": 3,
        "attendance": [
            65,
            62,
            59,
            58,
            55
        ],
        "marks": [
            45,
            42,
            40,
            35,
            30
        ],
        "lmsLogins": [
            2,
            1,
            1,
            0,
            1
        ],
        "assignmentDelays": 4,
        "behaviorIncidents": 1,
        "competitions": 0,
        "prevGPA": 5.3680234583234885,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 98,
            "counselingRecommended": false,
            "stressCategory": "High"
        }
    },
    {
        "id": "S024",
        "name": "Aman Pandey",
        "dept": "ECE",
        "sem": 4,
        "attendance": [
            90,
            92,
            95,
            96,
            98
        ],
        "marks": [
            80,
            82,
            85,
            88,
            92
        ],
        "lmsLogins": [
            12,
            14,
            15,
            18,
            20
        ],
        "assignmentDelays": 0,
        "behaviorIncidents": 0,
        "competitions": 0,
        "prevGPA": 9.766184999731141,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 20,
            "counselingRecommended": false,
            "stressCategory": "Low"
        }
    },
    {
        "id": "S112",
        "name": "Vivaan Dixit",
        "dept": "EEE",
        "sem": 7,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 1,
        "behaviorIncidents": 0,
        "competitions": 0,
        "prevGPA": 7.489104709110036,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 69,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S161",
        "name": "Navya Das",
        "dept": "CSE",
        "sem": 2,
        "attendance": [
            65,
            62,
            59,
            58,
            55
        ],
        "marks": [
            45,
            42,
            40,
            35,
            30
        ],
        "lmsLogins": [
            2,
            1,
            1,
            0,
            1
        ],
        "assignmentDelays": 4,
        "behaviorIncidents": 1,
        "competitions": 0,
        "prevGPA": 5.76426973038319,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Pending",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 86,
            "counselingRecommended": false,
            "stressCategory": "High"
        }
    },
    {
        "id": "S131",
        "name": "Kirti Patel",
        "dept": "MECH",
        "sem": 5,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 2,
        "behaviorIncidents": 0,
        "competitions": 0,
        "prevGPA": 7.972256742521827,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 55,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S176",
        "name": "Aman Yadav",
        "dept": "MECH",
        "sem": 3,
        "attendance": [
            65,
            62,
            59,
            58,
            55
        ],
        "marks": [
            45,
            42,
            40,
            35,
            30
        ],
        "lmsLogins": [
            2,
            1,
            1,
            0,
            1
        ],
        "assignmentDelays": 5,
        "behaviorIncidents": 2,
        "competitions": 0,
        "prevGPA": 5.674443904147804,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Pending",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 88,
            "counselingRecommended": false,
            "stressCategory": "High"
        }
    },
    {
        "id": "S029",
        "name": "Saanvi Bhattacharya",
        "dept": "EEE",
        "sem": 7,
        "attendance": [
            90,
            92,
            95,
            96,
            98
        ],
        "marks": [
            80,
            82,
            85,
            88,
            92
        ],
        "lmsLogins": [
            12,
            14,
            15,
            18,
            20
        ],
        "assignmentDelays": 0,
        "behaviorIncidents": 0,
        "competitions": 0,
        "prevGPA": 9.903692787329806,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 20,
            "counselingRecommended": false,
            "stressCategory": "Low"
        }
    },
    {
        "id": "S130",
        "name": "Aditi Singh",
        "dept": "MECH",
        "sem": 8,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 1,
        "behaviorIncidents": 0,
        "competitions": 1,
        "prevGPA": 6.521112200022463,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 56,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S145",
        "name": "Sai Yadav",
        "dept": "MECH",
        "sem": 4,
        "attendance": [
            65,
            62,
            59,
            58,
            55
        ],
        "marks": [
            45,
            42,
            40,
            35,
            30
        ],
        "lmsLogins": [
            2,
            1,
            1,
            0,
            1
        ],
        "assignmentDelays": 5,
        "behaviorIncidents": 2,
        "competitions": 0,
        "prevGPA": 4.635022647635072,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 96,
            "counselingRecommended": false,
            "stressCategory": "High"
        }
    },
    {
        "id": "S139",
        "name": "Tanvi Nair",
        "dept": "MECH",
        "sem": 8,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 1,
        "behaviorIncidents": 1,
        "competitions": 1,
        "prevGPA": 6.779110362312199,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 64,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S080",
        "name": "Aadhya Mukherjee",
        "dept": "CIVIL",
        "sem": 6,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 1,
        "behaviorIncidents": 1,
        "competitions": 0,
        "prevGPA": 6.720049282907774,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 52,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S097",
        "name": "Ritik Chauhan",
        "dept": "CSE",
        "sem": 2,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 2,
        "behaviorIncidents": 1,
        "competitions": 1,
        "prevGPA": 7.47781172897173,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 55,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S014",
        "name": "Ishaan Chawla",
        "dept": "CSE",
        "sem": 4,
        "attendance": [
            90,
            92,
            95,
            96,
            98
        ],
        "marks": [
            80,
            82,
            85,
            88,
            92
        ],
        "lmsLogins": [
            12,
            14,
            15,
            18,
            20
        ],
        "assignmentDelays": 0,
        "behaviorIncidents": 0,
        "competitions": 2,
        "prevGPA": 9.515531222442526,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 22,
            "counselingRecommended": false,
            "stressCategory": "Low"
        }
    },
    {
        "id": "S101",
        "name": "Kirti Shukla",
        "dept": "MECH",
        "sem": 2,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 2,
        "behaviorIncidents": 0,
        "competitions": 0,
        "prevGPA": 6.635092141659506,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 58,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S037",
        "name": "Deepak Dixit",
        "dept": "EEE",
        "sem": 5,
        "attendance": [
            90,
            92,
            95,
            96,
            98
        ],
        "marks": [
            80,
            82,
            85,
            88,
            92
        ],
        "lmsLogins": [
            12,
            14,
            15,
            18,
            20
        ],
        "assignmentDelays": 0,
        "behaviorIncidents": 0,
        "competitions": 2,
        "prevGPA": 9.761577077875332,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 21,
            "counselingRecommended": false,
            "stressCategory": "Low"
        }
    },
    {
        "id": "S181",
        "name": "Ananya Bhatia",
        "dept": "ECE",
        "sem": 1,
        "attendance": [
            65,
            62,
            59,
            58,
            55
        ],
        "marks": [
            45,
            42,
            40,
            35,
            30
        ],
        "lmsLogins": [
            2,
            1,
            1,
            0,
            1
        ],
        "assignmentDelays": 3,
        "behaviorIncidents": 1,
        "competitions": 0,
        "prevGPA": 4.425850871682545,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 97,
            "counselingRecommended": false,
            "stressCategory": "High"
        }
    },
    {
        "id": "S040",
        "name": "Riya Bhattacharya",
        "dept": "MECH",
        "sem": 5,
        "attendance": [
            90,
            92,
            95,
            96,
            98
        ],
        "marks": [
            80,
            82,
            85,
            88,
            92
        ],
        "lmsLogins": [
            12,
            14,
            15,
            18,
            20
        ],
        "assignmentDelays": 0,
        "behaviorIncidents": 0,
        "competitions": 1,
        "prevGPA": 8.855810192997971,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 23,
            "counselingRecommended": false,
            "stressCategory": "Low"
        }
    },
    {
        "id": "S199",
        "name": "Shaurya Singh",
        "dept": "CSE",
        "sem": 2,
        "attendance": [
            65,
            62,
            59,
            58,
            55
        ],
        "marks": [
            45,
            42,
            40,
            35,
            30
        ],
        "lmsLogins": [
            2,
            1,
            1,
            0,
            1
        ],
        "assignmentDelays": 3,
        "behaviorIncidents": 1,
        "competitions": 0,
        "prevGPA": 4.920640998014796,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 84,
            "counselingRecommended": false,
            "stressCategory": "High"
        }
    },
    {
        "id": "S106",
        "name": "Varun Patel",
        "dept": "MECH",
        "sem": 6,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 1,
        "behaviorIncidents": 0,
        "competitions": 0,
        "prevGPA": 6.755888778640479,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 53,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S186",
        "name": "Simran Pandey",
        "dept": "MECH",
        "sem": 7,
        "attendance": [
            65,
            62,
            59,
            58,
            55
        ],
        "marks": [
            45,
            42,
            40,
            35,
            30
        ],
        "lmsLogins": [
            2,
            1,
            1,
            0,
            1
        ],
        "assignmentDelays": 5,
        "behaviorIncidents": 2,
        "competitions": 0,
        "prevGPA": 4.716185815898819,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Pending",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 96,
            "counselingRecommended": false,
            "stressCategory": "High"
        }
    },
    {
        "id": "S028",
        "name": "Aman Dixit",
        "dept": "CSE",
        "sem": 5,
        "attendance": [
            90,
            92,
            95,
            96,
            98
        ],
        "marks": [
            80,
            82,
            85,
            88,
            92
        ],
        "lmsLogins": [
            12,
            14,
            15,
            18,
            20
        ],
        "assignmentDelays": 0,
        "behaviorIncidents": 0,
        "competitions": 1,
        "prevGPA": 8.519352509224639,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 23,
            "counselingRecommended": false,
            "stressCategory": "Low"
        }
    },
    {
        "id": "S165",
        "name": "Aarti Patel",
        "dept": "CSE",
        "sem": 7,
        "attendance": [
            65,
            62,
            59,
            58,
            55
        ],
        "marks": [
            45,
            42,
            40,
            35,
            30
        ],
        "lmsLogins": [
            2,
            1,
            1,
            0,
            1
        ],
        "assignmentDelays": 5,
        "behaviorIncidents": 2,
        "competitions": 0,
        "prevGPA": 5.8584227300257385,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 91,
            "counselingRecommended": false,
            "stressCategory": "High"
        }
    },
    {
        "id": "S115",
        "name": "Ishaan Pillai",
        "dept": "EEE",
        "sem": 8,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 2,
        "behaviorIncidents": 0,
        "competitions": 0,
        "prevGPA": 7.783823965853525,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 59,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S036",
        "name": "Tanya Mukherjee",
        "dept": "EEE",
        "sem": 2,
        "attendance": [
            90,
            92,
            95,
            96,
            98
        ],
        "marks": [
            80,
            82,
            85,
            88,
            92
        ],
        "lmsLogins": [
            12,
            14,
            15,
            18,
            20
        ],
        "assignmentDelays": 0,
        "behaviorIncidents": 0,
        "competitions": 2,
        "prevGPA": 9.583607523392471,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 21,
            "counselingRecommended": false,
            "stressCategory": "Low"
        }
    },
    {
        "id": "S157",
        "name": "Ananya Bose",
        "dept": "EEE",
        "sem": 2,
        "attendance": [
            65,
            62,
            59,
            58,
            55
        ],
        "marks": [
            45,
            42,
            40,
            35,
            30
        ],
        "lmsLogins": [
            2,
            1,
            1,
            0,
            1
        ],
        "assignmentDelays": 3,
        "behaviorIncidents": 1,
        "competitions": 0,
        "prevGPA": 5.08304059685318,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 87,
            "counselingRecommended": false,
            "stressCategory": "High"
        }
    },
    {
        "id": "S198",
        "name": "Aditi Joshi",
        "dept": "ECE",
        "sem": 6,
        "attendance": [
            65,
            62,
            59,
            58,
            55
        ],
        "marks": [
            45,
            42,
            40,
            35,
            30
        ],
        "lmsLogins": [
            2,
            1,
            1,
            0,
            1
        ],
        "assignmentDelays": 3,
        "behaviorIncidents": 1,
        "competitions": 0,
        "prevGPA": 5.832743325503183,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 84,
            "counselingRecommended": false,
            "stressCategory": "High"
        }
    },
    {
        "id": "S117",
        "name": "Tanya Kumar",
        "dept": "CIVIL",
        "sem": 2,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 2,
        "behaviorIncidents": 1,
        "competitions": 0,
        "prevGPA": 7.176584219223649,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 52,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S090",
        "name": "Suresh Pillai",
        "dept": "CIVIL",
        "sem": 2,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 1,
        "behaviorIncidents": 0,
        "competitions": 0,
        "prevGPA": 7.3424148555414375,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 54,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S114",
        "name": "Ayaan Narang",
        "dept": "CSE",
        "sem": 5,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 1,
        "behaviorIncidents": 1,
        "competitions": 0,
        "prevGPA": 6.931288268101524,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 59,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S016",
        "name": "Kabir Desai",
        "dept": "EEE",
        "sem": 6,
        "attendance": [
            90,
            92,
            95,
            96,
            98
        ],
        "marks": [
            80,
            82,
            85,
            88,
            92
        ],
        "lmsLogins": [
            12,
            14,
            15,
            18,
            20
        ],
        "assignmentDelays": 0,
        "behaviorIncidents": 0,
        "competitions": 2,
        "prevGPA": 9.17795683240083,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 21,
            "counselingRecommended": false,
            "stressCategory": "Low"
        }
    },
    {
        "id": "S004",
        "name": "Nisha Mishra",
        "dept": "CIVIL",
        "sem": 8,
        "attendance": [
            90,
            92,
            95,
            96,
            98
        ],
        "marks": [
            80,
            82,
            85,
            88,
            92
        ],
        "lmsLogins": [
            12,
            14,
            15,
            18,
            20
        ],
        "assignmentDelays": 0,
        "behaviorIncidents": 0,
        "competitions": 0,
        "prevGPA": 8.65765324238959,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 24,
            "counselingRecommended": false,
            "stressCategory": "Low"
        }
    },
    {
        "id": "S166",
        "name": "Shivani Bansal",
        "dept": "EEE",
        "sem": 2,
        "attendance": [
            65,
            62,
            59,
            58,
            55
        ],
        "marks": [
            45,
            42,
            40,
            35,
            30
        ],
        "lmsLogins": [
            2,
            1,
            1,
            0,
            1
        ],
        "assignmentDelays": 3,
        "behaviorIncidents": 1,
        "competitions": 0,
        "prevGPA": 5.753740261293723,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Pending",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 89,
            "counselingRecommended": false,
            "stressCategory": "High"
        }
    },
    {
        "id": "S173",
        "name": "Anuj Mukherjee",
        "dept": "CSE",
        "sem": 5,
        "attendance": [
            65,
            62,
            59,
            58,
            55
        ],
        "marks": [
            45,
            42,
            40,
            35,
            30
        ],
        "lmsLogins": [
            2,
            1,
            1,
            0,
            1
        ],
        "assignmentDelays": 3,
        "behaviorIncidents": 2,
        "competitions": 0,
        "prevGPA": 5.507634704096033,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Pending",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 91,
            "counselingRecommended": false,
            "stressCategory": "High"
        }
    },
    {
        "id": "S087",
        "name": "Sneha Verma",
        "dept": "MECH",
        "sem": 5,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 2,
        "behaviorIncidents": 0,
        "competitions": 0,
        "prevGPA": 7.213698173569138,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 62,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S100",
        "name": "Abhinav Sinha",
        "dept": "EEE",
        "sem": 2,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 1,
        "behaviorIncidents": 0,
        "competitions": 0,
        "prevGPA": 7.187392312641375,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 64,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S067",
        "name": "Ira Dixit",
        "dept": "EEE",
        "sem": 5,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 2,
        "behaviorIncidents": 0,
        "competitions": 0,
        "prevGPA": 7.319681899602029,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 66,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S005",
        "name": "Vivaan Malhotra",
        "dept": "MECH",
        "sem": 7,
        "attendance": [
            90,
            92,
            95,
            96,
            98
        ],
        "marks": [
            80,
            82,
            85,
            88,
            92
        ],
        "lmsLogins": [
            12,
            14,
            15,
            18,
            20
        ],
        "assignmentDelays": 0,
        "behaviorIncidents": 0,
        "competitions": 2,
        "prevGPA": 8.887346592068434,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 24,
            "counselingRecommended": false,
            "stressCategory": "Low"
        }
    },
    {
        "id": "S195",
        "name": "Navya Mishra",
        "dept": "MECH",
        "sem": 4,
        "attendance": [
            65,
            62,
            59,
            58,
            55
        ],
        "marks": [
            45,
            42,
            40,
            35,
            30
        ],
        "lmsLogins": [
            2,
            1,
            1,
            0,
            1
        ],
        "assignmentDelays": 5,
        "behaviorIncidents": 2,
        "competitions": 0,
        "prevGPA": 5.134292580996561,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 95,
            "counselingRecommended": false,
            "stressCategory": "High"
        }
    },
    {
        "id": "S175",
        "name": "Abhinav Verma",
        "dept": "CSE",
        "sem": 1,
        "attendance": [
            65,
            62,
            59,
            58,
            55
        ],
        "marks": [
            45,
            42,
            40,
            35,
            30
        ],
        "lmsLogins": [
            2,
            1,
            1,
            0,
            1
        ],
        "assignmentDelays": 5,
        "behaviorIncidents": 1,
        "competitions": 0,
        "prevGPA": 5.922651777542292,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Pending",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 83,
            "counselingRecommended": false,
            "stressCategory": "High"
        }
    },
    {
        "id": "S118",
        "name": "Sneha Shukla",
        "dept": "EEE",
        "sem": 4,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 2,
        "behaviorIncidents": 0,
        "competitions": 1,
        "prevGPA": 7.814613457810696,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 67,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S124",
        "name": "Reyansh Arora",
        "dept": "MECH",
        "sem": 6,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 2,
        "behaviorIncidents": 0,
        "competitions": 1,
        "prevGPA": 7.518589978906887,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 53,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S076",
        "name": "Shivani Shukla",
        "dept": "CSE",
        "sem": 2,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 2,
        "behaviorIncidents": 1,
        "competitions": 0,
        "prevGPA": 6.811057840434488,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 59,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S003",
        "name": "Ayaan Malhotra",
        "dept": "CSE",
        "sem": 5,
        "attendance": [
            90,
            92,
            95,
            96,
            98
        ],
        "marks": [
            80,
            82,
            85,
            88,
            92
        ],
        "lmsLogins": [
            12,
            14,
            15,
            18,
            20
        ],
        "assignmentDelays": 0,
        "behaviorIncidents": 0,
        "competitions": 2,
        "prevGPA": 8.810079159042951,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 22,
            "counselingRecommended": false,
            "stressCategory": "Low"
        }
    },
    {
        "id": "S064",
        "name": "Pihu Chatterjee",
        "dept": "CSE",
        "sem": 8,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 1,
        "behaviorIncidents": 0,
        "competitions": 0,
        "prevGPA": 7.9610022224546455,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 67,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S061",
        "name": "Aditya Nair",
        "dept": "CSE",
        "sem": 6,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 2,
        "behaviorIncidents": 0,
        "competitions": 0,
        "prevGPA": 7.919155642969814,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 68,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S147",
        "name": "Saanvi Yadav",
        "dept": "EEE",
        "sem": 4,
        "attendance": [
            65,
            62,
            59,
            58,
            55
        ],
        "marks": [
            45,
            42,
            40,
            35,
            30
        ],
        "lmsLogins": [
            2,
            1,
            1,
            0,
            1
        ],
        "assignmentDelays": 4,
        "behaviorIncidents": 1,
        "competitions": 0,
        "prevGPA": 5.730590494478545,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 98,
            "counselingRecommended": false,
            "stressCategory": "High"
        }
    },
    {
        "id": "S110",
        "name": "Deepak Awasti",
        "dept": "CSE",
        "sem": 7,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 1,
        "behaviorIncidents": 1,
        "competitions": 0,
        "prevGPA": 7.86721289914017,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 53,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S030",
        "name": "Sai Gupta",
        "dept": "ECE",
        "sem": 7,
        "attendance": [
            90,
            92,
            95,
            96,
            98
        ],
        "marks": [
            80,
            82,
            85,
            88,
            92
        ],
        "lmsLogins": [
            12,
            14,
            15,
            18,
            20
        ],
        "assignmentDelays": 0,
        "behaviorIncidents": 0,
        "competitions": 0,
        "prevGPA": 9.399082256077616,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 27,
            "counselingRecommended": false,
            "stressCategory": "Low"
        }
    },
    {
        "id": "S086",
        "name": "Arjun Bhattacharya",
        "dept": "ECE",
        "sem": 5,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 1,
        "behaviorIncidents": 1,
        "competitions": 1,
        "prevGPA": 7.61752408831728,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 61,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S182",
        "name": "Tarun Patel",
        "dept": "EEE",
        "sem": 8,
        "attendance": [
            65,
            62,
            59,
            58,
            55
        ],
        "marks": [
            45,
            42,
            40,
            35,
            30
        ],
        "lmsLogins": [
            2,
            1,
            1,
            0,
            1
        ],
        "assignmentDelays": 3,
        "behaviorIncidents": 2,
        "competitions": 0,
        "prevGPA": 4.515790147187321,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 98,
            "counselingRecommended": false,
            "stressCategory": "High"
        }
    },
    {
        "id": "S180",
        "name": "Myra Shukla",
        "dept": "EEE",
        "sem": 6,
        "attendance": [
            65,
            62,
            59,
            58,
            55
        ],
        "marks": [
            45,
            42,
            40,
            35,
            30
        ],
        "lmsLogins": [
            2,
            1,
            1,
            0,
            1
        ],
        "assignmentDelays": 4,
        "behaviorIncidents": 1,
        "competitions": 0,
        "prevGPA": 4.115922486496736,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 90,
            "counselingRecommended": false,
            "stressCategory": "High"
        }
    },
    {
        "id": "S054",
        "name": "Tarun Desai",
        "dept": "ECE",
        "sem": 7,
        "attendance": [
            90,
            92,
            95,
            96,
            98
        ],
        "marks": [
            80,
            82,
            85,
            88,
            92
        ],
        "lmsLogins": [
            12,
            14,
            15,
            18,
            20
        ],
        "assignmentDelays": 0,
        "behaviorIncidents": 0,
        "competitions": 0,
        "prevGPA": 8.758063315704607,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 25,
            "counselingRecommended": false,
            "stressCategory": "Low"
        }
    },
    {
        "id": "S047",
        "name": "Krishna Menon",
        "dept": "ECE",
        "sem": 7,
        "attendance": [
            90,
            92,
            95,
            96,
            98
        ],
        "marks": [
            80,
            82,
            85,
            88,
            92
        ],
        "lmsLogins": [
            12,
            14,
            15,
            18,
            20
        ],
        "assignmentDelays": 0,
        "behaviorIncidents": 0,
        "competitions": 2,
        "prevGPA": 9.128548910858562,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 24,
            "counselingRecommended": false,
            "stressCategory": "Low"
        }
    },
    {
        "id": "S032",
        "name": "Aditya Das",
        "dept": "IT",
        "sem": 2,
        "attendance": [
            90,
            92,
            95,
            96,
            98
        ],
        "marks": [
            80,
            82,
            85,
            88,
            92
        ],
        "lmsLogins": [
            12,
            14,
            15,
            18,
            20
        ],
        "assignmentDelays": 0,
        "behaviorIncidents": 0,
        "competitions": 0,
        "prevGPA": 9.385136073698934,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 27,
            "counselingRecommended": false,
            "stressCategory": "Low"
        }
    },
    {
        "id": "S150",
        "name": "Vikas Bose",
        "dept": "CIVIL",
        "sem": 2,
        "attendance": [
            65,
            62,
            59,
            58,
            55
        ],
        "marks": [
            45,
            42,
            40,
            35,
            30
        ],
        "lmsLogins": [
            2,
            1,
            1,
            0,
            1
        ],
        "assignmentDelays": 3,
        "behaviorIncidents": 2,
        "competitions": 0,
        "prevGPA": 5.21935325729853,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 84,
            "counselingRecommended": false,
            "stressCategory": "High"
        }
    },
    {
        "id": "S082",
        "name": "Reyansh Sinha",
        "dept": "MECH",
        "sem": 5,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 2,
        "behaviorIncidents": 0,
        "competitions": 0,
        "prevGPA": 7.457803082581638,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 58,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S140",
        "name": "Shivani Narang",
        "dept": "ECE",
        "sem": 3,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 2,
        "behaviorIncidents": 0,
        "competitions": 0,
        "prevGPA": 7.0431134103136275,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 64,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S033",
        "name": "Saanvi Menon",
        "dept": "EEE",
        "sem": 8,
        "attendance": [
            90,
            92,
            95,
            96,
            98
        ],
        "marks": [
            80,
            82,
            85,
            88,
            92
        ],
        "lmsLogins": [
            12,
            14,
            15,
            18,
            20
        ],
        "assignmentDelays": 0,
        "behaviorIncidents": 0,
        "competitions": 1,
        "prevGPA": 9.013028666012055,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 29,
            "counselingRecommended": false,
            "stressCategory": "Low"
        }
    },
    {
        "id": "S069",
        "name": "Priya Kohli",
        "dept": "IT",
        "sem": 2,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 1,
        "behaviorIncidents": 0,
        "competitions": 0,
        "prevGPA": 6.77960179564252,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 61,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S137",
        "name": "Shivani Singh",
        "dept": "EEE",
        "sem": 6,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 2,
        "behaviorIncidents": 0,
        "competitions": 1,
        "prevGPA": 6.887394383774506,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 60,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S010",
        "name": "Ananya Bose",
        "dept": "CIVIL",
        "sem": 5,
        "attendance": [
            90,
            92,
            95,
            96,
            98
        ],
        "marks": [
            80,
            82,
            85,
            88,
            92
        ],
        "lmsLogins": [
            12,
            14,
            15,
            18,
            20
        ],
        "assignmentDelays": 0,
        "behaviorIncidents": 0,
        "competitions": 1,
        "prevGPA": 8.756884660313576,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 25,
            "counselingRecommended": false,
            "stressCategory": "Low"
        }
    },
    {
        "id": "S075",
        "name": "Aarti Reddy",
        "dept": "CSE",
        "sem": 4,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 2,
        "behaviorIncidents": 0,
        "competitions": 0,
        "prevGPA": 7.415085121801434,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 66,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S089",
        "name": "Shruti Kumar",
        "dept": "IT",
        "sem": 5,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 2,
        "behaviorIncidents": 0,
        "competitions": 0,
        "prevGPA": 6.867735644568596,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 53,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S187",
        "name": "Rahul Chawla",
        "dept": "CIVIL",
        "sem": 7,
        "attendance": [
            65,
            62,
            59,
            58,
            55
        ],
        "marks": [
            45,
            42,
            40,
            35,
            30
        ],
        "lmsLogins": [
            2,
            1,
            1,
            0,
            1
        ],
        "assignmentDelays": 3,
        "behaviorIncidents": 1,
        "competitions": 0,
        "prevGPA": 5.002766562579439,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Pending",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 99,
            "counselingRecommended": false,
            "stressCategory": "High"
        }
    },
    {
        "id": "S048",
        "name": "Ramesh Kohli",
        "dept": "ECE",
        "sem": 3,
        "attendance": [
            90,
            92,
            95,
            96,
            98
        ],
        "marks": [
            80,
            82,
            85,
            88,
            92
        ],
        "lmsLogins": [
            12,
            14,
            15,
            18,
            20
        ],
        "assignmentDelays": 0,
        "behaviorIncidents": 0,
        "competitions": 2,
        "prevGPA": 8.946599756296907,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 22,
            "counselingRecommended": false,
            "stressCategory": "Low"
        }
    },
    {
        "id": "S058",
        "name": "Arjun Verma",
        "dept": "CSE",
        "sem": 3,
        "attendance": [
            90,
            92,
            95,
            96,
            98
        ],
        "marks": [
            80,
            82,
            85,
            88,
            92
        ],
        "lmsLogins": [
            12,
            14,
            15,
            18,
            20
        ],
        "assignmentDelays": 0,
        "behaviorIncidents": 0,
        "competitions": 0,
        "prevGPA": 9.597131785705699,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 29,
            "counselingRecommended": false,
            "stressCategory": "Low"
        }
    },
    {
        "id": "S011",
        "name": "Aditya Iyer",
        "dept": "CIVIL",
        "sem": 8,
        "attendance": [
            90,
            92,
            95,
            96,
            98
        ],
        "marks": [
            80,
            82,
            85,
            88,
            92
        ],
        "lmsLogins": [
            12,
            14,
            15,
            18,
            20
        ],
        "assignmentDelays": 0,
        "behaviorIncidents": 0,
        "competitions": 2,
        "prevGPA": 8.52265452350999,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 21,
            "counselingRecommended": false,
            "stressCategory": "Low"
        }
    },
    {
        "id": "S132",
        "name": "Rahul Iyer",
        "dept": "IT",
        "sem": 5,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 1,
        "behaviorIncidents": 1,
        "competitions": 0,
        "prevGPA": 7.141907540859653,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 58,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S017",
        "name": "Anuj Kapoor",
        "dept": "MECH",
        "sem": 7,
        "attendance": [
            90,
            92,
            95,
            96,
            98
        ],
        "marks": [
            80,
            82,
            85,
            88,
            92
        ],
        "lmsLogins": [
            12,
            14,
            15,
            18,
            20
        ],
        "assignmentDelays": 0,
        "behaviorIncidents": 0,
        "competitions": 2,
        "prevGPA": 9.827183997569206,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 25,
            "counselingRecommended": false,
            "stressCategory": "Low"
        }
    },
    {
        "id": "S072",
        "name": "Shivani Iyer",
        "dept": "CSE",
        "sem": 5,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 2,
        "behaviorIncidents": 0,
        "competitions": 0,
        "prevGPA": 7.211148375319787,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 64,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S078",
        "name": "Deepak Gupta",
        "dept": "EEE",
        "sem": 2,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 1,
        "behaviorIncidents": 0,
        "competitions": 0,
        "prevGPA": 6.702846870598468,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 55,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S023",
        "name": "Aditya Bose",
        "dept": "IT",
        "sem": 7,
        "attendance": [
            90,
            92,
            95,
            96,
            98
        ],
        "marks": [
            80,
            82,
            85,
            88,
            92
        ],
        "lmsLogins": [
            12,
            14,
            15,
            18,
            20
        ],
        "assignmentDelays": 0,
        "behaviorIncidents": 0,
        "competitions": 1,
        "prevGPA": 8.924095117210095,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 29,
            "counselingRecommended": false,
            "stressCategory": "Low"
        }
    },
    {
        "id": "S107",
        "name": "Diya Sharma",
        "dept": "ECE",
        "sem": 2,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 2,
        "behaviorIncidents": 0,
        "competitions": 0,
        "prevGPA": 7.525320470288641,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 53,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S141",
        "name": "Deepak Reddy",
        "dept": "IT",
        "sem": 5,
        "attendance": [
            65,
            62,
            59,
            58,
            55
        ],
        "marks": [
            45,
            42,
            40,
            35,
            30
        ],
        "lmsLogins": [
            2,
            1,
            1,
            0,
            1
        ],
        "assignmentDelays": 3,
        "behaviorIncidents": 2,
        "competitions": 0,
        "prevGPA": 4.676934476620861,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 93,
            "counselingRecommended": false,
            "stressCategory": "High"
        }
    },
    {
        "id": "S044",
        "name": "Darsh Desai",
        "dept": "CIVIL",
        "sem": 3,
        "attendance": [
            90,
            92,
            95,
            96,
            98
        ],
        "marks": [
            80,
            82,
            85,
            88,
            92
        ],
        "lmsLogins": [
            12,
            14,
            15,
            18,
            20
        ],
        "assignmentDelays": 0,
        "behaviorIncidents": 0,
        "competitions": 1,
        "prevGPA": 9.717327194557603,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 24,
            "counselingRecommended": false,
            "stressCategory": "Low"
        }
    },
    {
        "id": "S006",
        "name": "Siddharth Rao",
        "dept": "MECH",
        "sem": 7,
        "attendance": [
            90,
            92,
            95,
            96,
            98
        ],
        "marks": [
            80,
            82,
            85,
            88,
            92
        ],
        "lmsLogins": [
            12,
            14,
            15,
            18,
            20
        ],
        "assignmentDelays": 0,
        "behaviorIncidents": 0,
        "competitions": 0,
        "prevGPA": 9.411708671617927,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 29,
            "counselingRecommended": false,
            "stressCategory": "Low"
        }
    },
    {
        "id": "S083",
        "name": "Vivaan Grover",
        "dept": "IT",
        "sem": 2,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 1,
        "behaviorIncidents": 0,
        "competitions": 0,
        "prevGPA": 7.458133822117063,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 52,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S168",
        "name": "Aditya Sethi",
        "dept": "EEE",
        "sem": 2,
        "attendance": [
            65,
            62,
            59,
            58,
            55
        ],
        "marks": [
            45,
            42,
            40,
            35,
            30
        ],
        "lmsLogins": [
            2,
            1,
            1,
            0,
            1
        ],
        "assignmentDelays": 5,
        "behaviorIncidents": 1,
        "competitions": 0,
        "prevGPA": 4.4985274113396105,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Pending",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 86,
            "counselingRecommended": false,
            "stressCategory": "High"
        }
    },
    {
        "id": "S091",
        "name": "Vivaan Rao",
        "dept": "MECH",
        "sem": 8,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 2,
        "behaviorIncidents": 0,
        "competitions": 0,
        "prevGPA": 6.661601913337867,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 52,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S134",
        "name": "Reyansh Mishra",
        "dept": "IT",
        "sem": 5,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 1,
        "behaviorIncidents": 0,
        "competitions": 1,
        "prevGPA": 7.430094330746316,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 56,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S169",
        "name": "Ananya Nair",
        "dept": "ECE",
        "sem": 7,
        "attendance": [
            65,
            62,
            59,
            58,
            55
        ],
        "marks": [
            45,
            42,
            40,
            35,
            30
        ],
        "lmsLogins": [
            2,
            1,
            1,
            0,
            1
        ],
        "assignmentDelays": 5,
        "behaviorIncidents": 2,
        "competitions": 0,
        "prevGPA": 5.4877600588740805,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 85,
            "counselingRecommended": false,
            "stressCategory": "High"
        }
    },
    {
        "id": "S055",
        "name": "Pihu Iyer",
        "dept": "EEE",
        "sem": 5,
        "attendance": [
            90,
            92,
            95,
            96,
            98
        ],
        "marks": [
            80,
            82,
            85,
            88,
            92
        ],
        "lmsLogins": [
            12,
            14,
            15,
            18,
            20
        ],
        "assignmentDelays": 0,
        "behaviorIncidents": 0,
        "competitions": 2,
        "prevGPA": 9.224537627895138,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 26,
            "counselingRecommended": false,
            "stressCategory": "Low"
        }
    },
    {
        "id": "S103",
        "name": "Tarun Joshi",
        "dept": "CSE",
        "sem": 4,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 2,
        "behaviorIncidents": 0,
        "competitions": 0,
        "prevGPA": 7.066593638765019,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 54,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S073",
        "name": "Ramesh Dixit",
        "dept": "IT",
        "sem": 1,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 1,
        "behaviorIncidents": 1,
        "competitions": 0,
        "prevGPA": 7.382168350182955,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 68,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S138",
        "name": "Vivaan Nair",
        "dept": "MECH",
        "sem": 6,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 1,
        "behaviorIncidents": 0,
        "competitions": 0,
        "prevGPA": 7.890037379575145,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 50,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S099",
        "name": "Priya Awasti",
        "dept": "CSE",
        "sem": 6,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 1,
        "behaviorIncidents": 0,
        "competitions": 0,
        "prevGPA": 7.389411531327443,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 56,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S190",
        "name": "Ananya Nair",
        "dept": "MECH",
        "sem": 1,
        "attendance": [
            65,
            62,
            59,
            58,
            55
        ],
        "marks": [
            45,
            42,
            40,
            35,
            30
        ],
        "lmsLogins": [
            2,
            1,
            1,
            0,
            1
        ],
        "assignmentDelays": 3,
        "behaviorIncidents": 2,
        "competitions": 0,
        "prevGPA": 4.058808500139027,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 85,
            "counselingRecommended": false,
            "stressCategory": "High"
        }
    },
    {
        "id": "S146",
        "name": "Vivaan Pandey",
        "dept": "ECE",
        "sem": 2,
        "attendance": [
            65,
            62,
            59,
            58,
            55
        ],
        "marks": [
            45,
            42,
            40,
            35,
            30
        ],
        "lmsLogins": [
            2,
            1,
            1,
            0,
            1
        ],
        "assignmentDelays": 4,
        "behaviorIncidents": 2,
        "competitions": 0,
        "prevGPA": 4.939999005547718,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Pending",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 81,
            "counselingRecommended": false,
            "stressCategory": "High"
        }
    },
    {
        "id": "S019",
        "name": "Kabir Kohli",
        "dept": "CSE",
        "sem": 3,
        "attendance": [
            90,
            92,
            95,
            96,
            98
        ],
        "marks": [
            80,
            82,
            85,
            88,
            92
        ],
        "lmsLogins": [
            12,
            14,
            15,
            18,
            20
        ],
        "assignmentDelays": 0,
        "behaviorIncidents": 0,
        "competitions": 0,
        "prevGPA": 9.957724800012446,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 23,
            "counselingRecommended": false,
            "stressCategory": "Low"
        }
    },
    {
        "id": "S194",
        "name": "Megha Ahuja",
        "dept": "MECH",
        "sem": 6,
        "attendance": [
            65,
            62,
            59,
            58,
            55
        ],
        "marks": [
            45,
            42,
            40,
            35,
            30
        ],
        "lmsLogins": [
            2,
            1,
            1,
            0,
            1
        ],
        "assignmentDelays": 5,
        "behaviorIncidents": 1,
        "competitions": 0,
        "prevGPA": 4.459933195353152,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Pending",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 98,
            "counselingRecommended": false,
            "stressCategory": "High"
        }
    },
    {
        "id": "S070",
        "name": "Aria Malhotra",
        "dept": "ECE",
        "sem": 8,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 1,
        "behaviorIncidents": 0,
        "competitions": 0,
        "prevGPA": 7.818894544754462,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 62,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S122",
        "name": "Megha Kapoor",
        "dept": "ECE",
        "sem": 4,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 2,
        "behaviorIncidents": 0,
        "competitions": 1,
        "prevGPA": 6.765734243665573,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 57,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S111",
        "name": "Tanya Chauhan",
        "dept": "CIVIL",
        "sem": 1,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 2,
        "behaviorIncidents": 0,
        "competitions": 1,
        "prevGPA": 7.9135353469938465,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 59,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    },
    {
        "id": "S113",
        "name": "Tanya Iyer",
        "dept": "CIVIL",
        "sem": 1,
        "attendance": [
            85,
            82,
            80,
            78,
            76
        ],
        "marks": [
            68,
            65,
            60,
            58,
            55
        ],
        "lmsLogins": [
            5,
            4,
            6,
            5,
            4
        ],
        "assignmentDelays": 2,
        "behaviorIncidents": 0,
        "competitions": 1,
        "prevGPA": 6.9893858410384,
        "facultyAdvisor": "Assigned Faculty",
        "financial": {
            "feeStatus": "Paid",
            "vulnerabilityScore": 10,
            "scholarshipEligible": false,
            "scholarshipType": "None"
        },
        "socioEconomic": {
            "parentIncomeBracket": ">6L",
            "location": "Urban",
            "firstGenerationLearner": false,
            "genderRiskFlag": false
        },
        "mentalHealth": {
            "behavioralStressIndex": 64,
            "counselingRecommended": false,
            "stressCategory": "Moderate"
        }
    }
];

    return students.map(s => {
        let risk = calculateRiskScore(s);
        s.dropoutRiskWindow = calculateDropoutWindow(risk.score);
        s.riskScore = risk.score;
        return s;
    });
};

const calculateRiskScore = (student) => {
    let att = student.attendance;
    let attScore = att[4] < 75 ? 25 : att[4] < 85 ? 15 : 5;
    let attDeclining = att[2] > att[3] && att[3] > att[4];
    if (attDeclining) attScore = Math.min(attScore + 5, 25);

    let marks = student.marks;
    let mScore = marks[4] < 50 ? 25 : marks[4] < 65 ? 15 : marks[4] < 75 ? 8 : 3;
    let mDeclining = marks[2] > marks[3] && marks[3] > marks[4];
    if (mDeclining) mScore = Math.min(mScore + 5, 25);

    let recentLMS = (student.lmsLogins[3] + student.lmsLogins[4]) / 2;
    let lmsScore = recentLMS < 3 ? 20 : recentLMS < 7 ? 12 : recentLMS < 14 ? 5 : 2;

    let d = student.assignmentDelays;
    let aScore = d === 0 ? 0 : d <= 2 ? 5 : d <= 4 ? 10 : 15;

    let b = student.behaviorIncidents;
    let bScore = b === 0 ? 0 : b === 1 ? 4 : b === 2 ? 7 : 10;

    let cScore = student.competitions === 0 ? 5 : student.competitions === 1 ? 3 : 0;

    let total = Math.min(attScore + mScore + lmsScore + aScore + bScore + cScore, 100);
    let level = total <= 39 ? "SAFE" : total <= 69 ? "MODERATE" : "HIGH";

    let trend = (attDeclining && mDeclining) ? "declining" :
        (!attDeclining && !mDeclining) ? "stable" : "mixed";
    if (total <= 30 && trend === "stable") trend = "improving";

    return {
        score: total, level,
        breakdown: {
            attendance: attScore, marks: mScore, lms: lmsScore,
            assignments: aScore, behavior: bScore, competitions: cScore
        },
        trend
    };
};

const getLevelColor = (level) => { if (level === "SAFE") return "#4DA3FF"; if (level === "MODERATE") return "#F59E0B"; return "#EF4444"; };

const getBadgeStyle = (level) => {
    if (level === "SAFE") return { background: 'rgba(107,191,138,0.12)', border: '1px solid rgba(107,191,138,0.35)', color: '#E5E7EB' };
    if (level === "MODERATE") return { background: 'rgba(242,184,75,0.12)', border: '1px solid rgba(242,184,75,0.35)', color: '#E5E7EB' };
    return { background: 'rgba(228,87,87,0.12)', border: '1px solid rgba(228,87,87,0.35)', color: '#E5E7EB' };
};
const HeaderUnderline = ({ title }) => (
    <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-wide">{title}</h2>
        <div className="header-underline"></div>
    </div>
);

const Card = ({ children, tier = 1, className = "", delay = 0, onClick, title }) => (
    <div
        onClick={onClick}
        title={title}
        className={`card-tier-${tier} hover-lift p-5 animate-fade-up ${className} ${onClick ? 'cursor-pointer' : ''}`}
        style={{ animationDelay: `${delay}s` }}
    >
        {children}
    </div>
);

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white/90 dark:bg-black/85 border border-slate-200/60 dark:border-white/5 backdrop-blur-md rounded-lg p-3 text-gray-900 dark:text-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] min-w-[140px] pointer-events-none transition-colors duration-300">
                <p className="font-bold text-gray-900 dark:text-white mb-2 text-xs tracking-tight">{label}</p>
                <div className="space-y-1.5">
                    {payload.map((entry, index) => (
                        <div key={`item-${index}`} className="flex items-center justify-between text-xs gap-4">
                            <div className="flex items-center gap-1.5">
                                <div className="w-2 h-2 rounded-full shadow-sm" style={{ backgroundColor: entry.color || entry.fill }}></div>
                                <span className="text-gray-500 dark:text-gray-400 font-medium">{entry.name || 'Value'}</span>
                            </div>
                            <span className="font-bold text-gray-900 dark:text-white">{entry.value}</span>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
    return null;
};

const Footer = () => (
    <div style={{
        borderTop: '1px solid rgba(77,163,255,0.09)',
        background: 'var(--glass-bg-01)',
        padding: '14px 32px',
        textAlign: 'center',
        marginTop: 48,
        fontFamily: 'DM Sans',
        fontSize: 11,
        color: 'var(--text-muted-25)',
        letterSpacing: '0.3px'
    }}>
        <div>HackSpace © 2026</div>
        <div style={{ fontSize: 9, opacity: 0.8, marginTop: 2 }}>Academic Stability Engine</div>
    </div>
);


const ResetPassword = ({ onBack }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [pwdError, setPwdError] = useState('');

    const validatePassword = (pwd) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!regex.test(pwd)) {
            setPwdError("Password must contain at least 8 characters including uppercase, lowercase, number and special symbol.");
            return false;
        }
        setPwdError("");
        return true;
    };

    const handleReset = (e) => {
        e.preventDefault();
        if (validatePassword(password) && password === confirmPassword) {
            console.log("Password reset successful");
            onBack();
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center relative">
            <div className="card-tier-3 p-10 w-full max-w-md animate-fade-up z-10 flex flex-col items-center shadow-2xl relative">
                <h2 className="text-2xl text-gray-900 dark:text-white font-bold mb-6 text-center">Reset Password</h2>
                <form onSubmit={handleReset} className="w-full">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email Address"
                        className="w-full bg-[#0B0B0C]/50 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white p-3 rounded-xl mb-4 focus:ring-2 mt-4 transition-colors focus:border-[#4DA3FF]/30 outline-none"
                        required
                    />
                    <div className="relative mb-4">
                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                validatePassword(e.target.value);
                            }}
                            placeholder="New Password"
                            className="w-full bg-[#0B0B0C]/50 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white p-3 rounded-xl pr-10 focus:ring-2 transition-colors focus:border-[#4DA3FF]/30 outline-none"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-3.5 text-slate-400 hover:text-gray-900 dark:text-white transition"
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                        {pwdError && <p className="text-red-400 text-xs mt-1">{pwdError}</p>}
                    </div>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm New Password"
                        className="w-full bg-[#0B0B0C]/50 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white p-3 rounded-xl mb-6 transition-colors focus:border-[#4DA3FF]/30 outline-none"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full btn-gradient py-3 rounded-xl font-bold text-lg mb-3"
                    >
                        Update Password
                    </button>
                    <button
                        type="button"
                        className="w-full bg-slate-700 hover:bg-slate-600 text-gray-900 dark:text-white font-bold py-3 px-4 rounded-xl transition border border-slate-600"
                        onClick={onBack}
                    >
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    );
};

const LoginPage = ({ onLogin, onForgotPassword }) => {
    const [role, setRole] = useState("Admin");
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [pwdError, setPwdError] = useState("");

    const validatePassword = (pwd) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!regex.test(pwd)) {
            setPwdError("Password must contain at least 8 characters including uppercase, lowercase, number and special symbol.");
            return false;
        }
        setPwdError("");
        return true;
    };

    return (
        <div className="min-h-screen flex items-center justify-center relative">
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                {[...Array(12)].map((_, i) => (
                    <div key={i} className="absolute rounded-full subtle-particles" style={{
                        width: `${Math.random() * 4 + 2}px`,
                        height: `${Math.random() * 4 + 2}px`,
                        backgroundColor: Math.random() > 0.5 ? '#4DA3FF' : '#8CC7FF',
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        opacity: 0.3 * 0.85,
                        animation: `float ${Math.random() * 4 + 4}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 2}s`
                    }} />
                ))}
            </div>

            <div className="card-tier-3 p-10 w-full max-w-md animate-fade-up z-10 flex flex-col items-center shadow-2xl relative">
                <div className="absolute -top-12 w-24 h-24 bg-[#4DA3FF]/[0.18] rounded-full blur-3xl"></div>
                <HackSpaceLogo size="large" variant="full" className="mb-8 relative z-10" />

                <div className="flex w-full bg-white/5 p-1 rounded-xl mb-6 relative z-10">
                    {["Admin", "Faculty", "Parent", "Student"].map(r => (
                        <button
                            key={r}
                            onClick={() => setRole(r)}
                            className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ${role === r ? "bg-gradient-to-r from-[#4DA3FF] to-[#8CC7FF] text-gray-900 dark:text-white shadow-lg" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-900 dark:text-white"
                                }`}
                        >
                            {r}
                        </button>
                    ))}
                </div>

                <div className="w-full space-y-4 mb-8 relative z-10">
                    <div>
                        <input type="text" placeholder="Email Address"
                            className="w-full bg-[#0B0B0C]/50 border border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-[#4DA3FF]/30 transition-colors"
                            defaultValue={`demo@academiq.edu`}
                        />
                    </div>
                    <div className="relative">
                        <input type={showPassword ? "text" : "password"} placeholder="Password"
                            className="w-full bg-[#0B0B0C]/50 border border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 flex items-center pr-10 focus:outline-none focus:border-[#4DA3FF]/30 transition-colors"
                            value={password}
                            onChange={(e) => { setPassword(e.target.value); validatePassword(e.target.value); }}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-3.5 text-slate-400 hover:text-gray-900 dark:text-white transition"
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                        {pwdError && <p className="text-red-400 text-xs mt-1">{pwdError}</p>}
                    </div>
                </div>

                <button
                    onClick={() => { if (!pwdError && password) onLogin(role.toLowerCase()); }}
                    disabled={!!pwdError || !password}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.transition = 'all 0.25s ease'; e.currentTarget.style.boxShadow = '0 6px 18px rgba(77,163,255,0.16)'; }} onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0px)'; e.currentTarget.style.boxShadow = 'none'; }} className={`w-full ${pwdError || !password ? 'bg-gray-600 opacity-60' : 'btn-gradient'} py-3 rounded-xl font-bold text-lg flex items-center justify-center gap-2 relative z-10 mb-3`}
                >
                    Login <ChevronRight className="w-5 h-5" />
                </button>
                <button
                    onClick={() => { }}
                    className="w-full bg-slate-700 hover:bg-slate-600 text-gray-900 dark:text-white font-bold py-3 px-4 rounded-xl transition border border-slate-600 z-10 relative mb-2"
                >
                    Sign Up
                </button>
                <button
                    type="button"
                    className="text-sm text-blue-400 hover:text-blue-300 mt-2 text-center transition z-10 relative"
                    onClick={onForgotPassword}
                >
                    Forgot Password?
                </button>
            </div>

            <div className="absolute bottom-8 text-sm text-gray-500 font-medium tracking-widest uppercase">
                Powered by Predictive AI
            </div>
        </div>
    );
};

const AdminDashboard = ({ students, interventions, onNavigate, currentStudentId, animatedStats, adminLoading, can, role, openStudentDetail }) => {
    const [loading, setLoading] = useState(false);
    const [expandedAction, setExpandedAction] = useState(null);
    const [demoPanelExpanded, setDemoPanelExpanded] = useState(true);

    const handleSync = async () => {
        setLoading(true);
        try {
            const formattedData = students.map(s => {
                // Approximate mapping to required AI columns
                return {
                    "student_id": s.id,
                    "student_name": s.name,
                    "Age at enrollment": 18 + (s.sem / 2),
                    "Gender": s.socioEconomic?.genderRiskFlag ? 1 : 0,
                    "Tuition fees up to date": s.financial?.feeStatus === "Paid" ? 1 : 0,
                    "Scholarship holder": s.financial?.scholarshipEligible ? 1 : 0,
                    "Debtor": s.financial?.feeStatus === "Pending" ? 1 : 0,
                    "Curricular units 1st sem (enrolled)": 6,
                    "Curricular units 1st sem (evaluations)": 6,
                    "Curricular units 1st sem (approved)": s.marks[4] > 50 ? 6 : 4,
                    "Previous qualification": 1,
                    "Application mode": 1,
                    "attendance": s.attendance[4],
                    "internal_1": s.marks[3] / 5, // Normalize 100-scale to 20-scale
                    "internal_2": s.marks[4] / 5
                };
            });

            const response = await fetch("http://127.0.0.1:8000/predict_and_sync", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formattedData)
            });

            if (response.ok) {
                const result = await response.json();
                alert(`Success! Checked AI predictions and synced ${result.records_synced || formattedData.length} active students to Supabase.`);
            } else {
                alert("Database Sync Failed. Check the backend connection.");
            }
        } catch (err) {
            alert("Backend Connection Error. Please ensure your Python FastAPI server (uvicorn) is running.");
        } finally {
            setLoading(false);
        }
    };

    const data = useMemo(() => {
        let risks = students.map(s => calculateRiskScore(s));
        let high = risks.filter(r => r.level === "HIGH").length;
        let moderate = risks.filter(r => r.level === "MODERATE").length;
        let safe = risks.filter(r => r.level === "SAFE").length;
        let avg = Math.round(risks.reduce((acc, r) => acc + r.score, 0) / risks.length);

        let depts = {};
        students.forEach((s, i) => {
            depts[s.dept] = depts[s.dept] || { name: s.dept, score: 0, count: 0 };
            depts[s.dept].score += risks[i].score;
            depts[s.dept].count += 1;
        });
        let deptChart = Object.values(depts).map(d => ({ name: d.name, limit: Math.round(d.score / d.count) }));

        const dropoutData = [
            { name: 'Aug', prob: 2 }, { name: 'Sep', prob: 4 }, { name: 'Oct', prob: 7 },
            { name: 'Nov', prob: 12 }, { name: 'Dec', prob: 18 }, { name: 'Jan', prob: 15 }
        ];

        const pieData = [
            { name: 'Safe', value: safe, color: '#4DA3FF' },
            { name: 'Moderate', value: moderate, color: '#F59E0B' },
            { name: 'High Risk', value: high, color: '#EF4444' }
        ];

        const monthlyAtt = [
            { week: "Week 1", value: 80 },
            { week: "Week 2", value: 68 },
            { week: "Week 3", value: 74 },
            { week: "Week 4", value: 64 }
        ];

        // Dynamic Recommended Actions Today lists
        const needingParentList = students.filter(s => {
            const r = calculateRiskScore(s);
            return r.level === "HIGH" || s.attendance[s.attendance.length - 1] < 75;
        });

        const requiringMentorList = students.filter(s => {
            const r = calculateRiskScore(s);
            return (r.level === "HIGH" || r.level === "MODERATE") && s.assignmentDelays >= 3;
        });

        const requiringRemedialList = students.filter(s => s.marks[s.marks.length - 1] < 55);

        const immediateAttentionList = students.filter(s => {
            const r = calculateRiskScore(s);
            return r.score >= 70;
        });

        // Compute Department Intelligence metrics
        let deptMetrics = {};
        students.forEach((s, idx) => {
            const dept = s.dept || "Unknown";
            const r = risks[idx];
            const score = r.score;

            const attStart = s.attendance && s.attendance.length ? s.attendance[0] : 0;
            const attEnd = s.attendance && s.attendance.length ? s.attendance[s.attendance.length - 1] : 0;
            const marksStart = s.marks && s.marks.length ? s.marks[0] : 0;
            const marksEnd = s.marks && s.marks.length ? s.marks[s.marks.length - 1] : 0;

            const attGrowth = attEnd - attStart;
            const marksGrowth = marksEnd - marksStart;
            const studentGrowth = (attGrowth + marksGrowth) / 2;
            const studentCombined = (attEnd + marksEnd) / 2;

            if (!deptMetrics[dept]) {
                deptMetrics[dept] = {
                    name: dept,
                    totalRiskScore: 0,
                    totalCombined: 0,
                    totalGrowth: 0,
                    studentCount: 0,
                    safeCount: 0,
                    moderateCount: 0,
                    highCount: 0
                };
            }

            deptMetrics[dept].totalRiskScore += score;
            deptMetrics[dept].totalCombined += studentCombined;
            deptMetrics[dept].totalGrowth += studentGrowth;
            deptMetrics[dept].studentCount += 1;

            if (r.level === "SAFE") deptMetrics[dept].safeCount += 1;
            else if (r.level === "MODERATE") deptMetrics[dept].moderateCount += 1;
            else if (r.level === "HIGH") deptMetrics[dept].highCount += 1;
        });

        let highestRiskDept = { name: "N/A", value: 0 };
        let bestPerformingDept = { name: "N/A", value: 0 };
        let mostImprovedDept = { name: "N/A", value: 0 };

        const deptAverages = Object.values(deptMetrics).map(d => {
            const avgRisk = d.studentCount > 0 ? Math.round(d.totalRiskScore / d.studentCount) : 0;
            const avgCombined = d.studentCount > 0 ? Math.round(d.totalCombined / d.studentCount) : 0;
            const avgGrowth = d.studentCount > 0 ? Number((d.totalGrowth / d.studentCount).toFixed(1)) : 0;

            return {
                name: d.name,
                avgRisk,
                avgCombined,
                avgGrowth,
                safeCount: d.safeCount,
                moderateCount: d.moderateCount,
                highCount: d.highCount,
                studentCount: d.studentCount
            };
        });

        if (deptAverages.length > 0) {
            const sortedByRisk = [...deptAverages].sort((a, b) => b.avgRisk - a.avgRisk);
            highestRiskDept = { name: sortedByRisk[0].name, value: sortedByRisk[0].avgRisk };

            const sortedByPerformance = [...deptAverages].sort((a, b) => b.avgCombined - a.avgCombined);
            bestPerformingDept = { name: sortedByPerformance[0].name, value: sortedByPerformance[0].avgCombined };

            const sortedByImprovement = [...deptAverages].sort((a, b) => b.avgGrowth - a.avgGrowth);
            mostImprovedDept = { name: sortedByImprovement[0].name, value: sortedByImprovement[0].avgGrowth };
        }

        // Mock / dynamic Demo Mode KPIs
        const savedCount = students.filter(s => {
            const score = calculateRiskScore(s).score;
            return score < 50 && (s.attendance[s.attendance.length - 1] > s.attendance[0] || s.marks[s.marks.length - 1] > s.marks[0]);
        }).length;

        const activeInterventionsCount = interventions ? interventions.filter(i => i.status !== "Resolved").length : 6;

        const recoveryCount = students.filter(s => s.marks[s.marks.length - 1] > s.marks[0]).length;
        const academicRecoveryRate = Math.round((recoveryCount / students.length) * 100);

        const mentoredCount = students.filter(s => s.assignmentDelays >= 2).length;
        const successCount = students.filter(s => s.assignmentDelays >= 2 && calculateRiskScore(s).score < 70).length;
        const mentorshipSuccessRate = Math.round((successCount / (mentoredCount || 1)) * 100);

        const parentEngagementRate = Math.round((students.filter(s => s.attendance[s.attendance.length - 1] >= 75).length / students.length) * 100);

        const dropoutPreventionRate = Number((100 - (high / students.length) * 100).toFixed(1));

        return { 
            high, moderate, safe, avg, deptChart, dropoutData, pieData, monthlyAtt,
            needingParentList, requiringMentorList, requiringRemedialList, immediateAttentionList,
            deptAverages, highestRiskDept, bestPerformingDept, mostImprovedDept,
            savedCount, activeInterventionsCount, academicRecoveryRate, mentorshipSuccessRate, parentEngagementRate, dropoutPreventionRate
        };
    }, [students, interventions]);

    return (
        <div className="p-6 animate-page max-w-7xl mx-auto">
            {can('canViewFullAnalytics') ? (
                <>
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold tracking-wide">Institution Overview</h2>
                        <button
                            onClick={handleSync}
                            disabled={loading}
                            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${loading ? 'bg-gray-600 text-gray-600 dark:text-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-[#4DA3FF] to-[#8CC7FF] text-gray-900 dark:text-white hover:shadow-lg hover:-translate-y-0.5'}`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2v6h-6"></path><path d="M3 12a9 9 0 0 1 15-6.7L21 8"></path><path d="M3 22v-6h6"></path><path d="M21 12a9 9 0 0 1-15 6.7L3 16"></path></svg>
                            {loading ? "Syncing AI Data..." : "Refresh App & Sync Backend"}
                        </button>
                    </div>
                    <div className="header-underline mb-6 -mt-4"></div>

                    <div className="flex flex-wrap md:flex-nowrap gap-4 mb-6">
                        <Card delay={0.1} className="w-full md:w-1/3 min-w-[200px]" style={{
                            animationName: 'staggerFadeUp',
                            animationDuration: '260ms',
                            animationTimingFunction: 'ease-out',
                            animationFillMode: 'both',
                            animationDelay: '0s'
                        }}>
                            <div className="text-gray-600 dark:text-gray-400 text-sm font-semibold mb-1 flex justify-between items-center">
                                <span className="flex items-center gap-2">
                                    <Users className="w-4 h-4 text-[#4DA3FF]" /> Total Students
                                </span>
                                <span className="text-xs font-bold text-green-500 flex items-center gap-0.5">↑ +1.2%</span>
                            </div>
                            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{students.length}</div>
                            <div className="text-[10px] text-gray-500 mt-2 font-medium border-t border-gray-200 dark:border-white/5 pt-2 flex items-center gap-1">
                                <Zap className="w-3 h-3 text-[#4DA3FF]" />
                                AI: ECE department registers the highest proportion of students in elevated risk categories.
                            </div>
                        </Card>
 
                        <Card delay={0.2} className="w-full md:w-1/4 risk-pulse relative overflow-hidden bg-[#EF4444]/5 border-[#EF4444]/20" style={{
                            animationName: 'staggerFadeUp',
                            animationDuration: '260ms',
                            animationTimingFunction: 'ease-out',
                            animationFillMode: 'both',
                            animationDelay: '0.06s'
                        }}
                            onClick={() => onNavigate('faculty')}>
                            <div className="absolute -right-4 -top-4 w-16 h-16 bg-[#EF4444]/20 rounded-full blur-xl"></div>
                            <div className="text-gray-600 dark:text-gray-400 text-sm font-semibold mb-1 flex justify-between items-center">
                                <span className="flex items-center gap-2">
                                    <AlertTriangle className="w-4 h-4 text-[#EF4444]" /> High Risk Count
                                </span>
                                <span className="text-xs font-bold text-[#EF4444] flex items-center gap-0.5">↑ +2</span>
                            </div>
                            <div className="text-4xl font-bold text-[#EF4444]">{data.high}</div>
                            <div className="text-[10px] text-[#EF4444] mt-2 font-medium border-t border-gray-200 dark:border-white/5 pt-2 flex items-center gap-1">
                                <Zap className="w-3 h-3 text-[#EF4444]" />
                                AI: Cohort analysis indicates attendance under 75% correlates with most academic stability alerts.
                            </div>
                        </Card>
 
                        <Card delay={0.3} className="w-full md:w-1/5 bg-[#F59E0B]/5 border-[#F59E0B]/20" style={{
                            animationName: 'staggerFadeUp',
                            animationDuration: '260ms',
                            animationTimingFunction: 'ease-out',
                            animationFillMode: 'both',
                            animationDelay: '0.12s'
                        }}
                            onClick={() => onNavigate('interventions')}>
                            <div className="text-gray-600 dark:text-gray-400 text-sm font-semibold mb-1 flex justify-between items-center">
                                <span className="flex items-center gap-2">
                                    <Activity className="w-4 h-4 text-[#4DA3FF]" /> Interventions
                                </span>
                                <span className="text-xs font-bold text-green-500 flex items-center gap-0.5">↑ +3</span>
                            </div>
                            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">8</div>
                            <div className="text-[10px] text-gray-500 mt-2 font-medium border-t border-gray-200 dark:border-white/5 pt-2 flex items-center gap-1">
                                <Zap className="w-3 h-3 text-[#4DA3FF]" />
                                AI: Proactive parent notifications correspond to a 12% improvement in academic intervention completion.
                            </div>
                        </Card>
 
                        <Card delay={0.4} className="w-full md:w-1/4" style={{
                            animationName: 'staggerFadeUp',
                            animationDuration: '260ms',
                            animationTimingFunction: 'ease-out',
                            animationFillMode: 'both',
                            animationDelay: '0.18s'
                        }}>
                            <div className="text-gray-600 dark:text-gray-400 text-sm font-semibold mb-1 flex justify-between items-center">
                                <span className="flex items-center gap-2">
                                    <Zap className="w-4 h-4 text-[#8CC7FF]" /> Avg Risk Score
                                </span>
                                <span className="text-xs font-bold text-green-500 flex items-center gap-0.5">↓ -1.5%</span>
                            </div>
                            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{data.avg}</div>
                            <div className="text-[10px] text-gray-500 mt-2 font-medium border-t border-gray-200 dark:border-white/5 pt-2 flex items-center gap-1">
                                <Zap className="w-3 h-3 text-[#4DA3FF]" />
                                AI: Cohort risk indices declined 4% following implementation of structured remedial support.
                            </div>
                        </Card>
                    </div>

                    {/* Executive Insights Center Panel */}
                    <div style={{ background: 'var(--glass-bg-02)', border: '1px solid rgba(77,163,255,0.18)', backdropFilter: 'blur(20px)', borderRadius: 20, padding: 20, marginBottom: 24 }} className="animate-fade-up">
                        <div className="flex justify-between items-center">
                            <div style={{ fontFamily: 'Syne', fontSize: 18, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 8 }}>
                                <Zap className="w-5 h-5 text-[#F59E0B] animate-pulse" />
                                Executive Insights Center
                            </div>
                            <button
                                onClick={() => setDemoPanelExpanded(!demoPanelExpanded)}
                                className="text-xs text-[#4DA3FF] hover:underline flex items-center gap-1 font-semibold"
                            >
                                {demoPanelExpanded ? "Hide Insights" : "Show Insights"}
                                <ChevronRight className={`w-3.5 h-3.5 transform transition-transform ${demoPanelExpanded ? 'rotate-90' : ''}`} />
                            </button>
                        </div>
                        <div style={{ height: 2, borderRadius: 1, background: 'linear-gradient(90deg, #F59E0B, transparent)', width: 0, animation: 'expandLine 1s 0.2s ease forwards', marginTop: 8, marginBottom: 16 }}></div>

                        {demoPanelExpanded && (
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 animate-fade-up">
                                {/* KPI 1: Saved Students */}
                                <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col justify-between hover:bg-white/10 transition-all hover:scale-105 duration-200">
                                    <div>
                                        <div className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Saved Students</div>
                                        <div className="text-2xl font-black text-green-400 mt-1">{data.savedCount}</div>
                                    </div>
                                    <div className="text-[9px] text-gray-500 mt-2">Moved from HIGH/MODERATE → SAFE</div>
                                </div>

                                {/* KPI 2: Prevention Effectiveness */}
                                <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col justify-between hover:bg-white/10 transition-all hover:scale-105 duration-200">
                                    <div>
                                        <div className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Prevention Rate</div>
                                        <div className="text-2xl font-black text-[#4DA3FF] mt-1">{data.dropoutPreventionRate}%</div>
                                    </div>
                                    <div className="text-[9px] text-gray-500 mt-2">Institution dropout prevention</div>
                                </div>

                                {/* KPI 3: Active Interventions */}
                                <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col justify-between hover:bg-white/10 transition-all hover:scale-105 duration-200">
                                    <div>
                                        <div className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Active Interventions</div>
                                        <div className="text-2xl font-black text-[#F59E0B] mt-1">{data.activeInterventionsCount}</div>
                                    </div>
                                    <div className="text-[9px] text-gray-500 mt-2">Resolutions in progress</div>
                                </div>

                                {/* KPI 4: Parent Engagement */}
                                <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col justify-between hover:bg-white/10 transition-all hover:scale-105 duration-200">
                                    <div>
                                        <div className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Parent Engagement</div>
                                        <div className="text-2xl font-black text-[#8CC7FF] mt-1">{data.parentEngagementRate}%</div>
                                    </div>
                                    <div className="text-[9px] text-gray-500 mt-2">Notified parent feedback rate</div>
                                </div>

                                {/* KPI 5: Academic Recovery */}
                                <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col justify-between hover:bg-white/10 transition-all hover:scale-105 duration-200">
                                    <div>
                                        <div className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Academic Recovery</div>
                                        <div className="text-2xl font-black text-green-400 mt-1">{data.academicRecoveryRate}%</div>
                                    </div>
                                    <div className="text-[9px] text-gray-500 mt-2">Students showing grade growth</div>
                                </div>

                                {/* KPI 6: Mentorship Success */}
                                <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col justify-between hover:bg-white/10 transition-all hover:scale-105 duration-200">
                                    <div>
                                        <div className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Mentor Success</div>
                                        <div className="text-2xl font-black text-[#4DA3FF] mt-1">{data.mentorshipSuccessRate}%</div>
                                    </div>
                                    <div className="text-[9px] text-gray-500 mt-2">Mentored student stabilization</div>
                                </div>
                            </div>
                        )}
                    </div>

                    {role === "ADMIN" && (
                        <Card className="w-full mb-6 px-6" style={{ background: 'var(--glass-bg-04)', border: '1px solid var(--glass-border-08)', borderRadius: 14, padding: 20 }}>
                            <div className="flex flex-row justify-between items-start mb-4 px-2">
                                <h3 className="text-lg font-semibold">Monthly Attendance Trend (All Students)</h3>
                                <div style={{ color: '#EF4444', fontSize: '12px' }}>
                                    ↓ Attendance dropped 16% this month
                                </div>
                            </div>
                            <ResponsiveContainer width="100%" height={260}>
                                <LineChart data={data.monthlyAtt} margin={{ top: 20, right: 20, left: 30, bottom: 20 }}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="var(--glass-border-08)" vertical={true} />
                                    <XAxis 
                                        dataKey="week" 
                                        stroke="var(--text-normal-8)" 
                                        height={55}
                                        padding={{ left: 35, right: 35 }}
                                        tick={{ fill: 'var(--text-muted-4)', fontSize: 11, fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }} 
                                        tickMargin={8} 
                                        axisLine={{ stroke: 'var(--text-normal-8)', strokeWidth: 2 }} 
                                        tickLine={{ stroke: 'var(--text-normal-8)', strokeWidth: 2 }} 
                                        label={{ value: 'Academic Weeks', position: 'insideBottom', offset: 0, fill: 'var(--text-normal-9)', fontSize: 11, fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }} 
                                    />
                                    <YAxis 
                                        domain={[60, 100]} 
                                        ticks={[60, 65, 70, 75, 80, 85, 90, 95, 100]}
                                        stroke="var(--text-normal-8)" 
                                        width={65}
                                        tick={{ fill: 'var(--text-muted-4)', fontSize: 11, fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }} 
                                        tickMargin={8} 
                                        axisLine={{ stroke: 'var(--text-normal-8)', strokeWidth: 2 }} 
                                        tickLine={{ stroke: 'var(--text-normal-8)', strokeWidth: 2 }} 
                                        label={{ value: 'Attendance (%)', angle: -90, position: 'insideLeft', offset: 5, fill: 'var(--text-normal-9)', fontSize: 11, fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }} 
                                    />
                                    <RechartsTooltip cursor={{ fill: 'var(--glass-bg-05)' }} content={<CustomTooltip />} />
                                    <Line type="monotone" dataKey="value" name="Attendance" stroke="#4DA3FF" strokeWidth={3.5} dot={{ r: 5, fill: '#8CC7FF', strokeWidth: 0 }} activeDot={{ r: 7, fill: '#8CC7FF' }} label={{ position: 'top', fill: '#8CC7FF', fontSize: 11, fontFamily: "'DM Sans', sans-serif", fontWeight: 700, formatter: (value) => `${value}%` }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </Card>
                    )}

                    {/* Row 1: Department Risk Profile (60%) & Risk Distribution (40%) */}
                    <div className="flex flex-col lg:flex-row gap-6 items-start mb-6">
                        <div className="w-full lg:w-[60%]">
                            <Card tier={2} delay={0.5} className="flex flex-col">
                                <h3 className="text-lg font-semibold mb-4 px-2">Department Risk Profile (Avg Score)</h3>
                                <div className="flex-1 animate-chart">
                                    <ResponsiveContainer width="100%" height={220}>
                                        <BarChart data={data.deptChart} margin={{ top: 20, right: 10, left: 10, bottom: 15 }}>
                                            <CartesianGrid stroke="var(--glass-border-08)" strokeDasharray="3 3" vertical={true} />
                                            <XAxis dataKey="name" stroke="var(--glass-border-08)" tick={{ fill: 'var(--text-muted-4)', fontSize: 11, fontFamily: "'DM Sans', sans-serif" }} axisLine={{ stroke: 'var(--glass-border-08)' }} tickLine={{ stroke: 'var(--glass-border-08)' }} label={{ value: 'Departments', position: 'insideBottom', offset: -5, fill: 'var(--text-muted-4)', fontSize: 10, fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }} />
                                            <YAxis stroke="var(--glass-border-08)" tick={{ fill: 'var(--text-muted-4)', fontSize: 11, fontFamily: "'DM Sans', sans-serif" }} axisLine={{ stroke: 'var(--glass-border-08)' }} tickLine={{ stroke: 'var(--glass-border-08)' }} label={{ value: 'Avg Risk Score', angle: -90, position: 'insideLeft', offset: -2, fill: 'var(--text-muted-4)', fontSize: 10, fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }} />
                                            <RechartsTooltip content={<CustomTooltip />} cursor={{ fill: 'var(--glass-bg-05)' }} />
                                            <Bar dataKey="limit" radius={[4, 4, 0, 0]}>
                                                {data.deptChart.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={entry.limit > 60 ? '#EF4444' : entry.limit > 40 ? '#F59E0B' : '#4DA3FF'} />
                                                ))}
                                            </Bar>
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </Card>
                        </div>

                        <div className="w-full lg:w-[40%]">
                            <Card tier={2} delay={0.7} className="relative overflow-hidden">
                                <h3 className="text-lg font-semibold mb-2 px-2">Risk Distribution</h3>
                                <div className="animate-chart relative">
                                    <ResponsiveContainer width="100%" height={180}>
                                        <PieChart>
                                            <Pie
                                                data={data.pieData}
                                                cx="50%" cy="50%"
                                                innerRadius={60} outerRadius={80}
                                                paddingAngle={5} dataKey="value"
                                                stroke="none"
                                            >
                                                {data.pieData.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                                ))}
                                            </Pie>
                                            <RechartsTooltip content={<CustomTooltip />} />
                                        </PieChart>
                                    </ResponsiveContainer>
                                    <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none pb-0">
                                        <span className="text-3xl font-bold">{students.length}</span>
                                        <span className="text-xs text-gray-600 dark:text-gray-400">Total</span>
                                    </div>
                                </div>

                                <div className="flex justify-center gap-4 mt-2 px-4 pb-2">
                                    {data.pieData.map((d, i) => (
                                        <div key={i} className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: d.color }}></div>
                                            <span className="text-sm text-gray-700 dark:text-gray-300">{d.name} <span className="font-bold text-gray-900 dark:text-white ml-1">{d.value}</span></span>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </div>
                    </div>

                    {/* Row 2: Probable Attrition Rate (60%) & Recommended Actions Today (40%) */}
                    <div className="flex flex-col lg:flex-row gap-6 items-stretch mb-6">
                        <div className="w-full lg:w-[60%] flex flex-col">
                            <Card tier={2} delay={0.6} className="flex flex-col h-full">
                                <h3 className="text-lg font-semibold mb-4 px-2">Probable Attrition Rate (6 Months)</h3>
                                <div className="flex-1 animate-chart">
                                    <ResponsiveContainer width="100%" height={200}>
                                        <AreaChart data={data.dropoutData} margin={{ top: 20, right: 10, left: 10, bottom: 15 }}>
                                            <defs>
                                                <linearGradient id="dropoutGradient" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="#EF4444" stopOpacity={0.3} />
                                                    <stop offset="95%" stopColor="#EF4444" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                            <CartesianGrid stroke="var(--glass-border-08)" strokeDasharray="3 3" vertical={true} />
                                            <XAxis dataKey="name" stroke="var(--glass-border-08)" tick={{ fill: 'var(--text-muted-4)', fontSize: 11, fontFamily: "'DM Sans', sans-serif" }} axisLine={{ stroke: 'var(--glass-border-08)' }} tickLine={{ stroke: 'var(--glass-border-08)' }} label={{ value: 'Timeline', position: 'insideBottom', offset: -5, fill: 'var(--text-muted-4)', fontSize: 10, fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }} />
                                            <YAxis stroke="var(--glass-border-08)" tick={{ fill: 'var(--text-muted-4)', fontSize: 11, fontFamily: "'DM Sans', sans-serif" }} axisLine={{ stroke: 'var(--glass-border-08)' }} tickLine={{ stroke: 'var(--glass-border-08)' }} label={{ value: 'Probability (%)', angle: -90, position: 'insideLeft', offset: -2, fill: 'var(--text-muted-4)', fontSize: 10, fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }} />
                                            <RechartsTooltip content={<CustomTooltip />} />
                                            <Area type="monotone" dataKey="prob" name="Dropout %" stroke="#EF4444" strokeWidth={2} fillOpacity={1} fill="url(#dropoutGradient)" />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>
                            </Card>
                        </div>

                        <div className="w-full lg:w-[40%] flex flex-col">
                            <Card tier={2} delay={0.75} className="flex flex-col h-full">
                                <h3 className="text-lg font-semibold mb-4 px-2 flex items-center gap-2">
                                    <Bell className="w-5 h-5 text-[#4DA3FF]" />
                                    Recommended Actions
                                </h3>
                                <div className="space-y-3 pr-1 flex-1">
                                    {/* Action 1: Parent Notification */}
                                    <div className="border border-white/5 dark:border-white/5 rounded-xl overflow-hidden transition-all bg-white/5">
                                        <div 
                                            onClick={() => setExpandedAction(expandedAction === 'parent' ? null : 'parent')}
                                            className="p-3 flex justify-between items-center cursor-pointer hover:bg-white/5"
                                        >
                                            <div className="flex flex-col">
                                                <span className="text-[11px] font-bold text-gray-900 dark:text-white leading-tight">Needing Parent Notification</span>
                                                <span className="text-[9px] text-gray-500 dark:text-gray-400 mt-0.5">Attendance &lt; 75% or High Risk</span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <span className="px-1.5 py-0.5 rounded text-[8px] font-bold bg-[#EF4444]/10 text-[#EF4444] border border-[#EF4444]/20 uppercase">High</span>
                                                <span className="w-5 h-5 rounded-full bg-[#EF4444]/15 text-[#EF4444] flex items-center justify-center text-[10px] font-bold">{data.needingParentList.length}</span>
                                            </div>
                                        </div>
                                        {expandedAction === 'parent' && (
                                            <div className="p-2 bg-black/10 dark:bg-black/20 border-t border-white/5 space-y-1 max-h-36 overflow-y-auto">
                                                {data.needingParentList.length > 0 ? (
                                                    data.needingParentList.map(s => (
                                                        <div 
                                                            key={s.id} 
                                                            onClick={() => openStudentDetail && openStudentDetail(s)}
                                                            className="flex justify-between items-center text-[10px] p-1 rounded hover:bg-white/5 text-[#4DA3FF] hover:underline cursor-pointer font-medium"
                                                        >
                                                            <span>{s.name} ({s.dept})</span>
                                                            <span className="text-gray-500 dark:text-gray-400 font-normal">Score: {calculateRiskScore(s).score}</span>
                                                        </div>
                                                    ))
                                                ) : (
                                                    <div className="text-[10px] text-gray-500 text-center py-1">No recommendations</div>
                                                )}
                                            </div>
                                        )}
                                    </div>

                                    {/* Action 2: Mentor Assignment */}
                                    <div className="border border-white/5 dark:border-white/5 rounded-xl overflow-hidden transition-all bg-white/5">
                                        <div 
                                            onClick={() => setExpandedAction(expandedAction === 'mentor' ? null : 'mentor')}
                                            className="p-3 flex justify-between items-center cursor-pointer hover:bg-white/5"
                                        >
                                            <div className="flex flex-col">
                                                <span className="text-[11px] font-bold text-gray-900 dark:text-white leading-tight">Requiring Mentor Assignment</span>
                                                <span className="text-[9px] text-gray-500 dark:text-gray-400 mt-0.5">Moderate/High Risk with 3+ delays</span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <span className="px-1.5 py-0.5 rounded text-[8px] font-bold bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/20 uppercase">Med</span>
                                                <span className="w-5 h-5 rounded-full bg-[#F59E0B]/15 text-[#F59E0B] flex items-center justify-center text-[10px] font-bold">{data.requiringMentorList.length}</span>
                                            </div>
                                        </div>
                                        {expandedAction === 'mentor' && (
                                            <div className="p-2 bg-black/10 dark:bg-black/20 border-t border-white/5 space-y-1 max-h-36 overflow-y-auto">
                                                {data.requiringMentorList.length > 0 ? (
                                                    data.requiringMentorList.map(s => (
                                                        <div 
                                                            key={s.id} 
                                                            onClick={() => openStudentDetail && openStudentDetail(s)}
                                                            className="flex justify-between items-center text-[10px] p-1 rounded hover:bg-white/5 text-[#4DA3FF] hover:underline cursor-pointer font-medium"
                                                        >
                                                            <span>{s.name} ({s.dept})</span>
                                                            <span className="text-gray-500 dark:text-gray-400 font-normal">Delays: {s.assignmentDelays}</span>
                                                        </div>
                                                    ))
                                                ) : (
                                                    <div className="text-[10px] text-gray-500 text-center py-1">No recommendations</div>
                                                )}
                                            </div>
                                        )}
                                    </div>

                                    {/* Action 3: Remedial Support */}
                                    <div className="border border-white/5 dark:border-white/5 rounded-xl overflow-hidden transition-all bg-white/5">
                                        <div 
                                            onClick={() => setExpandedAction(expandedAction === 'remedial' ? null : 'remedial')}
                                            className="p-3 flex justify-between items-center cursor-pointer hover:bg-white/5"
                                        >
                                            <div className="flex flex-col">
                                                <span className="text-[11px] font-bold text-gray-900 dark:text-white leading-tight">Requiring Remedial Support</span>
                                                <span className="text-[9px] text-gray-500 dark:text-gray-400 mt-0.5">Recent marks below 55%</span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <span className="px-1.5 py-0.5 rounded text-[8px] font-bold bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/20 uppercase">Med</span>
                                                <span className="w-5 h-5 rounded-full bg-[#F59E0B]/15 text-[#F59E0B] flex items-center justify-center text-[10px] font-bold">{data.requiringRemedialList.length}</span>
                                            </div>
                                        </div>
                                        {expandedAction === 'remedial' && (
                                            <div className="p-2 bg-black/10 dark:bg-black/20 border-t border-white/5 space-y-1 max-h-36 overflow-y-auto">
                                                {data.requiringRemedialList.length > 0 ? (
                                                    data.requiringRemedialList.map(s => (
                                                        <div 
                                                            key={s.id} 
                                                            onClick={() => openStudentDetail && openStudentDetail(s)}
                                                            className="flex justify-between items-center text-[10px] p-1 rounded hover:bg-white/5 text-[#4DA3FF] hover:underline cursor-pointer font-medium"
                                                        >
                                                            <span>{s.name} ({s.dept})</span>
                                                            <span className="text-gray-500 dark:text-gray-400 font-normal">Marks: {s.marks[s.marks.length - 1]}%</span>
                                                        </div>
                                                    ))
                                                ) : (
                                                    <div className="text-[10px] text-gray-500 text-center py-1">No recommendations</div>
                                                )}
                                            </div>
                                        )}
                                    </div>

                                    {/* Action 4: Immediate Attention */}
                                    <div className="border border-white/5 dark:border-white/5 rounded-xl overflow-hidden transition-all bg-white/5">
                                        <div 
                                            onClick={() => setExpandedAction(expandedAction === 'immediate' ? null : 'immediate')}
                                            className="p-3 flex justify-between items-center cursor-pointer hover:bg-white/5"
                                        >
                                            <div className="flex flex-col">
                                                <span className="text-[11px] font-bold text-gray-900 dark:text-white leading-tight">Requiring Immediate Attention</span>
                                                <span className="text-[9px] text-gray-500 dark:text-gray-400 mt-0.5">Overall risk score &ge; 70</span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <span className="px-1.5 py-0.5 rounded text-[8px] font-bold bg-[#EF4444]/10 text-[#EF4444] border border-[#EF4444]/20 uppercase animate-pulse">Critical</span>
                                                <span className="w-5 h-5 rounded-full bg-[#EF4444]/15 text-[#EF4444] flex items-center justify-center text-[10px] font-bold animate-pulse">{data.immediateAttentionList.length}</span>
                                            </div>
                                        </div>
                                        {expandedAction === 'immediate' && (
                                            <div className="p-2 bg-black/10 dark:bg-black/20 border-t border-white/5 space-y-1 max-h-36 overflow-y-auto">
                                                {data.immediateAttentionList.length > 0 ? (
                                                    data.immediateAttentionList.map(s => (
                                                        <div 
                                                            key={s.id} 
                                                            onClick={() => openStudentDetail && openStudentDetail(s)}
                                                            className="flex justify-between items-center text-[10px] p-1 rounded hover:bg-white/5 text-[#4DA3FF] hover:underline cursor-pointer font-medium"
                                                        >
                                                            <span>{s.name} ({s.dept})</span>
                                                            <span className="text-gray-500 dark:text-gray-400 font-normal text-[#EF4444]">Risk: {calculateRiskScore(s).score}</span>
                                                        </div>
                                                    ))
                                                ) : (
                                                    <div className="text-[10px] text-gray-500 text-center py-1">No recommendations</div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>

                    {/* Row 3: Recent Alerts (100% Horizontal Bar) */}
                    <div className="w-full mb-6">
                        <Card tier={2} delay={0.8} className="flex flex-col animate-fade-up" style={{ overflow: 'hidden' }}>
                            <h3 className="text-lg font-semibold mb-4 px-2 flex items-center gap-2"><Zap className="w-5 h-5 text-[#FBBF24]" /> Recent Alerts</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-4 px-2 pb-2">
                                <div className="relative pl-3.5 border-l-2 border-[#EF4444] py-0.5">
                                    <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-[#EF4444] shadow-[0_0_8px_rgba(239,68,68,1)]"></div>
                                    <div className="flex justify-between items-center text-[11px] font-bold text-gray-900 dark:text-white">
                                        <span>Consecutive absenteeism flagged</span>
                                        <span className="text-[9px] text-[#EF4444] bg-[#EF4444]/10 px-1 rounded uppercase font-semibold">Critical</span>
                                    </div>
                                    <p className="text-[11px] text-gray-600 dark:text-gray-300 font-medium">Suresh Rao (CSE) missed 3 classes consecutively</p>
                                    <p className="text-[9px] text-gray-500 mt-0.5">10m ago</p>
                                </div>

                                <div className="relative pl-3.5 border-l-2 border-[#EF4444] py-0.5">
                                    <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-[#EF4444] shadow-[0_0_8px_rgba(239,68,68,1)]"></div>
                                    <div className="flex justify-between items-center text-[11px] font-bold text-gray-900 dark:text-white">
                                        <span>Attendance threshold breached</span>
                                        <span className="text-[9px] text-[#EF4444] bg-[#EF4444]/10 px-1 rounded uppercase font-semibold">High</span>
                                    </div>
                                    <p className="text-[11px] text-gray-600 dark:text-gray-300 font-medium">Ishaan Bhattacharya (CIVIL) attendance fell to 55%</p>
                                    <p className="text-[9px] text-gray-500 mt-0.5">30m ago</p>
                                </div>

                                <div className="relative pl-3.5 border-l-2 border-[#F59E0B] py-0.5">
                                    <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-[#F59E0B] shadow-[0_0_8px_rgba(245,158,11,1)]"></div>
                                    <div className="flex justify-between items-center text-[11px] font-bold text-gray-900 dark:text-white">
                                        <span>Fee payment overdue</span>
                                        <span className="text-[9px] text-[#F59E0B] bg-[#F59E0B]/10 px-1 rounded uppercase font-semibold">High</span>
                                    </div>
                                    <p className="text-[11px] text-gray-600 dark:text-gray-300 font-medium">Aarti Rao (EEE) second notice transmitted</p>
                                    <p className="text-[9px] text-gray-500 mt-0.5">2h ago</p>
                                </div>

                                <div className="relative pl-3.5 border-l-2 border-[#4DA3FF] py-0.5">
                                    <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-[#4DA3FF] shadow-[0_0_8px_rgba(77,163,255,1)]"></div>
                                    <div className="flex justify-between items-center text-[11px] font-bold text-gray-900 dark:text-white">
                                        <span>Parent notification delivered</span>
                                        <span className="text-[9px] text-[#4DA3FF] bg-[#4DA3FF]/10 px-1 rounded uppercase font-semibold">Info</span>
                                    </div>
                                    <p className="text-[11px] text-gray-600 dark:text-gray-300 font-medium">Alerts dispatched for Sneha Sharma (CIVIL)</p>
                                    <p className="text-[9px] text-gray-500 mt-0.5">4h ago</p>
                                </div>

                                <div className="relative pl-3.5 border-l-2 border-[#10B981] py-0.5">
                                    <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_8px_rgba(16,185,129,1)]"></div>
                                    <div className="flex justify-between items-center text-[11px] font-bold text-gray-900 dark:text-white">
                                        <span>Mentor assigned successfully</span>
                                        <span className="text-[9px] text-[#10B981] bg-[#10B981]/10 px-1 rounded uppercase font-semibold">Success</span>
                                    </div>
                                    <p className="text-[11px] text-gray-600 dark:text-gray-300 font-medium">Ananya Nambiar (ECE) &rarr; Prof. Anjali Desai</p>
                                    <p className="text-[9px] text-gray-500 mt-0.5">5h ago</p>
                                </div>

                                <div className="relative pl-3.5 border-l-2 border-[#10B981] py-0.5">
                                    <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_8px_rgba(16,185,129,1)]"></div>
                                    <div className="flex justify-between items-center text-[11px] font-bold text-gray-900 dark:text-white">
                                        <span>Academic recovery detected</span>
                                        <span className="text-[9px] text-[#10B981] bg-[#10B981]/10 px-1 rounded uppercase font-semibold">Success</span>
                                    </div>
                                    <p className="text-[11px] text-gray-600 dark:text-gray-300 font-medium">Kavya Nair (CSE) test grades improved by 18%</p>
                                    <p className="text-[9px] text-gray-500 mt-0.5">1d ago</p>
                                </div>

                                <div className="relative pl-3.5 border-l-2 border-[#10B981] py-0.5">
                                    <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_8px_rgba(16,185,129,1)]"></div>
                                    <div className="flex justify-between items-center text-[11px] font-bold text-gray-900 dark:text-white">
                                        <span>Intervention resolved</span>
                                        <span className="text-[9px] text-gray-500 bg-white/5 border border-white/10 px-1 rounded uppercase font-semibold">Closed</span>
                                    </div>
                                    <p className="text-[11px] text-gray-600 dark:text-gray-300 font-medium">Saurabh Tiwari (MECH) remedial cluster complete</p>
                                    <p className="text-[9px] text-gray-500 mt-0.5">2d ago</p>
                                </div>

                                <div className="relative pl-3.5 border-l-2 border-[#10B981] py-0.5">
                                    <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_8px_rgba(16,185,129,1)]"></div>
                                    <div className="flex justify-between items-center text-[11px] font-bold text-gray-900 dark:text-white">
                                        <span>Academic status stabilized</span>
                                        <span className="text-[9px] text-[#10B981] bg-[#10B981]/10 px-1 rounded uppercase font-semibold">Success</span>
                                    </div>
                                    <p className="text-[11px] text-gray-600 dark:text-gray-300 font-medium">Nithya Dev (ECE) transitioned to low risk</p>
                                    <p className="text-[9px] text-gray-500 mt-0.5">3d ago</p>
                                </div>
                            </div>
                        </Card>
                    </div>

                </>
            ) : (
                <div style={{ padding: '32px 0' }}>
                    <div style={{ fontFamily: 'Syne', fontSize: 18, color: '#fff', marginBottom: 8 }}>
                        My Academic Overview
                    </div>
                    <div style={{ fontSize: 12, color: 'var(--text-muted-35)', fontFamily: 'DM Sans', marginBottom: 28 }}>
                        Showing your personal metrics only
                    </div>
                    {(() => {
                        const self = students.find(s => s.id === currentStudentId);
                        if (!self) return null;
                        const score = self.riskScore || calculateRiskScore(self).score;
                        const level = self.riskLevel || calculateRiskScore(self).level;
                        return (
                            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                                {[
                                    { label: 'Risk Score', value: score, color: level === 'HIGH' ? '#EF4444' : level === 'MODERATE' ? '#F59E0B' : '#4DA3FF' },
                                    { label: 'Attendance', value: self.attendance[4] + '%', color: '#4DA3FF' },
                                    { label: 'Last Test Score', value: self.marks[4], color: 'var(--text-normal-8)' }
                                ].map((stat, i) => (
                                    <div key={i} style={{
                                        flex: '1 1 140px',
                                        background: 'var(--glass-bg-03)',
                                        border: '1px solid rgba(77,163,255,0.16)',
                                        borderRadius: 14, padding: '20px',
                                        animationName: 'staggerFadeUp',
                                        animationDuration: '260ms',
                                        animationTimingFunction: 'ease-out',
                                        animationFillMode: 'both',
                                        animationDelay: `${i * 0.08}s`
                                    }}>
                                        <div style={{ fontSize: 11, color: 'var(--text-muted-35)', fontFamily: 'DM Sans', letterSpacing: '0.4px', marginBottom: 10 }}>
                                            {stat.label}
                                        </div>
                                        <div style={{ fontFamily: 'Syne', fontSize: 26, fontWeight: 700, color: stat.color }}>
                                            {stat.value}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        );
                    })()}
                </div>
            )}

            {can('canViewFullAnalytics') && (
                <>
                    {/* Department Intelligence */}
                    <div style={{
                        marginTop: 24,
                        animationName: 'staggerFadeUp',
                        animationDuration: '300ms',
                        animationTimingFunction: 'ease-out',
                        animationFillMode: 'both',
                        animationDelay: '0.15s'
                    }}>
                        <div style={{ fontFamily: 'Syne', fontSize: 18, fontWeight: 600, color: 'var(--text-normal-9)' }}>
                            Department Intelligence
                        </div>
                        <div style={{ height: 2, borderRadius: 1, background: 'linear-gradient(90deg, #4DA3FF, transparent)', width: 0, animation: 'expandLine 1s 0.2s ease forwards', marginTop: 8 }}></div>

                        <div style={{ display: 'flex', gap: 16, marginTop: 24, flexWrap: 'wrap' }}>
                            <Card tier={1} className="flex-1 min-w-[220px]" style={{ borderLeft: '3px solid #EF4444' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--text-normal-65)', marginBottom: 8 }}>
                                    <AlertTriangle size={18} color="#EF4444" /> Highest Risk Department
                                </div>
                                <div style={{ fontFamily: 'Syne', fontSize: 24, fontWeight: 600, color: '#EF4444', marginBottom: 8 }}>
                                    {data.highestRiskDept.name}
                                </div>
                                <div style={{ fontSize: 11, color: 'var(--text-muted-25)' }}>
                                    Avg Risk Score: <span className="font-semibold text-gray-900 dark:text-white">{data.highestRiskDept.value}</span>
                                </div>
                            </Card>

                            <Card tier={1} className="flex-1 min-w-[220px]" style={{ borderLeft: '3px solid #4DA3FF' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--text-normal-65)', marginBottom: 8 }}>
                                    <TrendingUp size={18} color="#4DA3FF" /> Best Performing Department
                                </div>
                                <div style={{ fontFamily: 'Syne', fontSize: 24, fontWeight: 600, color: '#4DA3FF', marginBottom: 8 }}>
                                    {data.bestPerformingDept.name}
                                </div>
                                <div style={{ fontSize: 11, color: 'var(--text-muted-25)' }}>
                                    Avg Performance: <span className="font-semibold text-gray-900 dark:text-white">{data.bestPerformingDept.value}%</span>
                                </div>
                            </Card>

                            <Card tier={1} className="flex-1 min-w-[220px]" style={{ borderLeft: '3px solid #8CC7FF' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--text-normal-65)', marginBottom: 8 }}>
                                    <Zap size={18} color="#8CC7FF" /> Most Improved Department
                                </div>
                                <div style={{ fontFamily: 'Syne', fontSize: 24, fontWeight: 600, color: '#8CC7FF', marginBottom: 8 }}>
                                    {data.mostImprovedDept.name}
                                </div>
                                <div style={{ fontSize: 11, color: 'var(--text-muted-25)' }}>
                                    Avg Growth: <span className={`font-semibold ${data.mostImprovedDept.value >= 0 ? 'text-[#4ade80]' : 'text-[#EF4444]'}`}>
                                        {data.mostImprovedDept.value > 0 ? `+${data.mostImprovedDept.value}` : data.mostImprovedDept.value}%
                                    </span>
                                </div>
                            </Card>
                        </div>

                        <div style={{ marginTop: 24, background: 'var(--glass-bg-02)', border: '1px solid var(--glass-border-05)', borderRadius: 16, padding: '24px', overflowX: 'auto' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-normal-8)' }}>Department Risk Distribution Heatmap</div>
                                <div style={{ display: 'flex', gap: 12, fontSize: 10 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                                        <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#4DA3FF' }}></div>
                                        <span style={{ color: 'var(--text-muted-35)' }}>Safe</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                                        <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#F59E0B' }}></div>
                                        <span style={{ color: 'var(--text-muted-35)' }}>Moderate</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                                        <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#EF4444' }}></div>
                                        <span style={{ color: 'var(--text-muted-35)' }}>High Risk</span>
                                    </div>
                                </div>
                            </div>

                            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, minWidth: '500px' }}>
                                <thead>
                                    <tr style={{ borderBottom: '1px solid var(--glass-border-08)', color: 'var(--text-muted-35)', textAlign: 'left' }}>
                                        <th style={{ padding: '12px 16px', fontWeight: 500 }}>Department</th>
                                        <th style={{ padding: '12px 16px', fontWeight: 500, textAlign: 'center' }}>Safe</th>
                                        <th style={{ padding: '12px 16px', fontWeight: 500, textAlign: 'center' }}>Moderate</th>
                                        <th style={{ padding: '12px 16px', fontWeight: 500, textAlign: 'center' }}>High Risk</th>
                                        <th style={{ padding: '12px 16px', fontWeight: 500, textAlign: 'center' }}>Total Students</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.deptAverages.map((dept, index) => (
                                        <tr key={index} className="hover:bg-black/5 dark:hover:bg-white/5 transition-colors" style={{ borderBottom: '1px solid var(--glass-border-05)' }}>
                                            <td style={{ padding: '16px', fontWeight: 600, color: 'var(--text-normal-9)' }}>
                                                {dept.name}
                                            </td>
                                            
                                            {/* Safe Cell */}
                                            <td style={{ 
                                                padding: '12px',
                                                textAlign: 'center',
                                                background: `rgba(77, 163, 255, ${dept.studentCount > 0 ? (dept.safeCount / dept.studentCount) * 0.25 : 0.02})`,
                                                border: '1px solid var(--glass-border-08)',
                                                transition: 'all 0.2s'
                                            }}>
                                                <span style={{ 
                                                    display: 'inline-block',
                                                    padding: '4px 8px',
                                                    borderRadius: '8px',
                                                    fontWeight: 600,
                                                    color: dept.safeCount > 0 ? '#4DA3FF' : 'var(--text-muted-25)',
                                                    fontSize: 12
                                                }}>
                                                    {dept.safeCount}
                                                </span>
                                            </td>

                                            {/* Moderate Cell */}
                                            <td style={{ 
                                                padding: '12px',
                                                textAlign: 'center',
                                                background: `rgba(245, 158, 11, ${dept.studentCount > 0 ? (dept.moderateCount / dept.studentCount) * 0.25 : 0.02})`,
                                                border: '1px solid var(--glass-border-08)',
                                                transition: 'all 0.2s'
                                            }}>
                                                <span style={{ 
                                                    display: 'inline-block',
                                                    padding: '4px 8px',
                                                    borderRadius: '8px',
                                                    fontWeight: 600,
                                                    color: dept.moderateCount > 0 ? '#F59E0B' : 'var(--text-muted-25)',
                                                    fontSize: 12
                                                }}>
                                                    {dept.moderateCount}
                                                </span>
                                            </td>

                                            {/* High Risk Cell */}
                                            <td style={{ 
                                                padding: '12px',
                                                textAlign: 'center',
                                                background: `rgba(239, 68, 68, ${dept.studentCount > 0 ? (dept.highCount / dept.studentCount) * 0.25 : 0.02})`,
                                                border: '1px solid var(--glass-border-08)',
                                                transition: 'all 0.2s'
                                            }}>
                                                <span style={{ 
                                                    display: 'inline-block',
                                                    padding: '4px 8px',
                                                    borderRadius: '8px',
                                                    fontWeight: 600,
                                                    color: dept.highCount > 0 ? '#EF4444' : 'var(--text-muted-25)',
                                                    fontSize: 12
                                                }}>
                                                    {dept.highCount}
                                                </span>
                                            </td>

                                            <td style={{ padding: '16px', textAlign: 'center', fontWeight: 500, color: 'var(--text-normal-7)' }}>
                                                {dept.studentCount}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div style={{
                        marginTop: 24,
                        animationName: 'staggerFadeUp',
                        animationDuration: '300ms',
                        animationTimingFunction: 'ease-out',
                        animationFillMode: 'both',
                        animationDelay: '0.20s'
                    }}>
                        <div style={{ fontFamily: 'Syne', fontSize: 18, fontWeight: 600, color: 'var(--text-normal-9)' }}>
                            Education Impact Metrics
                        </div>
                        <div style={{ height: 2, borderRadius: 1, background: 'linear-gradient(90deg, #C5192D, transparent)', width: 0, animation: 'expandLine 1s 0.2s ease forwards', marginTop: 8 }}></div>

                        <div style={{ display: 'flex', gap: 16, marginTop: 24, flexWrap: 'wrap' }}>
                            <Card tier={1} className="flex-1 min-w-[200px]" style={{ borderLeft: '3px solid #4DA3FF' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--text-normal-65)', marginBottom: 8 }}>
                                    <TrendingDownIcon size={20} color="#4DA3FF" /> Projected Dropout Reduction
                                </div>
                                <div style={{ fontFamily: 'Syne', fontSize: 28, fontWeight: 600, color: '#8CC7FF', letterSpacing: 0.3, marginBottom: 4 }}>34%</div>
                                <div style={{ fontSize: 10, color: 'var(--text-muted-25)' }}>vs. pre-intervention baseline</div>
                            </Card>

                            <Card tier={1} className="flex-1 min-w-[200px]" style={{ borderLeft: '3px solid #4DA3FF' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--text-normal-65)', marginBottom: 8 }}>
                                    <Users size={20} color="#4DA3FF" /> Stabilized This Quarter
                                </div>
                                <div style={{ fontFamily: 'Syne', fontSize: 28, fontWeight: 600, color: '#8CC7FF', letterSpacing: 0.3, marginBottom: 4 }}>8 Students</div>
                                <div style={{ fontSize: 10, color: 'var(--text-muted-25)', marginBottom: 12 }}>Moved from HIGH/MODERATE → SAFE</div>

                                <div style={{ display: 'flex' }}>
                                    {students.slice(0, 8).map((s, i) => (
                                        <div key={i} style={{ width: 18, height: 18, borderRadius: '50%', background: 'rgba(77,163,255,0.18)', border: '1px solid rgba(77,163,255,0.3)', fontSize: 8, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: i === 0 ? 0 : -6 }}>
                                            {s.name[0]}
                                        </div>
                                    ))}
                                </div>
                            </Card>

                            <Card tier={1} className="flex-1 min-w-[200px]" style={{ borderLeft: '3px solid #8CC7FF' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--text-normal-65)', marginBottom: 8 }}>
                                    <BarChart2 size={20} color="#8CC7FF" /> Retention Improvement
                                </div>
                                <div style={{ fontFamily: 'Syne', fontSize: 28, color: '#8CC7FF', marginBottom: 4 }}>+18.6%</div>
                                <div style={{ fontSize: 10, color: 'var(--text-muted-25)' }}>Semester-over-semester growth</div>
                            </Card>


                        </div>

                        <div style={{ marginTop: 28, background: 'var(--glass-bg-02)', border: '1px solid var(--glass-border-05)', borderRadius: 16, padding: '20px 24px' }}>
                            <div style={{ fontSize: 12, color: 'var(--text-muted-35)', marginBottom: 16 }}>Hackspace Target Progress — Institution Level</div>



                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'var(--text-normal-5)', marginBottom: 4 }}>
                                    <span>Dropout Prevention Effectiveness</span>
                                    <span style={{ fontWeight: 600, color: '#4ade80' }}>86.28%</span>
                                </div>
                                <div style={{ height: 8, borderRadius: 4, background: 'rgba(255,255,255,0.06)', width: '100%' }}>
                                    <div style={{ height: 8, borderRadius: 4, background: '#4ade80', width: '86.28%', transition: 'width 1s ease 0.3s' }}></div>
                                </div>
                            </div>


                        </div>
                    </div>
                </>
            )
            }
            <Footer />
        </div >
    );
};

const ParentDashboard = ({ students, child }) => {
    const [alertsCollapsed, setAlertsCollapsed] = useState(false);

    const risk = calculateRiskScore(child);

    // Formatted metric blocks
    const attendancePercent = child.attendance[4];
    const avgScore = Math.round(child.marks.reduce((a, b) => a + b, 0) / child.marks.length);

    // Recent Performance Data formatting
    const performanceData = child.marks.map((m, i) => ({ term: `T${i + 1}`, score: m }));

    const activeAlerts = useMemo(() => {
        const alerts = [];
        
        // 1. Attendance Drop Alert
        const attVals = child.attendance || [];
        if (attVals.length > 1) {
            const drop = attVals[0] - attVals[attVals.length - 1];
            if (drop >= 10) {
                alerts.push({
                    title: "Critical Attendance Drop Detected",
                    desc: `Your child's attendance has decreased by ${drop}% over the past few weeks, currently sitting at ${attVals[attVals.length - 1]}%.`,
                    action: "Please check in with your child and discuss the importance of regular attendance.",
                    severity: "HIGH"
                });
            }
        }
        
        // 2. Risk Level Escalated Alert
        if (risk.level === "HIGH") {
            alerts.push({
                title: "Academic Risk Escalated to HIGH",
                desc: `Our prediction engine has flagged an academic risk score of ${risk.score}/100.`,
                action: "We recommend scheduling an urgent counselor call to discuss a recovery strategy.",
                severity: "HIGH"
            });
        } else if (risk.level === "MODERATE") {
            alerts.push({
                title: "Academic Risk Level Increased to Moderate",
                desc: `The academic risk score has risen to ${risk.score}/100.`,
                action: "Regular study monitoring is advised to stabilize performance.",
                severity: "MEDIUM"
            });
        }

        // 3. Mentor Intervention Recommended
        const mentorRecommended = (risk.level === "HIGH" || risk.level === "MODERATE") && child.assignmentDelays >= 3;
        if (mentorRecommended) {
            alerts.push({
                title: "Faculty Mentor Assignment Recommended",
                desc: `Due to elevated risk level and ${child.assignmentDelays} late assignment submissions, a structured mentorship is recommended.`,
                action: "Please approve the faculty mentor assignment request on the portal.",
                severity: "MEDIUM"
            });
        }

        // 4. Declining Performance
        const marksVals = child.marks || [];
        const isMarksDeclining = marksVals.length > 2 && marksVals[marksVals.length - 3] > marksVals[marksVals.length - 2] && marksVals[marksVals.length - 2] > marksVals[marksVals.length - 1];
        if (isMarksDeclining) {
            alerts.push({
                title: "Academic Performance in Decline",
                desc: "Recent test grades show a steady downward trend from test to test.",
                action: "Consider dedicating additional study hours at home and reviewing weak subjects.",
                severity: "MEDIUM"
            });
        }

        // 5. Remedial Support Suggestion
        const currentMark = marksVals.length ? marksVals[marksVals.length - 1] : 100;
        if (currentMark < 55) {
            alerts.push({
                title: "Remedial Support Suggestion",
                desc: `Your child scored ${currentMark}% in the latest examination, which falls below the institutional safety threshold of 55%.`,
                action: "We suggest enrolling them in the upcoming remedial cluster support sessions.",
                severity: "MEDIUM"
            });
        }

        return alerts;
    }, [child, risk]);

    return (
        <div className="p-6 animate-page max-w-7xl mx-auto">
            <HeaderUnderline title={`Parent Portal - ${child.name}`} />

            {/* Parent Alert Center */}
            <div style={{ background: 'var(--glass-bg-02)', border: '1px solid var(--glass-border-06)', backdropFilter: 'blur(20px)', borderRadius: 20, padding: 20, marginBottom: 24 }} className="animate-fade-up">
                <div className="flex justify-between items-center">
                    <div style={{ fontFamily: 'Syne', fontSize: 18, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 8 }}>
                        <Bell className="w-5 h-5 text-[#EF4444]" />
                        Parent Alert Center
                        {activeAlerts.length > 0 && (
                            <span className="w-5 h-5 rounded-full bg-[#EF4444]/15 text-[#EF4444] flex items-center justify-center text-xs font-bold animate-pulse">
                                {activeAlerts.length}
                            </span>
                        )}
                    </div>
                    <button
                        onClick={() => setAlertsCollapsed(!alertsCollapsed)}
                        className="text-xs text-[#4DA3FF] hover:underline flex items-center gap-1 font-semibold"
                    >
                        {alertsCollapsed ? "Show Alerts" : "Hide Alerts"}
                        <ChevronRight className={`w-3.5 h-3.5 transform transition-transform ${alertsCollapsed ? '' : 'rotate-90'}`} />
                    </button>
                </div>
                <div style={{ height: 2, borderRadius: 1, background: 'linear-gradient(90deg, #EF4444, transparent)', width: 0, animation: 'expandLine 1s 0.2s ease forwards', marginTop: 8, marginBottom: 12 }}></div>

                {!alertsCollapsed && (
                    <div className="space-y-3 mt-3">
                        {activeAlerts.length > 0 ? (
                            activeAlerts.map((alert, index) => {
                                const isHigh = alert.severity === "HIGH";
                                const isMed = alert.severity === "MEDIUM";
                                return (
                                    <div 
                                        key={index}
                                        className={`p-4 rounded-xl border flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all ${
                                            isHigh ? 'bg-[#EF4444]/5 border-[#EF4444]/20' : 
                                            isMed ? 'bg-[#F59E0B]/5 border-[#F59E0B]/20' : 
                                            'bg-[#4DA3FF]/5 border-[#4DA3FF]/20'
                                        }`}
                                    >
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                                                    isHigh ? 'bg-[#EF4444]/15 text-[#EF4444] border border-[#EF4444]/30' : 
                                                    isMed ? 'bg-[#F59E0B]/15 text-[#F59E0B] border border-[#F59E0B]/30' : 
                                                    'bg-[#4DA3FF]/15 text-[#4DA3FF] border border-[#4DA3FF]/30'
                                                }`}>
                                                    {alert.severity}
                                                </span>
                                                <h4 className="text-sm font-bold text-gray-900 dark:text-white">{alert.title}</h4>
                                            </div>
                                            <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">{alert.desc}</p>
                                        </div>
                                        <div className="md:w-1/3 p-3 rounded-lg bg-black/10 dark:bg-black/20 border border-white/5">
                                            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Suggested Action</div>
                                            <p className="text-xs text-gray-700 dark:text-gray-300">{alert.action}</p>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <div className="text-xs text-gray-500 text-center py-4">✓ No alerts detected. Your child is meeting all academic stability parameters.</div>
                        )}
                    </div>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* 1. Student Attendance Card */}
                <Card tier={1} delay={0.1} className="flex flex-col">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 font-semibold text-sm mb-4">
                        <Clock className="w-5 h-5 text-[#4DA3FF]" /> Attendance Overview
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                        <div className="text-5xl font-extrabold text-[#4DA3FF] mb-2">{attendancePercent}%</div>
                        <div className="text-sm text-gray-500">Overall Attendance</div>

                        <div className="mt-6 space-y-3">
                            <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                                <span className="text-gray-600 dark:text-gray-400">Classes Attended</span>
                                <span className="text-gray-900 dark:text-white font-bold">{Math.round((attendancePercent / 100) * 40)}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-600 dark:text-gray-400">Classes Missed</span>
                                <span className="text-gray-900 dark:text-white font-bold">{40 - Math.round((attendancePercent / 100) * 40)}</span>
                            </div>
                        </div>
                    </div>
                </Card>

                {/* 2. Academic Performance Card */}
                <Card tier={2} delay={0.2} className="flex flex-col">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 font-semibold text-sm mb-4">
                        <Star className="w-5 h-5 text-[#F59E0B]" /> Academic Performance
                    </div>

                    <div className="flex items-baseline gap-2 mb-4">
                        <div className="text-4xl font-bold text-gray-900 dark:text-white">{avgScore}</div>
                        <div className="text-xs text-gray-500 font-medium">Avg Marks</div>
                    </div>

                    <div className="h-24 w-full mt-2">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={performanceData}>
                                <Line type="monotone" dataKey="score" stroke="#F59E0B" strokeWidth={2} dot={{ r: 3, fill: '#F59E0B' }} />
                                <RechartsTooltip
                                    contentStyle={{ backgroundColor: (document.documentElement.classList.contains('dark')) ? '#10293F' : '#ffffff', border: (document.documentElement.classList.contains('dark')) ? '1px solid rgba(255,255,255,0.1)' : '1px solid #e5e7eb', color: (document.documentElement.classList.contains('dark')) ? '#ffffff' : '#111827' }}
                                    formatter={(val) => [`${val} Marks`, 'Score']}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="mt-4 pt-4 border-t border-white/5">
                        <div className="text-xs text-gray-600 dark:text-gray-400 mb-2 font-semibold">Latest Subjects</div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-700 dark:text-gray-300">Mathematics</span>
                            <span className="text-gray-900 dark:text-white font-bold">78/100</span>
                        </div>
                    </div>
                </Card>

                {/* 3. Risk Prediction Card */}
                <Card tier={3} delay={0.3} className="flex flex-col">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 font-semibold text-sm mb-4">
                        <Shield className="w-5 h-5 text-indigo-400" /> Academic Health
                    </div>

                    <div className="text-center flex-1 flex flex-col justify-center items-center py-4">
                        {/* Dynamic Health Circle */}
                        <div className="w-32 h-32 rounded-full border-[6px] flex items-center justify-center mb-4 relative shadow-lg"
                            style={{
                                borderColor: risk.level === "SAFE" ? "#4ade80" : risk.level === "MODERATE" ? "#F59E0B" : "#EF4444",
                                backgroundColor: risk.level === "SAFE" ? "rgba(74, 222, 128, 0.1)" : risk.level === "MODERATE" ? "rgba(245, 158, 11, 0.1)" : "rgba(239, 68, 68, 0.1)"
                            }}>
                            <div className="text-3xl font-extrabold" style={{ color: risk.level === "SAFE" ? "#4ade80" : risk.level === "MODERATE" ? "#F59E0B" : "#EF4444" }}>
                                {risk.score}
                            </div>
                        </div>

                        <div className="text-lg font-bold" style={{ color: risk.level === "SAFE" ? "#4ade80" : risk.level === "MODERATE" ? "#F59E0B" : "#EF4444" }}>
                            {risk.level === "SAFE" ? "Low Risk" : risk.level === "MODERATE" ? "Medium Risk" : "High Risk"}
                        </div>
                        <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Prediction Engine Score</div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

const FacultyDashboard = ({ students, onSelectStudent, can, currentStudentId, openStudentDetail }) => {
    const [filterRisk, setFilterRisk] = useState("All");
    const [search, setSearch] = useState("");
    const [selectedDepartment, setSelectedDepartment] = useState("All");
    const [selectedYear, setSelectedYear] = useState("All");

    const filteredStudents = useMemo(() => {
        return students
            .map(s => ({ ...s, risk: calculateRiskScore(s) }))
            .filter(s => filterRisk === "All" || s.risk.level === filterRisk)
            .filter(s => selectedDepartment === "All" || s.dept === selectedDepartment)
            .filter(s => selectedYear === "All" || Math.ceil(s.sem / 2) === parseInt(selectedYear))
            .filter(s => s.name.toLowerCase().includes(search.toLowerCase()) || s.id.toLowerCase().includes(search.toLowerCase()))
            .sort((a, b) => b.risk.score - a.risk.score);
    }, [students, filterRisk, search, selectedDepartment, selectedYear]);

    return (
        <div className="p-6 animate-page max-w-7xl mx-auto">
            <HeaderUnderline title="Student Risk Monitor" />

            {can('canViewAllStudents') ? (
                <>
                    <div className="flex flex-wrap gap-4 mb-6 items-center w-full pl-4">
                        <div className="relative flex-1 min-w-[250px]">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 dark:text-gray-400 w-5 h-5" />
                            <input
                                type="text" placeholder="Search by name or ID..."
                                value={search} onChange={e => setSearch(e.target.value)}
                                className="w-full bg-[#0B0B0C]/60 border border-gray-300 dark:border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-[#4DA3FF]/50 transition-colors backdrop-blur-md"
                            />
                        </div>

                        <div className="flex gap-2">
                            {["All", "HIGH", "MODERATE", "SAFE"].map(r => (
                                <button key={r} onClick={() => setFilterRisk(r)}
                                    className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${filterRisk === r ? 'bg-white/10 text-gray-900 dark:text-white shadow-sm' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:text-white hover:bg-white/5'
                                        }`}
                                >
                                    <div className="flex items-center gap-2">
                                        {r !== "All" && <div className="w-2 h-2 rounded-full" style={{ backgroundColor: getLevelColor(r) }}></div>}
                                        {r === "All" ? "All Risks" : r}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-3 mb-4 ml-4 items-center">
                        <select
                            value={selectedDepartment}
                            onChange={(e) => setSelectedDepartment(e.target.value)}
                            className="bg-slate-800 dark:bg-slate-800 bg-white border border-gray-700 dark:border-gray-700 border-gray-300 text-gray-100 dark:text-gray-100 text-gray-900 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="All">All Departments</option>
                            <option value="CSE">CSE</option>
                            <option value="IT">IT</option>
                            <option value="ECE">ECE</option>
                            <option value="EEE">EEE</option>
                            <option value="MECH">MECH</option>
                            <option value="CIVIL">CIVIL</option>
                        </select>
                        <select
                            value={selectedYear}
                            onChange={(e) => setSelectedYear(e.target.value)}
                            className="bg-slate-800 dark:bg-slate-800 bg-white border border-gray-700 dark:border-gray-700 border-gray-300 text-gray-100 dark:text-gray-100 text-gray-900 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="All">All Years</option>
                            <option value="1">Year 1</option>
                            <option value="2">Year 2</option>
                            <option value="3">Year 3</option>
                            <option value="4">Year 4</option>
                        </select>

                        <span className="text-xs font-semibold ml-2">
                            {filteredStudents.length > 0 ? (
                                <span className="text-green-500 flex items-center gap-1">
                                    <CheckCircle2 className="w-3.5 h-3.5" />
                                    Found {filteredStudents.length} matching students
                                </span>
                            ) : (
                                <span className="text-[#EF4444] flex items-center gap-1">
                                    <AlertTriangle className="w-3.5 h-3.5" />
                                    No students match filters
                                </span>
                            )}
                        </span>
                    </div>

                    <Card tier={2} className="p-0 overflow-hidden ml-4">
                        <div className="overflow-x-auto w-full">
                            <table className="w-full text-left border-collapse min-w-[800px]">
                                <thead>
                                    <tr className="border-b border-white/5 text-gray-500 dark:text-gray-600 dark:text-gray-400 text-sm">
                                        <th className="p-4 font-semibold w-12 text-center">#</th>
                                        <th className="p-4 font-semibold">Student</th>
                                        <th className="p-4 font-semibold">Dept</th>
                                        <th className="p-4 font-semibold text-center">Sem</th>
                                        <th className="p-4 font-semibold text-center">Risk Score ↓</th>
                                        <th className="p-4 font-semibold">Risk Level</th>
                                        <th className="p-4 font-semibold text-center">Trend</th>
                                        <th className="p-4 font-semibold text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredStudents.length > 0 ? (
                                        filteredStudents.map((s, idx) => {
                                            const isHigh = s.risk.level === "HIGH";
                                            const isSafe = s.risk.level === "SAFE";
                                            return (
                                                <tr key={s.id} className={`border-b border-white/5 smart-table-row risk-${s.risk.level.toLowerCase()}`}
                                                    onMouseEnter={e => {
                                                        e.currentTarget.style.transform = 'translateX(3px)';
                                                        e.currentTarget.style.transition = 'all 0.2s ease';
                                                        e.currentTarget.style.background = 'rgba(77,163,255,0.04)';
                                                    }}
                                                    onMouseLeave={e => {
                                                        e.currentTarget.style.transform = 'translateX(0px)';
                                                        e.currentTarget.style.background = 'transparent';
                                                    }}
                                                >
                                                    <td className="p-4 text-center text-gray-500">{idx + 1}</td>
                                                    <td className="p-4">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm bg-[#0B0B0C]"
                                                                style={getBadgeStyle(s.risk.level)}>
                                                                {s.name.split(' ').map(n => n[0]).join('')}
                                                            </div>
                                                            <div>
                                                                <div className="font-bold">{s.name}</div>
                                                                <div className="text-xs text-gray-500">{s.id}</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="p-4 text-gray-700 dark:text-gray-300">{s.dept}</td>
                                                    <td className="p-4 text-center text-gray-700 dark:text-gray-300">{s.sem}</td>
                                                    <td className="p-4 text-center">
                                                        <div className="inline-block px-3 py-1 rounded-full risk-cell font-bold"
                                                            style={getBadgeStyle(s.risk.level)}>
                                                            {s.risk.score}
                                                        </div>
                                                    </td>
                                                    <td className="p-4">
                                                        <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold border ${isHigh ? 'risk-pulse' : ''}`}
                                                            style={getBadgeStyle(s.risk.level)}>
                                                            {s.risk.level}
                                                        </div>
                                                    </td>
                                                    <td className="p-4 text-center">
                                                        {s.risk.trend === 'declining' && <TrendingDown className="w-5 h-5 mx-auto text-[#EF4444]" />}
                                                        {s.risk.trend === 'improving' && <TrendingUp className="w-5 h-5 mx-auto text-[#4DA3FF]" />}
                                                        {s.risk.trend === 'stable' && <Minus className="w-5 h-5 mx-auto text-gray-600 dark:text-gray-400" />}
                                                        {s.risk.trend === 'mixed' && <Activity className="w-5 h-5 mx-auto text-[#F59E0B]" />}
                                                    </td>
                                                    <td className="p-4 text-center align-middle">
                                                        <button
                                                            onClick={() => openStudentDetail && openStudentDetail(s) || onSelectStudent && onSelectStudent(s)}
                                                            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.transition = 'all 0.25s ease'; e.currentTarget.style.boxShadow = '0 6px 18px rgba(77,163,255,0.16)'; }} onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0px)'; e.currentTarget.style.boxShadow = 'none'; }} className="action-btn px-4 py-1.5 btn-gradient rounded-lg text-sm font-bold text-gray-900 dark:text-white shadow-md mx-auto inline-block opacity-0 transition-opacity"
                                                        >
                                                            View Profile
                                                        </button>
                                                    </td>
                                                </tr>
                                            );
                                        })
                                    ) : (
                                        <tr>
                                            <td colSpan={8} className="p-8 text-center">
                                                <div className="flex flex-col items-center justify-center text-gray-500 py-6">
                                                    <AlertTriangle className="w-10 h-10 text-[#F59E0B] mb-2 animate-pulse" />
                                                    <div className="text-sm font-bold text-gray-900 dark:text-white">No Matching Students Found</div>
                                                    <div className="text-xs text-gray-500 mt-1">Try adjusting your search query, risk filters, department, or year.</div>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </Card>
                </>
            ) : (
                <div style={{ maxWidth: 600, margin: '0 auto', padding: '32px 0' }}>
                    <div style={{ fontSize: 12, color: 'var(--text-muted-35)', fontFamily: 'DM Sans', marginBottom: 16, letterSpacing: '0.3px' }}>YOUR PROFILE</div>
                    {(() => {
                        const self = students.find(s => s.id === currentStudentId);
                        if (!self) return null;
                        const score = self.riskScore || calculateRiskScore(self).score;
                        const level = self.riskLevel || calculateRiskScore(self).level;
                        return (
                            <div
                                onClick={() => openStudentDetail && openStudentDetail(self) || onSelectStudent && onSelectStudent(self)}
                                style={{ background: 'var(--glass-bg-03)', border: '1px solid rgba(77,163,255,0.18)', borderRadius: 16, padding: '20px 24px', cursor: 'pointer', transition: 'all 0.25s ease' }}
                                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 36px rgba(0,0,0,0.35),0 0 0 1px rgba(77,163,255,0.14)'; }}
                                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                            >
                                <div style={{ fontFamily: 'Syne', fontSize: 16, color: '#fff', marginBottom: 4 }}>{self.name}</div>
                                <div style={{ fontSize: 12, color: 'var(--text-muted-4)', fontFamily: 'DM Sans' }}>{self.dept} · Semester {self.sem}</div>
                                <div style={{ marginTop: 12, fontSize: 12, color: level === 'HIGH' ? '#EF4444' : level === 'MODERATE' ? '#F59E0B' : '#4DA3FF' }}>Risk Score: {score}</div>
                            </div>
                        );
                    })()}
                </div>
            )}
            <Footer />
        </div>
    );
};

const StudentDetail = ({ student, onBack, onInterventionReq, skeletonLoading, displayScore, showToast }) => {
    const [stressCollapsed, setStressCollapsed] = useState(true);

    const risk = useMemo(() => calculateRiskScore(student), [student]);
    const color = getLevelColor(risk.level);
    const isHigh = risk.level === "HIGH";
    const isSafe = risk.level === "SAFE";

    const stressData = useMemo(() => {
        const attVals = student.attendance || [100, 100, 100, 100, 100];
        const volatility = attVals.length > 1 ? Math.max(...attVals) - Math.min(...attVals) : 0;
        const daVal = Math.min(100, volatility * 4);

        const vulnRaw = student.financial ? student.financial.vulnerabilityScore : 0;
        const fVal = Math.min(100, (vulnRaw <= 10 ? vulnRaw * 10 : vulnRaw) + (student.financial && student.financial.feeStatus === "Pending" ? 30 : 0));

        const lastMark = student.marks && student.marks.length ? student.marks[student.marks.length - 1] : 0;
        const pVal = Math.max(0, 100 - lastMark);

        const mVal = risk.score;

        const Wa = 0.25;
        const Wf = 0.20;
        const Wp = 0.30;
        const Wml = 0.25;

        const score = Math.min(100, Math.max(0, Math.round((Wa * daVal) + (Wf * fVal) + (Wp * pVal) + (Wml * mVal))));

        return {
            daVal,
            fVal,
            pVal,
            mVal,
            Wa,
            Wf,
            Wp,
            Wml,
            score
        };
    }, [student, risk]);

    const timelineEvents = useMemo(() => {
        const events = [];
        const level = risk.level;
        
        // Base Week 1 event (common for all)
        events.push({
            date: "Oct 12, 2026",
            title: "Semester Commencement",
            desc: "Student enrolled in courses. Assigned to primary academic advisor.",
            status: "success",
            icon: "BookOpen"
        });

        if (level === "HIGH" || level === "MODERATE") {
            const attVal = student.attendance[student.attendance.length - 1];
            events.push({
                date: "Oct 26, 2026",
                title: "Attendance Drop Warning",
                desc: `Student attendance fell to ${attVal}%. Triggers system monitoring alert.`,
                status: "warning",
                icon: "AlertTriangle"
            });

            events.push({
                date: "Nov 02, 2026",
                title: "Risk Engine Escalation",
                desc: `Prediction engine flagged student at ${level} risk. Score reached ${risk.score}/100.`,
                status: "danger",
                icon: "ShieldAlert"
            });

            events.push({
                date: "Nov 05, 2026",
                title: "Parent Alert Transmitted",
                desc: "Automatic notification dispatched to parents regarding academic performance warning.",
                status: "info",
                icon: "Bell"
            });

            events.push({
                date: "Nov 12, 2026",
                title: "Faculty Mentor Appointed",
                desc: `Assigned senior advisor ${student.facultyAdvisor} to lead the study stabilization protocol.`,
                status: "success",
                icon: "GraduationCap"
            });

            events.push({
                date: "Nov 19, 2026",
                title: "Active Intervention Created",
                desc: "Created structured intervention track: monitoring academic submissions and mandatory tutorials.",
                status: "danger",
                icon: "Zap"
            });

            if (student.marks[student.marks.length - 1] < 55) {
                events.push({
                    date: "Nov 26, 2026",
                    title: "Remedial Cluster Tutorial Scheduled",
                    desc: `Assigned remedial sessions due to test score of ${student.marks[student.marks.length - 1]}%.`,
                    status: "warning",
                    icon: "Clock"
                });
            }
        } else {
            // SAFE students
            events.push({
                date: "Oct 26, 2026",
                title: "Stable Attendance Audit",
                desc: `Verified consistent attendance of ${student.attendance[student.attendance.length - 1]}%. Target metric achieved.`,
                status: "success",
                icon: "CheckCircle2"
            });

            events.push({
                date: "Nov 02, 2026",
                title: "Risk Engine Audit: Stable",
                desc: `System checked academic health. Score is safe at ${risk.score}/100.`,
                status: "success",
                icon: "ShieldCheck"
            });

            if (student.financial.scholarshipEligible) {
                events.push({
                    date: "Nov 08, 2026",
                    title: "Scholarship Alignment Review",
                    desc: `Eligible for ${student.financial.scholarshipType || 'Scholarship'}. Maintaining academic status requirement.`,
                    status: "info",
                    icon: "Wallet"
                });
            }

            if (student.competitions > 0) {
                events.push({
                    date: "Nov 15, 2026",
                    title: "Co-Curricular Milestone",
                    desc: `Participated in ${student.competitions} technical competition/hackathon, boosting student portfolio.`,
                    status: "success",
                    icon: "Star"
                });
            }

            events.push({
                date: "Nov 22, 2026",
                title: "Progressive Growth Certified",
                desc: `Term performance is solid with Average test marks of ${Math.round(student.marks.reduce((a,b)=>a+b,0)/student.marks.length)}%.`,
                status: "success",
                icon: "TrendingUp"
            });
        }

        return events;
    }, [student, risk]);

    const radius = 80;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = skeletonLoading ? circumference : circumference - (displayScore / 100) * circumference;

    const shapData = [
        { factor: 'Attendance', value: risk.breakdown.attendance, type: 'attendance' },
        { factor: 'Recent Marks', value: risk.breakdown.marks, type: 'marks' },
        { factor: 'LMS Inactivity', value: risk.breakdown.lms, type: 'lms' },
        { factor: 'Assignments', value: risk.breakdown.assignments, type: 'assignments' },
        { factor: 'Co-curriculars', value: -risk.breakdown.competitions, type: 'safe' }
    ].filter(d => d.value !== 0).sort((a, b) => Math.abs(b.value) - Math.abs(a.value));

    const attData = student.attendance.map((v, i) => ({ week: `W${i + 1}`, val: v }));
    const marksData = student.marks.map((v, i) => ({ test: `T${i + 1}`, val: v }));

    const aiAnalysis = useMemo(() => {
        const factors = [];
        const actions = [];
        
        const currentAtt = student.attendance[student.attendance.length - 1];
        if (currentAtt < 75) {
            factors.push("Low Attendance");
            actions.push({
                type: "Attendance Counseling",
                desc: "Recommend mandatory attendance counseling session.",
                icon: "Users"
            });
        }
        
        const currentMark = student.marks[student.marks.length - 1];
        if (currentMark < 50) {
            factors.push("Multiple Backlogs");
            actions.push({
                type: "Schedule Remedial Sessions",
                desc: "Enroll in remedial tutoring for subjects below 50%.",
                icon: "BookOpen"
            });
        }
        
        const isAttDeclining = student.attendance[2] > student.attendance[3] && student.attendance[3] > student.attendance[4];
        const isMarksDeclining = student.marks[2] > student.marks[3] && student.marks[3] > student.marks[4];
        if (isAttDeclining || isMarksDeclining) {
            factors.push("Declining Performance Trend");
            actions.push({
                type: "Weekly Academic Monitoring",
                desc: "Set up weekly status monitoring check-ins with mentor.",
                icon: "Clock"
            });
        }
        
        const recentLms = (student.lmsLogins[3] + student.lmsLogins[4]) / 2;
        if (recentLms < 5) {
            factors.push("Low LMS Engagement");
        }
        
        if (risk.score >= 60) {
            factors.push("High Risk Score");
            actions.push({
                type: "Assign Faculty Mentor",
                desc: "Appoint senior advisor to supervise immediate stability measures.",
                icon: "GraduationCap"
            });
            actions.push({
                type: "Notify Parent",
                desc: "Alert parents regarding critical drop in performance indicators.",
                icon: "ShieldAlert"
            });
        } else if (risk.score >= 35) {
            actions.push({
                type: "Assign Faculty Mentor",
                desc: "Appoint mentor to guide student on performance recovery.",
                icon: "GraduationCap"
            });
        }
        
        if (actions.length === 0) {
            actions.push({
                type: "Encourage Co-curriculars",
                desc: "Encourage active participation in student technical clubs and events.",
                icon: "Star"
            });
        }

        let summaryText = "";
        let summaryPoints = [];
        if (risk.level === "HIGH") {
            summaryText = `${student.name} is classified as High Risk primarily due to `;
            const issues = [];
            const points = [];
            if (currentAtt < 75) {
                issues.push(`severely low attendance (${currentAtt}%)`);
                points.push(`Low Attendance Threshold: Current attendance is at ${currentAtt}%, which is below the mandatory 75% requirement.`);
            }
            if (currentMark < 50) {
                issues.push(`poor exam marks (${currentMark}%)`);
                points.push(`Academic Performance: Average assessment marks are critically low at ${currentMark}% (passing target is 50%).`);
            }
            if (isAttDeclining || isMarksDeclining) {
                issues.push("a steady downward performance trend");
                points.push("Declining Trajectory: Student displays a steady downward trend in attendance and test performance.");
            }
            if (recentLms < 5) {
                issues.push("critically low LMS activity");
                points.push(`LMS Engagement: Digitally inactive with critically low LMS portal interaction (average < 5 weekly logins).`);
            }
            if (student.behaviorIncidents >= 1) {
                issues.push("recent behavioral incidents");
                points.push(`Behavioral Flags: Student profiles show recent behavioral incidents or attendance disputes flagged.`);
            }
            summaryText += issues.join(", ") + ". Immediate preventive intervention is strongly advised to prevent academic failure.";
            summaryPoints.push(`${student.name} is classified under HIGH RISK status. Primary drivers of instability:`);
            summaryPoints.push(...points);
            summaryPoints.push("Immediate preventive intervention is strongly advised to prevent academic failure.");
        } else if (risk.level === "MODERATE") {
            summaryText = `${student.name} shows Moderate Risk characteristics. This is driven by `;
            const issues = [];
            const points = [];
            if (currentAtt < 85 && currentAtt >= 75) {
                issues.push(`sub-optimal attendance (${currentAtt}%)`);
                points.push(`Sub-optimal Attendance: Attendance has slipped to ${currentAtt}% (requires monitoring to prevent threshold breach).`);
            }
            if (currentMark < 65 && currentMark >= 50) {
                issues.push(`moderate marks (${currentMark}%)`);
                points.push(`Average Academic Standing: Term marks average stands at ${currentMark}%, indicating a need for remedial attention.`);
            }
            if (recentLms < 10) {
                issues.push("reduced digital activity in the LMS portal");
                points.push("LMS Activity Shift: Reduced engagement frequency and learning resource access in the LMS portal.");
            }
            if (student.assignmentDelays > 0) {
                issues.push(`${student.assignmentDelays} late assignment submissions`);
                points.push(`Late Submissions: ${student.assignmentDelays} late assignment submissions flagged over the semester.`);
            }
            if (issues.length === 0) {
                issues.push("minor shifts in engagement indicators");
                points.push("Engagement Indicators: Subtle fluctuations in attendance and class participation.");
            }
            summaryText += issues.join(", ") + ". Preventive support is recommended to stabilize their performance.";
            summaryPoints.push(`${student.name} shows MODERATE RISK characteristics. Areas of concern:`);
            summaryPoints.push(...points);
            summaryPoints.push("Preventive support is recommended to stabilize their academic performance.");
        } else {
            summaryText = `${student.name} maintains a Safe standing. Attendance (${currentAtt}%) and academic indicators (${currentMark}%) are strong, with healthy LMS logins and minimal delays. Trajectory remains stable and positive.`;
            summaryPoints = [
                `${student.name} maintains a SAFE standing with no immediate risk factors.`,
                `Strong Attendance: Attendance is recorded at a healthy ${currentAtt}%.`,
                `Solid Academics: Term grades and test performance average is stable at ${currentMark}%.`,
                `Active Engagement: Healthy LMS platform logins and no late assignment submissions flagged.`,
                "Overall Trajectory: Academic performance remains stable, positive, and on-track."
            ];
        }
        
        return { factors, actions, summaryText, summaryPoints };
    }, [student, risk]);

    return (
        <div className="p-6 animate-page max-w-7xl mx-auto pb-20">
            <button onClick={onBack} className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:text-white mb-6 transition-colors">
                <ArrowLeft className="w-5 h-5" /> Back to Students
            </button>

            {skeletonLoading ? (
                <div style={{ opacity: 1, transition: 'opacity 200ms ease' }}>
                    <div style={{ display: 'flex', gap: 20, marginBottom: 32 }}>
                        <div className="skeleton-block" style={{ width: 72, height: 72, borderRadius: 36 }} />
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
                            <div className="skeleton-block" style={{ width: '40%', height: 18, borderRadius: 6 }} />
                            <div className="skeleton-block" style={{ width: '25%', height: 13, borderRadius: 6 }} />
                        </div>
                    </div>
                    <div className="skeleton-block" style={{ width: 180, height: 180, borderRadius: 90, margin: '0 auto 32px' }} />
                    {[1, 2, 3].map(i => (
                        <div key={i} className="skeleton-block" style={{ width: '100%', height: 96, borderRadius: 16, marginBottom: 16 }} />
                    ))}
                </div>
            ) : (
                <div style={{ opacity: skeletonLoading ? 0 : 1, transition: 'opacity 250ms ease' }}>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8 relative">
                        <div className="flex items-center gap-6">
                            <div className="w-24 h-24 rounded-full flex items-center justify-center font-bold text-3xl bg-[#0B0B0C] shadow-2xl relative"
                                style={{ border: `3px solid ${isSafe ? 'rgba(77,163,255,0.26)' : isHigh ? '#F59E0B' : color}`, color: color }}>
                                {student.name.split(' ').map(n => n[0]).join('')}
                                {isHigh && <div className="absolute inset-0 rounded-full blur-md opacity-50" style={{ backgroundColor: color }}></div>}
                            </div>
                            <div>
                                <h1 className="text-4xl font-bold mb-2 tracking-tight flex items-center">{student.name}</h1>
                                <div className="flex gap-3 text-sm">
                                    <span className="text-gray-600 dark:text-gray-400">ID: <span className="text-gray-900 dark:text-white font-medium">{student.id}</span></span>
                                    <span className="px-2 py-0.5 rounded bg-white/10 text-gray-700 dark:text-gray-300 font-medium">{student.dept}</span>
                                    <span className="px-2 py-0.5 rounded bg-white/10 text-gray-700 dark:text-gray-300 font-medium">Sem {student.sem}</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-end gap-6 ml-auto">
                            <div className="text-right">
                                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Faculty Advisor</div>
                                <div className="font-semibold">{student.facultyAdvisor}</div>
                                <div className="text-xs text-gray-500 mt-1">Prev GPA: {student.prevGPA}</div>
                            </div>

                            <div className={`px-6 py-3 rounded-2xl border-2 shadow-lg flex items-center justify-center font-extrabold text-xl tracking-wider ${isHigh ? 'risk-pulse' : ''}`}
                                style={{ borderColor: isSafe ? 'rgba(77,163,255,0.24)' : color, color: color, backgroundColor: isSafe ? 'rgba(77,163,255,0.10)' : `${color}15`, textShadow: isSafe ? 'none' : `0 0 10px ${color}` }}>
                                {risk.level} RISK
                            </div>
                        </div>
                    </div>

                    <HeaderUnderline title="Risk Intelligence" />

                    {/* AI Insights Section */}
                    <div className="card-tier-3 p-6 mb-8 relative overflow-hidden bg-gradient-to-br from-[#4DA3FF]/5 to-indigo-500/5 dark:from-[#4DA3FF]/10 dark:to-purple-500/5 border-[#4DA3FF]/20 animate-fade-up">
                        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                            <Cpu className="w-28 h-28 text-[#4DA3FF]" />
                        </div>
                        
                        <div className="flex items-center gap-3 mb-5">
                            <div className="p-2 bg-[#4DA3FF]/10 rounded-xl text-[#4DA3FF]">
                                <Cpu className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                                    AI Insights Engine
                                    <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-[#4DA3FF]/10 text-[#4DA3FF]">Active</span>
                                </h3>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Automated diagnostic and recommended path</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div className="lg:col-span-2 space-y-4">
                                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                    <div className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">Automated Executive Summary</div>
                                    <ul className="space-y-3">
                                        {aiAnalysis.summaryPoints.map((point, index) => {
                                            const isHeader = index === 0;
                                            const isFooter = index === aiAnalysis.summaryPoints.length - 1;
                                            const isHighlight = isHeader || isFooter;
                                            
                                            let bulletColor = "bg-[#4DA3FF]"; // default/safe/info
                                            if (risk.level === "HIGH") {
                                                bulletColor = isFooter ? "bg-[#EF4444] animate-pulse" : isHeader ? "bg-[#EF4444]" : "bg-[#EF4444]/60";
                                            } else if (risk.level === "MODERATE") {
                                                bulletColor = isFooter ? "bg-[#F59E0B]" : isHeader ? "bg-[#F59E0B]" : "bg-[#F59E0B]/60";
                                            } else {
                                                bulletColor = "bg-green-500";
                                            }

                                            return (
                                                <li key={index} className={`text-xs md:text-[13px] flex gap-2.5 items-start leading-relaxed ${isHighlight ? 'font-bold text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-300 font-medium'}`}>
                                                    <span className={`mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 ${bulletColor}`}></span>
                                                    <span>{point}</span>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>

                                <div>
                                    <div className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">AI Identified Risk Factors</div>
                                    <div className="flex flex-wrap gap-2">
                                        {aiAnalysis.factors.length > 0 ? (
                                            aiAnalysis.factors.map((factor, i) => (
                                                <span key={i} className="px-3 py-1 rounded-full text-xs font-semibold bg-[#EF4444]/10 text-[#EF4444] border border-[#EF4444]/20 flex items-center gap-1.5 animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444]"></span>
                                                    {factor}
                                                </span>
                                            ))
                                        ) : (
                                            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-500/10 text-green-500 border border-green-500/20 flex items-center gap-1.5">
                                                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                                No Risk Factors Identified
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col justify-between">
                                <div>
                                    <div className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">AI Recommended Actions</div>
                                    <div className="space-y-3">
                                        {aiAnalysis.actions.map((act, i) => {
                                            let IconComp = Zap;
                                            if (act.icon === "Users") IconComp = Users;
                                            else if (act.icon === "BookOpen") IconComp = BookOpen;
                                            else if (act.icon === "Clock") IconComp = Clock;
                                            else if (act.icon === "GraduationCap") IconComp = GraduationCap;
                                            else if (act.icon === "ShieldAlert") IconComp = ShieldAlert;
                                            else if (act.icon === "Star") IconComp = Star;
                                            
                                            return (
                                                <div key={i} className="flex gap-3 text-xs">
                                                    <div className="mt-0.5 p-1 bg-white/5 rounded text-[#4DA3FF] flex-shrink-0">
                                                        <IconComp className="w-3.5 h-3.5" />
                                                    </div>
                                                    <div>
                                                        <div className="font-bold text-gray-900 dark:text-white">{act.type}</div>
                                                        <div className="text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">{act.desc}</div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-6 mb-8">
                        <Card tier={3} delay={0.1} className="w-full lg:w-1/3 flex flex-col items-center justify-center py-8 relative overflow-hidden">
                            {isHigh && <div className="risk-meter-glow-high"></div>}
                            {isSafe && <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(77,163,255,0.13)_0%,transparent_70%)] pointer-events-none"></div>}

                            <div className={`relative w-48 h-48 flex items-center justify-center ${isHigh ? 'risk-vibrate' : ''}`}>
                                <svg width="200" height="200" className="absolute -rotate-90 transform">
                                    <circle cx="100" cy="100" r={radius} fill="none" stroke="var(--glass-border-08)" strokeWidth="12" />
                                    <circle
                                        cx="100" cy="100" r={radius} fill="none"
                                        stroke={color} strokeWidth="12" strokeLinecap="round"
                                        strokeDasharray={circumference} strokeDashoffset={strokeDashoffset}
                                        style={{ transition: 'stroke-dashoffset 1.5s ease-out' }}
                                    />
                                </svg>
                                <div className="text-center">
                                    <div className="text-5xl font-black" style={{ color: isHigh ? '#F59E0B' : color, textShadow: isHigh ? '0 0 25px rgba(245,158,11,0.25)' : 'none' }}>
                                        {displayScore}
                                    </div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400 font-bold tracking-widest uppercase mt-1">Score</div>
                                </div>
                            </div>

                            <div className="mt-6 text-center">
                                <div className="text-xl font-bold mb-2" style={{ color: color }}>{risk.level}</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400 px-4">
                                    Multi-dimensional analysis based on attendance, academics, behavior, and engagement.
                                </div>
                            </div>
                        </Card>

                        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Card tier={2} delay={0.2} className="h-56 flex flex-col">
                                <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2 px-2">Attendance Trend</h3>
                                <div className="flex-1">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <LineChart data={attData} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
                                            <CartesianGrid stroke="var(--glass-border-08)" strokeDasharray="3 3" vertical={true} />
                                            <XAxis 
                                                dataKey="week" 
                                                stroke="var(--text-normal-8)" 
                                                tick={{ fill: 'var(--text-muted-4)', fontSize: 10, fontWeight: 600 }} 
                                                axisLine={{ stroke: 'var(--text-normal-8)', strokeWidth: 2 }} 
                                                tickLine={{ stroke: 'var(--text-normal-8)', strokeWidth: 2 }} 
                                                label={{ value: 'Weeks', position: 'insideBottom', offset: -10, fill: 'var(--text-normal-9)', fontSize: 10, fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }} 
                                            />
                                            <YAxis 
                                                domain={[50, 100]} 
                                                ticks={[50, 60, 70, 80, 90, 100]}
                                                stroke="var(--text-normal-8)" 
                                                tick={{ fill: 'var(--text-muted-4)', fontSize: 10, fontWeight: 600 }} 
                                                axisLine={{ stroke: 'var(--text-normal-8)', strokeWidth: 2 }} 
                                                tickLine={{ stroke: 'var(--text-normal-8)', strokeWidth: 2 }} 
                                                label={{ value: 'Att %', angle: -90, position: 'insideLeft', offset: -5, fill: 'var(--text-normal-9)', fontSize: 10, fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }} 
                                            />
                                            <RechartsTooltip content={<CustomTooltip />} />
                                            <Line type="monotone" dataKey="val" name="Attendance" stroke="#4DA3FF" strokeWidth={3} dot={{ r: 4, fill: '#4DA3FF', strokeWidth: 0 }} activeDot={{ r: 6 }} />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                            </Card>

                            <Card tier={2} delay={0.3} className="h-56 flex flex-col">
                                <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2 px-2">Academic Performance</h3>
                                <div className="flex-1">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <LineChart data={marksData} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
                                            <CartesianGrid stroke="var(--glass-border-08)" strokeDasharray="3 3" vertical={true} />
                                            <XAxis 
                                                dataKey="test" 
                                                stroke="var(--text-normal-8)" 
                                                tick={{ fill: 'var(--text-muted-4)', fontSize: 10, fontWeight: 600 }} 
                                                axisLine={{ stroke: 'var(--text-normal-8)', strokeWidth: 2 }} 
                                                tickLine={{ stroke: 'var(--text-normal-8)', strokeWidth: 2 }} 
                                                label={{ value: 'Tests', position: 'insideBottom', offset: -10, fill: 'var(--text-normal-9)', fontSize: 10, fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }} 
                                            />
                                            <YAxis 
                                                domain={[0, 100]} 
                                                ticks={[0, 20, 40, 60, 80, 100]}
                                                stroke="var(--text-normal-8)" 
                                                tick={{ fill: 'var(--text-muted-4)', fontSize: 10, fontWeight: 600 }} 
                                                axisLine={{ stroke: 'var(--text-normal-8)', strokeWidth: 2 }} 
                                                tickLine={{ stroke: 'var(--text-normal-8)', strokeWidth: 2 }} 
                                                label={{ value: 'Marks', angle: -90, position: 'insideLeft', offset: -5, fill: 'var(--text-normal-9)', fontSize: 10, fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }} 
                                            />
                                            <RechartsTooltip content={<CustomTooltip />} />
                                            <Line type="monotone" dataKey="val" name="Score" stroke="#4DA3FF" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6, fill: "#8CC7FF" }} />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                            </Card>

                            <Card tier={2} delay={0.4} className="h-40 flex flex-col justify-center text-center">
                                <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">LMS Engagement</h3>
                                <div className="text-3xl font-bold text-gray-900 dark:text-white">
                                    {Math.round((student.lmsLogins[3] + student.lmsLogins[4]) / 2)}
                                    <span className="text-sm text-gray-500 font-normal ml-2">logins/week</span>
                                </div>
                            </Card>

                            <Card tier={2} delay={0.5} className="h-40 flex flex-col justify-center text-center">
                                <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Behavior & Delays</h3>
                                <div className="flex justify-around items-center w-full px-4 mt-2">
                                    <div>
                                        <div className="text-2xl font-bold text-[#F59E0B]">{student.assignmentDelays}</div>
                                        <div className="text-xs text-gray-500">Late Subs</div>
                                    </div>
                                    <div className="w-px h-10 bg-white/10"></div>
                                    <div>
                                        <div className="text-2xl font-bold text-[#EF4444]">{student.behaviorIncidents}</div>
                                        <div className="text-xs text-gray-500">Incidents</div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>

                    <Card tier={3} delay={0.6} className="w-full mb-8">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><Sparkles className="w-5 h-5 text-[#4DA3FF]" /> Why This Risk Score?</h3>
                        <div className="flex flex-col lg:flex-row gap-8">
                            <div className="w-full lg:w-1/2 h-64 animate-chart">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={shapData} layout="vertical" margin={{ top: 15, right: 20, left: 10, bottom: 15 }}>
                                        <CartesianGrid stroke="var(--glass-border-08)" strokeDasharray="3 3" horizontal={true} vertical={true} />
                                        <XAxis type="number" stroke="var(--glass-border-08)" tick={{ fill: 'var(--text-muted-4)', fontSize: 10 }} tickLine={{ stroke: 'var(--glass-border-08)' }} axisLine={{ stroke: 'var(--glass-border-08)' }} label={{ value: 'Impact Score', position: 'insideBottom', offset: -5, fill: 'var(--text-muted-4)', fontSize: 10, fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }} />
                                        <YAxis dataKey="factor" type="category" stroke="var(--glass-border-08)" width={120} tick={{ fill: 'var(--text-muted-4)', fontSize: 11 }} tickLine={{ stroke: 'var(--glass-border-08)' }} axisLine={{ stroke: 'var(--glass-border-08)' }} />
                                        <RechartsTooltip content={<CustomTooltip />} cursor={{ fill: 'var(--glass-bg-05)' }} />
                                        <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={20}>
                                            {shapData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.type === 'attendance' ? '#F59E0B' : entry.type === 'marks' ? '#F59E0B' : entry.type === 'lms' ? '#8CC7FF' : entry.type === 'assignments' ? '#4DA3FF' : '#34D399'} />
                                            ))}
                                        </Bar>
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-4 pr-4">
                                {shapData.map((d, i) => (
                                    <div key={i} className="flex items-start gap-3 animate-fade-up" style={{ animationDelay: `${0.7 + i * 0.1}s` }}>
                                        <div className="mt-0.5">
                                            {d.type === 'risk' ? <TrendingDown className="w-5 h-5 text-[#EF4444]" /> : <TrendingUp className="w-5 h-5 text-[#4DA3FF]" />}
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium text-gray-900 dark:text-white">{d.factor}</div>
                                            <div className="text-xs text-gray-600 dark:text-gray-400">
                                                {d.value > 0 ? `Contributes +${d.value} pts to risk score` : `Reduces risk score by ${Math.abs(d.value)} pts`}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Card>

                    {/* NEW WAVE 1 PANELS */}

                    {/* Panel A: Financial Risk Index */}
                    <div style={{ background: 'var(--glass-bg-02)', border: '1px solid var(--glass-border-06)', backdropFilter: 'blur(20px)', borderRadius: 20, padding: 24, marginBottom: 24 }}>
                        <div style={{ fontFamily: 'Syne', fontSize: 22, fontWeight: 600, letterSpacing: 0.3, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
                            <Wallet className="w-5 h-5 text-[#4DA3FF]" /> Financial Risk Index
                        </div>
                        <div style={{ height: 2, borderRadius: 1, background: 'linear-gradient(90deg, #4DA3FF, transparent)', width: 0, animation: 'expandLine 1s 0.2s ease forwards', marginBottom: 24 }}></div>
                        <div style={{ display: 'flex', flexDirection: 'row', gap: 16 }}>
                            <div style={{ flex: 1, borderRight: '1px solid var(--glass-border-05)', paddingRight: 16 }}>
                                <div style={{ fontSize: 12, color: 'var(--text-muted-4)', marginBottom: 8 }}>Fee Status</div>
                                <span style={{
                                    background: student.financial.feeStatus === "Paid" ? 'rgba(16,185,129,0.12)' : student.financial.feeStatus === "Pending" ? 'rgba(239,68,68,0.12)' : 'rgba(77,163,255,0.12)',
                                    border: `1px solid ${student.financial.feeStatus === "Paid" ? 'rgba(16,185,129,0.3)' : student.financial.feeStatus === "Pending" ? 'rgba(239,68,68,0.3)' : 'rgba(77,163,255,0.3)'}`,
                                    color: student.financial.feeStatus === "Paid" ? '#4DA3FF' : student.financial.feeStatus === "Pending" ? '#EF4444' : '#4DA3FF',
                                    borderRadius: 20, padding: '4px 12px', fontSize: 13, fontWeight: 500, display: 'inline-block'
                                }}>
                                    {student.financial.feeStatus}
                                </span>
                            </div>
                            <div style={{ flex: 1, borderRight: '1px solid var(--glass-border-05)', paddingRight: 16 }}>
                                <div style={{ fontSize: 12, color: 'var(--text-muted-4)', marginBottom: 8 }}>Financial Vulnerability</div>
                                <div style={{ height: 6, background: 'rgba(255,255,255,0.08)', borderRadius: 3, width: '100%', marginBottom: 4 }}>
                                    <div style={{
                                        height: 6, borderRadius: 3, width: `${student.financial.vulnerabilityScore}%`,
                                        background: 'linear-gradient(90deg, #F59E0B, #FFD166)',
                                        transition: 'width 1s ease 0.3s'
                                    }}></div>
                                </div>
                                <div style={{ textAlign: 'right', fontSize: 13, color: student.financial.vulnerabilityScore <= 30 ? '#4DA3FF' : student.financial.vulnerabilityScore <= 60 ? '#F59E0B' : '#EF4444' }}>
                                    {student.financial.vulnerabilityScore}
                                </div>
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontSize: 12, color: 'var(--text-muted-4)', marginBottom: 8 }}>Scholarship Status</div>
                                {student.financial.scholarshipEligible ? (
                                    <div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#4DA3FF', fontSize: 13 }}><CheckCircle2 size={14} color="#4DA3FF" /> Eligible</div>
                                        <div style={{ fontSize: 13, color: 'var(--text-normal-65)', marginTop: 2 }}>{student.financial.scholarshipType}</div>
                                    </div>
                                ) : (
                                    <div style={{ color: 'var(--text-muted-25)', fontSize: 13 }}>Not Eligible</div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Panel B: Socio-Economic Profile */}
                    <div style={{ background: 'var(--glass-bg-02)', border: '1px solid var(--glass-border-06)', backdropFilter: 'blur(20px)', borderRadius: 20, padding: 24, marginBottom: 24 }}>
                        <div style={{ fontFamily: 'Syne', fontSize: 22, fontWeight: 600, letterSpacing: 0.3, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
                            <Building2 className="w-5 h-5 text-[#4DA3FF]" /> Socio-Economic Profile
                        </div>
                        <div style={{ height: 2, borderRadius: 1, background: 'linear-gradient(90deg, #4DA3FF, transparent)', width: 0, animation: 'expandLine 1s 0.2s ease forwards', marginBottom: 24 }}></div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                            <div style={{ background: 'var(--glass-bg-03)', border: '1px solid var(--glass-border-06)', borderRadius: 12, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 10 }}>
                                <Wallet size={16} />
                                <div>
                                    <div style={{ fontSize: 13, color: 'var(--text-normal-65)' }}>Parent Income</div>
                                    <div style={{
                                        fontSize: 13,
                                        color: student.socioEconomic.parentIncomeBracket === "Below 1L" ? '#EF4444' : student.socioEconomic.parentIncomeBracket === "1L-3L" ? '#F59E0B' : student.socioEconomic.parentIncomeBracket === "3L-6L" ? 'rgba(255,255,255,0.7)' : '#4DA3FF'
                                    }}>{student.socioEconomic.parentIncomeBracket}</div>
                                </div>
                            </div>
                            <div style={{ background: 'var(--glass-bg-03)', border: '1px solid var(--glass-border-06)', borderRadius: 12, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 10 }}>
                                <MapPin size={16} />
                                <div>
                                    <div style={{ fontSize: 13, color: 'var(--text-normal-65)' }}>Location</div>
                                    <div style={{ fontSize: 13, color: 'var(--text-normal-8)' }}>
                                        {student.socioEconomic.location === "Rural" && <span style={{ width: 6, height: 6, borderRadius: 3, background: '#F59E0B', display: 'inline-block', marginRight: 6 }}></span>}
                                        {student.socioEconomic.location}
                                    </div>
                                </div>
                            </div>
                            {student.socioEconomic.firstGenerationLearner ? (
                                <div style={{ gridColumn: 'span 2', background: 'rgba(77,163,255,0.07)', border: '1px solid rgba(77,163,255,0.20)', borderRadius: 12, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 10 }}>
                                    <Star size={16} color="#4DA3FF" />
                                    <div>
                                        <div style={{ color: '#4DA3FF', fontWeight: 600, fontSize: 13 }}>First-Generation Learner</div>
                                        <div style={{ fontSize: 11, color: 'rgba(77,163,255,0.45)' }}>Eligible for additional institutional support</div>
                                    </div>
                                </div>
                            ) : (
                                <div style={{ background: 'var(--glass-bg-03)', border: '1px solid var(--glass-border-06)', borderRadius: 12, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 10 }}>
                                    <Users size={16} color="rgba(255,255,255,0.3)" />
                                    <div style={{ color: 'var(--text-muted-3)', fontSize: 13 }}>Standard Enrollment</div>
                                </div>
                            )}
                            {student.socioEconomic.genderRiskFlag && (
                                <div style={{ gridColumn: student.socioEconomic.firstGenerationLearner ? 'span 1' : 'span 1', background: 'rgba(236,72,153,0.08)', border: '1px solid rgba(236,72,153,0.2)', borderRadius: 12, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 10 }}>
                                    <Shield size={16} color="#F472B6" />
                                    <div>
                                        <div style={{ color: '#F472B6', fontSize: 13 }}>Gender Equity Flag</div>
                                        <div style={{ fontSize: 11, color: 'rgba(244,114,182,0.6)' }}>Support resources available</div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Panel C: Dropout Risk Prediction */}
                    <div style={{
                        background: 'var(--glass-bg-02)',
                        border: `1px solid ${isHigh ? 'rgba(239,68,68,0.25)' : risk.level === "MODERATE" ? 'rgba(245,158,11,0.2)' : 'rgba(77,163,255,0.15)'}`,
                        backdropFilter: 'blur(20px)', borderRadius: 20, padding: 24, marginBottom: 24
                    }}>
                        <div style={{ fontFamily: 'Syne', fontSize: 22, fontWeight: 600, letterSpacing: 0.3, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
                            <Clock className="w-5 h-5 text-[#4DA3FF]" /> Dropout Risk Prediction
                        </div>
                        <div style={{ height: 2, borderRadius: 1, background: 'linear-gradient(90deg, #4DA3FF, transparent)', width: 0, animation: 'expandLine 1s 0.2s ease forwards', marginBottom: 24 }}></div>
                        <div style={{ display: 'flex', flexDirection: 'row', gap: 16 }}>
                            <div style={{ flex: '0 0 60%' }}>
                                <div style={{ fontSize: 12, color: 'var(--text-muted-4)', marginBottom: 8 }}>Projected Dropout Risk Window</div>
                                <div style={{ fontFamily: 'Syne', fontSize: 28, fontWeight: 700, color: color }}>
                                    {student.dropoutRiskWindow}
                                </div>
                                <div style={{
                                    fontSize: 12, marginTop: 4,
                                    color: isHigh ? 'rgba(239,68,68,0.8)' : risk.level === "MODERATE" ? 'rgba(245,158,11,0.8)' : 'rgba(77,163,255,0.8)'
                                }}>
                                    {isHigh ? 'Immediate intervention required' : risk.level === "MODERATE" ? 'Monitoring escalation recommended' : 'Student trajectory is stable'}
                                </div>
                                <div style={{ marginTop: 16 }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: 'var(--text-muted-4)' }}>
                                        <span>Now</span>
                                        <span>12 months</span>
                                    </div>
                                    <div style={{ height: 4, background: 'rgba(255,255,255,0.06)', borderRadius: 2, position: 'relative', marginTop: 4 }}>
                                        <div style={{
                                            height: 4, borderRadius: 2, background: color, position: 'absolute', left: 0,
                                            width: student.dropoutRiskWindow === "1–3 Months" ? '20%' : student.dropoutRiskWindow === "3–6 Months" ? '40%' : student.dropoutRiskWindow === "6–12 Months" ? '70%' : '0%',
                                            transition: 'width 1s ease 0.4s'
                                        }}></div>
                                        <div style={{
                                            width: 10, height: 10, borderRadius: 5, background: color, position: 'absolute', top: -3,
                                            left: student.dropoutRiskWindow === "1–3 Months" ? '20%' : student.dropoutRiskWindow === "3–6 Months" ? '40%' : student.dropoutRiskWindow === "6–12 Months" ? '70%' : '0%',
                                            boxShadow: isSafe ? 'none' : '0 0 18px rgba(77,163,255,0.15)'
                                        }}></div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ flex: '0 0 40%' }}>
                                <div style={{ background: 'var(--glass-bg-02)', border: '1px solid var(--glass-border-05)', borderRadius: 12, padding: 16, textAlign: 'center' }}>
                                    <div style={{ fontSize: 11, color: 'var(--text-muted-35)', marginBottom: 8 }}>Confidence Level</div>
                                    <div style={{ fontFamily: 'Syne', fontSize: 28, fontWeight: 600, color: '#8CC7FF', letterSpacing: 0.3 }}>
                                        {isHigh ? '87%' : risk.level === "MODERATE" ? '71%' : '94%'}
                                    </div>
                                    <div style={{ fontSize: 10, color: 'var(--text-muted-25)', marginBottom: 4 }}>Model accuracy</div>
                                    <div style={{ fontSize: 10, color: 'var(--text-muted-2)' }}>Based on 6-dimension analysis</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Panel D: Explainable Stress Score */}
                    <div style={{ background: 'var(--glass-bg-02)', border: '1px solid var(--glass-border-06)', backdropFilter: 'blur(20px)', borderRadius: 20, padding: 24, marginBottom: 24 }}>
                        <div className="flex justify-between items-center mb-2">
                            <div style={{ fontFamily: 'Syne', fontSize: 22, fontWeight: 600, letterSpacing: 0.3, display: 'flex', alignItems: 'center', gap: 8 }}>
                                <Activity className="w-5 h-5 text-[#4DA3FF]" /> Stress Score Calculation
                            </div>
                            <span style={{
                                background: stressData.score <= 40 ? 'rgba(16,185,129,0.12)' : stressData.score <= 70 ? 'rgba(245,158,11,0.12)' : 'rgba(239,68,68,0.12)',
                                border: `1px solid ${stressData.score <= 40 ? 'rgba(16,185,129,0.3)' : stressData.score <= 70 ? 'rgba(245,158,11,0.3)' : 'rgba(239,68,68,0.3)'}`,
                                color: stressData.score <= 40 ? '#34D399' : stressData.score <= 70 ? '#F59E0B' : '#EF4444',
                                borderRadius: 20, padding: '4px 12px', fontSize: 13, fontWeight: 700
                            }}>
                                {stressData.score} / 100
                            </span>
                        </div>
                        <div style={{ height: 2, borderRadius: 1, background: 'linear-gradient(90deg, #4DA3FF, transparent)', width: 0, animation: 'expandLine 1s 0.2s ease forwards', marginBottom: 16 }}></div>

                        <div className="flex flex-col gap-3">
                            <div className="flex justify-between items-center">
                                <span className="text-xs text-gray-500 dark:text-gray-400">
                                    Status: <span className="font-semibold" style={{ color: stressData.score <= 40 ? '#34D399' : stressData.score <= 70 ? '#F59E0B' : '#EF4444' }}>
                                        {stressData.score <= 40 ? 'Low Stress' : stressData.score <= 70 ? 'Moderate Stress' : 'High Stress'}
                                    </span>
                                </span>
                                <button
                                    onClick={() => setStressCollapsed(!stressCollapsed)}
                                    className="text-xs text-[#4DA3FF] hover:underline flex items-center gap-1 font-semibold"
                                >
                                    {stressCollapsed ? "Show Calculation Breakdown" : "Hide Calculation Breakdown"}
                                    <ChevronRight className={`w-3.5 h-3.5 transform transition-transform ${stressCollapsed ? '' : 'rotate-90'}`} />
                                </button>
                            </div>

                            {!stressCollapsed && (
                                <div className="mt-4 space-y-4 animate-fade-up">
                                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                                        <div className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5 font-sans">Weighted Stress Formula</div>
                                        <div className="text-sm font-mono text-gray-800 dark:text-gray-300 overflow-x-auto py-1">
                                            S = (W<sub>a</sub> × ΔA) + (W<sub>f</sub> × F) + (W<sub>p</sub> × P) + (W<sub>ml</sub> × M)
                                        </div>
                                        <div className="text-[11px] text-gray-500 mt-1">
                                            S = (0.25 × {stressData.daVal}) + (0.20 × {stressData.fVal}) + (0.30 × {stressData.pVal}) + (0.25 × {stressData.mVal}) = <span className="font-bold text-gray-900 dark:text-white">{stressData.score}</span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                                        {/* Attendance Volatility card */}
                                        <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col justify-between">
                                            <div>
                                                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Attendance Volatility (ΔA)</div>
                                                <div className="text-2xl font-black text-gray-900 dark:text-white mt-1">{stressData.daVal}%</div>
                                                <div className="text-xs text-gray-500 mt-1.5">Measures deviations in week-to-week class attendance patterns.</div>
                                            </div>
                                            <div className="flex justify-between items-center text-[10px] text-gray-500 mt-4 pt-2 border-t border-white/5">
                                                <span>Weight: {Math.round(stressData.Wa * 100)}%</span>
                                                <span className="font-semibold text-gray-800 dark:text-gray-300">+{Number((stressData.Wa * stressData.daVal).toFixed(2))} pts</span>
                                            </div>
                                        </div>

                                        {/* Financial Friction card */}
                                        <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col justify-between">
                                            <div>
                                                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Financial Friction (F)</div>
                                                <div className="text-2xl font-black text-gray-900 dark:text-white mt-1">{stressData.fVal}%</div>
                                                <div className="text-xs text-gray-500 mt-1.5">Evaluates fee payment delays and family economic vulnerability.</div>
                                            </div>
                                            <div className="flex justify-between items-center text-[10px] text-gray-500 mt-4 pt-2 border-t border-white/5">
                                                <span>Weight: {Math.round(stressData.Wf * 100)}%</span>
                                                <span className="font-semibold text-gray-800 dark:text-gray-300">+{Number((stressData.Wf * stressData.fVal).toFixed(2))} pts</span>
                                            </div>
                                        </div>

                                        {/* Performance Gap card */}
                                        <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col justify-between">
                                            <div>
                                                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Performance Gap (P)</div>
                                                <div className="text-2xl font-black text-gray-900 dark:text-white mt-1">{stressData.pVal}%</div>
                                                <div className="text-xs text-gray-500 mt-1.5">Represents the difference between expected targets and current assessment grades.</div>
                                            </div>
                                            <div className="flex justify-between items-center text-[10px] text-gray-500 mt-4 pt-2 border-t border-white/5">
                                                <span>Weight: {Math.round(stressData.Wp * 100)}%</span>
                                                <span className="font-semibold text-gray-800 dark:text-gray-300">+{Number((stressData.Wp * stressData.pVal).toFixed(2))} pts</span>
                                            </div>
                                        </div>

                                        {/* Risk Prediction card */}
                                        <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col justify-between">
                                            <div>
                                                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Risk Prediction (M)</div>
                                                <div className="text-2xl font-black text-gray-900 dark:text-white mt-1">{stressData.mVal}%</div>
                                                <div className="text-xs text-gray-500 mt-1.5">Derived from the machine learning cohort dropout probability index.</div>
                                            </div>
                                            <div className="flex justify-between items-center text-[10px] text-gray-500 mt-4 pt-2 border-t border-white/5">
                                                <span>Weight: {Math.round(stressData.Wml * 100)}%</span>
                                                <span className="font-semibold text-gray-800 dark:text-gray-300">+{Number((stressData.Wml * stressData.mVal).toFixed(2))} pts</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-4 rounded-xl bg-[#4DA3FF]/10 border border-[#4DA3FF]/20 text-xs text-gray-900 dark:text-gray-200 leading-relaxed font-sans mt-3">
                                        <strong>AI Summary Analysis:</strong> Primary contributors to this student's stress score are attendance volatility and academic performance decline.
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
 
                    {/* Student Activity Timeline */}
                    <div style={{ background: 'var(--glass-bg-02)', border: '1px solid var(--glass-border-06)', backdropFilter: 'blur(20px)', borderRadius: 20, padding: 24, marginBottom: 24 }}>
                        <div style={{ fontFamily: 'Syne', fontSize: 22, fontWeight: 600, letterSpacing: 0.3, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
                            <Calendar className="w-5 h-5 text-[#4DA3FF]" /> Student Activity Timeline
                        </div>
                        <div style={{ height: 2, borderRadius: 1, background: 'linear-gradient(90deg, #4DA3FF, transparent)', width: 0, animation: 'expandLine 1s 0.2s ease forwards', marginBottom: 24 }}></div>

                        <div className="relative border-l border-gray-200 dark:border-white/10 ml-4 space-y-6">
                            {timelineEvents.map((evt, idx) => {
                                let IconComp = BookOpen;
                                if (evt.icon === "AlertTriangle") IconComp = AlertTriangle;
                                else if (evt.icon === "ShieldAlert") IconComp = ShieldAlert;
                                else if (evt.icon === "Bell") IconComp = Bell;
                                else if (evt.icon === "GraduationCap") IconComp = GraduationCap;
                                else if (evt.icon === "Zap") IconComp = Zap;
                                else if (evt.icon === "Clock") IconComp = Clock;
                                else if (evt.icon === "CheckCircle2") IconComp = CheckCircle2;
                                else if (evt.icon === "ShieldCheck") IconComp = ShieldCheck;
                                else if (evt.icon === "Wallet") IconComp = Wallet;
                                else if (evt.icon === "Star") IconComp = Star;
                                else if (evt.icon === "TrendingUp") IconComp = TrendingUp;

                                const isDanger = evt.status === "danger";
                                const isWarning = evt.status === "warning";
                                const isInfo = evt.status === "info";

                                const dotColor = isDanger ? '#EF4444' : isWarning ? '#F59E0B' : isInfo ? '#8CC7FF' : '#34D399';
                                const dotBg = isDanger ? 'rgba(239,68,68,0.15)' : isWarning ? 'rgba(245,158,11,0.15)' : isInfo ? 'rgba(140,199,255,0.15)' : 'rgba(52,211,153,0.15)';

                                return (
                                    <div key={idx} className="relative pl-6 animate-fade-up" style={{ animationDelay: `${idx * 0.08}s` }}>
                                        {/* Status Dot */}
                                        <div 
                                            className="absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 flex items-center justify-center" 
                                            style={{ borderColor: dotColor, backgroundColor: dotBg, boxShadow: `0 0 10px ${dotColor}33` }}
                                        >
                                            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: dotColor }}></div>
                                        </div>
                                        
                                        {/* Event Content */}
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="text-[10px] text-gray-500 font-bold uppercase">{evt.date}</span>
                                                    <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                                                    <span className="text-xs font-bold text-gray-900 dark:text-white flex items-center gap-1">
                                                        <IconComp className="w-3.5 h-3.5" style={{ color: dotColor }} />
                                                        {evt.title}
                                                    </span>
                                                </div>
                                                <p className="text-xs text-gray-600 dark:text-gray-300">{evt.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="mt-8 relative">
                        <HeaderUnderline title="Active Interventions" />
                        <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
                            {isHigh ? (
                                <>
                                    <Card tier={2} delay={0.7} className="min-w-[280px] snap-center border-l-4 border-l-[#EF4444] flex-shrink-0">
                                        <div className="flex justify-between items-start mb-2">
                                            <div className="w-10 h-10 rounded-full bg-[#EF4444]/20 flex items-center justify-center">
                                                <Users className="w-5 h-5 text-[#EF4444]" />
                                            </div>
                                            <span className="px-2 py-1 rounded bg-[#EF4444]/20 text-[#F87171] text-xs font-bold">URGENT</span>
                                        </div>
                                        <div className="font-bold text-lg mb-1">Parent Meeting</div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">Schedule immediate call with parents regarding attendance drop.</div>
                                    </Card>
                                </>
                            ) : risk.level === "MODERATE" ? (
                                <Card tier={2} delay={0.7} className="min-w-[280px] snap-center border-l-4 border-l-[#F59E0B] flex-shrink-0">
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="w-10 h-10 rounded-full bg-[#F59E0B]/20 flex items-center justify-center">
                                            <BookOpen className="w-5 h-5 text-[#F59E0B]" />
                                        </div>
                                    </div>
                                    <div className="font-bold text-lg mb-1">Remedial Classes</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Provide structured study plan for core subjects.</div>
                                </Card>
                            ) : (
                                <Card tier={2} delay={0.7} className="min-w-[280px] snap-center border-l-4 border-l-[#4DA3FF] flex-shrink-0">
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="w-10 h-10 rounded-full bg-[#4DA3FF]/[0.18] flex items-center justify-center">
                                            <ShieldCheck className="w-5 h-5 text-[#4DA3FF]" />
                                        </div>
                                    </div>
                                    <div className="font-bold text-lg mb-1">General Monitoring</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Student is performing well. Maintain standard check-ins.</div>
                                </Card>
                            )}
                        </div>
                        <button onClick={onInterventionReq} onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.transition = 'all 0.25s ease'; e.currentTarget.style.boxShadow = '0 6px 18px rgba(77,163,255,0.16)'; }} onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0px)'; e.currentTarget.style.boxShadow = 'none'; }} className="mt-6 btn-gradient px-6 py-3 rounded-xl font-bold flex items-center gap-2">
                            <Zap className="w-5 h-5" /> Trigger New Intervention
                        </button>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
};


const InterventionsPanel = ({ students, interventions, setInterventions }) => {
    const [expandedId, setExpandedId] = useState(null);

    const STATUS_LIFECYCLE = [
        "Pending",
        "Parent Notified",
        "Mentor Assigned",
        "Remedial Scheduled",
        "Follow-Up Scheduled",
        "Resolved"
    ];

    const getStatusIndex = (status) => {
        const idx = STATUS_LIFECYCLE.indexOf(status);
        return idx !== -1 ? idx : 0;
    };

    const getStatusPercent = (status) => {
        const idx = getStatusIndex(status);
        return Math.round((idx / (STATUS_LIFECYCLE.length - 1)) * 100);
    };

    const advanceStatus = (id) => {
        setInterventions(prev => prev.map(inv => {
            if (inv.id !== id) return inv;
            const currentIdx = getStatusIndex(inv.status);
            const nextStatus = STATUS_LIFECYCLE[Math.min(currentIdx + 1, STATUS_LIFECYCLE.length - 1)];
            return { ...inv, status: nextStatus };
        }));
    };

    const resolveIntervention = (id) => {
        setInterventions(prev => prev.map(inv => inv.id === id ? { ...inv, status: "Resolved" } : inv));
    };

    const resetIntervention = (id) => {
        setInterventions(prev => prev.map(inv => inv.id === id ? { ...inv, status: "Pending" } : inv));
    };

    const active = interventions.filter(i => i.status !== "Resolved" && i.status !== "Pending").length;
    const pending = interventions.filter(i => i.status === "Pending").length;
    const complete = interventions.filter(i => i.status === "Resolved").length;

    const getStatusBadgeClass = (status) => {
        switch (status) {
            case "Pending":
                return "text-gray-500 border-gray-500/20 bg-gray-500/10";
            case "Parent Notified":
                return "text-amber-500 border-amber-500/20 bg-amber-500/10";
            case "Mentor Assigned":
                return "text-[#4DA3FF] border-[#4DA3FF]/20 bg-[#4DA3FF]/10";
            case "Remedial Scheduled":
                return "text-purple-400 border-purple-400/20 bg-purple-400/10";
            case "Follow-Up Scheduled":
                return "text-indigo-400 border-indigo-400/20 bg-indigo-400/10";
            case "Resolved":
                return "text-green-500 border-green-500/20 bg-green-500/10";
            default:
                return "text-gray-500 border-gray-500/20 bg-gray-500/10";
        }
    };

    return (
        <div className="p-6 animate-page max-w-7xl mx-auto">
            <HeaderUnderline title="Intervention Command Center" />

            <div className="flex gap-4 mb-6">
                <Card delay={0.1} className="flex-1 min-w-[150px]" style={{
                    animationName: 'staggerFadeUp',
                    animationDuration: '260ms',
                    animationTimingFunction: 'ease-out',
                    animationFillMode: 'both',
                    animationDelay: '0s'
                }}>
                    <div className="text-gray-600 dark:text-gray-400 text-sm font-semibold mb-1 flex items-center gap-2">
                        <Activity className="w-4 h-4 text-gray-900 dark:text-white" /> Total Logged
                    </div>
                    <div className="text-3xl font-bold text-gray-900 dark:text-white">{interventions.length}</div>
                </Card>
                <Card delay={0.2} className="flex-1 min-w-[150px] border-[#F59E0B]/30" style={{
                    animationName: 'staggerFadeUp',
                    animationDuration: '260ms',
                    animationTimingFunction: 'ease-out',
                    animationFillMode: 'both',
                    animationDelay: '0.06s'
                }}>
                    <div className="text-gray-600 dark:text-gray-400 text-sm font-semibold mb-1 flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#F59E0B]" /> Pending
                    </div>
                    <div className="text-3xl font-bold text-[#F59E0B]">{pending}</div>
                </Card>
                <Card delay={0.3} className="flex-1 min-w-[150px] border-[#4DA3FF]/30" style={{
                    animationName: 'staggerFadeUp',
                    animationDuration: '260ms',
                    animationTimingFunction: 'ease-out',
                    animationFillMode: 'both',
                    animationDelay: '0.12s'
                }}>
                    <div className="text-gray-600 dark:text-gray-400 text-sm font-semibold mb-1 flex items-center gap-2">
                        <Zap className="w-4 h-4 text-[#4DA3FF]" /> Active Tracker
                    </div>
                    <div className="text-3xl font-bold text-[#4DA3FF]">{active}</div>
                </Card>
                <Card delay={0.4} className="flex-1 min-w-[150px] border-green-500/30" style={{
                    animationName: 'staggerFadeUp',
                    animationDuration: '260ms',
                    animationTimingFunction: 'ease-out',
                    animationFillMode: 'both',
                    animationDelay: '0.18s'
                }}>
                    <div className="text-gray-600 dark:text-gray-400 text-sm font-semibold mb-1 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" /> Resolved
                    </div>
                    <div className="text-3xl font-bold text-green-500">{complete}</div>
                </Card>
            </div>

            <Card tier={2} delay={0.5} className="p-0 overflow-hidden">
                <table className="w-full text-left border-collapse min-w-[800px]">
                    <thead>
                        <tr className="border-b border-white/5 text-gray-600 dark:text-gray-400 text-sm">
                            <th className="p-4 font-semibold w-12"></th>
                            <th className="p-4 font-semibold">Student</th>
                            <th className="p-4 font-semibold">Risk Level</th>
                            <th className="p-4 font-semibold">Intervention Type</th>
                            <th className="p-4 font-semibold">Assigned Faculty</th>
                            <th className="p-4 font-semibold">Date</th>
                            <th className="p-4 font-semibold text-center">Status</th>
                            <th className="p-4 font-semibold text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {interventions.map((inv, idx) => {
                            const s = students.find(x => x.id === inv.studentId);
                            if (!s) return null;
                            const risk = calculateRiskScore(s);
                            const color = getLevelColor(risk.level);
                            const isExpanded = expandedId === inv.id;
                            const currentIdx = getStatusIndex(inv.status);
                            const percent = getStatusPercent(inv.status);

                            return (
                                <React.Fragment key={inv.id}>
                                    <tr 
                                        className={`border-b border-white/5 transition-all duration-300 hover:bg-white/5 cursor-pointer ${inv.status === "Resolved" ? "opacity-70" : ""} ${isExpanded ? "bg-white/5 border-b-0" : ""}`}
                                        onClick={() => setExpandedId(isExpanded ? null : inv.id)}
                                    >
                                        <td className="p-4 text-center">
                                            <span className="text-gray-400 text-xs transition-transform inline-block" style={{ transform: isExpanded ? 'rotate(90deg)' : 'none' }}>
                                                ▶
                                            </span>
                                        </td>
                                        <td className="p-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs bg-[#0B0B0C] border"
                                                    style={{ borderColor: risk.level === "SAFE" ? 'rgba(77,163,255,0.26)' : color, color: color }}>
                                                    {s.name.split(' ').map(n => n[0]).join('')}
                                                </div>
                                                <div className="font-bold text-gray-900 dark:text-white">{s.name}</div>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <div className="text-xs font-bold" style={{ color: color }}>{risk.level}</div>
                                        </td>
                                        <td className="p-4 font-medium">{inv.type}</td>
                                        <td className="p-4 text-gray-700 dark:text-gray-300">{inv.assigned}</td>
                                        <td className="p-4 text-gray-700 dark:text-gray-300">{inv.date}</td>
                                        <td className="p-4 text-center">
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold border transition-colors ${getStatusBadgeClass(inv.status)}`}>
                                                {inv.status}
                                            </span>
                                        </td>
                                        <td className="p-4 text-center" onClick={e => e.stopPropagation()}>
                                            {inv.status !== "Resolved" ? (
                                                <button 
                                                    onClick={() => resolveIntervention(inv.id)} 
                                                    className="px-3 py-1.5 rounded-lg border border-white/10 text-xs font-semibold hover:bg-white/10 transition-colors flex items-center gap-1 mx-auto text-gray-900 dark:text-white"
                                                >
                                                    <CheckCircle2 className="w-4 h-4 text-green-500" /> Resolve
                                                </button>
                                            ) : (
                                                <span className="text-xs text-green-500 font-semibold px-3 py-1.5 inline-block">RESOLVED</span>
                                            )}
                                        </td>
                                    </tr>
                                    {isExpanded && (
                                        <tr className="bg-white/5 border-b border-white/5">
                                            <td colSpan={8} className="p-0">
                                                <div className="p-6 bg-[#10293F]/30 dark:bg-black/30 rounded-b-xl flex flex-col lg:flex-row gap-8 items-stretch border-t border-white/5">
                                                    {/* Stepper block */}
                                                    <div className="flex-1 space-y-6">
                                                        <div className="flex justify-between items-center">
                                                            <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Intervention Progress ({percent}%)</span>
                                                        </div>

                                                        {/* Horizontal Stepper Line */}
                                                        <div className="relative flex justify-between items-center w-full px-6 mb-8 mt-4">
                                                            <div className="absolute left-10 right-10 top-[14px] h-[3px] bg-gray-300 dark:bg-white/10 z-0">
                                                                <div 
                                                                    className="h-full bg-gradient-to-r from-[#4DA3FF] to-green-500 transition-all duration-500" 
                                                                    style={{ width: `${percent}%` }}
                                                                />
                                                            </div>

                                                            {STATUS_LIFECYCLE.map((step, idx) => {
                                                                const isCompleted = idx < currentIdx;
                                                                const isActive = idx === currentIdx;
                                                                const isFuture = idx > currentIdx;

                                                                return (
                                                                    <div key={idx} className="flex flex-col items-center relative z-10 w-12">
                                                                        <div 
                                                                            className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold transition-all duration-300 border-2
                                                                            ${isCompleted ? "bg-green-500 border-green-500 text-white" : 
                                                                              isActive ? "bg-gray-900 dark:bg-white border-[#4DA3FF] text-[#4DA3FF] shadow-[0_0_12px_rgba(77,163,255,0.4)] scale-110" : 
                                                                              "bg-[#0B0B0C] border-gray-300 dark:border-white/10 text-gray-500"}`}
                                                                        >
                                                                            {isCompleted ? "✓" : idx + 1}
                                                                        </div>
                                                                        <span className={`text-[9px] mt-2 text-center font-bold tracking-tight absolute top-8 whitespace-nowrap
                                                                            ${isActive ? "text-[#4DA3FF]" : isCompleted ? "text-green-500" : "text-gray-500"}`}
                                                                        >
                                                                            {step}
                                                                        </span>
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>

                                                        {/* Steps Checklist */}
                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-12 pt-6 border-t border-white/5 text-xs text-gray-600 dark:text-gray-400">
                                                            <div className="space-y-2">
                                                                <div className="flex items-center gap-2">
                                                                    <span className={currentIdx >= 0 ? "text-green-500" : "text-gray-500"}>{currentIdx >= 0 ? "✓" : "○"}</span>
                                                                    <span className={currentIdx === 0 ? "font-bold text-[#4DA3FF]" : ""}>1. Logged: Case opened for student</span>
                                                                </div>
                                                                <div className="flex items-center gap-2">
                                                                    <span className={currentIdx >= 1 ? "text-green-500" : "text-gray-500"}>{currentIdx >= 1 ? "✓" : "○"}</span>
                                                                    <span className={currentIdx === 1 ? "font-bold text-[#4DA3FF]" : ""}>2. Parent Contacted: Alerts dispatched</span>
                                                                </div>
                                                                <div className="flex items-center gap-2">
                                                                    <span className={currentIdx >= 2 ? "text-green-500" : "text-gray-500"}>{currentIdx >= 2 ? "✓" : "○"}</span>
                                                                    <span className={currentIdx === 2 ? "font-bold text-[#4DA3FF]" : ""}>3. Mentor Assigned: Faculty briefing completed</span>
                                                                </div>
                                                            </div>
                                                            <div className="space-y-2">
                                                                <div className="flex items-center gap-2">
                                                                    <span className={currentIdx >= 3 ? "text-green-500" : "text-gray-500"}>{currentIdx >= 3 ? "✓" : "○"}</span>
                                                                    <span className={currentIdx === 3 ? "font-bold text-[#4DA3FF]" : ""}>4. Remedial Scheduled: Session slot assigned</span>
                                                                </div>
                                                                <div className="flex items-center gap-2">
                                                                    <span className={currentIdx >= 4 ? "text-green-500" : "text-gray-500"}>{currentIdx >= 4 ? "✓" : "○"}</span>
                                                                    <span className={currentIdx === 4 ? "font-bold text-[#4DA3FF]" : ""}>5. Follow-up: Recovery milestone set</span>
                                                                </div>
                                                                <div className="flex items-center gap-2">
                                                                    <span className={currentIdx >= 5 ? "text-green-500" : "text-gray-500"}>{currentIdx >= 5 ? "✓" : "○"}</span>
                                                                    <span className={currentIdx === 5 ? "font-bold text-[#4DA3FF]" : ""}>6. Case Resolved: Trajectory stabilized</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Control block */}
                                                    <div className="w-full lg:w-60 border-l border-white/5 lg:pl-6 flex flex-col justify-center gap-3">
                                                        <div className="text-xs font-bold text-gray-500 dark:text-gray-400 mb-1">Operational Actions</div>
                                                        {inv.status !== "Resolved" ? (
                                                            <>
                                                                <button 
                                                                    onClick={() => advanceStatus(inv.id)} 
                                                                    className="w-full py-2 rounded-xl bg-[#4DA3FF]/10 border border-[#4DA3FF]/30 text-[#4DA3FF] hover:bg-[#4DA3FF]/20 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                                                                >
                                                                    <ChevronRight className="w-4 h-4" /> Advance to Next Stage
                                                                </button>
                                                                <button 
                                                                    onClick={() => resolveIntervention(inv.id)} 
                                                                    className="w-full py-2 rounded-xl bg-green-500/10 border border-green-500/30 text-green-500 hover:bg-green-500/20 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                                                                >
                                                                    <CheckCircle2 className="w-4 h-4" /> Resolve Case Directly
                                                                </button>
                                                            </>
                                                        ) : (
                                                            <button 
                                                                onClick={() => resetIntervention(inv.id)} 
                                                                className="w-full py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-500 hover:bg-amber-500/20 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                                                            >
                                                                Re-open Case
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </React.Fragment>
                            );
                        })}
                    </tbody>
                </table>
            </Card>
            <Footer />
        </div>
    );
};

const UploadPage = ({ setStudents, showToast, role }) => {
    const isDataset = role === 'ADMIN';

    const createUploadHandler = (type) => (e) => {
        const file = e.target.files[0];
        if (!file || !file.name.endsWith('.csv')) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const text = event.target.result;
                const lines = text.split('\n').map(l => l.trim()).filter(l => l);
                if (lines.length < 2) return;

                const headers = lines[0].split(',').map(h => h.trim().toLowerCase());

                if (type === 'dataset') {
                    const reqCols = ['id', 'name', 'dept', 'semester', 'riskscore', 'risklevel'];
                    const isValid = reqCols.every(c => headers.includes(c));
                    if (!isValid) return;

                    const newStudents = lines.slice(1).map(line => {
                        const values = line.split(',');
                        const student = {};
                        headers.forEach((h, i) => {
                            student[h] = values[i]?.trim();
                        });

                        return {
                            id: student.id,
                            name: student.name,
                            dept: student.dept,
                            sem: parseInt(student.semester) || 1,
                            attendance: [80, 80, 80, 80, 80],
                            marks: [70, 70, 70, 70, 70],
                            riskScore: parseInt(student.riskscore) || 50,
                            riskLevel: student.risklevel ? student.risklevel.toUpperCase() : 'MODERATE',
                            risk: {
                                score: parseInt(student.riskscore) || 50,
                                level: student.risklevel ? student.risklevel.toUpperCase() : 'MODERATE',
                                trend: 'stable',
                                breakdown: { attendance: 0, marks: 0, lms: 0, assignments: 0, behavior: 0, competitions: 0 }
                            },
                            financialRisk: 50,
                            socioEconomic: 50,
                            mentalHealth: 50
                        };
                    });
                    setStudents(prev => [...prev, ...newStudents]);
                } else if (type === 'attendance') {
                    const reqCols = ['studentid', 'week', 'attendance'];
                    const isValid = reqCols.every(c => headers.includes(c));
                    if (!isValid) return;

                    setStudents(prev => {
                        const newStudents = [...prev];
                        lines.slice(1).forEach(line => {
                            const values = line.split(',');
                            const record = {};
                            headers.forEach((h, i) => {
                                record[h] = values[i]?.trim();
                            });

                            const index = newStudents.findIndex(s => s.id === record.studentid);
                            if (index !== -1) {
                                newStudents[index] = {
                                    ...newStudents[index],
                                    attendance: [...newStudents[index].attendance, parseInt(record.attendance)]
                                };
                            }
                        });
                        return newStudents;
                    });
                } else if (type === 'marks') {
                    const reqCols = ['studentid', 'subject', 'marks'];
                    const isValid = reqCols.every(c => headers.includes(c));
                    if (!isValid) return;

                    setStudents(prev => {
                        const newStudents = [...prev];
                        lines.slice(1).forEach(line => {
                            const values = line.split(',');
                            const record = {};
                            headers.forEach((h, i) => {
                                record[h] = values[i]?.trim();
                            });

                            const index = newStudents.findIndex(s => s.id === record.studentid);
                            if (index !== -1) {
                                newStudents[index] = {
                                    ...newStudents[index],
                                    marks: [...newStudents[index].marks, parseInt(record.marks)]
                                };
                            }
                        });
                        return newStudents;
                    });
                }

                if (showToast) showToast('✓ Data uploaded successfully');
            } catch (err) {
                console.error("CSV Parsing Error:", err);
            }
        };
        reader.readAsText(file);
    };

    return (
        <div className="p-6 animate-page max-w-7xl mx-auto">
            <HeaderUnderline title={isDataset ? "Upload Student Dataset" : "Upload Academic Data"} />
            <div style={{ maxWidth: 800, margin: '0 auto', marginTop: 40, display: 'flex', flexDirection: isDataset ? 'column' : 'row', gap: 24 }}>
                {isDataset ? (
                    <div style={{ background: 'var(--glass-bg-03)', border: '1px solid rgba(77,163,255,0.18)', borderRadius: 16, padding: 24, flex: 1 }}>
                        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Upload CSV</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                            Upload a bulk dataset of student records. Required columns: id, name, dept, semester, riskScore, riskLevel.
                        </p>
                        <input
                            type="file"
                            accept=".csv"
                            onChange={createUploadHandler('dataset')}
                            className="block w-full text-sm text-gray-600 dark:text-gray-400
                                       file:mr-4 file:py-2 file:px-4
                                       file:rounded-xl file:border-0
                                       file:text-sm file:font-semibold
                                       file:bg-[#4DA3FF]/10 file:text-[#4DA3FF]
                                       hover:file:bg-[#4DA3FF]/20 transition-all cursor-pointer"
                        />
                    </div>
                ) : (
                    <>
                        <div style={{ background: 'var(--glass-bg-03)', border: '1px solid rgba(77,163,255,0.18)', borderRadius: 16, padding: 24, flex: 1 }}>
                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Weekly Attendance</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                Upload weekly attendance CSV files for student monitoring. Required columns: studentid, week, attendance.
                            </p>
                            <p className="text-xs text-slate-400 mt-2 mb-6">Supported files: CSV, PDF, PNG</p>
                            <input
                                type="file"
                                accept=".csv,.pdf,.png"
                                onChange={createUploadHandler('attendance')}
                                className="block w-full text-sm text-gray-600 dark:text-gray-400
                                           file:mr-4 file:py-2 file:px-4
                                           file:rounded-xl file:border-0
                                           file:text-sm file:font-semibold
                                           file:bg-[#4DA3FF]/10 file:text-[#4DA3FF]
                                           hover:file:bg-[#4DA3FF]/20 transition-all cursor-pointer"
                            />
                        </div>
                        <div style={{ background: 'var(--glass-bg-03)', border: '1px solid rgba(77,163,255,0.18)', borderRadius: 16, padding: 24, flex: 1 }}>
                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Internal Assessment</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                                Upload assessment marks for student evaluation. Required columns: studentid, subject, marks.
                            </p>
                            <input
                                type="file"
                                accept=".csv"
                                onChange={createUploadHandler('marks')}
                                className="block w-full text-sm text-gray-600 dark:text-gray-400
                                           file:mr-4 file:py-2 file:px-4
                                           file:rounded-xl file:border-0
                                           file:text-sm file:font-semibold
                                           file:bg-[#4DA3FF]/10 file:text-[#4DA3FF]
                                           hover:file:bg-[#4DA3FF]/20 transition-all cursor-pointer"
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

const HackSpaceLogo = ({ className = "", size = "normal", variant = "full" }) => {
    let imgHeight = "h-8";
    if (size === "small") {
        imgHeight = "h-9"; // 36px height
    } else if (size === "large") {
        imgHeight = "h-16";
    } else if (size === "xl") {
        imgHeight = "h-24";
    }

    return (
        <div className={`flex items-center gap-3 ${className}`} style={{ display: 'inline-flex', alignItems: 'center' }}>
            <img
                src="/hs-logo.png"
                alt="HackSpace Logo"
                className={`object-contain ${imgHeight}`}
            />
            {variant === "full" && (
                <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', justifyContent: 'center' }}>
                    <span
                        style={{
                            fontFamily: "'Syne', sans-serif",
                            fontWeight: '700',
                            fontSize: size === "small" ? '18px' : size === "large" ? '32px' : size === "xl" ? '40px' : '22px',
                            color: '#4DA3FF',
                            lineHeight: 1.1,
                            letterSpacing: '-0.02em'
                        }}
                    >
                        HackSpace
                    </span>
                    <span
                        style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: '600',
                            fontSize: size === "small" ? '9px' : size === "large" ? '12px' : size === "xl" ? '15px' : '10px',
                            color: 'var(--text-muted-4)',
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                            lineHeight: 1.2,
                            marginTop: '2px'
                        }}
                    >
                        Academic Stability Engine
                    </span>
                </div>
            )}
        </div>
    );
};

const App = () => {
    const [currentPage, setCurrentPage] = useState("login");
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [showInterventionModal, setShowInterventionModal] = useState(false);
    const [pageVisible, setPageVisible] = useState(true);
    const [skeletonLoading, setSkeletonLoading] = useState(false);
    const [displayScore, setDisplayScore] = useState(0);
    const [toastVisible, setToastVisible] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const scoreIntervalRef = useRef(null);

    const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') !== 'light');

    useEffect(() => {
        const root = document.documentElement;
        if (isDarkMode) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    const [role, setRole] = useState(null);
    const [currentStudentId, setCurrentStudentId] = useState("S152");
    const [animatedStats, setAnimatedStats] = useState({
        total: 0, highRisk: 0,
        interventions: 0, avgScore: 0
    });
    const statsAnimatedRef = useRef(false);
    const [adminLoading, setAdminLoading] = useState(false);

    const [students, setStudents] = useState(() => generateStudents());

    const highestRiskStudent = useMemo(() => {
        if (!students || students.length === 0) return null;
        let highest = students[0];
        let maxScore = -1;
        students.forEach(s => {
            const score = calculateRiskScore(s).score;
            if (score > maxScore) {
                maxScore = score;
                highest = s;
            }
        });
        return highest;
    }, [students]);

    const activeStudent = selectedStudent || highestRiskStudent || students[0];

    useEffect(() => {
        if (activeStudent) {
            setCurrentStudentId(activeStudent.id);
        }
    }, [activeStudent]);

    const [interventions, setInterventions] = useState([
        { id: 1, studentId: "S001", type: "Parent Meeting", status: "Pending", date: "Today", assigned: "Dr. Ramesh Iyer" },
        { id: 2, studentId: "S002", type: "Counseling", status: "Parent Notified", date: "Tomorrow", assigned: "Prof. Anjali Desai" },
        { id: 3, studentId: "S008", type: "Study Plan", status: "Pending", date: "Oct 12", assigned: "Prof. Anjali Desai" },
        { id: 4, studentId: "S010", type: "Remedial Class", status: "Resolved", date: "Oct 05", assigned: "Dr. Suresh Nair" },
        { id: 5, studentId: "S013", type: "Mentor Check-in", status: "Remedial Scheduled", date: "Oct 15", assigned: "Dr. Ramesh Iyer" }
    ]);

    const [selectedInterventionType, setSelectedInterventionType] = useState("Parent Meeting");

    const PERMISSIONS = {
        ADMIN: {
            canViewAllStudents: true,
            canAccessStudentsPage: true,
            canAccessInterventions: true,
            canViewFullAnalytics: true,
            canOpenAnyStudent: true,
        },
        FACULTY: {
            canViewAllStudents: true,
            canAccessStudentsPage: true,
            canAccessInterventions: true,
            canViewFullAnalytics: true,
            canOpenAnyStudent: true,
        },
        STUDENT: {
            canViewAllStudents: false,
            canAccessStudentsPage: false,
            canAccessInterventions: false,
            canViewFullAnalytics: false,
            canOpenAnyStudent: false,
        }
    };
    const can = (permission) => role && PERMISSIONS[role] ? PERMISSIONS[role][permission] : false;

    const navigateTo = (targetPage, studentObj = null) => {
        if (targetPage === 'faculty' && !can('canAccessStudentsPage')) return;
        if (targetPage === 'interventions' && !can('canAccessInterventions')) return;
        if (targetPage === 'upload' && role === 'STUDENT') return;
        setPageVisible(false);
        setTimeout(() => {
            setCurrentPage(targetPage);
            if (studentObj !== null) setSelectedStudent(studentObj);
            setPageVisible(true);
        }, 200);
    };

    const openStudentDetail = (student) => {
        navigateTo('student', student);
        setSkeletonLoading(true);
        setDisplayScore(0);
        setTimeout(() => {
            setSkeletonLoading(false);
        }, 600);
    };

    useEffect(() => {
        if (!selectedStudent || skeletonLoading) return;
        const target = selectedStudent.riskScore || calculateRiskScore(selectedStudent).score;
        let current = 0;
        clearInterval(scoreIntervalRef.current);
        scoreIntervalRef.current = setInterval(() => {
            current += Math.ceil((target - current) / 6);
            if (current >= target) {
                current = target;
                clearInterval(scoreIntervalRef.current);
            }
            setDisplayScore(current);
        }, 18);
        return () => clearInterval(scoreIntervalRef.current);
    }, [selectedStudent, skeletonLoading]);

    useEffect(() => {
        if (currentPage !== 'admin') return;
        setAdminLoading(true);
        const loadTimer = setTimeout(() => setAdminLoading(false), 500);

        if (statsAnimatedRef.current) return;
        statsAnimatedRef.current = true;

        const targets = {
            total: students.length,
            highRisk: students.filter(s => calculateRiskScore(s).level === 'HIGH').length,
            interventions: students.filter(s => calculateRiskScore(s).level !== 'SAFE').length,
            avgScore: Math.round(students.reduce((a, b) => a + calculateRiskScore(b).score, 0) / students.length)
        };

        const steps = 36;
        const interval = 900 / steps;
        let step = 0;
        const timer = setInterval(() => {
            step++;
            const ease = 1 - Math.pow(1 - step / steps, 3);
            setAnimatedStats({
                total: Math.round(targets.total * ease),
                highRisk: Math.round(targets.highRisk * ease),
                interventions: Math.round(targets.interventions * ease),
                avgScore: Math.round(targets.avgScore * ease)
            });
            if (step >= steps) clearInterval(timer);
        }, interval);

        return () => {
            clearInterval(timer);
            clearTimeout(loadTimer);
        };
    }, [currentPage, students]);

    const showToast = (message) => {
        setToastMessage(message);
        setToastVisible(true);
        setTimeout(() => setToastVisible(false), 3000);
    };

    const handleLogin = (loginRole) => {
        const uRole = loginRole.toUpperCase();
        setRole(uRole);
        if (uRole === "ADMIN") setCurrentPage("admin");
        else if (uRole === "FACULTY") setCurrentPage("faculty");
        else if (uRole === "PARENT") setCurrentPage("parent");
        else setCurrentPage("student");
    };

    const handleLogout = () => {
        navigateTo("login"); setRole(null); setSelectedStudent(null);
    };

    const handleNavigate = (page) => { navigateTo(page); setSelectedStudent(null); };

    const InterventionModal = () => (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4"
            style={{
                background: 'rgba(0,0,0,0.55)',
                backdropFilter: 'blur(6px)',
                animation: 'overlayFadeIn 200ms ease forwards'
            }}>
            <Card tier={3} className="w-full max-w-lg p-8 relative border-[#F59E0B]/30" style={{ animation: 'modalScaleIn 220ms ease forwards' }}>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2"><Zap className="w-6 h-6 text-[#F59E0B]" /> Trigger Action</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">Select automated intervention for {selectedStudent?.name}</p>

                <div className="space-y-3 mb-8">
                    <button 
                        onClick={() => setSelectedInterventionType("Parent Meeting")}
                        className={`w-full text-left p-4 rounded-xl border flex justify-between items-center transition-all ${selectedInterventionType === "Parent Meeting" ? "border-[#F59E0B] bg-[#F59E0B]/10" : "border-white/10 bg-white/5 hover:border-white/20"}`}
                    >
                        <div>
                            <div className="font-bold text-gray-900 dark:text-white">Schedule Parent Meeting</div>
                            <div className="text-xs text-gray-600 dark:text-gray-400">Send auto-email to parents and block calendar</div>
                        </div>
                        <Users className="text-[#F59E0B] w-5 h-5" />
                    </button>
                    <button 
                        onClick={() => setSelectedInterventionType("Remedial Session")}
                        className={`w-full text-left p-4 rounded-xl border flex justify-between items-center transition-all ${selectedInterventionType === "Remedial Session" ? "border-[#4DA3FF] bg-[#4DA3FF]/10" : "border-white/10 bg-white/5 hover:border-white/20"}`}
                    >
                        <div>
                            <div className="font-bold text-gray-900 dark:text-white">Assign to Remedial Cluster</div>
                            <div className="text-xs text-gray-600 dark:text-gray-400">Add student to upcoming remedial sessions</div>
                        </div>
                        <BookOpen className="text-[#4DA3FF] w-5 h-5" />
                    </button>
                </div>

                <div className="flex gap-4">
                    <button onClick={() => setShowInterventionModal(false)} className="flex-1 py-3 rounded-xl border border-white/20 text-gray-900 dark:text-white font-bold hover:bg-white/5 transition-colors">
                        Cancel
                    </button>
                    <button 
                        onClick={() => {
                            const newInv = {
                                id: Date.now(),
                                studentId: selectedStudent.id,
                                type: selectedInterventionType,
                                status: "Pending",
                                date: "Today",
                                assigned: selectedStudent.facultyAdvisor || "Assigned Advisor"
                            };
                            setInterventions(prev => [newInv, ...prev]);
                            setShowInterventionModal(false);
                            showToast(`✓ Triggered '${selectedInterventionType}' for ${selectedStudent.name}`);
                        }}
                        className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#F59E0B] to-[#EF4444] text-gray-900 dark:text-white font-bold hover:opacity-90 transition-opacity"
                    >
                        Confirm Action
                    </button>
                </div>
            </Card>
        </div>
    );

    return (
        <div className="min-h-screen text-gray-900 dark:text-white relative premium-grid-bg transition-colors duration-300">
            <div className="ambient-glow-topLeft"></div>
            <div className="ambient-glow-topRight"></div>

            {currentPage !== "login" && currentPage !== "reset-password" && (
                <nav className="w-full border-b border-white/10 bg-[#10293F]/80 backdrop-blur-lg sticky top-0 z-40 transition-colors duration-300">
                    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                        <div className="cursor-pointer" onClick={() => handleNavigate(role === 'STUDENT' ? 'student' : role === 'PARENT' ? 'parent' : 'admin')}>
                            <HackSpaceLogo size="small" variant="full" />
                        </div>

                        <div className="flex flex-1 justify-center max-w-lg">
                            <div className="flex gap-8 px-4 w-full">
                                {[
                                    { label: 'Dashboard', page: 'admin', show: role === 'ADMIN' || role === 'FACULTY' },
                                    { label: 'Dashboard', page: 'student', show: role === 'STUDENT' },
                                    { label: 'Students', page: 'faculty', show: can('canAccessStudentsPage') },
                                    { label: 'Interventions', page: 'interventions', show: can('canAccessInterventions') },
                                    { label: 'Upload', page: 'upload', show: role === 'ADMIN' || role === 'FACULTY' }
                                ].filter(tab => tab.show).map(tab => (
                                    <button
                                        key={tab.page}
                                        onClick={() => {
                                            if (tab.page === 'student' && !selectedStudent) {
                                                setSelectedStudent(highestRiskStudent);
                                            }
                                            navigateTo(tab.page);
                                        }}
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            cursor: 'pointer',
                                            padding: '8px 16px',
                                            fontSize: 13,
                                            fontFamily: 'DM Sans',
                                            color: currentPage === tab.page ? '#4DA3FF' : 'var(--text-normal-5)',
                                            borderBottom: currentPage === tab.page ? '2px solid #4DA3FF' : '2px solid transparent',
                                            transition: 'color 0.2s ease, border-color 0.2s ease',
                                            letterSpacing: '0.3px'
                                        }}
                                        onMouseEnter={e => {
                                            if (currentPage !== tab.page) e.currentTarget.style.color = 'var(--text-normal-8)';
                                        }}
                                        onMouseLeave={e => {
                                            if (currentPage !== tab.page) e.currentTarget.style.color = 'var(--text-normal-5)';
                                        }}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>
                            <button
                                onClick={() => setIsDarkMode(!isDarkMode)}
                                className="ml-6 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition flex items-center justify-center text-gray-900 dark:text-white"
                                aria-label="Toggle Theme"
                            >
                                {isDarkMode ? <Sun className="text-yellow-400 w-5 h-5" /> : <Moon className="text-slate-200 w-5 h-5" />}
                            </button>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#FBBF24] to-[#EF4444]"></div>
                                <span className="text-xs font-bold uppercase tracking-wider">{role}</span>
                            </div>
                            <button onClick={handleLogout} className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:text-white hover:bg-white/5 rounded-lg transition-colors">
                                <LogOut className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </nav>
            )}

            <main className="relative z-10 min-h-[calc(100vh-64px)] overflow-x-hidden">
                <div style={{
                    opacity: pageVisible ? 1 : 0,
                    transform: pageVisible ? 'translateX(0px)' : 'translateX(12px)',
                    transition: pageVisible ? 'opacity 250ms ease, transform 250ms ease' : 'opacity 200ms ease, transform 200ms ease',
                    willChange: 'opacity, transform'
                }}>

                    {currentPage === "login" && <LoginPage onLogin={handleLogin} onForgotPassword={() => setCurrentPage("reset-password")} />}
                    {currentPage === "reset-password" && <ResetPassword onBack={() => setCurrentPage("login")} />}
                    {currentPage === "admin" && <AdminDashboard students={students} interventions={interventions} onNavigate={handleNavigate} currentStudentId={currentStudentId} animatedStats={animatedStats} adminLoading={adminLoading} can={can} role={role} openStudentDetail={openStudentDetail} />}
                    {currentPage === "parent" && <ParentDashboard students={students} child={activeStudent} />}
                    {currentPage === "faculty" && <FacultyDashboard students={students} onSelectStudent={(s) => openStudentDetail(s)} can={can} currentStudentId={currentStudentId} openStudentDetail={openStudentDetail} />}
                    {currentPage === "student" && activeStudent && (
                        role === "STUDENT" ? (
                            <div className="p-6 animate-page max-w-7xl mx-auto">
                                <div className="mb-8">
                                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-1">My Academic Overview</h1>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Showing your personal metrics only</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <Card tier={2} className="flex-1 min-w-[200px]">
                                        <div className="text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">Risk Score</div>
                                        <div className="text-5xl font-black text-[#EF4444] mt-2">
                                            {calculateRiskScore(activeStudent).score}
                                        </div>
                                    </Card>

                                    <Card tier={2} className="flex-1 min-w-[200px]">
                                        <div className="text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">Attendance</div>
                                        <div className="text-5xl font-black text-[#4DA3FF] mt-2">
                                            {activeStudent.attendance[activeStudent.attendance.length - 1]}%
                                        </div>
                                    </Card>

                                    <Card tier={2} className="flex-1 min-w-[200px]">
                                        <div className="text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">Last Test Score</div>
                                        <div className="text-5xl font-black text-gray-900 dark:text-white mt-2">
                                            {activeStudent.marks[activeStudent.marks.length - 1]}
                                        </div>
                                    </Card>
                                </div>

                                <div style={{
                                    textAlign: 'center',
                                    marginTop: 120,
                                    fontFamily: 'DM Sans',
                                    fontSize: 11,
                                    color: 'var(--text-muted-4)',
                                    letterSpacing: '0.3px',
                                    lineHeight: '1.6'
                                }}>
                                    <div>HackSpace © 2026</div>
                                    <div style={{ fontSize: 9, color: 'var(--text-muted-25)' }}>Academic Stability Engine</div>
                                </div>
                            </div>
                        ) : (
                            <StudentDetail
                                student={activeStudent}
                                onBack={() => navigateTo("faculty")}
                                onInterventionReq={() => setShowInterventionModal(true)}
                                showToast={showToast}
                                skeletonLoading={skeletonLoading}
                                displayScore={displayScore}
                            />
                        )
                    )}
                    {currentPage === "interventions" && <InterventionsPanel students={students} interventions={interventions} setInterventions={setInterventions} />}
                    {currentPage === "upload" && (role === "ADMIN" || role === "FACULTY") && <UploadPage setStudents={setStudents} showToast={showToast} role={role} />}

                </div>
            </main>

            {showInterventionModal && <InterventionModal />}


        </div>
    );
};

export default App;


