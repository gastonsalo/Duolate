import React from 'react'

const home = () => {
  return (
    <div className=" container-fluid">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="cajaInfo1 col-md-4">
            <h2 className="tituloMarron">Sobre Nosotros</h2>
            <p className="textoDescripcion
            textoDescripcion">Somos una empresa innovadora dedicada al asesoramiento y la comercialización de productos y materias primas de alta calidad. Capaces de satisfacer las necesidades mas exigentes de los profesionales de los sectores pastelería, panadería, catering y alta gastronomía, asi como tambien aquellos amantes de la cocina creativa y tendencias. </p>
            <div><img src="/images/fotoIndex.png" alt=""/></div>
          </div>
          <div className="cajaInfo2 col-md-4">
            <div><img src="/images/fotoIndex2.png" alt=""/></div>
            <h2 className="tituloMarron">Nuestros Valores</h2>
            <p className="textoDescripcion
            textoDescripcion">Con firmes valores y visión estratégica, trabajamos enfocados en sostener y mejorar la calidad de los productos y eficiencia de los procesos en forma ordenada, metódica y sostenida. Buscamos crecer con responsabilidad social corporativa en todos los procesos de toma de decisiones, valorando el impacto de nuestras acciones en la comunidad, el equipo de trabajo y por sonre todos nuestros clientes.</p>
          </div>
          <div className="col-md-2"></div>
        </div>

        <div className="contenedorMarcas container-fluid">
          <div className="row">
            <div className="col-12 text-center"><h1 className="subTitulo">- Marcas que nos acompañan -</h1></div>
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="/images/principales1.png" className="d-block w-100" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src="/images/principales2.png" className="d-block w-100" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src="/images/principales3.png" className="d-block w-100" alt="..."/>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>
  )
}

export default home