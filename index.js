import { render } from 'react-dom';
import './index.css';
import * as React from 'react';
import { TabComponent, TabItemDirective, TabItemsDirective } from '@syncfusion/ej2-react-navigations';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';

import { SampleBase } from './sample-base';
import {
  DiagramComponent,
  Diagram,
  NodeModel,
  ConnectorModel,
  Inject, LineRouting,
  PortVisibility,
  SnapConstraints,
  DiagramConstraints
} from "@syncfusion/ej2-react-diagrams";


let nodes = [
  {
    id: 'start', offsetX: 115, offsetY: 110,
    shape: { type: 'Flow', shape: 'Terminator' },
    style: { fill: '#D5535D' },
    ports: [{ id: 'port1', offset: { x: 0.5, y: 0 }, visibility: PortVisibility.Hidden }],
    annotations: [{
      content: 'Start'
    }]
  },
  {
    id: 'process', offsetX: 115, offsetY: 255,
    shape: { type: 'Flow', shape: 'Process' },
    style: { fill: "#65B091" },
    annotations: [{
      content: 'Process'
    }]
  },
  {
    id: 'document', offsetX: 115, offsetY: 400,
    shape: { type: 'Flow', shape: 'Document' },
    style: { fill: "#5BA5F0" },
    ports: [{ id: 'port1', offset: { x: 0, y: 0.5 }, visibility: PortVisibility.Hidden }],
    annotations: [{
      content: 'Document'
    }]
  },
  {
    id: 'decision', offsetX: 390, offsetY: 110,
    shape: { type: 'Flow', shape: 'Decision' },
    style: { fill: "#9A8AF7" },
    annotations: [{
      content: 'Decision'

    }]
  },
  {
    id: 'document2', offsetX: 390, offsetY: 255,
    shape: { type: 'Flow', shape: 'Document' },
    style: { fill: "#5BA5F0" },
    annotations: [{
      content: 'Document'

    }]
  },
  {
    id: 'end', offsetX: 390, offsetY: 400,
    shape: { type: 'Flow', shape: 'Terminator' },
    style: { fill: "#9A8AF7" },
    annotations: [{
      content: 'End'

    }]
  },
  {
    id: 'process2', offsetX: 640, offsetY: 110,
    shape: { type: 'Flow', shape: 'Process' },
    style: { fill: "#65B091" },
    annotations: [{
      content: 'Process'
    }]
  },
  {
    id: 'card', offsetX: 640, offsetY: 255,
    shape: { type: 'Flow', shape: 'Card' },
    style: { fill: "#9A8AF7" },
    annotations: [{
      content: 'Card',
    }],
    ports: [
      { id: 'port1', offset: { x: 1, y: 0.5 }, visibility: PortVisibility.Hidden },
      { id: 'port2', offset: { x: 0.5, y: 1 }, visibility: PortVisibility.Hidden }
    ],
  }
];

let connectors = [
  {
    id: 'Connector1', sourceID: 'start', targetID: 'process',
  },
  {
    id: 'Connector2', sourceID: 'process', targetID: 'document'
  },
  {
    id: 'Connector3', sourceID: 'document', targetID: 'end',
  },
  {
    id: 'Connector4', sourceID: 'start', targetID: 'decision'
  },
  {
    id: 'Connector5', sourceID: 'decision', targetID: 'process2',
  },
  {
    id: 'Connector6', sourceID: 'process2', targetID: 'card',
  },
  {
    id: 'Connector7', sourceID: 'process', targetID: 'document2'
  },
  {
    id: 'Connector8', sourceID: 'document2', targetID: 'card',
  },
  {
    id: 'Connector9', sourceID: 'start', sourcePortID: "port1",
    targetID: 'card', targetPortID: 'port1'
  },
  {
    id: 'Connector10', sourceID: 'card', sourcePortID: 'port2',
    targetID: 'document', targetPortID: 'port1'
  },
];

let diagramInstance;

export class Default extends SampleBase {
   tabSelecting(e) {
     if(e.selectedIndex == 1){
       console.log(e.selectedContent); // It contains id. 
       // Here you render your componet
     debugger;
     }
        
    }
    render() {
        let headertext;
        // Mapping Tab items Header property
        headertext = [{ text: "Tab1", 'iconCss': 'e-twitter' },
            { text: "Tab2", 'iconCss': 'e-facebook' }, { text: "Tab3", 'iconCss': 'e-whatsapp' }];
        function tabContent1() {
            return (<div>
          Go to Tab 2 to see diagram component
        </div>);
        }
        function tabContent2() {
            return (<div id="diagram">
        
        </div>);
        }
        function tabContent3() {
            return (<div>
          WhatsApp Messenger is a proprietary cross-platform instant messaging client for smartphones that operates under a subscription business model. It uses the Internet to send text messages, images, video, user location and audio media messages to other users using standard cellular mobile numbers. As of February 2016, WhatsApp had a user base of up to one billion,[10] making it the most globally popular messaging application. WhatsApp Inc., based in Mountain View, California, was acquired by Facebook Inc. on February 19, 2014, for approximately US$19.3 billion.
        </div>);
        }
        
           function contentTemplate() {
            return (<ScheduleComponent>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
    </ScheduleComponent>);
        }
        
        return (<div className='control-pane'>
        <div className='control-section tab-control-section'>
          
        <TabComponent heightAdjustMode='Auto' id='defaultTab' selected={this.tabSelecting.bind(this)}>
            <TabItemsDirective>
              <TabItemDirective header={headertext[0]} content={tabContent1}/>

              <TabItemDirective header={headertext[1]} content={tabContent2}/>

              <TabItemDirective header={headertext[2]} content={tabContent3}/>
            </TabItemsDirective>
          </TabComponent>
        </div>
      </div>);
      
    }
}

render(<Default />, document.getElementById('sample'));