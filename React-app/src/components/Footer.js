import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
export default class Footer extends React.Component {

  render() {
    return (
      <MDBFooter style={{ backgroundColor: "#1c2331" }} className="page-footer font-small pt-0">
        <div style={{ backgroundColor: "#6351ce" }}>

        </div>
        <MDBContainer className="mt-5 mb-4 text-center text-md-left">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mb-4">
              <h6 className="text-uppercase font-weight-bold">
                <strong style={{ color: "white" }}><u>MovieTime</u></strong>
              </h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
              <p style={{ color: "white" }}>
                  </p>
            </MDBCol>
            <MDBCol md="2" lg="2" xl="2" className="mb-4">
              <h6 className="text-uppercase font-weight-bold">
                <strong style={{ color: "white" }}><u>Products</u></strong>
              </h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
              <p>
                <a href="#!" style={{ color: "white" }}><u></u>MDBootstrap</a>
              </p>
              <p>
                <a href="#!" style={{ color: "white" }}><u></u>MDWordPress</a>
              </p>
              <p>
                <a href="#!" style={{ color: "white" }}><u></u>BrandFlow</a>
              </p>
              <p>
                <a href="#!" style={{ color: "white" }}><u></u>Bootstrap Angular</a>
              </p>
            </MDBCol>
            <MDBCol md="3" lg="2" xl="2" className="mb-4">
              <h6 className="text-uppercase font-weight-bold">
                <strong style={{ color: "white" }}><u>Useful links</u></strong>
              </h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
              <p>
                <a href="#!" style={{ color: "white" }}>Your Account</a>
              </p>
              <p>
                <a href="#!" style={{ color: "white" }}>Become an Affiliate</a>
              </p>
              <p>
                <a href="#!" style={{ color: "white" }}>Shipping Rates</a>
              </p>
              <p>
                <a href="#!" style={{ color: "white" }}>Help</a>
              </p>
            </MDBCol>
            <MDBCol md="4" lg="3" xl="3" className="mb-4">
              <h6 className="text-uppercase font-weight-bold">
                <strong style={{ color: "white" }}><u>Contact</u></strong>
              </h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
              <p style={{ color: "white" }}>
                <i className="fa fa-home mr-3" />Nova Soctia, Halifax, Canada
                  </p>
              <p style={{ color: "white" }}>
                <i className="fa fa-envelope mr-3" /> info@movietimes.com
                  </p>
              <p style={{ color: "white" }}>
                <i className="fa fa-phone mr-3" /> + 01 234 567 88
                  </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBFooter>
    )
  }
}