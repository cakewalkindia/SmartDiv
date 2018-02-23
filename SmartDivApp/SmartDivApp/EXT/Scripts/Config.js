/// <reference path="ui.js" />


class Config {

    static CommonMetod(currentTD, value, rawValue) {
        currentTD.innerHTML = rawValue;
        currentTD.setAttribute("cmpDPVal", value);
    }

    static TreatmentTag() {
        return {    
            //fieldLabel: 'Treatment Tag',
            dpName: 'Treatment Tag',
            //lblTag: 'TreatmentTag',
            cls: 'btn-treatment-tag btnFld',
            listeners: {
                click: (cmp, eOpts) => {
                    if (cmp.getText() == "I") {
                        cmp.setText("C");
                    } else {
                        cmp.setText("I");
                    }
                },
                beforedestroy: (cmp, eOpts) => {
                    if (!Ext.isEmpty(cmp.getText())) {
                        this.CommonMetod(cmp.me.currentTD[0], cmp.getText(), cmp.getText());
                    }
                }
            }
        }
    }

    static FixedDose() {
        return {
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
                        this.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                    }
                }
            }
        }
    }

    static Intervention() {
        return {
            //fieldLabel: 'Intervention',
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
            //fieldLabel: 'Manufacture',
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
            //fieldLabel: 'Brand',
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
                    let row = IUI.CreateTR();
                    $(InterventionUI.MainTableIdJQ()).find('tbody')[0].appendChild(row);

                    let cell = IUI.CreateTD(IUI.TabIndexTD(), ComponentType.ExtractButton, "TreatmentTag", "I");
                    row.appendChild(cell);

                    cell = IUI.CreateTD(IUI.TabIndexTD(), ComponentType.ExtractDropdown, "FixedDose", "No", "(None)");
                    row.appendChild(cell);


                    cell = IUI.CreateTD(IUI.TabIndexTD(), ComponentType.ExtractText, "Intervention", "Intervention A", "Intervention A");
                    row.appendChild(cell);

                    cell = IUI.CreateTD(IUI.TabIndexTD(), ComponentType.ExtractText, "Manufacture", "Manufacture", "Manufacture");
                    row.appendChild(cell);

                    cell = IUI.CreateTD(IUI.TabIndexTD(), ComponentType.ExtractText, "Brand", "Brand", "Brand");
                    row.appendChild(cell);

                    cell = IUI.CreateActionTD(IUI.TabIndexTD(), ComponentType.ExtractActionButton, "AddIntervention");
                    row.appendChild(cell);

                    cell = IUI.CreateActionTD(IUI.TabIndexTD(), ComponentType.ExtractActionButton, "DeleteIntervention");
                    row.appendChild(cell);

                    cell = IUI.CreateTD(IUI.TabIndexTD(), ComponentType.ExtractDropdown, "StudyPhase", "Treatment Period", "Treatment Period");
                    row.appendChild(cell);

                    cell = IUI.CreateTD(IUI.TabIndexTD(), ComponentType.ExtractDropdown, "Schedule", "Afternoon", "Afternoon");
                    row.appendChild(cell);

                    cell = IUI.CreateTD(IUI.TabIndexTD(), ComponentType.ExtractDropdown, "Route", "Extraocular", "Extraocular");
                    row.appendChild(cell);

                    cell = IUI.CreateTD(IUI.TabIndexTD(), ComponentType.ExtractDropdown, "Provider", "Clinician", "Clinician");
                    row.appendChild(cell);

                    cell = IUI.CreateActionTD(IUI.TabIndexTD(), ComponentType.ExtractActionButton, "AddPhase");
                    row.appendChild(cell);

                    cell = IUI.CreateActionTD(IUI.TabIndexTD(), ComponentType.ExtractActionButton, "DeletePhase");
                    row.appendChild(cell);

                    cell = IUI.CreateTD(IUI.TabIndexTD(), ComponentType.ExtractText, "MiscName", "Name", "Name");
                    row.appendChild(cell);

                    cell = IUI.CreateTD(IUI.TabIndexTD(), ComponentType.ExtractText, "MiscDesc", "Desc", "Desc");
                    row.appendChild(cell);

                    cell = IUI.CreateActionTD(IUI.TabIndexTD(), ComponentType.ExtractActionButton, "AddMisc");
                    row.appendChild(cell);

                    cell = IUI.CreateActionTD(IUI.TabIndexTD(), ComponentType.ExtractActionButton, "DeleteMisc");
                    row.appendChild(cell);

                    cell = IUI.CreateTD(IUI.TabIndexTD(), ComponentType.ExtractDropdown, "Protocol", "Protocol", "Protocol");
                    row.appendChild(cell);

                    cell = IUI.CreateTD(IUI.TabIndexTD(), ComponentType.ExtractDropdown, "DosageType", "Basal", "Basal");
                    row.appendChild(cell);

                    cell = IUI.CreateTD(IUI.TabIndexTD(), ComponentType.ExtractText, "FieldType", "A", "A");
                    row.appendChild(cell);

                    cell = IUI.CreateTD(IUI.TabIndexTD(), ComponentType.ExtractText, "FieldValue", "B", "B");
                    row.appendChild(cell);

                    cell = IUI.CreateTD(IUI.TabIndexTD(), ComponentType.ExtractDropdown, "DosageUnit", "CFU", "CFU");
                    row.appendChild(cell);

                    cell = IUI.CreateTD(IUI.TabIndexTD(), ComponentType.ExtractText, "Concentration", "Concentration", "Concentration");
                    row.appendChild(cell);

                    cell = IUI.CreateTD(IUI.TabIndexTD(), ComponentType.ExtractDropdown, "ConcentrationUnit", "%", "%");
                    row.appendChild(cell);

                    cell = IUI.CreateTD(IUI.TabIndexTD(), ComponentType.ExtractText, "Frequency", "C", "C");
                    row.appendChild(cell);

                    cell = IUI.CreateTD(IUI.TabIndexTD(), ComponentType.ExtractDropdown, "FrequencyUnit", "week", "d");
                    row.appendChild(cell);

                    cell = IUI.CreateTD(IUI.TabIndexTD(), ComponentType.ExtractText, "FrequencyInfo", "D", "D");
                    row.appendChild(cell);

                    cell = IUI.CreateTD(IUI.TabIndexTD(), ComponentType.ExtractText, "Duration", "E", "E");
                    row.appendChild(cell);

                    cell = IUI.CreateTD(IUI.TabIndexTD(), ComponentType.ExtractDropdown, "DurationUnit", "Cells", "Cells");
                    row.appendChild(cell);

                    cell = IUI.CreateTD(IUI.TabIndexTD(), ComponentType.ExtractText, "DurationInfo", "F", "F");
                    row.appendChild(cell);

                    cell = IUI.CreateTD(IUI.TabIndexTD(), ComponentType.ExtractDropdown, "Timpoint", "Month", "Month");
                    row.appendChild(cell);

                    cell = IUI.CreateTD(IUI.TabIndexTD(), ComponentType.ExtractText, "TimpointNo", "1", "1");
                    row.appendChild(cell);

                    cell = IUI.CreateTD(IUI.TabIndexTD(), ComponentType.ExtractText, "TimpointInfo", "G", "G");
                    row.appendChild(cell);

                    cell = IUI.CreateActionTD(IUI.TabIndexTD(), ComponentType.ExtractActionButton, "AddDosage");
                    row.appendChild(cell);

                    cell = IUI.CreateActionTD(IUI.TabIndexTD(), ComponentType.ExtractActionButton, "DeleteDosage");
                    row.appendChild(cell);
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
                    let _curTD = $(cmp.me.currentTD);                    
                    _curTD.parent('tr').remove();
                    IUI.currentTD = $('td:first', $(InterventionUI.MainTableIdJQ()));
                    IUI.SmartDivPosition();
                    window.setTimeout(() => {
                        IUI.CreateComponent();
                    }, 250);
                }
            }
        }
    }


    //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

    static StudyPhase() {
        return {
            //valueField: 'id',
            //displayField: 'val',
            //emptyText: '(None)',
            //fieldLabel: 'Study Phase',
            //tpl: '<tpl for="."><div class="x-boundlist-item cmbtplborder">{val} </div></tpl>',
            //displayTpl: '<tpl for=".">{val}</tpl>',
            store: ['Treatment Period', 'Follow-up Period'],
            listeners: {
                beforedestroy: (cmp, eOpts) => {
                    if (!Ext.isEmpty(cmp.getValue())) {
                        this.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                    }
                }
            }
        }
    }

    static Schedule() {
        return {
            //fieldLabel: 'Schedule',
            store: ["Afternoon", "Bedtime", "Breakfast", /*"Daily",*/ "Daytime", "Dinner", "Evening", "Intraoperative", "Lunch", "Morning", "Peri-op", "Post-Breakfast", "Post-Diagnostic", "Post-Dinner", "Post-Lunch", "Post-Prandial", "Prandial", "Pre-Breakfast", "Pre-Diagnostic", "Pre-Dinner", "Pre-Lunch", "Pre-Prandial", "Pre/Post-op"],
            listeners: {
                beforedestroy: (cmp, eOpts) => {
                    if (!Ext.isEmpty(cmp.getValue())) {
                        this.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                    }
                }
            }
        }
    }

    static Route() {
        return {
            //fieldLabel: 'Route',
            store: ["Dry powder inhaler", "Epidural Injection", "Extraocular", "Group Therapy", "HAI", "I.V.", "Implant", "Individual Therapy", "Inhalent", "Injection", "Instilled into Eye", "Intramuscular", "Intranasal", "Intraperitoneal", "Intrathecal", "Intravesicular", "Intravitreal Injection", "Iontophoretic", "Laparoscopic Surgery", "Metered Dose Inhaler + Spacer", "Metered dose inhaler", "Open Surgery", "Oral", "Soft mist inhaler", "Sub-Tenon Injection", "SubQ", "SubQ (Pen)", "SubQ (Vial)", "Suppository", "Topical", "Transdermal"],
            listeners: {
                beforedestroy: (cmp, eOpts) => {
                    if (!Ext.isEmpty(cmp.getValue())) {
                        this.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                    }
                }
            }
        }
    }

    static Provider() {
        return {
            //fieldLabel: 'Provider',
            store: ["Allied Health Care Provider", "Care Provider", "Clinician", "Doctor", "Doctoral Student", "Foster Parent", "General Practitioner", "Graduate Student", "Multiple Individuals", "N/A", "NR", "Nurse", "Paid Caregiver", "Pharmacist", "Psychiatrist", "Psychologist", "Self", "Teacher", "Team", "Therapist", "Unpaid Caregiver"],
            listeners: {
                beforedestroy: (cmp, eOpts) => {
                    if (!Ext.isEmpty(cmp.getValue())) {
                        this.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                    }
                }
            }
        }
    }


    static AddPhase() {
        return {
            iconCls: '#TabAdd',
            cls: 'Btn',
            listeners: {
                click: (cmp, eOpts) => {
                    console.log("Add button clicked!");
                }
            }
        }
    }

    static DeletePhase() {
        return {
            iconCls: '#TabDelete',
            cls: 'Btn',
            listeners: {
                click: (cmp, eOpts) => {
                    console.log("Delete button clicked!");
                }
            }
        }
    }

    //---------------------------------------------------------------------------------------------------------

    static MiscName() {
        return {
            //fieldLabel: 'Name',
            emptyText: 'Name',
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

    static MiscDesc() {
        return {
            //fieldLabel: 'Description',
            emptyText: 'Description',
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

    static AddMisc() {
        return {
            iconCls: '#TabAdd',
            cls: 'Btn',
            listeners: {
                click: (cmp, eOpts) => {
                    console.log("Add button clicked!");
                }
            }
        }
    }

    static DeleteMisc() {
        return {
            iconCls: '#TabDelete',
            cls: 'Btn',
            listeners: {
                click: (cmp, eOpts) => {
                    console.log("Delete button clicked!");
                }
            }
        }
    }

    //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

    static Protocol() {
        return {
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


    static DosageType() {
        return {
            //fieldLabel: 'Dosage Type',
            store: ["Basal", "Bolus", "Ending Dose", "Loading Dose", "Maintenance Dose", "Prophylactic Dose", "Standard", "Starting Dose", "Therapeutic Dose"],
            listeners: {
                beforedestroy: (cmp, eOpts) => {
                    if (!Ext.isEmpty(cmp.getValue())) {
                        this.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                    }
                }
            }
        }
    }

    static FieldType() {
        return {
            //fieldLabel: 'Field Type',
            emptyText: 'Field Type',            
            listeners: {
                beforedestroy: (cmp, eOpts) => {
                    if (!Ext.isEmpty(cmp.getValue())) {
                        this.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                    }
                }
            }
        }
    }

    static FieldValue() {
        return {
            //fieldLabel: 'Field Value',
            emptyText: 'Field Value',
            listeners: {
                beforedestroy: (cmp, eOpts) => {
                    if (!Ext.isEmpty(cmp.getValue())) {
                        this.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                    }
                }
            }
        }
    }

    static DosageUnit() {
        return {
            //fieldLabel: 'Dosage Unit',
            store: ["%", "% total", "Adjusted", "Cells", "CFU", "Days", "Gy", "Gy per fraction", "Hours", "IR", "IR/mL", "IU", "IU/day", "IU/kg", "IU/week", "L/day", "M IRU", "MIU", "MIU/m^2", "Megavoltage", "NA", "Not Reported", "PFU", "SQ-U", "SQ-U/mL", "STU", "STU/mL", "TU", "TU/mL", "U", "U/kg", "U/kg/day", "U/mL", "g", "g/day", "g/kg", "g/m^2", "mCi/kg", "mEq", "mEq/L", "mL/lbs", "mg", "mg/2 ml", "mg/2weeks", "mg/dL", "mg/day", "mg/g", "mg/hr", "mg/kg", "mg/kg/day", "mg/kg/hr", "mg/kg/wk", "mg/m^2", "mg/m^2/day", "mg/m^2/week", "mg/min", "mg/ml", "mg/ml/min", "mg/week", "ml", "ml/h", "ml/kg", "mmol", "mmol/L", "mmol/day", "ng/kg/min", "ng/min", "nmol", "nmol/mL", "pmol/kg/min", "ppm", "ratio", "spores", "x 10^5 IU/m^2", "x 10^9 CFU", "µg", "µg/L", "µg/day", "µg/g", "µg/kg", "µg/kg/min", "µg/kg/week", "µg/mL", "µg/week", "µmol/L", "μg/m^2"],
            listeners: {
                beforedestroy: (cmp, eOpts) => {
                    if (!Ext.isEmpty(cmp.getValue())) {
                        this.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                    }
                }
            }
        }
    }

    static Concentration() {
        return {
            //fieldLabel: 'Concentration',
            emptyText: 'Concentration',
            listeners: {
                beforedestroy: (cmp, eOpts) => {
                    if (!Ext.isEmpty(cmp.getValue())) {
                        this.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                    }
                }
            }
        }
    }

    static ConcentrationUnit() {
        return {
            //fieldLabel: 'Concentration Unit',
            store: ["%", "% total", "Adjusted", "Cells", "CFU", "Days", "Gy", "Gy per fraction", "Hours", "IR", "IR/mL", "IU", "IU/day", "IU/kg", "IU/week", "L/day", "M IRU", "MIU", "MIU/m^2", "Megavoltage", "NA", "Not Reported", "PFU", "SQ-U", "SQ-U/mL", "STU", "STU/mL", "TU", "TU/mL", "U", "U/kg", "U/kg/day", "U/mL", "g", "g/day", "g/kg", "g/m^2", "mCi/kg", "mEq", "mEq/L", "mL/lbs", "mg", "mg/2 ml", "mg/2weeks", "mg/dL", "mg/day", "mg/g", "mg/hr", "mg/kg", "mg/kg/day", "mg/kg/hr", "mg/kg/wk", "mg/m^2", "mg/m^2/day", "mg/m^2/week", "mg/min", "mg/ml", "mg/ml/min", "mg/week", "ml", "ml/h", "ml/kg", "mmol", "mmol/L", "mmol/day", "ng/kg/min", "ng/min", "nmol", "nmol/mL", "pmol/kg/min", "ppm", "ratio", "spores", "x 10^5 IU/m^2", "x 10^9 CFU", "µg", "µg/L", "µg/day", "µg/g", "µg/kg", "µg/kg/min", "µg/kg/week", "µg/mL", "µg/week", "µmol/L", "μg/m^2"],
            listeners: {
                beforedestroy: (cmp, eOpts) => {
                    if (!Ext.isEmpty(cmp.getValue())) {
                        this.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                    }
                }
            }
        }
    }

    static Frequency() {
        return {
            //fieldLabel: 'Frequency',
            emptyText: 'Frequency',
            listeners: {
                beforedestroy: (cmp, eOpts) => {
                    if (!Ext.isEmpty(cmp.getValue())) {
                        this.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                    }
                }
            }
        }
    }

    static FrequencyUnit() {
        return {
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
            listeners: {
                beforedestroy: (cmp, eOpts) => {
                    if (!Ext.isEmpty(cmp.getValue())) {
                        this.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                    }
                }
            }
        }
    }

    static FrequencyInfo() {
        return {
            //fieldLabel: 'Frequency Info',
            emptyText: 'Frequency Info',
            listeners: {
                beforedestroy: (cmp, eOpts) => {
                    if (!Ext.isEmpty(cmp.getValue())) {
                        this.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                    }
                }
            }
        }
    }

    static Duration() {
        return {
            //fieldLabel: 'Duration',
            emptyText: 'Duration',
            listeners: {
                beforedestroy: (cmp, eOpts) => {
                    if (!Ext.isEmpty(cmp.getValue())) {
                        this.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                    }
                }
            }
        }
    }

    static DurationUnit() {
        return {
            //fieldLabel: 'Duration Unit',
            store: ["%", "% total", "Adjusted", "Cells", "CFU", "Days", "Gy", "Gy per fraction", "Hours", "IR", "IR/mL", "IU", "IU/day", "IU/kg", "IU/week", "L/day", "M IRU", "MIU", "MIU/m^2", "Megavoltage", "NA", "Not Reported", "PFU", "SQ-U", "SQ-U/mL", "STU", "STU/mL", "TU", "TU/mL", "U", "U/kg", "U/kg/day", "U/mL", "g", "g/day", "g/kg", "g/m^2", "mCi/kg", "mEq", "mEq/L", "mL/lbs", "mg", "mg/2 ml", "mg/2weeks", "mg/dL", "mg/day", "mg/g", "mg/hr", "mg/kg", "mg/kg/day", "mg/kg/hr", "mg/kg/wk", "mg/m^2", "mg/m^2/day", "mg/m^2/week", "mg/min", "mg/ml", "mg/ml/min", "mg/week", "ml", "ml/h", "ml/kg", "mmol", "mmol/L", "mmol/day", "ng/kg/min", "ng/min", "nmol", "nmol/mL", "pmol/kg/min", "ppm", "ratio", "spores", "x 10^5 IU/m^2", "x 10^9 CFU", "µg", "µg/L", "µg/day", "µg/g", "µg/kg", "µg/kg/min", "µg/kg/week", "µg/mL", "µg/week", "µmol/L", "μg/m^2"],
            listeners: {
                beforedestroy: (cmp, eOpts) => {
                    if (!Ext.isEmpty(cmp.getValue())) {
                        this.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                    }
                }
            }
        }
    }

    static DurationInfo() {
        return {
            //fieldLabel: 'Duration Info',
            emptyText: 'Duration Info',
            listeners: {
                beforedestroy: (cmp, eOpts) => {
                    if (!Ext.isEmpty(cmp.getValue())) {
                        this.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                    }
                }
            }
        }
    }

    static Timpoint() {
        return {
            //fieldLabel: 'Timpoint',
            store: ["Baseline", "Day", "Week", "Month", "Year"],
            listeners: {
                beforedestroy: (cmp, eOpts) => {
                    if (!Ext.isEmpty(cmp.getValue())) {
                        this.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                    }
                }
            }
        }
    }

    static TimpointNo() {
        return {
            //fieldLabel: 'Timpoint #',
            emptyText: '#',
            listeners: {
                beforedestroy: (cmp, eOpts) => {
                    if (!Ext.isEmpty(cmp.getValue())) {
                        this.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                    }
                }
            }
        }
    }

    static TimpointInfo() {
        return {
            //fieldLabel: 'Timpoint Info',
            emptyText: 'Timpoint Info',
            listeners: {
                beforedestroy: (cmp, eOpts) => {
                    if (!Ext.isEmpty(cmp.getValue())) {
                        this.CommonMetod(cmp.me.currentTD[0], cmp.getValue(), cmp.getRawValue());
                    }
                }
            }
        }
    }


    static AddDosage() {
        return {
            iconCls: '#TabAdd',
            cls: 'Btn',
            listeners: {
                click: (cmp, eOpts) => {
                    console.log("Add button clicked!");
                }
            }
        }
    }

    static DeleteDosage() {
        return {
            iconCls: '#TabDelete',
            cls: 'Btn',
            listeners: {
                click: (cmp, eOpts) => {
                    console.log("Delete button clicked!");
                }
            }
        }
    }
}