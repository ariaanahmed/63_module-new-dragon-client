import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and conditions</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat unde mollitia nam voluptates nisi sapiente enim culpa vero ea temporibus, sunt iste molestias itaque asperiores laborum accusantium saepe beatae, consectetur architecto a fugit nihil? Excepturi dolorem optio, ducimus earum suscipit eum vitae iure officia ea, nesciunt obcaecati, expedita possimus dolores!</p>
            <p>Go back to <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;