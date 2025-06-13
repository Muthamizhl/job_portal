import React from 'react';
import './Categories.css';

const categories = [
  { name: 'Fruits', img: 'https://t4.ftcdn.net/jpg/00/65/70/65/360_F_65706597_uNm2SwlPIuNUDuMwo6stBd81e25Y8K8s.jpg'},
  { name: 'Snacks', img: 'https://t4.ftcdn.net/jpg/01/73/41/63/360_F_173416361_2YCaYyXrVk6nhNoIkg21515HUWseyqyr.jpg'},
  { name: 'Dairy', img: 'https://t4.ftcdn.net/jpg/01/45/60/21/360_F_145602173_05uVexifBuCvWIKvsHGWNuIpPtp5ShkI.jpg'},
  { name: 'Vegetables', img: 'https://cdn.aarp.net/content/dam/aarpe/en/home/health/healthy-living/best-ways-to-eat-vegetables-cooked-raw/_jcr_content/root/container_main/container_body_main/container_body1/container_body_cf/container_image/articlecontentfragment/cfimage.coreimg.50.932.jpeg/content/dam/aarp/health/healthy-living/2023/07/1140-colorfulrawveggies.jpg'},
  { name: 'Beverages', img: 'https://media.istockphoto.com/id/504754220/photo/cocktails.jpg?s=612x612&w=0&k=20&c=NxIzGT-LbUS0BAPoCMDY3mEp96AnIxxldbWmFMeeD-A='},
  { name: 'Bakery', img: "https://thumbs.dreamstime.com/b/italian-bakery-28379528.jpg"}
];

const Categories = () => {
  return (
    <div className="categories-container">
      <h2>Shop by Category</h2>
      <div className="categories-grid">
        {categories.map((cat, i) => (
          <div key={i} className="category-card">
            <img src={cat.img} alt={cat.name} />
            <p>{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
