"use strict";

const TANK_BUILD_OVERRIDES = {
  "A116_XM551": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "Kubiki.png",
            "TrophyMaloshymka.png",
            "BonOptica.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "A120_M48A5": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyZakalka.png",
            "TrophyTurbina.png",
            "BonDosil.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "A143_M_V_Y": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpZakalka.png",
            "BonTurbina.png",
            "TrophyDosil.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "A163_H_3": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyZakalka.png",
            "TrophyTurbina.png",
            "TrophyStabilizer.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "A165_XM57": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyUMP.png",
            "TrophyDosil.png",
            "ExpTurbina.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "A172_ASTRON_FL": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyZakalka.png",
            "TrophyTurbina.png",
            "TrophyVentil.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "A175_OTAC_MT_58": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpRastochka.png",
            "BonVentil.png",
            "TrophyTurbina.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "A179_MBT_59": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "BonDosil.png",
            "BonStab.png",
            "BonVentil.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "A67_T57_58": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpZakalka.png",
            "ExpTurbina.png",
            "BonStab.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "BonTurbina.png",
            "ExpStab.png",
            "BonStab.png"
          ],
          "type": "alternative"
        }
      ]
    }
  },
  "A69_T110E5": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyZakalka.png",
            "TrophyTurbina.png",
            "TrophyDosil.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "A83_T110E4": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyUMP.png",
            "TrophyDosil.png",
            "TrophyTurbina.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "A85_T110E3": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyUMP.png",
            "TrophyDosil.png",
            "TrophyTurbina.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "A92_M60": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyZakalka.png",
            "TrophyTurbina.png",
            "BonDosil.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "A95_T95_E6": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyZakalka.png",
            "TrophyTurbina.png",
            "BonDosil.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "Ch19_121": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyZakalka.png",
            "TrophyTurbina.png",
            "BonDosil.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "Ch22_113": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyZakalka.png",
            "ExpTurbina.png",
            "TrophyDosil.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "Ch25_121_mod_1971B": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyZakalka.png",
            "TrophyTurbina.png",
            "BonDosil.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "Ch29_Type_62C_prot": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "Kubiki.png",
            "TrophyMaloshymka.png",
            "BonOptica.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "Ch38_WZ113G_FT": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyUMP.png",
            "TrophyDosil.png",
            "TrophyTurbina.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "Ch41_WZ_111_5A": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpZakalka.png",
            "BonTurbina.png",
            "BonDosil.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "Ch44_114_SP2": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyPricel.png",
            "BonDosil.png",
            "TrophyVentil.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "Ch48_BZ_75": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyZakalka.png",
            "TrophyTurbina.png",
            "TrophyVentil.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "TrophyZakalka.png",
            "TrophyTurbina.png",
            "TrophyStabilizer.png"
          ],
          "type": "alternative"
        }
      ]
    }
  },
  "Ch52_WZ_122_6_F3": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpKaretka.png",
            "ExpTurbina.png",
            "ExpZakalka.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "BonDosil.png",
            "BonTurbina.png",
            "BonZakalka.png"
          ],
          "type": "alternative"
        }
      ]
    }
  },
  "Ch56_BZ_74_1": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpZakalka.png",
            "BonTurbina.png",
            "TrophyDosil.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "Ch61_DZT_159": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyZakalka.png",
            "TrophyTurbina.png",
            "BonDosil.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "Ch73_GPT_75": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyZakalka.png",
            "TrophyTurbina.png",
            "TrophyStabilizer.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "Cz04_T50_51": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "BonStab.png",
            "TrophyVentil.png",
            "TrophyTurbina.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "Cz17_Vz_55": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpZakalka.png",
            "BonTurbina.png",
            "BonVentil.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "Cz17_Vz_55_CN": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyZakalka.png",
            "TrophyTurbina.png",
            "TrophyVentil.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "F108_Panhard_EBR_105": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "Kubiki.png",
            "TrophyMaloshymka.png",
            "BonOptica.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "Kubiki.png",
            "TrophyDosil.png",
            "BonOptica.png"
          ],
          "type": "alternative"
        }
      ]
    }
  },
  "F10_AMX_50B": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyPricel.png",
            "BonStab.png",
            "BonZakalka.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "BonZakalka.png",
            "BonTurbina.png",
            "BonStab.png"
          ],
          "type": "alternative"
        }
      ]
    }
  },
  "F119_Projet_Murat": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyZakalka.png",
            "TrophyVentil.png",
            "TrophyTurbina.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "F129_Schneider_120_AC_Gendarme": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyUMP.png",
            "BonPricel.png",
            "ExpTurbina.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "F133_Projet_57": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyStabilizer.png",
            "TrophyVentil.png",
            "TrophyTurbina.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "TrophyZakalka.png",
            "TrophyTurbina.png",
            "TrophyStabilizer.png"
          ],
          "type": "alternative"
        }
      ]
    }
  },
  "F137_Tornade": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyUMP.png",
            "TrophyPricel.png",
            "BonVentil.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "F18_Bat_Chatillon25t": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "Kubiki.png",
            "TrophyOptica.png",
            "TrophyMaloshymka.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "Kubiki.png",
            "TrophyOptica.png",
            "BonStab.png"
          ],
          "type": "alternative"
        }
      ]
    }
  },
  "F64_AMX_50Fosh_155": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyTurbina.png",
            "TrophyUMP.png",
            "TrophyZakalka.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "F64_AMX_50Fosh_B": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyTurbina.png",
            "TrophyUMP.png",
            "TrophyZakalka.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "F72_AMX_30": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "BonVentil.png",
            "BonStab.png",
            "BonDosil.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "F82_AMX_M4_Mle1949_Ter": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpZakalka.png",
            "BonTurbina.png",
            "BonDosil.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "F88_AMX_13_105": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "Kubiki.png",
            "TrophyMaloshymka.png",
            "BonOptica.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "G121_Grille_15_L63": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyPricel.png",
            "BonDosil.png",
            "TrophyMaloshymka.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "G125_Spz_57_Rh": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "Kubiki.png",
            "TrophyMaloshymka.png",
            "BonOptica.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "G134_PzKpfw_VII": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyZakalka.png",
            "TrophyTurbina.png",
            "TrophyDosil.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "G162_Project_Kpz_07P_E": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "BonZakalka.png",
            "BonTurbina.png",
            "BonDosil.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "ExpZakalka.png",
            "BonTurbina.png",
            "BonDosil.png"
          ],
          "type": "alternative"
        }
      ]
    }
  },
  "G165_Erich_Konzept_I": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "BonDosil.png",
            "ExpTurbina.png",
            "TrophyVentil.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "G178_Sturmtiger_V1": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyPricel.png",
            "TrophyUMP.png",
            "ExpKaretka.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "G181_StuG_Maus_17cm": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "BonZakalka.png",
            "TrophyTurbina.png",
            "BonDosil.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "TrophyUMP.png",
            "TrophyTurbina.png",
            "BonDosil.png"
          ],
          "type": "alternative"
        }
      ]
    }
  },
  "G189_E100_02": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "BonZakalka.png",
            "BonTurbina.png",
            "BonDosil.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "BonZakalka.png",
            "ExpTurbina.png",
            "BonDosil.png"
          ],
          "type": "alternative"
        }
      ]
    }
  },
  "G42_Maus": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "BonZakalka.png",
            "TrophyTurbina.png",
            "BonDosil.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "G56_E-100": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "BonZakalka.png",
            "TrophyTurbina.png",
            "BonDosil.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "G72_JagdPz_E100": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyUMP.png",
            "TrophyDosil.png",
            "TrophyTurbina.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "G73_E50_Ausf_M": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyZakalka.png",
            "TrophyTurbina.png",
            "TrophyDosil.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "G89_Leopard1": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "BonDosil.png",
            "BonVentil.png",
            "BonStab.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "G92_VK7201": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyZakalka.png",
            "TrophyTurbina.png",
            "TrophyDosil.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "G98_Waffentrager_E100": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyPricel.png",
            "TrophyPrivodi.png",
            "TrophyUMP.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "GB100_Manticore": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "Kubiki.png",
            "TrophyMaloshymka.png",
            "BonOptica.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "GB120_Concept_No_5": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "BonVentil.png",
            "BonStab.png",
            "BonDosil.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "Kubiki.png",
            "BonOptica.png",
            "TrophyMaloshymka.png"
          ],
          "type": "alternative"
        }
      ]
    }
  },
  "GB128_Nemesis": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyZakalka.png",
            "TrophyTurbina.png",
            "TrophyDosil.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "GB134_FV242B_Condor": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyZakalka.png",
            "TrophyTurbina.png",
            "TrophyStabilizer.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "GB139_Vulcan": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyZakalka.png",
            "TrophyStabilizer.png",
            "BonVentil.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "GB13_FV215b": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpZakalka.png",
            "BonTurbina.png",
            "BonDosil.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "ExpZakalka.png",
            "ExpTurbina.png",
            "BonDosil.png"
          ],
          "type": "alternative"
        }
      ]
    }
  },
  "GB48_FV215b_183": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyPricel.png",
            "BonDosil.png",
            "TrophyVentil.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "GB83_FV4005": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyPricel.png",
            "BonDosil.png",
            "TrophyVentil.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "GB86_Centurion_Action_X": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyZakalka.png",
            "TrophyTurbina.png",
            "BonDosil.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "GB88_T95_Chieftain_turret": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "BonZakalka.png",
            "BonTurbina.png",
            "BonDosil.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "ExpZakalka.png",
            "ExpTurbina.png",
            "BonDosil.png"
          ],
          "type": "alternative"
        }
      ]
    }
  },
  "GB91_Super_Conqueror": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyZakalka.png",
            "TrophyTurbina.png",
            "TrophyDosil.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "GB92_FV217": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "BonZakalka.png",
            "BonDosil.png",
            "TrophyUMP.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "GB98_T95_FV4201_Chieftain": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "BonZakalka.png",
            "BonTurbina.png",
            "BonDosil.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "ExpZakalka.png",
            "ExpTurbina.png",
            "BonDosil.png"
          ],
          "type": "alternative"
        }
      ]
    }
  },
  "It08_Progetto_M40_mod_65": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyVentil.png",
            "BonStab.png",
            "TrophyTurbina.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "It15_Rinoceronte": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyZakalka.png",
            "TrophyTurbina.png",
            "TrophyVentil.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "It20_Carro_Combattimento_45t": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyTurbina.png",
            "BonStab.png",
            "TrophyVentil.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "It21_Lion": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "BonVentil.png",
            "BonStab.png",
            "ExpTurbina.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "It23_CC_3": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyZakalka.png",
            "ExpTurbina.png",
            "TrophyUMP.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "It33_Orso": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpZakalka.png",
            "ExpTurbina.png",
            "ExpKaretka.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "ExpZakalka.png",
            "ExpTurbina.png",
            "BonDosil.png"
          ],
          "type": "alternative"
        }
      ]
    }
  },
  "J16_ST_B1": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyZakalka.png",
            "TrophyTurbina.png",
            "BonDosil.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "J20_Type_2605": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "BonZakalka.png",
            "TrophyTurbina.png",
            "BonDosil.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "J35_Ho_Ri_3": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyPricel.png",
            "BonDosil.png",
            "TrophyMaloshymka.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "J40_Type_71": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "BonZakalka.png",
            "BonTurbina.png",
            "BonDosil.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "BonZakalka.png",
            "BonTurbina.png",
            "ExpKaretka.png"
          ],
          "type": "alternative"
        }
      ]
    }
  },
  "Pl15_60TP_Lewandowskiego": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "BonZakalka.png",
            "BonTurbina.png",
            "BonDosil.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "ExpZakalka.png",
            "ExpTurbina.png",
            "BonDosil.png"
          ],
          "type": "alternative"
        }
      ]
    }
  },
  "Pl21_CS_63": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpZakalka.png",
            "BonTurbina.png",
            "TrophyDosil.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "TrophyOptica.png",
            "Copi.png",
            "TrophyMaloshymka.png"
          ],
          "type": "alternative"
        }
      ],
      "mods": [
        {
          "activeSide": "none",
          "left": "reinforcedInteriorModules.png",
          "level": "2.png",
          "right": "betterFriction.png"
        },
        {
          "activeSide": "right",
          "left": "improvedChassisStability.png",
          "level": "4.png",
          "right": "improvedScope.png"
        },
        {
          "activeSide": "right",
          "left": "improvedSpeedIndicatorBackwards.png",
          "level": "5.png",
          "right": "improvedLightFilters.png"
        },
        {
          "activeSide": "right",
          "left": "improvedGunBreech.png",
          "level": "7.png",
          "right": "improvedScope.png"
        },
        {
          "activeSide": "none",
          "left": "improvedEnginePower.png",
          "level": "8.png",
          "right": "improvedAimingHandling.png"
        }
      ]
    }
  },
  "Pl26_Czolg_P_Wz_46": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "BonZakalka.png",
            "TrophyTurbina.png",
            "TrophyDosil.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "Pl29_NC_Wz_70T": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyUMP.png",
            "TrophyDosil.png",
            "ExpTurbina.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "BonPricel.png",
            "ExpTurbina.png",
            "TrophyUMP.png"
          ],
          "type": "alternative"
        }
      ]
    }
  },
  "Pl34_CS_63_02": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpZakalka.png",
            "BonTurbina.png",
            "BonStab.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "TrophyOptica.png",
            "Copi.png",
            "TrophyMaloshymka.png"
          ],
          "type": "alternative"
        }
      ],
      "mods": [
        {
          "activeSide": "none",
          "left": "reinforcedInteriorModules.png",
          "level": "2.png",
          "right": "betterFriction.png"
        },
        {
          "activeSide": "right",
          "left": "improvedChassisStability.png",
          "level": "4.png",
          "right": "improvedScope.png"
        },
        {
          "activeSide": "right",
          "left": "improvedSpeedIndicatorBackwards.png",
          "level": "5.png",
          "right": "improvedLightFilters.png"
        },
        {
          "activeSide": "left",
          "left": "improvedGunBreech.png",
          "level": "7.png",
          "right": "improvedAimingHandling.png"
        },
        {
          "activeSide": "left",
          "left": "improvedSpeedIndicator.png",
          "level": "8.png",
          "right": "improvedObservationDevice.png"
        }
      ]
    }
  },
  "R110_Object_260": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpZakalka.png",
            "BonTurbina.png",
            "TrophyDosil.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "BonTurbina.png",
            "Grunti.png",
            "TrophyDosil.png"
          ],
          "type": "alternative"
        }
      ]
    }
  },
  "R120_T22SR_A22": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpZakalka.png",
            "TrophyTurbina.png",
            "BonDosil.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "R126_Object_730_5": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyPricel.png",
            "BonDosil.png",
            "TrophyVentil.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "R132_VNII_100LT": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "Kubiki.png",
            "TrophyMaloshymka.png",
            "BonOptica.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "R144_K_91": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "BonDosil.png",
            "BonZakalka.png",
            "BonTurbina.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "BonDosil.png",
            "ExpZakalka.png",
            "BonTurbina.png"
          ],
          "type": "alternative"
        }
      ]
    }
  },
  "R145_Object_705_A": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyZakalka.png",
            "TrophyTurbina.png",
            "TrophyDosil.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "R148_Object_430_U": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyZakalka.png",
            "TrophyTurbina.png",
            "BonDosil.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "R149_Object_268_4": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpZakalka.png",
            "ExpTurbina.png",
            "BonDosil.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "R155_Object_277": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpZakalka.png",
            "BonTurbina.png",
            "TrophyDosil.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "R157_Object_279R": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpZakalka.png",
            "BonTurbina.png",
            "BonDosil.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "R169_ST_II": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyZakalka.png",
            "TrophyTurbina.png",
            "TrophyVentil.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "TrophyZakalka.png",
            "TrophyTurbina.png",
            "TrophyStabilizer.png"
          ],
          "type": "alternative"
        }
      ]
    }
  },
  "R178_Object_780": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpZakalka.png",
            "BonTurbina.png",
            "TrophyDosil.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "R199_SU_122V": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyMaloshymka.png",
            "ExpTurbina.png",
            "TrophyUMP.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "R213_TET_100": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpZakalka.png",
            "BonTurbina.png",
            "BonVentil.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "BonZakalka.png",
            "BonTurbina.png",
            "BonVentil.png"
          ],
          "type": "alternative"
        }
      ]
    }
  },
  "R219_Waffentrager_E100_Gold": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyPricel.png",
            "TrophyPrivodi.png",
            "TrophyUMP.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "R222_Object_120_Taran": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyPricel.png",
            "BonDosil.png",
            "TrophyUMP.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "R225_Vasiliev_project": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "Kubiki.png",
            "TrophyMaloshymka.png",
            "BonOptica.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "R229_Object_718B": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyZakalka.png",
            "TrophyTurbina.png",
            "TrophyDosil.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "R231_Object_278": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "BonZakalka.png",
            "BonTurbina.png",
            "BonStab.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "ExpZakalka.png",
            "BonTurbina.png",
            "BonVentil.png"
          ],
          "type": "alternative"
        }
      ]
    }
  },
  "R246_Object_168_122": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "BonDosil.png",
            "BonStab.png",
            "BonVentil.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "R45_IS-7": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpZakalka.png",
            "BonTurbina.png",
            "TrophyDosil.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "BonTurbina.png",
            "Grunti.png",
            "TrophyDosil.png"
          ],
          "type": "alternative"
        }
      ],
      "mods": [
        {
          "activeSide": "left",
          "left": "additionalGrousers.png",
          "level": "2.png",
          "right": "betterFriction.png"
        },
        {
          "activeSide": "none",
          "left": "improvedScope.png",
          "level": "4.png",
          "right": "improvedAimingHandling.png"
        },
        {
          "activeSide": "left",
          "left": "improvedSpallingResistance.png",
          "level": "5.png",
          "right": "improvedObservationDevice.png"
        },
        {
          "activeSide": "left",
          "left": "improvedSpeedIndicator.png",
          "level": "7.png",
          "right": "improvedTurretTurningWheels.png"
        },
        {
          "activeSide": "left",
          "left": "increasedThickness.png",
          "level": "8.png",
          "right": "improvedChassisStability.png"
        }
      ]
    }
  },
  "R87_T62A": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyZakalka.png",
            "TrophyTurbina.png",
            "BonDosil.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "R88_Object268": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "BonDosil.png",
            "TrophyPricel.png",
            "TrophyUMP.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "R90_IS_4M": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "BonZakalka.png",
            "TrophyTurbina.png",
            "TrophyDosil.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "R95_Object_907": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpZakalka.png",
            "BonTurbina.png",
            "BonDosil.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "BonZakalka.png",
            "BonTurbina.png",
            "BonDosil.png"
          ],
          "type": "alternative"
        }
      ]
    }
  },
  "R97_Object_140": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyZakalka.png",
            "TrophyTurbina.png",
            "BonDosil.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "S11_Strv_103B": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyMaloshymka.png",
            "BonDosil.png",
            "BonVentil.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "S16_Kranvagn": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyZakalka.png",
            "TrophyTurbina.png",
            "TrophyStabilizer.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "S28_UDES_15_16": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyZakalka.png",
            "TrophyTurbina.png",
            "BonDosil.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "Un02_Merkava_LP": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "BonDosil.png",
            "BonTurbina.png",
            "BonVentil.png"
          ],
          "type": "main"
        }
      ]
    }
  },
  "Un14_T54D": {
    "abs": {
      "equipmentBuilds": [
        {
          "items": [
            "BonDosil.png",
            "BonTurbina.png",
            "BonStab.png"
          ],
          "type": "main"
        }
      ]
    }
  }
};
