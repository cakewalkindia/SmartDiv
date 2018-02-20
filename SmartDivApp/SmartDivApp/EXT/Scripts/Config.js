class Config {

    static CommonMetod(currentTD, value, rawValue) {
        currentTD.innerHTML = rawValue;
        currentTD.setAttribute("cmpDPVal", value);
    }

    static TreatmentTag() {
        return {
            text: 'I',
            dpName: 'Treatment Tag',
            lblTag: 'TreatmentTag',
            cls: 'btn-treatment-tag btnFld'
        }
    }

    static FixedDose() {
        return {
            valueField: 'id',
            displayField: 'val',
            emptyText: '(None)',
            tpl: '<tpl for="."><div class="x-boundlist-item cmbtplborder">{val} </div></tpl>',
            displayTpl: '<tpl for=".">{val}</tpl>',
            store: {
                type: 'array',
                fields: ['id', 'val'],
                data: [['No', '(None)'], ['Yes', 'Fixed']]
            },
            listeners: {
                beforedestroy: (cmp, eOpts) => {
                    if (!Ext.isEmpty(cmp.getValue())) {
                        this.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                    }
                }
            }
        }
    }

    static Intervention() {
        return {
            emptyText: 'Intervention',
            //defaults: {
            listeners: {
                //blur: (cmp, eOpts) => {
                //    if (!Ext.isEmpty(cmp.getValue())) {
                //        cmp.me.currentTD[0].innerHTML = cmp.getValue();
                //    }
                //},
                beforedestroy: (cmp, eOpts) => {
                    if (!Ext.isEmpty(cmp.getValue())) {
                        this.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                    }
                }
            }
            //}
        }
    }

    static Manufacture() {
        return {
            emptyText: 'Manufacture',
            listeners: {
                //blur: (cmp, eOpts) => {
                //    if (!Ext.isEmpty(cmp.getValue())) {
                //        cmp.me.currentTD[0].innerHTML = cmp.getValue();
                //    }
                //},
                beforedestroy: (cmp, eOpts) => {
                    if (!Ext.isEmpty(cmp.getValue())) {
                        this.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                    }
                }
            }
        }
    }

    static Brand() {
        return {
            emptyText: 'Brand',
            listeners: {
                //blur: (cmp, eOpts) => {
                //    if (!Ext.isEmpty(cmp.getValue())) {
                //        cmp.me.currentTD[0].innerHTML = cmp.getValue();
                //    }
                //},
                beforedestroy: (cmp, eOpts) => {
                    if (!Ext.isEmpty(cmp.getValue())) {
                        this.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                    }
                }
            }
        }
    }

    static AddIntervention() {
        return {
            iconCls: '#Add',
            cls: 'Btn',
            listeners: {
                click: (cmp, eOpts) => {
                    console.log("Add button clicked!");
                }
            }
        }
    }

    static DeleteIntervention() {
        return {
            iconCls: '#Delete',            
            cls: 'Btn',
            listeners: {
                click: (cmp, eOpts) => {
                    console.log("Delete button clicked!");
                }
            }
        }
    }
}