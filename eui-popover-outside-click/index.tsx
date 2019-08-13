import '@elastic/eui/dist/eui_theme_light.min.css';

import * as React from 'react';
import ReactDom from 'react-dom';
import {EuiPopover, EuiLink, EuiTitle, EuiCheckbox, EuiHorizontalRule, EuiInMemoryTable} from '@elastic/eui';

const App = () => {
  const [popOver1Open, setOpen1] = React.useState(false);
  const [popOver2Open, setOpen2] = React.useState(false);

  const [check1, setCheck1] = React.useState(false);
  const [check2, setCheck2] = React.useState(false);

  const columns1 = [
    {
      field: 'firstName',
      name: <EuiPopover id="what" isOpen={popOver1Open} closePopover={() => setOpen1(false)} button={<EuiLink onClick={() => setOpen1(true)}> First Name </EuiLink>} >
      <EuiCheckbox id="ok" label="1" checked={check1} onChange={() => setCheck1(!check1)} />
    </EuiPopover>,
      sortable: true,
      truncateText: true,
    },
  ]

  const columns2 = [
    {
      field: 'firstName',
      name: <EuiPopover id="what" isOpen={popOver2Open} closePopover={() => setOpen2(false)} button={<EuiLink onClick={() => setOpen2(true)}>First Name</EuiLink>} >
      <EuiCheckbox id="ok" label="1" checked={check2} onChange={() => setCheck2(!check2)} />
    </EuiPopover>,
      sortable: true,
      truncateText: true,
    },
  ]

  return <div>
    <EuiTitle size="m">
      <h1>Without Context Menu Panel</h1>
    </EuiTitle><br/>
    <EuiInMemoryTable columns={columns1} ></EuiInMemoryTable>
    <EuiHorizontalRule/>
    <EuiTitle size="m">
      <h1>With Context Menu Panel</h1>
    </EuiTitle><br/>
    <EuiInMemoryTable columns={columns2} ></EuiInMemoryTable>
  </div>
}

(function run() {
  const cont = document.querySelector('#container');
  ReactDom.render(<App />, cont);
}())