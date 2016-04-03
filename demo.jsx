import React from 'react'
import Tabs from './index'

const TABS = [
  'First',
  'Second',
  'Third'
]
const TABS_DYNAMIC = [
  { selectedLabel: '1st!', unselectedLabel: 'First' },
  { selectedLabel: '2nd!', unselectedLabel: 'Second' },
  { selectedLabel: '3rd!', unselectedLabel: 'Third' }
]

export default class TabsDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected1: TABS[0],
      selected2: TABS_DYNAMIC[0],
      selected3: TABS[0]
    }
  }
  render() {
    return <div>
      <h1>patchkit-tabs</h1>
      <section className="tabs-horz">
        <header>&lt;Tabs tabs="..."&gt;</header>
        <div className="content">
          <Tabs tabs={TABS} selected={this.state.selected1} onSelect={o=>this.setState({ selected1: o })} />
        </div>
      </section>
      <section className="tabs-horz-dynamic-label">
        <header>&lt;Tabs tabs="..."&gt; (dynamic label)</header>
        <div className="content">
          <Tabs tabs={TABS_DYNAMIC} selected={this.state.selected2} onSelect={o=>this.setState({ selected2: o })} />
        </div>
      </section>
      <section className="tabs-vert">
        <header>&lt;Tabs tabs="..." vertical&gt;</header>
        <div className="content">
          <Tabs vertical tabs={TABS} selected={this.state.selected3} onSelect={o=>this.setState({ selected3: o })} />
        </div>
      </section>
    </div>
  }
}