import { TextField } from '@mui/material';
import React from 'react';
import { ScenarioList } from './scenario-list';


export class Scenario extends React.Component {


    constructor(props: any) {
        super(props);
        let state = 1;
    }

    render() {
        return (
            <div>
                <form noValidate autoComplete="off">
                    <TextField  className="input" id="scenario-name" label="Name" variant="outlined" required color="primary" />
                </form>
                <ScenarioList/>
            </div>
        )
    }
}