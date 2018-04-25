/// <reference path="reference.js" />

//class Intervention {    
//    constructor() {
//        //this.addMainTable();
//        this.tableHeaderList = ['Treatment Tag', 'Fixed Dose', 'Intervention', 'Manufacture', 'Brand', 'Add', 'Del', 'Study Phase', 'Schedule', 'Route', 'Provider', 'Add', 'Del', 'Name', 'Description', 'Add', 'Del', 'Protocol', 'Dosage Type', 'Field Type', 'Field Value', 'Dosage Unit', 'Concentration', 'Concentration Unit', 'Frequency', 'Unit', 'Frequency Info', 'Duration', 'Duration Unit', 'Duration Info', 'Timpoint', 'Timpoint #', 'Timpoint Info', 'Add', 'Del'];
//        //this.compList = [
//        //    'TreatmentTag',
//        //    'FixedDose'
//        //]
//    }
//}

class Intervention {

    static DestroyComponents() {
        return new Promise((resolve, reject) => {
            let childNodes = document.getElementById(Intervention.SmartDiv()).childNodes;
            for (let i = childNodes.length - 1, cmp; i >= 0; i--) {
                cmp = Ext.getCmp(childNodes[i].id);
                if (cmp) {
                    cmp.destroy();
                    //Ext.destroy(cmp);
                }
            }
            return resolve();
        });
    }

    static SmartDiv() {
        return 'txtEdit';
    }

    static MainTableId() {
        return 'ext-data-31163145256'; //'tblMain';
    }

    static MainTableIdJQ() {
        return '#ext-data-31163145256';//'#tblMain';
    }

    static GetParameterByName(name) {
        let url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    GetCurrentTableData(curTD) {
        if (typeof curTD == "undefined") {
            curTD = IUI.currentTD;
        }
        let _curTbl = curTD.closest('table');
        let _tblId = _curTbl.attr(TblAttr.Id);
        let _gpId = _curTbl.attr(TblAttr.GroupId);
        let _caseNo = curTD.parent('tr').attr(TrAttr.CaseNo);
        let _caseName = curTD.parent('tr').attr(TrAttr.CaseName);

        let obj = {};
        obj[CurrentTableObject.TableId] = _tblId;
        obj[CurrentTableObject.GroupId] = _gpId;
        obj[CurrentTableObject.CaseNo] = _caseNo;
        obj[CurrentTableObject.CaseName] = _caseName;

        return obj;
    }

    SmartDivPosition() {
        if (IUI.currentTD.length > 0) {
            let txt = $('#' + Intervention.SmartDiv());
            let cmpType = IUI.currentTD.attr(TdAttr.Type);
            
            if (cmpType != ComponentType.ExtractActionButton) {

                //let grpId = IUI.currentTD.closest('table').attr(TblAttr.GroupId);
                //let lstPar = Ext.getCmp(grpId).query("[name='mainInterventionParent']");

                //if (lstPar) {
                //    //lstPar[0].getEl().setScrollTop(lstPar[0].getEl().getScrollTop() - IUI.currentTD.offset().top);
                //    lstPar[0].getEl().setScrollLeft(lstPar[0].getEl().getScrollLeft() + 167);
                //    //lstPar[0].getEl().setScrollLeft(txt.position().left);
                //}

                if (cmpType == ComponentType.ExtractButton) {
                    txt.width(IUI.currentTD[0].offsetWidth - 2);
                    txt.offset({ top: IUI.currentTD.offset().top + 1, left: IUI.currentTD.offset().left + 1 });
                } else {
                    //txt.width(IUI.currentTD.width());
                    txt.width(IUI.currentTD[0].offsetWidth);
                    txt.offset({ top: IUI.currentTD.offset().top, left: IUI.currentTD.offset().left });
                }

                
            }

            //window.setTimeout(() => {
            this.CreateComponent();
            //}, 250);
        }
    }

    AddMainTable() {
        // get the reference for the body
        let div = document.getElementById("divMain");

        let lbl = document.createElement("label");
        //lbl.setAttribute("class", "tblClr");
        lbl.setAttribute(TdAttr.Id, "lblTab");
        lbl.innerHTML = "<b>Tab Direction Change(Ctrl + Left or Right Arrow):-</b> Right to Left";
        div.appendChild(lbl);

        //// creates a <table> element and a <tbody> element
        //let tbl = document.createElement("table");
        let tbl = document.getElementById(Intervention.MainTableId());
        //tbl.setAttribute(TdAttr.Class, "tblClr");
        //tbl.setAttribute(TdAttr.Id, Intervention.MainTableId());
        //let tblHead = document.createElement("thead");
        //let rowH = document.createElement("tr");
        //rowH.setAttribute(TdAttr.Class, "thtrCls");
        //tblHead.appendChild(rowH);
        ////let arr = ['Treatment Tag', 'Fixed Dose', 'Intervention', 'Manufacture', 'Brand', 'Add', 'Delete', 'Study Phase', 'Schedule', 'Route', 'Provider', 'Add', 'Delete', 'Name', 'Description', 'Add', 'Delete', 'Protocol', 'Dosage Type', 'Field Type', 'Field Value', 'Dosage Unit', 'Concentration', 'Concentration Unit', 'Frequency', 'Unit', 'Frequency Info', 'Duration', 'Duration Unit', 'Duration Info', 'Timpoint', 'Timpoint #', 'Timpoint Info', 'Add', 'Delete'];
        //for (let i = 0; i < this.tableHeaderList.length; i++) {
        //    let cell = document.createElement("th");
        //    if (this.tableHeaderList[i] == 'Add' || this.tableHeaderList[i] == 'Del') {
        //        cell.setAttribute(TdAttr.Class, "tdBtn");
        //    } else {
        //        cell.setAttribute(TdAttr.Class, "tdCls");
        //    }
        //    cell.setAttribute(TdAttr.TabIndex, 1);
        //    let _cellText = document.createTextNode(this.tableHeaderList[i]);
        //    cell.appendChild(_cellText);
        //    rowH.appendChild(cell);
        //}
        //tbl.appendChild(tblHead);

        //let tblBody = document.createElement("tbody");
        ////// creating all cells
        ////for (let i = 1; i < 4; i++) {
        ////    // creates a table row
        ////    let row = document.createElement("tr");
        ////    row.setAttribute("class", "trCls");
        ////    for (let j = 1; j < 4; j++) {
        ////        // Create a <td> element and a text node, make the text
        ////        // node the contents of the <td>, and put the <td> at
        ////        // the end of the table row
        ////        let cell = document.createElement("td");
        ////        cell.setAttribute("class", "tdCls");
        ////        let cellText = document.createTextNode("Cell " + i + "x" + j);
        ////        cell.appendChild(cellText);
        ////        row.appendChild(cell);

        ////        if ((i == 1 && j == 1) || (i == 2 && j == 2) || (i == 3 && j == 3)) {
        ////            cell.setAttribute("cmpType", "ExtractDropdown");
        ////            cell.setAttribute("cmpConfig", "FixedDose");

        ////            //if ((i == 1 && j == 1)) {
        ////            //    cell.setAttribute("fieldStore", '["Cell 1x1", "Cell 1x2", "Cell 1x3"]');
        ////            //} else if ((i == 2 && j == 2)) {
        ////            //    cell.setAttribute("fieldStore", '["Cell 2x1", "Cell 2x2", "Cell 2x3"]');
        ////            //} else if ((i == 3 && j == 3)) {
        ////            //    cell.setAttribute("fieldStore", '["Cell 3x1", "Cell 3x2", "Cell 3x3"]');
        ////            //}

        ////        } else {
        ////            cell.setAttribute("cmpType", "ExtractText");
        ////        }
        ////    }

        ////    // add the row to the end of the table body
        ////    tblBody.appendChild(row);
        ////}


        let _caseName = Intervention.GetParameterByName('case');

        switch (_caseName) {
            case Cases.CaseName.Therapy_Drug:
                new Drug(_caseName).Drug(1);
                break;
            case Cases.CaseName.Therapy_CancerIntervention:
                new Drug(_caseName).CancerIntervention(1);
                break;

            case Cases.CaseName.Therapy_Radiotherapy:
                new Drug(_caseName).Radiotherapy(1);
                break;

            case Cases.CaseName.Therapy_BiologicalVaccine:
                new Drug(_caseName).BiologicalVaccine(1);
                break;

            case Cases.CaseName.Therapy_LifestyleModification:
                new Drug(_caseName).LifestyleModification(1);
                break;

            case Cases.CaseName.Therapy_DietarySupplement:
                new Drug(_caseName).DietarySupplement(1);
                break;

            case Cases.CaseName.Therapy_Other:
                new Drug(_caseName).Other(1);
                break;

            case Cases.CaseName.Therapy_Device:
                new DeviceSurgery(_caseName).Device(1);
                break;

            case Cases.CaseName.Therapy_ProcedureSurgery:
                new DeviceSurgery(_caseName).ProcedureSurgery(1);
                break;

            case Cases.CaseName.Therapy_BehavioralInformationalMaterial:
                new BehavioralInformationalMaterial(_caseName).InformationalMaterial(1);
                break;

            case Cases.CaseName.Therapy_BehavioralSessionMeeting:
                new BehavioralSessionMeeting(_caseName).SessionMeeting(1);
                break;

            default:
                new Drug(Cases.CaseName.Therapy_Drug).Drug(1);
                break;
        }











        //objI = new BehavioralInformationalMaterial();
        //objI.InformationalMaterial(1);

        //tbl.appendChild(tblBody);
        //div.appendChild(tbl);

        //let cell = this.CreateActionTD(this.TabIndexTD(), 1, 1, ComponentType.ExtractActionButton, "DeleteIntervention", "tdCls");
        //row.appendChild(cell);


        //this.CreateInterventionFields(row);
        //this.CreatePhaseFields(row);
        //this.CreateDosageFields(row);





        ////tblBody.appendChild(row);
        //// put the <tbody> in the <table>
        ////tbl.appendChild(tblBody);
        //// appends <table> into <body>
        ////div.appendChild(tbl);



        //if (IUI.currentTD == null) {
        this.tabDirection = TabDirection.LeftToRight;
        IUI.currentTD = $('td:first', $(Intervention.MainTableIdJQ()).find('tbody'));
        this.SmartDivPosition();
        //txt.offset({ top: this.currentTD.offset().top, left: this.currentTD.offset().left });

        let txt1 = document.getElementById(Intervention.SmartDiv());
        txt1.addEventListener("keydown", (e) => this.OnTab(txt1, e));

        txt1.addEventListener("keyup", (e) => this.OnKeyUp(txt1, e));

        //$(".txtFld").on('keydown', "#txtEdit" , () => {
        //    this.onTab(txtFld, e);
        //});
        //txt.on("keydown", (e: KeyboardEvent) => {
        //    this.onTab(txt, e);
        //});
        //window.setTimeout(() => {
        //    this.CreateComponent();
        //}, 250);
        //let lstTD = document.getElementById(Intervention.MainTableId()).getElementsByTagName('td');
        //for (let i = 0; i < lstTD.length; i++) {
        //    let _cmpTyp = $(lstTD[i]).attr(TdAttr.Type);
        //    if (typeof _cmpTyp !== 'undefined' && _cmpTyp != ComponentType.ExtractActionButton) {
        //        lstTD[i].addEventListener('click', (e) => this.OnTDClick(lstTD[i], e));
        //    }
        //}
        //}
    }

    TabIndexTD() {
        //return $(Intervention.MainTableIdJQ()).find('tbody').find('td').length + 1;
        this.tabIdx = this.tabIdx ? this.tabIdx : 0;
        return ++this.tabIdx;
    }

    OnTDClick(txtFld, e) {
        if (e.currentTarget) {
            IUI.prevTD = IUI.currentTD;
            IUI.currentTD = $(e.currentTarget);
            this.SmartDivPosition();
            //window.setTimeout(() => {
            //    this.CreateComponent();
            //}, 250);
        }
    }

    SetCurrentTD(_curTD) {
        let isValid = true;
        if (!_curTD.hasClass('trDisplayNone')) {
            let prevTDDPVal = IUI.currentTD.attr(TdAttr.DPVal);
            let prevTDType = IUI.currentTD.attr(TdAttr.Type);
            if (prevTDDPVal != undefined && (prevTDType != ComponentType.ExtractActionButton)) {
                IUI.prevTD = IUI.currentTD;
            }
            IUI.currentTD = _curTD;
            let cmpDPVal = IUI.currentTD.attr(TdAttr.DPVal);
            let cmpType = IUI.currentTD.attr(TdAttr.Type);
            if (cmpDPVal == undefined || (cmpType == ComponentType.ExtractActionButton)) {
                isValid = true;
            } else {
                isValid = false;
            }
        } else {
            IUI.currentTD = _curTD;
        }
        return isValid;
    }

    ComputeTD(IsShiftKey) {
        if (this.tabDirection == TabDirection.LeftToRight) {
            if (IsShiftKey) {
                let isValid = true;
                do {
                    let _curTD = IUI.currentTD.prev('td');
                    if (_curTD.length > 0) {
                        isValid = this.SetCurrentTD(_curTD);
                    } else {
                        if (IUI.currentTD.parent('tr').prevAll('tr:visible').not('.trDisplayNone').length > 0) {
                            //currentTD = currentTD.parent('tr').next('tr').first('td');
                            _curTD = $('td:last', IUI.currentTD.parent('tr').prevAll('tr:visible').not('.trDisplayNone').first());
                            if (_curTD.length > 0) {
                                isValid = this.SetCurrentTD(_curTD);
                            }
                        } else {
                            _curTD = $('td:last', $('tr:visible:last', IUI.currentTD.closest('tbody')));
                            if (_curTD.length > 0) {
                                isValid = this.SetCurrentTD(_curTD);
                            }
                        }
                    }
                } while (isValid);
            } else {
                let isValid = true;
                do {
                    let _curTD = IUI.currentTD.next('td');
                    if (_curTD.length > 0) {
                        isValid = this.SetCurrentTD(_curTD);
                    } else {
                        //if (this.currentTD.parent('tr').next('tr:not(.trDisplayNone)').length > 0) {
                        if (IUI.currentTD.parent('tr').nextAll('tr:visible').not('.trDisplayNone').length > 0) {
                            //currentTD = currentTD.parent('tr').next('tr').first('td');
                            _curTD = $('td:first', IUI.currentTD.parent('tr').nextAll('tr:visible').not('.trDisplayNone').first());
                            if (_curTD.length > 0) {
                                isValid = this.SetCurrentTD(_curTD);
                            }
                        } else {
                            _curTD = $('td:first', IUI.currentTD.closest('tbody'));
                            if (_curTD.length > 0) {
                                isValid = this.SetCurrentTD(_curTD);
                            }
                        }
                    }
                } while (isValid);
            }
        } else {
            if (IsShiftKey) {
                let isValid = true;
                let _Cnt = 1;
                let _curClmIdx = IUI.currentTD.attr(TdAttr.ColumnIndex);
                do {

                    let _curTD = IUI.currentTD;
                    let _prvRowIdx = _curTD.parent('tr').index() - _Cnt;

                    if (_prvRowIdx < 0) {
                        _prvRowIdx = IUI.currentTD.closest('tbody').find('tr:visible').not('.trDisplayNone').last().index();
                        _curClmIdx = isNaN(Number(_curClmIdx)) ? 1 : Number(_curClmIdx) - 1;

                        if (_curClmIdx == 0) {
                            let _lstClmIdx = IUI.currentTD.closest('tbody').find('tr:visible').not('.trDisplayNone').last().find('td:last').attr(TdAttr.ColumnIndex);
                            _curClmIdx = isNaN(Number(_lstClmIdx)) ? 1 : Number(_lstClmIdx);
                        }
                    }

                    let _prvTr = $IUI.currentTD.closest('tbody').find('tr').eq(_prvRowIdx); //parent('tbody').find('tr').eq(_prvRowIdx);

                    if (_prvTr.length > 0) {
                        if (_prvTr.find(`td[columnindex='${_curClmIdx}']`).length > 0) {
                            _curTD = _prvTr.find(`td[columnindex='${_curClmIdx}']`);
                            isValid = this.SetCurrentTD(_curTD);
                        } else {
                            _Cnt++;
                            isValid = true;
                        }
                    }

                    //let _curTD = this.currentTD;                    
                    //let _prvRowIdx = this.currentTD.parent('tr').index() - _Cnt;
                    //if (_prvRowIdx < 0) {
                    //    _prvRowIdx = $(Intervention.MainTableIdJQ()).find('tbody').find('tr:not(.trDisplayNone)').length-1;
                    //    _curClmIdx = isNaN(Number(_curClmIdx)) ? 1 : Number(_curClmIdx) - 1;

                    //    if (_curClmIdx == 0) {
                    //        let _lstClmIdx = $(Intervention.MainTableIdJQ()).find('tbody').find('td:last').attr(TdAttr.ColumnIndex)
                    //        _curClmIdx = isNaN(Number(_lstClmIdx)) ? 1 : Number(_lstClmIdx);
                    //    }
                    //}
                    //let _prvTr = this.currentTD.parent('tr').parent('tbody').find('tr').eq(_prvRowIdx); //parent('tbody').find('tr').eq(_prvRowIdx);

                    //if (_prvTr.length > 0) {
                    //    if (_prvTr.find(`td[columnindex='${_curClmIdx}']`).length > 0) {
                    //        _curTD = _prvTr.find(`td[columnindex='${_curClmIdx}']`);
                    //        isValid = this.SetCurrentTD(_curTD);
                    //    } else {
                    //        _Cnt++;
                    //        isValid = true;
                    //    }
                    //}

                    ////let _curTD = this.currentTD;
                    ////if (this.currentTD.parent('tr').prev('tr').length > 0) {
                    ////    //this.currentTD = this.currentTD.parent('tr').prev('tr').find('td').eq(this.currentTD.index());
                    ////    _curTD = this.currentTD.parent('tr').prev('tr').find('td').eq(this.currentTD.index());
                    ////    if (_curTD.length > 0) {
                    ////        isValid = this.SetCurrentTD(_curTD);
                    ////    }
                    ////} else {
                    ////    if (this.currentTD.index() == this.currentTD.parent('tr').index()) {
                    ////        ////currentTD = $('tr:first', $($('.tblClr'))).find('td').eq(currentTD.index()+1);
                    ////        //this.currentTD = $(Intervention.MainTableIdJQ()).find('td:last');
                    ////        _curTD = $(Intervention.MainTableIdJQ()).find('td:last');
                    ////        if (_curTD.length > 0) {
                    ////            isValid = this.SetCurrentTD(_curTD);
                    ////        }
                    ////    } else {
                    ////        //this.currentTD = $('tr:last', $($(Intervention.MainTableIdJQ()))).find('td').eq(this.currentTD.index() - 1);
                    ////        _curTD = $('tr:last', $(Intervention.MainTableIdJQ())).find('td').eq(this.currentTD.index() - 1);
                    ////        if (_curTD.length > 0) {
                    ////            isValid = this.SetCurrentTD(_curTD);
                    ////        }
                    ////    }
                    ////}
                } while (isValid);
            } else {
                let isValid = true;
                let _Cnt = 1;
                let _curTD = IUI.currentTD;
                let _curClmIdx = _curTD.attr(TdAttr.ColumnIndex);

                do {
                    //let _curTD = this.currentTD;                    
                    let _nxtRowIdx = _curTD.parent('tr').nextAll('tr:visible').first().index();
                    //let _nxtTr = _curTD.parent('tr').nextAll('tr:visible').not('.trDisplayNone').first();

                    //if (_nxtRowIdx > $(Intervention.MainTableIdJQ()).find('tbody').find('tr:visible').not('.trDisplayNone').last().index()) {
                    if (_nxtRowIdx < 0) {
                        //_nxtTr = $(Intervention.MainTableIdJQ()).find('tbody').find('tr:visible').not('.trDisplayNone').first();
                        _nxtRowIdx = 0;
                        _curClmIdx = isNaN(Number(_curClmIdx)) ? 1 : Number(_curClmIdx) + 1;

                        //let _lstClmIdx = $(Intervention.MainTableIdJQ()).find('tbody').find('td:first').attr(TdAttr.ColumnIndex);
                        if (_curClmIdx > ColumnIdx) {
                            _curClmIdx = 1;
                        }
                    }
                    let _nxtTr = _curTD.parent('tr').parent('tbody').find('tr').eq(_nxtRowIdx);



                    if (_nxtTr.length > 0) {
                        if (_nxtTr.find(`td[columnindex='${_curClmIdx}']`).length > 0) {
                            _curTD = _nxtTr.find(`td[columnindex='${_curClmIdx}']`);
                            isValid = this.SetCurrentTD(_curTD);
                        } else {
                            //if (_nxtTr.attr(TrAttr.TRType) == TRType.FixedDose) {
                            //    _curTD = _nxtTr.find('td:nth-child(2)');
                            //    isValid = this.SetCurrentTD(_curTD);
                            //} else {
                            _Cnt++;
                            isValid = true;
                            //}
                        }
                    }




                    //let _curTD = this.currentTD;                    
                    //let _nxtRowIdx = this.currentTD.parent('tr').index() + _Cnt;
                    //if (_nxtRowIdx >= $(Intervention.MainTableIdJQ()).find('tbody').find('tr:not(.trDisplayNone)').length) {
                    //    _nxtRowIdx = 0;
                    //    _curClmIdx = isNaN(Number(_curClmIdx)) ? 1 : Number(_curClmIdx) + 1;

                    //    let _lstClmIdx = $(Intervention.MainTableIdJQ()).find('tbody').find('td:last').attr(TdAttr.ColumnIndex)
                    //    if (_curClmIdx == _lstClmIdx) {
                    //        _curClmIdx = 1;
                    //    }
                    //}
                    //let _nxtTr = this.currentTD.parent('tr').parent('tbody').find('tr').eq(_nxtRowIdx);



                    //if (_nxtTr.length > 0) {
                    //    if (_nxtTr.find(`td[columnindex='${_curClmIdx}']`).length > 0) {
                    //        _curTD = _nxtTr.find(`td[columnindex='${ _curClmIdx}']`);
                    //        isValid = this.SetCurrentTD(_curTD);
                    //    } else {
                    //        //if (_nxtTr.attr(TrAttr.TRType) == TRType.FixedDose) {
                    //        //    _curTD = _nxtTr.find('td:nth-child(2)');
                    //        //    isValid = this.SetCurrentTD(_curTD);
                    //        //} else {
                    //            _Cnt++;
                    //            isValid = true;
                    //        //}
                    //    }
                    //} 

                    ////if (this.currentTD.parent('tr').next('tr').length > 0) {
                    ////    ////this.currentTD = this.currentTD.parent('tr').next('tr').find('td').eq(this.currentTD.index());
                    ////    //_curTD = this.currentTD.parent('tr').next('tr').find('td').eq(this.currentTD.index());

                    ////    let _curClmIdx = this.currentTD.attr(TdAttr.ColumnIndex);

                    ////    let _newClmIdx = Number(_curClmIdx) + _Cnt
                    ////    _curTD = this.currentTD.parent('tr').next('tr').find("td[columnindex='" + _newClmIdx + "']");
                    ////    if (_curTD.length > 0) {
                    ////        isValid = this.SetCurrentTD(_curTD);
                    ////    } else {
                    ////        isValid = true;
                    ////    }
                    ////    _Cnt++;
                    ////} else {
                    ////    //if (this.currentTD.index() == this.currentTD.parent('tr').find('td').length - 1) {
                    ////    //    ////currentTD = $('tr:first', $($('.tblClr'))).find('td').eq(currentTD.index()+1);
                    ////    //    //this.currentTD = $(Intervention.MainTableIdJQ()).find('td:first');
                    ////    //    _curTD = $(Intervention.MainTableIdJQ()).find('td:first');
                    ////    //    if (_curTD.length > 0) {
                    ////    //        isValid = this.SetCurrentTD(_curTD);
                    ////    //    }
                    ////    //} else {
                    ////    //    //this.currentTD = $('tr:first', $($(Intervention.MainTableIdJQ()))).find('td').eq(this.currentTD.index() + 1);
                    ////    //    _curTD = $('tr', $(Intervention.MainTableIdJQ())).eq(1).find('td').eq(this.currentTD.index() + 1);
                    ////    //    if (_curTD.length > 0) {
                    ////    //        isValid = this.SetCurrentTD(_curTD);
                    ////    //    }
                    ////    //}

                    ////    if (this.currentTD.attr(TdAttr.ColumnIndex) == "35") {
                    ////        _curTD = $(Intervention.MainTableIdJQ()).find('td:first');
                    ////        if (_curTD.length > 0) {
                    ////            isValid = this.SetCurrentTD(_curTD);
                    ////        } else {
                    ////            isValid = true;
                    ////        }
                    ////    } else {
                    ////        let _curClmIdx = this.currentTD.attr(TdAttr.ColumnIndex);
                    ////        let _nxtClmIdx = Number(_curClmIdx);
                    ////        _curTD = $('tr', $(Intervention.MainTableIdJQ())).eq(1).find(`td[columnindex='${_nxtClmIdx + 1}']`);
                    ////        if (_curTD.length > 0) {
                    ////            isValid = this.SetCurrentTD(_curTD);
                    ////        } else {
                    ////            isValid = true;
                    ////        }
                    ////    }
                    ////}
                } while (isValid);
            }
        }
    }

    OnTab(txtFld, e) {
        if (e.keyCode == 9) {
            //let txt = $(Intervention.SmartDiv());
            if (this.tabDirection == TabDirection.LeftToRight) {
                //let txtVal = txt.val();

                //if (txtVal && this.currentTD) {
                //    this.currentTD[0].innerHTML = txtVal;
                //    txt.val("");
                //}
                if (IUI.currentTD == null) {
                    IUI.currentTD = $('td:first', IUI.currentTD.closest('tbody'));
                }
                else {
                    this.ComputeTD(e.shiftKey);

                    if (e.shiftKey) {
                        //if (this.currentTD.prev('td').length > 0) {                            
                        //    //this.currentTD = this.currentTD.prev('td');
                        //}
                        //else {
                        //    if (this.currentTD.parent('tr').prev('tr').length > 0) {
                        //        //currentTD = currentTD.parent('tr').next('tr').first('td');
                        //        this.currentTD = $('td:last', $(this.currentTD.parent('tr').prev('tr')));
                        //    } else {
                        //        this.currentTD = $('td:last', $($(Intervention.MainTableIdJQ())));
                        //    }
                        //}
                    } else {
                        //if (this.currentTD.next('td').length > 0) {
                        //    //this.currentTD = this.currentTD.next('td');                    
                        //}
                        //else {
                        //    if (this.currentTD.parent('tr').next('tr').length > 0) {
                        //        //currentTD = currentTD.parent('tr').next('tr').first('td');
                        //        this.currentTD = $('td:first', $(this.currentTD.parent('tr').next('tr')));
                        //    } else {
                        //        this.currentTD = $('td:first', $($(Intervention.MainTableIdJQ())));
                        //    }
                        //}
                    }
                }

            } else {
                //let txtVal = txt.val();

                //if (txtVal && this.currentTD) {
                //    this.currentTD[0].innerHTML = txtVal;
                //    txt.val("");
                //}
                this.ComputeTD(e.shiftKey);

                if (e.shiftKey) {
                    //if (this.currentTD.parent('tr').prev('tr').length > 0) {
                    //    this.currentTD = this.currentTD.parent('tr').prev('tr').find('td').eq(this.currentTD.index());
                    //} else {
                    //    if (this.currentTD.index() == this.currentTD.parent('tr').index()) {
                    //        //currentTD = $('tr:first', $($('.tblClr'))).find('td').eq(currentTD.index()+1);
                    //        this.currentTD = $(Intervention.MainTableIdJQ()).find('td:last');
                    //    } else {
                    //        this.currentTD = $('tr:last', $($(Intervention.MainTableIdJQ()))).find('td').eq(this.currentTD.index() - 1);
                    //    }
                    //}
                } else {
                    //if (this.currentTD.parent('tr').next('tr').length > 0) {
                    //    this.currentTD = this.currentTD.parent('tr').next('tr').find('td').eq(this.currentTD.index());
                    //} else {
                    //    if (this.currentTD.index() == this.currentTD.parent('tr').find('td').length - 1) {
                    //        //currentTD = $('tr:first', $($('.tblClr'))).find('td').eq(currentTD.index()+1);
                    //        this.currentTD = $(Intervention.MainTableIdJQ()).find('td:first');
                    //    } else {
                    //        this.currentTD = $('tr:first', $($(Intervention.MainTableIdJQ()))).find('td').eq(this.currentTD.index() + 1);
                    //    }
                    //}
                }
            }

            if (IUI.currentTD) {
                this.SmartDivPosition();

                //// let left = currentTD.offsetLeft;
                //// let top = currentTD.offsetTop;
                //// b.style.top = top;
                //// b.style.left = left;
                //// window.focus();
                //// b.focus();
                //txt.offset({ top: this.currentTD.offset().top, left: this.currentTD.offset().left });                
                e.preventDefault();
            }
        }
    }

    OnKeyUp(txtFld, e) {
        //if (e.altKey && e.ctrlKey && e.shiftKey && e.keyCode == 40) {
        //    if (this.tabDirection == TabDirection.TopToBottom) {
        //        this.tabDirection = TabDirection.LeftToRight;
        //        $('#lblTab').html("<b>Tab Direction Change(Ctrl + Alt + Shift):-</b> Right to Left");
        //    } else {
        //        this.tabDirection = TabDirection.TopToBottom;
        //        $('#lblTab').html("<b>Tab Direction Change(Ctrl + Alt + Shift):-</b> Up to Down");
        //    }
        //}
        if (e.ctrlKey && (e.keyCode == 38 || e.keyCode == 40)) {  // 38=>Up  || 40=>Down
            this.tabDirection = TabDirection.TopToBottom;
            $('#lblTab').html("<b>Tab Direction Change(Ctrl + Up or Down Arrow):-</b> Up to Down");
        } else if (e.ctrlKey && (e.keyCode == 37 || e.keyCode == 39)) {  // 37=>Left  || 40=>Right
            this.tabDirection = TabDirection.LeftToRight;
            $('#lblTab').html("<b>Tab Direction Change(Ctrl + Left or Right Arrow):-</b> Right to Left");
        }
    }

    CreateComponent() {
        let me = this;
        let cmpType = IUI.currentTD.attr(TdAttr.Type);
        let cmpConfig = IUI.currentTD.attr(TdAttr.Config);
        //let tdType = IUI.currentTD.attr(TdAttr.TDType);
        switch (cmpType) {
            case ComponentType.ExtractText:
                //new MyExtTextField(IUI.currentTD).CreateComponent(ComponentList[tdType][cmpConfig]['config']);
                new MyExtTextField(ComponentList[cmpConfig]['config']);
                break;
            case ComponentType.ExtractDropdown:
                //new MyExtDropdownField(IUI.currentTD).CreateComponent(ComponentList[tdType][cmpConfig]['config']);
                new MyExtDropdownField(ComponentList[cmpConfig]['config']);
                break;
            case ComponentType.ExtractButton:
                //new MyExtButtonField(IUI.currentTD).CreateComponent(ComponentList[tdType][cmpConfig]['config']);
                new MyExtButtonField(ComponentList[cmpConfig]['config']);
                break;
            //case ComponentType.ExtractAddInfo:
            //    new MyExtAddInfoField(me.currentTD).CreateComponent(Config[cmpConfig]());
            //    break;
            ////case ComponentType.ExtractActionButton:
            ////    new MyExtActionButtonField(me.currentTD).CreateComponent(Config[cmpConfig]());
            ////    break;
        }
    }

    //#region TD
    createTable(tableId, grpId, intSetIds, caseName) {
        let tbl = document.createElement("table");
        tbl.setAttribute(TblAttr.Id, tableId);
        tbl.setAttribute(TblAttr.Class, "tblCls");
        tbl.setAttribute(TblAttr.GroupId, grpId);
        tbl.setAttribute(TblAttr.IntSetIds, intSetIds);
        tbl.setAttribute(TblAttr.CaseName, caseName);
        let tblBody = document.createElement("tbody");
        tbl.appendChild(tblBody);
        return tbl;
    }

    CreateEmptyTD(colspan) {
        let cell = document.createElement("td");
        cell.setAttribute(TdAttr.ColSpan, colspan);
        cell.setAttribute(TdAttr.Class, "tdColSpan");
        return cell;
    }

    GetTDText(component, dpValue) {
        let tdText = dpValue;
        if (component['name'] == ComponentList.FixedDose["name"]) {
            tdText = ComponentList.FixedDose.getTDDispValue(dpValue);
        } 
        return tdText;
    }

    CreateDP(component, typeId, dpId) {
        //if (component['name'] == ComponentList.StudyPhase["name"]) {

        //} else {
            let dp = {};
            if (dpId) {
                dp = Extract.Data.Datapoints[dpId]
            } else {
                let _dpVal = "";
                if (!Ext.isEmpty(component['dpDefaultValue'])) {
                    _dpVal = component['dpDefaultValue'];
                }
                dp = Extract.Helper.createDatapointAddToSource(Extract.Datapoint.VALUETYPE.MEMO, component['dpName'],
                    _dpVal, Extract.Datapoint.STATE.ADDED, 1, 1, component['dpSourceType'], typeId, component['dpSource']);

            }
            return dp;
        //}
    }

    CreateTD(row, component, typeId, dpId, tdCls) {
        let cell = document.createElement("td");
        //if (typeof tdClass !== "undefined") {
        //    trClass += "trCls";
        //}

        //if (component['name'] == ComponentList.FixedDoseCombinationName["name"]) {

        //    let _dpVal = $(row).find(`td[${TdAttr.Config}='${ComponentList.FixedDose['name']}']`).attr(TdAttr.DPVal);
        //    if (_dpVal == "No") {
        //        component['cssClass'] += " trDisplayNone";
        //    }
        //}
        let _tdCls = component['cssClass'];
        if (tdCls) {
            _tdCls += ` ${tdCls}`;
        }



        cell.setAttribute(TdAttr.Class, _tdCls);
        cell.setAttribute(TdAttr.TabIndex, top.IUI.TabIndexTD());
        //cell.setAttribute(TdAttr.RowIndex, rowIndex);
        cell.setAttribute(TdAttr.Type, component['compType']);
        cell.setAttribute(TdAttr.ColumnIndex, component['columnIndex']);
        cell.setAttribute(TdAttr.Config, component['name']);
        cell.setAttribute(TdAttr.Title, component['dpName']);

        //let _dpVal = "";
        //if (dpId) {
        //    cell.setAttribute(TdAttr.DPId, dpId);
        //    _dpVal = Extract.Data.Datapoints[dpId][component["dpFieldtoUpdate"]]
        //} else {            
        //    if (!Ext.isEmpty(component['dpDefaultValue'])) {
        //        _dpVal = component['dpDefaultValue'];
        //    }
        //    let _dp = Extract.Helper.createDatapointAddToSource(Extract.Datapoint.VALUETYPE.MEMO, component['dpName'],
        //        _dpVal, Extract.Datapoint.STATE.ADDED, 1, 1, component['dpSourceType'], typeId, component['dpSource']);
        //    cell.setAttribute(TdAttr.DPId, _dp.id);
        //    dpId = _dp.id;
        //}

        

        let _dp = this.CreateDP(component, typeId, dpId);
        dpId = _dp.id;
        cell.setAttribute(TdAttr.DPId, _dp.id);
        let _dpVal = _dp[component['dpFieldtoUpdate']];

        cell.setAttribute(TdAttr.DPVal, _dpVal);

        //cell.setAttribute(TdAttr.TDType, component['type']);
        if (typeof component['compType'] !== 'undefined' && component['compType'] != ComponentType.ExtractActionButton) {
            cell.addEventListener('click', (e) => this.OnTDClick(cell, e));
            //cell.addEventListener('load', (e) => top.IUI.OnTDClick(cell, e));            
        }
        //if (!Ext.isEmpty(component['cellText'])) {
        if (Ext.isEmpty(_dpVal)) {
            _dpVal = component['dpName']
            if (_dpVal.length > 18) {
                _dpVal = _dpVal.substring(0, 18) + "...";
            }
        }

        
        let _cellText = document.createTextNode(this.GetTDText(component,_dpVal));
        cell.appendChild(_cellText);
        
        //}

        //let data_cls = component['name'];
        //if (data_cls == 'FixedDoseIntervention') {
        //    data_cls = ComponentList.Intervention.Intervention.name;
        //} else if (data_cls == 'FixedDoseConcentration') {
        //    data_cls = ComponentList.Intervention.Manufacturer.name;
        //} else if (data_cls == 'FixedDoseUnit') {
        //    data_cls = ComponentList.Intervention.Brand.name;
        //}

        //cell.setAttribute(TdAttr.DataClass, data_cls);
        row.appendChild(cell);
        //return cell;
        return dpId;
    }

    CreateActionTD(row, component, props) {
        let cell = document.createElement("td");
        cell.setAttribute(TdAttr.Class, component['cssClass']);
        cell.setAttribute(TdAttr.TabIndex, top.IUI.TabIndexTD());
        //cell.setAttribute(TdAttr.RowIndex, rowIndex);
        cell.setAttribute(TdAttr.Type, component['compType']);
        cell.setAttribute(TdAttr.ColumnIndex, component['columnIndex']);
        cell.setAttribute(TdAttr.Config, component['name']);
        //cell.setAttribute(TdAttr.TDType, component['type']);
        if (typeof props === "undefined") {
            props = {};
        }

        let config = Config.AppendProps(component['config'], props);

        //new MyExtActionButtonField(cell).CreateComponent(config);
        new MyExtActionButtonField(cell, config);
        row.appendChild(cell);
        //return cell;
    }

    //#endregion

    //#region DP Operation
    DeleteDP(intSetId, lstTD) {
        for (var i = 0; i < lstTD.length; i++) {
            let dpId = $(lstTD[i]).attr(TdAttr.DPId);
            if (dpId) {
                let config = $(lstTD[i]).attr(TdAttr.Config);
                let comp = ComponentList[config];
                Extract.Helper.deleteDatapoint(comp['dpSourceType'], intSetId, comp['dpSource'], dpId);
            }
        }
    }

    GetDPfromDPList(dpList, dpName) {
        return dpList.find(a => { return a.Name == dpName });
    }

    GetDPId(sourceObj, component) {
        let _src = Extract.Helper.getSourceOthers(sourceObj, component['dpSource']);
        let _dp = this.GetDPfromDPList(_src.Datapoints, component['dpName']); //_src.Datapoints.filter(a => { return a.Name == component['dpName'] });
        if (_dp) {
            return _dp.id;
        }
        return "";
    }

    GetDPValue(sourceObj, component) {
        let _src = Extract.Helper.getSourceOthers(sourceObj, component['dpSource']);
        return _src.Datapoints.find((a) => { return a.Name == component['dpName'] })[component['dpFieldtoUpdate']];
    }

    //#endregion

    //#region Commented
    //CreatePhaseTR(CaseName, RowIndexIntervention, RowIndexPhase) {
    //    let row = document.createElement("tr");
    //    row.setAttribute(TrAttr.Class, "trCls");
    //    row.setAttribute(TrAttr.CaseName, CaseName);
    //    row.setAttribute(TrAttr.CaseNo, Cases.CaseNo[CaseName].sort().toString());
    //    row.setAttribute(TrAttr.TRType, TRType.Phase);
    //    row.setAttribute(TrAttr.RowIndexIntervention, RowIndexIntervention);
    //    row.setAttribute(TrAttr.RowIndexPhase, RowIndexPhase);
    //    //row.setAttribute(TrAttr.RowIndexMisc, 1);
    //    //row.setAttribute(TrAttr.RowIndexDosage, 1);

    //    let cell = this.CreateEmptyTD(7);
    //    row.appendChild(cell);

    //    //this.CreatePhaseFields(row);
    //    //this.CreateDosageFields(row);

    //    return row;
    //}

    //CreateMiscTR(RowIndexIntervention, RowIndexPhase, RowIndexMisc) {
    //    let row = document.createElement("tr");
    //    row.setAttribute(TrAttr.Class, "trCls");
    //    row.setAttribute(TrAttr.TRType, TRType.Misc);
    //    row.setAttribute(TrAttr.RowIndexIntervention, RowIndexIntervention);
    //    row.setAttribute(TrAttr.RowIndexPhase, RowIndexPhase);
    //    row.setAttribute(TrAttr.RowIndexMisc, RowIndexMisc);

    //    let cell = this.CreateEmptyTD(13);
    //    row.appendChild(cell);
    //    this.CreateMiscFields(row);

    //    return row;
    //}



    //InterventionFields(rowNo) {
    //    let mainTbl = document.getElementById(Intervention.MainTableId());
    //    let tblBody = mainTbl.getElementsByTagName('tbody')[0];        
    //    this.CaseDrug(tblBody, caseNo, rowNo);
    //}

    //#endregion

    //#region Study
    getStudy() {
        let me = this;
        Extract.Helper.getStudyData().then(() => {
            me.SetInterventions();
        });
    }

    SetInterventions() {
        let me = this;
        let lstGrps = Extract.Helper.getEntityAsArray(Extract.EntityTypes.Groups);
        for (let i = 0; i < lstGrps.length; i++) {
            let grp = lstGrps[i];
            //let cases = [];
            let isetCases = [];
            let iSets = Extract.Helper.getEntityListByArrayId(grp.InterventionSets, Extract.EntityTypes.InterventionSets);
            for (let j = 0; j < iSets.length; j++) {
                let InterventionSet = iSets[j];
                //let _tbl = me.createTable(InterventionSet.id);
                if (InterventionSet.caseNo != null && InterventionSet.isDeleted != true) {
                    let _curCase = InterventionSet.caseNo.sort().join();
                    let _Case = isetCases.filter(a => { return a.strCase == _curCase });
                    if (_Case.length > 0) {
                        let _Case = isetCases.filter(a => { return a.strCase == _curCase });
                        if (_Case.length > 0) {
                            _Case[0]["intSetId"].push(InterventionSet.id);
                        }
                    } else {
                        //cases.push(_curCase);
                        let obj = {};
                        obj["strCase"] = _curCase;
                        obj["intSetId"] = [];
                        obj["intSetId"].push(InterventionSet.id);
                        isetCases.push(obj);
                    }
                }
            }

            me.createISetTableContainer(grp.id, grp.name, isetCases);
        }


        if (IUI.GroupTable.length > 0 && IUI.GroupTable[0].TableIds.length > 0) {
            IUI.tabDirection = TabDirection.LeftToRight;
            IUI.currentTD = $('td:first', $('#' + IUI.GroupTable[0].TableIds[0].tableId).find('tbody'));
            IUI.SmartDivPosition();
            //txt.offset({ top: this.currentTD.offset().top, left: this.currentTD.offset().left });

            let txt1 = document.getElementById(Intervention.SmartDiv());
            txt1.addEventListener("keydown", (e) => IUI.OnTab(txt1, e));

            txt1.addEventListener("keyup", (e) => IUI.OnKeyUp(txt1, e));
        }


        for (let i = 0; i < IUI.GroupTable.length; i++) {
            let _grp = IUI.GroupTable[i];
            for (let j = 0; j < _grp.TableIds.length; j++) {
                let _tblObj = _grp.TableIds[j];
                switch (_tblObj.caseName) {
                    case Cases.CaseName.Therapy_Drug:
                    case Cases.CaseName.Therapy_CancerIntervention:
                    case Cases.CaseName.Therapy_Radiotherapy:
                    case Cases.CaseName.Therapy_BiologicalVaccine:
                    case Cases.CaseName.Therapy_LifestyleModification:
                    case Cases.CaseName.Therapy_DietarySupplement:
                    case Cases.CaseName.Therapy_Other:
                        let _drg = new Drug();
                        _drg[CurrentTableObject.GroupId] = _grp.GroupId;
                        _drg[CurrentTableObject.TableId] = _tblObj.tableId;
                        _drg[CurrentTableObject.CaseNo] = Cases.CaseNo[_tblObj.caseName].sort().toString();
                        _drg[CurrentTableObject.CaseName] = _tblObj.caseName;

                        _drg.SetInterventions(_tblObj.intSetId);
                        break;

                    case Cases.CaseName.Therapy_Device:
                    case Cases.CaseName.Therapy_ProcedureSurgery:
                        let _ds = new DeviceSurgery();
                        _ds[CurrentTableObject.GroupId] = _grp.GroupId;
                        _ds[CurrentTableObject.TableId] = _tblObj.tableId;
                        _ds[CurrentTableObject.CaseNo] = Cases.CaseNo[_tblObj.caseName].sort().toString();
                        _ds[CurrentTableObject.CaseName] = _tblObj.caseName;
                        _ds.SetInterventions(_tblObj.intSetId);
                        break;

                    case Cases.CaseName.Therapy_BehavioralInformationalMaterial:
                        let _im = new BehavioralInformationalMaterial();
                        _im[CurrentTableObject.GroupId] = _grp.GroupId;
                        _im[CurrentTableObject.TableId] = _tblObj.tableId;
                        _im[CurrentTableObject.CaseNo] = Cases.CaseNo[_tblObj.caseName].sort().toString();
                        _im[CurrentTableObject.CaseName] = _tblObj.caseName;
                        _im.SetInterventions(_tblObj.intSetId);
                        break;

                    case Cases.CaseName.Therapy_BehavioralSessionMeeting:
                        let _sm = new BehavioralSessionMeeting();
                        _sm[CurrentTableObject.GroupId] = _grp.GroupId;
                        _sm[CurrentTableObject.TableId] = _tblObj.tableId;
                        _sm[CurrentTableObject.CaseNo] = Cases.CaseNo[_tblObj.caseName].sort().toString();
                        _sm[CurrentTableObject.CaseName] = _tblObj.caseName;
                        _sm.SetInterventions(_tblObj.intSetId);
                        break;

                    default:
                }
            }
        }
    }

    createISetTableContainer(grpId, grpName, isetCases) {
        let newIntSet = new MyApp.view.NewIntervention({ id: grpId, grpId: grpId, grpName: grpName /*isetCases: isetCases,  tbl: html*/ });
        let cntInt = newIntSet.query("[name='mainInterventionParent']");
        App.tpIntervention.add(newIntSet);
        let _cnt = document.getElementById(cntInt[0].getBody().dom.id);
        let _grpObj = { GroupId: grpId, GroupName: grpName, TableIds: [] };
        for (let i = 0; i < isetCases.length; i++) {
            let tableId = `${IdPrefix.Group}${grpId}-${i + 1}`;
            let _csObj = { caseNo: isetCases[i].strCase, caseName: Cases.CaseNameByCaseNo[isetCases[i].strCase], tableId, intSetId: isetCases[i].intSetId };
            _grpObj.TableIds.push(_csObj);
            _cnt.appendChild(IUI.createTable(tableId, grpId, isetCases[i].intSetId.join(), Cases.CaseNameByCaseNo[isetCases[i].strCase]));
            if (i != isetCases.length - 1) {
                _cnt.appendChild(document.createElement("hr"));
            }
        }
        IUI.GroupTable.push(_grpObj);
        //new Drug().setDrug(grpId);    
    }

    //static createTable(tableId, grpId, intSetIds, strCase) {
    //    //let tbl = document.createElement("table");
    //    //tbl.setAttribute(TdAttr.Class, "tblCls");
    //    //tbl.setAttribute(TdAttr.Id, grpId);
    //    //let tblBody = document.createElement("tbody");
    //    //tbl.appendChild(tblBody);
    //    //return tbl;
    //    //return new Ext.XTemplate(`<table id="${tableId}" ${TblAttr.intSetIds}="${intSetIds}" ${TblAttr.CaseName}="${strCase}" class="tblCls" ><tbody></tbody></table>`).html;
    //    //return `<table id="${tableId}" ${TblAttr.GroupId}="${grpId}" ${TblAttr.intSetIds}="${intSetIds}" ${TblAttr.CaseName}="${strCase}" class="tblCls" ><tbody></tbody></table>`;
    //}

    //#endregion
}

App = {
    loadStudy: () => {
        IUI = new Intervention();
        IUI.GroupTable = IUI.GroupTable ? IUI.GroupTable : [];
        IUI.getStudy();
    }
}

//#region Commented Window Load
//window.onload = () => {

//    IUI = new Intervention();
//    IUI.GroupTable = IUI.GroupTable ? IUI.GroupTable : [];
//    //top.IUI.AddMainTable();

//    //$.getJSON("Scripts/sample-json.json", function(data) {
//    //    top.Study = {};
//    //    top.Study.Data = data;
//    //});

//    //$(document).keydown(function (evt) {
//    //    if (evt.keyCode == 73 && (evt.ctrlKey)) { //73==>I
//    //        debugger;
//    //        let _curRowIdx = IUI.currentTD.parent('tr').attr(TrAttr.RowIndexIntervention);
//    //        let lstIntTr = $(Intervention.MainTableIdJQ()).find('tbody').find(`tr[${TrAttr.TRType}=${TRType.Intervention}]tr[${TrAttr.RowIndexIntervention}=${_curRowIdx}]`);
//    //        if (lstIntTr.length > 0) {
//    //            let lstTdAdd = $(Intervention.MainTableIdJQ()).find('tbody').find(`tr[${TrAttr.TRType}=${TRType.Intervention}]tr[${TrAttr.RowIndexIntervention}=${_curRowIdx}]`).find(`td[config='AddIntervention']`)
//    //            if (lstTdAdd.length > 0 && lstTdAdd[0].children.length > 0) {
//    //                let btnAdd = Ext.getCmp(lstTdAdd.eq(lstTdAdd.length - 1)[0].children[0].id);
//    //                if (btnAdd && !btnAdd.hidden) {
//    //                    btnAdd.fireEvent('click', btnAdd);
//    //                }
//    //            }
//    //        }
//    //    }
//    //});
//}
//#endregion