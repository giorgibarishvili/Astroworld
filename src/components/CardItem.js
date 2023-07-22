import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(articles) {
  return (
    <div className='cardsConteiner'>
              <li className='cards__item'>
            <Link className='cards__item__link' to={`/article-details/${articles.id}`}>
              <figure className='cards__item__pic-wrap' data-category={articles.name}>
                <img
                  className='cards__item__img'
                  alt='img'
                  src={articles.image}
                />
              </figure>
              <div className='cards__item__info'>
                <h5 className='cards__item__text'>{articles.preview}</h5>
              </div>
            </Link>
          </li>
    </div>
  );
}

export default CardItem