const TabDirection = {
    LeftToRight: "LeftToRight",
    TopToBottom: "TopToBottom"
};

const TrAttr = {
    //Id: "id",
    Class: "class",
    //TabIndex: "tabindex",
    //ColSpan: "colspan",
    //Type: "type",
    //Config: "config",
    //DPVal: "dpval",
    RowIndexIntervention: "rowindexint",
    RowIndexFixedDose: "rowindexfd",
    RowIndexPhase: "rowindexphs",
    RowIndexMisc: "rowindexmis",
    RowIndexDosage: "rowindexdsg",
    //ColumnIndex: "columnindex",
    TRType: "trtype",
    CaseNo: "caseno",
    CaseName: "casename",
};

const TdAttr = {
    Id: "id",
    Class: "class",
    TabIndex: "tabindex",
    ColSpan: "colspan",
    Type: "type",
    Config: "config",
    DPVal: "dpval",
    RowIndex: "rowindex",
    ColumnIndex: "columnindex",
    DataClass: "data-class",
    TDType: "tdtype"
};

const TRType = {
    Intervention: "intervention",
    FixedDose: "fixeddose",
    Phase: "phase",
    Dosage: "dosage",
    Misc: "misc"
};

const ComponentType = {
    ExtractText: "ExtractText",
    ExtractDropdown: "ExtractDropdown",
    ExtractButton: "ExtractButton",
    ExtractActionButton: "ExtractActionButton",
    ExtractGroupName: "ExtractGroupName",
    ExtractAddInfo: "ExtractAddInfo"
};

const Cases = {
    CaseNo: {
        Therapy_Drug: ["case1", "case3"],
        Therapy_CancerIntervention: ["case1", "case2", "case3"],
        Therapy_Radiotherapy: ["case1", "case8"],
        Therapy_BiologicalVaccine: ["case1", "case9"],
        Therapy_LifestyleModification: ["case1", "case18"],
        Therapy_DietarySupplement: ["case1", "case19"],
        Therapy_Other: ["case1", "case20"],
        Therapy_Device: ["case1", "case7"],
        Therapy_ProcedureSurgery: ["case1", "case11"],
        Therapy_BehavioralInformationalMaterial: ["case4", "case5"],
        Therapy_BehavioralSessionMeeting: ["case4", "case6"]
    },
    //Drug: {
    //    Therapy_Drug: ["case1", "case3"],
    //    Therapy_CancerIntervention: ["case1", "case2", "case3"],
    //    Therapy_Radiotherapy: ["case1", "case8"],
    //    Therapy_BiologicalVaccine: ["case1", "case9"],
    //    Therapy_LifestyleModification: ["case1", "case18"],
    //    Therapy_DietarySupplement: ["case1", "case19"],
    //    Therapy_Other: ["case1", "case20"]
    //},
    //DeviceSurgery: {
    //    Therapy_Device: ["case1", "case7"],
    //    Therapy_ProcedureSurgery: ["case1", "case11"]
    //},
    //Behavioral: {
    //    Therapy_BehavioralInformationalMaterial: ["case4", "case5"],
    //    Therapy_BehavioralSessionMeeting: ["case4", "case6"]
    //},
    CaseName: {
        Therapy_Drug: 'Therapy_Drug',
        Therapy_CancerIntervention: 'Therapy_CancerIntervention',
        Therapy_Radiotherapy: 'Therapy_Radiotherapy',
        Therapy_BiologicalVaccine: 'Therapy_BiologicalVaccine',
        Therapy_LifestyleModification: 'Therapy_LifestyleModification',
        Therapy_DietarySupplement: 'Therapy_DietarySupplement',
        Therapy_Other: 'Therapy_Other',

        Therapy_Device: 'Therapy_Device',
        Therapy_ProcedureSurgery: 'Therapy_ProcedureSurgery',

        Therapy_BehavioralInformationalMaterial: 'Therapy_BehavioralInformationalMaterial',
        Therapy_BehavioralSessionMeeting: 'Therapy_BehavioralSessionMeeting'
    }    
}



//class App {

//    constructor() {
//        this.Cases1 = Cases;
//    }
//}
