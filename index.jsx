import React from 'react'
import cls from 'classnames'

function toTabObj (t) {
  if (typeof t == 'string')
    return { label: t }
  return t
}

class Tab extends React.Component {
  onClick() {
    if (this.props.onClick)
      this.props.onClick(this.props.tab)
  }
  render() {
    const tab = toTabObj(this.props.tab)
    const selected = this.props.selected

    if (tab.divider)
      return <span className="divider">|</span>

    let label = tab.label
    if (tab.selectedLabel && tab.unselectedLabel)
      label = selected ? tab.selectedLabel : tab.unselectedLabel

    return <a className={cls({selected: selected})} onClick={this.onClick.bind(this)}>{label}</a>
  }
}

export default class Tabs extends React.Component {
  static propTypes = {
    vertical: React.PropTypes.bool,
    className: React.PropTypes.string,
    tabs: React.PropTypes.array.isRequired,
    selected: React.PropTypes.any,
    onSelect: React.PropTypes.func
  }
  render() {
    return <div className={cls('tabs', this.props.className, {vertical: this.props.vertical})}>
      {this.props.tabs.map((tab,i) => <Tab key={i} tab={tab} selected={tab === this.props.selected} onClick={this.props.onSelect} />)}
    </div>
  }
}