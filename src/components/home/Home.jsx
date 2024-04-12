import React from 'react'
import PropTypes from 'prop-types';
import PromotionalContent from '../promotionalContent/PromotionalContent';
import PromotionCarousel from '../../ui-kit/corousal/PromotionCarousel';

const Home = props => {
    return (
        <div>
            <PromotionCarousel />
            <PromotionalContent />


        </div>
    )
}

Home.propTypes = {

}

export default Home
