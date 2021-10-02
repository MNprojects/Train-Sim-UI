import React, { useState } from 'react';
import '../index.css';
import MenuIcon from '@material-ui/icons/Menu';
import { Simulation } from './simulations/simulation'
// import { ScenarioList } from './scenarios/scenario-list';
import { Scenario } from './scenarios/scenario';



class App extends React.Component<{}, { component: string }> {
  constructor(props: any) {
    super(props);
    this.state = { component: "s" }
  }

  render() {
    const currentComponent = this.state.component;
    let componentRender;
    if (currentComponent === "Simulations") {
      componentRender = <Simulation />
    }
    else {
      componentRender = <Scenario />
    }
    return (
      <div>
        <Menu>
          <Navbar>
            <NavItem component="Scenarios" onClick={() =>
              this.setState(
                { component: "Scenarios" }
              )
            } />
            <NavItem component="Simulations" onClick={() =>
              this.setState(
                { component: "Simulations" }
              )
            } />
          </Navbar>
        </Menu >
        {componentRender}
      </div>
    );
  }
}

function Menu(props: any) {

  const [open, setOpen] = useState(false);

  return (
    <menu className="menu">
      <div className="menu-button" onClick={() => setOpen(!open)}>
        <MenuIcon fontSize="large" />
      </div>
      {open && props.children}
    </menu>
  )
}

function Navbar(props: any) {
  return (
    <nav className="navbar" >
      <ul className="navbar-nav">
        {props.children}
      </ul>
    </nav>
  )
}

function NavItem(props: any) {
  return (
    <a href="#{props.component}" className="icon-button" >
      <li className="nav-item" onClick={() => props.onClick()}>
        {props.component}
      </li >
    </a>
  );
}

export default App;
