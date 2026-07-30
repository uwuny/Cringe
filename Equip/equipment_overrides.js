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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "Copi.png",
            "BonOptica.png",
            "TrophyMaloshymka.png"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyZakalka.png",
            "TrophyVentil.png",
            "TrophyDosil.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "TrophyZakalka.png",
            "TrophyTurbina.png",
            "TrophyDosil.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "left",
        "none",
        "left",
        "none"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpZakalka.png",
            "TrophyStabilizer.png",
            "TrophyDosil.png"
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
      ],
      "modSides": [
        "left",
        "left",
        "left",
        "left",
        "left"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyZakalka.png",
            "TrophyStabilizer.png",
            "TrophyVentil.png"
          ],
          "type": "main"
        }
      ],
      "modSides": [
        "left",
        "right",
        "left",
        "left",
        "left"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyDosil.png",
            "TrophyUMP.png",
            "ExpTurbina.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "TrophyDosil.png",
            "TrophyVentil.png",
            "ExpTurbina.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "left",
        "right",
        "right",
        "none"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyOptica.png",
            "TrophyTurbina.png",
            "TrophyZakalka.png"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyTurbina.png",
            "BonVentil.png",
            "BonDosil.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "TrophyTurbina.png",
            "BonVentil.png",
            "ExpRastochka.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "left",
        "left",
        "right",
        "none"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpTurbina.png",
            "ExpKaretka.png",
            "BonStab.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "ExpRastochka.png",
            "BonVentil.png",
            "BonStab.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "right",
        "left",
        "left",
        "none"
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
    },
    "random": {
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
            "ExpStab.png",
            "ExpTurbina.png",
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyZakalka.png",
            "ExpTurbina.png",
            "TrophyDosil.png"
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
      ],
      "modSides": [
        "left",
        "left",
        "left",
        "left",
        "left"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpKaretka.png",
            "TrophyPricel.png",
            "ExpTurbina.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "ExpKaretka.png",
            "TrophyUMP.png",
            "ExpTurbina.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "right",
        "right",
        "left",
        "right"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyTurbina.png",
            "TrophyUMP.png",
            "TrophyDosil.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "TrophyZakalka.png",
            "ExpTurbina.png",
            "TrophyDosil.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "left",
        "right",
        "right",
        "right"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpZakalka.png",
            "BonVentil.png",
            "ExpKaretka.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "BonDosil.png",
            "BonStab.png",
            "BonVentil.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "right",
        "right",
        "none",
        "none"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "BonDosil.png",
            "BonStab.png",
            "BonVentil.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "BonDosil.png",
            "BonStab.png",
            "BonPricel.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "right",
        "left",
        "left",
        "left"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpRastochka.png",
            "BonStab.png",
            "BonVentil.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "ExpZakalka.png",
            "BonStab.png",
            "ExpKaretka.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "right",
        "left",
        "none",
        "none"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpZakalka.png",
            "TrophyStabilizer.png",
            "TrophyDosil.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "ExpZakalka.png",
            "TrophyVentil.png",
            "TrophyDosil.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "right",
        "left",
        "left",
        "left"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpZakalka.png",
            "TrophyDosil.png",
            "TrophyStabilizer.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "BonVentil.png",
            "TrophyDosil.png",
            "TrophyStabilizer.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "right",
        "left",
        "left",
        "none"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "Copi.png",
            "BonOptica.png",
            "TrophyMaloshymka.png"
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
    },
    "random": {
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
            "ExpKaretka.png",
            "ExpTurbina.png",
            "BonVentil.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "right",
        "right",
        "right",
        "none"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyZakalka.png",
            "TrophyStabilizer.png",
            "TrophyDosil.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "TrophyVentil.png",
            "TrophyStabilizer.png",
            "TrophyDosil.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "left",
        "left",
        "none",
        "left"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyTurbina.png",
            "TrophyDosil.png",
            "TrophyUMP.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "ExpTurbina.png",
            "TrophyDosil.png",
            "TrophyMaloshymka.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "right",
        "left",
        "left",
        "left"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpTurbina.png",
            "ExpKaretka.png",
            "BonStab.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "TrophyPricel.png",
            "TrophyTurbina.png",
            "TrophyVentil.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "left",
        "left",
        "none",
        "left"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpKaretka.png",
            "ExpTurbina.png",
            "BonStab.png"
          ],
          "type": "main"
        }
      ],
      "modSides": [
        "left",
        "left",
        "left",
        "none",
        "left"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpZakalka.png",
            "TrophyDosil.png",
            "TrophyVentil.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "ExpZakalka.png",
            "TrophyTurbina.png",
            "TrophyDosil.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "left",
        "left",
        "left",
        "left"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpKaretka.png",
            "ExpTurbina.png",
            "BonStab.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "ExpKaretka.png",
            "ExpZakalka.png",
            "BonStab.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "right",
        "left",
        "right",
        "right"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyStabilizer.png",
            "ExpTurbina.png",
            "ExpStab.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "TrophyStabilizer.png",
            "ExpTurbina.png",
            "TrophyPricel.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "right",
        "left",
        "left",
        "none"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyUMP.png",
            "BonStab.png",
            "BonPricel.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "ExpStab.png",
            "BonStab.png",
            "ExpZakalka.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "right",
        "right",
        "none",
        "left"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyZakalka.png",
            "BonStab.png",
            "BonVentil.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "ExpTurbina.png",
            "BonStab.png",
            "TrophyPricel.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "right",
        "left",
        "none",
        "left"
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
    },
    "random": {
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
            "ExpZakalka.png",
            "BonStab.png",
            "BonVentil.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "left",
        "left",
        "none",
        "left"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "Copi.png",
            "BonOptica.png",
            "TrophyMaloshymka.png"
          ],
          "type": "main"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpZakalka.png",
            "BonStab.png",
            "BonVentil.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "ExpZakalka.png",
            "BonStab.png",
            "ExpTurbina.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "left",
        "left",
        "none",
        "left"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpZakalka.png",
            "BonStab.png",
            "BonTurbina.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "BonVentil.png",
            "BonStab.png",
            "BonTurbina.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "right",
        "none",
        "right",
        "left"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyZakalka.png",
            "ExpTurbina.png",
            "TrophyUMP.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "ExpTurbina.png",
            "TrophyPricel.png",
            "TrophyMaloshymka.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "right",
        "left",
        "left",
        "right"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpZakalka.png",
            "BonStab.png",
            "ExpTurbina.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "BonVentil.png",
            "BonStab.png",
            "ExpTurbina.png"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyUMP.png",
            "TrophyPricel.png",
            "BonPrivodi.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "ExpTurbina.png",
            "TrophyPricel.png",
            "BonPrivodi.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "left",
        "right",
        "left",
        "left"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyUMP.png",
            "TrophyStabilizer.png",
            "ExpStab.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "TrophyUMP.png",
            "TrophyStabilizer.png",
            "BonVentil.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "right",
        "right",
        "right",
        "left"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyPricel.png",
            "TrophyPrivodi.png",
            "TrophyUMP.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "TrophyPricel.png",
            "TrophyVentil.png",
            "TrophyUMP.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "left",
        "right",
        "right",
        "none"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "BonZakalka.png",
            "ExpTurbina.png",
            "TrophyUMP.png"
          ],
          "type": "main"
        }
      ],
      "modSides": [
        "left",
        "left",
        "right",
        "left",
        "right"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpKaretka.png",
            "BonVentil.png",
            "BonStab.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "TrophyPricel.png",
            "BonVentil.png",
            "BonDosil.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "right",
        "right",
        "left",
        "none"
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
    },
    "random": {
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
            "BonStab.png",
            "ExpTurbina.png",
            "ExpKaretka.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "left",
        "left",
        "left",
        "left"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "Copi.png",
            "BonOptica.png",
            "TrophyMaloshymka.png"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyDosil.png",
            "TrophyPricel.png",
            "ExpTurbina.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "TrophyDosil.png",
            "TrophyUMP.png",
            "ExpTurbina.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "right",
        "left",
        "left",
        "none"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "Copi.png",
            "BonOptica.png",
            "TrophyMaloshymka.png"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpZakalka.png",
            "ExpTurbina.png",
            "TrophyDosil.png"
          ],
          "type": "main"
        }
      ],
      "modSides": [
        "left",
        "left",
        "left",
        "none",
        "left"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpZakalka.png",
            "ExpTurbina.png",
            "BonDosil.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "ExpZakalka.png",
            "BonVentil.png",
            "ExpRastochka.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "none",
        "right",
        "left",
        "left"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyStabilizer.png",
            "TrophyUMP.png",
            "TrophyDosil.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "TrophyStabilizer.png",
            "BonVentil.png",
            "TrophyDosil.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "right",
        "right",
        "right",
        "right"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpRastochka.png",
            "ExpTurbina.png",
            "TrophyPricel.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "ExpKaretka.png",
            "ExpTurbina.png",
            "BonVentil.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "right",
        "right",
        "left",
        "left"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyUMP.png",
            "ExpKaretka.png",
            "BonTurbina.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "TrophyUMP.png",
            "BonDosil.png",
            "BonTurbina.png"
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
    },
    "random": {
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
            "TrophyStabilizer.png",
            "ExpTurbina.png",
            "ExpKaretka.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "left",
        "left",
        "left",
        "left"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpZakalka.png",
            "BonTurbina.png",
            "ExpKaretka.png"
          ],
          "type": "main"
        }
      ],
      "modSides": [
        "left",
        "left",
        "left",
        "right",
        "left"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyZakalka.png",
            "ExpTurbina.png",
            "TrophyDosil.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "TrophyZakalka.png",
            "TrophyStabilizer.png",
            "TrophyDosil.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "none",
        "left",
        "none",
        "left"
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
    },
    "random": {
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
            "ExpKaretka.png",
            "ExpZakalka.png",
            "BonVentil.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "right",
        "right",
        "left",
        "none"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpZakalka.png",
            "BonVentil.png",
            "BonDosil.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "BonStab.png",
            "BonVentil.png",
            "BonDosil.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "right",
        "right",
        "left",
        "right"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "BonDosil.png",
            "BonStab.png",
            "BonVentil.png"
          ],
          "type": "main"
        }
      ],
      "modSides": [
        "left",
        "right",
        "right",
        "left",
        "none"
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
    },
    "random": {
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
            "BonStab.png",
            "ExpTurbina.png",
            "ExpKaretka.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "left",
        "left",
        "left",
        "left"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyUMP.png",
            "TrophyZakalka.png",
            "TrophyTurbina.png"
          ],
          "type": "main"
        }
      ],
      "modSides": [
        "left",
        "right",
        "right",
        "left",
        "none"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "Copi.png",
            "BonOptica.png",
            "TrophyMaloshymka.png"
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
    },
    "random": {
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
            "TrophyMaloshymka.png",
            "BonDosil.png",
            "BonVentil.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "right",
        "right",
        "left",
        "none"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpTurbina.png",
            "BonStab.png",
            "BonDosil.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "TrophyVentil.png",
            "BonStab.png",
            "BonDosil.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "left",
        "none",
        "left",
        "left"
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
    },
    "random": {
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
            "ExpZakalka.png",
            "Grunti.png",
            "ExpTurbina.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "left",
        "left",
        "none",
        "none"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyStabilizer.png",
            "ExpTurbina.png",
            "TrophyPricel.png"
          ],
          "type": "main"
        }
      ],
      "modSides": [
        "left",
        "right",
        "left",
        "right",
        "right"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpZakalka.png",
            "BonDosil.png",
            "ExpTurbina.png"
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
      ],
      "modSides": [
        "left",
        "left",
        "left",
        "none",
        "left"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpTurbina.png",
            "TrophyUMP.png",
            "TrophyDosil.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "ExpTurbina.png",
            "TrophyVentil.png",
            "TrophyPricel.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "left",
        "right",
        "left",
        "left"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpKaretka.png",
            "BonPricel.png",
            "ExpTurbina.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "TrophyUMP.png",
            "BonPricel.png",
            "ExpTurbina.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "right",
        "right",
        "left",
        "left"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpZakalka.png",
            "BonDosil.png",
            "BonVentil.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "ExpZakalka.png",
            "ExpKaretka.png",
            "ExpTurbina.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "right",
        "none",
        "none",
        "none"
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
    },
    "random": {
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
            "BonStab.png",
            "BonDosil.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "left",
        "right",
        "left",
        "left"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyZakalka.png",
            "TrophyDosil.png",
            "TrophyTurbina.png"
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
      ],
      "modSides": [
        "left",
        "left",
        "left",
        "left",
        "left"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyZakalka.png",
            "TrophyTurbina.png",
            "TrophyDosil.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "TrophyUMP.png",
            "ExpTurbina.png",
            "TrophyDosil.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "right",
        "right",
        "right",
        "right"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyZakalka.png",
            "TrophyStabilizer.png",
            "TrophyDosil.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "TrophyZakalka.png",
            "BonTurbina.png",
            "TrophyDosil.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "left",
        "left",
        "left",
        "left"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "BonVentil.png",
            "BonStab.png",
            "TrophyUMP.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "BonStab.png",
            "Copi.png",
            "TrophyMaloshymka.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "right",
        "none",
        "left",
        "right"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyZakalka.png",
            "TrophyStabilizer.png",
            "ExpTurbina.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "BonVentil.png",
            "TrophyStabilizer.png",
            "ExpTurbina.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "left",
        "left",
        "right",
        "left"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpZakalka.png",
            "BonStab.png",
            "ExpStab.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "BonPricel.png",
            "BonStab.png",
            "BonVentil.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "right",
        "none",
        "right",
        "left"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyUMP.png",
            "BonStab.png",
            "BonVentil.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "ExpStab.png",
            "BonStab.png",
            "BonVentil.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "right",
        "left",
        "left",
        "right"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpTurbina.png",
            "TrophyPricel.png",
            "TrophyUMP.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "ExpTurbina.png",
            "TrophyPricel.png",
            "ExpZakalka.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "right",
        "right",
        "left",
        "none"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyZakalka.png",
            "TrophyStabilizer.png",
            "TrophyDosil.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "ExpTurbina.png",
            "TrophyStabilizer.png",
            "TrophyDosil.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "left",
        "left",
        "left",
        "left"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpKaretka.png",
            "BonVentil.png",
            "BonStab.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "BonDosil.png",
            "BonStab.png",
            "BonPricel.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "right",
        "right",
        "left",
        "right"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpZakalka.png",
            "BonTurbina.png",
            "ExpKaretka.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "TrophyZakalka.png",
            "TrophyTurbina.png",
            "TrophyDosil.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "left",
        "left",
        "none",
        "left"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyUMP.png",
            "ExpTurbina.png",
            "TrophyDosil.png"
          ],
          "type": "main"
        }
      ],
      "modSides": [
        "left",
        "left",
        "right",
        "left",
        "none"
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
    },
    "random": {
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
            "BonVentil.png",
            "ExpRastochka.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "left",
        "right",
        "left",
        "left"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpZakalka.png",
            "TrophyStabilizer.png",
            "TrophyDosil.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "ExpTurbina.png",
            "TrophyStabilizer.png",
            "TrophyDosil.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "left",
        "left",
        "none",
        "left"
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
      ]
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpKaretka.png",
            "BonStab.png",
            "BonVentil.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "ExpKaretka.png",
            "BonStab.png",
            "ExpTurbina.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "right",
        "left",
        "none",
        "right"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyTurbina.png",
            "TrophyStabilizer.png",
            "TrophyDosil.png"
          ],
          "type": "main"
        }
      ],
      "modSides": [
        "left",
        "left",
        "left",
        "none",
        "left"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyDosil.png",
            "TrophyZakalka.png",
            "ExpTurbina.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "TrophyVentil.png",
            "TrophyZakalka.png",
            "ExpTurbina.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "right",
        "right",
        "left",
        "right"
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
      "modSides": [
        "none",
        "right",
        "right",
        "left",
        "left"
      ]
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyZakalka.png",
            "ExpTurbina.png",
            "TrophyStabilizer.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "TrophyVentil.png",
            "ExpTurbina.png",
            "TrophyStabilizer.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "right",
        "left",
        "right",
        "left"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpZakalka.png",
            "BonStab.png",
            "BonDosil.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "ExpTurbina.png",
            "BonStab.png",
            "BonDosil.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "left",
        "left",
        "none",
        "left"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "BonStab.png",
            "TrophyDosil.png",
            "TrophyZakalka.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "BonStab.png",
            "TrophyDosil.png",
            "TrophyUMP.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "left",
        "left",
        "left",
        "none"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "BonVentil.png",
            "BonTurbina.png",
            "BonDosil.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "ExpKaretka.png",
            "ExpZakalka.png",
            "BonTurbina.png"
          ],
          "type": "alternative"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "Copi.png",
            "BonOptica.png",
            "TrophyMaloshymka.png"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "BonDosil.png",
            "BonStab.png",
            "BonVentil.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "ExpKaretka.png",
            "BonStab.png",
            "BonVentil.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "right",
        "right",
        "left",
        "none"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpZakalka.png",
            "ExpKaretka.png",
            "BonStab.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "ExpTurbina.png",
            "ExpKaretka.png",
            "BonStab.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "left",
        "left",
        "left",
        "left"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpZakalka.png",
            "TrophyStabilizer.png",
            "TrophyDosil.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "TrophyStabilizer.png",
            "TrophyVentil.png",
            "TrophyDosil.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "left",
        "left",
        "left",
        "right"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyUMP.png",
            "ExpTurbina.png",
            "ExpKaretka.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "TrophyUMP.png",
            "TrophyTurbina.png",
            "TrophyDosil.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "right",
        "right",
        "left",
        "left"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpZakalka.png",
            "BonStab.png",
            "BonDosil.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "TrophyTurbina.png",
            "BonStab.png",
            "BonDosil.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "left",
        "left",
        "none",
        "left"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpZakalka.png",
            "ExpTurbina.png",
            "BonDosil.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "BonVentil.png",
            "ExpTurbina.png",
            "BonDosil.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "left",
        "left",
        "none",
        "left"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyZakalka.png",
            "TrophyTurbina.png",
            "TrophyStabilizer.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "TrophyZakalka.png",
            "TrophyTurbina.png",
            "TrophyVentil.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "left",
        "left",
        "right",
        "left"
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
    },
    "random": {
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
            "BonStab.png",
            "ExpKaretka.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "left",
        "left",
        "none",
        "left"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyVentil.png",
            "TrophyUMP.png",
            "ExpTurbina.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "TrophyMaloshymka.png",
            "TrophyUMP.png",
            "ExpTurbina.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "left",
        "right",
        "left",
        "left"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpZakalka.png",
            "BonStab.png",
            "BonTurbina.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "BonTurbina.png",
            "Grunti.png",
            "BonStab.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "left",
        "right",
        "left",
        "left"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyUMP.png",
            "TrophyZakalka.png",
            "TrophyTurbina.png"
          ],
          "type": "main"
        }
      ],
      "modSides": [
        "left",
        "right",
        "right",
        "left",
        "none"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpKaretka.png",
            "ExpTurbina.png",
            "TrophyUMP.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "ExpKaretka.png",
            "TrophyVentil.png",
            "TrophyMaloshymka.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "right",
        "right",
        "right",
        "left"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "Copi.png",
            "BonOptica.png",
            "TrophyMaloshymka.png"
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
    },
    "random": {
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
            "BonStab.png",
            "BonTurbina.png",
            "ExpKaretka.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "left",
        "left",
        "left",
        "left"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpZakalka.png",
            "BonStab.png",
            "TrophyPricel.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "ExpZakalka.png",
            "BonStab.png",
            "ExpStab.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "left",
        "right",
        "none",
        "left"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "BonVentil.png",
            "BonDosil.png",
            "BonStab.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "BonVentil.png",
            "ExpRastochka.png",
            "BonStab.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "right",
        "left",
        "left",
        "left"
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
      ]
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpKaretka.png",
            "ExpZakalka.png",
            "ExpTurbina.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "BonDosil.png",
            "BonStab.png",
            "BonTurbina.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "left",
        "right",
        "right",
        "right"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpZakalka.png",
            "BonVentil.png",
            "BonDosil.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "ExpZakalka.png",
            "BonVentil.png",
            "ExpRastochka.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "right",
        "left",
        "right",
        "none"
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
    },
    "random": {
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
            "ExpKaretka.png",
            "ExpTurbina.png",
            "BonVentil.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "right",
        "right",
        "none",
        "left"
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
    },
    "random": {
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
            "ExpRastochka.png",
            "BonTurbina.png",
            "BonStab.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "left",
        "right",
        "left",
        "left"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpZakalka.png",
            "BonStab.png",
            "ExpKaretka.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "BonDosil.png",
            "BonStab.png",
            "BonPricel.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "right",
        "left",
        "left",
        "left"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpZakalka.png",
            "BonVentil.png",
            "BonDosil.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "ExpZakalka.png",
            "BonVentil.png",
            "ExpRastochka.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "right",
        "left",
        "right",
        "none"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "BonVentil.png",
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
      ],
      "modSides": [
        "left",
        "right",
        "left",
        "left",
        "left"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyPricel.png",
            "BonStab.png",
            "ExpTurbina.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "TrophyPricel.png",
            "BonStab.png",
            "TrophyUMP.png"
          ],
          "type": "alternative"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "ExpZakalka.png",
            "BonStab.png",
            "ExpKaretka.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "ExpRastochka.png",
            "BonStab.png",
            "BonVentil.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "right",
        "right",
        "left",
        "none"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "BonVentil.png",
            "BonStab.png",
            "ExpKaretka.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "ExpZakalka.png",
            "BonStab.png",
            "ExpKaretka.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "right",
        "right",
        "right",
        "none"
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
    },
    "random": {
      "equipmentBuilds": [
        {
          "items": [
            "TrophyDosil.png",
            "BonStab.png",
            "ExpStab.png"
          ],
          "type": "main"
        },
        {
          "items": [
            "TrophyDosil.png",
            "ExpZakalka.png",
            "ExpTurbina.png"
          ],
          "type": "alternative"
        }
      ],
      "modSides": [
        "left",
        "left",
        "left",
        "right",
        "left"
      ]
    }
  }
};
