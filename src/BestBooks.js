import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BestBooks.css';
import axios from 'axios'
import { withAuth0 } from '@auth0/auth0-react';
import BookCard from './components/BookCard';
import { Row } from 'react-bootstrap'
class MyFavoriteBooks extends React.Component {
  constructor(props){
    super(props)
    this.state={
      user:this.props.auth0.user.email,
      bookdata:[]
    }
  }
  async componentDidMount(){
    let BookData=await axios.get(`${process.env.REACT_APP_SERVER}/books?ownerEmail=${this.state.user}`)
    await this.setState({
      bookdata:BookData.data,
    })
  }
  render() {
    return(
      <> 
      <Row className='m-lg-5'>
      {this.state.bookdata.map(book =>
          <BookCard book={book} style={{marginBottom:'50px'}} />
        )}
      </Row>      
      </>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
