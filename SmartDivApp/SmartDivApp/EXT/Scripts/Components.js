const ComponentType = {
    ExtractText: "ExtractText",
    ExtractDropdown: "ExtractDropdown",
    ExtractButton: "ExtractButton",
    ExtractActionButton: "ExtractActionButton"
};

Ext.define('MyApp.view.ExtractTextField', {
    extend: 'Ext.form.Text',
    //me: this,
    //matchFieldWidth: false,
    labelAlign: 'top',
    alias: ['widget.ExtractText'],
    //queryMode: 'local',
    //tpl: '<tpl for="."><div class="x-boundlist-item cmbtplborder">{field1} </div></tpl>',
    //displayTpl: '<tpl for=".">{field1}</tpl>',            
    //enableRegEx: true,
    cls: "txtFld",
    //listeners: {
    //    blur: function (cmp, eOpts) {
    //        if (!Ext.isEmpty(cmp.getValue())) {
    //            cmp.me.currentTD[0].innerHTML = cmp.getValue();
    //        }
    //    }
    //}
});

Ext.define('MyApp.view.ExtractDropdownField', {
    extend: 'Ext.form.ComboBox',
    //me: this,
    //matchFieldWidth: false,
    labelAlign:'top',
    alias: ['widget.ExtractDropdown'],
    //queryMode: 'local',
    tpl: '<tpl for="."><div class="x-boundlist-item cmbtplborder">{field1} </div></tpl>',
    displayTpl: '<tpl for=".">{field1}</tpl>',
    //enableRegEx: true,
    cls: "txtFld",
    //listeners: {
    //    blur: function (cmp, eOpts) {
    //        if (!Ext.isEmpty(cmp.getValue())) {
    //            me.currentTD[0].innerHTML = cmp.getValue();
    //        }
    //    }
    //}
});

Ext.define('MyApp.view.ExtractButtonField', {
    extend: 'Ext.button.Button',    
    alias: ['widget.ExtractButton'],
    cls: "txtFld",
    labelAlign: 'top',
});

class MyExtTextField {
    constructor(currentTD) {  
        //this.addInComponent = 'txtEdit';
        this.currentTD = currentTD;
    }

    CreateComponent(cmpConfig) {
        let me = this;
        cmpConfig.me = me;
        //let mi = document.createElement("input");
        //mi.setAttribute('type', 'text');
        //mi.setAttribute('class', 'txtFld');
        //mi.setAttribute('autocomplete', 'off');
        //mi.setAttribute('autofocus', 'autofocus');
        //let me = this;
        //Ext.destroy(Ext.getCmp('txtTextfield'));
        //Ext.destroy(Ext.getCmp('txtDropdownfield'));
        //let mi = new MyApp.view.ExtractTextField({
        //    //id:'txtTextfield',
        //    value: me.currentTD[0].innerText,
        //});
        ////mi.setValue(this.currentTD[0].innerText);
        ////mi.addEventListener("blur", (e) => this.onBlur(mi, e));

        ////document.getElementById(this.addInComponent).innerHTML = "";
        ////document.getElementById(this.addInComponent).appendChild(mi); 
        let cmpDPVal = this.currentTD.attr('cmpDPVal');
        InterventionUI.DestroyComponents();         
        let mi = new MyApp.view.ExtractTextField(cmpConfig);
        mi.render(InterventionUI.SmartDiv());
        mi.focus();
        mi.setValue(cmpDPVal);
    }
};


class MyExtDropdownField {    
    constructor(currentTD) {
        //this.addInComponent = 'txtEdit';
        this.currentTD = currentTD;
    }

    CreateComponent(cmpConfig) {
        let me = this;
        cmpConfig.me = me;
        //let _store = $(this.currentTD).attr('fieldStore');
        //if (_store) {
            //let _strVal = JSON.parse(_store);
            //document.getElementById(this.addInComponent).innerHTML = "";
            //let mi = document.createElement("select");
            //mi.setAttribute('class', 'cmpFld');
            //mi.setAttribute('autofocus', 'autofocus');
            //mi.addEventListener("blur", (e) => this.onBlur(mi, e));
            //for (var i = 0; i < _strVal.length; i++) {
            //    for (var prop in _strVal[i]) {
            //        mi.options[i] = new Option(prop, _strVal[i][prop]);
            //    }
            //}
            //mi.value = this.currentTD[0].innerText;
            //Ext.destroy(Ext.getCmp('txtTextfield'));
            //Ext.destroy(Ext.getCmp('txtDropdownfield'));
            //let mi = new MyApp.view.ExtractDropdownField({
            //    id: 'txtDropdownfield',
            //    store: _strVal,
            //    value: me.currentTD[0].innerText,
            //    listeners: {
            //        blur: function (cmp, eOpts) {
            //            if (!Ext.isEmpty(cmp.getValue())) {
            //                me.currentTD[0].innerHTML = cmp.getValue();
            //            }
            //        }
            //    }
            //});
            let cmpDPVal = this.currentTD.attr('cmpDPVal');
            InterventionUI.DestroyComponents();            
            let mi = new MyApp.view.ExtractDropdownField(cmpConfig);            
            mi.render(InterventionUI.SmartDiv());
            mi.focus();
            mi.setValue(cmpDPVal);
        //}
    }
}


class MyExtButtonField {    
    constructor(currentTD) {
        //this.addInComponent = 'txtEdit';
        this.currentTD = currentTD;
    }

    CreateComponent(cmpConfig) {
        let me = this;
        cmpConfig.me = me;
        //let _store = $(this.currentTD).attr('fieldStore');
        //if (_store) {
        //let _strVal = JSON.parse(_store);
        //document.getElementById(this.addInComponent).innerHTML = "";
        //let mi = document.createElement("select");
        //mi.setAttribute('class', 'cmpFld');
        //mi.setAttribute('autofocus', 'autofocus');
        //mi.addEventListener("blur", (e) => this.onBlur(mi, e));
        //for (var i = 0; i < _strVal.length; i++) {
        //    for (var prop in _strVal[i]) {
        //        mi.options[i] = new Option(prop, _strVal[i][prop]);
        //    }
        //}
        //mi.value = this.currentTD[0].innerText;
        //Ext.destroy(Ext.getCmp('txtTextfield'));
        //Ext.destroy(Ext.getCmp('txtDropdownfield'));
        //let mi = new MyApp.view.ExtractDropdownField({
        //    id: 'txtDropdownfield',
        //    store: _strVal,
        //    value: me.currentTD[0].innerText,
        //    listeners: {
        //        blur: function (cmp, eOpts) {
        //            if (!Ext.isEmpty(cmp.getValue())) {
        //                me.currentTD[0].innerHTML = cmp.getValue();
        //            }
        //        }
        //    }
        //});
        //cnf.id = 'btnDropdownfield';
        let cmpDPVal = this.currentTD.attr('cmpDPVal');
        InterventionUI.DestroyComponents();
        let mi = new MyApp.view.ExtractButtonField(cmpConfig);
        mi.render(InterventionUI.SmartDiv());
        mi.focus();
        mi.setText(cmpDPVal);
        //}
    }
}


class MyExtActionButtonField {
    constructor(currentTD) {
        //this.addInComponent = 'txtEdit';
        this.currentTD = currentTD;
    }

    CreateComponent(cmpConfig) {
        let me = this;
        cmpConfig.me = me;        
        InterventionUI.DestroyComponents();
        let mi = new MyApp.view.ExtractButtonField(cmpConfig);
        mi.render(this.currentTD);
        mi.focus();
    }
}