import React from 'react'
import Featured from '../../components/Featured/Featured'
import FeaturedProperti from '../../components/FeaturedProperti/FeaturedProperti';
import MailList from '../../components/MailList/MailList';
import Property from '../../components/Property/Property';
const Home = () => {
  return (
    <div className="home_wrap">
      <div className="container">
        <Featured />
        <h2 style={{ textAlign: "center" }}>Brows by property type</h2>
        <Property />
        <h2 style={{ textAlign: "center" }}>Home guests love</h2>
        <FeaturedProperti />
        <MailList />
      </div>
    </div>
  );
}

export default Home