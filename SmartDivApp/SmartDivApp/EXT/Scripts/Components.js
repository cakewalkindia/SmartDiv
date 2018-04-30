/// <reference path="reference.js" />
Ext.define('MyApp.view.ExtractTextField', {
    extend: 'Ext.form.Text',
    //me: this,
    //matchFieldWidth: false,
    labelAlign: 'top',
    alias: ['widget.ExtractText'],
    width: 166,
    height: 30,
    border: false,
    //queryMode: 'local',
    //tpl: '<tpl for="."><div class="x-boundlist-item cmbtplborder">{field1} </div></tpl>',
    //displayTpl: '<tpl for=".">{field1}</tpl>',            
    //enableRegEx: true,
    //cls: "txtFld",
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
    width: 166,
    height: 28,
    border: false,
    //queryMode: 'local',
    tpl: '<tpl for="."><div class="x-boundlist-item cmbtplborder">{field1} </div></tpl>',
    displayTpl: '<tpl for=".">{field1}</tpl>',
    //enableRegEx: true,
    //cls: "txtFld",
    queryMode: 'local',
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


//#region Override destroy
Ext.form.BaseField.override({
    initComponent: function () {
        var me = this;
        me.ignoreOverride = false; // For custom implementaion of override
        me.callParent(arguments);
        me.on(
            'beforedestroy', me.onBeforeDestroy, me, //{ delay: 100 }
        )
    },
    onBeforeDestroy: function (cmp, eOpts) {
        //let cell = $(cmp.el.dom).parent('td');
        IUI.SetTDValue(cmp.getValue(), cmp.getRawValue());
        //let actTD = IUI.prevTD;
        //if (typeof actTD === 'undefined') {
        //    actTD = IUI.currentTD;
        //}

        //$(actTD).html(cmp.getRawValue());
        //$(actTD).attr(TdAttr.DPVal, cmp.getValue());
    }
});
//#endregion

class MyExtTextField {
    constructor(cmp) {  
        //this.addInComponent = 'txtEdit';
        let cmpDPId = IUI.currentTD.attr(TdAttr.DPId);
        //let cmpDPVal = IUI.currentTD.attr(TdAttr.DPVal);
        Intervention.DestroyComponents();//.then(() => {
        let mi = new MyApp.view.ExtractTextField(cmp['config']);
        mi.render(Intervention.SmartDiv());
        mi.focus();
        if (cmpDPId) {
            let dp = Extract.Data.Datapoints[cmpDPId];
            let dpVal = dp[cmp['dpFieldtoUpdate']];
            mi.setValue(dpVal);
        }        
        //});
    }

    //CreateComponent(cmpConfig) {
    //    let me = this;
    //    cmpConfig.me = me;
    //    //let mi = document.createElement("input");
    //    //mi.setAttribute('type', 'text');
    //    //mi.setAttribute('class', 'txtFld');
    //    //mi.setAttribute('autocomplete', 'off');
    //    //mi.setAttribute('autofocus', 'autofocus');
    //    //let me = this;
    //    //Ext.destroy(Ext.getCmp('txtTextfield'));
    //    //Ext.destroy(Ext.getCmp('txtDropdownfield'));
    //    //let mi = new MyApp.view.ExtractTextField({
    //    //    //id:'txtTextfield',
    //    //    value: me.currentTD[0].innerText,
    //    //});
    //    ////mi.setValue(IUI.currentTD[0].innerText);
    //    ////mi.addEventListener("blur", (e) => this.onBlur(mi, e));

    //    ////document.getElementById(this.addInComponent).innerHTML = "";
    //    ////document.getElementById(this.addInComponent).appendChild(mi); 
    //    let cmpDPVal = IUI.currentTD.attr(TdAttr.DPVal);
    //    Intervention.DestroyComponents();//.then(() => {
    //        let mi = new MyApp.view.ExtractTextField(cmpConfig);
    //        mi.render(Intervention.SmartDiv());
    //        mi.focus();
    //        mi.setValue(cmpDPVal);
    //    //});
    //}
};

class MyExtDropdownField {    
    constructor(cmp) {
        //this.addInComponent = 'txtEdit';
        let cmpDPId = IUI.currentTD.attr(TdAttr.DPId);

        //let cmpDPVal = IUI.currentTD.attr(TdAttr.DPVal);
        Intervention.DestroyComponents();//.then(() => {
        let mi = new MyApp.view.ExtractDropdownField(cmp['config']);
        mi.render(Intervention.SmartDiv());
        mi.focus();
        if (cmpDPId) {
            let dp = Extract.Data.Datapoints[cmpDPId];
            let dpVal = dp[cmp['dpFieldtoUpdate']];
            mi.setValue(dpVal);
        }
            //});
    }

    //CreateComponent(cmpConfig) {
    //    let me = this;
    //    cmpConfig.me = me;
    //    //let _store = $(IUI.currentTD).attr('fieldStore');
    //    //if (_store) {
    //        //let _strVal = JSON.parse(_store);
    //        //document.getElementById(this.addInComponent).innerHTML = "";
    //        //let mi = document.createElement("select");
    //        //mi.setAttribute('class', 'cmpFld');
    //        //mi.setAttribute('autofocus', 'autofocus');
    //        //mi.addEventListener("blur", (e) => this.onBlur(mi, e));
    //        //for (var i = 0; i < _strVal.length; i++) {
    //        //    for (var prop in _strVal[i]) {
    //        //        mi.options[i] = new Option(prop, _strVal[i][prop]);
    //        //    }
    //        //}
    //        //mi.value = IUI.currentTD[0].innerText;
    //        //Ext.destroy(Ext.getCmp('txtTextfield'));
    //        //Ext.destroy(Ext.getCmp('txtDropdownfield'));
    //        //let mi = new MyApp.view.ExtractDropdownField({
    //        //    id: 'txtDropdownfield',
    //        //    store: _strVal,
    //        //    value: me.currentTD[0].innerText,
    //        //    listeners: {
    //        //        blur: function (cmp, eOpts) {
    //        //            if (!Ext.isEmpty(cmp.getValue())) {
    //        //                me.currentTD[0].innerHTML = cmp.getValue();
    //        //            }
    //        //        }
    //        //    }
    //        //});
    //        let cmpDPVal = IUI.currentTD.attr(TdAttr.DPVal);
    //        Intervention.DestroyComponents();//.then(() => {
    //            let mi = new MyApp.view.ExtractDropdownField(cmpConfig);
    //            mi.render(Intervention.SmartDiv());
    //            mi.focus();
    //            mi.setValue(cmpDPVal);
    //        //});
    //    //}
    //}
}

class MyExtButtonField {    
    constructor(cmp) {
        //this.addInComponent = 'txtEdit';
        //let cmpDPVal = IUI.currentTD.attr(TdAttr.DPVal);
        Intervention.DestroyComponents();//.then(() => {
        let mi = new MyApp.view.ExtractButtonField(cmp['config']);
        mi.render(Intervention.SmartDiv());
        //mi.render(cell);
        mi.focus();
            //mi.setText(cmpDPVal);
            //}
        //});
    }

    //CreateComponent(cmpConfig) {
    //    let me = this;
    //    cmpConfig.me = me;
    //    //let _store = $(IUI.currentTD).attr('fieldStore');
    //    //if (_store) {
    //    //let _strVal = JSON.parse(_store);
    //    //document.getElementById(this.addInComponent).innerHTML = "";
    //    //let mi = document.createElement("select");
    //    //mi.setAttribute('class', 'cmpFld');
    //    //mi.setAttribute('autofocus', 'autofocus');
    //    //mi.addEventListener("blur", (e) => this.onBlur(mi, e));
    //    //for (var i = 0; i < _strVal.length; i++) {
    //    //    for (var prop in _strVal[i]) {
    //    //        mi.options[i] = new Option(prop, _strVal[i][prop]);
    //    //    }
    //    //}
    //    //mi.value = IUI.currentTD[0].innerText;
    //    //Ext.destroy(Ext.getCmp('txtTextfield'));
    //    //Ext.destroy(Ext.getCmp('txtDropdownfield'));
    //    //let mi = new MyApp.view.ExtractDropdownField({
    //    //    id: 'txtDropdownfield',
    //    //    store: _strVal,
    //    //    value: me.currentTD[0].innerText,
    //    //    listeners: {
    //    //        blur: function (cmp, eOpts) {
    //    //            if (!Ext.isEmpty(cmp.getValue())) {
    //    //                me.currentTD[0].innerHTML = cmp.getValue();
    //    //            }
    //    //        }
    //    //    }
    //    //});
    //    //cnf.id = 'btnDropdownfield';
    //    let cmpDPVal = IUI.currentTD.attr(TdAttr.DPVal);
    //    Intervention.DestroyComponents();//.then(() => {
    //        let mi = new MyApp.view.ExtractButtonField(cmpConfig);
    //        mi.render(Intervention.SmartDiv());
    //        mi.focus();
    //        //mi.setText(cmpDPVal);
    //        //}
    //    //});
    //}
}

class MyExtActionButtonField {
    constructor(cell, cmpConfig) {
        //this.addInComponent = 'txtEdit';
        //IUI.currentTD = $(currentTD);
        Intervention.DestroyComponents();//.then(() => {
        let mi = new MyApp.view.ExtractButtonField(cmpConfig);
        mi.render(cell);
        mi.focus();
        //});
    }

    //CreateComponent(cmpConfig) {
    //    let me = this;
    //    cmpConfig.me = me;        
    //    Intervention.DestroyComponents();//.then(() => {
    //        let mi = new MyApp.view.ExtractButtonField(cmpConfig);
    //        mi.render(IUI.currentTD[0]);
    //        mi.focus();
    //    //});
    //}
}

//class MyExtAddInfoField {
//    constructor(currentTD) {        
//        IUI.currentTD = currentTD;
//    }

//    CreateComponent(cmpConfig) {
//        let me = this;
//        cmpConfig.me = me;        
//        let cmpDPVal = IUI.currentTD.attr(TdAttr.DPVal);
//        Intervention.DestroyComponents();
//        let mi = new MyApp.view.ExtractAddInfoField(cmpConfig);
//        mi.render(Intervention.SmartDiv());
//        mi.focus();
//        mi.setValue(cmpDPVal);
//    }
//}








Ext.define('MyApp.view.NewIntervention', {
    extend: 'Ext.form.FieldSet',
    layout: {
        type: 'hbox',
    },
    //listeners: {
    //id: 'fldSetIntervention',
    //},
    //padding: 10,
    minHeight: 193,
    height: 700,
    autoScroll: true,
    overflowX: 'scroll',
    name: 'newInterventionTabFieldSet',
    grpId: "",
    grpName: "Total Population",
    //tbl: "",
    //isetCases:[],
    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: "displayfield",
                    value: me.grpName,
                    //layout: {
                    //    type: 'vbox',
                    //    align: 'center'
                    //},
                    width: 150,
                    height: 698,
                    //margins: "0 5 0 0",
                    style: "border-right: 1px solid #bfbfbf;",
                },
                {
                    xtype: 'container',
                    name: 'mainInterventionParent',
                    autoScroll: true,
                    overflowX: 'scroll',
                    //width: 1500,
                    //layout:'vbox',
                    //html: me.tbl,
                    //isetCases: me.isetCases,
                    height: 698,
                    listeners: {
                        afterrender: (cmp, eOpts) => {
                            
                            //let cmpWid = cmp.getWidth();
                            cmp.setWidth(cmp.findParentByType('fieldset').getWidth() - 172);
                        }
                    }
                    //    beforerender: (cmp, e) => {
                    //        let cases = [];
                    //        let isetCases = [];
                    //        let _grpId = cmp.up().grpId;
                    //        let grp = Extract.Helper.getEntity(Extract.EntityTypes.Groups, _grpId);
                    //        let iSets = Extract.Helper.getEntityListByArrayId(grp.InterventionSets, Extract.EntityTypes.InterventionSets);
                    //        for (let j = 0; j < iSets.length; j++) {
                    //            let InterventionSet = iSets[j];
                    //            //let _tbl = me.createTable(InterventionSet.id);
                    //            if (InterventionSet.caseNo != null && InterventionSet.isDeleted != true) {
                    //                let _curCase = InterventionSet.caseNo.sort().join();
                    //                if (cases.indexOf(_curCase) == -1) {
                    //                    cases.push(_curCase);
                    //                    let obj = {};
                    //                    obj["isetId"] = [];
                    //                    obj["case"] = _curCase;
                    //                    obj["isetId"].push(InterventionSet.id);
                    //                    isetCases.push(obj);
                    //                } else {
                    //                    let _Case = isetCases.filter(a => { return a.case == _curCase });
                    //                    if (_Case.length > 0) {
                    //                        _Case[0]["isetId"].push(InterventionSet.id);
                    //                    }
                    //                }
                    //            }
                    //        }

                    //        debugger

                    //        let _tblhtml = "";                            
                    //        for (var i = 0; i < isetCases.length; i++) {
                    //            let tableId = `${IdPrefix.Group}${_grpId}-${i + 1}`;                                
                    //            _tblhtml += Intervention.createTable(tableId, isetCases[i].isetId.join(), Cases.CaseNameByCaseNo[isetCases[i].case]);  
                    //            cmp.tableId = tableId;
                    //            cmp.strCase = Cases.CaseNameByCaseNo[isetCases[i].case];
                    //        }
                    //        cmp.html = _tblhtml;
                            
                    //    },
                    //    afterrender: (cmp, e) => {
                    //        debugger
                    //        //for (var i = 0; i < cmp.isetCases.length; i++) {
                    //        //    _tblhtml += Intervention.createTable(cmp.isetCases[i].isetId[0], cmp.isetCases[i].case);
                    //        //}
                    //        //cmp.html = _tblhtml;
                    //        new Drug(cmp.strCase).setDrug(cmp.tableId);
                    //    }
                    //}
                }
            ]
        });

        me.callParent(arguments);
    }    
});


//Ext.define('MyApp.view.NewInterventionTable', {
//    extend: 'Ext.form.FieldSet',
//    html: '<table id="${grpId}" class="tblCls" ><tbody></tbody></table> ',
//    width: 300,
//    height: 200,
//    padding: 20,    
//    initComponent: function () {
//        var me = this;
//        Ext.applyIf(me, {

//        });
//    }
//});