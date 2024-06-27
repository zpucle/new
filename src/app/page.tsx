import React from 'react';
import { Breadcrumb, Menu, theme,Image,Col, Divider, Row} from 'antd';
import { Button, Card, Layout } from 'antd';
import Link from 'next/link';

const Home = () => (
  <div className="container">
    <div className="card">
      <h1 style={{ marginRight: '1rem', padding: '20px', position: 'absolute', textAlign: 'center', top: '40%', left: '36%',  }}>
        Welcome to zee App
        </h1>

        <div>
       <h2>
     <a href="http://localhost:3000/auth/signin"> 
           <Button style={{ marginRight: '1rem', padding: '20px', position: 'absolute', textAlign: 'center', top: '50%', left: '40%' }}
           >Signin</Button>
           </a>
           <br></br>
           <br>
           </br>
           <a href="http://localhost:3000/auth/signup"> 
           <Button style={{ marginRight: '5rem', padding: '20px', position: 'absolute', textAlign: 'center', top: '50%', left: '50%' }}
           >Signup</Button>
           </a>
     </h2>
     </div>
      
      <Layout 
      style={{ backgroundImage: 'url("./images/1.jpg")', backgroundSize: 'cover', minHeight: '100vh', display: 'flex'}} 
      >
      </Layout>

    </div>
  </div>
);

export default Home;
