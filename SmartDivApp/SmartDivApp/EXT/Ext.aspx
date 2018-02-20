<%@ Page Language="C#" %>

<%@ Register assembly="Ext.Net" namespace="Ext.Net" tagprefix="ext" %>

<!DOCTYPE html>
    
<html>
<head runat="server">
    <title>Ext.NET Example</title>
    <script src="http://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
            crossorigin="anonymous"></script>
    <link href="../Content/main.css" rel="stylesheet" />
    <script src="Scripts/Config.js"></script>
    <script src="Scripts/Components.js"></script>
    <script src="Scripts/UI.js"></script>
    
</head>
<body>
    <ext:ResourceManager runat="server" Theme="Neptune" />

    <div class="divFld" id="txtEdit" tabindex="1">
        <!--<input class="txtFld" autocomplete="off" name="phone" type="email" autofocus />-->
    </div>

    <div id="tableMain">
        <%--<table class="tblClr">
            <tr class="trCls">
                <td class='tdCls' fieldType="combo" fieldStore='["Text 11", "Text 12", "Text 13"]'>
                    Text 11
                </td>
                <td class='tdCls' fieldType="text">
                    Cell2
                </td>
                <td class='tdCls' fieldType="text">
                    Cell3
                </td>
            </tr>
            <tr class="trCls">
                <td class='tdCls' fieldType="text">
                    Cell4
                </td>
                <td class='tdCls' fieldType="combo" fieldStore='["Text 51", "Text 52", "Text 53"]'>
                    Text 52
                </td>
                <td class='tdCls' fieldType="text">
                    Cell6
                </td>
            </tr>
            <tr class="trCls">
                <td class='tdCls' fieldType="text">
                    Cell7
                </td>
                <td class='tdCls' fieldType="text">
                    Cell8
                </td>
                <td class='tdCls' fieldType="combo" fieldStore='["Text 91", "Text 92", "Text 93"]'>
                    Text 93
                </td>
            </tr>
        </table>

        <lable class="tblClr" id="lblTab"><b>Tab Direction Change(Ctrl + Alt + Shift):-</b> Right to Left</lable>--%>
    </div>

    <%--<div onkeydown="DivTextEventTest.Divkeydown(this,event)" onkeyup="DivTextEventTest.Divkeyup(this,event)">
        <input type="text" onkeydown="DivTextEventTest.Txtkeydown(this,event)" onkeyup="DivTextEventTest.Txtkeyup(this,event)"/>
    </div>

    <script>
        class DivTextEventTest {
            static Divkeydown(a, e) {
                console.log('Div Keydown');
            }

            static Txtkeydown(a, e) {
                console.log('Txt Keydown');
            }

            static Divkeyup(a, e) {
                console.log('Div Keyup');
            }

            static Txtkeyup(a, e) {
                console.log('Txt Keyup');
            }
        }
    </script>--%>

</body>
</html>