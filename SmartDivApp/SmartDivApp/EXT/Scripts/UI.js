const TabDirection = {
    LeftToRight: "LeftToRight",
    TopToBottom: "TopToBottom"
};

class InterventionUI {    
    constructor() {
        //this.addMainTable();
    }

    static DestroyComponents() {
        let childNodes = document.getElementById(InterventionUI.SmartDiv()).childNodes;
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

    SmartDivPosition() {
        let txt = $('#' + InterventionUI.SmartDiv());
        let cmpType = this.currentTD.attr('cmpType');

        if (cmpType != ComponentType.ExtractActionButton) {
            txt.width(this.currentTD.width());
            txt.offset({ top: this.currentTD.offset().top, left: this.currentTD.offset().left });
        }
    }

    static MainTableId() {
        return 'tblMain';
    }

    static MainTableIdJQ() {
        return '#tblMain';
    }
    
    AddMainTable() {
        // get the reference for the body
        let div = document.getElementById("tableMain");

        // creates a <table> element and a <tbody> element
        let tbl = document.createElement("table");
        tbl.setAttribute("class", "tblClr");
        tbl.setAttribute("id", InterventionUI.MainTableId());
        let tblHead = document.createElement("thead");
        let rowH = document.createElement("tr");
        rowH.setAttribute("class", "thtrCls");
        tblHead.appendChild(rowH);
        var arr = ['Treatment Tag', 'Fixed Dose', 'Intervention', 'Manufacture', 'Brand', 'Add', 'Delete', 'Study Phase', 'Schedule', 'Route', 'Provider', 'Add', 'Delete', 'Name', 'Description', 'Add', 'Delete', 'Protocol', 'Dosage Type', 'Field Type', 'Field Value', 'Dosage Unit', 'Concentration', 'Concentration Unit', 'Frequency', 'Unit', 'Frequency Info', 'Duration', 'Duration Unit', 'Duration Info', 'Timpoint', 'Timpoint #', 'Timpoint Info', 'Add', 'Delete']
        for (var i = 1; i < 36; i++) {
            let cell = document.createElement("th");
            cell.setAttribute("class", "tdCls");
            cell.setAttribute("tabindex", 1);
            let _cellText = document.createTextNode(arr[i-1]);
            cell.appendChild(_cellText);
            rowH.appendChild(cell);
        }
        tbl.appendChild(tblHead);

        let tblBody = document.createElement("tbody");
        //// creating all cells
        //for (let i = 1; i < 4; i++) {
        //    // creates a table row
        //    let row = document.createElement("tr");
        //    row.setAttribute("class", "trCls");
        //    for (let j = 1; j < 4; j++) {
        //        // Create a <td> element and a text node, make the text
        //        // node the contents of the <td>, and put the <td> at
        //        // the end of the table row
        //        let cell = document.createElement("td");
        //        cell.setAttribute("class", "tdCls");
        //        let cellText = document.createTextNode("Cell " + i + "x" + j);
        //        cell.appendChild(cellText);
        //        row.appendChild(cell);

        //        if ((i == 1 && j == 1) || (i == 2 && j == 2) || (i == 3 && j == 3)) {
        //            cell.setAttribute("cmpType", "ExtractDropdown");
        //            cell.setAttribute("cmpConfig", "FixedDose");
                    
        //            //if ((i == 1 && j == 1)) {
        //            //    cell.setAttribute("fieldStore", '["Cell 1x1", "Cell 1x2", "Cell 1x3"]');
        //            //} else if ((i == 2 && j == 2)) {
        //            //    cell.setAttribute("fieldStore", '["Cell 2x1", "Cell 2x2", "Cell 2x3"]');
        //            //} else if ((i == 3 && j == 3)) {
        //            //    cell.setAttribute("fieldStore", '["Cell 3x1", "Cell 3x2", "Cell 3x3"]');
        //            //}

        //        } else {
        //            cell.setAttribute("cmpType", "ExtractText");
        //        }
        //    }

        //    // add the row to the end of the table body
        //    tblBody.appendChild(row);
        //}

        let row = this.CreateTR();
        tblBody.appendChild(row);
        tbl.appendChild(tblBody);
        div.appendChild(tbl);

        let cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractButton, "TreatmentTag", "I");
        row.appendChild(cell);

        cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractDropdown, "FixedDose", "No", "(None)");
        row.appendChild(cell);


        cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractText, "Intervention", "Intervention A", "Intervention A");        
        row.appendChild(cell);

        cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractText, "Manufacture", "Manufacture", "Manufacture");
        row.appendChild(cell);

        cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractText, "Brand", "Brand", "Brand");        
        row.appendChild(cell);

        cell = this.CreateActionTD(this.TabIndexTD(), ComponentType.ExtractActionButton, "AddIntervention");
        row.appendChild(cell);

        cell = this.CreateActionTD(this.TabIndexTD(), ComponentType.ExtractActionButton, "DeleteIntervention");
        row.appendChild(cell);

        cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractDropdown, "StudyPhase", "Treatment Period", "Treatment Period");
        row.appendChild(cell);

        cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractDropdown, "Schedule", "Afternoon", "Afternoon");
        row.appendChild(cell);

        cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractDropdown, "Route", "Extraocular", "Extraocular");
        row.appendChild(cell);

        cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractDropdown, "Provider", "Clinician", "Clinician");
        row.appendChild(cell);

        cell = this.CreateActionTD(this.TabIndexTD(), ComponentType.ExtractActionButton, "AddPhase");
        row.appendChild(cell);

        cell = this.CreateActionTD(this.TabIndexTD(), ComponentType.ExtractActionButton, "DeletePhase");
        row.appendChild(cell);

        cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractText, "MiscName", "Name", "Name");   
        row.appendChild(cell);

        cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractText, "MiscDesc", "Desc", "Desc");   
        row.appendChild(cell);

        cell = this.CreateActionTD(this.TabIndexTD(), ComponentType.ExtractActionButton, "AddMisc");
        row.appendChild(cell);

        cell = this.CreateActionTD(this.TabIndexTD(), ComponentType.ExtractActionButton, "DeleteMisc");
        row.appendChild(cell);

        cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractDropdown, "Protocol", "Protocol", "Protocol");
        row.appendChild(cell);

        cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractDropdown, "DosageType", "Basal", "Basal");
        row.appendChild(cell);

        cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractText, "FieldType", "A", "A");
        row.appendChild(cell);

        cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractText, "FieldValue", "B", "B");
        row.appendChild(cell);

        cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractDropdown, "DosageUnit", "CFU", "CFU");
        row.appendChild(cell);

        cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractText, "Concentration", "Concentration", "Concentration");
        row.appendChild(cell);

        cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractDropdown, "ConcentrationUnit", "%", "%");
        row.appendChild(cell);

        cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractText, "Frequency", "C", "C");
        row.appendChild(cell);

        cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractDropdown, "FrequencyUnit", "week", "d");
        row.appendChild(cell);

        cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractText, "FrequencyInfo", "D", "D");
        row.appendChild(cell);

        cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractText, "Duration", "E", "E");
        row.appendChild(cell);

        cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractDropdown, "DurationUnit", "Cells", "Cells");
        row.appendChild(cell);

        cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractText, "DurationInfo", "F", "F");
        row.appendChild(cell);

        cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractDropdown, "Timpoint", "Month", "Month");
        row.appendChild(cell);

        cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractText, "TimpointNo", "1", "1");
        row.appendChild(cell);

        cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractText, "TimpointInfo", "G", "G");
        row.appendChild(cell);

        cell = this.CreateActionTD(this.TabIndexTD(), ComponentType.ExtractActionButton, "AddDosage");
        row.appendChild(cell);

        cell = this.CreateActionTD(this.TabIndexTD(), ComponentType.ExtractActionButton, "DeleteDosage");
        row.appendChild(cell);


        //row = this.CreateTR();
        //tblBody.appendChild(row);

        //cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractButton, "TreatmentTag", "I");
        //row.appendChild(cell);

        //cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractDropdown, "FixedDose", "No", "(None)");
        //row.appendChild(cell);


        //cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractText, "Intervention", "Intervention A", "Intervention A");
        //row.appendChild(cell);

        //cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractText, "Manufacture", "Manufacture", "Manufacture");
        //row.appendChild(cell);

        //cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractText, "Brand", "Brand", "Brand");
        //row.appendChild(cell);

        //cell = this.CreateActionTD(this.TabIndexTD(), ComponentType.ExtractActionButton, "AddIntervention");
        //row.appendChild(cell);

        //cell = this.CreateActionTD(this.TabIndexTD(), ComponentType.ExtractActionButton, "DeleteIntervention");
        //row.appendChild(cell);

        //cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractDropdown, "StudyPhase", "Treatment Period", "Treatment Period");
        //row.appendChild(cell);

        //cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractDropdown, "Schedule", "Afternoon", "Afternoon");
        //row.appendChild(cell);

        //cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractDropdown, "Route", "Extraocular", "Extraocular");
        //row.appendChild(cell);

        //cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractDropdown, "Provider", "Clinician", "Clinician");
        //row.appendChild(cell);

        //cell = this.CreateActionTD(this.TabIndexTD(), ComponentType.ExtractActionButton, "AddPhase");
        //row.appendChild(cell);

        //cell = this.CreateActionTD(this.TabIndexTD(), ComponentType.ExtractActionButton, "DeletePhase");
        //row.appendChild(cell);

        //cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractText, "MiscName", "Name", "Name");
        //row.appendChild(cell);

        //cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractText, "MiscDesc", "Desc", "Desc");
        //row.appendChild(cell);

        //cell = this.CreateActionTD(this.TabIndexTD(), ComponentType.ExtractActionButton, "AddMisc");
        //row.appendChild(cell);

        //cell = this.CreateActionTD(this.TabIndexTD(), ComponentType.ExtractActionButton, "DeleteMisc");
        //row.appendChild(cell);

        //cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractDropdown, "Protocol", "Protocol", "Protocol");
        //row.appendChild(cell);

        //cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractDropdown, "DosageType", "Basal", "Basal");
        //row.appendChild(cell);

        //cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractText, "FieldType", "A", "A");
        //row.appendChild(cell);

        //cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractText, "FieldValue", "B", "B");
        //row.appendChild(cell);

        //cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractDropdown, "DosageUnit", "CFU", "CFU");
        //row.appendChild(cell);

        //cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractText, "Concentration", "Concentration", "Concentration");
        //row.appendChild(cell);

        //cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractDropdown, "ConcentrationUnit", "%", "%");
        //row.appendChild(cell);

        //cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractText, "Frequency", "C", "C");
        //row.appendChild(cell);

        //cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractDropdown, "FrequencyUnit", "week", "d");
        //row.appendChild(cell);

        //cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractText, "FrequencyInfo", "D", "D");
        //row.appendChild(cell);

        //cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractText, "Duration", "E", "E");
        //row.appendChild(cell);

        //cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractDropdown, "DurationUnit", "Cells", "Cells");
        //row.appendChild(cell);

        //cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractText, "DurationInfo", "F", "F");
        //row.appendChild(cell);

        //cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractDropdown, "Timpoint", "Month", "Month");
        //row.appendChild(cell);

        //cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractText, "TimpointNo", "1", "1");
        //row.appendChild(cell);

        //cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractText, "TimpointInfo", "G", "G");
        //row.appendChild(cell);

        //cell = this.CreateActionTD(this.TabIndexTD(), ComponentType.ExtractActionButton, "AddDosage");
        //row.appendChild(cell);

        //cell = this.CreateActionTD(this.TabIndexTD(), ComponentType.ExtractActionButton, "DeleteDosage");
        //row.appendChild(cell);



        //row = this.CreateTR();
        //tblBody.appendChild(row);

        //cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractButton, "TreatmentTag", "I");
        //row.appendChild(cell);

        //cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractDropdown, "FixedDose", "No", "(None)");
        //row.appendChild(cell);


        //cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractText, "Intervention", "Intervention A", "Intervention A");
        //row.appendChild(cell);

        //cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractText, "Manufacture", "Manufacture", "Manufacture");
        //row.appendChild(cell);

        //cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractText, "Brand", "Brand", "Brand");
        //row.appendChild(cell);

        //cell = this.CreateActionTD(this.TabIndexTD(), ComponentType.ExtractActionButton, "AddIntervention");
        //row.appendChild(cell);

        //cell = this.CreateActionTD(this.TabIndexTD(), ComponentType.ExtractActionButton, "DeleteIntervention");
        //row.appendChild(cell);

        //cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractDropdown, "StudyPhase", "Treatment Period", "Treatment Period");
        //row.appendChild(cell);

        //cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractDropdown, "Schedule", "Afternoon", "Afternoon");
        //row.appendChild(cell);

        //cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractDropdown, "Route", "Extraocular", "Extraocular");
        //row.appendChild(cell);

        //cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractDropdown, "Provider", "Clinician", "Clinician");
        //row.appendChild(cell);

        //cell = this.CreateActionTD(this.TabIndexTD(), ComponentType.ExtractActionButton, "AddPhase");
        //row.appendChild(cell);

        //cell = this.CreateActionTD(this.TabIndexTD(), ComponentType.ExtractActionButton, "DeletePhase");
        //row.appendChild(cell);

        //cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractText, "MiscName", "Name", "Name");
        //row.appendChild(cell);

        //cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractText, "MiscDesc", "Desc", "Desc");
        //row.appendChild(cell);

        //cell = this.CreateActionTD(this.TabIndexTD(), ComponentType.ExtractActionButton, "AddMisc");
        //row.appendChild(cell);

        //cell = this.CreateActionTD(this.TabIndexTD(), ComponentType.ExtractActionButton, "DeleteMisc");
        //row.appendChild(cell);

        //cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractDropdown, "Protocol", "Protocol", "Protocol");
        //row.appendChild(cell);

        //cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractDropdown, "DosageType", "Basal", "Basal");
        //row.appendChild(cell);

        //cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractText, "FieldType", "A", "A");
        //row.appendChild(cell);

        //cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractText, "FieldValue", "B", "B");
        //row.appendChild(cell);

        //cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractDropdown, "DosageUnit", "CFU", "CFU");
        //row.appendChild(cell);

        //cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractText, "Concentration", "Concentration", "Concentration");
        //row.appendChild(cell);

        //cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractDropdown, "ConcentrationUnit", "%", "%");
        //row.appendChild(cell);

        //cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractText, "Frequency", "C", "C");
        //row.appendChild(cell);

        //cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractDropdown, "FrequencyUnit", "week", "d");
        //row.appendChild(cell);

        //cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractText, "FrequencyInfo", "D", "D");
        //row.appendChild(cell);

        //cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractText, "Duration", "E", "E");
        //row.appendChild(cell);

        //cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractDropdown, "DurationUnit", "Cells", "Cells");
        //row.appendChild(cell);

        //cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractText, "DurationInfo", "F", "F");
        //row.appendChild(cell);

        //cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractDropdown, "Timpoint", "Month", "Month");
        //row.appendChild(cell);

        //cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractText, "TimpointNo", "1", "1");
        //row.appendChild(cell);

        //cell = this.CreateTD(this.TabIndexTD(), ComponentType.ExtractText, "TimpointInfo", "G", "G");
        //row.appendChild(cell);

        //cell = this.CreateActionTD(this.TabIndexTD(), ComponentType.ExtractActionButton, "AddDosage");
        //row.appendChild(cell);

        //cell = this.CreateActionTD(this.TabIndexTD(), ComponentType.ExtractActionButton, "DeleteDosage");
        //row.appendChild(cell);

        ////tblBody.appendChild(row);
        //// put the <tbody> in the <table>
        ////tbl.appendChild(tblBody);
        //// appends <table> into <body>
        ////div.appendChild(tbl);

        let lbl = document.createElement("label");
        //lbl.setAttribute("class", "tblClr");
        lbl.setAttribute("id", "lblTab");
        lbl.innerHTML = "<b>Tab Direction Change(Ctrl + Alt + Shift):-</b> Right to Left";
        div.appendChild(lbl);

        if (this.currentTD == null) {
            this.tabDirection = TabDirection.LeftToRight;
            this.currentTD = $('td:first', $(InterventionUI.MainTableIdJQ()));
            this.SmartDivPosition();
            //txt.offset({ top: this.currentTD.offset().top, left: this.currentTD.offset().left });

            let txt1 = document.getElementById(InterventionUI.SmartDiv());
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
            let lstTD = document.getElementById(InterventionUI.MainTableId()).getElementsByTagName('td');
            for (let i = 0; i < lstTD.length; i++) {
                lstTD[i].addEventListener('click', (e) => this.OnTDClick(lstTD[i], e));
            }
        }
    }

    CreateTR() {
        let row = document.createElement("tr");
        row.setAttribute("class", "trCls");
        return row;
    }

    CreateTD(tabindex, cmpType, cmpConfig, cmpDPVal, cellText) {
        let cell = document.createElement("td");
        cell.setAttribute("class", "tdCls");
        cell.setAttribute("tabindex", tabindex);
        cell.setAttribute("cmpType", cmpType);
        cell.setAttribute("cmpConfig", cmpConfig);
        cell.setAttribute("cmpDPVal", cmpDPVal);
        cell.addEventListener('click', (e) => this.OnTDClick(cell, e));
        if (!Ext.isEmpty(cellText)) {
            let _cellText = document.createTextNode(cellText);
            cell.appendChild(_cellText);
        }
        return cell;
    }

    CreateActionTD(tabindex, cmpType, cmpConfig) {
        let cell = document.createElement("td");
        cell.setAttribute("class", "tdCls");
        cell.setAttribute("tabindex", tabindex);
        cell.setAttribute("cmpType", cmpType);
        cell.setAttribute("cmpConfig", cmpConfig);        
        new MyExtActionButtonField(cell).CreateComponent(Config[cmpConfig]());
        return cell;
    }

    TabIndexTD() {
        return $(InterventionUI.MainTableIdJQ()).find('td').length + 1;
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
        let cmpDPVal = this.currentTD.attr('cmpType');
        if (cmpDPVal == ComponentType.ExtractActionButton) {
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
                        if (this.currentTD.parent('tr').prev('tr').length > 0) {
                            //currentTD = currentTD.parent('tr').next('tr').first('td');
                            _curTD = $('td:last', $(this.currentTD.parent('tr').prev('tr')));
                            if (_curTD.length > 0) {
                                isValid = this.SetCurrentTD(_curTD);
                            }
                        } else {
                            _curTD = $('td:last', $($(InterventionUI.MainTableIdJQ())));
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
                        if (this.currentTD.parent('tr').next('tr').length > 0) {
                            //currentTD = currentTD.parent('tr').next('tr').first('td');
                            _curTD = $('td:first', $(this.currentTD.parent('tr').next('tr')));
                            if (_curTD.length > 0) {
                                isValid = this.SetCurrentTD(_curTD);
                            }
                        } else {
                            _curTD = $('td:first', $(InterventionUI.MainTableIdJQ()));
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
                do {
                    let _curTD = this.currentTD;
                    if (this.currentTD.parent('tr').prev('tr').length > 0) {
                        //this.currentTD = this.currentTD.parent('tr').prev('tr').find('td').eq(this.currentTD.index());
                        _curTD = this.currentTD.parent('tr').prev('tr').find('td').eq(this.currentTD.index());
                        if (_curTD.length > 0) {
                            isValid = this.SetCurrentTD(_curTD);
                        }
                    } else {
                        if (this.currentTD.index() == this.currentTD.parent('tr').index()) {
                            ////currentTD = $('tr:first', $($('.tblClr'))).find('td').eq(currentTD.index()+1);
                            //this.currentTD = $(InterventionUI.MainTableIdJQ()).find('td:last');
                            _curTD = $(InterventionUI.MainTableIdJQ()).find('td:last');
                            if (_curTD.length > 0) {
                                isValid = this.SetCurrentTD(_curTD);
                            }
                        } else {
                            //this.currentTD = $('tr:last', $($(InterventionUI.MainTableIdJQ()))).find('td').eq(this.currentTD.index() - 1);
                            _curTD = $('tr:last', $(InterventionUI.MainTableIdJQ())).find('td').eq(this.currentTD.index() - 1);
                            if (_curTD.length > 0) {
                                isValid = this.SetCurrentTD(_curTD);
                            }
                        }
                    }
                } while (isValid);
            } else {
                let isValid = true;
                do {
                    let _curTD = this.currentTD;
                    if (this.currentTD.parent('tr').next('tr').length > 0) {
                        //this.currentTD = this.currentTD.parent('tr').next('tr').find('td').eq(this.currentTD.index());
                        _curTD = this.currentTD.parent('tr').next('tr').find('td').eq(this.currentTD.index());
                        if (_curTD.length > 0) {
                            isValid = this.SetCurrentTD(_curTD);
                        }
                    } else {
                        if (this.currentTD.index() == this.currentTD.parent('tr').find('td').length - 1) {
                            ////currentTD = $('tr:first', $($('.tblClr'))).find('td').eq(currentTD.index()+1);
                            //this.currentTD = $(InterventionUI.MainTableIdJQ()).find('td:first');
                            _curTD = $(InterventionUI.MainTableIdJQ()).find('td:first');
                            if (_curTD.length > 0) {
                                isValid = this.SetCurrentTD(_curTD);
                            }
                        } else {
                            //this.currentTD = $('tr:first', $($(InterventionUI.MainTableIdJQ()))).find('td').eq(this.currentTD.index() + 1);
                            _curTD = $('tr', $(InterventionUI.MainTableIdJQ())).eq(1).find('td').eq(this.currentTD.index() + 1);
                            if (_curTD.length > 0) {
                                isValid = this.SetCurrentTD(_curTD);
                            }
                        }
                    }
                } while (isValid);
            }
        }
    }

    OnTab(txtFld, e) {
        if (e.keyCode == 9) {
            //let txt = $(InterventionUI.SmartDiv());
            if (this.tabDirection == TabDirection.LeftToRight) {
                //let txtVal = txt.val();

                //if (txtVal && this.currentTD) {
                //    this.currentTD[0].innerHTML = txtVal;
                //    txt.val("");
                //}
                if (this.currentTD == null) {
                    this.currentTD = $('td:first', $(InterventionUI.MainTableIdJQ()));
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
                        //        this.currentTD = $('td:last', $($(InterventionUI.MainTableIdJQ())));
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
                        //        this.currentTD = $('td:first', $($(InterventionUI.MainTableIdJQ())));
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
                    //        this.currentTD = $(InterventionUI.MainTableIdJQ()).find('td:last');
                    //    } else {
                    //        this.currentTD = $('tr:last', $($(InterventionUI.MainTableIdJQ()))).find('td').eq(this.currentTD.index() - 1);
                    //    }
                    //}
                } else {
                    //if (this.currentTD.parent('tr').next('tr').length > 0) {
                    //    this.currentTD = this.currentTD.parent('tr').next('tr').find('td').eq(this.currentTD.index());
                    //} else {
                    //    if (this.currentTD.index() == this.currentTD.parent('tr').find('td').length - 1) {
                    //        //currentTD = $('tr:first', $($('.tblClr'))).find('td').eq(currentTD.index()+1);
                    //        this.currentTD = $(InterventionUI.MainTableIdJQ()).find('td:first');
                    //    } else {
                    //        this.currentTD = $('tr:first', $($(InterventionUI.MainTableIdJQ()))).find('td').eq(this.currentTD.index() + 1);                            
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
        if (e.altKey && e.ctrlKey && e.shiftKey && e.keyCode == 40) {
            if (this.tabDirection == TabDirection.TopToBottom) {
                this.tabDirection = TabDirection.LeftToRight;
                $('#lblTab').html("<b>Tab Direction Change(Ctrl + Alt + Shift):-</b> Right to Left");
            } else {
                this.tabDirection = TabDirection.TopToBottom;
                $('#lblTab').html("<b>Tab Direction Change(Ctrl + Alt + Shift):-</b> Up to Down");
            }
        }
    }

    CreateComponent() {
        let me = this;
        let cmpType = me.currentTD.attr('cmpType');
        let cmpConfig = me.currentTD.attr('cmpConfig');
        switch (cmpType) {
            case ComponentType.ExtractText:
                new MyExtTextField(me.currentTD).CreateComponent(Config[cmpConfig]());
                break;
            case ComponentType.ExtractDropdown:
                new MyExtDropdownField(me.currentTD).CreateComponent(Config[cmpConfig]());
                break;
            case ComponentType.ExtractButton:
                new MyExtButtonField(me.currentTD).CreateComponent(Config[cmpConfig]());
                break;
            //case ComponentType.ExtractActionButton:
            //    new MyExtActionButtonField(me.currentTD).CreateComponent(Config[cmpConfig]());
            //    break;
        }
    }
}


window.onload = () => {
    top.IUI = new InterventionUI();
    top.IUI.AddMainTable();   
}