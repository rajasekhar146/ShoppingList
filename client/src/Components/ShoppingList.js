import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class ShoppingList extends Component {
    state = {
        item: [
            { id: uuid(), name: 'eggs'},
            { id: uuid(), name: 'vegitables'},
            { id: uuid(), name: 'Milk'},
            { id: uuid(), name: 'Water'}
        ]
    }
    render(){
        const { item } = this.state;
        return(
            <Container>
                <Button
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={()=> {
                        const name = prompt('Enter Name');
                        if (name) {
                            this.setState(state => ({
                                item: [...state.item, { id: uuid(), name}]
                            }))
                        }
                    }}
                >Add Item</Button>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        { item.map(({id, name})=>(
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={()=> {
                                            this.setState(state => ({
                                                item: state.item.filter(item => item.id !== id)
                                            }))
                                        }}
                                    >&times;</Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}
export default ShoppingList;