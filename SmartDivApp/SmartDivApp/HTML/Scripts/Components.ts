class MyTextField {

    constructor(private dpName: string, private addInComponent: string, private currentTD: any) {

    }

    CreateTextField() {
        let mi = document.createElement("input");
        mi.setAttribute('type', 'text');
        mi.setAttribute('class', 'txtFld');
        mi.setAttribute('autocomplete', 'off');
        mi.setAttribute('autofocus', 'autofocus');
        mi.value = this.currentTD[0].innerText;
        mi.addEventListener("blur", (e: KeyboardEvent) => this.onBlur(mi, e));

        document.getElementById(this.addInComponent).innerHTML = "";
        document.getElementById(this.addInComponent).appendChild(mi);
        mi.focus();
    }

    onBlur(txtFld, e: KeyboardEvent) {
        var txt = $(txtFld);
        var txtVal = txt.val();

        if (txtVal && this.currentTD) {
            this.currentTD[0].innerHTML = txtVal;
        }
    }
};


class MyDropdownField {

    constructor(private dpName: string, private addInComponent: any, private currentTD: any) {

    }

    CreateDropdownField() {
        var _store = $(this.currentTD).attr('fieldStore');
        if (_store) {
            let _strVal = JSON.parse(_store);
            document.getElementById(this.addInComponent).innerHTML = "";
            let mi = document.createElement("select");
            mi.setAttribute('class', 'cmpFld');
            mi.setAttribute('autofocus', 'autofocus');
            mi.addEventListener("blur", (e: KeyboardEvent) => this.onBlur(mi, e));
            for (var i = 0; i < _strVal.length; i++) {
                for (var prop in _strVal[i]) {
                    mi.options[i] = new Option(prop, _strVal[i][prop]);
                }
            }
            mi.value = this.currentTD[0].innerText;

            document.getElementById(this.addInComponent).appendChild(mi);
            mi.focus();
        }
    }

    onBlur(txtFld, e: KeyboardEvent) {
        var txt = $(txtFld);
        var txtVal = txt.val();

        if (txtVal && this.currentTD) {
            this.currentTD[0].innerHTML = txtVal;
        }
    }
}