/// <reference path="reference.js" />

let ColumnIdx = 1;

const ComponentList = {
    TreatmentTag: {
        type: 'Intervention',
        compType: ComponentType.ExtractButton,
        name: "TreatmentTag",
        cssClass: "tdCls",
        columnIndex: ColumnIdx++,
        dpValue: "Backbone Intervention",
        cellText: "B",
        dpSourceType: Extract.EntityTypes.InterventionSets,
        dpSource: Extract.Groups.SOURCENAMES.OTHERS,
        dpName: 'Treatment Tag',
        dpFieldtoUpdate: "Value",
        config: {
            //fieldLabel: 'Treatment Tag',                
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
                    let dp = Extract.Data.Datapoints[IUI.currentTD.attr(TdAttr.DPId)];
                    //btn.suspendLayouts();
                    if (dp.Value == "Treatment Tag") {
                        //Extract.Helper.setEntity(Extract.EntityTypes.Datapoints, btn.enty.id, { Value: 'Intervention' });
                        dp.Value = "Intervention";
                        btn.setText("I");
                        IUI.currentTD.text("Intervention");
                        //btn.removeCls("btn-treatment-tag-i");
                        //btn.addCls("btn-treatment-tag-i");
                    } else if (dp.Value == "Intervention") {
                        //Extract.Helper.setEntity(Extract.EntityTypes.Datapoints, btn.enty.id, { Value: 'Control' });
                        dp.Value = "Control";
                        btn.setText("C");
                        IUI.currentTD.text("Control");
                        btn.removeCls("btn-treatment-tag-i");
                        btn.addCls("btn-treatment-tag-c");
                    } else if (dp.Value == "Control") {
                        //Extract.Helper.setEntity(Extract.EntityTypes.Datapoints, btn.enty.id, { Value: 'Rescue Intervention' });
                        dp.Value = "Rescue Intervention";
                        btn.setText("R");
                        IUI.currentTD.text("Rescue Intervention");
                        btn.removeCls("btn-treatment-tag-c");
                        btn.addCls("btn-treatment-tag-r");
                    } else if (dp.Value == "Rescue Intervention") {
                        //Extract.Helper.setEntity(Extract.EntityTypes.Datapoints, btn.enty.id, { Value: 'Backbone Intervention' });
                        dp.Value = "Backbone Intervention";
                        btn.setText("B");
                        IUI.currentTD.text("Backbone Intervention");
                        btn.removeCls("btn-treatment-tag-r");
                        btn.addCls("btn-treatment-tag-b");
                    } else if (dp.Value == "Backbone Intervention") {
                        //Extract.Helper.setEntity(Extract.EntityTypes.Datapoints, btn.enty.id, { Value: 'Treatment Tag' });
                        dp.Value = "Treatment Tag";
                        btn.setText(" ");
                        IUI.currentTD.text("Treatment Tag");
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
                    ////btn.dpVal = dp.Value;
                    //Config.setTDValue(dp.Value, btn.getText());
                    ////btn.resumeLayouts();
                },
                //beforedestroy: (btn, eOpts) => {
                //    if (!Ext.isEmpty(btn.getText())) {
                //        Config.CommonMetod(btn.me.currentTD[0], btn.dpVal, btn.getText());
                //    }
                //},
                afterrender: (btn, e) => {
                    let dp = Extract.Data.Datapoints[IUI.currentTD.attr(TdAttr.DPId)];
                    //dp.Value = IUI.currentTD.attr(TdAttr.DPVal); 
                    if (Ext.isEmpty(dp.Value)) {
                        Extract.Helper.setEntity(Extract.EntityTypes.Datapoints, dp.id, { Value: 'Treatment Tag' });
                        dp.Value = "Treatment Tag";
                    }
                    if (dp.Value == "Treatment Tag") {
                        btn.addCls("btn-treatment-tag-i");
                        btn.setText(" ");
                        //IUI.currentTD.text("T");
                    } else if (dp.Value == "Intervention") {
                        btn.addCls("btn-treatment-tag-i");
                        btn.setText("I");
                        //IUI.currentTD.text("I");
                    } else if (dp.Value == "Control") {
                        btn.addCls("btn-treatment-tag-c");
                        btn.setText("C");
                        //IUI.currentTD.text("C");
                    } else if (dp.Value == "Rescue Intervention") {
                        btn.addCls("btn-treatment-tag-r");
                        btn.setText("R");
                        //IUI.currentTD.text("R");
                    } else if (dp.Value == "Backbone Intervention") {
                        btn.addCls("btn-treatment-tag-b");
                        btn.setText("B");
                        //IUI.currentTD.text("B");
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
        dpDefaultValue: "No",
        cellText: "(None)",
        dpSourceType: Extract.EntityTypes.InterventionSets,
        dpSource: Extract.Groups.SOURCENAMES.FIXED_DOSE_COMBINATION,
        dpName: "Fixed Dose",
        dpFieldtoUpdate: "Value",
        config: {
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
                change: (cmp, newVal, oldVal, eOpts) => {
                    let _curTD = $(IUI.currentTD);
                    let _curTDRow = _curTD.parent('tr');
                    ////let tBody = _curTD.parent('tbody');
                    //let _dpId = _curTD.attr(TdAttr.DPId);
                    //let _Cnfg = _curTD.attr(TdAttr.Config);
                    let intSetId = _curTDRow.attr(TrAttr.RowIndexIntervention);
                    //let obj = {};
                    //obj[_Cnfg["dpFieldtoUpdate"]] = Ext.isEmpty(newVal) ? "" : newVal;
                    //Extract.Helper.setEntity(Extract.EntityTypes.Datapoints, _dpId, obj);
                    //Extract.Data.Datapoints[_dpId][_Cnfg["dpFieldtoUpdate"]] = obj[_Cnfg["dpFieldtoUpdate"]];
                    if (cmp.getValue() == 'Yes') {
                        _curTD.closest('tbody').find(`tr[${TrAttr.TRType}=${TRType.FixedDose}]tr[${TrAttr.RowIndexIntervention}=${intSetId}]`)
                            .removeClass("trDisplayNone");
                        _curTDRow.find(`td[${TdAttr.Config}=${ComponentList.Intervention.name}]`).addClass("trDisplayNone");
                        _curTDRow.find(`td[${TdAttr.Config}=${ComponentList.FixedDoseCombinationName.name}]`).removeClass("trDisplayNone");
                    } else {
                        _curTD.closest('tbody').find(`tr[${TrAttr.TRType}=${TRType.FixedDose}]tr[${TrAttr.RowIndexIntervention}=${intSetId}]`)
                            .addClass("trDisplayNone");
                        _curTDRow.find(`td[${TdAttr.Config}=${ComponentList.Intervention.name}]`).removeClass("trDisplayNone");
                        _curTDRow.find(`td[${TdAttr.Config}=${ComponentList.FixedDoseCombinationName.name}]`).addClass("trDisplayNone");
                    }
                }
            }
        },
        getTDDispValue: (dpVal) => {
            let dt = [['No', '(None)'], ['Yes', 'Fixed']];
            let val = dt.filter(a => { return a[0] == dpVal });
            if (val) {
                return val[0][1];
            }
            return dpVal;
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
        dpSourceType: Extract.EntityTypes.InterventionSets,
        dpSource: Extract.Groups.SOURCENAMES.OTHERS,
        dpName: 'Intervention Name',
        dpFieldtoUpdate: "Value",
        config: {
            //fieldLabel: 'Intervention',
            emptyText: 'Intervention',
            //defaults: {
            listeners: {
                //blur: (cmp, eOpts) => {
                //    if (!Ext.isEmpty(cmp.getValue())) {
                //        IUI.currentTD[0].innerHTML = cmp.getValue();
                //    }
                //},                    
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
        dpSourceType: Extract.EntityTypes.InterventionSets,
        dpSource: Extract.Groups.SOURCENAMES.FIXED_DOSE_COMBINATION,
        dpName: 'Fixed Dose Combination Name',
        dpFieldtoUpdate: "Value",
        config: {
            //fieldLabel: 'Brand',
            emptyText: 'Fixed Dose Combination Name',
            listeners: {
                //blur: (cmp, eOpts) => {
                //    if (!Ext.isEmpty(cmp.getValue())) {
                //        IUI.currentTD[0].innerHTML = cmp.getValue();
                //    }
                //},                    
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
        dpSourceType: Extract.EntityTypes.InterventionSets,
        dpSource: Extract.Groups.SOURCENAMES.OTHERS,
        dpName: 'Manufacturer',
        dpFieldtoUpdate: "Value",
        config: {
            //fieldLabel: 'Manufacture',
            emptyText: 'Manufacturer',
            listeners: {
                //blur: (cmp, eOpts) => {
                //    if (!Ext.isEmpty(cmp.getValue())) {
                //        IUI.currentTD[0].innerHTML = cmp.getValue();
                //    }
                //},                    
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
        dpSourceType: Extract.EntityTypes.InterventionSets,
        dpSource: Extract.Groups.SOURCENAMES.OTHERS,
        dpName: 'Brand',
        dpFieldtoUpdate: "Value",
        config: {
            //fieldLabel: 'Brand',
            emptyText: 'Brand',
            listeners: {
                //blur: (cmp, eOpts) => {
                //    if (!Ext.isEmpty(cmp.getValue())) {
                //        IUI.currentTD[0].innerHTML = cmp.getValue();
                //    }
                //},                    
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
        dpSourceType: Extract.EntityTypes.InterventionSets,
        dpSource: Extract.Groups.SOURCENAMES.OTHERS,
        dpName: 'Medium',
        dpFieldtoUpdate: "Value",
        config: {
            //fieldLabel: 'Brand',
            store: ["Booklet", "Brochure", "Video", "Website"],
            emptyText: 'Medium',
            listeners: {
                //blur: (cmp, eOpts) => {
                //    if (!Ext.isEmpty(cmp.getValue())) {
                //        IUI.currentTD[0].innerHTML = cmp.getValue();
                //    }
                //},                    
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
        dpSourceType: Extract.EntityTypes.InterventionSets,
        dpSource: Extract.Groups.SOURCENAMES.OTHERS,
        dpName: 'Title',
        dpFieldtoUpdate: "Value",
        config: {
            //fieldLabel: 'Brand',
            emptyText: 'Title',
            listeners: {
                //blur: (cmp, eOpts) => {
                //    if (!Ext.isEmpty(cmp.getValue())) {
                //        IUI.currentTD[0].innerHTML = cmp.getValue();
                //    }
                //},                    
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
        dpSourceType: Extract.EntityTypes.InterventionSets,
        dpSource: Extract.Groups.SOURCENAMES.OTHERS,
        dpName: 'Publisher',
        dpFieldtoUpdate: "Value",
        config: {
            //fieldLabel: 'Brand',
            emptyText: 'Publisher',
            listeners: {
                //blur: (cmp, eOpts) => {
                //    if (!Ext.isEmpty(cmp.getValue())) {
                //        IUI.currentTD[0].innerHTML = cmp.getValue();
                //    }
                //},                    
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
        dpSourceType: Extract.EntityTypes.InterventionSets,
        dpSource: Extract.Groups.SOURCENAMES.OTHERS,
        dpName: 'Publish Year',
        dpFieldtoUpdate: "Value",
        config: {
            //fieldLabel: 'Brand',
            emptyText: 'Publish Year',
            listeners: {
                //blur: (cmp, eOpts) => {
                //    if (!Ext.isEmpty(cmp.getValue())) {
                //        IUI.currentTD[0].innerHTML = cmp.getValue();
                //    }
                //},                    
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
        dpSourceType: Extract.EntityTypes.InterventionSets,
        dpSource: Extract.Groups.SOURCENAMES.OTHERS,
        dpName: 'Edition',
        dpFieldtoUpdate: "Value",
        config: {
            //fieldLabel: 'Brand',
            emptyText: 'Edition',
            listeners: {
                //blur: (cmp, eOpts) => {
                //    if (!Ext.isEmpty(cmp.getValue())) {
                //        IUI.currentTD[0].innerHTML = cmp.getValue();
                //    }
                //},                    
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
        dpSourceType: Extract.EntityTypes.InterventionSets,
        dpSource: Extract.Groups.SOURCENAMES.OTHERS,
        dpName: 'Length',
        dpFieldtoUpdate: "Value",
        config: {
            //fieldLabel: 'Brand',
            emptyText: 'Length',
            listeners: {
                //blur: (cmp, eOpts) => {
                //    if (!Ext.isEmpty(cmp.getValue())) {
                //        IUI.currentTD[0].innerHTML = cmp.getValue();
                //    }
                //},                    
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
        dpSourceType: Extract.EntityTypes.InterventionSets,
        dpSource: Extract.Groups.SOURCENAMES.OTHERS,
        dpName: 'Unit',
        dpFieldtoUpdate: "Value",
        config: {
            //fieldLabel: 'Brand',
            store: ["%", "% total", "Adjusted", "Days", "Hours", "IU", "IU/kg", "L/day", "M IRU", "MIU", "MIU/m^2", "U", "U/kg", "U/mL", "g", "g/day", "g/kg", "mCi/kg", "mEq", "mEq/L",
                "mL/lbs", "mg", "mg/2weeks", "mg/dL", "mg/day", "mg/hr", "mg/kg", "mg/kg/day", "mg/kg/hr", "mg/m^2", "mg/m^2/day", "mg/m^2/week", "mg/min", "mg/ml", "mg/ml/min",
                "mg/week", "ml", "ml/h", "ml/kg", "mmol", "mmol/L", "mmol/day", "ng/kg/min", "nmol/mL", "ppm", "ratio", "µg", "µg/L", "µg/day", "µg/g", "µg/kg", "µg/kg/min",
                "µg/kg/week", "µg/mL", "µg/week", "µmol/L"],
            emptyText: 'Unit',
            listeners: {
                //blur: (cmp, eOpts) => {
                //    if (!Ext.isEmpty(cmp.getValue())) {
                //        IUI.currentTD[0].innerHTML = cmp.getValue();
                //    }
                //},                    
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
        dpSourceType: Extract.EntityTypes.InterventionSets,
        dpSource: Extract.Groups.SOURCENAMES.OTHERS,
        dpName: 'Language',
        dpFieldtoUpdate: "Value",
        config: {
            //fieldLabel: 'Brand',
            emptyText: 'Language',
            listeners: {
                //blur: (cmp, eOpts) => {
                //    if (!Ext.isEmpty(cmp.getValue())) {
                //        IUI.currentTD[0].innerHTML = cmp.getValue();
                //    }
                //},                    
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
        dpSourceType: Extract.EntityTypes.InterventionSets,
        dpSource: Extract.Groups.SOURCENAMES.OTHERS,
        dpName: 'Audience',
        dpFieldtoUpdate: "Value",
        config: {
            //fieldLabel: 'Brand',
            emptyText: 'Audience',
            listeners: {
                //blur: (cmp, eOpts) => {
                //    if (!Ext.isEmpty(cmp.getValue())) {
                //        IUI.currentTD[0].innerHTML = cmp.getValue();
                //    }
                //},                    
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
        dpSourceType: Extract.EntityTypes.InterventionSets,
        dpSource: Extract.Groups.SOURCENAMES.OTHERS,
        dpName: 'Provider',
        dpFieldtoUpdate: "Value",
        config: {
            //fieldLabel: 'Brand',
            store: ["Allied Health Care Provider", "Care Provider", "Clinician", "Doctor", "Doctoral Student", "Foster Parent", "General Practitioner", "Graduate Student",
                "Multiple Individuals", "N/A", "NR", "Nurse", "Paid Caregiver", "Pharmacist", "Psychiatrist", "Psychologist", "Self", "Teacher", "Team", "Therapist",
                "Unpaid Caregiver"],
            emptyText: 'Unit',
            listeners: {
                //blur: (cmp, eOpts) => {
                //    if (!Ext.isEmpty(cmp.getValue())) {
                //        IUI.currentTD[0].innerHTML = cmp.getValue();
                //    }
                //},                    
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
        dpSourceType: Extract.EntityTypes.InterventionSets,
        dpSource: Extract.Groups.SOURCENAMES.OTHERS,
        dpName: 'Manualized Treatment',
        dpFieldtoUpdate: "Value",
        config: {
            //fieldLabel: 'Brand',
            store: ["N/A", "NR", "No", "Unclear", "Yes"],
            emptyText: 'Manualized Treatment',
            listeners: {
                //blur: (cmp, eOpts) => {
                //    if (!Ext.isEmpty(cmp.getValue())) {
                //        IUI.currentTD[0].innerHTML = cmp.getValue();
                //    }
                //},                    
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
        dpSourceType: Extract.EntityTypes.InterventionSets,
        dpSource: Extract.Groups.SOURCENAMES.OTHERS,
        dpName: 'Other Treatment Name',
        dpFieldtoUpdate: "Value",
        config: {
            //fieldLabel: 'Brand',
            emptyText: 'Other Treatment Name',
            listeners: {
                //blur: (cmp, eOpts) => {
                //    if (!Ext.isEmpty(cmp.getValue())) {
                //        IUI.currentTD[0].innerHTML = cmp.getValue();
                //    }
                //},                    
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
        dpSourceType: Extract.EntityTypes.InterventionSets,
        dpSource: Extract.Groups.SOURCENAMES.OTHERS,
        dpName: 'Manual Info',
        dpFieldtoUpdate: "Value",
        config: {
            //fieldLabel: 'Brand',
            emptyText: 'Manual Info',
            listeners: {
                //blur: (cmp, eOpts) => {
                //    if (!Ext.isEmpty(cmp.getValue())) {
                //        IUI.currentTD[0].innerHTML = cmp.getValue();
                //    }
                //},                    
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
                    IUI.currentTD = $(cmp.el.dom).parent('td');
                    //let _caseNo = IUI.currentTD.parent('tr').attr(TrAttr.CaseNo);
                    //let _caseName = IUI.currentTD.parent('tr').attr(TrAttr.CaseName);
                    ////let _rowIdxInt = IUI.currentTD.parent('tr').attr(TrAttr.RowIndexIntervention);
                    //let _curTbl = IUI.currentTD.closest('table');
                    //let _tblId = _curTbl.attr(TblAttr.Id);
                    //let _gpId = _curTbl.attr(TblAttr.GroupId);
                    let obj = IUI.GetCurrentTableData(IUI.currentTD);

                    Ext.Msg.show({
                        title: 'Copy Data?',
                        msg: 'Do you want to copy data to next row?',
                        buttons: Ext.Msg.YESNOCANCEL,
                        icon: Ext.Msg.QUESTION,
                        fn: function (btn) {
                            if (btn == "yes") {
                                ////var srcObj = prnt.sourceObj.clone();                    
                                ////var intsets = ExtractData.Create.InterventionSet("", gp.id, srcObj, prnt.caseNo);
                                //var intsets = Extract.Helper.cloneInterventionSets(_gpId, prnt.sourceObj);
                                ////var as = Con.StudyArm.createInterventionSets(true, true, gp, intsets, false, intsets.Sources, rw, pnl);
                                ////gp.addInterventionSet(intsets);
                                //Con.StudyArm.fieldCheck(as);
                                //button.hide();
                            } else if (btn == "no") {
                                //var as = Con.StudyArm.createDefaultInterventionForCase(gp, prnt.caseNo, true);
                                ////var intsets = ExtractData.Create.InterventionSet("", gp.id, '', prnt.caseNo);
                                ////var as = new MyApp.view.MyStudyArm({ addButton: true, gp: gp, sourceObj: intsets, createDP: true, caseNo: prnt.caseNo, row: (rw + 1) });
                                ////var int = as.query("[name='phases']");
                                ////if (int.length > 0) {
                                ////    var intervention = ExtractData.Create.Intervention("", "intObj");
                                ////    var itm = new MyApp.view.MyStudyIntervention({ addButton: true, deleteButton: false, gp: gp, intsets: intsets, sourceObj: intervention, createDP: true });
                                ////    int[0].add(itm);
                                ////    var dsg = itm.query("[name='dosageOut']");
                                ////    if (dsg.length > 0) {
                                ////        var dsgItm = new MyApp.view.MyStudyArmDosage({ addDosage: true, delDosage: false, gp: gp, intsets: intsets, sourceObj: intervention, createDP: true, row: 1, createFreqDP: true });
                                ////        dsg[0].add(dsgItm);
                                ////    }
                                ////    intsets.addIntervention(intervention);
                                ////}
                                ////gp.addInterventionSet(intsets);
                                //pnl.add(as);
                                //Con.StudyArm.fieldCheck(as);
                                //button.hide();


                                let intsets = Extract.Helper.createInterventionSets('', obj[CurrentTableObject.GroupId], '', obj[CurrentTableObject.CaseNo].split(','));
                                var intervention = Extract.Helper.createInterventions(intsets.id, '', "intObj", obj[CurrentTableObject.GroupId]);

                                //if (Ext.isEmpty(_rowIdxInt)) {
                                //    _rowIdxInt = 1;
                                //} else {
                                //    _rowIdxInt = Number(_rowIdxInt) + 1;
                                //}

                                switch (obj[CurrentTableObject.CaseName]) {
                                    case Cases.CaseName.Therapy_Drug:
                                    case Cases.CaseName.Therapy_CancerIntervention:
                                    case Cases.CaseName.Therapy_Radiotherapy:
                                    case Cases.CaseName.Therapy_BiologicalVaccine:
                                    case Cases.CaseName.Therapy_LifestyleModification:
                                    case Cases.CaseName.Therapy_DietarySupplement:
                                    case Cases.CaseName.Therapy_Other:
                                        let _drg = new Drug();
                                        _drg[CurrentTableObject.GroupId] = obj[CurrentTableObject.GroupId];
                                        _drg[CurrentTableObject.TableId] = obj[CurrentTableObject.TableId];
                                        _drg[CurrentTableObject.CaseNo] = obj[CurrentTableObject.CaseNo];
                                        _drg[CurrentTableObject.CaseName] = obj[CurrentTableObject.CaseName];
                                        _drg.AddIntervention(intsets.id, intervention);
                                        break;
                                    

                                    case Cases.CaseName.Therapy_Device:
                                    case Cases.CaseName.Therapy_ProcedureSurgery:
                                        //new DeviceSurgery(_caseName).Device(_rowIdxInt);
                                        let _ds = new DeviceSurgery();
                                        _ds[CurrentTableObject.GroupId] = obj[CurrentTableObject.GroupId];
                                        _ds[CurrentTableObject.TableId] = obj[CurrentTableObject.TableId];
                                        _ds[CurrentTableObject.CaseNo] = obj[CurrentTableObject.CaseNo];
                                        _ds[CurrentTableObject.CaseName] = obj[CurrentTableObject.CaseName];
                                        _ds.AddIntervention(intsets.id, intervention);
                                        break;
                                    
                                    case Cases.CaseName.Therapy_BehavioralInformationalMaterial:
                                        //new BehavioralInformationalMaterial(_caseName).InformationalMaterial(_rowIdxInt);
                                        let _im = new BehavioralInformationalMaterial();
                                        _im[CurrentTableObject.GroupId] = obj[CurrentTableObject.GroupId];
                                        _im[CurrentTableObject.TableId] = obj[CurrentTableObject.TableId];
                                        _im[CurrentTableObject.CaseNo] = obj[CurrentTableObject.CaseNo];
                                        _im[CurrentTableObject.CaseName] = obj[CurrentTableObject.CaseName];
                                        _im.AddIntervention(intsets.id, intervention);
                                        break;

                                    case Cases.CaseName.Therapy_BehavioralSessionMeeting:
                                        //new BehavioralSessionMeeting(_caseName).SessionMeeting(_rowIdxInt);
                                        let _sm = new BehavioralSessionMeeting();
                                        _sm[CurrentTableObject.GroupId] = obj[CurrentTableObject.GroupId];
                                        _sm[CurrentTableObject.TableId] = obj[CurrentTableObject.TableId];
                                        _sm[CurrentTableObject.CaseNo] = obj[CurrentTableObject.CaseNo];
                                        _sm[CurrentTableObject.CaseName] = obj[CurrentTableObject.CaseName];
                                        _sm.AddIntervention(intsets.id, intervention);
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

                                let lstCnt = IUI.currentTD.parent('tr').parent('tbody').find(`tr[${TrAttr.TRType}=${TRType.Intervention}]`);
                                let tdDelInt = IUI.currentTD.parent('tr').find("td[config=" + ComponentList.DeleteIntervention.name + "]");

                                //if (lstCnt.length > 1 && _curTD.next().length > 0 && _curTD.next()[0].children.length > 0) {
                                //    let btnDel = Ext.getCmp(_curTD.next()[0].children[0].id);
                                //    if (btnDel) {
                                //        btnDel.show();
                                //    }
                                //}

                                if (lstCnt.length > 1 && tdDelInt.length > 0) {
                                    let btnDelInt = tdDelInt.find('a');
                                    if (btnDelInt.length > 0) {
                                        let btnDel = Ext.getCmp(btnDelInt[0].id);
                                        if (btnDel) {
                                            btnDel.show();
                                        }
                                    }
                                }
                            }
                        }
                    });
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
                        IUI.currentTD = $(cmp.el.dom).parent('td');
                        //let _curTD = $(IUI.currentTD);
                        //let _curTDRow = _curTD.parent('tr');
                        //let _caseNo = IUI.currentTD.parent('tr').attr(TrAttr.CaseNo);
                        //let _caseName = IUI.currentTD.parent('tr').attr(TrAttr.CaseName);

                        let obj = IUI.GetCurrentTableData(IUI.currentTD);

                        let intSetId = IUI.currentTD.parent('tr').attr(TrAttr.RowIndexIntervention);

                        switch (obj[CurrentTableObject.CaseName]) {
                            case Cases.CaseName.Therapy_Drug:
                            case Cases.CaseName.Therapy_CancerIntervention:
                            case Cases.CaseName.Therapy_Radiotherapy:
                            case Cases.CaseName.Therapy_BiologicalVaccine:
                            case Cases.CaseName.Therapy_LifestyleModification:
                            case Cases.CaseName.Therapy_DietarySupplement:
                            case Cases.CaseName.Therapy_Other:
                                let _drg = new Drug();
                                _drg[CurrentTableObject.GroupId] = obj[CurrentTableObject.GroupId];
                                _drg[CurrentTableObject.TableId] = obj[CurrentTableObject.TableId];
                                _drg[CurrentTableObject.CaseNo] = obj[CurrentTableObject.CaseNo];
                                _drg[CurrentTableObject.CaseName] = obj[CurrentTableObject.CaseName];
                                _drg.DeleteIntervention(intSetId);
                                break;

                            case Cases.CaseName.Therapy_Device:
                            case Cases.CaseName.Therapy_ProcedureSurgery:
                                //new DeviceSurgery(_caseName).DeleteIntervention(intSetId);
                                let _ds = new DeviceSurgery();
                                _ds[CurrentTableObject.GroupId] = obj[CurrentTableObject.GroupId];
                                _ds[CurrentTableObject.TableId] = obj[CurrentTableObject.TableId];
                                _ds[CurrentTableObject.CaseNo] = obj[CurrentTableObject.CaseNo];
                                _ds[CurrentTableObject.CaseName] = obj[CurrentTableObject.CaseName];
                                _ds.DeleteIntervention(intSetId);
                                break;
                                
                            case Cases.CaseName.Therapy_BehavioralInformationalMaterial:
                                //new BehavioralInformationalMaterial(_caseName).DeleteIntervention(intSetId);
                                let _im = new BehavioralInformationalMaterial();
                                _im[CurrentTableObject.GroupId] = obj[CurrentTableObject.GroupId];
                                _im[CurrentTableObject.TableId] = obj[CurrentTableObject.TableId];
                                _im[CurrentTableObject.CaseNo] = obj[CurrentTableObject.CaseNo];
                                _im[CurrentTableObject.CaseName] = obj[CurrentTableObject.CaseName];
                                _im.DeleteIntervention(intSetId);
                                break;    

                            case Cases.CaseName.Therapy_BehavioralSessionMeeting:
                                //new BehavioralSessionMeeting(_caseName).DeleteIntervention(intSetId);
                                let _sm = new BehavioralSessionMeeting();
                                _sm[CurrentTableObject.GroupId] = obj[CurrentTableObject.GroupId];
                                _sm[CurrentTableObject.TableId] = obj[CurrentTableObject.TableId];
                                _sm[CurrentTableObject.CaseNo] = obj[CurrentTableObject.CaseNo];
                                _sm[CurrentTableObject.CaseName] = obj[CurrentTableObject.CaseName];
                                _sm.DeleteIntervention(intSetId);
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

                        //////let _rowIdx = _curTD.parent('tr').attr(TdAttr.RowIndex);
                        ////let rwLen = $(Intervention.MainTableIdJQ()).find('tbody').find(`tr[${TrAttr.TRType}=${TRType.Intervention}]`).length;
                        ////rwLen > 1 ? cmp.show() : cmp.hide();
                        //IUI.currentTD = $(cmp.el.dom).parent('td');
                        ////let _curTD = $(IUI.currentTD);
                        ////let _curTDRow = _curTD.parent('tr');

                        let obj = IUI.GetCurrentTableData($(cmp.el.dom).parent('td'));

                        let _curTDRow = $(cmp.el.dom).parent('td').parent('tr');
                        //let _caseNo = obj[CurrentTableObject.CaseNo]; //_curTDRow.attr(TrAttr.CaseNo);
                        //let _caseName = obj[CurrentTableObject.CaseName]; //_curTDRow.attr(TrAttr.CaseName);
                        let intSetId = _curTDRow.attr(TrAttr.RowIndexIntervention);

                        switch (obj[CurrentTableObject.CaseName]) {
                            case Cases.CaseName.Therapy_Drug:
                            case Cases.CaseName.Therapy_CancerIntervention:
                            case Cases.CaseName.Therapy_Radiotherapy:
                            case Cases.CaseName.Therapy_BiologicalVaccine:
                            case Cases.CaseName.Therapy_LifestyleModification:
                            case Cases.CaseName.Therapy_DietarySupplement:
                            case Cases.CaseName.Therapy_Other:
                                let _drg = new Drug();
                                _drg[CurrentTableObject.GroupId] = obj[CurrentTableObject.GroupId];
                                _drg[CurrentTableObject.TableId] = obj[CurrentTableObject.TableId];
                                _drg[CurrentTableObject.CaseNo] = obj[CurrentTableObject.CaseNo];
                                _drg[CurrentTableObject.CaseName] = obj[CurrentTableObject.CaseName];
                                _drg.DeleteInterventionButtonAfterRender(cmp, intSetId);
                                break;

                            case Cases.CaseName.Therapy_Device:
                            case Cases.CaseName.Therapy_ProcedureSurgery:
                                //new DeviceSurgery(_caseName).DeleteInterventionButtonAfterRender(cmp, intSetId);
                                let _ds = new DeviceSurgery();
                                _ds[CurrentTableObject.GroupId] = obj[CurrentTableObject.GroupId];
                                _ds[CurrentTableObject.TableId] = obj[CurrentTableObject.TableId];
                                _ds[CurrentTableObject.CaseNo] = obj[CurrentTableObject.CaseNo];
                                _ds[CurrentTableObject.CaseName] = obj[CurrentTableObject.CaseName];
                                _ds.DeleteInterventionButtonAfterRender(cmp, intSetId);
                                break;

                            case Cases.CaseName.Therapy_BehavioralInformationalMaterial:
                                //new BehavioralInformationalMaterial(_caseName).DeleteInterventionButtonAfterRender(cmp, intSetId);
                                let _im = new BehavioralInformationalMaterial();
                                _im[CurrentTableObject.GroupId] = obj[CurrentTableObject.GroupId];
                                _im[CurrentTableObject.TableId] = obj[CurrentTableObject.TableId];
                                _im[CurrentTableObject.CaseNo] = obj[CurrentTableObject.CaseNo];
                                _im[CurrentTableObject.CaseName] = obj[CurrentTableObject.CaseName];
                                _im.DeleteInterventionButtonAfterRender(cmp, intSetId);
                                break;

                            case Cases.CaseName.Therapy_BehavioralSessionMeeting:
                                //new BehavioralSessionMeeting(_caseName).DeleteInterventionButtonAfterRender(cmp, intSetId);
                                let _sm = new BehavioralSessionMeeting();
                                _sm[CurrentTableObject.GroupId] = obj[CurrentTableObject.GroupId];
                                _sm[CurrentTableObject.TableId] = obj[CurrentTableObject.TableId];
                                _sm[CurrentTableObject.CaseNo] = obj[CurrentTableObject.CaseNo];
                                _sm[CurrentTableObject.CaseName] = obj[CurrentTableObject.CaseName];
                                _sm.DeleteInterventionButtonAfterRender(cmp, intSetId);
                                break;

                            default:
                        }
                    },
                    delay: 50
                }
            }
        }
    },
    //Intervention: {
    //    //GroupName: {
    //    //    dpName: "GroupName",
    //    //    columnIndex: 1
    //    //},
    //    //AddInfo: {
    //    //    dpName: "AddInfo",
    //    //    columnIndex: 2
    //    //},

    //},

    FixedDoseIntervention: {
        type: 'FixedDose',
        compType: ComponentType.ExtractText,
        name: "FixedDoseIntervention",
        cssClass: "tdCls",
        columnIndex: ColumnIdx++,
        dpValue: "Intervention A1",
        cellText: "Intervention A1",
        dpSourceType: Extract.EntityTypes.InterventionSets,
        dpSource: Extract.Groups.SOURCENAMES.FIXED_DOSE_COMBINATION,
        dpName: 'Fixed Dose Intervention',
        dpFieldtoUpdate: "Value",
        config: {
            emptyText: 'Fixed Dose Intervention',
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
        dpSourceType: Extract.EntityTypes.InterventionSets,
        dpSource: Extract.Groups.SOURCENAMES.FIXED_DOSE_COMBINATION,
        dpName: 'Fixed Dose Concentration',
        dpFieldtoUpdate: "Value",
        config: {
            emptyText: 'Fixed Dose Concentration',
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
        dpSourceType: Extract.EntityTypes.InterventionSets,
        dpSource: Extract.Groups.SOURCENAMES.FIXED_DOSE_COMBINATION,
        dpName: 'Fixed Dose Unit',
        dpFieldtoUpdate: "Value",
        config: {
            emptyText: 'Fixed Dose Unit',
            store: ["%", "% total", "Adjusted", "Cells", "CFU", "Days", "Gy", "Gy per fraction", "Hours", "IR", "IR/mL", "IU", "IU/day", "IU/kg", "IU/week", "L/day", "M IRU", "MIU", "MIU/m^2", "Megavoltage", "NA", "Not Reported", "PFU", "SQ-U", "SQ-U/mL", "STU", "STU/mL", "TU", "TU/mL", "U", "U/kg", "U/kg/day", "U/mL", "g", "g/day", "g/kg", "g/m^2", "mCi/kg", "mEq", "mEq/L", "mL/lbs", "mg", "mg/2 ml", "mg/2weeks", "mg/dL", "mg/day", "mg/g", "mg/hr", "mg/kg", "mg/kg/day", "mg/kg/hr", "mg/kg/wk", "mg/m^2", "mg/m^2/day", "mg/m^2/week", "mg/min", "mg/ml", "mg/ml/min", "mg/week", "ml", "ml/h", "ml/kg", "mmol", "mmol/L", "mmol/day", "ng/kg/min", "ng/min", "nmol", "nmol/mL", "pmol/kg/min", "ppm", "ratio", "spores", "x 10^5 IU/m^2", "x 10^9 CFU", "µg", "µg/L", "µg/day", "µg/g", "µg/kg", "µg/kg/min", "µg/kg/week", "µg/mL", "µg/week", "µmol/L", "μg/m^2"],
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
                        IUI.currentTD = $(cmp.el.dom).parent('td');
                        ////let _curTD = $(IUI.currentTD);
                        ////let _curTDRow = _curTD.parent('tr');
                        //let _caseNo = IUI.currentTD.parent('tr').attr(TrAttr.CaseNo);
                        //let _caseName = IUI.currentTD.parent('tr').attr(TrAttr.CaseName);
                        ////let _curTbl = IUI.currentTD.closest('table');
                        ////let _tblId = _curTbl.attr(TblAttr.Id);
                        ////let _gpId = _curTbl.attr(TblAttr.GroupId);

                        let obj = IUI.GetCurrentTableData(IUI.currentTD);

                        let intSetId = IUI.currentTD.parent('tr').attr(TrAttr.RowIndexIntervention);
                        let _rowIdxFd = IUI.currentTD.parent('tr').attr(TrAttr.RowIndexFixedDose);
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

                        if (obj[CurrentTableObject.CaseName] == Cases.CaseName.Therapy_Drug || obj[CurrentTableObject.CaseName] == Cases.CaseName.Therapy_CancerIntervention) {
                            //new Drug().AddFixedDose(_caseName, intSetId, _rowIdxFd);
                            let _drg = new Drug();
                            _drg[CurrentTableObject.GroupId] = obj[CurrentTableObject.GroupId];
                            _drg[CurrentTableObject.TableId] = obj[CurrentTableObject.TableId];
                            _drg[CurrentTableObject.CaseNo] = obj[CurrentTableObject.CaseNo];
                            _drg[CurrentTableObject.CaseName] = obj[CurrentTableObject.CaseName];
                            _drg.AddFixedDose(intSetId, _rowIdxFd);
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
                            IUI.currentTD = $(cmp.el.dom).parent('td');
                            ////let _curTD = $(IUI.currentTD);
                            ////let _curTDRow = _curTD.parent('tr');
                            //let _caseNo = IUI.currentTD.parent('tr').attr(TrAttr.CaseNo);
                            //let _caseName = IUI.currentTD.parent('tr').attr(TrAttr.CaseName);
                            let obj = IUI.GetCurrentTableData(IUI.currentTD);

                            let intSetId = IUI.currentTD.parent('tr').attr(TrAttr.RowIndexIntervention);
                            let _rowIdxFd = IUI.currentTD.parent('tr').attr(TrAttr.RowIndexFixedDose);

                            if (obj[CurrentTableObject.CaseName] == Cases.CaseName.Therapy_Drug || obj[CurrentTableObject.CaseName] == Cases.CaseName.Therapy_CancerIntervention) {
                                let _drg = new Drug();
                                _drg[CurrentTableObject.GroupId] = obj[CurrentTableObject.GroupId];
                                _drg[CurrentTableObject.TableId] = obj[CurrentTableObject.TableId];
                                _drg[CurrentTableObject.CaseNo] = obj[CurrentTableObject.CaseNo];
                                _drg[CurrentTableObject.CaseName] = obj[CurrentTableObject.CaseName];
                                _drg.DeleteFixedDose(intSetId, _rowIdxFd);
                            }




                        }).catch(() => {
                            //console.log("Promise Rejected");
                        });
                    }
                },
                afterrender: {
                    fn: (cmp, eOpts) => {
                        ////IUI.currentTD = $(cmp.el.dom).parent('td');
                        ////let _curTD = $(IUI.currentTD);
                        ////let _curTDRow = _curTD.parent('tr');
                        //let _curTDRow = $(cmp.el.dom).parent('td').parent('tr');
                        //let _caseNo = _curTDRow.attr(TrAttr.CaseNo);
                        //let _caseName = _curTDRow.attr(TrAttr.CaseName);

                        let obj = IUI.GetCurrentTableData($(cmp.el.dom).parent('td'));

                        let _curTDRow = $(cmp.el.dom).parent('td').parent('tr');
                        let intSetId = _curTDRow.attr(TrAttr.RowIndexIntervention);
                        let _rowIdxFd = _curTDRow.attr(TrAttr.RowIndexFixedDose);

                        if (obj[CurrentTableObject.CaseName] == Cases.CaseName.Therapy_Drug || obj[CurrentTableObject.CaseName] == Cases.CaseName.Therapy_CancerIntervention) {
                            //new Drug(_caseName).DeleteFixedDoseButtonAfterRender(cmp, intSetId);
                            let _drg = new Drug();
                            _drg[CurrentTableObject.GroupId] = obj[CurrentTableObject.GroupId];
                            _drg[CurrentTableObject.TableId] = obj[CurrentTableObject.TableId];
                            _drg[CurrentTableObject.CaseNo] = obj[CurrentTableObject.CaseNo];
                            _drg[CurrentTableObject.CaseName] = obj[CurrentTableObject.CaseName];
                            _drg.DeleteFixedDoseButtonAfterRender(cmp, intSetId);                            
                        }

                        ////let _rowIdx = _curTD.parent('tr').attr(TdAttr.RowIndex);
                        //let rwLen = $(Intervention.MainTableIdJQ()).find('tbody').find(`tr[${TrAttr.TRType}=${TRType.FixedDose}]tr[${TrAttr.RowIndexIntervention}=${_rowIdxInt}]`).length;
                        //rwLen > 2 ? cmp.show() : cmp.hide();
                    },
                    delay: 50
                }
            }
        }
    },

    //FixedDose: {

    //},

    StudyPhase: {
        type: 'Phase',
        compType: ComponentType.ExtractDropdown,
        name: "StudyPhase",
        cssClass: "tdCls",
        columnIndex: ColumnIdx++,
        dpValue: "Treatment Period",
        cellText: "Treatment Period",
        dpSourceType: Extract.EntityTypes.Interventions,
        dpSource: "", // Intervention level - phaseId update           
        dpName: 'Study Phase',
        dpFieldtoUpdate: "phaseid",
        config: {
            //valueField: 'id',
            //displayField: 'val',
            //emptyText: '(None)',
            //fieldLabel: 'Study Phase',
            //tpl: '<tpl for="."><div class="x-boundlist-item cmbtplborder">{val} </div></tpl>',
            //displayTpl: '<tpl for=".">{val}</tpl>',                
            store: ['Treatment Period', 'Follow-up Period'],
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
        dpSourceType: Extract.EntityTypes.Interventions,
        dpSource: Extract.Groups.SOURCENAMES.OTHERS,
        dpName: 'Schedule',
        dpFieldtoUpdate: "Value",
        config: {
            //fieldLabel: 'Schedule',               
            store: ["Afternoon", "Bedtime", "Breakfast", /*"Daily",*/ "Daytime", "Dinner", "Evening", "Intraoperative", "Lunch", "Morning", "Peri-op", "Post-Breakfast", "Post-Diagnostic", "Post-Dinner", "Post-Lunch", "Post-Prandial", "Prandial", "Pre-Breakfast", "Pre-Diagnostic", "Pre-Dinner", "Pre-Lunch", "Pre-Prandial", "Pre/Post-op"],
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
        dpSourceType: Extract.EntityTypes.Interventions,
        dpSource: Extract.Groups.SOURCENAMES.OTHERS,
        dpName: 'Route',
        dpFieldtoUpdate: "Value",
        config: {
            //fieldLabel: 'Route',
            store: ["Dry powder inhaler", "Epidural Injection", "Extraocular", "Group Therapy", "HAI", "I.V.", "Implant", "Individual Therapy", "Inhalent", "Injection", "Instilled into Eye", "Intramuscular", "Intranasal", "Intraperitoneal", "Intrathecal", "Intravesicular", "Intravitreal Injection", "Iontophoretic", "Laparoscopic Surgery", "Metered Dose Inhaler + Spacer", "Metered dose inhaler", "Open Surgery", "Oral", "Soft mist inhaler", "Sub-Tenon Injection", "SubQ", "SubQ (Pen)", "SubQ (Vial)", "Suppository", "Topical", "Transdermal"],
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
        dpSourceType: Extract.EntityTypes.Interventions,
        dpSource: Extract.Groups.SOURCENAMES.OTHERS,
        dpName: 'Provider',
        dpFieldtoUpdate: "Value",
        config: {
            //fieldLabel: 'Provider',
            store: ["Allied Health Care Provider", "Care Provider", "Clinician", "Doctor", "Doctoral Student", "Foster Parent", "General Practitioner", "Graduate Student", "Multiple Individuals", "N/A", "NR", "Nurse", "Paid Caregiver", "Pharmacist", "Psychiatrist", "Psychologist", "Self", "Teacher", "Team", "Therapist", "Unpaid Caregiver"],
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
        dpSourceType: Extract.EntityTypes.Interventions,
        dpSource: Extract.Groups.SOURCENAMES.OTHERS,
        dpName: 'Line of Cancer',
        dpFieldtoUpdate: "Value",
        config: {
            store: ["First", "Maintenance", "Mixed", "Other", "Second", "Third", "Unknown"],
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
        dpSourceType: Extract.EntityTypes.Interventions,
        dpSource: Extract.Groups.SOURCENAMES.OTHERS,
        dpName: 'Stage / Setting',
        dpFieldtoUpdate: "Value",
        config: {
            store: ['Adjuvant', 'Neo-Adjuvant'],
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
        dpSourceType: Extract.EntityTypes.Interventions,
        dpSource: Extract.Groups.SOURCENAMES.MISC,
        dpName: 'Misc',
        dpFieldtoUpdate: "Name",
        config: {
            //fieldLabel: 'Name',
            emptyText: 'Name',
            listeners: {
                //blur: (cmp, eOpts) => {
                //    if (!Ext.isEmpty(cmp.getValue())) {
                //        IUI.currentTD[0].innerHTML = cmp.getValue();
                //    }
                //},                    
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
        dpSourceType: Extract.EntityTypes.Interventions,
        dpSource: Extract.Groups.SOURCENAMES.MISC,
        dpName: 'Misc',
        dpFieldtoUpdate: "Value",
        config: {
            //fieldLabel: 'Description',
            emptyText: 'Description',
            listeners: {
                //blur: (cmp, eOpts) => {
                //    if (!Ext.isEmpty(cmp.getValue())) {
                //        IUI.currentTD[0].innerHTML = cmp.getValue();
                //    }
                //},                    
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
                    IUI.currentTD = $(cmp.el.dom).parent('td');
                    ////let _curTD = $(IUI.currentTD);
                    ////let _curTDRow = _curTD.parent('tr');
                    //let _caseNo = IUI.currentTD.parent('tr').attr(TrAttr.CaseNo);
                    //let _caseName = IUI.currentTD.parent('tr').attr(TrAttr.CaseName);
                    //let _curTbl = IUI.currentTD.closest('table');
                    //let _tblId = _curTbl.attr(TblAttr.Id);
                    //let _gpId = _curTbl.attr(TblAttr.GroupId);

                    let obj = IUI.GetCurrentTableData(IUI.currentTD);

                    let intSetId = IUI.currentTD.parent('tr').attr(TrAttr.RowIndexIntervention);
                    let intId = IUI.currentTD.parent('tr').attr(TrAttr.RowIndexPhase);
                    //if (Ext.isEmpty(_rowIdxPhs)) {
                    //    _rowIdxPhs = 1;
                    //} else {
                    //    _rowIdxPhs = Number(_rowIdxPhs);
                    //}

                    let _rowIdxMis = IUI.currentTD.parent('tr').attr(TrAttr.RowIndexMisc);
                    if (Ext.isEmpty(_rowIdxMis)) {
                        _rowIdxMis = 1;
                    } else {
                        _rowIdxMis = Number(_rowIdxMis) + 1;
                    }

                    switch (obj[CurrentTableObject.CaseName]) {
                        case Cases.CaseName.Therapy_Drug:
                        case Cases.CaseName.Therapy_CancerIntervention:
                        case Cases.CaseName.Therapy_Radiotherapy:
                        case Cases.CaseName.Therapy_BiologicalVaccine:
                        case Cases.CaseName.Therapy_LifestyleModification:
                        case Cases.CaseName.Therapy_DietarySupplement:
                        case Cases.CaseName.Therapy_Other:
                            //new Drug(_caseName).AddMisc(_rowIdxInt, _rowIdxPhs, _rowIdxMis);
                            let _drg = new Drug();
                            _drg[CurrentTableObject.GroupId] = obj[CurrentTableObject.GroupId];
                            _drg[CurrentTableObject.TableId] = obj[CurrentTableObject.TableId];
                            _drg[CurrentTableObject.CaseNo] = obj[CurrentTableObject.CaseNo];
                            _drg[CurrentTableObject.CaseName] = obj[CurrentTableObject.CaseName];
                            _drg.AddMisc(intSetId, intId, _rowIdxMis);
                            break;

                        case Cases.CaseName.Therapy_Device:
                        case Cases.CaseName.Therapy_ProcedureSurgery:
                            //new DeviceSurgery(_caseName).AddMisc(_rowIdxInt, _rowIdxPhs, _rowIdxMis);
                            let _ds = new DeviceSurgery();
                            _ds[CurrentTableObject.GroupId] = obj[CurrentTableObject.GroupId];
                            _ds[CurrentTableObject.TableId] = obj[CurrentTableObject.TableId];
                            _ds[CurrentTableObject.CaseNo] = obj[CurrentTableObject.CaseNo];
                            _ds[CurrentTableObject.CaseName] = obj[CurrentTableObject.CaseName];
                            _ds.AddMisc(intSetId, intId, _rowIdxMis);
                            break;

                        case Cases.CaseName.Therapy_BehavioralInformationalMaterial:
                            //new BehavioralInformationalMaterial(_caseName).AddMisc(_rowIdxInt, _rowIdxPhs, _rowIdxMis);
                            let _im = new BehavioralInformationalMaterial();
                            _im[CurrentTableObject.GroupId] = obj[CurrentTableObject.GroupId];
                            _im[CurrentTableObject.TableId] = obj[CurrentTableObject.TableId];
                            _im[CurrentTableObject.CaseNo] = obj[CurrentTableObject.CaseNo];
                            _im[CurrentTableObject.CaseName] = obj[CurrentTableObject.CaseName];
                            _im.AddMisc(intSetId, intId, _rowIdxMis);
                            break;

                        case Cases.CaseName.Therapy_BehavioralSessionMeeting:
                            //new BehavioralSessionMeeting(_caseName).AddMisc(_rowIdxInt, _rowIdxPhs, _rowIdxMis);
                            let _sm = new BehavioralSessionMeeting();
                            _sm[CurrentTableObject.GroupId] = obj[CurrentTableObject.GroupId];
                            _sm[CurrentTableObject.TableId] = obj[CurrentTableObject.TableId];
                            _sm[CurrentTableObject.CaseNo] = obj[CurrentTableObject.CaseNo];
                            _sm[CurrentTableObject.CaseName] = obj[CurrentTableObject.CaseName];
                            _sm.AddMisc(intSetId, intId, _rowIdxMis);
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
                        IUI.currentTD = $(cmp.el.dom).parent('td');
                        ////let _curTD = $(IUI.currentTD);
                        ////let _curTDRow = _curTD.parent('tr');
                        //let _caseNo = IUI.currentTD.parent('tr').attr(TrAttr.CaseNo);
                        //let _caseName = IUI.currentTD.parent('tr').attr(TrAttr.CaseName);

                        let obj = IUI.GetCurrentTableData(IUI.currentTD);

                        let intSetId = IUI.currentTD.parent('tr').attr(TrAttr.RowIndexIntervention);
                        let intId = IUI.currentTD.parent('tr').attr(TrAttr.RowIndexPhase);
                        let _rowIdxMis = IUI.currentTD.parent('tr').attr(TrAttr.RowIndexMisc);

                        switch (obj[CurrentTableObject.CaseName]) {
                            case Cases.CaseName.Therapy_Drug:
                            case Cases.CaseName.Therapy_CancerIntervention:
                            case Cases.CaseName.Therapy_Radiotherapy:
                            case Cases.CaseName.Therapy_BiologicalVaccine:
                            case Cases.CaseName.Therapy_LifestyleModification:
                            case Cases.CaseName.Therapy_DietarySupplement:
                            case Cases.CaseName.Therapy_Other:
                                //new Drug(_caseName).DeleteMisc(intSetId, intId);
                                let _drg = new Drug();
                                _drg[CurrentTableObject.GroupId] = obj[CurrentTableObject.GroupId];
                                _drg[CurrentTableObject.TableId] = obj[CurrentTableObject.TableId];
                                _drg[CurrentTableObject.CaseNo] = obj[CurrentTableObject.CaseNo];
                                _drg[CurrentTableObject.CaseName] = obj[CurrentTableObject.CaseName];
                                _drg.DeleteMisc(intSetId, intId);
                                break;

                            case Cases.CaseName.Therapy_Device:
                            case Cases.CaseName.Therapy_ProcedureSurgery:
                                //new DeviceSurgery(_caseName).DeleteMisc(intSetId, intId);
                                let _ds = new DeviceSurgery();
                                _ds[CurrentTableObject.GroupId] = obj[CurrentTableObject.GroupId];
                                _ds[CurrentTableObject.TableId] = obj[CurrentTableObject.TableId];
                                _ds[CurrentTableObject.CaseNo] = obj[CurrentTableObject.CaseNo];
                                _ds[CurrentTableObject.CaseName] = obj[CurrentTableObject.CaseName];
                                _ds.DeleteMisc(intSetId, intId);
                                break;

                            case Cases.CaseName.Therapy_BehavioralInformationalMaterial:
                                //new BehavioralInformationalMaterial(_caseName).DeleteMisc(intSetId, intId);
                                let _im = new BehavioralInformationalMaterial();
                                _im[CurrentTableObject.GroupId] = obj[CurrentTableObject.GroupId];
                                _im[CurrentTableObject.TableId] = obj[CurrentTableObject.TableId];
                                _im[CurrentTableObject.CaseNo] = obj[CurrentTableObject.CaseNo];
                                _im[CurrentTableObject.CaseName] = obj[CurrentTableObject.CaseName];
                                _im.DeleteMisc(intSetId, intId);
                                break;

                            case Cases.CaseName.Therapy_BehavioralSessionMeeting:
                                //new BehavioralSessionMeeting(_caseName).DeleteMisc(intSetId, intId);
                                let _sm = new BehavioralSessionMeeting();
                                _sm[CurrentTableObject.GroupId] = obj[CurrentTableObject.GroupId];
                                _sm[CurrentTableObject.TableId] = obj[CurrentTableObject.TableId];
                                _sm[CurrentTableObject.CaseNo] = obj[CurrentTableObject.CaseNo];
                                _sm[CurrentTableObject.CaseName] = obj[CurrentTableObject.CaseName];
                                _sm.DeleteMisc(intSetId, intId);
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
                        //IUI.currentTD = $(cmp.el.dom).parent('td');
                        //let _curTD = $(IUI.currentTD);
                        //let _curTDRow = _curTD.parent('tr');
                        
                        let obj = IUI.GetCurrentTableData($(cmp.el.dom).parent('td'));
                        //let _caseNo = _curTDRow.attr(TrAttr.CaseNo);
                        //let _caseName = _curTDRow.attr(TrAttr.CaseName);

                        let _curTDRow = $(cmp.el.dom).parent('td').parent('tr');
                        let intSetId = _curTDRow.attr(TrAttr.RowIndexIntervention);
                        let intId = _curTDRow.attr(TrAttr.RowIndexPhase);
                        let _rowIdxMis = _curTDRow.attr(TrAttr.RowIndexMisc);

                        switch (obj[CurrentTableObject.CaseName]) {
                            case Cases.CaseName.Therapy_Drug:
                            case Cases.CaseName.Therapy_CancerIntervention:
                            case Cases.CaseName.Therapy_Radiotherapy:
                            case Cases.CaseName.Therapy_BiologicalVaccine:
                            case Cases.CaseName.Therapy_LifestyleModification:
                            case Cases.CaseName.Therapy_DietarySupplement:
                            case Cases.CaseName.Therapy_Other:
                                let _drg = new Drug();
                                _drg[CurrentTableObject.GroupId] = obj[CurrentTableObject.GroupId];
                                _drg[CurrentTableObject.TableId] = obj[CurrentTableObject.TableId];
                                _drg[CurrentTableObject.CaseNo] = obj[CurrentTableObject.CaseNo];
                                _drg[CurrentTableObject.CaseName] = obj[CurrentTableObject.CaseName];
                                _drg.DeleteFixedDoseButtonAfterRender(cmp, intSetId);         
                                _drg.DeleteMiscButtonAfterRender(cmp, intSetId, intId, _rowIdxMis);
                                break;

                            case Cases.CaseName.Therapy_Device:
                            case Cases.CaseName.Therapy_ProcedureSurgery:
                                //new DeviceSurgery(_caseName).DeleteMiscButtonAfterRender(cmp, intSetId, intId, _rowIdxMis);
                                let _ds = new DeviceSurgery();
                                _ds[CurrentTableObject.GroupId] = obj[CurrentTableObject.GroupId];
                                _ds[CurrentTableObject.TableId] = obj[CurrentTableObject.TableId];
                                _ds[CurrentTableObject.CaseNo] = obj[CurrentTableObject.CaseNo];
                                _ds[CurrentTableObject.CaseName] = obj[CurrentTableObject.CaseName];
                                _ds.DeleteMiscButtonAfterRender(cmp, intSetId, intId, _rowIdxMis);
                                break;

                            case Cases.CaseName.Therapy_BehavioralInformationalMaterial:
                                //new BehavioralInformationalMaterial(_caseName).DeleteMiscButtonAfterRender(cmp, intSetId, intId, _rowIdxMis);
                                let _im = new BehavioralInformationalMaterial();
                                _im[CurrentTableObject.GroupId] = obj[CurrentTableObject.GroupId];
                                _im[CurrentTableObject.TableId] = obj[CurrentTableObject.TableId];
                                _im[CurrentTableObject.CaseNo] = obj[CurrentTableObject.CaseNo];
                                _im[CurrentTableObject.CaseName] = obj[CurrentTableObject.CaseName];
                                _im.DeleteMiscButtonAfterRender(cmp, intSetId, intId, _rowIdxMis);
                                break;

                            case Cases.CaseName.Therapy_BehavioralSessionMeeting:
                                //new BehavioralSessionMeeting(_caseName).DeleteMiscButtonAfterRender(cmp, intSetId, intId, _rowIdxMis);
                                let _sm = new BehavioralSessionMeeting();
                                _sm[CurrentTableObject.GroupId] = obj[CurrentTableObject.GroupId];
                                _sm[CurrentTableObject.TableId] = obj[CurrentTableObject.TableId];
                                _sm[CurrentTableObject.CaseNo] = obj[CurrentTableObject.CaseNo];
                                _sm[CurrentTableObject.CaseName] = obj[CurrentTableObject.CaseName];
                                _sm.DeleteMiscButtonAfterRender(cmp, intSetId, intId, _rowIdxMis);
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
        dpSourceType: Extract.EntityTypes.Interventions,
        dpSource: Extract.Groups.SOURCENAMES.OTHERS,
        dpName: 'Required Drugs',
        dpFieldtoUpdate: "Value",
        config: {
            //fieldLabel: 'Name',
            emptyText: 'Required Drugs',
            listeners: {
                //blur: (cmp, eOpts) => {
                //    if (!Ext.isEmpty(cmp.getValue())) {
                //        IUI.currentTD[0].innerHTML = cmp.getValue();
                //    }
                //},                    
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
        dpSourceType: Extract.EntityTypes.Interventions,
        dpSource: Extract.Groups.SOURCENAMES.OTHERS,
        dpName: 'Technique',
        dpFieldtoUpdate: "Value",
        config: {
            //fieldLabel: 'Name',
            emptyText: 'Technique',
            listeners: {
                //blur: (cmp, eOpts) => {
                //    if (!Ext.isEmpty(cmp.getValue())) {
                //        IUI.currentTD[0].innerHTML = cmp.getValue();
                //    }
                //},                    
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
        dpSourceType: Extract.EntityTypes.Interventions,
        dpSource: Extract.Groups.SOURCENAMES.OTHERS,
        dpName: 'Notes',
        dpFieldtoUpdate: "Value",
        config: {
            //fieldLabel: 'Name',
            emptyText: 'Notes',
            listeners: {
                //blur: (cmp, eOpts) => {
                //    if (!Ext.isEmpty(cmp.getValue())) {
                //        IUI.currentTD[0].innerHTML = cmp.getValue();
                //    }
                //},                    
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
        dpSourceType: Extract.EntityTypes.Interventions,
        dpSource: Extract.Groups.SOURCENAMES.OTHERS,
        dpName: 'Surgeon\'s Expertise Level',
        dpFieldtoUpdate: "Value",
        config: {
            //fieldLabel: 'Name',
            emptyText: 'Surgeon\'s Expertise Level',
            listeners: {
                //blur: (cmp, eOpts) => {
                //    if (!Ext.isEmpty(cmp.getValue())) {
                //        IUI.currentTD[0].innerHTML = cmp.getValue();
                //    }
                //},                    
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
        dpSourceType: Extract.EntityTypes.Interventions,
        dpSource: Extract.Groups.SOURCENAMES.OTHERS,
        dpName: 'Route of Entry',
        dpFieldtoUpdate: "Value",
        config: {
            //fieldLabel: 'Name',
            emptyText: 'Route of Entry',
            listeners: {
                //blur: (cmp, eOpts) => {
                //    if (!Ext.isEmpty(cmp.getValue())) {
                //        IUI.currentTD[0].innerHTML = cmp.getValue();
                //    }
                //},                    
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
        dpSourceType: Extract.EntityTypes.Interventions,
        dpSource: Extract.Groups.SOURCENAMES.OTHERS,
        dpName: 'Anesthesia',
        dpFieldtoUpdate: "Value",
        config: {
            //fieldLabel: 'Name',
            emptyText: 'Anesthesia',
            store: ["Epidural", "General", "Local", "Regional", "Spinal"],
            listeners: {
                //blur: (cmp, eOpts) => {
                //    if (!Ext.isEmpty(cmp.getValue())) {
                //        IUI.currentTD[0].innerHTML = cmp.getValue();
                //    }
                //},                    
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
        dpSourceType: Extract.EntityTypes.Interventions,
        dpSource: Extract.Groups.SOURCENAMES.OTHERS,
        dpName: 'Anesthesia Dosage',
        dpFieldtoUpdate: "Value",
        config: {
            //fieldLabel: 'Name',
            emptyText: 'Anesthesia Dosage',
            listeners: {
                //blur: (cmp, eOpts) => {
                //    if (!Ext.isEmpty(cmp.getValue())) {
                //        IUI.currentTD[0].innerHTML = cmp.getValue();
                //    }
                //},                    
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
        dpSourceType: Extract.EntityTypes.Interventions,
        dpSource: Extract.Groups.SOURCENAMES.OTHERS,
        dpName: 'Anesthesia Dosage Unit',
        dpFieldtoUpdate: "Value",
        config: {
            //fieldLabel: 'Name',
            emptyText: 'Units',
            store: ["%", "% total", "Adjusted", "Days", "Hours", "IU", "IU/kg", "L/day", "M IRU", "MIU", "MIU/m^2", "U", "U/kg", "U/mL", "g", "g/day", "g/kg", "mCi/kg", "mEq", "mEq/L",
                "mL/lbs", "mg", "mg/2weeks", "mg/dL", "mg/day", "mg/hr", "mg/kg", "mg/kg/day", "mg/kg/hr", "mg/m^2", "mg/m^2/day", "mg/m^2/week", "mg/min", "mg/ml", "mg/ml/min",
                "mg/week", "ml", "ml/h", "ml/kg", "mmol", "mmol/L", "mmol/day", "ng/kg/min", "nmol/mL", "ppm", "ratio", "µg", "µg/L", "µg/day", "µg/g", "µg/kg", "µg/kg/min",
                "µg/kg/week", "µg/mL", "µg/week", "µmol/L"],
            listeners: {
                //blur: (cmp, eOpts) => {
                //    if (!Ext.isEmpty(cmp.getValue())) {
                //        IUI.currentTD[0].innerHTML = cmp.getValue();
                //    }
                //},                   
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
                        IUI.currentTD = $(cmp.el.dom).parent('td');

                        ////let _curTD = $(IUI.currentTD);
                        ////let _curTDRow = _curTD.parent('tr');
                        //let _caseNo = IUI.currentTD.parent('tr').attr(TrAttr.CaseNo);
                        //let _caseName = IUI.currentTD.parent('tr').attr(TrAttr.CaseName);
                        //let _curTbl = IUI.currentTD.closest('table');
                        //let _tblId = _curTbl.attr(TblAttr.Id);
                        //let _gpId = _curTbl.attr(TblAttr.GroupId);

                        let obj = IUI.GetCurrentTableData(IUI.currentTD);

                        let intSetId = IUI.currentTD.parent('tr').attr(TrAttr.RowIndexIntervention);
                        //let _rowIdxPhs = IUI.currentTD.parent('tr').attr(TrAttr.RowIndexPhase);
                        //if (Ext.isEmpty(_rowIdxPhs)) {
                        //    _rowIdxPhs = 1;
                        //} else {
                        //    _rowIdxPhs = Number(_rowIdxPhs) + 1;
                        //}

                        Ext.Msg.show({
                            title: 'Copy Data?',
                            msg: 'Do you want to copy data to next row?',
                            buttons: Ext.Msg.YESNOCANCEL,
                            icon: Ext.Msg.QUESTION,
                            fn: function (btn) {
                                if (btn == "yes") {

                                } else if (btn == "no") {

                                    let int = Extract.Helper.createInterventions(intSetId, '', "intObj", obj[CurrentTableObject.GroupId]);

                                    //let objI = new Intervention();
                                    //let row = objI.CreatePhaseTR(_rowIdxInt, _rowIdxPhs);
                                    switch (obj[CurrentTableObject.CaseName]) {
                                        case Cases.CaseName.Therapy_Drug:
                                        case Cases.CaseName.Therapy_CancerIntervention:
                                        case Cases.CaseName.Therapy_Radiotherapy:
                                        case Cases.CaseName.Therapy_BiologicalVaccine:
                                        case Cases.CaseName.Therapy_LifestyleModification:
                                        case Cases.CaseName.Therapy_DietarySupplement:
                                        case Cases.CaseName.Therapy_Other:
                                            //new Drug().AddPhase(_tblId, intSetId, int, _caseName);
                                            let _drg = new Drug();
                                            _drg[CurrentTableObject.GroupId] = obj[CurrentTableObject.GroupId];
                                            _drg[CurrentTableObject.TableId] = obj[CurrentTableObject.TableId];
                                            _drg[CurrentTableObject.CaseNo] = obj[CurrentTableObject.CaseNo];
                                            _drg[CurrentTableObject.CaseName] = obj[CurrentTableObject.CaseName];
                                            _drg.AddPhase(intSetId, int);
                                            break;

                                        case Cases.CaseName.Therapy_Device:
                                        case Cases.CaseName.Therapy_ProcedureSurgery:
                                            //new DeviceSurgery(_caseName).AddPhase(intSetId, _rowIdxPhs);
                                            let _ds = new DeviceSurgery();
                                            _ds[CurrentTableObject.GroupId] = obj[CurrentTableObject.GroupId];
                                            _ds[CurrentTableObject.TableId] = obj[CurrentTableObject.TableId];
                                            _ds[CurrentTableObject.CaseNo] = obj[CurrentTableObject.CaseNo];
                                            _ds[CurrentTableObject.CaseName] = obj[CurrentTableObject.CaseName];
                                            _ds.AddPhase(intSetId, int);
                                            break;

                                        case Cases.CaseName.Therapy_BehavioralSessionMeeting:
                                            //new BehavioralSessionMeeting(_caseName).AddPhase(intSetId, _rowIdxPhs);
                                            let _sm = new BehavioralSessionMeeting();
                                            _sm[CurrentTableObject.GroupId] = obj[CurrentTableObject.GroupId];
                                            _sm[CurrentTableObject.TableId] = obj[CurrentTableObject.TableId];
                                            _sm[CurrentTableObject.CaseNo] = obj[CurrentTableObject.CaseNo];
                                            _sm[CurrentTableObject.CaseName] = obj[CurrentTableObject.CaseName];
                                            _sm.AddPhase(intSetId, int);
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
                                }
                            }
                        });
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
                        IUI.currentTD = $(cmp.el.dom).parent('td');
                        ////let _curTD = $(IUI.currentTD);
                        ////let _curTDRow = _curTD.parent('tr');
                        //let _caseNo = IUI.currentTD.parent('tr').attr(TrAttr.CaseNo);
                        //let _caseName = IUI.currentTD.parent('tr').attr(TrAttr.CaseName);

                        let obj = IUI.GetCurrentTableData(IUI.currentTD);

                        let intSetId = IUI.currentTD.parent('tr').attr(TrAttr.RowIndexIntervention);
                        let intId = IUI.currentTD.parent('tr').attr(TrAttr.RowIndexPhase);

                        switch (obj[CurrentTableObject.CaseName]) {
                            case Cases.CaseName.Therapy_Drug:
                            case Cases.CaseName.Therapy_CancerIntervention:
                            case Cases.CaseName.Therapy_Radiotherapy:
                            case Cases.CaseName.Therapy_BiologicalVaccine:
                            case Cases.CaseName.Therapy_LifestyleModification:
                            case Cases.CaseName.Therapy_DietarySupplement:
                            case Cases.CaseName.Therapy_Other:
                                //new Drug(_caseName).DeletePhase(_caseName, intSetId, intId);
                                let _drg = new Drug();
                                _drg[CurrentTableObject.GroupId] = obj[CurrentTableObject.GroupId];
                                _drg[CurrentTableObject.TableId] = obj[CurrentTableObject.TableId];
                                _drg[CurrentTableObject.CaseNo] = obj[CurrentTableObject.CaseNo];
                                _drg[CurrentTableObject.CaseName] = obj[CurrentTableObject.CaseName];
                                _drg.DeletePhase(intSetId, intId);
                                break;

                            case Cases.CaseName.Therapy_Device:
                            case Cases.CaseName.Therapy_ProcedureSurgery:
                                //new DeviceSurgery(_caseName).DeletePhase(intSetId, intId);
                                let _ds = new DeviceSurgery();
                                _ds[CurrentTableObject.GroupId] = obj[CurrentTableObject.GroupId];
                                _ds[CurrentTableObject.TableId] = obj[CurrentTableObject.TableId];
                                _ds[CurrentTableObject.CaseNo] = obj[CurrentTableObject.CaseNo];
                                _ds[CurrentTableObject.CaseName] = obj[CurrentTableObject.CaseName];
                                _ds.DeletePhase(intSetId, intId);
                                break;

                            case Cases.CaseName.Therapy_BehavioralSessionMeeting:
                                //new BehavioralSessionMeeting(_caseName).DeletePhase(intSetId, intId);
                                let _sm = new BehavioralSessionMeeting();
                                _sm[CurrentTableObject.GroupId] = obj[CurrentTableObject.GroupId];
                                _sm[CurrentTableObject.TableId] = obj[CurrentTableObject.TableId];
                                _sm[CurrentTableObject.CaseNo] = obj[CurrentTableObject.CaseNo];
                                _sm[CurrentTableObject.CaseName] = obj[CurrentTableObject.CaseName];
                                _sm.DeletePhase(intSetId, intId);
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
                        ////IUI.currentTD = $(cmp.el.dom).parent('td');
                        ////let _curTD = $(IUI.currentTD);
                        ////let _curTDRow = _curTD.parent('tr');
                        
                        //let _caseNo = _curTDRow.attr(TrAttr.CaseNo);
                        //let _caseName = _curTDRow.attr(TrAttr.CaseName);

                        let obj = IUI.GetCurrentTableData($(cmp.el.dom).parent('td'));

                        let _curTDRow = $(cmp.el.dom).parent('td').parent('tr');
                        let intSetId = _curTDRow.attr(TrAttr.RowIndexIntervention);
                        let intId = _curTDRow.attr(TrAttr.RowIndexPhase);
                        ////let _rowIdx = _curTD.parent('tr').attr(TdAttr.RowIndex);
                        //let rwLen = $(Intervention.MainTableIdJQ()).find('tbody').find(`tr[${TrAttr.TRType}=${TRType.Phase}]tr[${TrAttr.RowIndexIntervention}=${_rowIdxInt}]tr[${TrAttr.RowIndexPhase}=${_rowIdxPhs}]`).length;
                        //rwLen >= 1 ? cmp.show() : cmp.hide();

                        switch (obj[CurrentTableObject.CaseName]) {
                            case Cases.CaseName.Therapy_Drug:
                            case Cases.CaseName.Therapy_CancerIntervention:
                            case Cases.CaseName.Therapy_Radiotherapy:
                            case Cases.CaseName.Therapy_BiologicalVaccine:
                            case Cases.CaseName.Therapy_LifestyleModification:
                            case Cases.CaseName.Therapy_DietarySupplement:
                            case Cases.CaseName.Therapy_Other:
                                //new Drug(_caseName).DeletePhaseButtonAfterRender(cmp, intSetId, intId);
                                let _drg = new Drug();
                                _drg[CurrentTableObject.GroupId] = obj[CurrentTableObject.GroupId];
                                _drg[CurrentTableObject.TableId] = obj[CurrentTableObject.TableId];
                                _drg[CurrentTableObject.CaseNo] = obj[CurrentTableObject.CaseNo];
                                _drg[CurrentTableObject.CaseName] = obj[CurrentTableObject.CaseName];
                                _drg.DeletePhaseButtonAfterRender(cmp, intSetId, intId);
                                break;

                            case Cases.CaseName.Therapy_Device:
                            case Cases.CaseName.Therapy_ProcedureSurgery:
                                //new DeviceSurgery(_caseName).DeletePhaseButtonAfterRender(cmp, intSetId, intId);
                                let _ds = new DeviceSurgery();
                                _ds[CurrentTableObject.GroupId] = obj[CurrentTableObject.GroupId];
                                _ds[CurrentTableObject.TableId] = obj[CurrentTableObject.TableId];
                                _ds[CurrentTableObject.CaseNo] = obj[CurrentTableObject.CaseNo];
                                _ds[CurrentTableObject.CaseName] = obj[CurrentTableObject.CaseName];
                                _ds.DeletePhaseButtonAfterRender(cmp, intSetId, intId);
                                break;

                            case Cases.CaseName.Therapy_BehavioralSessionMeeting:
                                //new BehavioralSessionMeeting(_caseName).DeletePhaseButtonAfterRender(cmp, intSetId, intId);
                                let _sm = new BehavioralSessionMeeting();
                                _sm[CurrentTableObject.GroupId] = obj[CurrentTableObject.GroupId];
                                _sm[CurrentTableObject.TableId] = obj[CurrentTableObject.TableId];
                                _sm[CurrentTableObject.CaseNo] = obj[CurrentTableObject.CaseNo];
                                _sm[CurrentTableObject.CaseName] = obj[CurrentTableObject.CaseName];
                                _sm.DeletePhaseButtonAfterRender(cmp, intSetId, intId);
                                break;

                            default:
                        }
                    },
                    delay: 50
                }
            }
        }
    },

    //Phase: {

    //},

    Protocol: {
        type: 'Dosage',
        compType: ComponentType.ExtractDropdown,
        name: "Protocol",
        cssClass: "tdCls",
        columnIndex: ColumnIdx++,
        dpValue: "Protocol",
        cellText: "Protocol",
        dpSourceType: Extract.EntityTypes.Interventions,
        dpSource: Extract.Groups.SOURCENAMES.DOSAGE,
        dpName: 'Protocol',
        dpFieldtoUpdate: "Value",
        config: {
            displayField: 'name',
            valueField: 'name',
            emptyText: '(None)',
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
        dpSourceType: Extract.EntityTypes.Interventions,
        dpSource: Extract.Groups.SOURCENAMES.DOSAGE,
        dpName: 'Dosage Type',
        dpFieldtoUpdate: "Value",
        config: {
            //fieldLabel: 'Dosage Type',                
            store: ["Basal", "Bolus", "Ending Dose", "Loading Dose", "Maintenance Dose", "Prophylactic Dose", "Standard", "Starting Dose", "Therapeutic Dose"],
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
        dpSourceType: Extract.EntityTypes.Interventions,
        dpSource: Extract.Groups.SOURCENAMES.DOSAGE,
        dpName: 'Dosage Field Type',
        dpFieldtoUpdate: "Value",
        config: {
            //fieldLabel: 'Field Type',
            emptyText: 'Field Type',
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
        dpSourceType: Extract.EntityTypes.Interventions,
        dpSource: Extract.Groups.SOURCENAMES.DOSAGE,
        dpName: 'Dosage Field Value',
        dpFieldtoUpdate: "Value",
        config: {
            //fieldLabel: 'Field Value',
            emptyText: 'Field Value',
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
        dpSourceType: Extract.EntityTypes.Interventions,
        dpSource: Extract.Groups.SOURCENAMES.DOSAGE,
        dpName: 'Dosage Unit',
        dpFieldtoUpdate: "Value",
        config: {
            //fieldLabel: 'Dosage Unit',                
            store: ["%", "% total", "Adjusted", "Cells", "CFU", "Days", "Gy", "Gy per fraction", "Hours", "IR", "IR/mL", "IU", "IU/day", "IU/kg", "IU/week", "L/day", "M IRU", "MIU", "MIU/m^2", "Megavoltage", "NA", "Not Reported", "PFU", "SQ-U", "SQ-U/mL", "STU", "STU/mL", "TU", "TU/mL", "U", "U/kg", "U/kg/day", "U/mL", "g", "g/day", "g/kg", "g/m^2", "mCi/kg", "mEq", "mEq/L", "mL/lbs", "mg", "mg/2 ml", "mg/2weeks", "mg/dL", "mg/day", "mg/g", "mg/hr", "mg/kg", "mg/kg/day", "mg/kg/hr", "mg/kg/wk", "mg/m^2", "mg/m^2/day", "mg/m^2/week", "mg/min", "mg/ml", "mg/ml/min", "mg/week", "ml", "ml/h", "ml/kg", "mmol", "mmol/L", "mmol/day", "ng/kg/min", "ng/min", "nmol", "nmol/mL", "pmol/kg/min", "ppm", "ratio", "spores", "x 10^5 IU/m^2", "x 10^9 CFU", "µg", "µg/L", "µg/day", "µg/g", "µg/kg", "µg/kg/min", "µg/kg/week", "µg/mL", "µg/week", "µmol/L", "μg/m^2"],
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
        dpSourceType: Extract.EntityTypes.Interventions,
        dpSource: Extract.Groups.SOURCENAMES.DOSAGE,
        dpName: 'Concentration',
        dpFieldtoUpdate: "Value",
        config: {
            //fieldLabel: 'Concentration',
            emptyText: 'Concentration',
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
        dpSourceType: Extract.EntityTypes.Interventions,
        dpSource: Extract.Groups.SOURCENAMES.DOSAGE,
        dpName: 'Concentration Unit',
        dpFieldtoUpdate: "Value",
        config: {
            //fieldLabel: 'Concentration Unit',                
            store: ["%", "% total", "Adjusted", "Cells", "CFU", "Days", "Gy", "Gy per fraction", "Hours", "IR", "IR/mL", "IU", "IU/day", "IU/kg", "IU/week", "L/day", "M IRU", "MIU", "MIU/m^2", "Megavoltage", "NA", "Not Reported", "PFU", "SQ-U", "SQ-U/mL", "STU", "STU/mL", "TU", "TU/mL", "U", "U/kg", "U/kg/day", "U/mL", "g", "g/day", "g/kg", "g/m^2", "mCi/kg", "mEq", "mEq/L", "mL/lbs", "mg", "mg/2 ml", "mg/2weeks", "mg/dL", "mg/day", "mg/g", "mg/hr", "mg/kg", "mg/kg/day", "mg/kg/hr", "mg/kg/wk", "mg/m^2", "mg/m^2/day", "mg/m^2/week", "mg/min", "mg/ml", "mg/ml/min", "mg/week", "ml", "ml/h", "ml/kg", "mmol", "mmol/L", "mmol/day", "ng/kg/min", "ng/min", "nmol", "nmol/mL", "pmol/kg/min", "ppm", "ratio", "spores", "x 10^5 IU/m^2", "x 10^9 CFU", "µg", "µg/L", "µg/day", "µg/g", "µg/kg", "µg/kg/min", "µg/kg/week", "µg/mL", "µg/week", "µmol/L", "μg/m^2"],
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
        dpSourceType: Extract.EntityTypes.Interventions,
        dpSource: Extract.Groups.SOURCENAMES.FREQUENCY,
        dpName: 'Dosage Frequency',
        dpFieldtoUpdate: "Value",
        config: {
            //fieldLabel: 'Frequency',
            emptyText: 'Frequency',
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
        dpSourceType: Extract.EntityTypes.Interventions,
        dpSource: Extract.Groups.SOURCENAMES.FREQUENCY,
        dpName: 'Frequency Unit',
        dpFieldtoUpdate: "Name",
        config: {
            valueField: 'id',
            displayField: 'unit',
            emptyText: 'Unit',
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
        dpSourceType: Extract.EntityTypes.Interventions,
        dpSource: Extract.Groups.SOURCENAMES.FREQUENCY,
        dpName: 'Frequency Information',
        dpFieldtoUpdate: "AddInfo",
        config: {
            //fieldLabel: 'Frequency Info',
            emptyText: 'Frequency Info',
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
        dpSourceType: Extract.EntityTypes.Interventions,
        dpSource: Extract.Groups.SOURCENAMES.DOSAGE,
        dpName: 'Time Value',
        dpFieldtoUpdate: "Value",
        config: {
            emptyText: '#'
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
    //                    Config.CommonMetod(IUI.currentTD[0], cmp.getValue(), cmp.getRawValue());
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
        dpSourceType: Extract.EntityTypes.Interventions,
        dpSource: Extract.Groups.SOURCENAMES.DOSAGE,
        dpName: 'Time',
        dpFieldtoUpdate: "Value",
        config: {
            //fieldLabel: 'Duration Unit',                
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
        dpSourceType: Extract.EntityTypes.Interventions,
        dpSource: Extract.Groups.SOURCENAMES.DOSAGE,
        dpName: 'Timepoint Information',
        dpFieldtoUpdate: "Value",
        config: {
            //fieldLabel: 'Duration Info',
            emptyText: 'Duration Info',
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
        dpSourceType: Extract.EntityTypes.Interventions,
        dpSource: Extract.Groups.SOURCENAMES.TIMEPOINT,
        dpName: 'Timepoint Name',
        dpFieldtoUpdate: "Name",
        config: {
            //fieldLabel: 'Timpoint',
            store: ["Baseline", "Day", "Week", "Month", "Year"]
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
        dpSourceType: Extract.EntityTypes.Interventions,
        dpSource: Extract.Groups.SOURCENAMES.TIMEPOINT,
        dpName: 'Timepoint Value',
        dpFieldtoUpdate: "Value",
        config: {
            //fieldLabel: 'Timpoint #',
            emptyText: '#',
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
        dpSourceType: Extract.EntityTypes.Interventions,
        dpSource: Extract.Groups.SOURCENAMES.TIMEPOINT,
        dpName: 'Timepoint Information',
        dpFieldtoUpdate: 'AddInfo',
        config: {
            //fieldLabel: 'Timpoint Info',
            emptyText: 'Timpoint Info',
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
                    IUI.currentTD = $(cmp.el.dom).parent('td');
                    ////let _curTD = $(IUI.currentTD);
                    ////let _curTDRow = _curTD.parent('tr');
                    //let _caseNo = IUI.currentTD.parent('tr').attr(TrAttr.CaseNo);
                    //let _caseName = IUI.currentTD.parent('tr').attr(TrAttr.CaseName);

                    let obj = IUI.GetCurrentTableData(IUI.currentTD);


                    let trtype = IUI.currentTD.parent('tr').attr(TrAttr.TRType);
                    let intSetId = IUI.currentTD.parent('tr').attr(TrAttr.RowIndexIntervention);
                    let intId = IUI.currentTD.parent('tr').attr(TrAttr.RowIndexPhase);
                    let _rowIdxDsg = IUI.currentTD.parent('tr').attr(TrAttr.RowIndexDosage);

                    //if (Ext.isEmpty(_rowIdxPhs)) {
                    //    _rowIdxPhs = 1;
                    //} else {
                    //    _rowIdxPhs = Number(_rowIdxPhs);
                    //}
                    if (Ext.isEmpty(_rowIdxDsg)) {
                        _rowIdxDsg = 1;
                    } else {
                        _rowIdxDsg = Number(_rowIdxDsg) + 1;
                    }

                    Ext.Msg.show({
                        title: 'Copy Data?',
                        msg: 'Do you want to copy <b>Dosage data</b> to next row?',
                        buttons: Ext.Msg.YESNOCANCEL,
                        icon: Ext.Msg.QUESTION,
                        fn: function (btn) {
                            if (btn == "yes") {

                            } else if (btn == "no") {
                                switch (obj[CurrentTableObject.CaseName]) {
                                    case Cases.CaseName.Therapy_Drug:
                                    case Cases.CaseName.Therapy_CancerIntervention:
                                    case Cases.CaseName.Therapy_Radiotherapy:
                                    case Cases.CaseName.Therapy_BiologicalVaccine:
                                    case Cases.CaseName.Therapy_LifestyleModification:
                                    case Cases.CaseName.Therapy_DietarySupplement:
                                    case Cases.CaseName.Therapy_Other:
                                        //new Drug(_caseName).AddDosage(trtype, intSetId, _rowIdxPhs, _rowIdxDsg);
                                        let _drg = new Drug();
                                        _drg[CurrentTableObject.GroupId] = obj[CurrentTableObject.GroupId];
                                        _drg[CurrentTableObject.TableId] = obj[CurrentTableObject.TableId];
                                        _drg[CurrentTableObject.CaseNo] = obj[CurrentTableObject.CaseNo];
                                        _drg[CurrentTableObject.CaseName] = obj[CurrentTableObject.CaseName];
                                        _drg.AddDosage(trtype, intSetId, intId, _rowIdxDsg);
                                        break;

                                    case Cases.CaseName.Therapy_Device:
                                    case Cases.CaseName.Therapy_ProcedureSurgery:
                                        //new DeviceSurgery(_caseName).AddDosage(trtype, intSetId, intId, _rowIdxDsg);
                                        let _ds = new DeviceSurgery();
                                        _ds[CurrentTableObject.GroupId] = obj[CurrentTableObject.GroupId];
                                        _ds[CurrentTableObject.TableId] = obj[CurrentTableObject.TableId];
                                        _ds[CurrentTableObject.CaseNo] = obj[CurrentTableObject.CaseNo];
                                        _ds[CurrentTableObject.CaseName] = obj[CurrentTableObject.CaseName];
                                        _ds.AddDosage(trtype, intSetId, intId, _rowIdxDsg);
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
                    });
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
                        IUI.currentTD = $(cmp.el.dom).parent('td');
                        ////let _curTD = $(IUI.currentTD);
                        ////let _curTDRow = _curTD.parent('tr');
                        //let _caseNo = IUI.currentTD.parent('tr').attr(TrAttr.CaseNo);
                        //let _caseName = IUI.currentTD.parent('tr').attr(TrAttr.CaseName);

                        let obj = IUI.GetCurrentTableData(IUI.currentTD);

                        let intSetId = IUI.currentTD.parent('tr').attr(TrAttr.RowIndexIntervention);
                        let intId = IUI.currentTD.parent('tr').attr(TrAttr.RowIndexPhase);

                        switch (obj[CurrentTableObject.CaseName]) {
                            case Cases.CaseName.Therapy_Drug:
                            case Cases.CaseName.Therapy_CancerIntervention:
                            case Cases.CaseName.Therapy_Radiotherapy:
                            case Cases.CaseName.Therapy_BiologicalVaccine:
                            case Cases.CaseName.Therapy_LifestyleModification:
                            case Cases.CaseName.Therapy_DietarySupplement:
                            case Cases.CaseName.Therapy_Other:
                                //new Drug(_caseName).DeleteDosage(intSetId, intId);
                                let _drg = new Drug();
                                _drg[CurrentTableObject.GroupId] = obj[CurrentTableObject.GroupId];
                                _drg[CurrentTableObject.TableId] = obj[CurrentTableObject.TableId];
                                _drg[CurrentTableObject.CaseNo] = obj[CurrentTableObject.CaseNo];
                                _drg[CurrentTableObject.CaseName] = obj[CurrentTableObject.CaseName];
                                _drg.DeleteDosage(intSetId, intId);
                                break;

                            case Cases.CaseName.Therapy_Device:
                            case Cases.CaseName.Therapy_ProcedureSurgery:
                                //new DeviceSurgery(_caseName).DeleteDosage(intSetId, intId);
                                let _ds = new DeviceSurgery();
                                _ds[CurrentTableObject.GroupId] = obj[CurrentTableObject.GroupId];
                                _ds[CurrentTableObject.TableId] = obj[CurrentTableObject.TableId];
                                _ds[CurrentTableObject.CaseNo] = obj[CurrentTableObject.CaseNo];
                                _ds[CurrentTableObject.CaseName] = obj[CurrentTableObject.CaseName];
                                _ds.DeleteDosage(intSetId, intId);
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
                        ////IUI.currentTD = $(cmp.el.dom).parent('td');
                        ////let _curTD = $(IUI.currentTD);
                        ////let _curTDRow = _curTD.parent('tr');                        
                        //let _caseNo = _curTDRow.attr(TrAttr.CaseNo);
                        //let _caseName = _curTDRow.attr(TrAttr.CaseName);

                        let obj = IUI.GetCurrentTableData($(cmp.el.dom).parent('td'));

                        let _curTDRow = $(cmp.el.dom).parent('td').parent('tr');
                        let intSetId = _curTDRow.attr(TrAttr.RowIndexIntervention);
                        let intId = _curTDRow.attr(TrAttr.RowIndexPhase);
                        let _rowIdxDsg = _curTDRow.attr(TrAttr.RowIndexDosage);

                        switch (obj[CurrentTableObject.CaseName]) {
                            case Cases.CaseName.Therapy_Drug:
                            case Cases.CaseName.Therapy_CancerIntervention:
                            case Cases.CaseName.Therapy_Radiotherapy:
                            case Cases.CaseName.Therapy_BiologicalVaccine:
                            case Cases.CaseName.Therapy_LifestyleModification:
                            case Cases.CaseName.Therapy_DietarySupplement:
                            case Cases.CaseName.Therapy_Other:
                                //new Drug(_caseName).DeleteDosageButtonAfterRender(cmp, intSetId, intId, _rowIdxDsg);
                                let _drg = new Drug();
                                _drg[CurrentTableObject.GroupId] = obj[CurrentTableObject.GroupId];
                                _drg[CurrentTableObject.TableId] = obj[CurrentTableObject.TableId];
                                _drg[CurrentTableObject.CaseNo] = obj[CurrentTableObject.CaseNo];
                                _drg[CurrentTableObject.CaseName] = obj[CurrentTableObject.CaseName];
                                _drg.DeleteDosageButtonAfterRender(cmp, intSetId, intId, _rowIdxDsg);
                                break;

                            case Cases.CaseName.Therapy_Device:
                            case Cases.CaseName.Therapy_ProcedureSurgery:
                                //new DeviceSurgery(_caseName).DeleteDosageButtonAfterRender(cmp, intSetId, intId, _rowIdxDsg);
                                let _ds = new DeviceSurgery();
                                _ds[CurrentTableObject.GroupId] = obj[CurrentTableObject.GroupId];
                                _ds[CurrentTableObject.TableId] = obj[CurrentTableObject.TableId];
                                _ds[CurrentTableObject.CaseNo] = obj[CurrentTableObject.CaseNo];
                                _ds[CurrentTableObject.CaseName] = obj[CurrentTableObject.CaseName];
                                _ds.DeleteDosageButtonAfterRender(cmp, intSetId, intId, _rowIdxDsg);
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
    },

    Dosage: {

    },

    SessionFrequency: {
        type: 'SessionMeeting',
        compType: ComponentType.ExtractText,
        name: "SessionFrequency",
        cssClass: "tdCls",
        columnIndex: ColumnIdx++,
        dpValue: "Session Frequency",
        cellText: "Session Frequency",
        dpSourceType: Extract.EntityTypes.Interventions,
        dpSource: Extract.Groups.SOURCENAMES.SESSION,
        dpName: 'Session Frequency',
        dpFieldtoUpdate: "Value",
        config: {
            //fieldLabel: 'Timpoint Info',
            emptyText: 'Session Frequency',
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
        dpSourceType: Extract.EntityTypes.Interventions,
        dpSource: Extract.Groups.SOURCENAMES.SESSION,
        dpName: 'Session Frequency Unit',
        dpFieldtoUpdate: "Value",
        config: {
            //fieldLabel: 'Timpoint Info',
            emptyText: 'Session Frequency Unit',
            store: ["day", "wk", "mo", "eod", "eow", "e3w", "e4w", "e6w", "e8w", "e3m", "e6m", "NR", "N/A"]
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
        dpSourceType: Extract.EntityTypes.Interventions,
        dpSource: Extract.Groups.SOURCENAMES.SESSION,
        dpName: 'Session Duration',
        dpFieldtoUpdate: "Value",
        config: {
            //fieldLabel: 'Timpoint Info',
            emptyText: 'Session Duration',
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
        dpSourceType: Extract.EntityTypes.Interventions,
        dpSource: Extract.Groups.SOURCENAMES.SESSION,
        dpName: 'Session Duration Unit',
        dpFieldtoUpdate: "Value",
        config: {
            //fieldLabel: 'Timpoint Info',
            emptyText: 'Session Duration Unit',
            store: ["day", "wk", "mo", "eod", "eow", "e3w", "e4w", "e6w", "e8w", "e3m", "e6m", "NR", "N/A"]
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
        dpSourceType: Extract.EntityTypes.Interventions,
        dpSource: Extract.Groups.SOURCENAMES.SESSION,
        dpName: 'Total Sessions',
        dpFieldtoUpdate: "Value",
        config: {
            //fieldLabel: 'Timpoint Info',
            emptyText: 'Total Sessions',
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
        dpSourceType: Extract.EntityTypes.Interventions,
        dpSource: Extract.Groups.SOURCENAMES.SESSION,
        dpName: 'Total Sessions Unit',
        dpFieldtoUpdate: "Value",
        config: {
            //fieldLabel: 'Timpoint Info',
            emptyText: 'Total Sessions Unit',
            store: ["day", "wk", "mo", "eod", "eow", "e3w", "e4w", "e6w", "e8w", "e3m", "e6m", "NR", "N/A"]
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
        dpSourceType: Extract.EntityTypes.Interventions,
        dpSource: Extract.Groups.SOURCENAMES.SESSION,
        dpName: 'Total Duration',
        dpFieldtoUpdate: "Value",
        config: {
            //fieldLabel: 'Timpoint Info',
            emptyText: 'Total Duration',
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
        dpSourceType: Extract.EntityTypes.Interventions,
        dpSource: Extract.Groups.SOURCENAMES.SESSION,
        dpName: 'Total Duration Unit',
        dpFieldtoUpdate: "Value",
        config: {
            //fieldLabel: 'Timpoint Info',
            emptyText: 'Total Duration Unit',
            store: ["day", "wk", "mo", "eod", "eow", "e3w", "e4w", "e6w", "e8w", "e3m", "e6m", "NR", "N/A"]
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
        dpSourceType: Extract.EntityTypes.Interventions,
        dpSource: Extract.Groups.SOURCENAMES.SESSION,
        dpName: 'Experience/Certification',
        dpFieldtoUpdate: "Value",
        config: {
            //fieldLabel: 'Timpoint Info',
            emptyText: 'Experience/Certification',
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
        dpSourceType: Extract.EntityTypes.Interventions,
        dpSource: Extract.Groups.SOURCENAMES.SESSION,
        dpName: 'Type of Counseling',
        dpFieldtoUpdate: "Value",
        config: {
            //fieldLabel: 'Timpoint Info',
            emptyText: 'Type of Counseling',
            store: ["Acupuncture", "Genetic Counseling", "Nutritionist", "Psychiatric Counseling"]
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
        dpSourceType: Extract.EntityTypes.Interventions,
        dpSource: Extract.Groups.SOURCENAMES.SESSION,
        dpName: 'Intervention Objective',
        dpFieldtoUpdate: "Value",
        config: {
            //fieldLabel: 'Timpoint Info',
            emptyText: 'Intervention Objective',
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
        dpSourceType: Extract.EntityTypes.Interventions,
        dpSource: Extract.Groups.SOURCENAMES.SESSION,
        dpName: 'Topic Covered',
        dpFieldtoUpdate: "Value",
        config: {
            //fieldLabel: 'Timpoint Info',
            emptyText: 'Topic Covered',
        }
    },

    //SessionMeeting: {

    //}
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

    static setTDValue(value, rawValue) {
        //currentTD.innerHTML = rawValue;
        //currentTD.setAttribute(TdAttr.DPVal, value);
        let actvTD = IUI.prevTD;
        if (typeof actvTD === 'undefined') {
            actvTD = IUI.currentTD;
        }

        if (actvTD.length > 0) {
            let _cmpTyp = actvTD.attr(TdAttr.Type);
            if (!actvTD.hasClass('trDisplayNone') && _cmpTyp != ComponentType.ExtractActionButton) {
                let _dpId = actvTD.attr(TdAttr.DPId);
                let _Cnfg = actvTD.attr(TdAttr.Config);
                let obj = {};
                obj[_Cnfg["dpFieldtoUpdate"]] = Ext.isEmpty(value) ? "" : value;
                Extract.Helper.setEntity(Extract.EntityTypes.Datapoints, _dpId, obj);
                Extract.Data.Datapoints[_dpId][ComponentList['FixedDose']["dpFieldtoUpdate"]] = obj[_Cnfg["dpFieldtoUpdate"]];
                if (!Ext.isEmpty(rawValue)) {
                    $(actvTD).html(rawValue);
                    $(actvTD).attr(TdAttr.DPVal, value);
                }
            }
        }
    }

    //static AddInfo() {
    //    return {
    //        emptyText: 'Intervention',
    //        listeners: {
    //            //blur: (cmp, eOpts) => {
    //            //    if (!Ext.isEmpty(cmp.getValue())) {
    //            //        IUI.currentTD[0].innerHTML = cmp.getValue();
    //            //    }
    //            //},
    //            beforedestroy: (cmp, eOpts) => {
    //                if (!Ext.isEmpty(cmp.getValue())) {
    //                    this.CommonMetod(IUI.currentTD[0], cmp.getValue(), cmp.getRawValue());
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