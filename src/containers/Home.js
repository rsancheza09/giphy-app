import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Giphy from '../components/Giphy';

import { getTrending } from '../actions/trending';
import Loading from '../components/Loading';

class Home extends Component {
  constructor(props) {
    super(props);
    this.boundActionCreators = bindActionCreators({
      getTrending,
    }, props.dispatch);
  }
  componentDidMount() {
    this.props.dispatch(getTrending());
  }
  getGiphys(giphys) {
    return giphys.map((giphy) => (
      <Col sm="6" md="4" key={ giphy.id }>
        <Giphy
          imgUrl={ giphy.images.preview_gif.url }
          title={ giphy.title }
          giphyUrl={ giphy.url }
        />
      </Col>
    ));
  }
  render() {
    const { giphys, trending, loadingGiphys, loadingTrending } = this.props;
    const allGiphys = giphys.length ? this.getGiphys(giphys) : this.getGiphys(trending);
    return (
      <Container>
        <Row>
          {
            loadingGiphys || loadingTrending ?
              <Loading /> :
              allGiphys
          }
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  giphys: state.search.data,
  trending: state.trending.data,
  loadingGiphys: state.search.loading,
  loadingTrending: state.trending.loading,
});

export default connect(mapStateToProps)(Home);
