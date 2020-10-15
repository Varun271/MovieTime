import React from 'react';
import {Button} from 'react-bootstrap';

export class GiftCards extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            code: "Please Enter Giftcard code",
        };

        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit(){
    }

    render() {
        return <div className="container">
                    <h2>GIFT CARDS</h2>

                    <h5>Enter your coupon code below to redeem your Giftcard</h5>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <fieldset>
                            <div className="form-group">
                                <input className="form-control" type="text" name="code" value={this.state.code}
                                    onChange={this.handleChange} />
                            </div>
                            <br/>
                            <Button variant="primary" type="submit" id="submit" value="submit">Redeem</Button>
                        </fieldset>
                    </form>
                    <br/>
                    <br/>
                    <h6>Terms and Conditions</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
    }
}