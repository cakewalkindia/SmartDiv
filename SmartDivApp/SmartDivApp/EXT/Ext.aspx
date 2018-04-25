<%@ Page Language="C#" %>

<%@ Register assembly="Ext.Net" namespace="Ext.Net" tagprefix="ext" %>

<!DOCTYPE html>
    
<html>
<head runat="server">
    <title>New Intervention UI</title>
    <script src="Scripts/jquery-3.3.1.min.js"></script>
    <link href="../Content/main.css" rel="stylesheet" />

    <script src="Scripts/Utils.js"></script>
    <script src="ExtractDB/Core/ExtractCore.js"></script>
    <script src="ExtractDB/Helper/ExtractHelper.js"></script>
    <script src="ExtractDB/Analytics/ExtractCreate.js"></script>

    <script src="Scripts/main.js"></script>
    <script src="Scripts/Enums.js"></script>
    <script src="Scripts/Config.js"></script>
    <script src="Scripts/Components.js"></script>
    <script src="Scripts/Cases/Drug.js"></script>
    <script src="Scripts/Cases/DeviceSurgery.js"></script>
    <script src="Scripts/Cases/BehavioralInformationalMaterial.js"></script>
    <script src="Scripts/Cases/BehavioralSessionMeeting.js"></script>

    

</head>
<body>
    <ext:ResourceManager runat="server" Theme="Neptune" />

    <div class="divFld" id="txtEdit" tabindex="1">
        <!--<input class="txtFld" autocomplete="off" name="phone" type="email" autofocus />-->
    </div>
      
    <%--<div id="divMain">
        <div id="divGrps" style="width: 10%; float: left;">Total Population</div>
        <div id="divInt" style="float: right;">
            <table id="tblMain" class="tblCls" >
                <tbody>
                    <tr>
                        <td>AAA</td>
                        <td>BBB</td>
                    </tr>
                </tbody>
            </table>        
        </div>
    </div> --%>

    <ext:Viewport runat="server" Layout="FitLayout" >
        <Items>
            <ext:TabPanel runat="server" >
                <Items>
                    <ext:Panel ID="tpIntervention" Padding="5" Title="Intervention" runat="server" AutoScroll="true">
                        <%--<Content>
                        <div id="tableMain">
                            <table id="tblMain" class="tblCls" >
                                <tbody>
               
                                </tbody>
                            </table>        
                        </div> 
                    </Content>--%>
                        <Listeners>
                            <AfterRender Fn="App.loadStudy()"></AfterRender>
                        </Listeners>
                    </ext:Panel>                    
                </Items>
            </ext:TabPanel>
        </Items>
    </ext:Viewport>

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