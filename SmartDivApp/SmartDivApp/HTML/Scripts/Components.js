var MyTextField = /** @class */ (function () {
    function MyTextField(dpName, addInComponent, currentTD) {
        this.dpName = dpName;
        this.addInComponent = addInComponent;
        this.currentTD = currentTD;
    }
    MyTextField.prototype.CreateTextField = function () {
        var _this = this;
        var mi = document.createElement("input");
        mi.setAttribute('type', 'text');
        mi.setAttribute('class', 'txtFld');
        mi.setAttribute('autocomplete', 'off');
        mi.setAttribute('autofocus', 'autofocus');
        mi.value = this.currentTD[0].innerText;
        mi.addEventListener("blur", function (e) { return _this.onBlur(mi, e); });
        document.getElementById(this.addInComponent).innerHTML = "";
        document.getElementById(this.addInComponent).appendChild(mi);
        mi.focus();
    };
    MyTextField.prototype.onBlur = function (txtFld, e) {
        var txt = $(txtFld);
        var txtVal = txt.val();
        if (txtVal && this.currentTD) {
            this.currentTD[0].innerHTML = txtVal;
        }
    };
    return MyTextField;
}());
;
var MyDropdownField = /** @class */ (function () {
    function MyDropdownField(dpName, addInComponent, currentTD) {
        this.dpName = dpName;
        this.addInComponent = addInComponent;
        this.currentTD = currentTD;
    }
    MyDropdownField.prototype.CreateDropdownField = function () {
        var _this = this;
        var _store = $(this.currentTD).attr('fieldStore');
        if (_store) {
            var _strVal = JSON.parse(_store);
            document.getElementById(this.addInComponent).innerHTML = "";
            var mi_1 = document.createElement("select");
            mi_1.setAttribute('class', 'cmpFld');
            mi_1.setAttribute('autofocus', 'autofocus');
            mi_1.addEventListener("blur", function (e) { return _this.onBlur(mi_1, e); });
            for (var i = 0; i < _strVal.length; i++) {
                for (var prop in _strVal[i]) {
                    mi_1.options[i] = new Option(prop, _strVal[i][prop]);
                }
            }
            mi_1.value = this.currentTD[0].innerText;
            document.getElementById(this.addInComponent).appendChild(mi_1);
            mi_1.focus();
        }
    };
    MyDropdownField.prototype.onBlur = function (txtFld, e) {
        var txt = $(txtFld);
        var txtVal = txt.val();
        if (txtVal && this.currentTD) {
            this.currentTD[0].innerHTML = txtVal;
        }
    };
    return MyDropdownField;
}());
//# sourceMappingURL=Components.js.map