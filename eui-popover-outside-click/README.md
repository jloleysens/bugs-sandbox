# Dummy write up of issue

## Summary

When using the `EuiPopover` component all clicks are detected as outside clicks when the component has clickable (i.e., not disabled) elements inside of it under certain conditions.

### Code

Was not able to reproduce with this sanboxed code:
<details>
<summary>View code</summary>

```ts
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
```

</details>

See code (in Kibana) to reproduce issue [here](https://github.com/elastic/kibana/pull/42927/commits/82dd844943b272edc929663ad7a24724ed7b85e4). This approach was abandoned for a different placement of the popover.

### Steps to reproduce

1. Go to Management section in Kibana
2. Select "Create Rollup Job"
3. Get to step 5 (just fill in dummy values to satisfy the forms)
4. Click on the clickable (link) title to see the disabled checkboxes
5. Add some metrics
6. Click on the clickable "metrics" title again and click on a checkbox. This time the pop over disappears not matter where you click.

<details>
<summary>Demo</summary>

![Aug-13-2019 11-40-20](https://user-images.githubusercontent.com/8155004/62932000-a075f900-bdbf-11e9-90a3-c462e6359005.gif)


</details>