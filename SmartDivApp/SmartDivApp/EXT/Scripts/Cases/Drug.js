/// <reference path="../reference.js" />

class Drug extends Intervention {

    // #region Constructor
    //constructor(caseName) {
    //    super();
    //    this.caseName = caseName;
    //    this.caseNo = Cases.CaseNo[caseName].sort().toString();
    //}
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

            if (caseName == Cases.CaseName.Therapy_Drug || caseName == Cases.CaseName.Therapy_CancerIntervention) {
                me.SetFixedDoseFields(intSetId, tblBody);
            }

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
        row.setAttribute(TrAttr.RowIndexDosage, 1);
        //this.tblBody.appendChild(row);
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

        //let caseNo = $(row).attr(TrAttr.CaseNo);
        let _iset = Extract.Helper.getEntity(Extract.EntityTypes.InterventionSets, intSetId);

        let cell = this.CreateTD(row, ComponentList.TreatmentTag, intSetId, this.GetDPId(_iset, ComponentList.TreatmentTag));
        //row.appendChild(cell);

        if (this.caseName == Cases.CaseName.Therapy_Drug || this.caseName == Cases.CaseName.Therapy_CancerIntervention) {
            cell = this.CreateTD(row, ComponentList.FixedDose, intSetId, this.GetDPId(_iset, ComponentList.FixedDose));
            //row.appendChild(cell);
        }

        let _dpValFD = this.GetDPValue(_iset, ComponentList.FixedDose);        

        cell = this.CreateTD(row, ComponentList.Intervention, intSetId, this.GetDPId(_iset, ComponentList.Intervention), (_dpValFD == 'No' ? "" : "trDisplayNone"));
        //row.appendChild(cell);

        if (this.caseName == Cases.CaseName.Therapy_Drug || this.caseName == Cases.CaseName.Therapy_CancerIntervention) {

            cell = this.CreateTD(row, ComponentList.FixedDoseCombinationName, intSetId, this.GetDPId(_iset, ComponentList.FixedDoseCombinationName), (_dpValFD == 'Yes' ? "" : "trDisplayNone"));
            //row.appendChild(cell);
        }

        cell = this.CreateTD(row, ComponentList.Manufacturer, intSetId, this.GetDPId(_iset, ComponentList.Manufacturer));
        //row.appendChild(cell);

        cell = this.CreateTD(row, ComponentList.Brand, intSetId, this.GetDPId(_iset, ComponentList.Brand));
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
        let row1 = this.CreateFixedDoseFields(intSetId, 1);
        //tblBody.appendChild(row1);
        let row2 = this.CreateFixedDoseFields(intSetId, 2);
        //tblBody.appendChild(row2);      
        this.CreatePhaseFields(intSetId, int, row);
        this.CreateMiscFields(int.id, row, "");
        this.CreateDosageFields(int, row);
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

    // #region Fixed Dose
    SetFixedDoseFields(intSetId) {
        let _iset = Extract.Helper.getEntity(Extract.EntityTypes.InterventionSets, intSetId);
        let _src = Extract.Helper.getSourceOthers(_iset, Extract.Groups.SOURCENAMES.FIXED_DOSE_COMBINATION);

        let dpList = Utils.rowwiseDPList(_src.Datapoints);
        let FDVal = this.GetDPValue(_iset, ComponentList.FixedDose);
        let trClass = "trCls";
        for (let i = 0; i < dpList.length; i++) {
            //for (let j = 0; j < dpList[i].length; j++) {

            let rwInt = dpList[i][0].Row;
            if (FDVal == 'No') {
                trClass += " trDisplayNone";
            }

            let rowFD = this.CreateFixedDoseTR(intSetId, rwInt, trClass);

            let cell = this.CreateTD(rowFD, ComponentList.FixedDoseIntervention, intSetId, this.GetDPfromDPList(dpList[i], ComponentList.FixedDoseConcentration["dpName"]).id);
            //row.appendChild(cell);

            cell = this.CreateTD(rowFD, ComponentList.FixedDoseConcentration, intSetId, this.GetDPfromDPList(dpList[i], ComponentList.FixedDoseConcentration["dpName"]).id);
            //row.appendChild(cell);

            cell = this.CreateTD(rowFD, ComponentList.FixedDoseUnit, intSetId, this.GetDPfromDPList(dpList[i], ComponentList.FixedDoseUnit["dpName"]).id);
            //row.appendChild(cell);

            cell = this.CreateActionTD(rowFD, ComponentList.AddFixedDose, { hidden: (i == 0 ? true : false) });
            //row.appendChild(cell);

            cell = this.CreateActionTD(rowFD, ComponentList.DeleteFixedDose, { hidden: true });
            //row.appendChild(cell);
            //}

            //tblBody.appendChild(rowFD);
        }
    }

    CreateFixedDoseTR(intSetId, RowIndexFixedDose, trClass) {
        let row = document.createElement("tr");
        if (typeof trClass === "undefined") {
            trClass = "trCls";
        }
        row.setAttribute(TrAttr.Class, trClass);
        row.setAttribute(TrAttr.CaseName, this[CurrentTableObject.CaseName]);
        row.setAttribute(TrAttr.CaseNo, this[CurrentTableObject.CaseNo]);
        row.setAttribute(TrAttr.TRType, TRType.FixedDose);
        row.setAttribute(TrAttr.RowIndexIntervention, intSetId);
        row.setAttribute(TrAttr.RowIndexFixedDose, RowIndexFixedDose);

        let cell = this.CreateEmptyTD(this.getFixedDoseColspan());
        row.appendChild(cell);

        //row.setAttribute(TrAttr.RowIndexPhase, 1);
        //row.setAttribute(TrAttr.RowIndexMisc, 1);
        //row.setAttribute(TrAttr.RowIndexDosage, 1);
        //this.tblBody.appendChild(row);
        //if (isSetValue) {
            let mainTbl = document.getElementById(this[CurrentTableObject.TableId]);
            let tblBody = mainTbl.getElementsByTagName('tbody')[0];
            //tblBody.appendChild(row);
            let lstCnt = $(tblBody).find(`tr[${TrAttr.TRType}=${TRType.FixedDose}]tr[${TrAttr.RowIndexIntervention}=${intSetId}]:last`);
            if (lstCnt.length == 0) {
                lstCnt = $(tblBody).find(`tr[${TrAttr.TRType}=${TRType.Intervention}]tr[${TrAttr.RowIndexIntervention}=${intSetId}]:last`);
            }
            if (lstCnt.length > 0) {
                lstCnt.after(row);
            }
        //}
        return row;
    }
    CreateFixedDoseFields(intSetId, rowNo) {
        let _iset = Extract.Helper.getEntity(Extract.EntityTypes.InterventionSets, intSetId);
        let FDVal = this.GetDPValue(_iset, ComponentList.FixedDose);
        let trClass = "trCls";
        
        if (FDVal == 'No') {
            trClass += " trDisplayNone";
        }

        let rowFD = this.CreateFixedDoseTR(intSetId, rowNo, trClass);

        this.CreateTD(rowFD, ComponentList.FixedDoseIntervention, intSetId, "");

        this.CreateTD(rowFD, ComponentList.FixedDoseConcentration, intSetId, "");

        this.CreateTD(rowFD, ComponentList.FixedDoseUnit, intSetId, "");

        this.CreateActionTD(rowFD, ComponentList.AddFixedDose, { hidden: (rowNo < 2 ? true : false) });

        this.CreateActionTD(rowFD, ComponentList.DeleteFixedDose, { hidden: true });
        
        return rowFD;
    }

    AddFixedDose(intSetId, RowIndexFixedDose) {
        
        //this.caseName = caseName;
        //let mainTbl = document.getElementById(tableId);
        //let tblBody = mainTbl.getElementsByTagName('tbody')[0];
        //this.tblBody = tblBody;
        //let row = this.CreateFixedDoseTR(intSetId, RowIndexFixedDose);
        let rowFD = this.CreateFixedDoseFields(intSetId, RowIndexFixedDose);
        //let lstCnt = IUI.currentTD.closest('tbody').find(`tr[${TrAttr.TRType}=${TRType.FixedDose}]tr[${TrAttr.RowIndexIntervention}=${intSetId}]:last`);

        //if (lstCnt.length > 0) {
        //    lstCnt.after(rowFD);
        //}
    }
    DeleteFixedDose(intSetId, RowIndexFixedDose) {
        
        let tBody = IUI.currentTD.closest('tbody');
        let curFDRow = tBody.find(`tr[${TrAttr.TRType}=${TRType.FixedDose}]tr[${TrAttr.RowIndexIntervention}=${intSetId}]tr[${TrAttr.RowIndexFixedDose}=${RowIndexFixedDose}]`);

        this.DeleteDP(intSetId, curFDRow.find('td'));
        curFDRow.remove();

        let lstCnt = tBody.find(`tr[${TrAttr.TRType}=${TRType.FixedDose}]tr[${TrAttr.RowIndexIntervention}=${intSetId}]`);

        if (lstCnt.length != 0) {
            let lstTdAdd = lstCnt.find(`td[config='AddFixedDose']`);

            if (lstTdAdd.length > 0 && lstTdAdd[0].children.length > 0) {
                let btnAdd = Ext.getCmp(lstTdAdd.eq(lstTdAdd.length - 1)[0].children[0].id);
                if (btnAdd) {
                    btnAdd.show();
                }
            }
        } else {
            let lstCnt = tBody.find(`tr[${TrAttr.TRType}=${TRType.Intervention}]tr[${TrAttr.RowIndexIntervention}=${intSetId}]`);
            let lstTdAdd = lstCnt.find(`td[config='AddFixedDose']`);

            if (lstTdAdd.length > 0 && lstTdAdd[0].children.length > 0) {
                let btnAdd = Ext.getCmp(lstTdAdd.eq(lstTdAdd.length - 1)[0].children[0].id);
                if (btnAdd) {
                    btnAdd.show();
                }
            }
        }
    }
    DeleteFixedDoseButtonAfterRender(cmp, intSetId) {
        let _curTD = $(cmp.el.dom).parent('td');
        let rwLen = _curTD.closest('tbody').find(`tr[${TrAttr.TRType}=${TRType.FixedDose}]tr[${TrAttr.RowIndexIntervention}=${intSetId}]`).length;
        rwLen > 2 ? cmp.show() : cmp.hide();
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
                this.SetDosageFields(intSetId, _ints[i], row);
            } else {
                let _newPRow = this.CreatePhaseTR(intSetId, _ints[i].id);
                this.CreatePhaseFields(intSetId, _ints[i], _newPRow, addB, delB);
                this.SetMiscFields(intSetId, _ints[i], _newPRow);
                this.SetDosageFields(intSetId, _ints[i], _newPRow);
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
        //this.tblBody.appendChild(row);
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

        cell = this.CreateTD(row, ComponentList.Route, int.id, this.GetDPId(int, ComponentList.Route));
        //row.appendChild(cell);

        cell = this.CreateTD(row, ComponentList.Provider, int.id, this.GetDPId(int, ComponentList.Provider));
        //row.appendChild(cell);

        if (this.caseName == Cases.CaseName.Therapy_CancerIntervention) {
            cell = this.CreateTD(row, ComponentList.LineOfTreatment, int.id, this.GetDPId(int, ComponentList.LineOfTreatment));
            //row.appendChild(cell);

            cell = this.CreateTD(row, ComponentList.StageSetting, int.id, this.GetDPId(int, ComponentList.StageSetting));
            //row.appendChild(cell);
        }


        cell = this.CreateActionTD(row, ComponentList.AddPhase, (typeof addB == 'boolean' ? { hidden: !addB } : undefined));
        //row.appendChild(cell);

        cell = this.CreateActionTD(row, ComponentList.DeletePhase, (typeof delB == 'boolean' ? { hidden: !delB } : undefined));
        //row.appendChild(cell);

        //let _src = Extract.Helper.getSourceOthers(int, ComponentList.MiscName['dpSource']);
        //this.SetMiscFields(intSetId, int.id, _src.Datapoints, row, tblBody);
        ////for (var j = 0; j < _src.Datapoints.length; j++) {
        ////    if (j == 0) {
        ////        cell = this.CreateTD(ComponentList.MiscName, _int.id, _src.Datapoints[j].id);
        ////        row.appendChild(cell);

        ////        cell = this.CreateTD(ComponentList.MiscDesc, _int.id, _src.Datapoints[j].id);
        ////        row.appendChild(cell);

        ////        cell = this.CreateActionTD(ComponentList.AddMisc);
        ////        row.appendChild(cell);

        ////        cell = this.CreateActionTD(ComponentList.DeleteMisc);
        ////        row.appendChild(cell);
        ////    } else {
        ////        let _rowMisc = this.CreateMiscTR(intSetId, _int.id, (j + 1));
        ////        cell = this.CreateTD(ComponentList.MiscName, _int.id, _src.Datapoints[j].id);
        ////        _rowMisc.appendChild(cell);

        ////        cell = this.CreateTD(ComponentList.MiscDesc, _int.id, _src.Datapoints[j].id);
        ////        _rowMisc.appendChild(cell);

        ////        cell = this.CreateActionTD(ComponentList.AddMisc);
        ////        _rowMisc.appendChild(cell);

        ////        cell = this.CreateActionTD(ComponentList.DeleteMisc);
        ////        _rowMisc.appendChild(cell);
        ////    }
        ////}
    }

    AddPhase(intSetId, int) {
        //this.caseName = caseName;
        //let mainTbl = document.getElementById(tableId);
        //let tblBody = mainTbl.getElementsByTagName('tbody')[0];
        let row = this.CreatePhaseTR(intSetId, int.id, false);
        //tblBody.appendChild(row);
        this.CreatePhaseFields(intSetId, int, row);
        this.CreateMiscFields(int.id, row, "");
        this.CreateDosageFields(int, row);
        //this.CreateDosageFields(row);
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

    // #region Dosage
    SetDosageFields(intSetId, int, row) {        
        let dpList = Extract.Helper.getSourceOthers(int, Extract.Groups.SOURCENAMES.DOSAGE).Datapoints;
        let rwDpList = Utils.rowwiseDPList(dpList);
        for (let i = 0; i < rwDpList.length; i++) {
            let addB = false;
            let delB = true;
            if (rwDpList.length == 1) {
                addB = true;
                delB = false;
            } else if ((i + 1) == rwDpList.length) {
                addB = true;
                delB = true;
            }
            if (i == 0) {
                this.CreateDosageFields(int, row, addB, delB);
            } else {
                let _rowD = this.CreateDosageTR(intSetId, int.id, (i + 1));
                this.CreateDosageFields(int, _rowD, addB, delB);
            }
        }

        if (dpList.length == 0) {
            this.CreateDosageFields(int.id, row, true, false);
        }
    }

    CreateDosageTR(intSetId, intId, RowIndexDosage, isAppend = true) {
        let row = document.createElement("tr");
        row.setAttribute(TrAttr.Class, "trCls");
        row.setAttribute(TrAttr.CaseName, this[CurrentTableObject.CaseName]);
        row.setAttribute(TrAttr.CaseNo, this[CurrentTableObject.CaseNo]);
        row.setAttribute(TrAttr.TRType, TRType.Dosage);
        row.setAttribute(TrAttr.RowIndexIntervention, intSetId);
        row.setAttribute(TrAttr.RowIndexPhase, intId);
        //row.setAttribute(TrAttr.RowIndexMisc, RowIndexMisc);
        row.setAttribute(TrAttr.RowIndexDosage, RowIndexDosage);

        let cell = this.CreateEmptyTD(this.getDosageColspan());
        row.appendChild(cell);
        if (isAppend) {
            let mainTbl = document.getElementById(this[CurrentTableObject.TableId]);
            let tblBody = mainTbl.getElementsByTagName('tbody')[0];
            tblBody.appendChild(row);
        }
        //this.CreateDosageFields(row);
        //this.tblBody.appendChild(row);
        return row;
    }
    CreateDosageFields(int, row, addB, delB) {
        this.CreateTD(row, ComponentList.Protocol, int.id, this.GetDPId(int, ComponentList.Protocol));
        //row.appendChild(cell);

        this.CreateTD(row, ComponentList.DosageType, int.id, this.GetDPId(int, ComponentList.DosageType));
        //row.appendChild(cell);

        this.CreateTD(row, ComponentList.FieldType, int.id, ""); //this.GetDPId(int, ComponentList.FieldType));
        //row.appendChild(cell);

        this.CreateTD(row, ComponentList.FieldValue, int.id, ""); //this.GetDPId(int, ComponentList.FieldValue));
        //row.appendChild(cell);

        this.CreateTD(row, ComponentList.DosageUnit, int.id, this.GetDPId(int, ComponentList.DosageUnit));
        //row.appendChild(cell);

        this.CreateTD(row, ComponentList.Concentration, int.id, this.GetDPId(int, ComponentList.Concentration));
        //row.appendChild(cell);

        this.CreateTD(row, ComponentList.ConcentrationUnit, int.id, this.GetDPId(int, ComponentList.ConcentrationUnit));
        //row.appendChild(cell);

        this.CreateTD(row, ComponentList.Frequency, int.id, this.GetDPId(int, ComponentList.Frequency));
        //row.appendChild(cell);

        this.CreateTD(row, ComponentList.FrequencyUnit, int.id, this.GetDPId(int, ComponentList.FrequencyUnit));
        //row.appendChild(cell);

        this.CreateTD(row, ComponentList.FrequencyInfo, int.id, this.GetDPId(int, ComponentList.FrequencyInfo));
        //row.appendChild(cell);

        this.CreateTD(row, ComponentList.Duration, int.id, this.GetDPId(int, ComponentList.Duration));
        //row.appendChild(cell);

        this.CreateTD(row, ComponentList.DurationUnit, int.id, this.GetDPId(int, ComponentList.DurationUnit));
        //row.appendChild(cell);

        this.CreateTD(row, ComponentList.DurationInfo, int.id, this.GetDPId(int, ComponentList.DurationInfo));
        //row.appendChild(cell);

        this.CreateTD(row, ComponentList.TimepointUnit, int.id, this.GetDPId(int, ComponentList.TimepointUnit));
        //row.appendChild(cell);

        this.CreateTD(row, ComponentList.TimepointNo, int.id, this.GetDPId(int, ComponentList.TimepointNo));
        //row.appendChild(cell);

        this.CreateTD(row, ComponentList.TimepointInfo, int.id, this.GetDPId(int, ComponentList.TimepointInfo));
        //row.appendChild(cell);

        this.CreateActionTD(row, ComponentList.AddDosage, (typeof addB == 'boolean' ? { hidden: !addB } : undefined));
        //row.appendChild(cell);

        this.CreateActionTD(row, ComponentList.DeleteDosage, (typeof delB == 'boolean' ? { hidden: !delB } : undefined));
        //row.appendChild(cell);
    }

    AddDosage(TRowType, intSetId, intId, RowIndexDosage) {
        let row = this.CreateDosageTR(intSetId, intId, RowIndexDosage, false);
        let int = Extract.Data.Interventions[intId];
        this.CreateDosageFields(int, row);
        let lstCnt = [];
        if (TRowType == TRType.Intervention) {
            // lstCnt = $(Intervention.MainTableIdJQ()).find('tbody').find(`tr[${TrAttr.TRType}=${TRType.Dosage}]tr[${TrAttr.RowIndexIntervention}=${RowIndexIntervention}]tr[${TrAttr.RowIndexPhase}=${RowIndexPhase}]:last`);
            lstCnt = IUI.currentTD.closest('tbody').find(`tr[${TrAttr.TRType}=${TRType.FixedDose}]tr[${TrAttr.RowIndexIntervention}=${intSetId}]tr[${TrAttr.RowIndexPhase}=${intId}]:last`);
            if (lstCnt.length == 0) {
                lstCnt = IUI.currentTD.closest('tbody').find(`tr[${TrAttr.TRType}=${TRType.Misc}]tr[${TrAttr.RowIndexIntervention}=${intSetId}]tr[${TrAttr.RowIndexPhase}=${intId}]:last`);
            }
            if (lstCnt.length == 0) {
                lstCnt = IUI.currentTD.closest('tbody').find(`tr[${TrAttr.RowIndexIntervention}=${intSetId}]:last`);
            }
        } else if (TRowType == TRType.Phase) {
            lstCnt = IUI.currentTD.closest('tbody').find(`tr[${TrAttr.TRType}=${TRType.Misc}]tr[${TrAttr.RowIndexIntervention}=${intSetId}]tr[${TrAttr.RowIndexPhase}=${intId}]:last`);
            if (lstCnt.length == 0) {
                lstCnt = IUI.currentTD.closest('tbody').find(`tr[${TrAttr.RowIndexIntervention}=${intSetId}]:last`);
            }
        } else if (TRowType == TRType.Dosage) {
            lstCnt = IUI.currentTD.parent('tr');
        }
        if (lstCnt.length > 0) {
            lstCnt.after(row);
        }
    }
    DeleteDosage(intSetId, intId) {
        let tBody = IUI.currentTD.closest('tbody');
        //let _prvRw = IUI.currentTD.parent('tr').prev();
        this.DeleteDP(intId, IUI.currentTD.parent('tr').find('td'));
        IUI.currentTD.parent('tr').remove();
        let lstCnt = tBody.find(`tr[${TrAttr.RowIndexIntervention}=${intSetId}]tr[${TrAttr.RowIndexPhase}=${intId}]`);
        if (lstCnt.length != 0) {
            let lstTdAdd = lstCnt.find(`td[config='AddDosage']`);
            if (lstTdAdd.length > 0 && lstTdAdd[0].children.length > 0) {
                let btnAdd = Ext.getCmp(lstTdAdd.eq(lstTdAdd.length - 1)[0].children[0].id);
                if (btnAdd) {
                    btnAdd.show();
                }
            }
        }
        //else {
        //    let lstTdAdd = _prvRw.find(`td[config='AddDosage']`);

        //    if (lstTdAdd.length > 0 && lstTdAdd[0].children.length > 0) {
        //        let btnAdd = Ext.getCmp(lstTdAdd.eq(lstTdAdd.length - 1)[0].children[0].id);
        //        if (btnAdd) {
        //            btnAdd.show();
        //        }
        //    }
        //}
    }
    DeleteDosageButtonAfterRender(cmp, intSetId, intId, RowIndexDosage) {
        //let _rowIdx = _curTD.parent('tr').attr(TdAttr.RowIndex);
        let _curTD = $(cmp.el.dom).parent('td');
        let rwLen = _curTD.closest('tbody').find(`tr[${TrAttr.TRType}=${TRType.Dosage}]tr[${TrAttr.RowIndexIntervention}=${intSetId}]tr[${TrAttr.RowIndexPhase}=${intId}]tr[${TrAttr.RowIndexDosage}=${RowIndexDosage}]`).length;
        rwLen > 0 ? cmp.show() : cmp.hide();
    }
    // #endregion























    //// #region  Therapy---Drug
    //Drug(rowNo) {
    //    //Case 1, Case 3

    //    let mainTbl = document.getElementById(Intervention.MainTableId());
    //    let tblBody = mainTbl.getElementsByTagName('tbody')[0];
    //    //let CaseName = Cases.CaseName.Therapy_Drug;

    //    let row = this.CreateInterventionTR(rowNo);

    //    this.CreateInterventionFields(row);
    //    this.CreatePhaseFields(row);
    //    this.CreateDosageFields(row);

    //    tblBody.appendChild(row);


    //    let valFD = $(row).find(`td[${TdAttr.Config}=${ComponentList.FixedDose.name}]`).attr(TdAttr.DPVal);
    //    let trClass = "trCls";
    //    if (valFD == 'No') {
    //        trClass += " trDisplayNone";
    //    }

    //    let rowfd1 = this.CreateFixedDoseTR(rowNo, 1, trClass);
    //    //let cell = this.CreateEmptyTD(2);
    //    //rowfd1.appendChild(cell);
    //    this.CreateFixedDoseFields(rowfd1, { hidden: true }, { hidden: true });
    //    tblBody.appendChild(rowfd1);

    //    let rowfd2 = this.CreateFixedDoseTR(rowNo, 2, trClass);
    //    //cell = this.CreateEmptyTD(2);
    //    //rowfd2.appendChild(cell);
    //    this.CreateFixedDoseFields(rowfd2, { hidden: false }, { hidden: true });
    //    tblBody.appendChild(rowfd2);

    //    return row;
    //}
    //// #endregion

    //// #region  Therapy---Drug---Study on Cancer Interventions
    //CancerIntervention(rowNo) {
    //    //Case 1, Case 2, Case 3

    //    let mainTbl = document.getElementById(Intervention.MainTableId());
    //    let tblBody = mainTbl.getElementsByTagName('tbody')[0];
    //    //let CaseName = Cases.CaseName.Therapy_CancerIntervention;

    //    let row = this.CreateInterventionTR(rowNo);

    //    this.CreateInterventionFields(row);
    //    this.CreatePhaseFields(row);
    //    this.CreateDosageFields(row);

    //    tblBody.appendChild(row);


    //    let valFD = $(row).find(`td[${TdAttr.Config}=${ComponentList.FixedDose.name}]`).attr(TdAttr.DPVal);
    //    let trClass = "trCls";
    //    if (valFD == 'No') {
    //        trClass += " trDisplayNone";
    //    }

    //    let rowfd1 = this.CreateFixedDoseTR(rowNo, 1, trClass);
    //    //let cell = this.CreateEmptyTD(2);
    //    //rowfd1.appendChild(cell);
    //    this.CreateFixedDoseFields(rowfd1, { hidden: true }, { hidden: true });
    //    tblBody.appendChild(rowfd1);

    //    let rowfd2 = this.CreateFixedDoseTR(rowNo, 2, trClass);
    //    //cell = this.CreateEmptyTD(2);
    //    //rowfd2.appendChild(cell);
    //    this.CreateFixedDoseFields(rowfd2, { hidden: false }, { hidden: true });
    //    tblBody.appendChild(rowfd2);

    //    return row;
    //}
    //// #endregion

    //// #region  Therapy---Radiotherapy
    //Radiotherapy(rowNo) {
    //    //Case 1, Case 8
    //    let mainTbl = document.getElementById(Intervention.MainTableId());
    //    let tblBody = mainTbl.getElementsByTagName('tbody')[0];
    //    //let CaseName = Cases.CaseName.Therapy_Radiotherapy;

    //    let row = this.CreateInterventionTR(rowNo);

    //    this.CreateInterventionFields(row);
    //    this.CreatePhaseFields(row);
    //    this.CreateDosageFields(row);

    //    tblBody.appendChild(row);
    //    return row;
    //}
    //// #endregion

    //// #region  Therapy---Biological/Vaccine
    //BiologicalVaccine(rowNo) {
    //    //Case 1, Case 9

    //    let mainTbl = document.getElementById(Intervention.MainTableId());
    //    let tblBody = mainTbl.getElementsByTagName('tbody')[0];
    //    //let CaseName = Cases.CaseName.Therapy_BiologicalVaccine;

    //    let row = this.CreateInterventionTR(rowNo);

    //    this.CreateInterventionFields(row);
    //    this.CreatePhaseFields(row);
    //    this.CreateDosageFields(row);

    //    tblBody.appendChild(row);

    //    return row;
    //}
    //// #endregion

    //// #region  Therapy---Lifestyle Modification
    //LifestyleModification(rowNo) {
    //    //Case 1, Case 18

    //    let mainTbl = document.getElementById(Intervention.MainTableId());
    //    let tblBody = mainTbl.getElementsByTagName('tbody')[0];
    //    //let CaseName = Cases.CaseName.Therapy_LifestyleModification;

    //    let row = this.CreateInterventionTR(rowNo);

    //    this.CreateInterventionFields(row);
    //    this.CreatePhaseFields(row);
    //    this.CreateDosageFields(row);

    //    tblBody.appendChild(row);

    //    return row;
    //}
    //// #endregion

    //// #region  Therapy---Dietary Supplement
    //DietarySupplement(rowNo) {
    //    //Case 1, Case 19

    //    let mainTbl = document.getElementById(Intervention.MainTableId());
    //    let tblBody = mainTbl.getElementsByTagName('tbody')[0];
    //    //let CaseName = Cases.CaseName.Therapy_DietarySupplement;

    //    let row = this.CreateInterventionTR(rowNo);

    //    this.CreateInterventionFields(row);
    //    this.CreatePhaseFields(row);
    //    this.CreateDosageFields(row);

    //    tblBody.appendChild(row);

    //    return row;
    //}
    //// #endregion

    //// #region  Therapy---Other
    //Other(rowNo) {
    //    //Case 1, Case 20

    //    let mainTbl = document.getElementById(Intervention.MainTableId());
    //    let tblBody = mainTbl.getElementsByTagName('tbody')[0];
    //    //let CaseName = Cases.CaseName.Therapy_Other;

    //    let row = this.CreateInterventionTR(rowNo);

    //    this.CreateInterventionFields(row);
    //    this.CreatePhaseFields(row);
    //    this.CreateDosageFields(row);

    //    tblBody.appendChild(row);

    //    return row;
    //}
    //// #endregion
}