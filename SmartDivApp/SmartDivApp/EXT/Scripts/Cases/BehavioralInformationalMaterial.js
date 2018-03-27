/// <reference path="../reference.js" />

class BehavioralInformationalMaterial extends Intervention {

    // #region Constructor
    constructor(caseName) {
        super();
        this.caseName = caseName;
        this.caseNo = Cases.CaseNo[caseName].sort().toString();
    }
    // #endregion

    // #region Colspan 
    getMiscColspan() {
        return 13;
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

        cell = this.CreateTD(ComponentList.Intervention.Medium);
        row.appendChild(cell);

        cell = this.CreateTD(ComponentList.Intervention.MediumTitle);
        row.appendChild(cell);

        cell = this.CreateTD(ComponentList.Intervention.MediumPublisher);
        row.appendChild(cell);

        cell = this.CreateTD(ComponentList.Intervention.MediumPublishYear);
        row.appendChild(cell);

        cell = this.CreateTD(ComponentList.Intervention.MediumEdition);
        row.appendChild(cell);

        cell = this.CreateTD(ComponentList.Intervention.MediumLength);
        row.appendChild(cell);

        cell = this.CreateTD(ComponentList.Intervention.MediumUnit);
        row.appendChild(cell);

        cell = this.CreateTD(ComponentList.Intervention.MediumLanguage);
        row.appendChild(cell);

        cell = this.CreateTD(ComponentList.Intervention.MediumAudience);
        row.appendChild(cell);

        cell = this.CreateTD(ComponentList.Intervention.MediumProvider);
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
    
    // #region Therapy---Behavioral---Informational Material
    InformationalMaterial(rowNo) {
        //Case 4, Case 5
        let mainTbl = document.getElementById(Intervention.MainTableId());
        let tblBody = mainTbl.getElementsByTagName('tbody')[0];
        //let CaseName = Cases.CaseName.Therapy_BehavioralInformationalMaterial;

        let row = this.CreateInterventionTR(rowNo);

        this.CreateInterventionFields(row);
        this.CreateMiscFields(row);

        tblBody.appendChild(row);

        return row;
    }
    // #endregion
}