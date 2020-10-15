import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Ratings = () => {

    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return <div>
        {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return <label>
                <input type="radio" name="rating" style={{display:"none"}} value={ratingValue} onClick={() => setRating(ratingValue)}/>
                <FaStar 
                    size={25} 
                    style={{cursor:"pointer", transition:"color 200ms"}} 
                    color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseOut={() => setHover(null)}
                />
            </label>
        })}
        
    </div>
}

export default Ratings;