import React from 'react';
import '../../Assets/Styles/Categories.css'


function Categories() {
  return (
    <div>
        {/* <Navbar/> */}
        {/* Left Section */}
       
            <h4 className="left-section-heading-categories text-center"><span className='✵'>✵</span> CATEGORIES <span className='✵'>✵</span></h4>
            <div className="list-group shadow-sm left-sec-custom-cats">
                <a
                    // type="button"
                    href="/Mobiles"
                    className="list-group-item list-group-item-action text-center "
                >
                    Mobiles
                </a>
                <a
                    type="button"
                    className="list-group-item list-group-item-action text-center"
                >
                    A second button item
                </a>
                <a
                    type="button"
                    className="list-group-item list-group-item-action text-center"
                >
                    A third button item
                </a>
                <a
                    type="button"
                    className="list-group-item list-group-item-action text-center"
                >
                    A fourth button item
                </a>
                <a
                    type="button"
                    className="list-group-item list-group-item-action text-center"
                    disabled
                >
                    A disabled button
                </a>
            </div>
        </div>
  )
}

export default Categories
