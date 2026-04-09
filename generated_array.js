const generateStudents = () => {
    const students = [
        {
                id: "S001",
                name: "Suresh Rao",
                dept: "CSE",
                sem: 1,
                attendance: [
                        68,
                        71,
                        71,
                        65,
                        67
                ],
                marks: [
                        52,
                        56,
                        52,
                        52,
                        55
                ],
                lmsLogins: [
                        13,
                        15,
                        12,
                        12,
                        14
                ],
                assignmentDelays: 0,
                behaviorIncidents: 0,
                competitions: 0,
                prevGPA: 5.5,
                facultyAdvisor: "Assigned Faculty",
                financial: {
                        feeStatus: "Pending",
                        vulnerabilityScore: 59,
                        scholarshipEligible: true,
                        scholarshipType: "Need-based"
                },
                socioEconomic: {
                        parentIncomeBracket: "3L-6L",
                        location: "Urban",
                        firstGenerationLearner: true,
                        genderRiskFlag: false
                },
                mentalHealth: {
                        behavioralStressIndex: 72,
                        counselingRecommended: true,
                        stressCategory: "High"
                }
        },
        {
                id: "S002",
                name: "Ishaan Sharma",
                dept: "IT",
                sem: 2,
                attendance: [
                        90,
                        84,
                        88,
                        92,
                        88
                ],
                marks: [
                        84,
                        81,
                        77,
                        83,
                        82
                ],
                lmsLogins: [
                        20,
                        18,
                        18,
                        19,
                        19
                ],
                assignmentDelays: 1,
                behaviorIncidents: 0,
                competitions: 2,
                prevGPA: 8.2,
                facultyAdvisor: "Assigned Faculty",
                financial: {
                        feeStatus: "Pending",
                        vulnerabilityScore: 12,
                        scholarshipEligible: true,
                        scholarshipType: "Need-based"
                },
                socioEconomic: {
                        parentIncomeBracket: "3L-6L",
                        location: "Urban",
                        firstGenerationLearner: true,
                        genderRiskFlag: false
                },
                mentalHealth: {
                        behavioralStressIndex: 23,
                        counselingRecommended: false,
                        stressCategory: "Low"
                }
        },
        {
                id: "S003",
                name: "Meera Nair",
                dept: "ECE",
                sem: 3,
                attendance: [
                        58,
                        61,
                        60,
                        60,
                        62
                ],
                marks: [
                        53,
                        52,
                        52,
                        50,
                        51
                ],
                lmsLogins: [
                        11,
                        12,
                        14,
                        11,
                        13
                ],
                assignmentDelays: 6,
                behaviorIncidents: 0,
                competitions: 0,
                prevGPA: 5.1,
                facultyAdvisor: "Assigned Faculty",
                financial: {
                        feeStatus: "Paid",
                        vulnerabilityScore: 73,
                        scholarshipEligible: false,
                        scholarshipType: "Need-based"
                },
                socioEconomic: {
                        parentIncomeBracket: "3L-6L",
                        location: "Rural",
                        firstGenerationLearner: false,
                        genderRiskFlag: true
                },
                mentalHealth: {
                        behavioralStressIndex: 83,
                        counselingRecommended: true,
                        stressCategory: "High"
                }
        },
        {
                id: "S004",
                name: "Aditya Qureshi",
                dept: "EEE",
                sem: 4,
                attendance: [
                        83,
                        88,
                        89,
                        88,
                        87
                ],
                marks: [
                        80,
                        77,
                        85,
                        81,
                        81
                ],
                lmsLogins: [
                        17,
                        20,
                        19,
                        19,
                        19
                ],
                assignmentDelays: 0,
                behaviorIncidents: 0,
                competitions: 1,
                prevGPA: 8.1,
                facultyAdvisor: "Assigned Faculty",
                financial: {
                        feeStatus: "Paid",
                        vulnerabilityScore: 31,
                        scholarshipEligible: false,
                        scholarshipType: "Merit"
                },
                socioEconomic: {
                        parentIncomeBracket: "3L-6L",
                        location: "Urban",
                        firstGenerationLearner: true,
                        genderRiskFlag: false
                },
                mentalHealth: {
                        behavioralStressIndex: 32,
                        counselingRecommended: false,
                        stressCategory: "Low"
                }
        },
        {
                id: "S005",
                name: "Priya Iyer",
                dept: "MECH",
                sem: 5,
                attendance: [
                        61,
                        65,
                        70,
                        63,
                        65
                ],
                marks: [
                        62,
                        57,
                        63,
                        61,
                        60
                ],
                lmsLogins: [
                        13,
                        13,
                        13,
                        12,
                        14
                ],
                assignmentDelays: 1,
                behaviorIncidents: 0,
                competitions: 0,
                prevGPA: 6,
                facultyAdvisor: "Assigned Faculty",
                financial: {
                        feeStatus: "Paid",
                        vulnerabilityScore: 90,
                        scholarshipEligible: false,
                        scholarshipType: "Need-based"
                },
                socioEconomic: {
                        parentIncomeBracket: "3L-6L",
                        location: "Urban",
                        firstGenerationLearner: false,
                        genderRiskFlag: true
                },
                mentalHealth: {
                        behavioralStressIndex: 73,
                        counselingRecommended: true,
                        stressCategory: "High"
                }
        },
        {
                id: "S006",
                name: "Ishaan Sharma",
                dept: "CIVIL",
                sem: 6,
                attendance: [
                        83,
                        76,
                        75,
                        75,
                        79
                ],
                marks: [
                        68,
                        67,
                        63,
                        69,
                        65
                ],
                lmsLogins: [
                        15,
                        15,
                        17,
                        16,
                        17
                ],
                assignmentDelays: 2,
                behaviorIncidents: 0,
                competitions: 0,
                prevGPA: 6.5,
                facultyAdvisor: "Assigned Faculty",
                financial: {
                        feeStatus: "Paid",
                        vulnerabilityScore: 76,
                        scholarshipEligible: false,
                        scholarshipType: "Merit"
                },
                socioEconomic: {
                        parentIncomeBracket: "3L-6L",
                        location: "Rural",
                        firstGenerationLearner: false,
                        genderRiskFlag: false
                },
                mentalHealth: {
                        behavioralStressIndex: 42,
                        counselingRecommended: false,
                        stressCategory: "Low"
                }
        },
        {
                id: "S007",
                name: "Rahul Nair",
                dept: "CSE",
                sem: 7,
                attendance: [
                        97,
                        98,
                        100,
                        96,
                        97
                ],
                marks: [
                        93,
                        91,
                        91,
                        95,
                        92
                ],
                lmsLogins: [
                        21,
                        21,
                        21,
                        19,
                        21
                ],
                assignmentDelays: 0,
                behaviorIncidents: 0,
                competitions: 0,
                prevGPA: 9.2,
                facultyAdvisor: "Assigned Faculty",
                financial: {
                        feeStatus: "Pending",
                        vulnerabilityScore: 90,
                        scholarshipEligible: false,
                        scholarshipType: "Need-based"
                },
                socioEconomic: {
                        parentIncomeBracket: "3L-6L",
                        location: "Urban",
                        firstGenerationLearner: true,
                        genderRiskFlag: false
                },
                mentalHealth: {
                        behavioralStressIndex: 31,
                        counselingRecommended: false,
                        stressCategory: "Low"
                }
        },
        {
                id: "S008",
                name: "Nisha Kulkarni",
                dept: "IT",
                sem: 8,
                attendance: [
                        72,
                        72,
                        71,
                        68,
                        71
                ],
                marks: [
                        66,
                        61,
                        61,
                        59,
                        61
                ],
                lmsLogins: [
                        13,
                        16,
                        15,
                        13,
                        15
                ],
                assignmentDelays: 2,
                behaviorIncidents: 0,
                competitions: 0,
                prevGPA: 6.1,
                facultyAdvisor: "Assigned Faculty",
                financial: {
                        feeStatus: "Pending",
                        vulnerabilityScore: 56,
                        scholarshipEligible: false,
                        scholarshipType: "Merit"
                },
                socioEconomic: {
                        parentIncomeBracket: "3L-6L",
                        location: "Rural",
                        firstGenerationLearner: true,
                        genderRiskFlag: true
                },
                mentalHealth: {
                        behavioralStressIndex: 31,
                        counselingRecommended: false,
                        stressCategory: "Low"
                }
        },
        {
                id: "S009",
                name: "Rahul Malhotra",
                dept: "ECE",
                sem: 1,
                attendance: [
                        90,
                        98,
                        94,
                        90,
                        94
                ],
                marks: [
                        77,
                        77,
                        80,
                        79,
                        81
                ],
                lmsLogins: [
                        21,
                        21,
                        19,
                        20,
                        20
                ],
                assignmentDelays: 0,
                behaviorIncidents: 0,
                competitions: 0,
                prevGPA: 8.1,
                facultyAdvisor: "Assigned Faculty",
                financial: {
                        feeStatus: "Paid",
                        vulnerabilityScore: 12,
                        scholarshipEligible: false,
                        scholarshipType: "Need-based"
                },
                socioEconomic: {
                        parentIncomeBracket: "3L-6L",
                        location: "Rural",
                        firstGenerationLearner: true,
                        genderRiskFlag: false
                },
                mentalHealth: {
                        behavioralStressIndex: 22,
                        counselingRecommended: false,
                        stressCategory: "Low"
                }
        },
        {
                id: "S010",
                name: "Aditya Bose",
                dept: "EEE",
                sem: 2,
                attendance: [
                        97,
                        98,
                        100,
                        95,
                        99
                ],
                marks: [
                        86,
                        85,
                        81,
                        89,
                        86
                ],
                lmsLogins: [
                        20,
                        22,
                        19,
                        20,
                        21
                ],
                assignmentDelays: 2,
                behaviorIncidents: 0,
                competitions: 2,
                prevGPA: 8.6,
                facultyAdvisor: "Assigned Faculty",
                financial: {
                        feeStatus: "Paid",
                        vulnerabilityScore: 75,
                        scholarshipEligible: false,
                        scholarshipType: "Merit"
                },
                socioEconomic: {
                        parentIncomeBracket: "3L-6L",
                        location: "Urban",
                        firstGenerationLearner: false,
                        genderRiskFlag: false
                },
                mentalHealth: {
                        behavioralStressIndex: 25,
                        counselingRecommended: false,
                        stressCategory: "Low"
                }
        },
        {
                id: "S011",
                name: "Arjun Reddy",
                dept: "MECH",
                sem: 3,
                attendance: [
                        93,
                        100,
                        98,
                        94,
                        97
                ],
                marks: [
                        81,
                        82,
                        81,
                        87,
                        84
                ],
                lmsLogins: [
                        22,
                        21,
                        22,
                        19,
                        21
                ],
                assignmentDelays: 2,
                behaviorIncidents: 0,
                competitions: 0,
                prevGPA: 8.4,
                facultyAdvisor: "Assigned Faculty",
                financial: {
                        feeStatus: "Paid",
                        vulnerabilityScore: 4,
                        scholarshipEligible: true,
                        scholarshipType: "Need-based"
                },
                socioEconomic: {
                        parentIncomeBracket: "3L-6L",
                        location: "Urban",
                        firstGenerationLearner: false,
                        genderRiskFlag: false
                },
                mentalHealth: {
                        behavioralStressIndex: 23,
                        counselingRecommended: false,
                        stressCategory: "Low"
                }
        },
        {
                id: "S012",
                name: "Rohit Malhotra",
                dept: "CIVIL",
                sem: 4,
                attendance: [
                        93,
                        100,
                        95,
                        99,
                        98
                ],
                marks: [
                        85,
                        86,
                        85,
                        80,
                        84
                ],
                lmsLogins: [
                        19,
                        20,
                        19,
                        19,
                        21
                ],
                assignmentDelays: 0,
                behaviorIncidents: 0,
                competitions: 0,
                prevGPA: 8.4,
                facultyAdvisor: "Assigned Faculty",
                financial: {
                        feeStatus: "Paid",
                        vulnerabilityScore: 79,
                        scholarshipEligible: true,
                        scholarshipType: "Merit"
                },
                socioEconomic: {
                        parentIncomeBracket: "3L-6L",
                        location: "Rural",
                        firstGenerationLearner: true,
                        genderRiskFlag: false
                },
                mentalHealth: {
                        behavioralStressIndex: 25,
                        counselingRecommended: false,
                        stressCategory: "Low"
                }
        },
        {
                id: "S013",
                name: "Karan Mehta",
                dept: "CSE",
                sem: 5,
                attendance: [
                        75,
                        75,
                        75,
                        81,
                        78
                ],
                marks: [
                        68,
                        70,
                        70,
                        68,
                        65
                ],
                lmsLogins: [
                        15,
                        18,
                        17,
                        16,
                        17
                ],
                assignmentDelays: 0,
                behaviorIncidents: 0,
                competitions: 0,
                prevGPA: 6.5,
                facultyAdvisor: "Assigned Faculty",
                financial: {
                        feeStatus: "Paid",
                        vulnerabilityScore: 92,
                        scholarshipEligible: false,
                        scholarshipType: "Merit"
                },
                socioEconomic: {
                        parentIncomeBracket: "3L-6L",
                        location: "Rural",
                        firstGenerationLearner: false,
                        genderRiskFlag: false
                },
                mentalHealth: {
                        behavioralStressIndex: 49,
                        counselingRecommended: false,
                        stressCategory: "Low"
                }
        },
        {
                id: "S014",
                name: "Pooja Sharma",
                dept: "IT",
                sem: 6,
                attendance: [
                        89,
                        86,
                        85,
                        88,
                        86
                ],
                marks: [
                        76,
                        73,
                        74,
                        69,
                        72
                ],
                lmsLogins: [
                        20,
                        19,
                        19,
                        19,
                        19
                ],
                assignmentDelays: 0,
                behaviorIncidents: 0,
                competitions: 3,
                prevGPA: 7.2,
                facultyAdvisor: "Assigned Faculty",
                financial: {
                        feeStatus: "Paid",
                        vulnerabilityScore: 75,
                        scholarshipEligible: false,
                        scholarshipType: "Need-based"
                },
                socioEconomic: {
                        parentIncomeBracket: "3L-6L",
                        location: "Rural",
                        firstGenerationLearner: false,
                        genderRiskFlag: true
                },
                mentalHealth: {
                        behavioralStressIndex: 44,
                        counselingRecommended: false,
                        stressCategory: "Low"
                }
        },
        {
                id: "S015",
                name: "Swati Nair",
                dept: "ECE",
                sem: 7,
                attendance: [
                        86,
                        92,
                        85,
                        93,
                        89
                ],
                marks: [
                        78,
                        84,
                        84,
                        78,
                        80
                ],
                lmsLogins: [
                        20,
                        19,
                        18,
                        18,
                        19
                ],
                assignmentDelays: 0,
                behaviorIncidents: 0,
                competitions: 0,
                prevGPA: 8,
                facultyAdvisor: "Assigned Faculty",
                financial: {
                        feeStatus: "Paid",
                        vulnerabilityScore: 44,
                        scholarshipEligible: true,
                        scholarshipType: "Merit"
                },
                socioEconomic: {
                        parentIncomeBracket: "3L-6L",
                        location: "Urban",
                        firstGenerationLearner: false,
                        genderRiskFlag: true
                },
                mentalHealth: {
                        behavioralStressIndex: 25,
                        counselingRecommended: false,
                        stressCategory: "Low"
                }
        },
        {
                id: "S016",
                name: "Swati Krishnan",
                dept: "EEE",
                sem: 8,
                attendance: [
                        90,
                        86,
                        88,
                        81,
                        86
                ],
                marks: [
                        77,
                        76,
                        74,
                        80,
                        79
                ],
                lmsLogins: [
                        20,
                        19,
                        18,
                        19,
                        19
                ],
                assignmentDelays: 0,
                behaviorIncidents: 0,
                competitions: 2,
                prevGPA: 7.9,
                facultyAdvisor: "Assigned Faculty",
                financial: {
                        feeStatus: "Paid",
                        vulnerabilityScore: 98,
                        scholarshipEligible: false,
                        scholarshipType: "Merit"
                },
                socioEconomic: {
                        parentIncomeBracket: "3L-6L",
                        location: "Urban",
                        firstGenerationLearner: false,
                        genderRiskFlag: true
                },
                mentalHealth: {
                        behavioralStressIndex: 30,
                        counselingRecommended: false,
                        stressCategory: "Low"
                }
        },
        {
                id: "S017",
                name: "Aryan Singh",
                dept: "MECH",
                sem: 1,
                attendance: [
                        93,
                        95,
                        94,
                        97,
                        96
                ],
                marks: [
                        90,
                        94,
                        93,
                        95,
                        90
                ],
                lmsLogins: [
                        19,
                        19,
                        22,
                        22,
                        21
                ],
                assignmentDelays: 1,
                behaviorIncidents: 0,
                competitions: 2,
                prevGPA: 9,
                facultyAdvisor: "Assigned Faculty",
                financial: {
                        feeStatus: "Paid",
                        vulnerabilityScore: 62,
                        scholarshipEligible: false,
                        scholarshipType: "Need-based"
                },
                socioEconomic: {
                        parentIncomeBracket: "3L-6L",
                        location: "Urban",
                        firstGenerationLearner: false,
                        genderRiskFlag: false
                },
                mentalHealth: {
                        behavioralStressIndex: 40,
                        counselingRecommended: false,
                        stressCategory: "Low"
                }
        },
        {
                id: "S018",
                name: "Saurabh Rao",
                dept: "CIVIL",
                sem: 2,
                attendance: [
                        88,
                        86,
                        84,
                        86,
                        87
                ],
                marks: [
                        71,
                        69,
                        69,
                        75,
                        73
                ],
                lmsLogins: [
                        17,
                        19,
                        19,
                        19,
                        19
                ],
                assignmentDelays: 1,
                behaviorIncidents: 0,
                competitions: 2,
                prevGPA: 7.3,
                facultyAdvisor: "Assigned Faculty",
                financial: {
                        feeStatus: "Paid",
                        vulnerabilityScore: 65,
                        scholarshipEligible: false,
                        scholarshipType: "Need-based"
                },
                socioEconomic: {
                        parentIncomeBracket: "3L-6L",
                        location: "Urban",
                        firstGenerationLearner: false,
                        genderRiskFlag: false
                },
                mentalHealth: {
                        behavioralStressIndex: 38,
                        counselingRecommended: false,
                        stressCategory: "Low"
                }
        },
        {
                id: "S019",
                name: "Rohit Krishnan",
                dept: "CSE",
                sem: 3,
                attendance: [
                        85,
                        85,
                        87,
                        90,
                        87
                ],
                marks: [
                        74,
                        74,
                        75,
                        79,
                        77
                ],
                lmsLogins: [
                        17,
                        18,
                        18,
                        18,
                        19
                ],
                assignmentDelays: 0,
                behaviorIncidents: 0,
                competitions: 3,
                prevGPA: 7.7,
                facultyAdvisor: "Assigned Faculty",
                financial: {
                        feeStatus: "Paid",
                        vulnerabilityScore: 53,
                        scholarshipEligible: false,
                        scholarshipType: "Merit"
                },
                socioEconomic: {
                        parentIncomeBracket: "3L-6L",
                        location: "Urban",
                        firstGenerationLearner: false,
                        genderRiskFlag: false
                },
                mentalHealth: {
                        behavioralStressIndex: 20,
                        counselingRecommended: false,
                        stressCategory: "Low"
                }
        },
        {
                id: "S020",
                name: "Ramesh Krishnan",
                dept: "IT",
                sem: 4,
                attendance: [
                        60,
                        58,
                        56,
                        55,
                        56
                ],
                marks: [
                        49,
                        48,
                        41,
                        40,
                        44
                ],
                lmsLogins: [
                        12,
                        13,
                        11,
                        11,
                        12
                ],
                assignmentDelays: 7,
                behaviorIncidents: 3,
                competitions: 0,
                prevGPA: 4.4,
                facultyAdvisor: "Assigned Faculty",
                financial: {
                        feeStatus: "Paid",
                        vulnerabilityScore: 41,
                        scholarshipEligible: false,
                        scholarshipType: "Need-based"
                },
                socioEconomic: {
                        parentIncomeBracket: "3L-6L",
                        location: "Urban",
                        firstGenerationLearner: false,
                        genderRiskFlag: false
                },
                mentalHealth: {
                        behavioralStressIndex: 80,
                        counselingRecommended: true,
                        stressCategory: "High"
                }
        },
        {
                id: "S021",
                name: "Ravi Das",
                dept: "ECE",
                sem: 5,
                attendance: [
                        73,
                        70,
                        72,
                        72,
                        74
                ],
                marks: [
                        56,
                        62,
                        65,
                        56,
                        61
                ],
                lmsLogins: [
                        15,
                        15,
                        17,
                        16,
                        16
                ],
                assignmentDelays: 2,
                behaviorIncidents: 0,
                competitions: 0,
                prevGPA: 6.1,
                facultyAdvisor: "Assigned Faculty",
                financial: {
                        feeStatus: "Paid",
                        vulnerabilityScore: 95,
                        scholarshipEligible: false,
                        scholarshipType: "Merit"
                },
                socioEconomic: {
                        parentIncomeBracket: "3L-6L",
                        location: "Rural",
                        firstGenerationLearner: false,
                        genderRiskFlag: false
                },
                mentalHealth: {
                        behavioralStressIndex: 45,
                        counselingRecommended: false,
                        stressCategory: "Low"
                }
        },
        {
                id: "S022",
                name: "Divya Kumar",
                dept: "EEE",
                sem: 6,
                attendance: [
                        84,
                        89,
                        92,
                        92,
                        87
                ],
                marks: [
                        77,
                        76,
                        75,
                        72,
                        77
                ],
                lmsLogins: [
                        20,
                        20,
                        20,
                        20,
                        19
                ],
                assignmentDelays: 0,
                behaviorIncidents: 0,
                competitions: 3,
                prevGPA: 7.7,
                facultyAdvisor: "Assigned Faculty",
                financial: {
                        feeStatus: "Paid",
                        vulnerabilityScore: 64,
                        scholarshipEligible: false,
                        scholarshipType: "Need-based"
                },
                socioEconomic: {
                        parentIncomeBracket: "3L-6L",
                        location: "Urban",
                        firstGenerationLearner: false,
                        genderRiskFlag: true
                },
                mentalHealth: {
                        behavioralStressIndex: 35,
                        counselingRecommended: false,
                        stressCategory: "Low"
                }
        },
        {
                id: "S023",
                name: "Vikram Mehta",
                dept: "MECH",
                sem: 7,
                attendance: [
                        86,
                        85,
                        93,
                        92,
                        89
                ],
                marks: [
                        80,
                        82,
                        83,
                        79,
                        80
                ],
                lmsLogins: [
                        20,
                        20,
                        19,
                        20,
                        19
                ],
                assignmentDelays: 2,
                behaviorIncidents: 0,
                competitions: 3,
                prevGPA: 8,
                facultyAdvisor: "Assigned Faculty",
                financial: {
                        feeStatus: "Paid",
                        vulnerabilityScore: 30,
                        scholarshipEligible: false,
                        scholarshipType: "Need-based"
                },
                socioEconomic: {
                        parentIncomeBracket: "3L-6L",
                        location: "Urban",
                        firstGenerationLearner: true,
                        genderRiskFlag: false
                },
                mentalHealth: {
                        behavioralStressIndex: 31,
                        counselingRecommended: false,
                        stressCategory: "Low"
                }
        },
        {
                id: "S024",
                name: "Aryan Joshi",
                dept: "CIVIL",
                sem: 8,
                attendance: [
                        92,
                        87,
                        89,
                        83,
                        88
                ],
                marks: [
                        71,
                        74,
                        70,
                        73,
                        73
                ],
                lmsLogins: [
                        17,
                        20,
                        18,
                        17,
                        19
                ],
                assignmentDelays: 2,
                behaviorIncidents: 0,
                competitions: 0,
                prevGPA: 7.3,
                facultyAdvisor: "Assigned Faculty",
                financial: {
                        feeStatus: "Pending",
                        vulnerabilityScore: 75,
                        scholarshipEligible: false,
                        scholarshipType: "Need-based"
                },
                socioEconomic: {
                        parentIncomeBracket: "3L-6L",
                        location: "Urban",
                        firstGenerationLearner: false,
                        genderRiskFlag: false
                },
                mentalHealth: {
                        behavioralStressIndex: 45,
                        counselingRecommended: false,
                        stressCategory: "Low"
                }
        },
        {
                id: "S025",
                name: "Vikram Das",
                dept: "CSE",
                sem: 1,
                attendance: [
                        82,
                        79,
                        86,
                        79,
                        83
                ],
                marks: [
                        72,
                        74,
                        72,
                        70,
                        74
                ],
                lmsLogins: [
                        17,
                        18,
                        17,
                        16,
                        18
                ],
                assignmentDelays: 2,
                behaviorIncidents: 0,
                competitions: 0,
                prevGPA: 7.4,
                facultyAdvisor: "Assigned Faculty",
                financial: {
                        feeStatus: "Paid",
                        vulnerabilityScore: 43,
                        scholarshipEligible: false,
                        scholarshipType: "Merit"
                },
                socioEconomic: {
                        parentIncomeBracket: "3L-6L",
                        location: "Urban",
                        firstGenerationLearner: true,
                        genderRiskFlag: false
                },
                mentalHealth: {
                        behavioralStressIndex: 36,
                        counselingRecommended: false,
                        stressCategory: "Low"
                }
        },
        {
                id: "S026",
                name: "Meera Tiwari",
                dept: "IT",
                sem: 2,
                attendance: [
                        83,
                        77,
                        81,
                        80,
                        80
                ],
                marks: [
                        69,
                        68,
                        72,
                        73,
                        69
                ],
                lmsLogins: [
                        16,
                        17,
                        15,
                        18,
                        17
                ],
                assignmentDelays: 2,
                behaviorIncidents: 0,
                competitions: 0,
                prevGPA: 6.9,
                facultyAdvisor: "Assigned Faculty",
                financial: {
                        feeStatus: "Pending",
                        vulnerabilityScore: 50,
                        scholarshipEligible: false,
                        scholarshipType: "Need-based"
                },
                socioEconomic: {
                        parentIncomeBracket: "3L-6L",
                        location: "Urban",
                        firstGenerationLearner: false,
                        genderRiskFlag: true
                },
                mentalHealth: {
                        behavioralStressIndex: 36,
                        counselingRecommended: false,
                        stressCategory: "Low"
                }
        },
        {
                id: "S027",
                name: "Swati Bose",
                dept: "ECE",
                sem: 3,
                attendance: [
                        92,
                        90,
                        91,
                        99,
                        94
                ],
                marks: [
                        84,
                        82,
                        82,
                        89,
                        86
                ],
                lmsLogins: [
                        21,
                        20,
                        18,
                        21,
                        20
                ],
                assignmentDelays: 2,
                behaviorIncidents: 0,
                competitions: 3,
                prevGPA: 8.6,
                facultyAdvisor: "Assigned Faculty",
                financial: {
                        feeStatus: "Paid",
                        vulnerabilityScore: 32,
                        scholarshipEligible: true,
                        scholarshipType: "Merit"
                },
                socioEconomic: {
                        parentIncomeBracket: "3L-6L",
                        location: "Urban",
                        firstGenerationLearner: true,
                        genderRiskFlag: true
                },
                mentalHealth: {
                        behavioralStressIndex: 35,
                        counselingRecommended: false,
                        stressCategory: "Low"
                }
        },
        {
                id: "S028",
                name: "Farhan Rao",
                dept: "EEE",
                sem: 4,
                attendance: [
                        73,
                        75,
                        77,
                        72,
                        77
                ],
                marks: [
                        70,
                        74,
                        68,
                        70,
                        71
                ],
                lmsLogins: [
                        16,
                        17,
                        18,
                        18,
                        17
                ],
                assignmentDelays: 0,
                behaviorIncidents: 0,
                competitions: 0,
                prevGPA: 7.1,
                facultyAdvisor: "Assigned Faculty",
                financial: {
                        feeStatus: "Paid",
                        vulnerabilityScore: 27,
                        scholarshipEligible: false,
                        scholarshipType: "Merit"
                },
                socioEconomic: {
                        parentIncomeBracket: "3L-6L",
                        location: "Urban",
                        firstGenerationLearner: false,
                        genderRiskFlag: false
                },
                mentalHealth: {
                        behavioralStressIndex: 29,
                        counselingRecommended: false,
                        stressCategory: "Low"
                }
        },
        {
                id: "S029",
                name: "Kiran Iyer",
                dept: "MECH",
                sem: 5,
                attendance: [
                        83,
                        90,
                        91,
                        90,
                        88
                ],
                marks: [
                        74,
                        80,
                        79,
                        81,
                        78
                ],
                lmsLogins: [
                        19,
                        20,
                        20,
                        17,
                        19
                ],
                assignmentDelays: 1,
                behaviorIncidents: 0,
                competitions: 2,
                prevGPA: 7.8,
                facultyAdvisor: "Assigned Faculty",
                financial: {
                        feeStatus: "Paid",
                        vulnerabilityScore: 55,
                        scholarshipEligible: false,
                        scholarshipType: "Need-based"
                },
                socioEconomic: {
                        parentIncomeBracket: "3L-6L",
                        location: "Urban",
                        firstGenerationLearner: true,
                        genderRiskFlag: false
                },
                mentalHealth: {
                        behavioralStressIndex: 42,
                        counselingRecommended: false,
                        stressCategory: "Low"
                }
        },
        {
                id: "S030",
                name: "Neha Kulkarni",
                dept: "CIVIL",
                sem: 6,
                attendance: [
                        67,
                        70,
                        72,
                        65,
                        70
                ],
                marks: [
                        58,
                        59,
                        62,
                        58,
                        58
                ],
                lmsLogins: [
                        13,
                        15,
                        13,
                        15,
                        15
                ],
                assignmentDelays: 3,
                behaviorIncidents: 0,
                competitions: 0,
                prevGPA: 5.8,
                facultyAdvisor: "Assigned Faculty",
                financial: {
                        feeStatus: "Pending",
                        vulnerabilityScore: 9,
                        scholarshipEligible: true,
                        scholarshipType: "Merit"
                },
                socioEconomic: {
                        parentIncomeBracket: "3L-6L",
                        location: "Urban",
                        firstGenerationLearner: true,
                        genderRiskFlag: true
                },
                mentalHealth: {
                        behavioralStressIndex: 38,
                        counselingRecommended: false,
                        stressCategory: "Low"
                }
        },
        {
                id: "S031",
                name: "Kavya Qureshi",
                dept: "CSE",
                sem: 7,
                attendance: [
                        84,
                        86,
                        87,
                        92,
                        89
                ],
                marks: [
                        86,
                        84,
                        85,
                        78,
                        83
                ],
                lmsLogins: [
                        17,
                        17,
                        19,
                        19,
                        19
                ],
                assignmentDelays: 1,
                behaviorIncidents: 0,
                competitions: 0,
                prevGPA: 8.3,
                facultyAdvisor: "Assigned Faculty",
                financial: {
                        feeStatus: "Paid",
                        vulnerabilityScore: 34,
                        scholarshipEligible: true,
                        scholarshipType: "Merit"
                },
                socioEconomic: {
                        parentIncomeBracket: "3L-6L",
                        location: "Rural",
                        firstGenerationLearner: false,
                        genderRiskFlag: true
                },
                mentalHealth: {
                        behavioralStressIndex: 43,
                        counselingRecommended: false,
                        stressCategory: "Low"
                }
        },
        {
                id: "S032",
                name: "Neha Singh",
                dept: "IT",
                sem: 8,
                attendance: [
                        96,
                        91,
                        97,
                        88,
                        93
                ],
                marks: [
                        88,
                        87,
                        88,
                        84,
                        88
                ],
                lmsLogins: [
                        20,
                        21,
                        21,
                        18,
                        20
                ],
                assignmentDelays: 1,
                behaviorIncidents: 0,
                competitions: 0,
                prevGPA: 8.8,
                facultyAdvisor: "Assigned Faculty",
                financial: {
                        feeStatus: "Paid",
                        vulnerabilityScore: 0,
                        scholarshipEligible: false,
                        scholarshipType: "Need-based"
                },
                socioEconomic: {
                        parentIncomeBracket: "3L-6L",
                        location: "Urban",
                        firstGenerationLearner: false,
                        genderRiskFlag: true
                },
                mentalHealth: {
                        behavioralStressIndex: 49,
                        counselingRecommended: false,
                        stressCategory: "Low"
                }
        },
        {
                id: "S033",
                name: "Nisha Malhotra",
                dept: "ECE",
                sem: 1,
                attendance: [
                        68,
                        73,
                        72,
                        73,
                        69
                ],
                marks: [
                        58,
                        59,
                        61,
                        60,
                        59
                ],
                lmsLogins: [
                        16,
                        16,
                        15,
                        15,
                        15
                ],
                assignmentDelays: 4,
                behaviorIncidents: 0,
                competitions: 0,
                prevGPA: 5.9,
                facultyAdvisor: "Assigned Faculty",
                financial: {
                        feeStatus: "Paid",
                        vulnerabilityScore: 42,
                        scholarshipEligible: true,
                        scholarshipType: "Need-based"
                },
                socioEconomic: {
                        parentIncomeBracket: "3L-6L",
                        location: "Rural",
                        firstGenerationLearner: true,
                        genderRiskFlag: true
                },
                mentalHealth: {
                        behavioralStressIndex: 81,
                        counselingRecommended: true,
                        stressCategory: "High"
                }
        },
        {
                id: "S034",
                name: "Swati Qureshi",
                dept: "EEE",
                sem: 2,
                attendance: [
                        96,
                        100,
                        97,
                        94,
                        95
                ],
                marks: [
                        82,
                        83,
                        82,
                        86,
                        85
                ],
                lmsLogins: [
                        20,
                        21,
                        19,
                        21,
                        21
                ],
                assignmentDelays: 2,
                behaviorIncidents: 0,
                competitions: 2,
                prevGPA: 8.5,
                facultyAdvisor: "Assigned Faculty",
                financial: {
                        feeStatus: "Paid",
                        vulnerabilityScore: 10,
                        scholarshipEligible: false,
                        scholarshipType: "Merit"
                },
                socioEconomic: {
                        parentIncomeBracket: "3L-6L",
                        location: "Rural",
                        firstGenerationLearner: true,
                        genderRiskFlag: true
                },
                mentalHealth: {
                        behavioralStressIndex: 24,
                        counselingRecommended: false,
                        stressCategory: "Low"
                }
        },
        {
                id: "S035",
                name: "Kiran Singh",
                dept: "MECH",
                sem: 3,
                attendance: [
                        79,
                        74,
                        73,
                        75,
                        76
                ],
                marks: [
                        60,
                        67,
                        60,
                        59,
                        62
                ],
                lmsLogins: [
                        17,
                        16,
                        14,
                        15,
                        16
                ],
                assignmentDelays: 2,
                behaviorIncidents: 0,
                competitions: 0,
                prevGPA: 6.2,
                facultyAdvisor: "Assigned Faculty",
                financial: {
                        feeStatus: "Paid",
                        vulnerabilityScore: 11,
                        scholarshipEligible: false,
                        scholarshipType: "Merit"
                },
                socioEconomic: {
                        parentIncomeBracket: "3L-6L",
                        location: "Urban",
                        firstGenerationLearner: true,
                        genderRiskFlag: false
                },
                mentalHealth: {
                        behavioralStressIndex: 32,
                        counselingRecommended: false,
                        stressCategory: "Low"
                }
        },
        {
                id: "S036",
                name: "Aarti Bose",
                dept: "CIVIL",
                sem: 4,
                attendance: [
                        76,
                        81,
                        85,
                        76,
                        80
                ],
                marks: [
                        75,
                        71,
                        74,
                        70,
                        74
                ],
                lmsLogins: [
                        18,
                        17,
                        18,
                        18,
                        17
                ],
                assignmentDelays: 0,
                behaviorIncidents: 0,
                competitions: 0,
                prevGPA: 7.4,
                facultyAdvisor: "Assigned Faculty",
                financial: {
                        feeStatus: "Paid",
                        vulnerabilityScore: 49,
                        scholarshipEligible: false,
                        scholarshipType: "Need-based"
                },
                socioEconomic: {
                        parentIncomeBracket: "3L-6L",
                        location: "Rural",
                        firstGenerationLearner: true,
                        genderRiskFlag: true
                },
                mentalHealth: {
                        behavioralStressIndex: 20,
                        counselingRecommended: false,
                        stressCategory: "Low"
                }
        },
        {
                id: "S037",
                name: "Anjali Das",
                dept: "CSE",
                sem: 5,
                attendance: [
                        86,
                        78,
                        84,
                        81,
                        83
                ],
                marks: [
                        74,
                        71,
                        68,
                        71,
                        72
                ],
                lmsLogins: [
                        17,
                        16,
                        18,
                        17,
                        18
                ],
                assignmentDelays: 1,
                behaviorIncidents: 0,
                competitions: 0,
                prevGPA: 7.2,
                facultyAdvisor: "Assigned Faculty",
                financial: {
                        feeStatus: "Paid",
                        vulnerabilityScore: 79,
                        scholarshipEligible: true,
                        scholarshipType: "Need-based"
                },
                socioEconomic: {
                        parentIncomeBracket: "3L-6L",
                        location: "Rural",
                        firstGenerationLearner: false,
                        genderRiskFlag: true
                },
                mentalHealth: {
                        behavioralStressIndex: 48,
                        counselingRecommended: false,
                        stressCategory: "Low"
                }
        },
        {
                id: "S038",
                name: "Aryan Patil",
                dept: "IT",
                sem: 6,
                attendance: [
                        81,
                        80,
                        84,
                        83,
                        85
                ],
                marks: [
                        80,
                        77,
                        77,
                        80,
                        76
                ],
                lmsLogins: [
                        18,
                        18,
                        17,
                        18,
                        18
                ],
                assignmentDelays: 1,
                behaviorIncidents: 0,
                competitions: 3,
                prevGPA: 7.6,
                facultyAdvisor: "Assigned Faculty",
                financial: {
                        feeStatus: "Pending",
                        vulnerabilityScore: 16,
                        scholarshipEligible: false,
                        scholarshipType: "Merit"
                },
                socioEconomic: {
                        parentIncomeBracket: "3L-6L",
                        location: "Urban",
                        firstGenerationLearner: true,
                        genderRiskFlag: false
                },
                mentalHealth: {
                        behavioralStressIndex: 36,
                        counselingRecommended: false,
                        stressCategory: "Low"
                }
        },
        {
                id: "S039",
                name: "Pooja Krishnan",
                dept: "ECE",
                sem: 7,
                attendance: [
                        92,
                        88,
                        93,
                        92,
                        91
                ],
                marks: [
                        74,
                        76,
                        74,
                        72,
                        77
                ],
                lmsLogins: [
                        21,
                        21,
                        21,
                        18,
                        20
                ],
                assignmentDelays: 1,
                behaviorIncidents: 0,
                competitions: 1,
                prevGPA: 7.7,
                facultyAdvisor: "Assigned Faculty",
                financial: {
                        feeStatus: "Pending",
                        vulnerabilityScore: 11,
                        scholarshipEligible: true,
                        scholarshipType: "Merit"
                },
                socioEconomic: {
                        parentIncomeBracket: "3L-6L",
                        location: "Rural",
                        firstGenerationLearner: false,
                        genderRiskFlag: true
                },
                mentalHealth: {
                        behavioralStressIndex: 29,
                        counselingRecommended: false,
                        stressCategory: "Low"
                }
        },
        {
                id: "S040",
                name: "Aditya Tiwari",
                dept: "EEE",
                sem: 8,
                attendance: [
                        93,
                        96,
                        94,
                        90,
                        91
                ],
                marks: [
                        86,
                        87,
                        80,
                        87,
                        84
                ],
                lmsLogins: [
                        21,
                        18,
                        21,
                        21,
                        20
                ],
                assignmentDelays: 0,
                behaviorIncidents: 0,
                competitions: 1,
                prevGPA: 8.4,
                facultyAdvisor: "Assigned Faculty",
                financial: {
                        feeStatus: "Paid",
                        vulnerabilityScore: 43,
                        scholarshipEligible: false,
                        scholarshipType: "Need-based"
                },
                socioEconomic: {
                        parentIncomeBracket: "3L-6L",
                        location: "Rural",
                        firstGenerationLearner: false,
                        genderRiskFlag: false
                },
                mentalHealth: {
                        behavioralStressIndex: 32,
                        counselingRecommended: false,
                        stressCategory: "Low"
                }
        },
        {
                id: "S041",
                name: "Swati Kumar",
                dept: "MECH",
                sem: 1,
                attendance: [
                        66,
                        65,
                        67,
                        66,
                        66
                ],
                marks: [
                        53,
                        57,
                        55,
                        56,
                        52
                ],
                lmsLogins: [
                        15,
                        13,
                        14,
                        13,
                        14
                ],
                assignmentDelays: 6,
                behaviorIncidents: 0,
                competitions: 0,
                prevGPA: 5.2,
                facultyAdvisor: "Assigned Faculty",
                financial: {
                        feeStatus: "Paid",
                        vulnerabilityScore: 55,
                        scholarshipEligible: false,
                        scholarshipType: "Merit"
                },
                socioEconomic: {
                        parentIncomeBracket: "3L-6L",
                        location: "Urban",
                        firstGenerationLearner: true,
                        genderRiskFlag: true
                },
                mentalHealth: {
                        behavioralStressIndex: 85,
                        counselingRecommended: true,
                        stressCategory: "High"
                }
        },
        {
                id: "S042",
                name: "Vikram Kulkarni",
                dept: "CIVIL",
                sem: 2,
                attendance: [
                        86,
                        90,
                        85,
                        86,
                        90
                ],
                marks: [
                        80,
                        82,
                        80,
                        77,
                        80
                ],
                lmsLogins: [
                        18,
                        20,
                        20,
                        17,
                        19
                ],
                assignmentDelays: 1,
                behaviorIncidents: 0,
                competitions: 3,
                prevGPA: 8,
                facultyAdvisor: "Assigned Faculty",
                financial: {
                        feeStatus: "Paid",
                        vulnerabilityScore: 74,
                        scholarshipEligible: false,
                        scholarshipType: "Merit"
                },
                socioEconomic: {
                        parentIncomeBracket: "3L-6L",
                        location: "Rural",
                        firstGenerationLearner: false,
                        genderRiskFlag: false
                },
                mentalHealth: {
                        behavioralStressIndex: 31,
                        counselingRecommended: false,
                        stressCategory: "Low"
                }
        },
        {
                id: "S043",
                name: "Rohit Rao",
                dept: "CSE",
                sem: 3,
                attendance: [
                        65,
                        59,
                        62,
                        66,
                        62
                ],
                marks: [
                        57,
                        51,
                        51,
                        59,
                        55
                ],
                lmsLogins: [
                        12,
                        12,
                        11,
                        13,
                        13
                ],
                assignmentDelays: 0,
                behaviorIncidents: 2,
                competitions: 0,
                prevGPA: 5.5,
                facultyAdvisor: "Assigned Faculty",
                financial: {
                        feeStatus: "Paid",
                        vulnerabilityScore: 48,
                        scholarshipEligible: true,
                        scholarshipType: "Merit"
                },
                socioEconomic: {
                        parentIncomeBracket: "3L-6L",
                        location: "Rural",
                        firstGenerationLearner: false,
                        genderRiskFlag: false
                },
                mentalHealth: {
                        behavioralStressIndex: 97,
                        counselingRecommended: true,
                        stressCategory: "High"
                }
        },
        {
                id: "S044",
                name: "Ishaan Kulkarni",
                dept: "IT",
                sem: 4,
                attendance: [
                        66,
                        64,
                        62,
                        66,
                        61
                ],
                marks: [
                        50,
                        49,
                        50,
                        49,
                        50
                ],
                lmsLogins: [
                        11,
                        14,
                        11,
                        11,
                        13
                ],
                assignmentDelays: 1,
                behaviorIncidents: 0,
                competitions: 0,
                prevGPA: 5,
                facultyAdvisor: "Assigned Faculty",
                financial: {
                        feeStatus: "Paid",
                        vulnerabilityScore: 97,
                        scholarshipEligible: false,
                        scholarshipType: "Merit"
                },
                socioEconomic: {
                        parentIncomeBracket: "3L-6L",
                        location: "Rural",
                        firstGenerationLearner: false,
                        genderRiskFlag: false
                },
                mentalHealth: {
                        behavioralStressIndex: 96,
                        counselingRecommended: true,
                        stressCategory: "High"
                }
        },
        {
                id: "S045",
                name: "Arjun Nair",
                dept: "ECE",
                sem: 5,
                attendance: [
                        99,
                        95,
                        93,
                        98,
                        95
                ],
                marks: [
                        78,
                        76,
                        78,
                        79,
                        81
                ],
                lmsLogins: [
                        19,
                        22,
                        21,
                        22,
                        21
                ],
                assignmentDelays: 2,
                behaviorIncidents: 0,
                competitions: 2,
                prevGPA: 8.1,
                facultyAdvisor: "Assigned Faculty",
                financial: {
                        feeStatus: "Paid",
                        vulnerabilityScore: 45,
                        scholarshipEligible: true,
                        scholarshipType: "Merit"
                },
                socioEconomic: {
                        parentIncomeBracket: "3L-6L",
                        location: "Rural",
                        firstGenerationLearner: true,
                        genderRiskFlag: false
                },
                mentalHealth: {
                        behavioralStressIndex: 22,
                        counselingRecommended: false,
                        stressCategory: "Low"
                }
        },
        {
                id: "S046",
                name: "Pooja Malhotra",
                dept: "EEE",
                sem: 6,
                attendance: [
                        61,
                        64,
                        62,
                        59,
                        64
                ],
                marks: [
                        59,
                        60,
                        55,
                        60,
                        55
                ],
                lmsLogins: [
                        14,
                        12,
                        14,
                        13,
                        14
                ],
                assignmentDelays: 0,
                behaviorIncidents: 3,
                competitions: 0,
                prevGPA: 5.5,
                facultyAdvisor: "Assigned Faculty",
                financial: {
                        feeStatus: "Paid",
                        vulnerabilityScore: 72,
                        scholarshipEligible: false,
                        scholarshipType: "Merit"
                },
                socioEconomic: {
                        parentIncomeBracket: "3L-6L",
                        location: "Urban",
                        firstGenerationLearner: false,
                        genderRiskFlag: true
                },
                mentalHealth: {
                        behavioralStressIndex: 80,
                        counselingRecommended: true,
                        stressCategory: "High"
                }
        },
        {
                id: "S047",
                name: "Ravi Reddy",
                dept: "MECH",
                sem: 7,
                attendance: [
                        55,
                        60,
                        58,
                        60,
                        60
                ],
                marks: [
                        48,
                        50,
                        50,
                        47,
                        48
                ],
                lmsLogins: [
                        14,
                        14,
                        11,
                        13,
                        13
                ],
                assignmentDelays: 7,
                behaviorIncidents: 3,
                competitions: 0,
                prevGPA: 4.8,
                facultyAdvisor: "Assigned Faculty",
                financial: {
                        feeStatus: "Pending",
                        vulnerabilityScore: 34,
                        scholarshipEligible: false,
                        scholarshipType: "Merit"
                },
                socioEconomic: {
                        parentIncomeBracket: "3L-6L",
                        location: "Rural",
                        firstGenerationLearner: false,
                        genderRiskFlag: false
                },
                mentalHealth: {
                        behavioralStressIndex: 79,
                        counselingRecommended: true,
                        stressCategory: "High"
                }
        },
        {
                id: "S048",
                name: "Divya Mehta",
                dept: "CIVIL",
                sem: 8,
                attendance: [
                        61,
                        59,
                        65,
                        63,
                        63
                ],
                marks: [
                        57,
                        57,
                        57,
                        52,
                        55
                ],
                lmsLogins: [
                        12,
                        13,
                        14,
                        12,
                        14
                ],
                assignmentDelays: 2,
                behaviorIncidents: 2,
                competitions: 0,
                prevGPA: 5.5,
                facultyAdvisor: "Assigned Faculty",
                financial: {
                        feeStatus: "Paid",
                        vulnerabilityScore: 81,
                        scholarshipEligible: false,
                        scholarshipType: "Need-based"
                },
                socioEconomic: {
                        parentIncomeBracket: "3L-6L",
                        location: "Urban",
                        firstGenerationLearner: false,
                        genderRiskFlag: true
                },
                mentalHealth: {
                        behavioralStressIndex: 95,
                        counselingRecommended: true,
                        stressCategory: "High"
                }
        },
        {
                id: "S049",
                name: "Kiran Singh",
                dept: "CSE",
                sem: 1,
                attendance: [
                        94,
                        97,
                        100,
                        92,
                        96
                ],
                marks: [
                        84,
                        79,
                        86,
                        84,
                        84
                ],
                lmsLogins: [
                        20,
                        19,
                        19,
                        22,
                        21
                ],
                assignmentDelays: 1,
                behaviorIncidents: 0,
                competitions: 3,
                prevGPA: 8.4,
                facultyAdvisor: "Assigned Faculty",
                financial: {
                        feeStatus: "Paid",
                        vulnerabilityScore: 16,
                        scholarshipEligible: false,
                        scholarshipType: "Merit"
                },
                socioEconomic: {
                        parentIncomeBracket: "3L-6L",
                        location: "Urban",
                        firstGenerationLearner: false,
                        genderRiskFlag: false
                },
                mentalHealth: {
                        behavioralStressIndex: 31,
                        counselingRecommended: false,
                        stressCategory: "Low"
                }
        },
        {
                id: "S050",
                name: "Karan Rao",
                dept: "IT",
                sem: 2,
                attendance: [
                        67,
                        67,
                        63,
                        61,
                        63
                ],
                marks: [
                        52,
                        54,
                        49,
                        46,
                        50
                ],
                lmsLogins: [
                        11,
                        14,
                        13,
                        14,
                        13
                ],
                assignmentDelays: 3,
                behaviorIncidents: 1,
                competitions: 0,
                prevGPA: 5,
                facultyAdvisor: "Assigned Faculty",
                financial: {
                        feeStatus: "Paid",
                        vulnerabilityScore: 51,
                        scholarshipEligible: false,
                        scholarshipType: "Merit"
                },
                socioEconomic: {
                        parentIncomeBracket: "3L-6L",
                        location: "Rural",
                        firstGenerationLearner: true,
                        genderRiskFlag: false
                },
                mentalHealth: {
                        behavioralStressIndex: 84,
                        counselingRecommended: true,
                        stressCategory: "High"
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