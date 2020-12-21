import React from 'react';

//Orden de especifico a general: quality > type > class > set > name

class EditDeckPage extends React.Component {

  render() {
    return (
      <div>{this.props.activeDeck.format} - {this.props.activeDeck.hClass}</div>
    )
  }
}

export default EditDeckPage;