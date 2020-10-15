// import React from "react";
// import { Container, Card, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import Slider from "react-slick";
// import Axios from "axios";
// import queryString from "query-string"

// class MovieRec extends React.Component {
//   componentDidMount(){
  
//     let url = this.props.match.params
//     let params = queryString.parse(url)
//     console.log("result" + params.id)
//     // Axios({
//     //   method : "GET",
//     //   url :"http://localhost:5000/movie-detail/"+params.id

//     // }).then((response) =>{

//     // })

//   }
//   //gets the movies based on the movies searched
//   render() {
//     return (
//       <table
//         style={{
//           display: "block",
//           fontSize: 20,
//           paddingLeft: 16,
//         }}
//       >
//         <div>
//           <React.Fragment key={this.props.mv.id}>
//             <Link to={`/movie/${this.props.mv.id}`}>
//               <Col>
//                 <Card
//                   style={{
//                     margin: "25px",
//                   }}
//                 >
//                   <Card.Img
//                     variant="top"
//                     src={this.props.mv.poster_src}
//                     style={{
//                       width: undefined,
//                       height: "425px",
//                     }}
//                   />
//                   <Card.Body>
//                     <span>{this.props.mv.title}</span>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             </Link>
//           </React.Fragment>
//         </div>
//       </table>
//     );
//   }
// }
// export default MovieRec;
