import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore pariatur adipisci tenetur optio quam amet exercitationem cupiditate autem quia, 
                repudiandae, voluptate delectus eos. Inventore cum fuga, 
                facere consequatur officia magni.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Repellat molestias corporis labore pariatur libero exercitationem quis quaerat delectus. 
                    Harum aut numquam modi possimus, deleniti ullam dolorum voluptatibus. 
                    Debitis, repellendus saepe.</p>
        </div>
        
    </div>
  )
}

export default DescriptionBox