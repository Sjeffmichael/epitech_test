// import { Link } from "react-router-dom";
// import React from 'react';
// import PropTypes from 'prop-types';

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <div className="container-fluid">
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <Link className="nav-link" to="/">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/companyForm">
//                 Add Company
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/LoginForm">
//                 Login
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/RegisterForm">
//                 Register
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// function Nav(props) {
//   const logged_out_nav = (
//     <ul>
//       <li onClick={() => props.display_form('login')}>login</li>
//       <li onClick={() => props.display_form('signup')}>signup</li>
//     </ul>
//   );

//   const logged_in_nav = (
//     <ul>
//       <li onClick={props.handle_logout}>logout</li>
//     </ul>
//   );
//   return <div>{props.logged_in ? logged_in_nav : logged_out_nav}</div>;
// }

// export default Nav;

// Nav.propTypes = {
//   logged_in: PropTypes.bool.isRequired,
//   display_form: PropTypes.func.isRequired,
//   handle_logout: PropTypes.func.isRequired
// };
