/// <reference path="../reference.js" />

class BehavioralInformationalMaterial extends Intervention {

    // #region Constructor
    //constructor(caseName) {
    //    super();
    //    this.caseName = caseName;
    //    this.caseNo = Cases.CaseNo[caseName].sort().toString();
    //}
    // #endregion

    // #region Colspan 
    getMiscColspan() {
        return 13;
    }
    // #endregion

    // #region Main Functions
    SetInterventions(intSetIds) {

        //let _iset = Extract.Helper.getEntity(Extract.EntityTypes.InterventionSets, intSetId);
        //let _srcOTHR = Extract.Helper.getSourceOthers(_iset, Extract.Groups.SOURCENAMES.OTHERS);
        //_srcOTHR.datapoints;
        let me = this;
        let caseName = me[CurrentTableObject.CaseName];
        for (let i = 0; i < intSetIds.length; i++) {
            let addB = false;
            let delB = true;
            if (intSetIds.length == 1) {
                addB = true;
                delB = false;
            } else if ((i + 1) == intSetIds.length) {
                addB = true;
                delB = true;
            }

            let intSetId = intSetIds[i];

            let mainTbl = document.getElementById(me[CurrentTableObject.TableId]);
            let tblBody = mainTbl.getElementsByTagName('tbody')[0];
            ////this.SetInterventionFields(intSetId, tblBody);
            ////this.tblBody = tblBody;
            let row = me.CreateInterventionTR(intSetId);
            //tblBody.appendChild(row);
            me.CreateInterventionFields(intSetId, row, addB, delB);
            ////let intSet = Extract.Data.InterventionSets[intSetId];
            ////let ints = Extract.Helper.getEntityListByArrayId(intSet.Interventions, Extract.EntityTypes.Interventions);
            //this.CreatePhaseFields(row, intSetId);
            //this.CreateDosageFields(row, intSetId);
            ////tblBody.appendChild(row);   

            me.SetMiscFields(intSetId, row);
        }

        //for (let intSetId of intSetIds) {

        //}
    }


    // #endregion

    // #region Interventions
    CreateInterventionTR(intSetId) {
        let row = document.createElement("tr");
        row.setAttribute(TrAttr.Class, "trCls");
        row.setAttribute(TrAttr.CaseName, this[CurrentTableObject.CaseName]);
        row.setAttribute(TrAttr.CaseNo, this[CurrentTableObject.CaseNo]);
        row.setAttribute(TrAttr.TRType, TRType.Intervention);
        row.setAttribute(TrAttr.RowIndexIntervention, intSetId);
        row.setAttribute(TrAttr.RowIndexPhase, 1);
        row.setAttribute(TrAttr.RowIndexMisc, 1);
        //row.setAttribute(TrAttr.RowIndexDosage, 1);
        let mainTbl = document.getElementById(this[CurrentTableObject.TableId]);
        let tblBody = mainTbl.getElementsByTagName('tbody')[0];
        tblBody.appendChild(row);
        return row;
    }
    CreateInterventionFields(intSetId, row, addB, delB) {
        //let cell = this.CreateTD(this.TabIndexTD(), rowIdx, ComponentList.GroupName.columnIndex, ComponentType.ExtractGroupName, "", "Total Population", "Total Population", "tdCls");
        //row.appendChild(cell);

        //cell = this.CreateTD(this.TabIndexTD(), rowIdx, ComponentList.AddInfo.columnIndex, ComponentType.ExtractAddInfo, "AddInfo", "Additional Info", "Additional Info", "tdCls");
        //row.appendChild(cell);
        let _iset = Extract.Helper.getEntity(Extract.EntityTypes.InterventionSets, intSetId);

        let cell = this.CreateTD(row, ComponentList.TreatmentTag, intSetId, this.GetDPId(_iset, ComponentList.TreatmentTag));
        //row.appendChild(cell);

        //cell = this.CreateTD(ComponentList.FixedDose, "No", "(None)");
        //row.appendChild(cell);

        cell = this.CreateTD(row, ComponentList.Medium, intSetId, this.GetDPId(_iset, ComponentList.Medium));
        //row.appendChild(cell);

        cell = this.CreateTD(row, ComponentList.MediumTitle, intSetId, this.GetDPId(_iset, ComponentList.MediumTitle));
        //row.appendChild(cell);

        cell = this.CreateTD(row, ComponentList.MediumPublisher, intSetId, this.GetDPId(_iset, ComponentList.MediumPublisher));
        //row.appendChild(cell);

        cell = this.CreateTD(row, ComponentList.MediumPublishYear, intSetId, this.GetDPId(_iset, ComponentList.MediumPublishYear));
        //row.appendChild(cell);

        cell = this.CreateTD(row, ComponentList.MediumEdition, intSetId, this.GetDPId(_iset, ComponentList.MediumEdition));
        //row.appendChild(cell);

        cell = this.CreateTD(row, ComponentList.MediumLength, intSetId, this.GetDPId(_iset, ComponentList.MediumLength));
        //row.appendChild(cell);

        cell = this.CreateTD(row, ComponentList.MediumUnit, intSetId, this.GetDPId(_iset, ComponentList.MediumUnit));
        //row.appendChild(cell);

        cell = this.CreateTD(row, ComponentList.MediumLanguage, intSetId, this.GetDPId(_iset, ComponentList.MediumLanguage));
        //row.appendChild(cell);

        cell = this.CreateTD(row, ComponentList.MediumAudience, intSetId, this.GetDPId(_iset, ComponentList.MediumAudience));
        //row.appendChild(cell);

        cell = this.CreateTD(row, ComponentList.MediumProvider, intSetId, this.GetDPId(_iset, ComponentList.MediumProvider));
        //row.appendChild(cell);

        cell = this.CreateActionTD(row, ComponentList.AddIntervention, (typeof addB == 'boolean' ? { hidden: !addB } : undefined));
        //row.appendChild(cell);

        cell = this.CreateActionTD(row, ComponentList.DeleteIntervention, (typeof delB == 'boolean' ? { hidden: !delB } : undefined));
        //row.appendChild(cell);
    }

    AddIntervention(intSetId, int) {
        //this.caseName = caseName;
        //let mainTbl = document.getElementById(this[CurrentTableObject.TableId]);
        //let tblBody = mainTbl.getElementsByTagName('tbody')[0];
        //this.tblBody = tblBody;
        let row = this.CreateInterventionTR(intSetId);
        //tblBody.appendChild(row);
        this.CreateInterventionFields(intSetId, row);
        //this.CreatePhaseFields(intSetId, int, row);
        this.CreateMiscFields(int.id, row, "");
        //this.CreateDosageFields(int, row);
    }

    DeleteIntervention(intSetId) {
        //this.caseName = caseName;
        let tBody = IUI.currentTD.closest('tbody');
        let curIRow = tBody.find(`tr[${TrAttr.RowIndexIntervention}=${intSetId}]`);
        //$(Intervention.MainTableIdJQ()).find('tbody').find(`tr[${TrAttr.RowIndexIntervention}=${RowIndexIntervention}]`).remove();

        this.DeleteDP(intSetId, curIRow.find('td'));
        curIRow.remove();

        let lstCnt = tBody.find(`tr[${TrAttr.TRType}=${TRType.Intervention}]`);

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
    DeleteInterventionButtonAfterRender(cmp, intSetId) {
        let _curTD = $(cmp.el.dom).parent('td');
        let rwLen = _curTD.closest('tbody').find(`tr[${TrAttr.TRType}=${TRType.Intervention}]`).length;
        rwLen > 1 ? cmp.show() : cmp.hide();
    }
    // #endregion
    
    // #region Misc
    SetMiscFields(intSetId, row) {
        let _iset = Extract.Helper.getEntity(Extract.EntityTypes.InterventionSets, intSetId);
        let _ints = Extract.Helper.getEntityListByArrayId(_iset.Interventions, Extract.EntityTypes.Interventions);

        if (_ints.length > 0) {
            //$(row).attr(TrAttr.RowIndexPhase, _ints[0].id);
            let dpList = Extract.Helper.getSourceOthers(_ints[0], ComponentList.MiscName['dpSource']).Datapoints;
            //this.SetMiscFields(intSetId, int.id, _src.Datapoints, row, tblBody);
            //let mainTbl = document.getElementById(this[CurrentTableObject.TableId]);
            //let tblBody = mainTbl.getElementsByTagName('tbody')[0];
            for (let i = 0; i < dpList.length; i++) {
                let addB = false;
                let delB = true;
                if (dpList.length == 1) {
                    addB = true;
                    delB = false;
                } else if ((i + 1) == dpList.length) {
                    addB = true;
                    delB = true;
                }

                if (i == 0) {
                    //let cell = this.CreateTD(row, ComponentList.MiscName, intId, dpList[i].id);
                    ////row.appendChild(cell);

                    //cell = this.CreateTD(row, ComponentList.MiscDesc, intId, dpList[i].id);
                    ////row.appendChild(cell);

                    //cell = this.CreateActionTD(row, ComponentList.AddMisc);
                    ////row.appendChild(cell);

                    //cell = this.CreateActionTD(row, ComponentList.DeleteMisc);
                    ////row.appendChild(cell);
                    this.CreateMiscFields(_ints[0].id, row, dpList[i].id, addB, delB);
                } else {
                    let _rowMisc = this.CreateMiscTR(intSetId, _ints[0].id, (i + 1));
                    //let cell = this.CreateTD(_rowMisc, ComponentList.MiscName, intId, dpList[i].id);
                    ////_rowMisc.appendChild(cell);

                    //cell = this.CreateTD(_rowMisc, ComponentList.MiscDesc, intId, dpList[i].id);
                    ////_rowMisc.appendChild(cell);

                    //cell = this.CreateActionTD(_rowMisc, ComponentList.AddMisc);
                    ////_rowMisc.appendChild(cell);

                    //cell = this.CreateActionTD(_rowMisc, ComponentList.DeleteMisc);
                    ////_rowMisc.appendChild(cell);
                    this.CreateMiscFields(_ints[0].id, _rowMisc, dpList[i].id, addB, delB);
                    //tblBody.appendChild(_rowMisc);
                }
            }

            if (dpList.length == 0) {
                this.CreateMiscFields(_ints[0].id, row, "", true, false);
            }
        }
    }

    CreateMiscTR(intSetId, intId, RowIndexMisc, isAppend = true) {
        let row = document.createElement("tr");
        row.setAttribute(TrAttr.Class, "trCls");
        row.setAttribute(TrAttr.CaseName, this[CurrentTableObject.CaseName]);
        row.setAttribute(TrAttr.CaseNo, this[CurrentTableObject.CaseNo]);
        row.setAttribute(TrAttr.TRType, TRType.Misc);
        row.setAttribute(TrAttr.RowIndexIntervention, intSetId);
        row.setAttribute(TrAttr.RowIndexPhase, intId);
        row.setAttribute(TrAttr.RowIndexMisc, RowIndexMisc);

        let cell = this.CreateEmptyTD(this.getMiscColspan());
        row.appendChild(cell);
        //this.CreateMiscFields(row);
        //this.tblBody.appendChild(row);
        if (isAppend) {
            let mainTbl = document.getElementById(this[CurrentTableObject.TableId]);
            let tblBody = mainTbl.getElementsByTagName('tbody')[0];
            tblBody.appendChild(row);
        }
        return row;
    }
    CreateMiscFields(intId, row, dpId, addB, delB) {

        $(row).attr(TrAttr.RowIndexPhase, intId);

        let _dpId = this.CreateTD(row, ComponentList.MiscName, intId, dpId);
        //row.appendChild(cell);

        this.CreateTD(row, ComponentList.MiscDesc, intId, _dpId);
        //row.appendChild(cell);

        this.CreateActionTD(row, ComponentList.AddMisc, (typeof addB == 'boolean' ? { hidden: !addB } : undefined));
        //row.appendChild(cell);

        this.CreateActionTD(row, ComponentList.DeleteMisc, (typeof delB == 'boolean' ? { hidden: !delB } : undefined));
        //row.appendChild(cell);

        //cell = this.CreateEmptyTD(18);
        //row.appendChild(cell);
    }
    AddMisc(intSetId, intId, RowIndexMisc) {
        let row = this.CreateMiscTR(intSetId, intId, RowIndexMisc, false);
        this.CreateMiscFields(intId, row, "");
        IUI.currentTD.parent('tr').after(row);
    }
    DeleteMisc(intSetId, intId) {
        let tBody = IUI.currentTD.closest('tbody');
        let curMRow = IUI.currentTD.parent('tr');

        this.DeleteDP(intId, curMRow.find('td'));

        curMRow.remove();

        let lstCnt = tBody.find(`tr[${TrAttr.TRType}=${TRType.Misc}]tr[${TrAttr.RowIndexIntervention}=${intSetId}]tr[${TrAttr.RowIndexPhase}=${intId}]`);
        if (lstCnt.length != 0) {
            let lstTdAdd = lstCnt.find(`td[config='AddMisc']`);

            if (lstTdAdd.length > 0 && lstTdAdd[0].children.length > 0) {
                let btnAdd = Ext.getCmp(lstTdAdd.eq(lstTdAdd.length - 1)[0].children[0].id);
                if (btnAdd) {
                    btnAdd.show();
                }
            }
        } else {
            let lstCnt = tBody.find(`tr[${TrAttr.TRType}=${TRType.Phase}]tr[${TrAttr.RowIndexIntervention}=${intSetId}]tr[${TrAttr.RowIndexPhase}=${intId}]`);
            if (lstCnt.length == 0) {
                lstCnt = tBody.find(`tr[${TrAttr.TRType}=${TRType.Intervention}]tr[${TrAttr.RowIndexIntervention}=${intSetId}]tr[${TrAttr.RowIndexPhase}=${intId}]`)
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
    DeleteMiscButtonAfterRender(cmp, intSetId, intId, RowIndexMisc) {
        let _curTD = $(cmp.el.dom).parent('td');
        let rwLen = _curTD.closest('tbody').find(`tr[${TrAttr.TRType}=${TRType.Misc}]tr[${TrAttr.RowIndexIntervention}=${intSetId}]tr[${TrAttr.RowIndexPhase}=${intId}]tr[${TrAttr.RowIndexMisc}=${RowIndexMisc}]`).length;
        rwLen > 0 ? cmp.show() : cmp.hide();
    }
    // #endregion
    
    //// #region Therapy---Behavioral---Informational Material
    //InformationalMaterial(rowNo) {
    //    //Case 4, Case 5
    //    let mainTbl = document.getElementById(Intervention.MainTableId());
    //    let tblBody = mainTbl.getElementsByTagName('tbody')[0];
    //    //let CaseName = Cases.CaseName.Therapy_BehavioralInformationalMaterial;

    //    let row = this.CreateInterventionTR(rowNo);

    //    this.CreateInterventionFields(row);
    //    this.CreateMiscFields(row);

    //    tblBody.appendChild(row);

    //    return row;
    //}
    //// #endregion
}