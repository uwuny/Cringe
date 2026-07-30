
"use strict";

const EQUIPMENT_T10 = {
  "tanks": [
    {
      "id": "R90_IS_4M",
      "name": "ИС-4",
      "nation": "ussr",
      "level": 10,
      "class": "heavyTank",
      "images": [
        "R90_IS_4M.png"
      ],
      "role": "role_HT_assault",
      "rating": "1"
    },
    {
      "id": "R45_IS-7",
      "name": "ИС-7",
      "nation": "ussr",
      "level": 10,
      "class": "heavyTank",
      "images": [
        "R45_IS-7.png"
      ],
      "role": "role_HT_break",
      "rating": "5"
    },
    {
      "id": "R110_Object_260",
      "name": "Объект 260",
      "nation": "ussr",
      "level": 10,
      "class": "heavyTank",
      "images": [
        "R110_Object_260.png"
      ],
      "role": "role_HT_break",
      "rating": "3"
    },
    {
      "id": "R155_Object_277",
      "name": "Объект 277",
      "nation": "ussr",
      "level": 10,
      "class": "heavyTank",
      "images": [
        "R155_Object_277.png"
      ],
      "role": "role_HT_break",
      "rating": "3"
    },
    {
      "id": "R231_Object_278",
      "name": "Объект 278",
      "nation": "ussr",
      "level": 10,
      "class": "heavyTank",
      "images": [
        "R231_Object_278.png"
      ],
      "role": "role_HT_break",
      "rating": "5+"
    },
    {
      "id": "R157_Object_279R",
      "name": "Объект 279 ранний",
      "nation": "ussr",
      "level": 10,
      "class": "heavyTank",
      "images": [
        "R157_Object_279R.png"
      ],
      "role": "role_HT_break",
      "rating": "2"
    },
    {
      "id": "R145_Object_705_A",
      "name": "Объект 705А",
      "nation": "ussr",
      "level": 10,
      "class": "heavyTank",
      "images": [
        "R145_Object_705_A.png"
      ],
      "role": "role_HT_assault",
      "rating": "1"
    },
    {
      "id": "R229_Object_718B",
      "name": "Объект 718Б",
      "nation": "ussr",
      "level": 10,
      "class": "heavyTank",
      "images": [
        "R229_Object_718B.png"
      ],
      "role": "role_HT_break",
      "rating": "1"
    },
    {
      "id": "R178_Object_780",
      "name": "Объект 780",
      "nation": "ussr",
      "level": 10,
      "class": "heavyTank",
      "images": [
        "R178_Object_780.png"
      ],
      "role": "role_HT_break",
      "rating": "2"
    },
    {
      "id": "R169_ST_II",
      "name": "СТ-II",
      "nation": "ussr",
      "level": 10,
      "class": "heavyTank",
      "images": [
        "R169_ST_II.png"
      ],
      "role": "role_HT_assault",
      "rating": "1"
    },
    {
      "id": "R213_TET_100",
      "name": "ТЭТ-100",
      "nation": "ussr",
      "level": 10,
      "class": "heavyTank",
      "images": [
        "R213_TET_100.png"
      ],
      "role": "role_HT_assault",
      "rating": "4"
    },
    {
      "id": "R144_K_91",
      "name": "К-91",
      "nation": "ussr",
      "level": 10,
      "class": "mediumTank",
      "images": [
        "R144_K_91.png"
      ],
      "role": "role_MT_sniper",
      "rating": "3"
    },
    {
      "id": "R97_Object_140",
      "name": "Объект 140",
      "nation": "ussr",
      "level": 10,
      "class": "mediumTank",
      "images": [
        "R97_Object_140.png"
      ],
      "role": "role_MT_universal",
      "rating": "3"
    },
    {
      "id": "R246_Object_168_122",
      "name": "Объект 168-122 Квант",
      "nation": "ussr",
      "level": 10,
      "class": "mediumTank",
      "images": [
        "R246_Object_168_122.png"
      ],
      "role": "role_MT_sniper",
      "rating": "1"
    },
    {
      "id": "R148_Object_430_U",
      "name": "Объект 430У",
      "nation": "ussr",
      "level": 10,
      "class": "mediumTank",
      "images": [
        "R148_Object_430_U.png"
      ],
      "role": "role_MT_assault",
      "rating": "2"
    },
    {
      "id": "R95_Object_907",
      "name": "Объект 907",
      "nation": "ussr",
      "level": 10,
      "class": "mediumTank",
      "images": [
        "R95_Object_907.png"
      ],
      "role": "role_MT_assault",
      "rating": "3"
    },
    {
      "id": "R120_T22SR_A22",
      "name": "Т-22 ср.",
      "nation": "ussr",
      "level": 10,
      "class": "mediumTank",
      "images": [
        "R120_T22SR_A22.png"
      ],
      "role": "role_MT_assault",
      "rating": "1"
    },
    {
      "id": "R87_T62A",
      "name": "Т-62А",
      "nation": "ussr",
      "level": 10,
      "class": "mediumTank",
      "images": [
        "R87_T62A.png"
      ],
      "role": "role_MT_universal",
      "rating": "3"
    },
    {
      "id": "R225_Vasiliev_project",
      "name": "Проект Васильева",
      "nation": "ussr",
      "level": 10,
      "class": "lightTank",
      "images": [
        "R225_Vasiliev_project.png"
      ],
      "role": "role_LT_universal",
      "rating": "2"
    },
    {
      "id": "R132_VNII_100LT",
      "name": "Т-100 ЛТ",
      "nation": "ussr",
      "level": 10,
      "class": "lightTank",
      "images": [
        "R132_VNII_100LT.png"
      ],
      "role": "role_LT_universal",
      "rating": "3"
    },
    {
      "id": "R199_SU_122V",
      "name": "SU-122V",
      "nation": "ussr",
      "level": 10,
      "class": "AT-SPG",
      "images": [
        "R199_SU_122V.png"
      ],
      "role": "role_ATSPG_support",
      "rating": "1"
    },
    {
      "id": "R219_Waffentrager_E100_Gold",
      "name": "WT E 100 Оруженосец",
      "nation": "ussr",
      "level": 10,
      "class": "AT-SPG",
      "images": [
        "R219_Waffentrager_E100_Gold.png"
      ],
      "role": "role_ATSPG_support",
      "rating": "2"
    },
    {
      "id": "R222_Object_120_Taran",
      "name": "Объект 120 «Таран»",
      "nation": "ussr",
      "level": 10,
      "class": "AT-SPG",
      "images": [
        "R222_Object_120_Taran.png"
      ],
      "role": "role_ATSPG_sniper",
      "rating": "1"
    },
    {
      "id": "R88_Object268",
      "name": "Объект 268",
      "nation": "ussr",
      "level": 10,
      "class": "AT-SPG",
      "images": [
        "R88_Object268.png"
      ],
      "role": "role_ATSPG_universal",
      "rating": "1"
    },
    {
      "id": "R149_Object_268_4",
      "name": "Объект 268 Вариант 4",
      "nation": "ussr",
      "level": 10,
      "class": "AT-SPG",
      "images": [
        "R149_Object_268_4.png"
      ],
      "role": "role_ATSPG_assault",
      "rating": "1"
    },
    {
      "id": "R126_Object_730_5",
      "name": "Объект 268 Вариант 5",
      "nation": "ussr",
      "level": 10,
      "class": "AT-SPG",
      "images": [
        "R126_Object_730_5.png"
      ],
      "role": "role_ATSPG_sniper",
      "rating": "1"
    },
    {
      "id": "G56_E-100",
      "name": "E 100",
      "nation": "germany",
      "level": 10,
      "class": "heavyTank",
      "images": [
        "G56_E-100.png"
      ],
      "role": "role_HT_assault",
      "rating": "2"
    },
    {
      "id": "G162_Project_Kpz_07P_E",
      "name": "Kampfpanzer 07 P(E)",
      "nation": "germany",
      "level": 10,
      "class": "heavyTank",
      "images": [
        "G162_Project_Kpz_07P_E.png"
      ],
      "role": "role_HT_universal",
      "rating": "3"
    },
    {
      "id": "G42_Maus",
      "name": "Maus",
      "nation": "germany",
      "level": 10,
      "class": "heavyTank",
      "images": [
        "G42_Maus.png"
      ],
      "role": "role_HT_assault",
      "rating": "2"
    },
    {
      "id": "G134_PzKpfw_VII",
      "name": "Pz.Kpfw. VII",
      "nation": "germany",
      "level": 10,
      "class": "heavyTank",
      "images": [
        "G134_PzKpfw_VII.png"
      ],
      "role": "role_HT_assault",
      "rating": "1"
    },
    {
      "id": "G92_VK7201",
      "name": "VK 72.01 (K)",
      "nation": "germany",
      "level": 10,
      "class": "heavyTank",
      "images": [
        "G92_VK7201.png"
      ],
      "role": "role_HT_assault",
      "rating": "1"
    },
    {
      "id": "G189_E100_02",
      "name": "Е 100 Feuerbär",
      "nation": "germany",
      "level": 10,
      "class": "heavyTank",
      "images": [
        "G189_E100_02.png"
      ],
      "role": "role_HT_assault",
      "rating": "3"
    },
    {
      "id": "G73_E50_Ausf_M",
      "name": "E 50 Ausf. M",
      "nation": "germany",
      "level": 10,
      "class": "mediumTank",
      "images": [
        "G73_E50_Ausf_M.png"
      ],
      "role": "role_MT_assault",
      "rating": "1"
    },
    {
      "id": "G165_Erich_Konzept_I",
      "name": "Kpz. Erich Konzept I",
      "nation": "germany",
      "level": 10,
      "class": "mediumTank",
      "images": [
        "G165_Erich_Konzept_I.png"
      ],
      "role": "role_MT_sniper",
      "rating": "1"
    },
    {
      "id": "G89_Leopard1",
      "name": "Leopard 1",
      "nation": "germany",
      "level": 10,
      "class": "mediumTank",
      "images": [
        "G89_Leopard1.png"
      ],
      "role": "role_MT_sniper",
      "rating": "2"
    },
    {
      "id": "G125_Spz_57_Rh",
      "name": "Rheinmetall Panzerwagen",
      "nation": "germany",
      "level": 10,
      "class": "lightTank",
      "images": [
        "G125_Spz_57_Rh.png"
      ],
      "role": "role_LT_universal",
      "rating": "1"
    },
    {
      "id": "G121_Grille_15_L63",
      "name": "Grille 15",
      "nation": "germany",
      "level": 10,
      "class": "AT-SPG",
      "images": [
        "G121_Grille_15_L63.png"
      ],
      "role": "role_ATSPG_sniper",
      "rating": "1"
    },
    {
      "id": "G72_JagdPz_E100",
      "name": "Jagdpanzer E 100",
      "nation": "germany",
      "level": 10,
      "class": "AT-SPG",
      "images": [
        "G72_JagdPz_E100.png"
      ],
      "role": "role_ATSPG_assault",
      "rating": "2"
    },
    {
      "id": "G181_StuG_Maus_17cm",
      "name": "StuG Maus 17 cm",
      "nation": "germany",
      "level": 10,
      "class": "AT-SPG",
      "images": [
        "G181_StuG_Maus_17cm.png"
      ],
      "role": "role_ATSPG_assault",
      "rating": "2"
    },
    {
      "id": "G178_Sturmtiger_V1",
      "name": "Sturmtiger",
      "nation": "germany",
      "level": 10,
      "class": "AT-SPG",
      "images": [
        "G178_Sturmtiger_V1.png"
      ],
      "role": "role_ATSPG_support",
      "rating": "1"
    },
    {
      "id": "G98_Waffentrager_E100",
      "name": "Waffenträger auf E 100",
      "nation": "germany",
      "level": 10,
      "class": "AT-SPG",
      "images": [
        "G98_Waffentrager_E100.png"
      ],
      "role": "role_ATSPG_support",
      "rating": "2"
    },
    {
      "id": "A172_ASTRON_FL",
      "name": "Astron-FL",
      "nation": "usa",
      "level": 10,
      "class": "heavyTank",
      "images": [
        "A172_ASTRON_FL.png"
      ],
      "role": "role_HT_support",
      "rating": "1"
    },
    {
      "id": "A163_H_3",
      "name": "H-3",
      "nation": "usa",
      "level": 10,
      "class": "heavyTank",
      "images": [
        "A163_H_3.png"
      ],
      "role": "role_HT_support",
      "rating": "2"
    },
    {
      "id": "A143_M_V_Y",
      "name": "M-V-Y",
      "nation": "usa",
      "level": 10,
      "class": "heavyTank",
      "images": [
        "A143_M_V_Y.png"
      ],
      "role": "role_HT_break",
      "rating": "2"
    },
    {
      "id": "A69_T110E5",
      "name": "T110E5",
      "nation": "usa",
      "level": 10,
      "class": "heavyTank",
      "images": [
        "A69_T110E5.png"
      ],
      "role": "role_HT_universal",
      "rating": "2"
    },
    {
      "id": "A67_T57_58",
      "name": "T57 Heavy Tank",
      "nation": "usa",
      "level": 10,
      "class": "heavyTank",
      "images": [
        "A67_T57_58.png"
      ],
      "role": "role_HT_support",
      "rating": "4"
    },
    {
      "id": "A120_M48A5",
      "name": "M48A5 Patton",
      "nation": "usa",
      "level": 10,
      "class": "mediumTank",
      "images": [
        "A120_M48A5.png"
      ],
      "role": "role_MT_universal",
      "rating": "1"
    },
    {
      "id": "A92_M60",
      "name": "M60",
      "nation": "usa",
      "level": 10,
      "class": "mediumTank",
      "images": [
        "A92_M60.png"
      ],
      "role": "role_MT_universal",
      "rating": "1"
    },
    {
      "id": "A179_MBT_59",
      "name": "MBT-59",
      "nation": "usa",
      "level": 10,
      "class": "mediumTank",
      "images": [
        "A179_MBT_59.png"
      ],
      "role": "role_MT_sniper",
      "rating": "1"
    },
    {
      "id": "A175_OTAC_MT_58",
      "name": "OTAC MT-58",
      "nation": "usa",
      "level": 10,
      "class": "mediumTank",
      "images": [
        "A175_OTAC_MT_58.png"
      ],
      "role": "role_MT_universal",
      "rating": "1"
    },
    {
      "id": "A95_T95_E6",
      "name": "T95E6",
      "nation": "usa",
      "level": 10,
      "class": "mediumTank",
      "images": [
        "A95_T95_E6.png"
      ],
      "role": "role_MT_universal",
      "rating": "1"
    },
    {
      "id": "A116_XM551",
      "name": "XM551 Sheridan",
      "nation": "usa",
      "level": 10,
      "class": "lightTank",
      "images": [
        "A116_XM551.png"
      ],
      "role": "role_LT_universal",
      "rating": "1"
    },
    {
      "id": "A85_T110E3",
      "name": "T110E3",
      "nation": "usa",
      "level": 10,
      "class": "AT-SPG",
      "images": [
        "A85_T110E3.png"
      ],
      "role": "role_ATSPG_assault",
      "rating": "2"
    },
    {
      "id": "A83_T110E4",
      "name": "T110E4",
      "nation": "usa",
      "level": 10,
      "class": "AT-SPG",
      "images": [
        "A83_T110E4.png"
      ],
      "role": "role_ATSPG_assault",
      "rating": "1"
    },
    {
      "id": "A165_XM57",
      "name": "XM57",
      "nation": "usa",
      "level": 10,
      "class": "AT-SPG",
      "images": [
        "A165_XM57.png"
      ],
      "role": "role_ATSPG_assault",
      "rating": "1"
    },
    {
      "id": "Ch22_113",
      "name": "113",
      "nation": "china",
      "level": 10,
      "class": "heavyTank",
      "images": [
        "Ch22_113.png"
      ],
      "role": "role_HT_break",
      "rating": "3"
    },
    {
      "id": "Ch52_WZ_122_6_F3",
      "name": "116-F3",
      "nation": "china",
      "level": 10,
      "class": "heavyTank",
      "images": [
        "Ch52_WZ_122_6_F3.png"
      ],
      "role": "role_HT_assault",
      "rating": "3"
    },
    {
      "id": "Ch56_BZ_74_1",
      "name": "BZ-74-1",
      "nation": "china",
      "level": 10,
      "class": "heavyTank",
      "images": [
        "Ch56_BZ_74_1.png"
      ],
      "role": "role_HT_break",
      "rating": "3"
    },
    {
      "id": "Ch48_BZ_75",
      "name": "BZ-75",
      "nation": "china",
      "level": 10,
      "class": "heavyTank",
      "images": [
        "Ch48_BZ_75.png"
      ],
      "role": "role_HT_assault",
      "rating": "3"
    },
    {
      "id": "Ch73_GPT_75",
      "name": "GPT-75",
      "nation": "china",
      "level": 10,
      "class": "heavyTank",
      "images": [
        "Ch73_GPT_75.png"
      ],
      "role": "role_HT_support",
      "rating": "1"
    },
    {
      "id": "Ch41_WZ_111_5A",
      "name": "WZ-111 model 5A",
      "nation": "china",
      "level": 10,
      "class": "heavyTank",
      "images": [
        "Ch41_WZ_111_5A.png"
      ],
      "role": "role_HT_break",
      "rating": "3"
    },
    {
      "id": "Ch19_121",
      "name": "121",
      "nation": "china",
      "level": 10,
      "class": "mediumTank",
      "images": [
        "Ch19_121.png"
      ],
      "role": "role_MT_universal",
      "rating": "1"
    },
    {
      "id": "Ch25_121_mod_1971B",
      "name": "121B",
      "nation": "china",
      "level": 10,
      "class": "mediumTank",
      "images": [
        "Ch25_121_mod_1971B.png"
      ],
      "role": "role_MT_universal",
      "rating": "1"
    },
    {
      "id": "Ch61_DZT_159",
      "name": "DZT-159",
      "nation": "china",
      "level": 10,
      "class": "mediumTank",
      "images": [
        "Ch61_DZT_159.png"
      ],
      "role": "role_MT_assault",
      "rating": "1"
    },
    {
      "id": "Ch29_Type_62C_prot",
      "name": "WZ-132-1",
      "nation": "china",
      "level": 10,
      "class": "lightTank",
      "images": [
        "Ch29_Type_62C_prot.png"
      ],
      "role": "role_LT_universal",
      "rating": "1"
    },
    {
      "id": "Ch44_114_SP2",
      "name": "114 SP2",
      "nation": "china",
      "level": 10,
      "class": "AT-SPG",
      "images": [
        "Ch44_114_SP2.png"
      ],
      "role": "role_ATSPG_sniper",
      "rating": "1"
    },
    {
      "id": "Ch38_WZ113G_FT",
      "name": "WZ-113G FT",
      "nation": "china",
      "level": 10,
      "class": "AT-SPG",
      "images": [
        "Ch38_WZ113G_FT.png"
      ],
      "role": "role_ATSPG_assault",
      "rating": "1"
    },
    {
      "id": "F10_AMX_50B",
      "name": "AMX 50 B",
      "nation": "france",
      "level": 10,
      "class": "heavyTank",
      "images": [
        "F10_AMX_50B.png"
      ],
      "role": "role_HT_support",
      "rating": "4"
    },
    {
      "id": "F82_AMX_M4_Mle1949_Ter",
      "name": "AMX M4 mle. 54",
      "nation": "france",
      "level": 10,
      "class": "heavyTank",
      "images": [
        "F82_AMX_M4_Mle1949_Ter.png"
      ],
      "role": "role_HT_universal",
      "rating": "2"
    },
    {
      "id": "F133_Projet_57",
      "name": "Projet 57",
      "nation": "france",
      "level": 10,
      "class": "heavyTank",
      "images": [
        "F133_Projet_57.png"
      ],
      "role": "role_HT_support",
      "rating": "1"
    },
    {
      "id": "F72_AMX_30",
      "name": "AMX 30 B",
      "nation": "france",
      "level": 10,
      "class": "mediumTank",
      "images": [
        "F72_AMX_30.png"
      ],
      "role": "role_MT_sniper",
      "rating": "1"
    },
    {
      "id": "F18_Bat_Chatillon25t",
      "name": "Bat.-Châtillon 25 t",
      "nation": "france",
      "level": 10,
      "class": "mediumTank",
      "images": [
        "F18_Bat_Chatillon25t.png"
      ],
      "role": "role_MT_support",
      "rating": "2"
    },
    {
      "id": "F119_Projet_Murat",
      "name": "Projet Murat",
      "nation": "france",
      "level": 10,
      "class": "mediumTank",
      "images": [
        "F119_Projet_Murat.png"
      ],
      "role": "role_MT_support",
      "rating": "1"
    },
    {
      "id": "F88_AMX_13_105",
      "name": "AMX 13 105",
      "nation": "france",
      "level": 10,
      "class": "lightTank",
      "images": [
        "F88_AMX_13_105.png"
      ],
      "role": "role_LT_universal",
      "rating": "1"
    },
    {
      "id": "F108_Panhard_EBR_105",
      "name": "Panhard EBR 105",
      "nation": "france",
      "level": 10,
      "class": "lightTank",
      "images": [
        "F108_Panhard_EBR_105.png"
      ],
      "role": "role_LT_wheeled",
      "rating": "5"
    },
    {
      "id": "F129_Schneider_120_AC_Gendarme",
      "name": "120 AC Gendarme",
      "nation": "france",
      "level": 10,
      "class": "AT-SPG",
      "images": [
        "F129_Schneider_120_AC_Gendarme.png"
      ],
      "role": "role_ATSPG_support",
      "rating": "3"
    },
    {
      "id": "F64_AMX_50Fosh_155",
      "name": "AMX 50 Foch (155)",
      "nation": "france",
      "level": 10,
      "class": "AT-SPG",
      "images": [
        "F64_AMX_50Fosh_155.png"
      ],
      "role": "role_ATSPG_support",
      "rating": "1"
    },
    {
      "id": "F64_AMX_50Fosh_B",
      "name": "AMX 50 Foch B",
      "nation": "france",
      "level": 10,
      "class": "AT-SPG",
      "images": [
        "F64_AMX_50Fosh_B.png"
      ],
      "role": "role_ATSPG_support",
      "rating": "1"
    },
    {
      "id": "F137_Tornade",
      "name": "Tornade",
      "nation": "france",
      "level": 10,
      "class": "AT-SPG",
      "images": [
        "F137_Tornade.png"
      ],
      "role": "role_ATSPG_support",
      "rating": "1"
    },
    {
      "id": "GB13_FV215b",
      "name": "FV215b",
      "nation": "uk",
      "level": 10,
      "class": "heavyTank",
      "images": [
        "GB13_FV215b.png"
      ],
      "role": "role_HT_universal",
      "rating": "5"
    },
    {
      "id": "GB134_FV242B_Condor",
      "name": "FV242B Condor",
      "nation": "uk",
      "level": 10,
      "class": "heavyTank",
      "images": [
        "GB134_FV242B_Condor.png"
      ],
      "role": "role_HT_universal",
      "rating": "2"
    },
    {
      "id": "GB91_Super_Conqueror",
      "name": "Super Conqueror",
      "nation": "uk",
      "level": 10,
      "class": "heavyTank",
      "images": [
        "GB91_Super_Conqueror.png"
      ],
      "role": "role_HT_universal",
      "rating": "2"
    },
    {
      "id": "GB98_T95_FV4201_Chieftain",
      "name": "T95/FV4201 Chieftain",
      "nation": "uk",
      "level": 10,
      "class": "heavyTank",
      "images": [
        "GB98_T95_FV4201_Chieftain.png"
      ],
      "role": "role_HT_universal",
      "rating": "3"
    },
    {
      "id": "GB88_T95_Chieftain_turret",
      "name": "Vandal",
      "nation": "uk",
      "level": 10,
      "class": "heavyTank",
      "images": [
        "GB88_T95_Chieftain_turret.png"
      ],
      "role": "role_HT_universal",
      "rating": "5"
    },
    {
      "id": "GB86_Centurion_Action_X",
      "name": "Centurion Action X",
      "nation": "uk",
      "level": 10,
      "class": "mediumTank",
      "images": [
        "GB86_Centurion_Action_X.png"
      ],
      "role": "role_MT_universal",
      "rating": "1"
    },
    {
      "id": "GB120_Concept_No_5",
      "name": "Concept No. 5",
      "nation": "uk",
      "level": 10,
      "class": "mediumTank",
      "images": [
        "GB120_Concept_No_5.png"
      ],
      "role": "role_MT_sniper",
      "rating": "5"
    },
    {
      "id": "GB128_Nemesis",
      "name": "Nemesis",
      "nation": "uk",
      "level": 10,
      "class": "mediumTank",
      "images": [
        "GB128_Nemesis.png"
      ],
      "role": "role_MT_assault",
      "rating": "1"
    },
    {
      "id": "GB139_Vulcan",
      "name": "Vulcan",
      "nation": "uk",
      "level": 10,
      "class": "mediumTank",
      "images": [
        "GB139_Vulcan.png"
      ],
      "role": "role_MT_support",
      "rating": "2"
    },
    {
      "id": "GB100_Manticore",
      "name": "Manticore",
      "nation": "uk",
      "level": 10,
      "class": "lightTank",
      "images": [
        "GB100_Manticore.png"
      ],
      "role": "role_LT_universal",
      "rating": "4"
    },
    {
      "id": "GB48_FV215b_183",
      "name": "FV215b (183)",
      "nation": "uk",
      "level": 10,
      "class": "AT-SPG",
      "images": [
        "GB48_FV215b_183.png"
      ],
      "role": "role_ATSPG_support",
      "rating": "1"
    },
    {
      "id": "GB92_FV217",
      "name": "FV217 Badger",
      "nation": "uk",
      "level": 10,
      "class": "AT-SPG",
      "images": [
        "GB92_FV217.png"
      ],
      "role": "role_ATSPG_assault",
      "rating": "2"
    },
    {
      "id": "GB83_FV4005",
      "name": "FV4005 Stage II",
      "nation": "uk",
      "level": 10,
      "class": "AT-SPG",
      "images": [
        "GB83_FV4005.png"
      ],
      "role": "role_ATSPG_support",
      "rating": "1"
    },
    {
      "id": "J20_Type_2605",
      "name": "Type 5 Heavy",
      "nation": "japan",
      "level": 10,
      "class": "heavyTank",
      "images": [
        "J20_Type_2605.png"
      ],
      "role": "role_HT_assault",
      "rating": "2"
    },
    {
      "id": "J40_Type_71",
      "name": "Type 71",
      "nation": "japan",
      "level": 10,
      "class": "heavyTank",
      "images": [
        "J40_Type_71.png"
      ],
      "role": "role_HT_universal",
      "rating": "4"
    },
    {
      "id": "J16_ST_B1",
      "name": "STB-1",
      "nation": "japan",
      "level": 10,
      "class": "mediumTank",
      "images": [
        "J16_ST_B1.png"
      ],
      "role": "role_MT_universal",
      "rating": "1"
    },
    {
      "id": "J35_Ho_Ri_3",
      "name": "Ho-Ri 3",
      "nation": "japan",
      "level": 10,
      "class": "AT-SPG",
      "images": [
        "J35_Ho_Ri_3.png"
      ],
      "role": "role_ATSPG_sniper",
      "rating": "2"
    },
    {
      "id": "Cz17_Vz_55_CN",
      "name": "Gothic Warrior",
      "nation": "czech",
      "level": 10,
      "class": "heavyTank",
      "images": [
        "Cz17_Vz_55_CN.png"
      ],
      "role": "role_HT_break",
      "rating": "1"
    },
    {
      "id": "Cz17_Vz_55",
      "name": "Vz. 55",
      "nation": "czech",
      "level": 10,
      "class": "heavyTank",
      "images": [
        "Cz17_Vz_55.png"
      ],
      "role": "role_HT_break",
      "rating": "1"
    },
    {
      "id": "Cz04_T50_51",
      "name": "TVP T 50/51",
      "nation": "czech",
      "level": 10,
      "class": "mediumTank",
      "images": [
        "Cz04_T50_51.png"
      ],
      "role": "role_MT_support",
      "rating": "1"
    },
    {
      "id": "S16_Kranvagn",
      "name": "Kranvagn",
      "nation": "sweden",
      "level": 10,
      "class": "heavyTank",
      "images": [
        "S16_Kranvagn.png"
      ],
      "role": "role_HT_support",
      "rating": "2"
    },
    {
      "id": "S28_UDES_15_16",
      "name": "UDES 15/16",
      "nation": "sweden",
      "level": 10,
      "class": "mediumTank",
      "images": [
        "S28_UDES_15_16.png"
      ],
      "role": "role_MT_universal",
      "rating": "1"
    },
    {
      "id": "S11_Strv_103B",
      "name": "Strv 103B",
      "nation": "sweden",
      "level": 10,
      "class": "AT-SPG",
      "images": [
        "S11_Strv_103B.png"
      ],
      "role": "role_ATSPG_sniper",
      "rating": "3"
    },
    {
      "id": "Pl15_60TP_Lewandowskiego",
      "name": "60TP Lewandowskiego",
      "nation": "poland",
      "level": 10,
      "class": "heavyTank",
      "images": [
        "Pl15_60TP_Lewandowskiego.png"
      ],
      "role": "role_HT_break",
      "rating": "3"
    },
    {
      "id": "Pl26_Czolg_P_Wz_46",
      "name": "Czołg",
      "nation": "poland",
      "level": 10,
      "class": "heavyTank",
      "images": [
        "Pl26_Czolg_P_Wz_46.png"
      ],
      "role": "role_HT_assault",
      "rating": "3"
    },
    {
      "id": "Pl21_CS_63",
      "name": "CS-63",
      "nation": "poland",
      "level": 10,
      "class": "mediumTank",
      "images": [
        "Pl21_CS_63.png"
      ],
      "role": "role_MT_sniper",
      "rating": "4"
    },
    {
      "id": "Pl34_CS_63_02",
      "name": "CS-63 Wilk",
      "nation": "poland",
      "level": 10,
      "class": "mediumTank",
      "images": [
        "Pl34_CS_63_02.png"
      ],
      "role": "role_MT_support",
      "rating": "5"
    },
    {
      "id": "Pl29_NC_Wz_70T",
      "name": "Wz.70 Żubr",
      "nation": "poland",
      "level": 10,
      "class": "AT-SPG",
      "images": [
        "Pl29_NC_Wz_70T.png"
      ],
      "role": "role_ATSPG_assault",
      "rating": "1"
    },
    {
      "id": "It33_Orso",
      "name": "Orso",
      "nation": "italy",
      "level": 10,
      "class": "heavyTank",
      "images": [
        "It33_Orso.png"
      ],
      "role": "role_HT_universal",
      "rating": "5"
    },
    {
      "id": "It15_Rinoceronte",
      "name": "Rinoceronte",
      "nation": "italy",
      "level": 10,
      "class": "heavyTank",
      "images": [
        "It15_Rinoceronte.png"
      ],
      "role": "role_HT_support",
      "rating": "1"
    },
    {
      "id": "It20_Carro_Combattimento_45t",
      "name": "Carro da Combattimento 45 t",
      "nation": "italy",
      "level": 10,
      "class": "mediumTank",
      "images": [
        "It20_Carro_Combattimento_45t.png"
      ],
      "role": "role_MT_support",
      "rating": "2"
    },
    {
      "id": "It21_Lion",
      "name": "Lion",
      "nation": "italy",
      "level": 10,
      "class": "mediumTank",
      "images": [
        "It21_Lion.png"
      ],
      "role": "role_MT_sniper",
      "rating": "1"
    },
    {
      "id": "It08_Progetto_M40_mod_65",
      "name": "Progetto M40 mod. 65",
      "nation": "italy",
      "level": 10,
      "class": "mediumTank",
      "images": [
        "It08_Progetto_M40_mod_65.png"
      ],
      "role": "role_MT_support",
      "rating": "1"
    },
    {
      "id": "It23_CC_3",
      "name": "Controcarro 3 Minotauro",
      "nation": "italy",
      "level": 10,
      "class": "AT-SPG",
      "images": [
        "It23_CC_3.png"
      ],
      "role": "role_ATSPG_assault",
      "rating": "1"
    },
    {
      "id": "Un02_Merkava_LP",
      "name": "Merkava LP",
      "nation": "intunion",
      "level": 10,
      "class": "mediumTank",
      "images": [
        "Un02_Merkava_LP.png"
      ],
      "role": "role_MT_universal",
      "rating": "1"
    },
    {
      "id": "Un14_T54D",
      "name": "T-54D",
      "nation": "intunion",
      "level": 10,
      "class": "mediumTank",
      "images": [
        "Un14_T54D.png"
      ],
      "role": "role_MT_assault",
      "rating": "1"
    }
  ],
  "ratingValues": [
    "1",
    "2",
    "3",
    "4",
    "5",
    "5+"
  ],
  "equipmentItems": [
    "BonDosil",
    "BonKomponovka",
    "BonOptica",
    "BonPricel",
    "BonPrivodi",
    "BonStab",
    "BonTurbina",
    "BonVentil",
    "BonZakalka",
    "Copi",
    "ExpKaretka",
    "ExpRastochka",
    "ExpStab",
    "ExpTurbina",
    "ExpZakalka",
    "Grunti",
    "Kubiki",
    "TrophyComponovka",
    "TrophyDosil",
    "TrophyMaloshymka",
    "TrophyOptica",
    "TrophyPricel",
    "TrophyPrivodi",
    "TrophyStabilizer",
    "TrophyTurbina",
    "TrophyUMP",
    "TrophyVentil",
    "TrophyZakalka"
  ],
  "modPerks": [
    "additionalGrousers",
    "betterFriction",
    "improvedAimingHandling",
    "improvedCamouflage",
    "improvedChassisBalance",
    "improvedChassisDurability",
    "improvedChassisStability",
    "improvedEnginePower",
    "improvedGunBreech",
    "improvedLightFilters",
    "improvedMuzzleBreak",
    "improvedObservationDevice",
    "improvedReflexScopes",
    "improvedScope",
    "improvedSelfRepairingTracks",
    "improvedSelfRepairingWheels",
    "improvedSharpnessVisor",
    "improvedSpallingResistance",
    "improvedSpeedIndicator",
    "improvedSpeedIndicatorBackwards",
    "improvedTurretRingStability",
    "improvedTurretTurningWheels",
    "increasedSensitivityOptics",
    "increasedThickness",
    "reinforcedInteriorModules",
    "reinforcedStructure"
  ],
  "roleBuilds": {
    "abs": {
      "role_ATSPG_assault": {
        "equipmentBuilds": [],
        "mods": [
          {
            "left": "improvedChassisDurability.png",
            "right": "betterFriction.png",
            "level": "2.png",
            "activeSide": "left"
          },
          {
            "left": "improvedAimingHandling.png",
            "right": "improvedScope.png",
            "level": "4.png",
            "activeSide": "none"
          },
          {
            "left": "improvedMuzzleBreak.png",
            "right": "improvedObservationDevice.png",
            "level": "5.png",
            "activeSide": "right"
          },
          {
            "left": "increasedThickness.png",
            "right": "improvedGunBreech.png",
            "level": "7.png",
            "activeSide": "left"
          },
          {
            "left": "improvedSelfRepairingTracks.png",
            "right": "improvedSpeedIndicatorBackwards.png",
            "level": "8.png",
            "activeSide": "left"
          }
        ]
      },
      "role_ATSPG_sniper": {
        "equipmentBuilds": [],
        "mods": [
          {
            "left": "improvedChassisDurability.png",
            "right": "betterFriction.png",
            "level": "2.png",
            "activeSide": "left"
          },
          {
            "left": "improvedAimingHandling.png",
            "right": "improvedScope.png",
            "level": "4.png",
            "activeSide": "right"
          },
          {
            "left": "improvedMuzzleBreak.png",
            "right": "improvedObservationDevice.png",
            "level": "5.png",
            "activeSide": "right"
          },
          {
            "left": "improvedGunBreech.png",
            "right": "improvedScope.png",
            "level": "7.png",
            "activeSide": "left"
          },
          {
            "left": "improvedEnginePower.png",
            "right": "improvedAimingHandling.png",
            "level": "8.png",
            "activeSide": "left"
          }
        ]
      },
      "role_ATSPG_support": {
        "equipmentBuilds": [],
        "mods": [
          {
            "left": "improvedChassisDurability.png",
            "right": "betterFriction.png",
            "level": "2.png",
            "activeSide": "left"
          },
          {
            "left": "improvedAimingHandling.png",
            "right": "improvedScope.png",
            "level": "4.png",
            "activeSide": "none"
          },
          {
            "left": "improvedMuzzleBreak.png",
            "right": "improvedObservationDevice.png",
            "level": "5.png",
            "activeSide": "right"
          },
          {
            "left": "improvedAimingHandling.png",
            "right": "improvedGunBreech.png",
            "level": "7.png",
            "activeSide": "left"
          },
          {
            "left": "improvedSpeedIndicatorBackwards.png",
            "right": "increasedThickness.png",
            "level": "8.png",
            "activeSide": "right"
          }
        ]
      },
      "role_ATSPG_universal": {
        "equipmentBuilds": [],
        "mods": [
          {
            "left": "improvedChassisDurability.png",
            "right": "betterFriction.png",
            "level": "2.png",
            "activeSide": "left"
          },
          {
            "left": "improvedAimingHandling.png",
            "right": "improvedScope.png",
            "level": "4.png",
            "activeSide": "none"
          },
          {
            "left": "improvedMuzzleBreak.png",
            "right": "improvedObservationDevice.png",
            "level": "5.png",
            "activeSide": "right"
          },
          {
            "left": "improvedCamouflage.png",
            "right": "improvedSpeedIndicatorBackwards.png",
            "level": "7.png",
            "activeSide": "right"
          },
          {
            "left": "improvedSpeedIndicator.png",
            "right": "improvedGunBreech.png",
            "level": "8.png",
            "activeSide": "left"
          }
        ]
      },
      "role_HT_assault": {
        "equipmentBuilds": [],
        "mods": [
          {
            "left": "additionalGrousers.png",
            "right": "betterFriction.png",
            "level": "2.png",
            "activeSide": "left"
          },
          {
            "left": "improvedScope.png",
            "right": "improvedAimingHandling.png",
            "level": "4.png",
            "activeSide": "none"
          },
          {
            "left": "improvedSpallingResistance.png",
            "right": "improvedObservationDevice.png",
            "level": "5.png",
            "activeSide": "left"
          },
          {
            "left": "improvedSpallingResistance.png",
            "right": "improvedSpeedIndicator.png",
            "level": "7.png",
            "activeSide": "right"
          },
          {
            "left": "reinforcedInteriorModules.png",
            "right": "improvedTurretTurningWheels.png",
            "level": "8.png",
            "activeSide": "left"
          }
        ]
      },
      "role_HT_break": {
        "equipmentBuilds": [],
        "mods": [
          {
            "left": "additionalGrousers.png",
            "right": "betterFriction.png",
            "level": "2.png",
            "activeSide": "left"
          },
          {
            "left": "improvedScope.png",
            "right": "improvedAimingHandling.png",
            "level": "4.png",
            "activeSide": "none"
          },
          {
            "left": "improvedSpallingResistance.png",
            "right": "improvedObservationDevice.png",
            "level": "5.png",
            "activeSide": "left"
          },
          {
            "left": "improvedSpeedIndicator.png",
            "right": "improvedTurretTurningWheels.png",
            "level": "7.png",
            "activeSide": "left"
          },
          {
            "left": "increasedThickness.png",
            "right": "improvedChassisStability.png",
            "level": "8.png",
            "activeSide": "left"
          }
        ]
      },
      "role_HT_support": {
        "equipmentBuilds": [],
        "mods": [
          {
            "left": "additionalGrousers.png",
            "right": "betterFriction.png",
            "level": "2.png",
            "activeSide": "left"
          },
          {
            "left": "improvedScope.png",
            "right": "improvedAimingHandling.png",
            "level": "4.png",
            "activeSide": "left"
          },
          {
            "left": "improvedSpallingResistance.png",
            "right": "improvedObservationDevice.png",
            "level": "5.png",
            "activeSide": "left"
          },
          {
            "left": "improvedSpeedIndicatorBackwards.png",
            "right": "improvedGunBreech.png",
            "level": "7.png",
            "activeSide": "left"
          },
          {
            "left": "increasedThickness.png",
            "right": "improvedAimingHandling.png",
            "level": "8.png",
            "activeSide": "left"
          }
        ]
      },
      "role_HT_universal": {
        "equipmentBuilds": [],
        "mods": [
          {
            "left": "additionalGrousers.png",
            "right": "betterFriction.png",
            "level": "2.png",
            "activeSide": "left"
          },
          {
            "left": "improvedScope.png",
            "right": "improvedAimingHandling.png",
            "level": "4.png",
            "activeSide": "none"
          },
          {
            "left": "improvedSpallingResistance.png",
            "right": "improvedObservationDevice.png",
            "level": "5.png",
            "activeSide": "left"
          },
          {
            "left": "improvedSpeedIndicatorBackwards.png",
            "right": "improvedTurretTurningWheels.png",
            "level": "7.png",
            "activeSide": "left"
          },
          {
            "left": "improvedSpallingResistance.png",
            "right": "improvedChassisStability.png",
            "level": "8.png",
            "activeSide": "left"
          }
        ]
      },
      "role_LT_universal": {
        "equipmentBuilds": [],
        "mods": [
          {
            "left": "improvedEnginePower.png",
            "right": "improvedSpeedIndicator.png",
            "level": "2.png",
            "activeSide": "none"
          },
          {
            "left": "improvedGunBreech.png",
            "right": "improvedScope.png",
            "level": "4.png",
            "activeSide": "right"
          },
          {
            "left": "improvedSpallingResistance.png",
            "right": "improvedSpeedIndicatorBackwards.png",
            "level": "5.png",
            "activeSide": "none"
          },
          {
            "left": "improvedLightFilters.png",
            "right": "improvedObservationDevice.png",
            "level": "7.png",
            "activeSide": "none"
          },
          {
            "left": "improvedReflexScopes.png",
            "right": "improvedSharpnessVisor.png",
            "level": "8.png",
            "activeSide": "right"
          }
        ]
      },
      "role_LT_wheeled": {
        "equipmentBuilds": [],
        "mods": [
          {
            "left": "improvedEnginePower.png",
            "right": "improvedSpeedIndicator.png",
            "level": "2.png",
            "activeSide": "none"
          },
          {
            "left": "improvedGunBreech.png",
            "right": "improvedScope.png",
            "level": "4.png",
            "activeSide": "right"
          },
          {
            "left": "improvedSpallingResistance.png",
            "right": "improvedSpeedIndicatorBackwards.png",
            "level": "5.png",
            "activeSide": "none"
          },
          {
            "left": "reinforcedStructure.png",
            "right": "improvedGunBreech.png",
            "level": "7.png",
            "activeSide": "left"
          },
          {
            "left": "increasedSensitivityOptics.png",
            "right": "improvedSelfRepairingWheels.png",
            "level": "8.png",
            "activeSide": "left"
          }
        ]
      },
      "role_MT_assault": {
        "equipmentBuilds": [],
        "mods": [
          {
            "left": "reinforcedInteriorModules.png",
            "right": "betterFriction.png",
            "level": "2.png",
            "activeSide": "none"
          },
          {
            "left": "improvedChassisStability.png",
            "right": "improvedScope.png",
            "level": "4.png",
            "activeSide": "left"
          },
          {
            "left": "improvedSpeedIndicatorBackwards.png",
            "right": "improvedLightFilters.png",
            "level": "5.png",
            "activeSide": "left"
          },
          {
            "left": "increasedThickness.png",
            "right": "improvedAimingHandling.png",
            "level": "7.png",
            "activeSide": "left"
          },
          {
            "left": "improvedObservationDevice.png",
            "right": "improvedEnginePower.png",
            "level": "8.png",
            "activeSide": "right"
          }
        ]
      },
      "role_MT_sniper": {
        "equipmentBuilds": [],
        "mods": [
          {
            "left": "reinforcedInteriorModules.png",
            "right": "betterFriction.png",
            "level": "2.png",
            "activeSide": "none"
          },
          {
            "left": "improvedChassisStability.png",
            "right": "improvedScope.png",
            "level": "4.png",
            "activeSide": "right"
          },
          {
            "left": "improvedSpeedIndicatorBackwards.png",
            "right": "improvedLightFilters.png",
            "level": "5.png",
            "activeSide": "right"
          },
          {
            "left": "improvedGunBreech.png",
            "right": "improvedScope.png",
            "level": "7.png",
            "activeSide": "right"
          },
          {
            "left": "improvedEnginePower.png",
            "right": "improvedAimingHandling.png",
            "level": "8.png",
            "activeSide": "none"
          }
        ]
      },
      "role_MT_support": {
        "equipmentBuilds": [],
        "mods": [
          {
            "left": "reinforcedInteriorModules.png",
            "right": "betterFriction.png",
            "level": "2.png",
            "activeSide": "right"
          },
          {
            "left": "improvedChassisStability.png",
            "right": "improvedScope.png",
            "level": "4.png",
            "activeSide": "none"
          },
          {
            "left": "improvedSpeedIndicatorBackwards.png",
            "right": "improvedAimingHandling.png",
            "level": "5.png",
            "activeSide": "right"
          },
          {
            "left": "improvedGunBreech.png",
            "right": "improvedAimingHandling.png",
            "level": "7.png",
            "activeSide": "right"
          },
          {
            "left": "improvedSpeedIndicator.png",
            "right": "improvedObservationDevice.png",
            "level": "8.png",
            "activeSide": "none"
          }
        ]
      },
      "role_MT_universal": {
        "equipmentBuilds": [],
        "mods": [
          {
            "left": "reinforcedInteriorModules.png",
            "right": "betterFriction.png",
            "level": "2.png",
            "activeSide": "none"
          },
          {
            "left": "improvedChassisStability.png",
            "right": "improvedScope.png",
            "level": "4.png",
            "activeSide": "left"
          },
          {
            "left": "improvedSpeedIndicatorBackwards.png",
            "right": "improvedLightFilters.png",
            "level": "5.png",
            "activeSide": "left"
          },
          {
            "left": "improvedSpeedIndicator.png",
            "right": "improvedObservationDevice.png",
            "level": "7.png",
            "activeSide": "left"
          },
          {
            "left": "improvedChassisDurability.png",
            "right": "improvedSelfRepairingTracks.png",
            "level": "8.png",
            "activeSide": "left"
          }
        ]
      }
    },
    "random": {}
  }
};
