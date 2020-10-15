import React, { Component } from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";

class Genre extends Component {
  render() {
    return (
      <div>
        <label>Genre</label>
        <ul>
          <Button>Horror</Button>

          <br />
          <br />
          <Button>Sports</Button>
          <br />
          <br />
          <Button>Comedy</Button>
          <br />
          <br />
          <Button>Science Fiction</Button>
          <br />
          <br />
          <Button>Action</Button>
          <br />
          <br />
          <Button>Animation</Button>
          <br />
          <br />
          <Button>Others</Button>
          <br />
        </ul>
      </div>
    );
  }
}
class SortBy extends Component {
  render() {
    return (
      <div>
        <label>SortBy</label>
        <ul>
          <Button>Date</Button>
          <br />
          <br />
          <Button>Popularity</Button>
          <br />
          <br />
          <Button>Rating</Button>
          <br />
        </ul>
      </div>
    );
  }
}
class Language extends Component {
  render() {
    return (
      <div>
        <label>Language</label>
        <ul>
          <Button>English</Button>
        </ul>
      </div>
    );
  }
}
class Mode2D3D4DX extends Component {
  render() {
    return (
      <div>
        <label>Mode2D3D4DX</label>
        <ul>
          <Button>2D</Button>
          <br />
          <br />
          <Button>3D</Button>
          <br />
          <br />
          <Button>4DX</Button>
          <br />
        </ul>
      </div>
    );
  }
}

export default class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showGenreSwitch: false,
      showLanguageSwitch: false,
      showSortBySwitch: false,
      show2D3D4DXSwitch: false,
    };
  }

  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Filter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div>
              <Row>
                <Col sm={6}>
                  <Row>
                    <Button
                      variant="outline-primary"
                      onClick={() =>
                        this.setState({
                          showGenreSwitch: true,
                          show2D3D4DXSwitch: false,
                          showLanguageSwitch: false,
                          showSortBySwitch: false,
                        })
                      }
                    >
                      Genre
                    </Button>
                  </Row>
                  <br />
                  <Row>
                    <Button
                      variant="outline-primary"
                      onClick={() =>
                        this.setState({
                          showSortBySwitch: true,
                          show2D3D4DXSwitch: false,
                          showLanguageSwitch: false,
                          showGenreSwitch: false,
                        })
                      }
                    >
                      SortBy
                    </Button>
                  </Row>
                  <br />
                  <Row>
                    <Button
                      variant="outline-primary"
                      onClick={() =>
                        this.setState({
                          showLanguageSwitch: true,
                          show2D3D4DXSwitch: false,
                          showGenreSwitch: false,
                          showSortBySwitch: false,
                        })
                      }
                    >
                      Language
                    </Button>
                  </Row>
                  <br />
                  <Row>
                    <Button
                      variant="outline-primary"
                      onClick={() =>
                        this.setState({
                          show2D3D4DXSwitch: true,
                          showGenreSwitch: false,
                          showLanguageSwitch: false,
                          showSortBySwitch: false,
                        })
                      }
                    >
                      2D/3D/4DX
                    </Button>
                  </Row>
                </Col>
                <Col sm={4}>
                  <div className="container">
                    {this.state.showGenreSwitch ? <Genre /> : null}
                    {this.state.showSortBySwitch ? <SortBy /> : null}
                    {this.state.showLanguageSwitch ? <Language /> : null}
                    {this.state.show2D3D4DXSwitch ? <Mode2D3D4DX /> : null}
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Apply</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
