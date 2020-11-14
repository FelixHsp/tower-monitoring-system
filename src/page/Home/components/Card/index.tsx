/**
 * @file 通用卡片
 * @author Felix
 */

import React from 'react';

import './index.css';

interface ICard {
  title: string;
}

const Card: React.FC<ICard> = (props) => {
  const { title, children } = props;
  return (
    <div className="home-card-item">
      <div className="home-card-item-title">
        {title}
      </div>
      <div className="home-card-item-inner">
        {children}
      </div>
    </div>
  );
};

export default Card;