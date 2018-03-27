/// <reference path="reference.js" />

let ColumnIdx = 1;

const ComponentList = {
    Intervention: {
        //GroupName: {
        //    dpName: "GroupName",
        //    columnIndex: 1
        //},
        //AddInfo: {
        //    dpName: "AddInfo",
        //    columnIndex: 2
        //},
        TreatmentTag: {
            type: 'Intervention',
            compType: ComponentType.ExtractButton,
            name: "TreatmentTag",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "Backbone Intervention",
            cellText: "B",
            config: {
                //fieldLabel: 'Treatment Tag',
                dpName: 'Treatment Tag',
                tooltip: "Treatment Tag",
                //lblTag: 'TreatmentTag',
                cls: 'btn-treatment-tag btnFld',
                //dpVal : "Backbone Intervention",
                listeners: {
                    click: (btn, eOpts) => {
                        //if (cmp.getText() == "I") {
                        //    cmp.setText("C");
                        //} else {
                        //    cmp.setText("I");
                        //}
                        let dp = {} //cmp.entity.id;
                        dp.Value = btn.me.currentTD.attr(TdAttr.DPVal);
                        //btn.suspendLayouts();
                        if (dp.Value == "Treatment Tag") {
                            //Extract.Helper.setEntity(Extract.EntityTypes.Datapoints, btn.enty.id, { Value: 'Intervention' });
                            dp.Value = "Intervention";
                            btn.setText("I");
                            //btn.removeCls("btn-treatment-tag-i");
                            //btn.addCls("btn-treatment-tag-i");
                        } else if (dp.Value == "Intervention") {
                            //Extract.Helper.setEntity(Extract.EntityTypes.Datapoints, btn.enty.id, { Value: 'Control' });
                            dp.Value = "Control";
                            btn.setText("C");
                            btn.removeCls("btn-treatment-tag-i");
                            btn.addCls("btn-treatment-tag-c");
                        } else if (dp.Value == "Control") {
                            //Extract.Helper.setEntity(Extract.EntityTypes.Datapoints, btn.enty.id, { Value: 'Rescue Intervention' });
                            dp.Value = "Rescue Intervention";
                            btn.setText("R");
                            btn.removeCls("btn-treatment-tag-c");
                            btn.addCls("btn-treatment-tag-r");
                        } else if (dp.Value == "Rescue Intervention") {
                            //Extract.Helper.setEntity(Extract.EntityTypes.Datapoints, btn.enty.id, { Value: 'Backbone Intervention' });
                            dp.Value = "Backbone Intervention";
                            btn.setText("B");
                            btn.removeCls("btn-treatment-tag-r");
                            btn.addCls("btn-treatment-tag-b");
                        } else if (dp.Value == "Backbone Intervention") {
                            //Extract.Helper.setEntity(Extract.EntityTypes.Datapoints, btn.enty.id, { Value: 'Treatment Tag' });
                            dp.Value = "Treatment Tag";
                            btn.setText(" ");
                            btn.removeCls("btn-treatment-tag-b");
                            btn.addCls("btn-treatment-tag-i");
                        }
                        btn.setTooltip(dp.Value);
                        if (dp.Value == "Control") {
                            $(btn.btnInnerEl.dom).addClass("btn-treatment-tag-color-b");
                            $(btn.btnInnerEl.dom).removeClass("btn-treatment-tag-color-w");
                        } else {
                            $(btn.btnInnerEl.dom).addClass("btn-treatment-tag-color-w");
                            $(btn.btnInnerEl.dom).removeClass("btn-treatment-tag-color-b");
                        }
                        //btn.dpVal = dp.Value;
                        Config.CommonMetod(btn.me.currentTD[0], dp.Value, btn.getText());
                        //btn.resumeLayouts();
                    },
                    //beforedestroy: (btn, eOpts) => {
                    //    if (!Ext.isEmpty(btn.getText())) {
                    //        Config.CommonMetod(btn.me.currentTD[0], btn.dpVal, btn.getText());
                    //    }
                    //},
                    afterrender: (btn, e) => {
                        let dp = {} //cmp.entity.id;
                        dp.Value = btn.me.currentTD.attr(TdAttr.DPVal);
                        if (dp.Value == "Backbone intervention")
                            dp.Value = "Backbone Intervention";

                        if (dp.Value == "Treatment Tag") {
                            btn.addCls("btn-treatment-tag-i");
                            btn.setText(" ");
                        } else if (dp.Value == "Intervention") {
                            btn.addCls("btn-treatment-tag-i");
                            btn.setText("I");
                        } else if (dp.Value == "Control") {
                            btn.addCls("btn-treatment-tag-c");
                            btn.setText("C");
                        } else if (dp.Value == "Rescue Intervention") {
                            btn.addCls("btn-treatment-tag-r");
                            btn.setText("R");
                        } else if (dp.Value == "Backbone Intervention") {
                            btn.addCls("btn-treatment-tag-b");
                            btn.setText("B");
                        } else if (Ext.isEmpty(dp.Value)) {
                            //var armWin = btn.findParentByType('window');
                            //if (armWin) {
                            //    if (armWin.gp.Type == "Arm") {
                            //        btn.addCls("btn-treatment-tag-i");
                            //        Extract.Helper.setEntity(Extract.EntityTypes.Datapoints, btn.enty.id, { Value: 'Treatment Tag' });
                            //        btn.dp.Value = "Treatment Tag";
                            //        btn.setText(" ");
                            //    } else if (armWin.gp.Type == "Intervention") {
                            //        btn.addCls("btn-treatment-tag-i");
                            //        Extract.Helper.setEntity(Extract.EntityTypes.Datapoints, btn.enty.id, { Value: 'Intervention' });
                            //        btn.dp.Value = "Intervention";
                            //        btn.setText("I");
                            //    } else if (armWin.gp.Type == "Control") {
                            //        btn.addCls("btn-treatment-tag-c");
                            //        Extract.Helper.setEntity(Extract.EntityTypes.Datapoints, btn.enty.id, { Value: 'Control' });
                            //        btn.dp.Value = "Control";
                            //        btn.setText("C");
                            //    }
                            //}
                        }
                        btn.setTooltip(dp.Value);
                        if (dp.Value == "Control") {
                            $(btn.btnInnerEl.dom).addClass("btn-treatment-tag-color-b");
                            $(btn.btnInnerEl.dom).removeClass("btn-treatment-tag-color-w");
                        } else {
                            $(btn.btnInnerEl.dom).addClass("btn-treatment-tag-color-w");
                            $(btn.btnInnerEl.dom).removeClass("btn-treatment-tag-color-b");
                        }
                    }
                }
            }
        },
        FixedDose: {
            type: 'Intervention',
            compType: ComponentType.ExtractDropdown,
            name: "FixedDose",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "No",
            cellText: "(None)",
            config: {
                dpName: "Fixed Dose",
                valueField: 'id',
                displayField: 'val',
                emptyText: '(None)',
                //fieldLabel: 'Fixed Dose',
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
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    },
                    change: (cmp, newVal, oldVal, eOpts) => {
                        let _curTD = $(cmp.me.currentTD);
                        let _curTDRow = cmp.me.currentTD.parent('tr');
                        let tBody = _curTD.parent('tbody');
                        let _rowIdxInt = _curTDRow.attr(TrAttr.RowIndexIntervention);
                        if (cmp.getValue() == 'Yes') {
                            _curTD.parent('tr').parent('tbody').find(`tr[${TrAttr.TRType}=${TRType.FixedDose}]tr[${TrAttr.RowIndexIntervention}=${_rowIdxInt}]`)
                                .removeClass("trDisplayNone");
                            _curTDRow.find(`td[${TdAttr.Config}=${ComponentList.Intervention.Intervention.name}]`).addClass("trDisplayNone");
                            _curTDRow.find(`td[${TdAttr.Config}=${ComponentList.Intervention.FixedDoseCombinationName.name}]`).removeClass("trDisplayNone");
                        } else {
                            _curTD.parent('tr').parent('tbody').find(`tr[${TrAttr.TRType}=${TRType.FixedDose}]tr[${TrAttr.RowIndexIntervention}=${_rowIdxInt}]`)
                                .addClass("trDisplayNone");
                            _curTDRow.find(`td[${TdAttr.Config}=${ComponentList.Intervention.Intervention.name}]`).removeClass("trDisplayNone");
                            _curTDRow.find(`td[${TdAttr.Config}=${ComponentList.Intervention.FixedDoseCombinationName.name}]`).addClass("trDisplayNone");
                        }
                    }
                }
            }
        },
        Intervention: {
            type: 'Intervention',
            compType: ComponentType.ExtractText,
            name: "Intervention",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "Intervention A",
            cellText: "Intervention A",
            config: {
                //fieldLabel: 'Intervention',
                emptyText: 'Intervention',
                dpName: 'Intervention Name',
                //defaults: {
                listeners: {
                    //blur: (cmp, eOpts) => {
                    //    if (!Ext.isEmpty(cmp.getValue())) {
                    //        cmp.me.currentTD[0].innerHTML = cmp.getValue();
                    //    }
                    //},
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
                //}
            }
        },
        FixedDoseCombinationName: {
            type: 'Intervention',
            compType: ComponentType.ExtractText,
            name: "FixedDoseCombinationName",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "FDC Name",
            cellText: "FDC Name",
            config: {
                //fieldLabel: 'Brand',
                emptyText: 'Fixed Dose Combination Name',
                dpName: 'Fixed Dose Combination Name',
                listeners: {
                    //blur: (cmp, eOpts) => {
                    //    if (!Ext.isEmpty(cmp.getValue())) {
                    //        cmp.me.currentTD[0].innerHTML = cmp.getValue();
                    //    }
                    //},
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },

        Manufacturer: {
            type: 'Intervention',
            compType: ComponentType.ExtractText,
            name: "Manufacturer",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "Manufacturer",
            cellText: "Manufacturer",
            config: {
                //fieldLabel: 'Manufacture',
                emptyText: 'Manufacturer',
                dpName: 'Manufacturer',
                listeners: {
                    //blur: (cmp, eOpts) => {
                    //    if (!Ext.isEmpty(cmp.getValue())) {
                    //        cmp.me.currentTD[0].innerHTML = cmp.getValue();
                    //    }
                    //},
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },
        Brand: {
            type: 'Intervention',
            compType: ComponentType.ExtractText,
            name: "Brand",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "Brand",
            cellText: "Brand",
            config: {
                //fieldLabel: 'Brand',
                emptyText: 'Brand',
                dpName: 'Brand',
                listeners: {
                    //blur: (cmp, eOpts) => {
                    //    if (!Ext.isEmpty(cmp.getValue())) {
                    //        cmp.me.currentTD[0].innerHTML = cmp.getValue();
                    //    }
                    //},
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },

        Medium: {
            type: 'Intervention',
            compType: ComponentType.ExtractDropdown,
            name: "Medium",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "Medium",
            cellText: "Medium",
            config: {
                //fieldLabel: 'Brand',
                store: ["Booklet", "Brochure", "Video", "Website"],
                emptyText: 'Medium',
                dpName: 'Medium',
                listeners: {
                    //blur: (cmp, eOpts) => {
                    //    if (!Ext.isEmpty(cmp.getValue())) {
                    //        cmp.me.currentTD[0].innerHTML = cmp.getValue();
                    //    }
                    //},
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },
        MediumTitle: {
            type: 'Intervention',
            compType: ComponentType.ExtractText,
            name: "MediumTitle",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "Title",
            cellText: "Title",
            config: {
                //fieldLabel: 'Brand',
                emptyText: 'Title',
                dpName: 'Title',
                listeners: {
                    //blur: (cmp, eOpts) => {
                    //    if (!Ext.isEmpty(cmp.getValue())) {
                    //        cmp.me.currentTD[0].innerHTML = cmp.getValue();
                    //    }
                    //},
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },
        MediumPublisher: {
            type: 'Intervention',
            compType: ComponentType.ExtractText,
            name: "MediumPublisher",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "Publisher",
            cellText: "Publisher",
            config: {
                //fieldLabel: 'Brand',
                emptyText: 'Publisher',
                dpName: 'Publisher',
                listeners: {
                    //blur: (cmp, eOpts) => {
                    //    if (!Ext.isEmpty(cmp.getValue())) {
                    //        cmp.me.currentTD[0].innerHTML = cmp.getValue();
                    //    }
                    //},
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },
        MediumPublishYear: {
            type: 'Intervention',
            compType: ComponentType.ExtractText,
            name: "MediumPublishYear",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "Publish Year",
            cellText: "Publish Year",
            config: {
                //fieldLabel: 'Brand',
                emptyText: 'Publish Year',
                dpName: 'Publish Year',
                listeners: {
                    //blur: (cmp, eOpts) => {
                    //    if (!Ext.isEmpty(cmp.getValue())) {
                    //        cmp.me.currentTD[0].innerHTML = cmp.getValue();
                    //    }
                    //},
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },
        MediumEdition: {
            type: 'Intervention',
            compType: ComponentType.ExtractText,
            name: "MediumEdition",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "Edition",
            cellText: "Edition",
            config: {
                //fieldLabel: 'Brand',
                emptyText: 'Edition',
                dpName: 'Edition',
                listeners: {
                    //blur: (cmp, eOpts) => {
                    //    if (!Ext.isEmpty(cmp.getValue())) {
                    //        cmp.me.currentTD[0].innerHTML = cmp.getValue();
                    //    }
                    //},
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },
        MediumLength: {
            type: 'Intervention',
            compType: ComponentType.ExtractText,
            name: "MediumLength",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "Length",
            cellText: "Length",
            config: {
                //fieldLabel: 'Brand',
                emptyText: 'Length',
                dpName: 'Length',
                listeners: {
                    //blur: (cmp, eOpts) => {
                    //    if (!Ext.isEmpty(cmp.getValue())) {
                    //        cmp.me.currentTD[0].innerHTML = cmp.getValue();
                    //    }
                    //},
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },
        MediumUnit: {
            type: 'Intervention',
            compType: ComponentType.ExtractDropdown,
            name: "MediumUnit",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "Unit",
            cellText: "Unit",
            config: {
                //fieldLabel: 'Brand',
                store: ["%", "% total", "Adjusted", "Days", "Hours", "IU", "IU/kg", "L/day", "M IRU", "MIU", "MIU/m^2", "U", "U/kg", "U/mL", "g", "g/day", "g/kg", "mCi/kg", "mEq", "mEq/L",
                    "mL/lbs", "mg", "mg/2weeks", "mg/dL", "mg/day", "mg/hr", "mg/kg", "mg/kg/day", "mg/kg/hr", "mg/m^2", "mg/m^2/day", "mg/m^2/week", "mg/min", "mg/ml", "mg/ml/min",
                    "mg/week", "ml", "ml/h", "ml/kg", "mmol", "mmol/L", "mmol/day", "ng/kg/min", "nmol/mL", "ppm", "ratio", "µg", "µg/L", "µg/day", "µg/g", "µg/kg", "µg/kg/min",
                    "µg/kg/week", "µg/mL", "µg/week", "µmol/L"],
                emptyText: 'Unit',
                dpName: 'Unit',
                listeners: {
                    //blur: (cmp, eOpts) => {
                    //    if (!Ext.isEmpty(cmp.getValue())) {
                    //        cmp.me.currentTD[0].innerHTML = cmp.getValue();
                    //    }
                    //},
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },
        MediumLanguage: {
            type: 'Intervention',
            compType: ComponentType.ExtractText,
            name: "MediumLanguage",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "Language",
            cellText: "Language",
            config: {
                //fieldLabel: 'Brand',
                emptyText: 'Language',
                dpName: 'Language',
                listeners: {
                    //blur: (cmp, eOpts) => {
                    //    if (!Ext.isEmpty(cmp.getValue())) {
                    //        cmp.me.currentTD[0].innerHTML = cmp.getValue();
                    //    }
                    //},
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },
        MediumAudience: {
            type: 'Intervention',
            compType: ComponentType.ExtractText,
            name: "MediumAudience",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "Audience",
            cellText: "Audience",
            config: {
                //fieldLabel: 'Brand',
                emptyText: 'Audience',
                dpName: 'Audience',
                listeners: {
                    //blur: (cmp, eOpts) => {
                    //    if (!Ext.isEmpty(cmp.getValue())) {
                    //        cmp.me.currentTD[0].innerHTML = cmp.getValue();
                    //    }
                    //},
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },
        MediumProvider: {
            type: 'Intervention',
            compType: ComponentType.ExtractDropdown,
            name: "MediumProvider",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "Provider",
            cellText: "Provider",
            config: {
                //fieldLabel: 'Brand',
                store: ["Allied Health Care Provider", "Care Provider", "Clinician", "Doctor", "Doctoral Student", "Foster Parent", "General Practitioner", "Graduate Student",
                    "Multiple Individuals", "N/A", "NR", "Nurse", "Paid Caregiver", "Pharmacist", "Psychiatrist", "Psychologist", "Self", "Teacher", "Team", "Therapist",
                    "Unpaid Caregiver"],
                emptyText: 'Unit',
                dpName: 'Unit',
                listeners: {
                    //blur: (cmp, eOpts) => {
                    //    if (!Ext.isEmpty(cmp.getValue())) {
                    //        cmp.me.currentTD[0].innerHTML = cmp.getValue();
                    //    }
                    //},
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },

        ManualizedTreatment: {
            type: 'Intervention',
            compType: ComponentType.ExtractDropdown,
            name: "ManualizedTreatment",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "Manualized Treatment",
            cellText: "Manualized Treatment",
            config: {
                //fieldLabel: 'Brand',
                store: ["N/A", "NR", "No", "Unclear", "Yes"],
                emptyText: 'Manualized Treatment',
                dpName: 'Manualized Treatment',
                listeners: {
                    //blur: (cmp, eOpts) => {
                    //    if (!Ext.isEmpty(cmp.getValue())) {
                    //        cmp.me.currentTD[0].innerHTML = cmp.getValue();
                    //    }
                    //},
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },
        OtherTreatmentName: {
            type: 'Intervention',
            compType: ComponentType.ExtractText,
            name: "OtherTreatmentName",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "Other Treatment Name",
            cellText: "Other Treatment Name",
            config: {
                //fieldLabel: 'Brand',
                emptyText: 'Other Treatment Name',
                dpName: 'Other Treatment Name',
                listeners: {
                    //blur: (cmp, eOpts) => {
                    //    if (!Ext.isEmpty(cmp.getValue())) {
                    //        cmp.me.currentTD[0].innerHTML = cmp.getValue();
                    //    }
                    //},
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },
        ManualInfo: {
            type: 'Intervention',
            compType: ComponentType.ExtractText,
            name: "ManualInfo",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "Manual Info",
            cellText: "Manual Info",
            config: {
                //fieldLabel: 'Brand',
                emptyText: 'Manual Info',
                dpName: 'Manual Info',
                listeners: {
                    //blur: (cmp, eOpts) => {
                    //    if (!Ext.isEmpty(cmp.getValue())) {
                    //        cmp.me.currentTD[0].innerHTML = cmp.getValue();
                    //    }
                    //},
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },        

        AddIntervention: {
            type: 'Intervention',
            compType: ComponentType.ExtractActionButton,
            name: "AddIntervention",
            cssClass: "tdBtn",
            columnIndex: ColumnIdx++,
            config: {
                iconCls: '#Add',
                cls: 'Btn',
                listeners: {
                    click: (cmp, eOpts) => {
                        let _curTD = $(cmp.me.currentTD);
                        let _curTDRow = _curTD.parent('tr');
                        let _caseNo = _curTDRow.attr(TrAttr.CaseNo);
                        let _caseName = _curTDRow.attr(TrAttr.CaseName);
                        let _rowIdxInt = _curTD.parent('tr').attr(TrAttr.RowIndexIntervention);                        

                        if (Ext.isEmpty(_rowIdxInt)) {
                            _rowIdxInt = 1;
                        } else {
                            _rowIdxInt = Number(_rowIdxInt) + 1;
                        }

                        switch (_caseName) {
                            case Cases.CaseName.Therapy_Drug:
                                new Drug(_caseName).Drug(_rowIdxInt);
                                break;
                            case Cases.CaseName.Therapy_CancerIntervention:
                                new Drug(_caseName).CancerIntervention(_rowIdxInt);
                                break;

                            case Cases.CaseName.Therapy_Radiotherapy:
                                new Drug(_caseName).Radiotherapy(_rowIdxInt);
                                break;

                            case Cases.CaseName.Therapy_BiologicalVaccine:
                                new Drug(_caseName).BiologicalVaccine(_rowIdxInt);
                                break;

                            case Cases.CaseName.Therapy_LifestyleModification:
                                new Drug(_caseName).LifestyleModification(_rowIdxInt);
                                break;

                            case Cases.CaseName.Therapy_DietarySupplement:
                                new Drug(_caseName).DietarySupplement(_rowIdxInt);
                                break;

                            case Cases.CaseName.Therapy_Other:
                                new Drug(_caseName).Other(_rowIdxInt);
                                break;

                            case Cases.CaseName.Therapy_Device:
                                new DeviceSurgery(_caseName).Device(_rowIdxInt);
                                break;

                            case Cases.CaseName.Therapy_ProcedureSurgery:
                                new DeviceSurgery(_caseName).ProcedureSurgery(_rowIdxInt);
                                break;

                            case Cases.CaseName.Therapy_BehavioralInformationalMaterial:
                                new BehavioralInformationalMaterial(_caseName).InformationalMaterial(_rowIdxInt);
                                break;

                            case Cases.CaseName.Therapy_BehavioralSessionMeeting:
                                new BehavioralSessionMeeting(_caseName).SessionMeeting(_rowIdxInt);
                                break;                            

                            default:
                        }

                        ////$(Intervention.MainTableIdJQ()).find('tbody')[0].appendChild(row);

                        //let valFD = $(row).find(`td[${TdAttr.Config}=${ComponentList.Intervention.FixedDose.name}]`).attr(TdAttr.DPVal);
                        //let trClass = "trCls";
                        //if (valFD == 'No') {
                        //    trClass += " trDisplayNone";
                        //}

                        //let rowfd1 = objI.CreateFixedDoseTR(_rowIdxInt, 1, trClass);
                        //let cell = objI.CreateEmptyTD(2);
                        //rowfd1.appendChild(cell);
                        //objI.CreateFixedDoseFields(rowfd1, { hidden: true }, { hidden: true });
                        //$(Intervention.MainTableIdJQ()).find('tbody')[0].appendChild(rowfd1);

                        //let rowfd2 = objI.CreateFixedDoseTR(_rowIdxInt, 2, trClass);
                        //cell = objI.CreateEmptyTD(2);
                        //rowfd2.appendChild(cell);
                        //objI.CreateFixedDoseFields(rowfd2, { hidden: false }, { hidden: true });
                        //$(Intervention.MainTableIdJQ()).find('tbody')[0].appendChild(rowfd2);

                        ////IUI.CreateInterventionFields(row);
                        ////IUI.CreatePhaseFields(row);
                        ////IUI.CreateDosageFields(row);

                        cmp.hide();

                        let lstCnt = _curTD.parent('tr').parent('tbody').find(`tr[${TrAttr.TRType}=${TRType.Intervention}]`);


                        if (lstCnt.length > 1 && _curTD.next().length > 0 && _curTD.next()[0].children.length > 0) {
                            let btnDel = Ext.getCmp(_curTD.next()[0].children[0].id);
                            if (btnDel) {
                                btnDel.show();
                            }
                        }
                    },
                }
            }
        },
        DeleteIntervention: {
            type: 'Intervention',
            compType: ComponentType.ExtractActionButton,
            name: "DeleteIntervention",
            cssClass: "tdBtn",
            columnIndex: ColumnIdx++,
            config: {
                iconCls: '#Delete',
                cls: 'Btn',
                //hidden:true,
                listeners: {
                    click: (cmp, eOpts) => {
                        Config.DeleteConfirmAlert().then(() => {
                            let _curTD = $(cmp.me.currentTD);
                            let _curTDRow = _curTD.parent('tr');
                            let _caseNo = _curTDRow.attr(TrAttr.CaseNo);
                            let _caseName = _curTDRow.attr(TrAttr.CaseName);

                            let _rowIdxInt = _curTD.parent('tr').attr(TrAttr.RowIndexIntervention);

                            switch (_caseName) {
                                case Cases.CaseName.Therapy_Drug:
                                    new Drug(_caseName).DeleteIntervention(_rowIdxInt);
                                    break;
                                case Cases.CaseName.Therapy_CancerIntervention:
                                    new Drug(_caseName).DeleteIntervention(_rowIdxInt);
                                    break;

                                case Cases.CaseName.Therapy_Radiotherapy:
                                    new Drug(_caseName).DeleteIntervention(_rowIdxInt);
                                    break;

                                case Cases.CaseName.Therapy_BiologicalVaccine:
                                    new Drug(_caseName).DeleteIntervention(_rowIdxInt);
                                    break;

                                case Cases.CaseName.Therapy_LifestyleModification:
                                    new Drug(_caseName).DeleteIntervention(_rowIdxInt);
                                    break;

                                case Cases.CaseName.Therapy_DietarySupplement:
                                    new Drug(_caseName).DeleteIntervention(_rowIdxInt);
                                    break;

                                case Cases.CaseName.Therapy_Other:
                                    new Drug(_caseName).DeleteIntervention(_rowIdxInt);
                                    break;

                                case Cases.CaseName.Therapy_Device:
                                    new DeviceSurgery(_caseName).DeleteIntervention(_rowIdxInt);
                                    break;

                                case Cases.CaseName.Therapy_ProcedureSurgery:
                                    new DeviceSurgery(_caseName).DeleteIntervention(_rowIdxInt);
                                    break;

                                case Cases.CaseName.Therapy_BehavioralInformationalMaterial:
                                    new BehavioralInformationalMaterial(_caseName).DeleteIntervention(_rowIdxInt);
                                    break;

                                case Cases.CaseName.Therapy_BehavioralSessionMeeting:
                                    new BehavioralSessionMeeting(_caseName).DeleteIntervention(_rowIdxInt);
                                    break;

                                default:
                            }

                            //IUI.currentTD = $('td:first', $(Intervention.MainTableIdJQ()));
                            //IUI.SmartDivPosition();
                            //window.setTimeout(() => {
                            //    IUI.CreateComponent();
                            //}, 250);                        
                        }).catch(() => {
                            //console.log("Promise Rejected");
                        });
                    },
                    afterrender: {
                        fn: (cmp, eOpts) => {
                            
                            ////let _rowIdx = _curTD.parent('tr').attr(TdAttr.RowIndex);
                            //let rwLen = $(Intervention.MainTableIdJQ()).find('tbody').find(`tr[${TrAttr.TRType}=${TRType.Intervention}]`).length;
                            //rwLen > 1 ? cmp.show() : cmp.hide();

                            let _curTD = $(cmp.me.currentTD);
                            let _curTDRow = _curTD.parent('tr');
                            let _caseNo = _curTDRow.attr(TrAttr.CaseNo);
                            let _caseName = _curTDRow.attr(TrAttr.CaseName);

                            let _rowIdxInt = _curTD.parent('tr').attr(TrAttr.RowIndexIntervention);
                            switch (_caseName) {
                                case Cases.CaseName.Therapy_Drug:
                                case Cases.CaseName.Therapy_CancerIntervention:
                                case Cases.CaseName.Therapy_Radiotherapy:
                                case Cases.CaseName.Therapy_BiologicalVaccine:
                                case Cases.CaseName.Therapy_LifestyleModification:
                                case Cases.CaseName.Therapy_DietarySupplement:
                                case Cases.CaseName.Therapy_Other:
                                    new Drug(_caseName).DeleteInterventionButtonAfterRender(cmp, _rowIdxInt);
                                    break;

                                case Cases.CaseName.Therapy_Device:
                                case Cases.CaseName.Therapy_ProcedureSurgery:
                                    new DeviceSurgery(_caseName).DeleteInterventionButtonAfterRender(cmp, _rowIdxInt);
                                    break;

                                case Cases.CaseName.Therapy_BehavioralInformationalMaterial:
                                    new BehavioralInformationalMaterial(_caseName).DeleteInterventionButtonAfterRender(cmp, _rowIdxInt);
                                    break;

                                case Cases.CaseName.Therapy_BehavioralSessionMeeting:
                                    new BehavioralSessionMeeting(_caseName).DeleteInterventionButtonAfterRender(cmp, _rowIdxInt);
                                    break;

                                default:
                            }
                        },
                        delay: 50
                    }
                }
            }
        },
    },

    FixedDose: {
        FixedDoseIntervention: {
            type: 'FixedDose',
            compType: ComponentType.ExtractText,
            name: "FixedDoseIntervention",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "Intervention A1",
            cellText: "Intervention A1",
            config: {
                dpName: 'Fixed Dose Intervention',
                emptyText: 'Fixed Dose Intervention',
                listeners: {
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },
        FixedDoseConcentration: {
            type: 'FixedDose',
            compType: ComponentType.ExtractText,
            name: "FixedDoseConcentration",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "FDC",
            cellText: "FDC",
            config: {
                emptyText: 'Fixed Dose Concentration',
                dpName: 'Fixed Dose Concentration',
                listeners: {
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },
        FixedDoseUnit: {
            type: 'FixedDose',
            compType: ComponentType.ExtractDropdown,
            name: "FixedDoseUnit",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "FDU",
            cellText: "FDU",
            config: {
                dpName: 'Fixed Dose Unit',
                emptyText: 'Fixed Dose Unit',
                store: ["%", "% total", "Adjusted", "Cells", "CFU", "Days", "Gy", "Gy per fraction", "Hours", "IR", "IR/mL", "IU", "IU/day", "IU/kg", "IU/week", "L/day", "M IRU", "MIU", "MIU/m^2", "Megavoltage", "NA", "Not Reported", "PFU", "SQ-U", "SQ-U/mL", "STU", "STU/mL", "TU", "TU/mL", "U", "U/kg", "U/kg/day", "U/mL", "g", "g/day", "g/kg", "g/m^2", "mCi/kg", "mEq", "mEq/L", "mL/lbs", "mg", "mg/2 ml", "mg/2weeks", "mg/dL", "mg/day", "mg/g", "mg/hr", "mg/kg", "mg/kg/day", "mg/kg/hr", "mg/kg/wk", "mg/m^2", "mg/m^2/day", "mg/m^2/week", "mg/min", "mg/ml", "mg/ml/min", "mg/week", "ml", "ml/h", "ml/kg", "mmol", "mmol/L", "mmol/day", "ng/kg/min", "ng/min", "nmol", "nmol/mL", "pmol/kg/min", "ppm", "ratio", "spores", "x 10^5 IU/m^2", "x 10^9 CFU", "µg", "µg/L", "µg/day", "µg/g", "µg/kg", "µg/kg/min", "µg/kg/week", "µg/mL", "µg/week", "µmol/L", "μg/m^2"],
                listeners: {
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },
        AddFixedDose: {
            type: 'FixedDose',
            compType: ComponentType.ExtractActionButton,
            name: "AddFixedDose",
            cssClass: "tdBtn",
            columnIndex: ColumnIdx++,
            config: {
                iconCls: '#TabAdd',
                cls: 'Btn',
                listeners: {
                    click: {
                        fn: (cmp, eOpts) => {
                            let _curTD = $(cmp.me.currentTD);
                            let _curTDRow = _curTD.parent('tr');
                            let _caseNo = _curTDRow.attr(TrAttr.CaseNo);
                            let _caseName = _curTDRow.attr(TrAttr.CaseName);

                            let _rowIdxInt = _curTD.parent('tr').attr(TrAttr.RowIndexIntervention);
                            let _rowIdxFd = _curTD.parent('tr').attr(TrAttr.RowIndexFixedDose);
                            if (Ext.isEmpty(_rowIdxFd)) {
                                _rowIdxFd = 1;
                            } else {
                                _rowIdxFd = Number(_rowIdxFd) + 1;
                            }

                            //let objI = new Intervention();
                            //let row = objI.CreateFixedDoseTR(_rowIdxInt, _rowIdxFd);

                            //let lstCnt = $(Intervention.MainTableIdJQ()).find('tbody').find(`tr[${TrAttr.TRType}=${TRType.FixedDose}]tr[${TrAttr.RowIndexIntervention}=${_rowIdxInt}]:last`);

                            //if (lstCnt.length > 0) {
                            //    lstCnt.after(row);
                            //}

                            //let cell = objI.CreateEmptyTD(2);
                            //row.appendChild(cell);

                            //objI.CreateFixedDoseFields(row);

                            if (_caseName == Cases.CaseName.Therapy_Drug || _caseName == Cases.CaseName.Therapy_CancerIntervention) {
                                new Drug(_caseName).AddFixedDose(_rowIdxInt, _rowIdxFd);
                            }

                            cmp.hide();

                            //lstCnt = $(Intervention.MainTableIdJQ()).find('tbody').find(`tr[${TrAttr.TRType}=${TRType.FixedDose}]`);
                            //if (lstCnt.length > 1 && _curTD.next().length > 0 && _curTD.next()[0].children.length > 0) {
                            //    let btnDel = Ext.getCmp(_curTD.next()[0].children[0].id);
                            //    if (btnDel) {
                            //        btnDel.show();
                            //    }
                            //}
                        }
                    },
                    delay: 50
                }
            }
        },
        DeleteFixedDose: {
            type: 'FixedDose',
            compType: ComponentType.ExtractActionButton,
            name: "DeleteFixedDose",
            cssClass: "tdBtn",
            columnIndex: ColumnIdx++,
            config: {
                iconCls: '#TabDelete',
                cls: 'Btn',
                listeners: {
                    click: {
                        fn: (cmp, eOpts) => {
                            Config.DeleteConfirmAlert().then(() => {
                                let _curTD = $(cmp.me.currentTD);
                                let _curTDRow = _curTD.parent('tr');
                                let _caseNo = _curTDRow.attr(TrAttr.CaseNo);
                                let _caseName = _curTDRow.attr(TrAttr.CaseName);

                                let _rowIdxInt = _curTD.parent('tr').attr(TrAttr.RowIndexIntervention);
                                let _rowIdxFd = _curTD.parent('tr').attr(TrAttr.RowIndexFixedDose);

                                if (_caseName == Cases.CaseName.Therapy_Drug || _caseName == Cases.CaseName.Therapy_CancerIntervention) {
                                    new Drug(_caseName).DeleteFixedDose(_rowIdxInt, _rowIdxFd);
                                }

                                

                                
                            }).catch(() => {
                                //console.log("Promise Rejected");
                            });
                        }
                    },
                    afterrender: {
                        fn: (cmp, eOpts) => {
                            let _curTD = $(cmp.me.currentTD);
                            let _curTDRow = _curTD.parent('tr');
                            let _caseNo = _curTDRow.attr(TrAttr.CaseNo);
                            let _caseName = _curTDRow.attr(TrAttr.CaseName);

                            let _rowIdxInt = _curTD.parent('tr').attr(TrAttr.RowIndexIntervention);
                            let _rowIdxFd = _curTD.parent('tr').attr(TrAttr.RowIndexFixedDose);

                            if (_caseName == Cases.CaseName.Therapy_Drug || _caseName == Cases.CaseName.Therapy_CancerIntervention) {
                                new Drug(_caseName).DeleteFixedDoseButtonAfterRender(cmp,_rowIdxInt);
                            }

                            ////let _rowIdx = _curTD.parent('tr').attr(TdAttr.RowIndex);
                            //let rwLen = $(Intervention.MainTableIdJQ()).find('tbody').find(`tr[${TrAttr.TRType}=${TRType.FixedDose}]tr[${TrAttr.RowIndexIntervention}=${_rowIdxInt}]`).length;
                            //rwLen > 2 ? cmp.show() : cmp.hide();
                        },
                        delay: 50
                    }
                }
            }
        }
    },

    Phase: {
        StudyPhase: {
            type: 'Phase',
            compType: ComponentType.ExtractDropdown,
            name: "StudyPhase",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "Treatment Period",
            cellText: "Treatment Period",
            config: {
                //valueField: 'id',
                //displayField: 'val',
                //emptyText: '(None)',
                //fieldLabel: 'Study Phase',
                //tpl: '<tpl for="."><div class="x-boundlist-item cmbtplborder">{val} </div></tpl>',
                //displayTpl: '<tpl for=".">{val}</tpl>',
                dpName: 'Study Phase',
                store: ['Treatment Period', 'Follow-up Period'],
                listeners: {
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },
        Schedule: {
            type: 'Phase',
            compType: ComponentType.ExtractDropdown,
            name: "Schedule",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "Afternoon",
            cellText: "Afternoon",
            config: {
                //fieldLabel: 'Schedule',
                dpName: 'Schedule',
                store: ["Afternoon", "Bedtime", "Breakfast", /*"Daily",*/ "Daytime", "Dinner", "Evening", "Intraoperative", "Lunch", "Morning", "Peri-op", "Post-Breakfast", "Post-Diagnostic", "Post-Dinner", "Post-Lunch", "Post-Prandial", "Prandial", "Pre-Breakfast", "Pre-Diagnostic", "Pre-Dinner", "Pre-Lunch", "Pre-Prandial", "Pre/Post-op"],
                listeners: {
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },
        Route: {
            type: 'Phase',
            compType: ComponentType.ExtractDropdown,
            name: "Route",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "Extraocular",
            cellText: "Extraocular",
            config: {
                dpName: 'Route',
                //fieldLabel: 'Route',
                store: ["Dry powder inhaler", "Epidural Injection", "Extraocular", "Group Therapy", "HAI", "I.V.", "Implant", "Individual Therapy", "Inhalent", "Injection", "Instilled into Eye", "Intramuscular", "Intranasal", "Intraperitoneal", "Intrathecal", "Intravesicular", "Intravitreal Injection", "Iontophoretic", "Laparoscopic Surgery", "Metered Dose Inhaler + Spacer", "Metered dose inhaler", "Open Surgery", "Oral", "Soft mist inhaler", "Sub-Tenon Injection", "SubQ", "SubQ (Pen)", "SubQ (Vial)", "Suppository", "Topical", "Transdermal"],
                listeners: {
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },
        Provider: {
            type: 'Phase',
            compType: ComponentType.ExtractDropdown,
            name: "Provider",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "Clinician",
            cellText: "Clinician",
            config: {
                dpName: 'Provider',
                //fieldLabel: 'Provider',
                store: ["Allied Health Care Provider", "Care Provider", "Clinician", "Doctor", "Doctoral Student", "Foster Parent", "General Practitioner", "Graduate Student", "Multiple Individuals", "N/A", "NR", "Nurse", "Paid Caregiver", "Pharmacist", "Psychiatrist", "Psychologist", "Self", "Teacher", "Team", "Therapist", "Unpaid Caregiver"],
                listeners: {
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },
        LineOfTreatment: {
            type: 'Phase',
            compType: ComponentType.ExtractDropdown,
            name: "LineOfTreatment",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "Line of Treatment",
            cellText: "Line of Treatment",
            config: {
                dpName: 'Line of Cancer',
                store: ["First", "Maintenance", "Mixed", "Other", "Second", "Third", "Unknown"],
                listeners: {
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },
        StageSetting: {
            type: 'Phase',
            compType: ComponentType.ExtractDropdown,
            name: "StageSetting",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "Stage Setting",
            cellText: "Stage Setting",
            config: {
                dpName: 'Stage / Setting',
                store: ['Adjuvant', 'Neo-Adjuvant'],
                listeners: {
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },
        

        MiscName: {
            type: 'Phase',
            compType: ComponentType.ExtractText,
            name: "MiscName",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "Name",
            cellText: "Name",
            config: {
                //fieldLabel: 'Name',
                emptyText: 'Name',
                dpName: 'Misc',
                dPFieldtoUpdate: "Name",
                listeners: {
                    //blur: (cmp, eOpts) => {
                    //    if (!Ext.isEmpty(cmp.getValue())) {
                    //        cmp.me.currentTD[0].innerHTML = cmp.getValue();
                    //    }
                    //},
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },
        MiscDesc: {
            type: 'Phase',
            compType: ComponentType.ExtractText,
            name: "MiscDesc",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "Desc",
            cellText: "Desc",
            config: {
                //fieldLabel: 'Description',
                emptyText: 'Description',
                dpName: 'Misc',
                listeners: {
                    //blur: (cmp, eOpts) => {
                    //    if (!Ext.isEmpty(cmp.getValue())) {
                    //        cmp.me.currentTD[0].innerHTML = cmp.getValue();
                    //    }
                    //},
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },
        AddMisc: {
            type: 'Phase',
            compType: ComponentType.ExtractActionButton,
            name: "AddMisc",
            cssClass: "tdBtn",
            columnIndex: ColumnIdx++,
            config: {
                iconCls: '#TabAdd',
                cls: 'Btn',
                listeners: {
                    click: (cmp, eOpts) => {
                        let _curTD = $(cmp.me.currentTD);
                        let _curTDRow = _curTD.parent('tr');
                        let _caseNo = _curTDRow.attr(TrAttr.CaseNo);
                        let _caseName = _curTDRow.attr(TrAttr.CaseName);
                        let _rowIdxInt = _curTD.parent('tr').attr(TrAttr.RowIndexIntervention);
                        let _rowIdxPhs = _curTD.parent('tr').attr(TrAttr.RowIndexPhase);
                        if (Ext.isEmpty(_rowIdxPhs)) {
                            _rowIdxPhs = 1;
                        } else {
                            _rowIdxPhs = Number(_rowIdxPhs);
                        }

                        let _rowIdxMis = _curTD.parent('tr').attr(TrAttr.RowIndexMisc);
                        if (Ext.isEmpty(_rowIdxMis)) {
                            _rowIdxMis = 1;
                        } else {
                            _rowIdxMis = Number(_rowIdxMis) + 1;
                        }

                        switch (_caseName) {
                            case Cases.CaseName.Therapy_Drug:
                            case Cases.CaseName.Therapy_CancerIntervention:
                            case Cases.CaseName.Therapy_Radiotherapy:
                            case Cases.CaseName.Therapy_BiologicalVaccine:
                            case Cases.CaseName.Therapy_LifestyleModification:
                            case Cases.CaseName.Therapy_DietarySupplement:
                            case Cases.CaseName.Therapy_Other:
                                new Drug(_caseName).AddMisc(_curTD, _rowIdxInt, _rowIdxPhs, _rowIdxMis);
                                break;

                            case Cases.CaseName.Therapy_Device:
                            case Cases.CaseName.Therapy_ProcedureSurgery:
                                new DeviceSurgery(_caseName).AddMisc(_curTD, _rowIdxInt, _rowIdxPhs, _rowIdxMis);
                                break;

                            case Cases.CaseName.Therapy_BehavioralInformationalMaterial:
                                new BehavioralInformationalMaterial(_caseName).AddMisc(_curTD, _rowIdxInt, _rowIdxPhs, _rowIdxMis);
                                break;
                            case Cases.CaseName.Therapy_BehavioralSessionMeeting:
                                new BehavioralSessionMeeting(_caseName).AddMisc(_curTD, _rowIdxInt, _rowIdxPhs, _rowIdxMis);
                                break;

                            default:
                        }

                        //let objI = new Intervention();
                        //let row = objI.CreateMiscTR(_rowIdxInt, _rowIdxPhs, _rowIdxMis);

                        //_curTD.parent('tr').after(row);
                        ////let cell = IUI.CreateEmptyTD(13);
                        ////row.appendChild(cell);

                        ////IUI.CreateMiscFields(row);
                        cmp.hide();
                    }
                }
            }
        },
        DeleteMisc: {
            type: 'Phase',
            compType: ComponentType.ExtractActionButton,
            name: "DeleteMisc",
            cssClass: "tdBtn",
            columnIndex: ColumnIdx++,
            config: {
                iconCls: '#TabDelete',
                cls: 'Btn',
                listeners: {
                    click: (cmp, eOpts) => {
                        Config.DeleteConfirmAlert().then(() => {
                            let _curTD = $(cmp.me.currentTD);
                            let _curTDRow = _curTD.parent('tr');
                            let _caseNo = _curTDRow.attr(TrAttr.CaseNo);
                            let _caseName = _curTDRow.attr(TrAttr.CaseName);

                            let _rowIdxInt = _curTD.parent('tr').attr(TrAttr.RowIndexIntervention);
                            let _rowIdxPhs = _curTD.parent('tr').attr(TrAttr.RowIndexPhase);
                            let _rowIdxMis = _curTD.parent('tr').attr(TrAttr.RowIndexMisc);

                            switch (_caseName) {
                                case Cases.CaseName.Therapy_Drug:
                                case Cases.CaseName.Therapy_CancerIntervention:
                                case Cases.CaseName.Therapy_Radiotherapy:
                                case Cases.CaseName.Therapy_BiologicalVaccine:
                                case Cases.CaseName.Therapy_LifestyleModification:
                                case Cases.CaseName.Therapy_DietarySupplement:
                                case Cases.CaseName.Therapy_Other:
                                    new Drug(_caseName).DeleteMisc(_curTD, _rowIdxInt, _rowIdxPhs);
                                    break;

                                case Cases.CaseName.Therapy_Device:
                                case Cases.CaseName.Therapy_ProcedureSurgery:
                                    new DeviceSurgery(_caseName).DeleteMisc(_curTD, _rowIdxInt, _rowIdxPhs);
                                    break;

                                case Cases.CaseName.Therapy_BehavioralInformationalMaterial:
                                    new BehavioralInformationalMaterial(_caseName).DeleteMisc(_curTD, _rowIdxInt, _rowIdxPhs);
                                    break;

                                case Cases.CaseName.Therapy_BehavioralSessionMeeting:
                                    new BehavioralSessionMeeting(_caseName).DeleteMisc(_curTD, _rowIdxInt, _rowIdxPhs);
                                    break;

                                default:
                            }

                            //_curTD.parent('tr').remove();
                            //let lstCnt = $(Intervention.MainTableIdJQ()).find('tbody').find(`tr[${TrAttr.TRType}=${TRType.Misc}]tr[${TrAttr.RowIndexIntervention}=${_rowIdxInt}]tr[${TrAttr.RowIndexPhase}=${_rowIdxPhs}]`);
                            //if (lstCnt.length != 0) {
                            //    let lstTdAdd = lstCnt.find(`td[config='AddMisc']`);

                            //    if (lstTdAdd.length > 0 && lstTdAdd[0].children.length > 0) {
                            //        let btnAdd = Ext.getCmp(lstTdAdd.eq(lstTdAdd.length - 1)[0].children[0].id);
                            //        if (btnAdd) {
                            //            btnAdd.show();
                            //        }
                            //    }
                            //} else {
                            //    let lstCnt = $(Intervention.MainTableIdJQ()).find('tbody').find(`tr[${TrAttr.TRType}=${TRType.Phase}]tr[${TrAttr.RowIndexIntervention}=${_rowIdxInt}]tr[${TrAttr.RowIndexPhase}=${_rowIdxPhs}]`);
                            //    if (lstCnt.length == 0) {
                            //        lstCnt = $(Intervention.MainTableIdJQ()).find('tbody').find(`tr[${TrAttr.TRType}=${TRType.Intervention}]tr[${TrAttr.RowIndexIntervention}=${_rowIdxInt}]tr[${TrAttr.RowIndexPhase}=${_rowIdxPhs}]`)
                            //    }

                            //    let lstTdAdd = lstCnt.find(`td[config='AddMisc']`);

                            //    if (lstTdAdd.length > 0 && lstTdAdd[0].children.length > 0) {
                            //        let btnAdd = Ext.getCmp(lstTdAdd.eq(lstTdAdd.length - 1)[0].children[0].id);
                            //        if (btnAdd) {
                            //            btnAdd.show();
                            //        }
                            //    }
                            //}
                            //IUI.currentTD = $('td:first', $(Intervention.MainTableIdJQ()));
                            //IUI.SmartDivPosition();
                            //window.setTimeout(() => {
                            //    IUI.CreateComponent();
                            //}, 250);
                        }).catch(() => {
                            //console.log("Promise Rejected");
                        });
                    },
                    afterrender: {
                        fn: (cmp, eOpts) => {
                            let _curTD = $(cmp.me.currentTD);
                            let _curTDRow = _curTD.parent('tr');
                            let _caseNo = _curTDRow.attr(TrAttr.CaseNo);
                            let _caseName = _curTDRow.attr(TrAttr.CaseName);

                            let _rowIdxInt = _curTD.parent('tr').attr(TrAttr.RowIndexIntervention);
                            let _rowIdxPhs = _curTD.parent('tr').attr(TrAttr.RowIndexPhase);
                            let _rowIdxMis = _curTD.parent('tr').attr(TrAttr.RowIndexMisc);

                            switch (_caseName) {
                                case Cases.CaseName.Therapy_Drug:
                                case Cases.CaseName.Therapy_CancerIntervention:
                                case Cases.CaseName.Therapy_Radiotherapy:
                                case Cases.CaseName.Therapy_BiologicalVaccine:
                                case Cases.CaseName.Therapy_LifestyleModification:
                                case Cases.CaseName.Therapy_DietarySupplement:
                                case Cases.CaseName.Therapy_Other:
                                    new Drug(_caseName).DeleteMiscButtonAfterRender(cmp, _rowIdxInt, _rowIdxPhs, _rowIdxMis);
                                    break;

                                case Cases.CaseName.Therapy_Device:
                                case Cases.CaseName.Therapy_ProcedureSurgery:
                                    new DeviceSurgery(_caseName).DeleteMiscButtonAfterRender(cmp, _rowIdxInt, _rowIdxPhs, _rowIdxMis);
                                    break;

                                case Cases.CaseName.Therapy_BehavioralInformationalMaterial:
                                    new BehavioralInformationalMaterial(_caseName).DeleteMiscButtonAfterRender(cmp, _rowIdxInt, _rowIdxPhs, _rowIdxMis);
                                    break;

                                case Cases.CaseName.Therapy_BehavioralSessionMeeting:
                                    new BehavioralSessionMeeting(_caseName).DeleteMiscButtonAfterRender(cmp, _rowIdxInt, _rowIdxPhs, _rowIdxMis);
                                    break;

                                default:
                            }
                            ////let _rowIdx = _curTD.parent('tr').attr(TdAttr.RowIndex);
                            ////let _rowIdx = _curTD.parent('tr').attr(TdAttr.RowIndex);                        
                            //let rwLen = $(Intervention.MainTableIdJQ()).find('tbody').find(`tr[${TrAttr.TRType}=${TRType.Misc}]tr[${TrAttr.RowIndexIntervention}=${_rowIdxInt}]tr[${TrAttr.RowIndexPhase}=${_rowIdxPhs}]tr[${TrAttr.RowIndexMisc}=${_rowIdxMis}]`).length;
                            //rwLen >= 1 ? cmp.show() : cmp.hide();

                        },
                        delay: 50
                    }
                }
            }
        },

        DrugRequiredDrugs: {
            type: 'Phase',
            compType: ComponentType.ExtractText,
            name: "DrugRequiredDrugs",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "Required Drugs",
            cellText: "Required Drugs",
            config: {
                //fieldLabel: 'Name',
                emptyText: 'Required Drugs',
                dpName: 'Required Drugs',
                listeners: {
                    //blur: (cmp, eOpts) => {
                    //    if (!Ext.isEmpty(cmp.getValue())) {
                    //        cmp.me.currentTD[0].innerHTML = cmp.getValue();
                    //    }
                    //},
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },
        DrugTechnique: {
            type: 'Phase',
            compType: ComponentType.ExtractText,
            name: "DrugTechnique",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "Technique",
            cellText: "Technique",
            config: {
                //fieldLabel: 'Name',
                emptyText: 'Technique',
                dpName: 'Technique',
                listeners: {
                    //blur: (cmp, eOpts) => {
                    //    if (!Ext.isEmpty(cmp.getValue())) {
                    //        cmp.me.currentTD[0].innerHTML = cmp.getValue();
                    //    }
                    //},
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },
        DrugNotes: {
            type: 'Phase',
            compType: ComponentType.ExtractText,
            name: "DrugNotes",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "Notes",
            cellText: "Notes",
            config: {
                //fieldLabel: 'Name',
                emptyText: 'Notes',
                dpName: 'Notes',
                listeners: {
                    //blur: (cmp, eOpts) => {
                    //    if (!Ext.isEmpty(cmp.getValue())) {
                    //        cmp.me.currentTD[0].innerHTML = cmp.getValue();
                    //    }
                    //},
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },
        DrugSurgeonsExpertiseLevel: {
            type: 'Phase',
            compType: ComponentType.ExtractText,
            name: "DrugSurgeonsExpertiseLevel",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "Surgeons Expertise Level",
            cellText: "Surgeons Expertise Level",
            config: {
                //fieldLabel: 'Name',
                emptyText: 'Surgeon\'s Expertise Level',
                dpName: 'Surgeon\'s Expertise Level',
                listeners: {
                    //blur: (cmp, eOpts) => {
                    //    if (!Ext.isEmpty(cmp.getValue())) {
                    //        cmp.me.currentTD[0].innerHTML = cmp.getValue();
                    //    }
                    //},
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },
        DrugRouteofEntry: {
            type: 'Phase',
            compType: ComponentType.ExtractText,
            name: "DrugRouteofEntry",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "Route of Entry",
            cellText: "Route of Entry",
            config: {
                //fieldLabel: 'Name',
                emptyText: 'Route of Entry',
                dpName: 'Route of Entry',
                listeners: {
                    //blur: (cmp, eOpts) => {
                    //    if (!Ext.isEmpty(cmp.getValue())) {
                    //        cmp.me.currentTD[0].innerHTML = cmp.getValue();
                    //    }
                    //},
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },
        DrugAnesthesia: {
            type: 'Phase',
            compType: ComponentType.ExtractDropdown,
            name: "DrugAnesthesia",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "Anesthesia",
            cellText: "Anesthesia",
            config: {
                //fieldLabel: 'Name',
                emptyText: 'Anesthesia',
                dpName: 'Anesthesia',
                store: ["Epidural", "General", "Local", "Regional", "Spinal"],
                listeners: {
                    //blur: (cmp, eOpts) => {
                    //    if (!Ext.isEmpty(cmp.getValue())) {
                    //        cmp.me.currentTD[0].innerHTML = cmp.getValue();
                    //    }
                    //},                    
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },
        DrugAnesthesiaDosage: {
            type: 'Phase',
            compType: ComponentType.ExtractText,
            name: "DrugAnesthesiaDosage",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "Anesthesia Dosage",
            cellText: "Anesthesia Dosage",
            config: {
                //fieldLabel: 'Name',
                emptyText: 'Anesthesia Dosage',
                dpName: 'Anesthesia Dosage',
                listeners: {
                    //blur: (cmp, eOpts) => {
                    //    if (!Ext.isEmpty(cmp.getValue())) {
                    //        cmp.me.currentTD[0].innerHTML = cmp.getValue();
                    //    }
                    //},
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },
        DrugAnesthesiaDosageUnit: {
            type: 'Phase',
            compType: ComponentType.ExtractDropdown,
            name: "DrugAnesthesiaDosageUnit",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "Anesthesia Dosage Unit",
            cellText: "Anesthesia Dosage Unit",
            config: {
                //fieldLabel: 'Name',
                emptyText: 'Units',
                dpName: 'Anesthesia Dosage Unit',
                store: ["%", "% total", "Adjusted", "Days", "Hours", "IU", "IU/kg", "L/day", "M IRU", "MIU", "MIU/m^2", "U", "U/kg", "U/mL", "g", "g/day", "g/kg", "mCi/kg", "mEq", "mEq/L",
                    "mL/lbs", "mg", "mg/2weeks", "mg/dL", "mg/day", "mg/hr", "mg/kg", "mg/kg/day", "mg/kg/hr", "mg/m^2", "mg/m^2/day", "mg/m^2/week", "mg/min", "mg/ml", "mg/ml/min",
                    "mg/week", "ml", "ml/h", "ml/kg", "mmol", "mmol/L", "mmol/day", "ng/kg/min", "nmol/mL", "ppm", "ratio", "µg", "µg/L", "µg/day", "µg/g", "µg/kg", "µg/kg/min",
                    "µg/kg/week", "µg/mL", "µg/week", "µmol/L"],
                listeners: {
                    //blur: (cmp, eOpts) => {
                    //    if (!Ext.isEmpty(cmp.getValue())) {
                    //        cmp.me.currentTD[0].innerHTML = cmp.getValue();
                    //    }
                    //},                    
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },

        AddPhase: {
            type: 'Phase',
            compType: ComponentType.ExtractActionButton,
            name: "AddPhase",
            cssClass: "tdBtn",
            columnIndex: ColumnIdx++,
            config: {
                iconCls: '#TabAdd',
                cls: 'Btn',
                listeners: {
                    click: {
                        fn: (cmp, eOpts) => {
                            let _curTD = $(cmp.me.currentTD);
                            let _curTDRow = _curTD.parent('tr');
                            let _caseNo = _curTDRow.attr(TrAttr.CaseNo);
                            let _caseName = _curTDRow.attr(TrAttr.CaseName);
                            let _rowIdxInt = _curTD.parent('tr').attr(TrAttr.RowIndexIntervention);

                            let _rowIdxPhs = _curTD.parent('tr').attr(TrAttr.RowIndexPhase);
                            if (Ext.isEmpty(_rowIdxPhs)) {
                                _rowIdxPhs = 1;
                            } else {
                                _rowIdxPhs = Number(_rowIdxPhs) + 1;
                            }

                            //let objI = new Intervention();
                            //let row = objI.CreatePhaseTR(_rowIdxInt, _rowIdxPhs);
                            switch (_caseName) {
                                case Cases.CaseName.Therapy_Drug:                                    
                                case Cases.CaseName.Therapy_CancerIntervention:                                    
                                case Cases.CaseName.Therapy_Radiotherapy:                                    
                                case Cases.CaseName.Therapy_BiologicalVaccine:                                    
                                case Cases.CaseName.Therapy_LifestyleModification:                                    
                                case Cases.CaseName.Therapy_DietarySupplement:                                    
                                case Cases.CaseName.Therapy_Other:
                                    new Drug(_caseName).AddPhase(_rowIdxInt, _rowIdxPhs);
                                    break;

                                case Cases.CaseName.Therapy_Device:                                    
                                case Cases.CaseName.Therapy_ProcedureSurgery:
                                    new DeviceSurgery(_caseName).AddPhase(_rowIdxInt, _rowIdxPhs);
                                    break;
                                
                                case Cases.CaseName.Therapy_BehavioralSessionMeeting:
                                    new BehavioralSessionMeeting(_caseName).AddPhase(_rowIdxInt, _rowIdxPhs);
                                    break;

                                default:
                            }

                            //let lstCnt = $(Intervention.MainTableIdJQ()).find('tbody').find(`tr[${TrAttr.RowIndexIntervention}=${_rowIdxInt}]:last`);
                            ////let lstCnt = $(Intervention.MainTableIdJQ()).find('tbody').find(`tr[${TdAttr.RowIndex}=${_rowIdx}]tr[${TdAttr.TRType}=${TRType.Phase}]`);
                            //if (lstCnt.length > 0) {
                            //    lstCnt.after(row);
                            //}

                            ////let cell = IUI.CreateEmptyTD(7);
                            ////row.appendChild(cell);

                            ////IUI.CreatePhaseFields(row);
                            ////IUI.CreateDosageFields(row);

                            cmp.hide();

                            //let lstCnt = $(Intervention.MainTableIdJQ()).find('tbody').find(`tr[${TdAttr.TRType}=${TRType.Phase}]`);

                            //if (lstCnt.length == 1 && _curTD.next().length > 0 && _curTD.next()[0].children.length > 0) {
                            //    let btnDel = Ext.getCmp(_curTD.next()[0].children[0].id);
                            //    if (btnDel) {
                            //        btnDel.show();
                            //    }
                            //}
                        },
                        delay: 50
                    }
                }
            }
        },
        DeletePhase: {
            type: 'Phase',
            compType: ComponentType.ExtractActionButton,
            name: "DeletePhase",
            cssClass: "tdBtn",
            columnIndex: ColumnIdx++,
            config: {
                iconCls: '#TabDelete',
                cls: 'Btn',
                listeners: {
                    click: (cmp, eOpts) => {
                        Config.DeleteConfirmAlert().then(() => {
                            let _curTD = $(cmp.me.currentTD);
                            let _curTDRow = _curTD.parent('tr');
                            let _caseNo = _curTDRow.attr(TrAttr.CaseNo);
                            let _caseName = _curTDRow.attr(TrAttr.CaseName);
                            let _rowIdxInt = _curTD.parent('tr').attr(TrAttr.RowIndexIntervention);
                            let _rowIdxPhs = _curTD.parent('tr').attr(TrAttr.RowIndexPhase);

                            switch (_caseName) {
                                case Cases.CaseName.Therapy_Drug:
                                case Cases.CaseName.Therapy_CancerIntervention:
                                case Cases.CaseName.Therapy_Radiotherapy:
                                case Cases.CaseName.Therapy_BiologicalVaccine:
                                case Cases.CaseName.Therapy_LifestyleModification:
                                case Cases.CaseName.Therapy_DietarySupplement:
                                case Cases.CaseName.Therapy_Other:
                                    new Drug(_caseName).DeletePhase(_rowIdxInt, _rowIdxPhs);
                                    break;

                                case Cases.CaseName.Therapy_Device:
                                case Cases.CaseName.Therapy_ProcedureSurgery:
                                    new DeviceSurgery(_caseName).DeletePhase(_rowIdxInt, _rowIdxPhs);
                                    break;

                                case Cases.CaseName.Therapy_BehavioralSessionMeeting:
                                    new BehavioralSessionMeeting(_caseName).DeletePhase(_rowIdxInt, _rowIdxPhs);
                                    break;

                                default:
                            }

                            ////IUI.currentTD = $('td:first', $(Intervention.MainTableIdJQ()));
                            ////IUI.SmartDivPosition();
                            ////window.setTimeout(() => {
                            ////    IUI.CreateComponent();
                            ////}, 250);
                        }).catch(() => {
                            //console.log("Promise Rejected");
                        });
                    },
                    afterrender: {
                        fn: (cmp, eOpts) => {
                            let _curTD = $(cmp.me.currentTD);
                            let _curTDRow = _curTD.parent('tr');
                            let _caseNo = _curTDRow.attr(TrAttr.CaseNo);
                            let _caseName = _curTDRow.attr(TrAttr.CaseName);

                            let _rowIdxInt = _curTD.parent('tr').attr(TrAttr.RowIndexIntervention);
                            let _rowIdxPhs = _curTD.parent('tr').attr(TrAttr.RowIndexPhase);
                            ////let _rowIdx = _curTD.parent('tr').attr(TdAttr.RowIndex);
                            //let rwLen = $(Intervention.MainTableIdJQ()).find('tbody').find(`tr[${TrAttr.TRType}=${TRType.Phase}]tr[${TrAttr.RowIndexIntervention}=${_rowIdxInt}]tr[${TrAttr.RowIndexPhase}=${_rowIdxPhs}]`).length;
                            //rwLen >= 1 ? cmp.show() : cmp.hide();

                            switch (_caseName) {
                                case Cases.CaseName.Therapy_Drug:
                                case Cases.CaseName.Therapy_CancerIntervention:
                                case Cases.CaseName.Therapy_Radiotherapy:
                                case Cases.CaseName.Therapy_BiologicalVaccine:
                                case Cases.CaseName.Therapy_LifestyleModification:
                                case Cases.CaseName.Therapy_DietarySupplement:
                                case Cases.CaseName.Therapy_Other:
                                    new Drug(_caseName).DeletePhaseButtonAfterRender(cmp, _rowIdxInt, _rowIdxPhs);
                                    break;

                                case Cases.CaseName.Therapy_Device:
                                case Cases.CaseName.Therapy_ProcedureSurgery:
                                    new DeviceSurgery(_caseName).DeletePhaseButtonAfterRender(cmp, _rowIdxInt, _rowIdxPhs);
                                    break;

                                case Cases.CaseName.Therapy_BehavioralSessionMeeting:
                                    new BehavioralSessionMeeting(_caseName).DeletePhaseButtonAfterRender(cmp, _rowIdxInt, _rowIdxPhs);
                                    break;

                                default:
                            }
                        },
                        delay: 50
                    }
                }
            }
        },
    },

    Dosage: {
        Protocol: {
            type: 'Dosage',
            compType: ComponentType.ExtractDropdown,
            name: "Protocol",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "Protocol",
            cellText: "Protocol",
            config: {
                displayField: 'name',
                valueField: 'name',
                emptyText: '(None)',
                dpName: 'Protocol',
                //fieldLabel: 'Protocol',
                tpl: '<tpl for="."><div class="x-boundlist-item cmbtplborder">{name} </div></tpl>',
                displayTpl: '<tpl for=".">{name}</tpl>',
                store: {
                    fields: ['name', 'tooltip'],
                    data: [
                        { "name": "Actual", "tooltip": "Actual" },
                        { "name": "Protocol", "tooltip": "Protocol" },
                        { "name": "PRN", "tooltip": "as&nbsp;needed" },
                        { "name": "Cumulative", "tooltip": "Cumulative" }
                    ]
                },
                listeners: {
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },
        DosageType: {
            type: 'Dosage',
            compType: ComponentType.ExtractDropdown,
            name: "DosageType",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "Basal",
            cellText: "Basal",
            config: {
                //fieldLabel: 'Dosage Type',
                dpName: 'Dosage Type',
                store: ["Basal", "Bolus", "Ending Dose", "Loading Dose", "Maintenance Dose", "Prophylactic Dose", "Standard", "Starting Dose", "Therapeutic Dose"],
                listeners: {
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },
        FieldType: {
            type: 'Dosage',
            compType: ComponentType.ExtractText,
            name: "FieldType",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "Dosage Field Type",
            cellText: "Dosage Field Type",
            config: {
                //fieldLabel: 'Field Type',
                emptyText: 'Field Type',
                dpName: 'Dosage Field Type',
                listeners: {
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },
        FieldValue: {
            type: 'Dosage',
            compType: ComponentType.ExtractText,
            name: "FieldValue",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "Dosage Field Value",
            cellText: "Dosage Field Value",
            config: {
                //fieldLabel: 'Field Value',
                emptyText: 'Field Value',
                dpName: 'Dosage Field Value',
                listeners: {
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },
        DosageUnit: {
            type: 'Dosage',
            compType: ComponentType.ExtractDropdown,
            name: "DosageUnit",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "CFU",
            cellText: "CFU",
            config: {
                //fieldLabel: 'Dosage Unit',
                dpName: 'Dosage Unit',
                store: ["%", "% total", "Adjusted", "Cells", "CFU", "Days", "Gy", "Gy per fraction", "Hours", "IR", "IR/mL", "IU", "IU/day", "IU/kg", "IU/week", "L/day", "M IRU", "MIU", "MIU/m^2", "Megavoltage", "NA", "Not Reported", "PFU", "SQ-U", "SQ-U/mL", "STU", "STU/mL", "TU", "TU/mL", "U", "U/kg", "U/kg/day", "U/mL", "g", "g/day", "g/kg", "g/m^2", "mCi/kg", "mEq", "mEq/L", "mL/lbs", "mg", "mg/2 ml", "mg/2weeks", "mg/dL", "mg/day", "mg/g", "mg/hr", "mg/kg", "mg/kg/day", "mg/kg/hr", "mg/kg/wk", "mg/m^2", "mg/m^2/day", "mg/m^2/week", "mg/min", "mg/ml", "mg/ml/min", "mg/week", "ml", "ml/h", "ml/kg", "mmol", "mmol/L", "mmol/day", "ng/kg/min", "ng/min", "nmol", "nmol/mL", "pmol/kg/min", "ppm", "ratio", "spores", "x 10^5 IU/m^2", "x 10^9 CFU", "µg", "µg/L", "µg/day", "µg/g", "µg/kg", "µg/kg/min", "µg/kg/week", "µg/mL", "µg/week", "µmol/L", "μg/m^2"],
                listeners: {
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },
        Concentration: {
            type: 'Dosage',
            compType: ComponentType.ExtractText,
            name: "Concentration",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "Concentration",
            cellText: "Concentration",
            config: {
                //fieldLabel: 'Concentration',
                emptyText: 'Concentration',
                dpName: 'Concentration',
                listeners: {
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },
        ConcentrationUnit: {
            type: 'Dosage',
            compType: ComponentType.ExtractDropdown,
            name: "ConcentrationUnit",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "%",
            cellText: "%",
            config: {
                //fieldLabel: 'Concentration Unit',
                dpName: 'Concentration Unit',
                store: ["%", "% total", "Adjusted", "Cells", "CFU", "Days", "Gy", "Gy per fraction", "Hours", "IR", "IR/mL", "IU", "IU/day", "IU/kg", "IU/week", "L/day", "M IRU", "MIU", "MIU/m^2", "Megavoltage", "NA", "Not Reported", "PFU", "SQ-U", "SQ-U/mL", "STU", "STU/mL", "TU", "TU/mL", "U", "U/kg", "U/kg/day", "U/mL", "g", "g/day", "g/kg", "g/m^2", "mCi/kg", "mEq", "mEq/L", "mL/lbs", "mg", "mg/2 ml", "mg/2weeks", "mg/dL", "mg/day", "mg/g", "mg/hr", "mg/kg", "mg/kg/day", "mg/kg/hr", "mg/kg/wk", "mg/m^2", "mg/m^2/day", "mg/m^2/week", "mg/min", "mg/ml", "mg/ml/min", "mg/week", "ml", "ml/h", "ml/kg", "mmol", "mmol/L", "mmol/day", "ng/kg/min", "ng/min", "nmol", "nmol/mL", "pmol/kg/min", "ppm", "ratio", "spores", "x 10^5 IU/m^2", "x 10^9 CFU", "µg", "µg/L", "µg/day", "µg/g", "µg/kg", "µg/kg/min", "µg/kg/week", "µg/mL", "µg/week", "µmol/L", "μg/m^2"],
                listeners: {
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },
        Frequency: {
            type: 'Dosage',
            compType: ComponentType.ExtractText,
            name: "Frequency",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "Frequency",
            cellText: "Frequency",
            config: {
                //fieldLabel: 'Frequency',
                emptyText: 'Frequency',
                dpName: 'Dosage Frequency',
                listeners: {
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },
        FrequencyUnit: {
            type: 'Dosage',
            compType: ComponentType.ExtractDropdown,
            name: "FrequencyUnit",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "d",
            cellText: "week",
            config: {
                valueField: 'id',
                displayField: 'unit',
                emptyText: 'Unit',
                dpName: 'Frequency Unit',
                //fieldLabel: 'Unit',
                tpl: '<tpl for="."><div class="x-boundlist-item cmbtplborder">{unit} </div></tpl>',
                displayTpl: '<tpl for=".">{unit}</tpl>',
                store: {
                    type: 'array',
                    fields: ['id', 'unit'],
                    data: [
                        ['d', 'day'],
                        ['wk', 'week'],
                        ['mo', 'month'],
                        ['yr', 'year'],
                        ['eod', 'eod'],
                        ['eow', 'eow'],
                        ['e15d', 'e15d'],
                        ['e12wk', 'e12wk'],
                        ['e16wk', 'e16wk'],
                        ['e3w', 'e3w'],
                        ['e4w', 'e4w'],
                        ['e6w', 'e6w'],
                        ['e7w', 'e7w'],
                        ['e8w', 'e8w'],
                        ['e3m', 'e3m'],
                        ['e6m', 'e6m'],
                        ['NR', 'NR'],
                        ['N/A', 'N/A']
                    ]
                },
                listeners: {
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },
        FrequencyInfo: {
            type: 'Dosage',
            compType: ComponentType.ExtractText,
            name: "FrequencyInfo",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "Frequency Info",
            cellText: "Frequency Info",
            config: {
                //fieldLabel: 'Frequency Info',
                emptyText: 'Frequency Info',
                dpName: 'Frequency Information',
                listeners: {
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },
        Duration: {
            type: 'Dosage',
            compType: ComponentType.ExtractText,
            name: "Duration",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "Duration Value",
            cellText: "Duration Value",
            config: {
                dpName: 'Time Value',
                emptyText: '#',
                listeners: {
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },

        //Duration: {
        //    type: 'Dosage',
        //    compType: ComponentType.ExtractText,
        //    name: "Duration",
        //    cssClass: "tdCls",
        //    columnIndex: ColumnIdx++,
        //    dpValue: "Time",
        //    cellText: "Time",
        //    config: {
        //        //fieldLabel: 'Duration',
        //        dpName: 'Time',
        //        emptyText: 'Duration',
        //        listeners: {
        //            beforedestroy: (cmp, eOpts) => {
        //                if (!Ext.isEmpty(cmp.getValue())) {
        //                    Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
        //                }
        //            }
        //        }
        //    }
        //},
        DurationUnit: {
            type: 'Dosage',
            compType: ComponentType.ExtractDropdown,
            name: "DurationUnit",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "Duration Unit",
            cellText: "Duration Unit",
            config: {
                //fieldLabel: 'Duration Unit',
                dpName: 'Time',
                valueField: 'id',
                displayField: 'unit',
                tpl: '<tpl for="."><div class="x-boundlist-item cmbtplborder">{unit} </div></tpl>',
                displayTpl: '<tpl for=".">{unit}</tpl>',
                store: {
                    type: 'array',                    
                    fields: ['id', 'unit'],                    
                    data: [
                        ['ms', 'miliseconds'],
                        ['s', 'seconds'],
                        ['m', 'minutes'],
                        ['h', 'hours'],
                        ['d', 'days'],
                        ['wk', 'weeks'],
                        ['mo', 'months'],
                        ['yr', 'years'],
                        ['Cycles', 'Cycles']
                    ]
                },
                listeners: {
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },
        DurationInfo: {
            type: 'Dosage',
            compType: ComponentType.ExtractText,
            name: "DurationInfo",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "Duration Info",
            cellText: "Duration Info",
            config: {
                //fieldLabel: 'Duration Info',
                emptyText: 'Duration Info',
                dpName: 'Timepoint Information',
                listeners: {
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },
        TimepointUnit: {
            type: 'Dosage',
            compType: ComponentType.ExtractDropdown,
            name: "TimepointUnit",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "Timepoint Unit",
            cellText: "Timepoint Unit",
            config: {
                //fieldLabel: 'Timpoint',
                dpName: 'Timepoint Name',
                dPFieldtoUpdate: "Name",
                store: ["Baseline", "Day", "Week", "Month", "Year"],
                listeners: {
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },
        TimepointNo: {
            type: 'Dosage',
            compType: ComponentType.ExtractText,
            name: "TimepointNo",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "Timepoint No",
            cellText: "Timepoint No",
            config: {
                //fieldLabel: 'Timpoint #',
                emptyText: '#',
                dpName: 'Timepoint Value',
                listeners: {
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },
        TimepointInfo: {
            type: 'Dosage',
            compType: ComponentType.ExtractText,
            name: "TimepointInfo",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "Timepoint Info",
            cellText: "Timepoint Info",
            config: {
                //fieldLabel: 'Timpoint Info',
                emptyText: 'Timpoint Info',
                dpName: 'Timepoint Information',
                dPFieldtoUpdate: 'AddInfo',
                listeners: {
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },
        AddDosage: {
            type: 'Dosage',
            compType: ComponentType.ExtractActionButton,
            name: "AddDosage",
            cssClass: "tdBtn",
            columnIndex: ColumnIdx++,
            config: {
                iconCls: '#TabAdd',
                cls: 'Btn',
                listeners: {
                    click: (cmp, eOpts) => {
                        let _curTD = $(cmp.me.currentTD);
                        let _curTDRow = _curTD.parent('tr');
                        let _caseNo = _curTDRow.attr(TrAttr.CaseNo);
                        let _caseName = _curTDRow.attr(TrAttr.CaseName);

                        let trtype = _curTD.parent('tr').attr(TrAttr.TRType);
                        let _rowIdxInt = _curTD.parent('tr').attr(TrAttr.RowIndexIntervention);
                        let _rowIdxPhs = _curTD.parent('tr').attr(TrAttr.RowIndexPhase);
                        let _rowIdxDsg = _curTD.parent('tr').attr(TrAttr.RowIndexDosage);

                        if (Ext.isEmpty(_rowIdxPhs)) {
                            _rowIdxPhs = 1;
                        } else {
                            _rowIdxPhs = Number(_rowIdxPhs);
                        }
                        if (Ext.isEmpty(_rowIdxDsg)) {
                            _rowIdxDsg = 1;
                        } else {
                            _rowIdxDsg = Number(_rowIdxDsg) + 1;
                        }


                        switch (_caseName) {
                            case Cases.CaseName.Therapy_Drug:
                            case Cases.CaseName.Therapy_CancerIntervention:
                            case Cases.CaseName.Therapy_Radiotherapy:
                            case Cases.CaseName.Therapy_BiologicalVaccine:
                            case Cases.CaseName.Therapy_LifestyleModification:
                            case Cases.CaseName.Therapy_DietarySupplement:
                            case Cases.CaseName.Therapy_Other:
                                new Drug(_caseName).AddDosage(_curTD, trtype, _rowIdxInt, _rowIdxPhs, _rowIdxDsg);
                                break;

                            case Cases.CaseName.Therapy_Device:
                            case Cases.CaseName.Therapy_ProcedureSurgery:
                                new DeviceSurgery(_caseName).AddDosage(_curTD, trtype, _rowIdxInt, _rowIdxPhs, _rowIdxDsg);
                                break;                            

                            default:
                        }


                        //let objI = new Intervention();
                        //let row = objI.CreateDosageTR(_rowIdxInt, _rowIdxPhs, _rowIdxDsg);

                        //let lstCnt = $(Intervention.MainTableIdJQ()).find('tbody').find(`tr[${TrAttr.TRType}=${trtype}]tr[${TrAttr.RowIndexIntervention}=${_rowIdxInt}]tr[${TrAttr.RowIndexPhase}=${_rowIdxPhs}]:last`);
                        //if (lstCnt.length == 0) {
                        //    lstCnt = $(Intervention.MainTableIdJQ()).find('tbody').find(`tr[${TrAttr.TRType}=${TRType.FixedDose}]tr[${TrAttr.RowIndexIntervention}=${_rowIdxInt}]:last`);
                        //}
                        //if (lstCnt.length > 0) {
                        //    lstCnt.after(row);
                        //}
                        ////let cell = IUI.CreateEmptyTD(17);
                        ////row.appendChild(cell);

                        ////IUI.CreateDosageFields(row);

                        cmp.hide();
                    }
                }
            }
        },
        DeleteDosage: {
            type: 'Dosage',
            compType: ComponentType.ExtractActionButton,
            name: "DeleteDosage",
            cssClass: "tdBtn",
            columnIndex: ColumnIdx++,
            config: {
                iconCls: '#TabDelete',
                cls: 'Btn',
                listeners: {
                    click: (cmp, eOpts) => {
                        Config.DeleteConfirmAlert().then(() => {
                            let _curTD = $(cmp.me.currentTD);
                            let _curTDRow = _curTD.parent('tr');
                            let _caseNo = _curTDRow.attr(TrAttr.CaseNo);
                            let _caseName = _curTDRow.attr(TrAttr.CaseName);

                            let _rowIdxInt = _curTD.parent('tr').attr(TrAttr.RowIndexIntervention);
                            let _rowIdxPhs = _curTD.parent('tr').attr(TrAttr.RowIndexPhase);

                            switch (_caseName) {
                                case Cases.CaseName.Therapy_Drug:
                                case Cases.CaseName.Therapy_CancerIntervention:
                                case Cases.CaseName.Therapy_Radiotherapy:
                                case Cases.CaseName.Therapy_BiologicalVaccine:
                                case Cases.CaseName.Therapy_LifestyleModification:
                                case Cases.CaseName.Therapy_DietarySupplement:
                                case Cases.CaseName.Therapy_Other:
                                    new Drug(_caseName).DeleteDosage(_curTD, _rowIdxInt, _rowIdxPhs);
                                    break;

                                case Cases.CaseName.Therapy_Device:
                                case Cases.CaseName.Therapy_ProcedureSurgery:
                                    new DeviceSurgery(_caseName).DeleteDosage(_curTD, _rowIdxInt, _rowIdxPhs);
                                    break;

                                default:
                            }

                            //let _rowIdxDsg = _curTD.parent('tr').attr(TrAttr.RowIndexDosage);
                            //let _prvRw = _curTD.parent('tr').prev();
                            //_curTD.parent('tr').remove();

                            //let lstCnt = $(Intervention.MainTableIdJQ()).find('tbody').find(`tr[${TrAttr.RowIndexIntervention}=${_rowIdxInt}]tr[${TrAttr.RowIndexPhase}=${_rowIdxPhs}]`);
                            //if (lstCnt.length != 0) {
                            //    let lstTdAdd = lstCnt.find(`td[config='AddDosage']`);

                            //    if (lstTdAdd.length > 0 && lstTdAdd[0].children.length > 0) {
                            //        let btnAdd = Ext.getCmp(lstTdAdd.eq(lstTdAdd.length - 1)[0].children[0].id);
                            //        if (btnAdd) {
                            //            btnAdd.show();
                            //        }
                            //    }
                            //} else {
                            //    let lstTdAdd = _prvRw.find(`td[config='AddDosage']`);

                            //    if (lstTdAdd.length > 0 && lstTdAdd[0].children.length > 0) {
                            //        let btnAdd = Ext.getCmp(lstTdAdd.eq(lstTdAdd.length - 1)[0].children[0].id);
                            //        if (btnAdd) {
                            //            btnAdd.show();
                            //        }
                            //    }
                            //    //let tdDel = _prvRw.find(`td[config='DeleteDosage']`);
                            //    //if (tdDel.length > 0 && tdDel[0].children.length > 0) {
                            //    //    let btnDel = Ext.getCmp(tdDel[0].children[0].id);
                            //    //    if (btnDel) {
                            //    //        btnDel.hide();
                            //    //    }
                            //    //}
                            //}
                            ////IUI.currentTD = $('td:first', $(Intervention.MainTableIdJQ()));
                            ////IUI.SmartDivPosition();
                            ////window.setTimeout(() => {
                            ////    IUI.CreateComponent();
                            ////}, 250);
                        }).catch(() => {
                            //console.log("Promise Rejected");
                        });
                    },
                    afterrender: {
                        fn: (cmp, eOpts) => {
                            let _curTD = $(cmp.me.currentTD);
                            let _curTDRow = _curTD.parent('tr');
                            let _caseNo = _curTDRow.attr(TrAttr.CaseNo);
                            let _caseName = _curTDRow.attr(TrAttr.CaseName);

                            let _rowIdxInt = _curTD.parent('tr').attr(TrAttr.RowIndexIntervention);
                            let _rowIdxPhs = _curTD.parent('tr').attr(TrAttr.RowIndexPhase);
                            let _rowIdxDsg = _curTD.parent('tr').attr(TrAttr.RowIndexDosage);

                            switch (_caseName) {
                                case Cases.CaseName.Therapy_Drug:
                                case Cases.CaseName.Therapy_CancerIntervention:
                                case Cases.CaseName.Therapy_Radiotherapy:
                                case Cases.CaseName.Therapy_BiologicalVaccine:
                                case Cases.CaseName.Therapy_LifestyleModification:
                                case Cases.CaseName.Therapy_DietarySupplement:
                                case Cases.CaseName.Therapy_Other:
                                    new Drug(_caseName).DeleteDosageButtonAfterRender(cmp, _rowIdxInt, _rowIdxPhs, _rowIdxDsg);
                                    break;

                                case Cases.CaseName.Therapy_Device:
                                case Cases.CaseName.Therapy_ProcedureSurgery:
                                    new DeviceSurgery(_caseName).DeleteDosageButtonAfterRender(cmp, _rowIdxInt, _rowIdxPhs, _rowIdxDsg);
                                    break;

                                default:
                            }

                            ////let _rowIdx = _curTD.parent('tr').attr(TdAttr.RowIndex);                        
                            //let rwLen = $(Intervention.MainTableIdJQ()).find('tbody').find(`tr[${TrAttr.TRType}=${TRType.Dosage}]tr[${TrAttr.RowIndexIntervention}=${_rowIdxInt}]tr[${TrAttr.RowIndexPhase}=${_rowIdxPhs}]tr[${TrAttr.RowIndexDosage}=${_rowIdxDsg}]`).length;
                            //rwLen >= 1 ? cmp.show() : cmp.hide();
                        },
                        delay: 50
                    }
                }
            }
        }
    },

    SessionMeeting: {
        SessionFrequency: {
            type: 'SessionMeeting',
            compType: ComponentType.ExtractText,
            name: "SessionFrequency",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "Session Frequency",
            cellText: "Session Frequency",
            config: {
                //fieldLabel: 'Timpoint Info',
                emptyText: 'Session Frequency',
                dpName: 'Session Frequency',
                listeners: {
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },
        SessionFrequencyUnit: {
            type: 'SessionMeeting',
            compType: ComponentType.ExtractDropdown,
            name: "SessionFrequencyUnit",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "Session Frequency Unit",
            cellText: "Session Frequency Unit",
            config: {
                //fieldLabel: 'Timpoint Info',
                emptyText: 'Session Frequency Unit',
                dpName: 'Session Frequency Unit',
                store: ["day", "wk", "mo", "eod", "eow", "e3w", "e4w", "e6w", "e8w", "e3m", "e6m", "NR", "N/A"],
                listeners: {
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },
        SessionDuration: {
            type: 'SessionMeeting',
            compType: ComponentType.ExtractText,
            name: "SessionDuration",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "Session Duration",
            cellText: "Session Duration",
            config: {
                //fieldLabel: 'Timpoint Info',
                emptyText: 'Session Duration',
                dpName: 'Session Duration',
                listeners: {
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },
        SessionDurationUnit: {
            type: 'SessionMeeting',
            compType: ComponentType.ExtractDropdown,
            name: "SessionDurationUnit",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "Session Duration Unit",
            cellText: "Session Duration Unit",
            config: {
                //fieldLabel: 'Timpoint Info',
                emptyText: 'Session Duration Unit',
                dpName: 'Session Duration Unit',
                store: ["day", "wk", "mo", "eod", "eow", "e3w", "e4w", "e6w", "e8w", "e3m", "e6m", "NR", "N/A"],
                listeners: {
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },
        TotalSessions: {
            type: 'SessionMeeting',
            compType: ComponentType.ExtractText,
            name: "TotalSessions",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "Total Sessions",
            cellText: "Total Sessions",
            config: {
                //fieldLabel: 'Timpoint Info',
                emptyText: 'Total Sessions',
                dpName: 'Total Sessions',
                listeners: {
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },
        TotalSessionsUnit: {
            type: 'SessionMeeting',
            compType: ComponentType.ExtractDropdown,
            name: "TotalSessionsUnit",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "Total Sessions Unit",
            cellText: "Total Sessions Unit",
            config: {
                //fieldLabel: 'Timpoint Info',
                emptyText: 'Total Sessions Unit',
                dpName: 'Total Sessions Unit',
                store: ["day", "wk", "mo", "eod", "eow", "e3w", "e4w", "e6w", "e8w", "e3m", "e6m", "NR", "N/A"],
                listeners: {
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },
        TotalDuration: {
            type: 'SessionMeeting',
            compType: ComponentType.ExtractText,
            name: "TotalDuration",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "Total Duration",
            cellText: "Total Duration",
            config: {
                //fieldLabel: 'Timpoint Info',
                emptyText: 'Total Duration',
                dpName: 'Total Duration',
                listeners: {
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },
        TotalDurationUnit: {
            type: 'SessionMeeting',
            compType: ComponentType.ExtractDropdown,
            name: "TotalDurationUnit",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "Total Duration Unit",
            cellText: "Total Duration Unit",
            config: {
                //fieldLabel: 'Timpoint Info',
                emptyText: 'Total Duration Unit',
                dpName: 'Total Duration Unit',
                store: ["day", "wk", "mo", "eod", "eow", "e3w", "e4w", "e6w", "e8w", "e3m", "e6m", "NR", "N/A"],
                listeners: {
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },
        ExperienceCertification: {
            type: 'SessionMeeting',
            compType: ComponentType.ExtractText,
            name: "ExperienceCertification",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "Experience/Certification",
            cellText: "Experience/Certification",
            config: {
                //fieldLabel: 'Timpoint Info',
                emptyText: 'Experience/Certification',
                dpName: 'Experience/Certification',
                listeners: {
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },
        TypeOfCounseling: {
            type: 'SessionMeeting',
            compType: ComponentType.ExtractDropdown,
            name: "TypeOfCounseling",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "Type of Counseling",
            cellText: "Type of Counseling",
            config: {
                //fieldLabel: 'Timpoint Info',
                emptyText: 'Type of Counseling',
                dpName: 'Type of Counseling',
                store: ["Acupuncture", "Genetic Counseling", "Nutritionist", "Psychiatric Counseling"],
                listeners: {
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },
        InterventionObjective: {
            type: 'SessionMeeting',
            compType: ComponentType.ExtractText,
            name: "InterventionObjective",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "Intervention Objective",
            cellText: "Intervention Objective",
            config: {
                //fieldLabel: 'Timpoint Info',
                emptyText: 'Intervention Objective',
                dpName: 'Intervention Objective',
                listeners: {
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },
        TopicCovered: {
            type: 'SessionMeeting',
            compType: ComponentType.ExtractText,
            name: "TopicCovered",
            cssClass: "tdCls",
            columnIndex: ColumnIdx++,
            dpValue: "Topic Covered",
            cellText: "Topic Covered",
            config: {
                //fieldLabel: 'Timpoint Info',
                emptyText: 'Topic Covered',
                dpName: 'Topic Covered',
                listeners: {
                    beforedestroy: (cmp, eOpts) => {
                        if (!Ext.isEmpty(cmp.getValue())) {
                            Config.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                        }
                    }
                }
            }
        },
    }
}


class Config {

    static DeleteConfirmAlert() {
        return new Promise((resolve, reject) => {
            Ext.MessageBox.show({
                title: "Confirm Delete?", msg: "Are you sure you want to delete?", prompt: false,
                icon: Ext.Msg.QUESTION,
                width: 300,
                buttons: { yes: "Yes", no: "No" }, fn: (btn, text) => {
                    if (btn == "yes") {
                        return resolve();
                    } else {
                        return reject();
                    }
                }
            });
        });
    }

    static CommonMetod(currentTD, value, rawValue) {
        currentTD.innerHTML = rawValue;
        currentTD.setAttribute(TdAttr.DPVal, value);
    }

    //static AddInfo() {
    //    return {
    //        emptyText: 'Intervention',
    //        listeners: {
    //            //blur: (cmp, eOpts) => {
    //            //    if (!Ext.isEmpty(cmp.getValue())) {
    //            //        cmp.me.currentTD[0].innerHTML = cmp.getValue();
    //            //    }
    //            //},
    //            beforedestroy: (cmp, eOpts) => {
    //                if (!Ext.isEmpty(cmp.getValue())) {
    //                    this.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
    //                }
    //            }
    //        }
    //    }
    //}

    static AppendProps(config, props) {
        let keys = Object.keys(props);

        keys.map((key) => { return config[key] = props[key] });

        return config
    }
}