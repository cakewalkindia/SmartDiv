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
        let childNodes = document.getElementById(Intervention.SmartDiv()).childNodes;
        for (let i = childNodes.length - 1, cmp; i >= 0; i--) {
            cmp = Ext.getCmp(childNodes[i].id);
            if (cmp) {
                cmp.destroy();
                //Ext.destroy(cmp);
            }
        }
    }

    static SmartDiv() {
        return 'txtEdit';
    }

    static MainTableId() {
        return 'tblMain';
    }

    static MainTableIdJQ() {
        return '#tblMain';
    }

    static GetParameterByName(name) {
        let url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    SmartDivPosition() {
        let txt = $('#' + Intervention.SmartDiv());
        let cmpType = this.currentTD.attr(TdAttr.Type);

        if (cmpType != ComponentType.ExtractActionButton) {
            txt.width(this.currentTD.width());
            txt.offset({ top: this.currentTD.offset().top, left: this.currentTD.offset().left });
        }
    }

    AddMainTable() {
        // get the reference for the body
        let div = document.getElementById("tableMain");

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



        if (this.currentTD == null) {
            this.tabDirection = TabDirection.LeftToRight;
            this.currentTD = $('td:first', $(Intervention.MainTableIdJQ()).find('tbody'));
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
            window.setTimeout(() => {
                this.CreateComponent();
            }, 250);
            //let lstTD = document.getElementById(Intervention.MainTableId()).getElementsByTagName('td');
            //for (let i = 0; i < lstTD.length; i++) {
            //    let _cmpTyp = $(lstTD[i]).attr(TdAttr.Type);
            //    if (typeof _cmpTyp !== 'undefined' && _cmpTyp != ComponentType.ExtractActionButton) {
            //        lstTD[i].addEventListener('click', (e) => this.OnTDClick(lstTD[i], e));
            //    }
            //}
        }
    }

    TabIndexTD() {
        return $(Intervention.MainTableIdJQ()).find('tbody').find('td').length + 1;
    }

    OnTDClick(txtFld, e) {
        if (e.currentTarget) {
            this.currentTD = $(e.currentTarget);
            this.SmartDivPosition();
            window.setTimeout(() => {
                this.CreateComponent();
            }, 250);
        }
    }

    SetCurrentTD(_curTD) {
        var isValid = true;
        this.currentTD = _curTD;
        let cmpDPVal = this.currentTD.attr(TdAttr.DPVal);
        let cmpType = this.currentTD.attr(TdAttr.Type);
        if (cmpDPVal == undefined || (cmpType == ComponentType.ExtractActionButton)) {
            isValid = true;
        } else {
            isValid = false;
        }
        return isValid;
    }

    ComputeTD(IsShiftKey) {
        if (this.tabDirection == TabDirection.LeftToRight) {
            if (IsShiftKey) {
                let isValid = true;
                do {
                    let _curTD = this.currentTD.prev('td');
                    if (_curTD.length > 0) {
                        isValid = this.SetCurrentTD(_curTD);
                    } else {
                        if (this.currentTD.parent('tr').prevAll('tr:visible').not('.trDisplayNone').length > 0) {
                            //currentTD = currentTD.parent('tr').next('tr').first('td');
                            _curTD = $('td:last', this.currentTD.parent('tr').prevAll('tr:visible').not('.trDisplayNone').last());
                            if (_curTD.length > 0) {
                                isValid = this.SetCurrentTD(_curTD);
                            }
                        } else {
                            _curTD = $('td:last', $('tr:visible:last', $(Intervention.MainTableIdJQ()).find('tbody')));
                            if (_curTD.length > 0) {
                                isValid = this.SetCurrentTD(_curTD);
                            }
                        }
                    }
                } while (isValid);
            } else {
                let isValid = true;
                do {
                    let _curTD = this.currentTD.next('td');
                    if (_curTD.length > 0) {
                        isValid = this.SetCurrentTD(_curTD);
                    } else {
                        //if (this.currentTD.parent('tr').next('tr:not(.trDisplayNone)').length > 0) {
                        if (this.currentTD.parent('tr').nextAll('tr:visible').not('.trDisplayNone').length > 0) {
                            //currentTD = currentTD.parent('tr').next('tr').first('td');
                            _curTD = $('td:first', this.currentTD.parent('tr').nextAll('tr:visible').not('.trDisplayNone').first());
                            if (_curTD.length > 0) {
                                isValid = this.SetCurrentTD(_curTD);
                            }
                        } else {
                            _curTD = $('td:first', $(Intervention.MainTableIdJQ()).find('tbody'));
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
                let _curClmIdx = this.currentTD.attr(TdAttr.ColumnIndex);
                do {

                    let _curTD = this.currentTD;
                    let _prvRowIdx = this.currentTD.parent('tr').index() - _Cnt;

                    if (_prvRowIdx < 0) {
                        _prvRowIdx = $(Intervention.MainTableIdJQ()).find('tbody').find('tr:visible').not('.trDisplayNone').last().index();
                        _curClmIdx = isNaN(Number(_curClmIdx)) ? 1 : Number(_curClmIdx) - 1;

                        if (_curClmIdx == 0) {
                            let _lstClmIdx = $(Intervention.MainTableIdJQ()).find('tbody').find('tr:visible').not('.trDisplayNone').last().find('td:last').attr(TdAttr.ColumnIndex);
                            _curClmIdx = isNaN(Number(_lstClmIdx)) ? 1 : Number(_lstClmIdx);
                        }
                    }

                    let _prvTr = $(Intervention.MainTableIdJQ()).find('tbody').find('tr').eq(_prvRowIdx); //parent('tbody').find('tr').eq(_prvRowIdx);

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
                let _curClmIdx = this.currentTD.attr(TdAttr.ColumnIndex);
                let _curTD = this.currentTD;
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
                if (this.currentTD == null) {
                    this.currentTD = $('td:first', $(Intervention.MainTableIdJQ()).find('tbody'));
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

            if (this.currentTD) {
                this.SmartDivPosition();
                window.setTimeout(() => {
                    this.CreateComponent();
                }, 250);
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
        let cmpType = me.currentTD.attr(TdAttr.Type);
        let cmpConfig = me.currentTD.attr(TdAttr.Config);
        let tdType = me.currentTD.attr(TdAttr.TDType);
        switch (cmpType) {
            case ComponentType.ExtractText:
                new MyExtTextField(me.currentTD).CreateComponent(ComponentList[tdType][cmpConfig]['config']);
                break;
            case ComponentType.ExtractDropdown:
                new MyExtDropdownField(me.currentTD).CreateComponent(ComponentList[tdType][cmpConfig]['config']);
                break;
            case ComponentType.ExtractButton:
                new MyExtButtonField(me.currentTD).CreateComponent(ComponentList[tdType][cmpConfig]['config']);
                break;
            //case ComponentType.ExtractAddInfo:
            //    new MyExtAddInfoField(me.currentTD).CreateComponent(Config[cmpConfig]());
            //    break;
            ////case ComponentType.ExtractActionButton:
            ////    new MyExtActionButtonField(me.currentTD).CreateComponent(Config[cmpConfig]());
            ////    break;
        }
    }

    CreateEmptyTD(colspan) {
        let cell = document.createElement("td");
        cell.setAttribute(TdAttr.ColSpan, colspan);
        return cell;
    }
    CreateTD(component) {
        let cell = document.createElement("td");
        cell.setAttribute(TdAttr.Class, component['cssClass']);
        cell.setAttribute(TdAttr.TabIndex, top.IUI.TabIndexTD());
        //cell.setAttribute(TdAttr.RowIndex, rowIndex);
        cell.setAttribute(TdAttr.Type, component['compType']);
        cell.setAttribute(TdAttr.ColumnIndex, component['columnIndex']);
        cell.setAttribute(TdAttr.Config, component['name']);
        cell.setAttribute(TdAttr.DPVal, component['dpValue']);
        cell.setAttribute(TdAttr.TDType, component['type']);
        if (typeof component['compType'] !== 'undefined' && component['compType'] != ComponentType.ExtractActionButton) {
            cell.addEventListener('click', (e) => this.OnTDClick(cell, e));

            //cell.addEventListener('load', (e) => top.IUI.OnTDClick(cell, e));            
        }
        if (!Ext.isEmpty(component['cellText'])) {
            let _cellText = document.createTextNode(component['cellText']);
            cell.appendChild(_cellText);
        }

        let data_cls = component['name'];
        if (data_cls == 'FixedDoseIntervention') {
            data_cls = ComponentList.Intervention.Intervention.name;
        } else if (data_cls == 'FixedDoseConcentration') {
            data_cls = ComponentList.Intervention.Manufacturer.name;
        } else if (data_cls == 'FixedDoseUnit') {
            data_cls = ComponentList.Intervention.Brand.name;
        }

        cell.setAttribute(TdAttr.DataClass, data_cls);
        return cell;
    }
    CreateActionTD(component, props) {
        let cell = document.createElement("td");
        cell.setAttribute(TdAttr.Class, component['cssClass']);
        cell.setAttribute(TdAttr.TabIndex, top.IUI.TabIndexTD());
        //cell.setAttribute(TdAttr.RowIndex, rowIndex);
        cell.setAttribute(TdAttr.Type, component['compType']);
        cell.setAttribute(TdAttr.ColumnIndex, component['columnIndex']);
        cell.setAttribute(TdAttr.Config, component['name']);
        cell.setAttribute(TdAttr.TDType, component['type']);
        if (typeof props === "undefined") {
            props = {};
        }

        let config = Config.AppendProps(component['config'], props);

        new MyExtActionButtonField(cell).CreateComponent(config);
        return cell;
    }

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
}



window.onload = () => {
    top.IUI = new Intervention();
    top.IUI.AddMainTable();   

    //$.getJSON("Scripts/sample-json.json", function(data) {
    //    top.Study = {};
    //    top.Study.Data = data;
    //});

    //$(document).keydown(function (evt) {
    //    if (evt.keyCode == 73 && (evt.ctrlKey)) { //73==>I
    //        debugger;
    //        let _curRowIdx = IUI.currentTD.parent('tr').attr(TrAttr.RowIndexIntervention);
    //        let lstIntTr = $(Intervention.MainTableIdJQ()).find('tbody').find(`tr[${TrAttr.TRType}=${TRType.Intervention}]tr[${TrAttr.RowIndexIntervention}=${_curRowIdx}]`);
    //        if (lstIntTr.length > 0) {
    //            let lstTdAdd = $(Intervention.MainTableIdJQ()).find('tbody').find(`tr[${TrAttr.TRType}=${TRType.Intervention}]tr[${TrAttr.RowIndexIntervention}=${_curRowIdx}]`).find(`td[config='AddIntervention']`)
    //            if (lstTdAdd.length > 0 && lstTdAdd[0].children.length > 0) {
    //                let btnAdd = Ext.getCmp(lstTdAdd.eq(lstTdAdd.length - 1)[0].children[0].id);
    //                if (btnAdd && !btnAdd.hidden) {
    //                    btnAdd.fireEvent('click', btnAdd);
    //                }
    //            }
    //        }
    //    }
    //});
}
