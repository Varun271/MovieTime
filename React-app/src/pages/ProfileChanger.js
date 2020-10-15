import React, { Component } from "react";
import "antd/dist/antd.css";
import { Modal, Button } from "antd";

class ProfileChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      profileImgArray: [props.tom_1, props.tom_2, props.male, props.female],
    };
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  render() {
    const imgMapper = this.state.profileImgArray.map((imgs, index) => {
      return (
        // eslint-disable-next-line
        <img
          src={imgs}
          onClick={() => this.props.handleImageChange(imgs)}
          height="200px"
        />
      );
    });
    return (
      <div className="ProfileChanger">
        <Button type="primary" onClick={this.showModal}>
          Choose Profile picture
        </Button>
        <Modal
          title="Profile Image Changer"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          {imgMapper}
        </Modal>
      </div>
    );
  }
}
export default ProfileChanger;
