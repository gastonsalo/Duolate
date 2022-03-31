import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className=" container-fluid pt-3">
        <div className="cajaPie row">
          <div className="col-2"></div>
          <div className="col-8">
            <p className="enterate text-center">ENTERATE DE NUESTRAS NOVEDADES</p>
          </div>
          <div className="col-1">
            <a href="https://es-la.facebook.com/pg/duolate/posts/?ref=page_internal"><img className="imgRedes mx-auto d-block" src="/images/facebook.png" alt="Logo Facebook" /></a>
          </div>

          <div className="col-1">
            <a href="https://www.instagram.com/duolatedistribuidora/?hl=es"><img className="imgRedes mx-1 d-block" src="/images/instagram.png" alt="Logo Instagram"/></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer