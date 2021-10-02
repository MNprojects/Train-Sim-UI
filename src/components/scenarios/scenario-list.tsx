import React from 'react';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IScenario from "./IScenario";

export class ScenarioList extends React.Component<{},
  { scenarios: IScenario[], scenarioHTML: JSX.Element[] }> {

  constructor(props: any) {
    super(props);

    let scenarios = [
      { name: "firstScenarioName", id: "firstScenarioId" },
      { name: "secondScenarioName", id: "secondScenarioId" },
    ];
    const scenarioHTML = scenarios.map((scenario) =>
      <li key={scenario.id} className='nav-item'>
        <a href='"'className='scenario-item' key={scenario.id} >{scenario.name}</a>
      </li>
    );
    this.state = {
      scenarios: scenarios,
      scenarioHTML: scenarioHTML,
    }
  }

  render() {
    return (
      <div className="scenario-list box">
        <div id="scenario-list-title">Scenario List</div>
        <ul>
          {this.state.scenarioHTML}
          <Button variant="contained" startIcon={<AddCircleIcon />}><li className='scenario-item'>Create New</li></Button>
        </ul>

      </div>
    )
  }
}