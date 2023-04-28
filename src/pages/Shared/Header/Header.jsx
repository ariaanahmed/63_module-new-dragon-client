import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import { Button } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <div className="text-center">
                <img src={logo} alt="logo" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p className='text-secondary' style={{fontWeight: '600'}}>{moment().format('dddd, MMMM D, YYYY')}</p>
            </div>
            <div>
                <Button variant='danger'>Breaking News</Button>
            </div>
        </div>
    );
};

export default Header;