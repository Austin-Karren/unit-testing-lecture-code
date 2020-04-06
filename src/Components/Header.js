import React, {Component} from 'react';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            showDropdown: false
        }
    }

    flipDropdown = () => {
        this.setState({showDropdown: !this.state.showDropdown})
    }

    render(){
        return (
            <header>
                <span
                    onClick={this.flipDropdown}
                    data-testid='hamburger-menu'></span>
                {this.state.showDropdown
                ? (<>
                    <div data-testid='dropdown'>
                        Dropdown Menu
                    </div>
                   </>)
                : null}
            </header>
        )
    }
}

export default Header;