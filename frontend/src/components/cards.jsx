import React from 'react'

export default function Cards() {
  return (<>
    <div className="container text-center">
      
    <h1 className='text-center text-capitalize text-white'>Subcription Bundle's</h1>
  <div className="row">
    <div className="col">
      <div className="card" style={{width: '18rem'}}>
  <img src={'R.jpg'} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Daily Package</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Subscribe</a>
  </div>
</div>
    </div>
    <div className="col">
      <div className="card" style={{width: '18rem'}}>
  <img src={'OIP.jpg'} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Weekly Package</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Subscribe</a>
  </div>
</div>
    </div>
    <div className="col">
      <div className="card" style={{width: '18rem'}}>
  <img src={'Zong-Monthly.jpg'} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Monthly Package</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Subscribe</a>
  </div>
</div>
    </div>
  </div>
</div>
</>
  )
}
