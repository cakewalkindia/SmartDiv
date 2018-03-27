/// <reference path="../reference.js" />

class DeviceSurgery extends Intervention {

    // #region Constructor
    constructor(caseName) {
        super();
        this.caseName = caseName;
        this.caseNo = Cases.CaseNo[caseName].sort().toString();
    }
    // #endregion

    // #region Colspan 
    getPhaseColspan() {     
        let _colSpan = 6;
        if (this.caseName == Cases.CaseName.Therapy_ProcedureSurgery) {
            _colSpan = 5;
        }
        return _colSpan;
    }

    getMiscColspan() {
        let _colSpan = 17;
        if (this.caseName == Cases.CaseName.Therapy_ProcedureSurgery) {
            _colSpan = 16;
        }
        return _colSpan;
    }

    getDosageColspan() {
        let _colSpan = 21;
        if (this.caseName == Cases.CaseName.Therapy_ProcedureSurgery) {
            _colSpan = 20;
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

        let cell = this.CreateTD(ComponentList.Intervention.TreatmentTag);
        row.appendChild(cell);

        //cell = this.CreateTD(ComponentList.Intervention.FixedDose, "No", "(None)");
        //row.appendChild(cell);

        cell = this.CreateTD(ComponentList.Intervention.Intervention);
        row.appendChild(cell);

        cell = this.CreateTD(ComponentList.Intervention.Manufacturer);
        row.appendChild(cell);

        if (this.caseName == Cases.CaseName.Therapy_Device) {
            cell = this.CreateTD(ComponentList.Intervention.Brand);
            row.appendChild(cell);
        }

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

        cell = this.CreateTD(ComponentList.Phase.DrugRequiredDrugs);
        row.appendChild(cell);

        cell = this.CreateTD(ComponentList.Phase.DrugTechnique);
        row.appendChild(cell);

        cell = this.CreateTD(ComponentList.Phase.DrugNotes);
        row.appendChild(cell);

        cell = this.CreateTD(ComponentList.Phase.DrugSurgeonsExpertiseLevel);
        row.appendChild(cell);

        cell = this.CreateTD(ComponentList.Phase.DrugRouteofEntry);
        row.appendChild(cell);

        cell = this.CreateTD(ComponentList.Phase.DrugAnesthesia);
        row.appendChild(cell);

        cell = this.CreateTD(ComponentList.Phase.DrugAnesthesiaDosage);
        row.appendChild(cell);

        cell = this.CreateTD(ComponentList.Phase.DrugAnesthesiaDosageUnit);
        row.appendChild(cell);

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

        //cell = this.CreateEmptyTD(6);
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
        //let cell = this.CreateTD(ComponentList.Dosage.FrequencyInfo, "Frequency Info", "Frequency Info");
        //row.appendChild(cell);

        let cell = this.CreateTD(ComponentList.Dosage.Duration);
        row.appendChild(cell);

        cell = this.CreateTD(ComponentList.Dosage.DurationUnit);
        row.appendChild(cell);

        cell = this.CreateTD(ComponentList.Dosage.DurationInfo);
        row.appendChild(cell);

        //cell = this.CreateTD(ComponentList.Dosage.TimepointInfo, "Timepoint Info", "Timepoint Info");
        //row.appendChild(cell);

        cell = this.CreateActionTD(ComponentList.Dosage.AddDosage);
        row.appendChild(cell);

        cell = this.CreateActionTD(ComponentList.Dosage.DeleteDosage);
        row.appendChild(cell);
    }
    AddDosage(curTD, TRowType, RowIndexIntervention, RowIndexPhase, RowIndexDosage) {
        //let row = this.CreateDosageTR(RowIndexIntervention, RowIndexPhase, RowIndexDosage);
        //this.CreateDosageFields(row);
        //let lstCnt = $(Intervention.MainTableIdJQ()).find('tbody').find(`tr[${TrAttr.TRType}=${TRType}]tr[${TrAttr.RowIndexIntervention}=${RowIndexIntervention}]tr[${TrAttr.RowIndexPhase}=${RowIndexPhase}]:last`);
        //if (lstCnt.length == 0) {
        //    lstCnt = $(Intervention.MainTableIdJQ()).find('tbody').find(`tr[${TrAttr.TRType}=${TRType.FixedDose}]tr[${TrAttr.RowIndexIntervention}=${RowIndexIntervention}]:last`);
        //}
        //if (lstCnt.length > 0) {
        //    lstCnt.after(row);
        //}
        let row = this.CreateDosageTR(RowIndexIntervention, RowIndexPhase, RowIndexDosage);
        this.CreateDosageFields(row);
        let lstCnt = [];
        if (TRowType == TRType.Intervention || TRowType == TRType.Phase) {
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

    // #region Therapy---Device
    Device(rowNo) {
        //Case 1, Case 7

        let mainTbl = document.getElementById(Intervention.MainTableId());
        let tblBody = mainTbl.getElementsByTagName('tbody')[0];
        //let CaseName = Cases.CaseName.Therapy_Device;

        let row = this.CreateInterventionTR(rowNo);

        this.CreateInterventionFields(row);
        this.CreatePhaseFields(row);
        this.CreateDosageFields(row);

        tblBody.appendChild(row);

        return row;
    }
    // #endregion

    // #region Therapy---Procedure/Surgery
    ProcedureSurgery(rowNo) {
        //Case 1, Case 11

        let mainTbl = document.getElementById(Intervention.MainTableId());
        let tblBody = mainTbl.getElementsByTagName('tbody')[0];
        //let CaseName = Cases.CaseName.Therapy_ProcedureSurgery;

        let row = this.CreateInterventionTR(rowNo);

        this.CreateInterventionFields(row);
        this.CreatePhaseFields(row);
        this.CreateDosageFields(row);

        tblBody.appendChild(row);

        return row;
    }
    // #endregion
}