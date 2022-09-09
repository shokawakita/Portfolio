import React from "react";

const HeroArea = (props) => {

  // データをMapメソッドを利用して表示するための定義
  const images = props.heroImage.map(image => {
    if(image.src !== ""){
      return(
        <li 
          key={image.id} 
          className="picture"
        >
          <a href={`#${image.click}`}>
            <img 
              src={image.src} 
              alt={image.click} 
            />
          </a>
          <h3>{image.title}</h3>
        </li>
      );
  ``} else return;
  });

  return (
    <section className="hero">
      <ul>{images}</ul>
    </section>
  );
}

export default HeroArea;