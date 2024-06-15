import React from 'react';
import './App.css';

export default function Contact({ username }) {

  return (
    <div className='content'>
      <h2>Hey {username}, Contact Us</h2>
      <p>
        This is the contact page! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam explicabo laudantium nemo
        voluptas cum omnis error voluptate. Nihil numquam ipsum necessitatibus hic odit neque
        consequuntur dolor. Magni quos ratione iste.
      </p>
    </div>
  );
}
