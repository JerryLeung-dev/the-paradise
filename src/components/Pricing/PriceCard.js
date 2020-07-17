import React from "react";
import Zoom from "react-reveal/Zoom";

import "./Pricing.css";
import Button from '../UI/MyButton';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const PriceCard = (props) => {
  return (
    <Zoom delay={props.delay}>
      <div className="pricing__card">
          <div className="card__frame center-wrapper">
            <div className="card__price">${props.price || 250 }</div>
            <div className="card__package">{props.package || 'Premium' }</div>
            <div className="card__desc">{props.description || 'All basic jfkoasjf'}</div>
            <Button 
                link={props.link}
                color='secondary'
                icon={<ShoppingCartOutlinedIcon />}
                text='ORDER'
                className="btn"
            />
          </div>
      </div>
    </Zoom>
  );
};

export default PriceCard;
