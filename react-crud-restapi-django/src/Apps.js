import React, { Component} from 'react';
import Nav from './components/Nav';
import LoginForm from './components/Login/LoginForm';
import RegisterForm from './components/Register/RegisterForm';
import CompanyList from './components/Company/CompanyList';
import CompanyForm from './components/Company/CompanyForm';
import { BrowserRouter} from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed_form: '',
      logged_in: localStorage.getItem('token') ? true : false,
      username: ''
    };
  };


  componentDidMount() {
    if (this.state.logged_in) {
      fetch('http://localhost:8000/api/current_user/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(json => {
          this.setState({ username: json.username });
        });
    }
  }

  handle_login = (e, data) => {
    e.preventDefault();
    fetch('http://localhost:8000/token-auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        if(res.ok)  
          return res.json()
      })
      .then(json => {
        localStorage.setItem('token', json.token);
        console.log('Entro')
        this.setState({
          logged_in: true,
          displayed_form: '/home',
          username: ''
        });
      })
      .catch((error) => {
        console.log(error)
        // setFallo(true)
        // setError('Usuario o contraseña incorrecto')
      });
  };

  handle_signup = (e, data) => {
    e.preventDefault();
    fetch('http://localhost:8000/api/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          displayed_form: 'home',
          username: json.username
        });
      });
  };

  handle_logout = () => {
    localStorage.removeItem('token');
    this.setState({ logged_in: false, username: '', displayed_form: 'login' });
  };

  display_form = form => {
    this.setState({
      displayed_form: form
    });
  };

  render() {

    let form;
    
    switch (this.state.displayed_form) {
      case 'login':
        form = <LoginForm handle_login={this.handle_login} />;
        break;
      case 'signup':
        form = <RegisterForm handle_signup={this.handle_signup} />;
        break;
      case 'home':
        form = <CompanyList display_form={this.display_form}/>;
        break;
      case 'add':
        form = <CompanyForm display_form={this.display_form} />;
        break
      default:
          if (this.state.logged_in) {
            form = <CompanyList display_form={this.display_form}/>;
          } else if (!this.state.logged_in) {

              form = <LoginForm handle_login={this.handle_login} />;
          }
          if (parseInt(this.state.displayed_form, 10) > 0) {
            form = <CompanyForm display_form={this.display_form} id={this.state.displayed_form}/>;
          }
    }

    return (
      <BrowserRouter>
      <div>
        <Nav
          logged_in={this.state.logged_in}
          display_form={this.display_form}
          handle_logout={this.handle_logout}
        />
        <div className="container my-4">
            {/* <switch> */}
              {/* <Route path="/companyForm" component={CompanyForm} />
              <Route path="/updateCompany/:id" component={CompanyForm} /> */}
              {/* <Route path="/login" component={LoginForm}/> */}
              {/* <Route path="/register" component={RegisterForm}/> */}
              {/* <Route path="/" component={CompanyList}/> */}
            {/* </switch> */}
            {form}
        </div>
      </div>
      </BrowserRouter>

    );
  }
}

export default App;
