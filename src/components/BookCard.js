import React, { Component } from 'react'
import {Card, Col} from 'react-bootstrap'

export class BookCard extends Component {
    render() {
        return (
            <Col md={4}>
                <Card style={{ width: '18rem'  , }} className='h-100 '>
                    <Card.Body>
                        <Card.Title>{this.props.book.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Email : {this.props.book.email}</Card.Subtitle>
                        <Card.Text>
                        {this.props.book.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}

export default BookCard
