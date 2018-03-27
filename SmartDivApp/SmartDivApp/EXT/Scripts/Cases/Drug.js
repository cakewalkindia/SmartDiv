/// <reference path="../reference.js" />

class Drug extends Intervention {   
    
    // #region Constructor
    constructor(caseName) {
        super();
        this.caseName = caseName;
        this.caseNo = Cases.CaseNo[caseName].sort().toString();
    }
    // #endregion

    // #region Colspan 
    getFixedDoseColspan() {
        return 2;
    }

    getPhaseColspan() {
        let _colSpan = 7;
        if (this.caseName == Cases.CaseName.Therapy_Radiotherapy || 
            this.caseName == Cases.CaseName.Therapy_BiologicalVaccine ||
            this.caseName == Cases.CaseName.Therapy_LifestyleModification ||
            this.caseName == Cases.CaseName.Therapy_DietarySupplement ||
            this.caseName == Cases.CaseName.Therapy_Other) {
            _colSpan = 6;
        }
        return _colSpan;
    }

    getMiscColspan() {
        let _colSpan = 13;
        if (this.caseName == Cases.CaseName.Therapy_CancerIntervention) {
            _colSpan = 15;
        }
        else if (this.caseName == Cases.CaseName.Therapy_Radiotherapy ||
            this.caseName == Cases.CaseName.Therapy_BiologicalVaccine ||
            this.caseName == Cases.CaseName.Therapy_LifestyleModification ||
            this.caseName == Cases.CaseName.Therapy_DietarySupplement ||
            this.caseName == Cases.CaseName.Therapy_Other) {
            _colSpan = 12;
        }
        return _colSpan;
    }

    getDosageColspan() {
        let _colSpan = 17;
        if (this.caseName == Cases.CaseName.Therapy_CancerIntervention) {
            _colSpan = 19;
        }
        else if (this.caseName == Cases.CaseName.Therapy_Radiotherapy ||
            this.caseName == Cases.CaseName.Therapy_BiologicalVaccine ||
            this.caseName == Cases.CaseName.Therapy_LifestyleModification ||
            this.caseName == Cases.CaseName.Therapy_DietarySupplement ||
            this.caseName == Cases.CaseName.Therapy_Other) {
            _colSpan = 16;
        }
        return _colSpan;
    }
    // #endregion

    // #region Interventions
    CreateInterventionTR(RowIndexIntervention) {
        let row = document.createElement("tr");
        row.setAttribute(TrAttr.Class, "trCls");
        row.setAttribute(TrAttr.CaseName, this.caseName);
        row.setAttribute(TrAttr.CaseNo, Cases.CaseNo[this.caseName].sort().toString());
        row.setAttribute(TrAttr.TRType, TRType.Intervention);
        row.setAttribute(TrAttr.RowIndexIntervention, RowIndexIntervention);
        row.setAttribute(TrAttr.RowIndexPhase, 1);
        row.setAttribute(TrAttr.RowIndexMisc, 1);
        row.setAttribute(TrAttr.RowIndexDosage, 1);
        return row;
    }
    CreateInterventionFields(row) {
        //let cell = this.CreateTD(this.TabIndexTD(), rowIdx, ComponentList.GroupName.columnIndex, ComponentType.ExtractGroupName, "", "Total Population", "Total Population", "tdCls");
        //row.appendChild(cell);

        //cell = this.CreateTD(this.TabIndexTD(), rowIdx, ComponentList.AddInfo.columnIndex, ComponentType.ExtractAddInfo, "AddInfo", "Additional Info", "Additional Info", "tdCls");
        //row.appendChild(cell);

        //let caseNo = $(row).attr(TrAttr.CaseNo);

        let cell = this.CreateTD(ComponentList.Intervention.TreatmentTag);
        row.appendChild(cell);

        if (this.caseName == Cases.CaseName.Therapy_Drug || this.caseName == Cases.CaseName.Therapy_CancerIntervention) {
            cell = this.CreateTD(ComponentList.Intervention.FixedDose);
            row.appendChild(cell);
        }

        cell = this.CreateTD(ComponentList.Intervention.Intervention);
        row.appendChild(cell);

        if (this.caseName == Cases.CaseName.Therapy_Drug || this.caseName == Cases.CaseName.Therapy_CancerIntervention) {
            cell = this.CreateTD(ComponentList.Intervention.FixedDoseCombinationName);
            row.appendChild(cell);
        }

        cell = this.CreateTD(ComponentList.Intervention.Manufacturer);
        row.appendChild(cell);

        cell = this.CreateTD(ComponentList.Intervention.Brand);
        row.appendChild(cell);

        cell = this.CreateActionTD(ComponentList.Intervention.AddIntervention);
        row.appendChild(cell);

        cell = this.CreateActionTD(ComponentList.Intervention.DeleteIntervention);
        row.appendChild(cell);
    }
    DeleteIntervention(RowIndexIntervention) {
        $(Intervention.MainTableIdJQ()).find('tbody').find(`tr[${TrAttr.RowIndexIntervention}=${RowIndexIntervention}]`).remove();

        let lstCnt = $(Intervention.MainTableIdJQ()).find('tbody').find(`tr[${TrAttr.TRType}=${TRType.Intervention}]`);

        let lstTdAdd = lstCnt.find(`td[config='AddIntervention']`);

        if (lstTdAdd.length > 0 && lstTdAdd[0].children.length > 0) {
            let btnAdd = Ext.getCmp(lstTdAdd.eq(lstTdAdd.length - 1)[0].children[0].id);
            if (btnAdd) {
                btnAdd.show();
            }
        }

        if (lstCnt.length == 1) {
            let tdDel = lstCnt.find(`td[config='DeleteIntervention']`);
            if (tdDel.length > 0 && tdDel[0].children.length > 0) {
                let btnDel = Ext.getCmp(tdDel[0].children[0].id);
                if (btnDel) {
                    btnDel.hide();
                }
            }
        }
    }
    DeleteInterventionButtonAfterRender(cmp, RowIndexIntervention) {
        let rwLen = $(Intervention.MainTableIdJQ()).find('tbody').find(`tr[${TrAttr.TRType}=${TRType.Intervention}]`).length;
        rwLen > 1 ? cmp.show() : cmp.hide();
    }
    // #endregion

    // #region Fixed Dose
    CreateFixedDoseTR(RowIndexIntervention, RowIndexFixedDose, trClass) {
        let row = document.createElement("tr");
        if (typeof trClass === "undefined") {
            trClass = "trCls";
        }
        row.setAttribute(TrAttr.Class, trClass);
        row.setAttribute(TrAttr.CaseName, this.caseName);
        row.setAttribute(TrAttr.CaseNo, Cases.CaseNo[this.caseName].sort().toString());
        row.setAttribute(TrAttr.TRType, TRType.FixedDose);
        row.setAttribute(TrAttr.RowIndexIntervention, RowIndexIntervention);
        row.setAttribute(TrAttr.RowIndexFixedDose, RowIndexFixedDose);

        let cell = this.CreateEmptyTD(this.getFixedDoseColspan());
        row.appendChild(cell);

        //row.setAttribute(TrAttr.RowIndexPhase, 1);
        //row.setAttribute(TrAttr.RowIndexMisc, 1);
        //row.setAttribute(TrAttr.RowIndexDosage, 1);
        return row;
    }
    CreateFixedDoseFields(row, propsAddBtn, propsDelBtn) {
        let cell = this.CreateTD(ComponentList.FixedDose.FixedDoseIntervention);
        row.appendChild(cell);

        cell = this.CreateTD(ComponentList.FixedDose.FixedDoseConcentration);
        row.appendChild(cell);

        cell = this.CreateTD(ComponentList.FixedDose.FixedDoseUnit);
        row.appendChild(cell);

        cell = this.CreateActionTD(ComponentList.FixedDose.AddFixedDose, propsAddBtn);
        row.appendChild(cell);

        cell = this.CreateActionTD(ComponentList.FixedDose.DeleteFixedDose, propsDelBtn);
        row.appendChild(cell);
    }
    AddFixedDose(RowIndexIntervention, RowIndexFixedDose) {
        let row = this.CreateFixedDoseTR(RowIndexIntervention, RowIndexFixedDose);
        this.CreateFixedDoseFields(row);        
        let lstCnt = $(Intervention.MainTableIdJQ()).find('tbody').find(`tr[${TrAttr.TRType}=${TRType.FixedDose}]tr[${TrAttr.RowIndexIntervention}=${RowIndexIntervention}]:last`);

        if (lstCnt.length > 0) {
            lstCnt.after(row);
        }
    }
    DeleteFixedDose(RowIndexIntervention, RowIndexFixedDose) {
        $(Intervention.MainTableIdJQ()).find('tbody').find(`tr[${TrAttr.TRType}=${TRType.FixedDose}]tr[${TrAttr.RowIndexIntervention}=${RowIndexIntervention}]tr[${TrAttr.RowIndexFixedDose}=${RowIndexFixedDose}]`).remove();
        let lstCnt = $(Intervention.MainTableIdJQ()).find('tbody').find(`tr[${TrAttr.TRType}=${TRType.FixedDose}]tr[${TrAttr.RowIndexIntervention}=${RowIndexIntervention}]`);

        if (lstCnt.length != 0) {
            let lstTdAdd = lstCnt.find(`td[config='AddFixedDose']`);

            if (lstTdAdd.length > 0 && lstTdAdd[0].children.length > 0) {
                let btnAdd = Ext.getCmp(lstTdAdd.eq(lstTdAdd.length - 1)[0].children[0].id);
                if (btnAdd) {
                    btnAdd.show();
                }
            }
        } else {
            let lstCnt = $(Intervention.MainTableIdJQ()).find('tbody').find(`tr[${TrAttr.TRType}=${TRType.Intervention}]tr[${TrAttr.RowIndexIntervention}=${RowIndexIntervention}]`);
            let lstTdAdd = lstCnt.find(`td[config='AddFixedDose']`);

            if (lstTdAdd.length > 0 && lstTdAdd[0].children.length > 0) {
                let btnAdd = Ext.getCmp(lstTdAdd.eq(lstTdAdd.length - 1)[0].children[0].id);
                if (btnAdd) {
                    btnAdd.show();
                }
            }
        }
    }
    DeleteFixedDoseButtonAfterRender(cmp, RowIndexIntervention) {
        let rwLen = $(Intervention.MainTableIdJQ()).find('tbody').find(`tr[${TrAttr.TRType}=${TRType.FixedDose}]tr[${TrAttr.RowIndexIntervention}=${RowIndexIntervention}]`).length;
        rwLen > 2 ? cmp.show() : cmp.hide();
    }
    // #endregion

    // #region Phase
    CreatePhaseTR(RowIndexIntervention, RowIndexPhase) {
        let row = document.createElement("tr");
        row.setAttribute(TrAttr.Class, "trCls");
        row.setAttribute(TrAttr.CaseName, this.caseName);
        row.setAttribute(TrAttr.CaseNo, Cases.CaseNo[this.caseName].sort().toString());
        row.setAttribute(TrAttr.TRType, TRType.Phase);
        row.setAttribute(TrAttr.RowIndexIntervention, RowIndexIntervention);
        row.setAttribute(TrAttr.RowIndexPhase, RowIndexPhase);
        //row.setAttribute(TrAttr.RowIndexMisc, 1);
        //row.setAttribute(TrAttr.RowIndexDosage, 1);

        let cell = this.CreateEmptyTD(this.getPhaseColspan());
        row.appendChild(cell);

        //this.CreatePhaseFields(row);
        //this.CreateDosageFields(row);

        return row;
    }
    CreatePhaseFields(row) {
        let cell = this.CreateTD(ComponentList.Phase.StudyPhase);
        row.appendChild(cell);

        cell = this.CreateTD(ComponentList.Phase.Schedule);
        row.appendChild(cell);

        cell = this.CreateTD(ComponentList.Phase.Route);
        row.appendChild(cell);

        cell = this.CreateTD(ComponentList.Phase.Provider);
        row.appendChild(cell);

        if (this.caseName == Cases.CaseName.Therapy_CancerIntervention) {
            cell = this.CreateTD(ComponentList.Phase.LineOfTreatment);
            row.appendChild(cell);

            cell = this.CreateTD(ComponentList.Phase.StageSetting);
            row.appendChild(cell);

        }


        cell = this.CreateActionTD(ComponentList.Phase.AddPhase);
        row.appendChild(cell);

        cell = this.CreateActionTD(ComponentList.Phase.DeletePhase);
        row.appendChild(cell);

        cell = this.CreateTD(ComponentList.Phase.MiscName);
        row.appendChild(cell);

        cell = this.CreateTD(ComponentList.Phase.MiscDesc);
        row.appendChild(cell);

        cell = this.CreateActionTD(ComponentList.Phase.AddMisc);
        row.appendChild(cell);

        cell = this.CreateActionTD(ComponentList.Phase.DeleteMisc);
        row.appendChild(cell);
    }
    AddPhase(RowIndexIntervention, RowIndexPhase) {
        let row = this.CreatePhaseTR(RowIndexIntervention, RowIndexPhase);
        this.CreatePhaseFields(row);
        this.CreateDosageFields(row);
        let lstCnt = $(Intervention.MainTableIdJQ()).find('tbody').find(`tr[${TrAttr.RowIndexIntervention}=${RowIndexIntervention}]:last`);
        if (lstCnt.length > 0) {
            lstCnt.after(row);
        }
    }
    DeletePhase(RowIndexIntervention, RowIndexPhase) {
        $(Intervention.MainTableIdJQ()).find('tbody').find(`tr[${TrAttr.TRType}=${TRType.Dosage}]tr[${TrAttr.RowIndexIntervention}=${RowIndexIntervention}]tr[${TrAttr.RowIndexPhase}=${RowIndexPhase}]`).remove();
        $(Intervention.MainTableIdJQ()).find('tbody').find(`tr[${TrAttr.TRType}=${TRType.Misc}]tr[${TrAttr.RowIndexIntervention}=${RowIndexIntervention}]tr[${TrAttr.RowIndexPhase}=${RowIndexPhase}]`).remove();
        $(Intervention.MainTableIdJQ()).find('tbody').find(`tr[${TrAttr.TRType}=${TRType.Phase}]tr[${TrAttr.RowIndexIntervention}=${RowIndexIntervention}]tr[${TrAttr.RowIndexPhase}=${RowIndexPhase}]`).remove();
        let lstCnt = $(Intervention.MainTableIdJQ()).find('tbody').find(`tr[${TrAttr.TRType}=${TRType.Phase}]tr[${TrAttr.RowIndexIntervention}=${RowIndexIntervention}]`);

        if (lstCnt.length != 0) {
            let lstTdAdd = lstCnt.find(`td[config='AddPhase']`);

            if (lstTdAdd.length > 0 && lstTdAdd[0].children.length > 0) {
                let btnAdd = Ext.getCmp(lstTdAdd.eq(lstTdAdd.length - 1)[0].children[0].id);
                if (btnAdd) {
                    btnAdd.show();
                }
            }
        } else {
            let lstCnt = $(Intervention.MainTableIdJQ()).find('tbody').find(`tr[${TrAttr.TRType}=${TRType.Intervention}]tr[${TrAttr.RowIndexIntervention}=${RowIndexIntervention}]`);
            let lstTdAdd = lstCnt.find(`td[config='AddPhase']`);

            if (lstTdAdd.length > 0 && lstTdAdd[0].children.length > 0) {
                let btnAdd = Ext.getCmp(lstTdAdd.eq(lstTdAdd.length - 1)[0].children[0].id);
                if (btnAdd) {
                    btnAdd.show();
                }
            }
        }
    }
    DeletePhaseButtonAfterRender(cmp, RowIndexIntervention, RowIndexPhase) {
        //let _rowIdx = _curTD.parent('tr').attr(TdAttr.RowIndex);
        let rwLen = $(Intervention.MainTableIdJQ()).find('tbody').find(`tr[${TrAttr.TRType}=${TRType.Phase}]tr[${TrAttr.RowIndexIntervention}=${RowIndexIntervention}]tr[${TrAttr.RowIndexPhase}=${RowIndexPhase}]`).length;
        rwLen >= 1 ? cmp.show() : cmp.hide();
    }
    // #endregion  

    // #region Misc
    CreateMiscTR(RowIndexIntervention, RowIndexPhase, RowIndexMisc) {
        let row = document.createElement("tr");
        row.setAttribute(TrAttr.Class, "trCls");
        row.setAttribute(TrAttr.CaseName, this.caseName);
        row.setAttribute(TrAttr.CaseNo, Cases.CaseNo[this.caseName].sort().toString());
        row.setAttribute(TrAttr.TRType, TRType.Misc);
        row.setAttribute(TrAttr.RowIndexIntervention, RowIndexIntervention);
        row.setAttribute(TrAttr.RowIndexPhase, RowIndexPhase);
        row.setAttribute(TrAttr.RowIndexMisc, RowIndexMisc);

        let cell = this.CreateEmptyTD(this.getMiscColspan());
        row.appendChild(cell);
        //this.CreateMiscFields(row);

        return row;
    }
    CreateMiscFields(row) {
        let cell = this.CreateTD(ComponentList.Phase.MiscName);
        row.appendChild(cell);

        cell = this.CreateTD(ComponentList.Phase.MiscDesc);
        row.appendChild(cell);

        cell = this.CreateActionTD(ComponentList.Phase.AddMisc);
        row.appendChild(cell);

        cell = this.CreateActionTD(ComponentList.Phase.DeleteMisc);
        row.appendChild(cell);

        //cell = this.CreateEmptyTD(18);
        //row.appendChild(cell);
    }
    AddMisc(curTD, RowIndexIntervention, RowIndexPhase, RowIndexMisc) {
        let row = this.CreateMiscTR(RowIndexIntervention, RowIndexPhase, RowIndexMisc);
        this.CreateMiscFields(row);
        curTD.parent('tr').after(row);
    }
    DeleteMisc(curTD, RowIndexIntervention, RowIndexPhase) {
        curTD.parent('tr').remove();
        let lstCnt = $(Intervention.MainTableIdJQ()).find('tbody').find(`tr[${TrAttr.TRType}=${TRType.Misc}]tr[${TrAttr.RowIndexIntervention}=${RowIndexIntervention}]tr[${TrAttr.RowIndexPhase}=${RowIndexPhase}]`);
        if (lstCnt.length != 0) {
            let lstTdAdd = lstCnt.find(`td[config='AddMisc']`);

            if (lstTdAdd.length > 0 && lstTdAdd[0].children.length > 0) {
                let btnAdd = Ext.getCmp(lstTdAdd.eq(lstTdAdd.length - 1)[0].children[0].id);
                if (btnAdd) {
                    btnAdd.show();
                }
            }
        } else {
            let lstCnt = $(Intervention.MainTableIdJQ()).find('tbody').find(`tr[${TrAttr.TRType}=${TRType.Phase}]tr[${TrAttr.RowIndexIntervention}=${RowIndexIntervention}]tr[${TrAttr.RowIndexPhase}=${RowIndexPhase}]`);
            if (lstCnt.length == 0) {
                lstCnt = $(Intervention.MainTableIdJQ()).find('tbody').find(`tr[${TrAttr.TRType}=${TRType.Intervention}]tr[${TrAttr.RowIndexIntervention}=${RowIndexIntervention}]tr[${TrAttr.RowIndexPhase}=${RowIndexPhase}]`)
            }

            let lstTdAdd = lstCnt.find(`td[config='AddMisc']`);

            if (lstTdAdd.length > 0 && lstTdAdd[0].children.length > 0) {
                let btnAdd = Ext.getCmp(lstTdAdd.eq(lstTdAdd.length - 1)[0].children[0].id);
                if (btnAdd) {
                    btnAdd.show();
                }
            }
        }
    }
    DeleteMiscButtonAfterRender(cmp, RowIndexIntervention, RowIndexPhase, RowIndexMisc) {
        let rwLen = $(Intervention.MainTableIdJQ()).find('tbody').find(`tr[${TrAttr.TRType}=${TRType.Misc}]tr[${TrAttr.RowIndexIntervention}=${RowIndexIntervention}]tr[${TrAttr.RowIndexPhase}=${RowIndexPhase}]tr[${TrAttr.RowIndexMisc}=${RowIndexMisc}]`).length;
        rwLen >= 1 ? cmp.show() : cmp.hide();
    }
    // #endregion

    // #region Dosage
    CreateDosageTR(RowIndexIntervention, RowIndexPhase, RowIndexDosage) {
        let row = document.createElement("tr");
        row.setAttribute(TrAttr.Class, "trCls");
        row.setAttribute(TrAttr.CaseName, this.caseName);
        row.setAttribute(TrAttr.CaseNo, Cases.CaseNo[this.caseName].sort().toString());
        row.setAttribute(TrAttr.TRType, TRType.Dosage);
        row.setAttribute(TrAttr.RowIndexIntervention, RowIndexIntervention);
        row.setAttribute(TrAttr.RowIndexPhase, RowIndexPhase);
        //row.setAttribute(TrAttr.RowIndexMisc, RowIndexMisc);
        row.setAttribute(TrAttr.RowIndexDosage, RowIndexDosage);

        let cell = this.CreateEmptyTD(this.getDosageColspan());
        row.appendChild(cell);
        //this.CreateDosageFields(row);

        return row;
    }
    CreateDosageFields(row) {
        let cell = this.CreateTD(ComponentList.Dosage.Protocol);
        row.appendChild(cell);

        cell = this.CreateTD(ComponentList.Dosage.DosageType);
        row.appendChild(cell);

        cell = this.CreateTD(ComponentList.Dosage.FieldType);
        row.appendChild(cell);

        cell = this.CreateTD(ComponentList.Dosage.FieldValue);
        row.appendChild(cell);

        cell = this.CreateTD(ComponentList.Dosage.DosageUnit);
        row.appendChild(cell);

        cell = this.CreateTD(ComponentList.Dosage.Concentration);
        row.appendChild(cell);

        cell = this.CreateTD(ComponentList.Dosage.ConcentrationUnit);
        row.appendChild(cell);

        cell = this.CreateTD(ComponentList.Dosage.Frequency);
        row.appendChild(cell);

        cell = this.CreateTD(ComponentList.Dosage.FrequencyUnit);
        row.appendChild(cell);

        cell = this.CreateTD(ComponentList.Dosage.FrequencyInfo);
        row.appendChild(cell);

        cell = this.CreateTD(ComponentList.Dosage.Duration);
        row.appendChild(cell);

        cell = this.CreateTD(ComponentList.Dosage.DurationUnit);
        row.appendChild(cell);

        cell = this.CreateTD(ComponentList.Dosage.DurationInfo);
        row.appendChild(cell);

        cell = this.CreateTD(ComponentList.Dosage.TimepointUnit);
        row.appendChild(cell);

        cell = this.CreateTD(ComponentList.Dosage.TimepointNo);
        row.appendChild(cell);

        cell = this.CreateTD(ComponentList.Dosage.TimepointInfo);
        row.appendChild(cell);

        cell = this.CreateActionTD(ComponentList.Dosage.AddDosage);
        row.appendChild(cell);

        cell = this.CreateActionTD(ComponentList.Dosage.DeleteDosage);
        row.appendChild(cell);
    }
    AddDosage(curTD, TRowType, RowIndexIntervention, RowIndexPhase, RowIndexDosage) {
        let row = this.CreateDosageTR(RowIndexIntervention, RowIndexPhase, RowIndexDosage);
        this.CreateDosageFields(row);
        let lstCnt = [];
        if (TRowType == TRType.Intervention) {
            // lstCnt = $(Intervention.MainTableIdJQ()).find('tbody').find(`tr[${TrAttr.TRType}=${TRType.Dosage}]tr[${TrAttr.RowIndexIntervention}=${RowIndexIntervention}]tr[${TrAttr.RowIndexPhase}=${RowIndexPhase}]:last`);
            lstCnt = $(Intervention.MainTableIdJQ()).find('tbody').find(`tr[${TrAttr.TRType}=${TRType.FixedDose}]tr[${TrAttr.RowIndexIntervention}=${RowIndexIntervention}]tr[${TrAttr.RowIndexPhase}=${RowIndexPhase}]:last`);
            if (lstCnt.length == 0) {
                lstCnt = $(Intervention.MainTableIdJQ()).find('tbody').find(`tr[${TrAttr.TRType}=${TRType.Misc}]tr[${TrAttr.RowIndexIntervention}=${RowIndexIntervention}]tr[${TrAttr.RowIndexPhase}=${RowIndexPhase}]:last`);
            }
            if (lstCnt.length == 0) {
                lstCnt = $(Intervention.MainTableIdJQ()).find('tbody').find(`tr[${TrAttr.RowIndexIntervention}=${RowIndexIntervention}]:last`);
            }
        } else if (TRowType == TRType.Phase) {
            lstCnt = $(Intervention.MainTableIdJQ()).find('tbody').find(`tr[${TrAttr.TRType}=${TRType.Misc}]tr[${TrAttr.RowIndexIntervention}=${RowIndexIntervention}]tr[${TrAttr.RowIndexPhase}=${RowIndexPhase}]:last`);
            if (lstCnt.length == 0) {
                lstCnt = $(Intervention.MainTableIdJQ()).find('tbody').find(`tr[${TrAttr.RowIndexIntervention}=${RowIndexIntervention}]:last`);
            }
        } else if (TRowType == TRType.Dosage) {
            lstCnt = curTD.parent('tr');
        }
        if (lstCnt.length > 0) {
            lstCnt.after(row);
        }
    }
    DeleteDosage(curTD, RowIndexIntervention, RowIndexPhase) {
        let _prvRw = curTD.parent('tr').prev();
        curTD.parent('tr').remove();
        let lstCnt = $(Intervention.MainTableIdJQ()).find('tbody').find(`tr[${TrAttr.RowIndexIntervention}=${RowIndexIntervention}]tr[${TrAttr.RowIndexPhase}=${RowIndexPhase}]`);
        if (lstCnt.length != 0) {
            let lstTdAdd = lstCnt.find(`td[config='AddDosage']`);
            if (lstTdAdd.length > 0 && lstTdAdd[0].children.length > 0) {
                let btnAdd = Ext.getCmp(lstTdAdd.eq(lstTdAdd.length - 1)[0].children[0].id);
                if (btnAdd) {
                    btnAdd.show();
                }
            }
        } else {
            let lstTdAdd = _prvRw.find(`td[config='AddDosage']`);

            if (lstTdAdd.length > 0 && lstTdAdd[0].children.length > 0) {
                let btnAdd = Ext.getCmp(lstTdAdd.eq(lstTdAdd.length - 1)[0].children[0].id);
                if (btnAdd) {
                    btnAdd.show();
                }
            }
        }
    }
    DeleteDosageButtonAfterRender(cmp, RowIndexIntervention, RowIndexPhase, RowIndexDosage) {
        //let _rowIdx = _curTD.parent('tr').attr(TdAttr.RowIndex);
        let rwLen = $(Intervention.MainTableIdJQ()).find('tbody').find(`tr[${TrAttr.TRType}=${TRType.Dosage}]tr[${TrAttr.RowIndexIntervention}=${RowIndexIntervention}]tr[${TrAttr.RowIndexPhase}=${RowIndexPhase}]tr[${TrAttr.RowIndexDosage}=${RowIndexDosage}]`).length;
        rwLen >= 1 ? cmp.show() : cmp.hide();
    }
    // #endregion

    // #region  Therapy---Drug
    Drug(rowNo) {
        //Case 1, Case 3

        let mainTbl = document.getElementById(Intervention.MainTableId());
        let tblBody = mainTbl.getElementsByTagName('tbody')[0];
        //let CaseName = Cases.CaseName.Therapy_Drug;

        let row = this.CreateInterventionTR(rowNo);

        this.CreateInterventionFields(row);
        this.CreatePhaseFields(row);
        this.CreateDosageFields(row);

        tblBody.appendChild(row);


        let valFD = $(row).find(`td[${TdAttr.Config}=${ComponentList.Intervention.FixedDose.name}]`).attr(TdAttr.DPVal);
        let trClass = "trCls";
        if (valFD == 'No') {
            trClass += " trDisplayNone";
        }

        let rowfd1 = this.CreateFixedDoseTR(rowNo, 1, trClass);
        //let cell = this.CreateEmptyTD(2);
        //rowfd1.appendChild(cell);
        this.CreateFixedDoseFields(rowfd1, { hidden: true }, { hidden: true });
        tblBody.appendChild(rowfd1);

        let rowfd2 = this.CreateFixedDoseTR(rowNo, 2, trClass);
        //cell = this.CreateEmptyTD(2);
        //rowfd2.appendChild(cell);
        this.CreateFixedDoseFields(rowfd2, { hidden: false }, { hidden: true });
        tblBody.appendChild(rowfd2);

        return row;
    }
    // #endregion

    // #region  Therapy---Drug---Study on Cancer Interventions
    CancerIntervention(rowNo) {
        //Case 1, Case 2, Case 3

        let mainTbl = document.getElementById(Intervention.MainTableId());
        let tblBody = mainTbl.getElementsByTagName('tbody')[0];
        //let CaseName = Cases.CaseName.Therapy_CancerIntervention;

        let row = this.CreateInterventionTR(rowNo);

        this.CreateInterventionFields(row);
        this.CreatePhaseFields(row);
        this.CreateDosageFields(row);

        tblBody.appendChild(row);


        let valFD = $(row).find(`td[${TdAttr.Config}=${ComponentList.Intervention.FixedDose.name}]`).attr(TdAttr.DPVal);
        let trClass = "trCls";
        if (valFD == 'No') {
            trClass += " trDisplayNone";
        }

        let rowfd1 = this.CreateFixedDoseTR(rowNo, 1, trClass);
        //let cell = this.CreateEmptyTD(2);
        //rowfd1.appendChild(cell);
        this.CreateFixedDoseFields(rowfd1, { hidden: true }, { hidden: true });
        tblBody.appendChild(rowfd1);

        let rowfd2 = this.CreateFixedDoseTR(rowNo, 2, trClass);
        //cell = this.CreateEmptyTD(2);
        //rowfd2.appendChild(cell);
        this.CreateFixedDoseFields(rowfd2, { hidden: false }, { hidden: true });
        tblBody.appendChild(rowfd2);

        return row;
    }
    // #endregion

    // #region  Therapy---Radiotherapy
    Radiotherapy(rowNo) {
        //Case 1, Case 8
        let mainTbl = document.getElementById(Intervention.MainTableId());
        let tblBody = mainTbl.getElementsByTagName('tbody')[0];
        //let CaseName = Cases.CaseName.Therapy_Radiotherapy;

        let row = this.CreateInterventionTR(rowNo);

        this.CreateInterventionFields(row);
        this.CreatePhaseFields(row);
        this.CreateDosageFields(row);

        tblBody.appendChild(row);
        return row;
    }
    // #endregion

    // #region  Therapy---Biological/Vaccine
    BiologicalVaccine(rowNo) {
        //Case 1, Case 9

        let mainTbl = document.getElementById(Intervention.MainTableId());
        let tblBody = mainTbl.getElementsByTagName('tbody')[0];
        //let CaseName = Cases.CaseName.Therapy_BiologicalVaccine;

        let row = this.CreateInterventionTR(rowNo);

        this.CreateInterventionFields(row);
        this.CreatePhaseFields(row);
        this.CreateDosageFields(row);

        tblBody.appendChild(row);   

        return row;
    }
    // #endregion

    // #region  Therapy---Lifestyle Modification
    LifestyleModification(rowNo) {
        //Case 1, Case 18

        let mainTbl = document.getElementById(Intervention.MainTableId());
        let tblBody = mainTbl.getElementsByTagName('tbody')[0];
        //let CaseName = Cases.CaseName.Therapy_LifestyleModification;

        let row = this.CreateInterventionTR(rowNo);

        this.CreateInterventionFields(row);
        this.CreatePhaseFields(row);
        this.CreateDosageFields(row);

        tblBody.appendChild(row);

        return row;
    }
    // #endregion

    // #region  Therapy---Dietary Supplement
    DietarySupplement(rowNo) {
        //Case 1, Case 19

        let mainTbl = document.getElementById(Intervention.MainTableId());
        let tblBody = mainTbl.getElementsByTagName('tbody')[0];
        //let CaseName = Cases.CaseName.Therapy_DietarySupplement;

        let row = this.CreateInterventionTR(rowNo);

        this.CreateInterventionFields(row);
        this.CreatePhaseFields(row);
        this.CreateDosageFields(row);

        tblBody.appendChild(row);

        return row;
    }
    // #endregion

    // #region  Therapy---Other
    Other(rowNo) {
        //Case 1, Case 20

        let mainTbl = document.getElementById(Intervention.MainTableId());
        let tblBody = mainTbl.getElementsByTagName('tbody')[0];
        //let CaseName = Cases.CaseName.Therapy_Other;

        let row = this.CreateInterventionTR(rowNo);

        this.CreateInterventionFields(row);
        this.CreatePhaseFields(row);
        this.CreateDosageFields(row);

        tblBody.appendChild(row);

        return row;
    }
    // #endregion
}