const { Component } = React;
class App extends Component {
  constructor() {
    super();
    
    this.state = { items: 3 };
    this.addItem = this.addItem.bind(this);
  }
  
  componentDidMount() {
    const dragonDrop = new DragonDrop(this.dragon);
    
    this.setState({ dragonDrop });
  }
  
  componentDidUpdate() {
    const { dragonDrop } = this.state;
    dragonDrop.initElements(this.dragon);
  }
  
  render() {
    const lis = [];
    const { items } = this.state;
    
    for (let i = 0; i < items; i++) {
      lis.push(
        <li key={i}>
          <button className='fa fa-bars' aria-label='Reorder' />
          {`Item ${i + 1}`}
        </li>
      );
    }
    
    return (
      <div>
        <h1>Dragon drop with React</h1>
        <h2>Sort the items</h2>
        <p id='help'>Activate the reorder button and use the arrow keys to reorder the list or use your mouse to drag/reorder.  Press escape to cancel the reordering.</p>
        <ol aria-labelledby='help' className='dragon' ref={el => this.dragon = el}>
          {lis}
        </ol>
        <button className='add-item' type="button" onClick={this.addItem}>Add Item</button>
      </div>
    );
  }
  
  addItem() {
    this.setState(({items}) => ({
      items: items + 1
    }))
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
