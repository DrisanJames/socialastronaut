import React, {PureComponent} from 'react';
import {Col, Container, Row} from 'reactstrap';
import ExampleCard from './components/ExampleCard';
import TwitterPost from '../../components/twitter/twitterpost';
import Panel from '../../components/panel/panel';

export default class ExamplePage extends PureComponent {
  render() {
    return (
      <Container className='dashboard'>
        <Row>
          <Col md={12}>
            <h3 className='page-title'>Example Page One</h3>
          </Col>
        </Row>
        <Row>
          <ExampleCard/>
        </Row>
        <Row>
        <Panel xl={6} lg={12} title='Post to Twitter' subhead='Post or schedule a tweet to your twitter account'>
          <div className='dashboard__place-order'>
            <TwitterPost />
          </div>
        </Panel>

        </Row>
      </Container>
    )
  }
}

