/// <reference path="../../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="components.ts" />


//import { Textfield } from "./Components"

class InterventionUI {
    public currentTD: any;
    private tabDirection: string = "right";
    constructor() {
        //this.addMainTable();
    }

    addMainTable() {
        // get the reference for the body
        var div = document.getElementById("tableMain");

        // creates a <table> element and a <tbody> element
        var tbl = document.createElement("table");
        tbl.setAttribute("class", "tblClr");
        tbl.setAttribute("id", "tblMain");
        var tblBody = document.createElement("tbody");

        // creating all cells
        for (var i = 1; i < 4; i++) {
            // creates a table row
            var row = document.createElement("tr");
            row.setAttribute("class", "trCls");
            for (var j = 1; j < 4; j++) {
                // Create a <td> element and a text node, make the text
                // node the contents of the <td>, and put the <td> at
                // the end of the table row
                var cell = document.createElement("td");
                cell.setAttribute("class", "tdCls");
                var cellText = document.createTextNode("Cell " + i + "x" + j);
                cell.appendChild(cellText);
                row.appendChild(cell);

                if ((i == 1 && j == 1) || (i == 2 && j == 2) || (i == 3 && j == 3)) {
                    cell.setAttribute("fieldType", "combo");
                    if ((i == 1 && j == 1)) {
                        cell.setAttribute("fieldStore", '[{"Cell 1x1": "Cell 1x1"}, {"Cell 1x2":"Cell 1x2"},{"Cell 1x3":"Cell 1x3"}]');
                    } else if ((i == 2 && j == 2)) {
                        cell.setAttribute("fieldStore", '[{"Cell 2x1": "Cell 2x1"}, {"Cell 2x2":"Cell 2x2"},{"Cell 2x3":"Cell 2x3"}]');
                    } else if ((i == 3 && j == 3)) {
                        cell.setAttribute("fieldStore", '[{"Cell 3x1": "Cell 3x1"}, {"Cell 3x2":"Cell 3x2"},{"Cell 3x3":"Cell 3x3"}]');
                    }

                } else {
                    cell.setAttribute("fieldType", "text");
                }
            }

            // add the row to the end of the table body
            tblBody.appendChild(row);
        }

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
            //currentTD = document.getElementsByTagName("td")[0];
            //var txt = document.getElementById('txtEdit');
            //var left = currentTD.offsetLeft;
            //var top = currentTD.offsetTop;
            //txt.style.top = top;
            //txt.style.left = left;
            //// window.focus();
            //// b.focus();

            this.currentTD = $('td:first', $($('.tblClr')));
            let txt = $('#txtEdit');
            txt.offset({ top: this.currentTD.offset().top, left: this.currentTD.offset().left });

            let txt1 = document.getElementById("txtEdit");
            txt1.addEventListener("keydown", (e: KeyboardEvent) => this.onTab(txt1, e));

            txt1.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(txt1, e));

            //$(".txtFld").on('keydown', "#txtEdit" , () => {
            //    this.onTab(txtFld, e);
            //});
            //txt.on("keydown", (e: KeyboardEvent) => {
            //    this.onTab(txt, e);
            //});

            if (this.currentTD.attr('fieldType') == 'text') {
                let objT = new MyTextField("Intervention", "txtEdit", this.currentTD);
                if (objT) {
                    objT.CreateTextField();
                }
            } else {
                let objT = new MyDropdownField("Intervention", "txtEdit", this.currentTD);
                if (objT) {
                    objT.CreateDropdownField();
                }
            }

            var lstTD = document.getElementById('tblMain').getElementsByTagName('td');
            for (var i = 0; i < lstTD.length; i++) {
                lstTD[i].addEventListener('click', (e: MouseEvent) => this.onTDClick(lstTD[i], e));
            }
        }
    }

    onTDClick(txtFld: any, e: MouseEvent) {
        if (e.currentTarget) {
            this.currentTD = $(e.currentTarget);
            let txt = $('#txtEdit');
            if (this.currentTD.attr('fieldType') == 'text') {
                let objT = new MyTextField("Intervention", "txtEdit", this.currentTD);
                if (objT) {
                    objT.CreateTextField();
                }
            } else {
                let objT = new MyDropdownField("Intervention", "txtEdit", this.currentTD);
                if (objT) {
                    objT.CreateDropdownField();
                }
            }
            txt.offset({ top: this.currentTD.offset().top, left: this.currentTD.offset().left });
        }
    }

    onTab(txtFld: any, e: KeyboardEvent) {
        if (e.keyCode == 9) {
            let txt = $(txtFld);
            if (this.tabDirection == "right") {
                let txtVal = txt.val();

                if (txtVal && this.currentTD) {
                    this.currentTD[0].innerHTML = txtVal;
                    txt.val("");
                }
                if (this.currentTD == null) {
                    this.currentTD = $('td:first', $($('.tblClr')));
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
                                this.currentTD = $('td:last', $($('.tblClr')));
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
                                this.currentTD = $('td:first', $($('.tblClr')));
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
                            this.currentTD = $('tr:last', $($('.tblClr'))).find('td').eq(this.currentTD.index() - 1);
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
                            this.currentTD = $('tr:first', $($('.tblClr'))).find('td').eq(this.currentTD.index() + 1);
                        }
                    }
                }
            }

            if (this.currentTD) {
                if (this.currentTD.attr('fieldType') == 'text') {
                    let objT = new MyTextField("Intervention", "txtEdit", this.currentTD);
                    if (objT) {
                        objT.CreateTextField();
                    }
                } else {
                    let objT = new MyDropdownField("Intervention", "txtEdit", this.currentTD);
                    if (objT) {
                        objT.CreateDropdownField();
                    }
                }
                // var left = currentTD.offsetLeft;
                // var top = currentTD.offsetTop;
                // b.style.top = top;
                // b.style.left = left;
                // window.focus();
                // b.focus();
                txt.offset({ top: this.currentTD.offset().top, left: this.currentTD.offset().left });
                e.preventDefault();
            }
        }
    }

    onKeyUp(txtFld: any, e: KeyboardEvent) {
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
}

window.onload = () => {
    new InterventionUI().addMainTable();
}