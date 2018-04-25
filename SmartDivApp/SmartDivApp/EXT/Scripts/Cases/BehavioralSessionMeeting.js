/// <reference path="../reference.js" />

class BehavioralSessionMeeting extends Intervention {

    // #region Constructor
    //constructor(caseName) {
    //    super();
    //    this.caseName = caseName;
    //    this.caseNo = Cases.CaseNo[caseName].sort().toString();
    //}
    // #endregion

    // #region Colspan 
    getPhaseColspan() {
        return 7;
    }

    getMiscColspan() {
        return 24;
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

            me.SetPhaseFields(intSetId, row);
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

        cell = this.CreateTD(row, ComponentList.Intervention, intSetId, this.GetDPId(_iset, ComponentList.Intervention));
        //row.appendChild(cell);

        cell = this.CreateTD(row, ComponentList.ManualizedTreatment, intSetId, this.GetDPId(_iset, ComponentList.ManualizedTreatment));
        //row.appendChild(cell);

        cell = this.CreateTD(row, ComponentList.OtherTreatmentName, intSetId, this.GetDPId(_iset, ComponentList.OtherTreatmentName));
        //row.appendChild(cell);

        cell = this.CreateTD(row, ComponentList.ManualInfo, intSetId, this.GetDPId(_iset, ComponentList.ManualInfo));
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
        this.CreatePhaseFields(intSetId, int, row);
        this.CreateMiscFields(int.id, row, "");        
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

    // #region Phase
    SetPhaseFields(intSetId, row) {

        let _iset = Extract.Helper.getEntity(Extract.EntityTypes.InterventionSets, intSetId);
        let _ints = Extract.Helper.getEntityListByArrayId(_iset.Interventions, Extract.EntityTypes.Interventions);

        //this.CreatePhaseFields(intSetId, row);
        //let mainTbl = document.getElementById(this[CurrentTableObject.TableId]);
        //let tblBody = mainTbl.getElementsByTagName('tbody')[0];
        for (let i = 0; i < _ints.length; i++) {
            let addB = false;
            let delB = true;
            if (_ints.length == 1) {
                addB = true;
                delB = false;
            } else if ((i + 1) == _ints.length) {
                addB = true;
                delB = true;
            }

            if (i == 0) {
                //$(row).attr(TrAttr.RowIndexPhase, _ints[i].id);
                this.CreatePhaseFields(intSetId, _ints[i], row, addB, delB);
                this.SetMiscFields(intSetId, _ints[i], row);                
            } else {
                let _newPRow = this.CreatePhaseTR(intSetId, _ints[i].id);
                this.CreatePhaseFields(intSetId, _ints[i], _newPRow, addB, delB);
                this.SetMiscFields(intSetId, _ints[i], _newPRow);                
                //tblBody.appendChild(_newPRow);
            }

        }
    }

    CreatePhaseTR(intSetId, intId, isAppend = true) {
        let row = document.createElement("tr");
        row.setAttribute(TrAttr.Class, "trCls");
        row.setAttribute(TrAttr.CaseName, this[CurrentTableObject.CaseName]);
        row.setAttribute(TrAttr.CaseNo, this[CurrentTableObject.CaseNo]);
        row.setAttribute(TrAttr.TRType, TRType.Phase);
        row.setAttribute(TrAttr.RowIndexIntervention, intSetId);
        row.setAttribute(TrAttr.RowIndexPhase, intId);
        //row.setAttribute(TrAttr.RowIndexMisc, 1);
        //row.setAttribute(TrAttr.RowIndexDosage, 1);

        let cell = this.CreateEmptyTD(this.getPhaseColspan());
        row.appendChild(cell);

        //this.CreatePhaseFields(row);
        //this.CreateDosageFields(row);
        if (isAppend) {
            let mainTbl = document.getElementById(this[CurrentTableObject.TableId]);
            let tblBody = mainTbl.getElementsByTagName('tbody')[0];
            tblBody.appendChild(row);
        }
        return row;
    }

    CreatePhaseFields(intSetId, int, row, addB, delB) {

        $(row).attr(TrAttr.RowIndexPhase, int.id);

        let cell = this.CreateTD(row, ComponentList.StudyPhase, int.id, this.GetDPId(int, ComponentList.Schedule));
        //row.appendChild(cell);

        cell = this.CreateTD(row, ComponentList.Schedule, int.id, this.GetDPId(int, ComponentList.Schedule));
        //row.appendChild(cell);

        cell = this.CreateTD(row, ComponentList.Provider, int.id, this.GetDPId(int, ComponentList.Provider));
        //row.appendChild(cell);

        cell = this.CreateTD(row, ComponentList.SessionFrequency, int.id, this.GetDPId(int, ComponentList.SessionFrequency));
        //row.appendChild(cell);

        cell = this.CreateTD(row, ComponentList.SessionFrequencyUnit, int.id, this.GetDPId(int, ComponentList.SessionFrequencyUnit));
        //row.appendChild(cell);

        cell = this.CreateTD(row, ComponentList.SessionDuration, int.id, this.GetDPId(int, ComponentList.SessionDuration));
        //row.appendChild(cell);

        cell = this.CreateTD(row, ComponentList.SessionDurationUnit, int.id, this.GetDPId(int, ComponentList.SessionDurationUnit));
        //row.appendChild(cell);

        cell = this.CreateTD(row, ComponentList.TotalSessions, int.id, this.GetDPId(int, ComponentList.TotalSessions));
        //row.appendChild(cell);

        cell = this.CreateTD(row, ComponentList.TotalSessionsUnit, int.id, this.GetDPId(int, ComponentList.TotalSessionsUnit));
        //row.appendChild(cell);

        cell = this.CreateTD(row, ComponentList.TotalDuration, int.id, this.GetDPId(int, ComponentList.TotalDuration));
        //row.appendChild(cell);

        cell = this.CreateTD(row, ComponentList.TotalDurationUnit, int.id, this.GetDPId(int, ComponentList.TotalDurationUnit));
        //row.appendChild(cell);

        cell = this.CreateTD(row, ComponentList.ExperienceCertification, int.id, this.GetDPId(int, ComponentList.ExperienceCertification));
        //row.appendChild(cell);

        cell = this.CreateTD(row, ComponentList.TypeOfCounseling, int.id, this.GetDPId(int, ComponentList.TypeOfCounseling));
        //row.appendChild(cell);

        cell = this.CreateTD(row, ComponentList.InterventionObjective, int.id, this.GetDPId(int, ComponentList.InterventionObjective));
        //row.appendChild(cell);

        cell = this.CreateTD(row, ComponentList.TopicCovered, int.id, this.GetDPId(int, ComponentList.TopicCovered));
        //row.appendChild(cell);

        cell = this.CreateActionTD(row, ComponentList.AddPhase, (typeof addB == 'boolean' ? { hidden: !addB } : undefined));
        //row.appendChild(cell);

        cell = this.CreateActionTD(row, ComponentList.DeletePhase, (typeof delB == 'boolean' ? { hidden: !delB } : undefined));
        //row.appendChild(cell);

        //cell = this.CreateTD(ComponentList.MiscName);
        ////row.appendChild(cell);

        //cell = this.CreateTD(ComponentList.MiscDesc);
        ////row.appendChild(cell);

        //cell = this.CreateActionTD(ComponentList.AddMisc);
        ////row.appendChild(cell);

        //cell = this.CreateActionTD(ComponentList.DeleteMisc);
        ////row.appendChild(cell);
    }
    AddPhase(intSetId, int) {
        let row = this.CreatePhaseTR(intSetId, int.id, false);
        this.CreatePhaseFields(intSetId, int, row);
        this.CreateMiscFields(int.id, row, "");
        let lstCnt = IUI.currentTD.closest('tbody').find(`tr[${TrAttr.RowIndexIntervention}=${intSetId}]:last`);
        if (lstCnt.length > 0) {
            lstCnt.after(row);
        }
    }
    DeletePhase(intSetId, intId) {
        //this.caseName = caseName;
        let tBody = IUI.currentTD.closest('tbody');
        let curPRow = tBody.find(`tr[${TrAttr.RowIndexIntervention}=${intSetId}]tr[${TrAttr.RowIndexPhase}=${intId}]`);
        //$(Intervention.MainTableIdJQ()).find('tbody').find(`tr[${TrAttr.TRType}=${TRType.Dosage}]tr[${TrAttr.RowIndexIntervention}=${RowIndexIntervention}]tr[${TrAttr.RowIndexPhase}=${RowIndexPhase}]`).remove();
        //$(Intervention.MainTableIdJQ()).find('tbody').find(`tr[${TrAttr.TRType}=${TRType.Misc}]tr[${TrAttr.RowIndexIntervention}=${RowIndexIntervention}]tr[${TrAttr.RowIndexPhase}=${RowIndexPhase}]`).remove();
        //$(Intervention.MainTableIdJQ()).find('tbody').find(`tr[${TrAttr.TRType}=${TRType.Phase}]tr[${TrAttr.RowIndexIntervention}=${RowIndexIntervention}]tr[${TrAttr.RowIndexPhase}=${RowIndexPhase}]`).remove();

        this.DeleteDP(intId, curPRow.find('td'));
        curPRow.remove();

        let lstCnt = tBody.find(`tr[${TrAttr.TRType}=${TRType.Phase}]tr[${TrAttr.RowIndexIntervention}=${intSetId}]`);

        if (lstCnt.length == 0) {
            lstCnt = tBody.find(`tr[${TrAttr.TRType}=${TRType.Intervention}]tr[${TrAttr.RowIndexIntervention}=${intSetId}]`);
        }

        if (lstCnt.length != 0) {
            let lstTdAdd = lstCnt.find(`td[config='AddPhase']`);

            if (lstTdAdd.length > 0 && lstTdAdd[0].children.length > 0) {
                let btnAdd = Ext.getCmp(lstTdAdd.eq(lstTdAdd.length - 1)[0].children[0].id);
                if (btnAdd) {
                    btnAdd.show();
                }
            }
        } else {
            let lstCnt = tBody.find(`tr[${TrAttr.TRType}=${TRType.Intervention}]tr[${TrAttr.RowIndexIntervention}=${intSetId}]`);
            let lstTdAdd = lstCnt.find(`td[config='AddPhase']`);

            if (lstTdAdd.length > 0 && lstTdAdd[0].children.length > 0) {
                let btnAdd = Ext.getCmp(lstTdAdd.eq(lstTdAdd.length - 1)[0].children[0].id);
                if (btnAdd) {
                    btnAdd.show();
                }
            }
        }
    }
    DeletePhaseButtonAfterRender(cmp, intSetId, intId) {
        //let _rowIdx = _curTD.parent('tr').attr(TdAttr.RowIndex);
        let _curTD = $(cmp.el.dom).parent('td');
        let rwLen = _curTD.closest('tbody').find(`tr[${TrAttr.TRType}=${TRType.Phase}]tr[${TrAttr.RowIndexIntervention}=${intSetId}]tr[${TrAttr.RowIndexPhase}=${intId}]`).length;
        rwLen > 0 ? cmp.show() : cmp.hide();
    }
    // #endregion

    // #region Misc
    SetMiscFields(intSetId, int, row) {
        let dpList = Extract.Helper.getSourceOthers(int, ComponentList.MiscName['dpSource']).Datapoints;
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
                this.CreateMiscFields(int.id, row, dpList[i].id, addB, delB);
            } else {
                let _rowMisc = this.CreateMiscTR(intSetId, int.id, (i + 1));
                //let cell = this.CreateTD(_rowMisc, ComponentList.MiscName, intId, dpList[i].id);
                ////_rowMisc.appendChild(cell);

                //cell = this.CreateTD(_rowMisc, ComponentList.MiscDesc, intId, dpList[i].id);
                ////_rowMisc.appendChild(cell);

                //cell = this.CreateActionTD(_rowMisc, ComponentList.AddMisc);
                ////_rowMisc.appendChild(cell);

                //cell = this.CreateActionTD(_rowMisc, ComponentList.DeleteMisc);
                ////_rowMisc.appendChild(cell);
                this.CreateMiscFields(int.id, _rowMisc, dpList[i].id, addB, delB);
                //tblBody.appendChild(_rowMisc);
            }
        }

        if (dpList.length == 0) {
            this.CreateMiscFields(int.id, row, "", true, false);
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

    //// #region Therapy---Behavioral---Session/Meeting
    //SessionMeeting(rowNo) {
    //    //Case 4, Case 6
    //    let mainTbl = document.getElementById(Intervention.MainTableId());
    //    let tblBody = mainTbl.getElementsByTagName('tbody')[0];
    //    //let CaseName = Cases.CaseName.Therapy_BehavioralSessionMeeting;

    //    let row = this.CreateInterventionTR(rowNo);

    //    this.CreateInterventionFields(row);
    //    this.CreatePhaseFields(row);

    //    tblBody.appendChild(row);

    //    return row;
    //}
    //// #endregion
}