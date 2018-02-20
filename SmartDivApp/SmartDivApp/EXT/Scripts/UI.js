class InterventionUI {
    constructor() {
        //this.addMainTable();
    }
    
    AddMainTable() {
        // get the reference for the body
        var div = document.getElementById("tableMain");

        // creates a <table> element and a <tbody> element
        var tbl = document.createElement("table");
        tbl.setAttribute("class", "tblClr");
        tbl.setAttribute("id", "tblMain");
        var tblBody = document.createElement("tbody");

        //// creating all cells
        //for (var i = 1; i < 4; i++) {
        //    // creates a table row
        //    var row = document.createElement("tr");
        //    row.setAttribute("class", "trCls");
        //    for (var j = 1; j < 4; j++) {
        //        // Create a <td> element and a text node, make the text
        //        // node the contents of the <td>, and put the <td> at
        //        // the end of the table row
        //        var cell = document.createElement("td");
        //        cell.setAttribute("class", "tdCls");
        //        var cellText = document.createTextNode("Cell " + i + "x" + j);
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
        let cell = this.CreateTD(1, ComponentType.ExtractButton, "TreatmentTag", "I");
        row.appendChild(cell);

        cell = this.CreateTD(2, ComponentType.ExtractDropdown, "FixedDose", "No", "(None)");
        row.appendChild(cell);


        cell = this.CreateTD(3, ComponentType.ExtractText, "Intervention", "Intervention A", "Intervention A");        
        row.appendChild(cell);


        cell = this.CreateTD(4, ComponentType.ExtractText, "Manufacture", "Manufacture", "Manufacture");
        row.appendChild(cell);

        cell = this.CreateTD(5, ComponentType.ExtractText, "Brand", "Brand", "Brand");        
        row.appendChild(cell);

        cell = this.CreateActionTD(6, ComponentType.ExtractActionButton, "AddIntervention", "I");
        row.appendChild(cell);

        cell = this.CreateActionTD(7, ComponentType.ExtractActionButton, "DeleteIntervention", "I");
        row.appendChild(cell);


        tblBody.appendChild(row);
        // put the <tbody> in the <table>
        tbl.appendChild(tblBody);
        // appends <table> into <body>
        div.appendChild(tbl);

        var lbl = document.createElement("label");
        lbl.setAttribute("class", "tblClr");
        lbl.setAttribute("id", "lblTab");
        lbl.innerHTML = "<b>Tab Direction Change(Ctrl + Alt + Shift):-</b> Right to Left";
        div.appendChild(lbl);

        if (this.currentTD == null) {
            this.tabDirection = "right";
            this.currentTD = $('td:first', $($('#tblMain')));
            let txt = $('#txtEdit');
            txt.offset({ top: this.currentTD.offset().top, left: this.currentTD.offset().left });

            let txt1 = document.getElementById("txtEdit");
            txt1.addEventListener("keydown", (e) => this.OnTab(txt1, e));

            txt1.addEventListener("keyup", (e) => this.OnKeyUp(txt1, e));

            //$(".txtFld").on('keydown', "#txtEdit" , () => {
            //    this.onTab(txtFld, e);
            //});
            //txt.on("keydown", (e: KeyboardEvent) => {
            //    this.onTab(txt, e);
            //});

            this.CreateComponent();

            var lstTD = document.getElementById('tblMain').getElementsByTagName('td');
            for (var i = 0; i < lstTD.length; i++) {
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
        if (!Ext.isEmpty(cellText)) {
            let _cellText = document.createTextNode(cellText);
            cell.appendChild(_cellText);
        }
        return cell;
    }

    CreateActionTD(tabindex, cmpType, cmpConfig, cmpDPVal) {
        let cell = document.createElement("td");
        cell.setAttribute("class", "tdCls");
        cell.setAttribute("tabindex", tabindex);
        cell.setAttribute("cmpType", cmpType);
        cell.setAttribute("cmpConfig", cmpConfig);        
        new MyExtActionButtonField(cell).CreateComponent(Config[cmpConfig]());
        return cell;
    }

    OnTDClick(txtFld, e) {
        if (e.currentTarget) {
            this.currentTD = $(e.currentTarget);
            let txt = $('#txtEdit');
            this.CreateComponent();
            this.SmartDviPosition(txt);
        }
    }

    OnTab(txtFld, e) {
        if (e.keyCode == 9) {
            let txt = $(txtFld);
            if (this.tabDirection == "right") {
                let txtVal = txt.val();

                if (txtVal && this.currentTD) {
                    this.currentTD[0].innerHTML = txtVal;
                    txt.val("");
                }
                if (this.currentTD == null) {
                    this.currentTD = $('td:first', $($('#tblMain')));
                }
                else {
                    if (e.shiftKey) {
                        if (this.currentTD.prev('td').length > 0) {
                            this.currentTD = this.currentTD.prev('td');
                        }
                        else {
                            if (this.currentTD.parent('tr').prev('tr').length > 0) {
                                //currentTD = currentTD.parent('tr').next('tr').first('td');
                                this.currentTD = $('td:last', $(this.currentTD.parent('tr').prev('tr')));
                            } else {
                                this.currentTD = $('td:last', $($('#tblMain')));
                            }
                        }
                    } else {
                        if (this.currentTD.next('td').length > 0) {
                            this.currentTD = this.currentTD.next('td');
                        }
                        else {
                            if (this.currentTD.parent('tr').next('tr').length > 0) {
                                //currentTD = currentTD.parent('tr').next('tr').first('td');
                                this.currentTD = $('td:first', $(this.currentTD.parent('tr').next('tr')));
                            } else {
                                this.currentTD = $('td:first', $($('#tblMain')));
                            }
                        }
                    }
                }

            } else {
                let txtVal = txt.val();

                if (txtVal && this.currentTD) {
                    this.currentTD[0].innerHTML = txtVal;
                    txt.val("");
                }
                if (e.shiftKey) {
                    if (this.currentTD.parent('tr').prev('tr').length > 0) {
                        this.currentTD = this.currentTD.parent('tr').prev('tr').find('td').eq(this.currentTD.index());
                    } else {
                        if (this.currentTD.index() == this.currentTD.parent('tr').index()) {
                            //currentTD = $('tr:first', $($('.tblClr'))).find('td').eq(currentTD.index()+1);
                            this.currentTD = $('#tblMain').find('td:last');
                        } else {
                            this.currentTD = $('tr:last', $($('#tblMain'))).find('td').eq(this.currentTD.index() - 1);
                        }
                    }
                } else {
                    if (this.currentTD.parent('tr').next('tr').length > 0) {
                        this.currentTD = this.currentTD.parent('tr').next('tr').find('td').eq(this.currentTD.index());
                    } else {
                        if (this.currentTD.index() == this.currentTD.parent('tr').find('td').length - 1) {
                            //currentTD = $('tr:first', $($('.tblClr'))).find('td').eq(currentTD.index()+1);
                            this.currentTD = $('#tblMain').find('td:first');
                        } else {
                            this.currentTD = $('tr:first', $($('#tblMain'))).find('td').eq(this.currentTD.index() + 1);
                        }
                    }
                }
            }

            if (this.currentTD) {
                this.CreateComponent();
                //// var left = currentTD.offsetLeft;
                //// var top = currentTD.offsetTop;
                //// b.style.top = top;
                //// b.style.left = left;
                //// window.focus();
                //// b.focus();
                //txt.offset({ top: this.currentTD.offset().top, left: this.currentTD.offset().left });
                this.SmartDviPosition(txt);
                e.preventDefault();
            }
        }
    }

    OnKeyUp(txtFld, e) {
        if (e.altKey && e.ctrlKey && e.shiftKey && e.keyCode == 40) {
            if (this.tabDirection == "down") {
                this.tabDirection = "right";
                $('#lblTab').html("<b>Tab Direction Change(Ctrl + Alt + Shift):-</b> Right to Left");
            } else {
                this.tabDirection = "down";
                $('#lblTab').html("<b>Tab Direction Change(Ctrl + Alt + Shift):-</b> Up to Down");
            }
        }
    }


    CreateComponent() {
        let me = this;
        let cmpType = this.currentTD.attr('cmpType');
        let cmpConfig = this.currentTD.attr('cmpConfig');
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

    SmartDviPosition(txt) {
        let cmpType = this.currentTD.attr('cmpType');

        if (cmpType != ComponentType.ExtractActionButton) {
            txt.offset({ top: this.currentTD.offset().top, left: this.currentTD.offset().left });
        }
    }

    static DestroyComponents() {
        var childNodes = document.getElementById(this.SmartDiv()).childNodes;
        for (var i = childNodes.length - 1, cmp; i >= 0; i--) {
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

}


window.onload = () => {
    new InterventionUI().AddMainTable();
}