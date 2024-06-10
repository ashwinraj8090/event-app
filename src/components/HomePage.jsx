import React from 'react'
import Navbar from './Navbar'

const HomePage = () => {
  return (
    <div>
      <div className="container">
      <Navbar />
        <div className="row g-3">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div id="carouselExampleCaptions" class="carousel slide">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="https://www.expats.cz/images/publishing/articles/2020/09/1280_650/wemakeevents-prague-s-roxy-to-light-up-red-in-global-show-of-support-for-live-music-jpg-xunuv.webp" class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    <h1><i><b>Turning Ideas Into Action</b></i></h1>
                    <br /><br /><br /><br /><br /><br />
                    <h3>Celebraze Events</h3>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="https://www.eventsindustryforum.co.uk/images/articles/about_the_eif.jpg" class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Concerts</h5>
                    <br />
                    <a href="/ContactUs"><button className="btn btn-primary">Book Now</button></a>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="https://www.firstevent.co.uk/wp-content/uploads/2023/10/AIBlog.png" class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Executive Events</h5>
                    <br />
                    <a href="/ContactUs"><button className="btn btn-primary">Book Now</button></a>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="https://5.imimg.com/data5/SELLER/Default/2022/8/SM/WT/SY/22423502/wedding-management.jpg" class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Marriage Functions</h5>
                    <br />
                    <a href="/ContactUs"><button className="btn btn-primary">Book Now</button></a>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="https://eventsbucket.wordpress.com/wp-content/uploads/2020/01/birthday-party-balloon-decoration-10.jpg" class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Birthday Functions and Many More...</h5>
                    <br />
                    <a href="/ContactUs"><button className="btn btn-primary">Book Now</button></a>
                  </div>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
            <br />
            <img src="https://asset.bloomnation.com/c_pad,d_vendor:global:catalog:product:image.png,f_auto,fl_preserve_transparency,q_auto/v1683784586/vendor/275/catalog/product/2/0/20220918031329_file_63268cd9bc73d_63268db07e280.jpg" class="card-img-top" alt="..." />
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
            <br />
            <h2><b><i>INTIMATE  GATHERINGS TO GRANT CELEBRATIONS</i></b></h2>
            <br />
            <p>Celebraze Events is a full-service event management company that specializes in weddings, corporate events, and social gatherings. We have over 10 years of experience in the event planning industry and have helped hundreds of clients create unforgettable events.</p>
            <p>We believe that every event is unique and deserves to be planned with care. We work with our clients to understand their vision for their event and then create a plan that meets their needs and budget. We are committed to providing our clients with the best possible event planning experience.</p>
            <p>★Personalized Event Experiences</p>
            <p>★Client-Centric Approach</p>
            <p>★Experienced and Professional Team</p>
            <br />
             <a href="/AboutUs"><button className="btn btn-primary">Know more</button></a>
          </div>

          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="card bg-danger-subtle">
              <div className="card-body text-center">
                <div className="row g-3">
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <h3>Explore Our Services</h3>
                  </div>
                  <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div class="card">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJy7eYL93YTqPs8FX4Hl2F2COEJkzDaU4H_w&s" class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">Hall Decor</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div class="card">
                      <img src="https://img.staticmb.com/mbcontent/images/crop/uploads/2022/10/low_budget_wedding_stage_decoration_0_1200.jpg" class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">Stage Decor</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div class="card">
                      <img src="http://celebrazeevents.com/wp-content/uploads/2023/07/table-with-delicious-sweets-covered-with-pink-silk-scaled.jpg" class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">Catering Service</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <a href="/Services"><button className="btn btn-primary">View more</button></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="card bg-danger-subtle">
              <div class="card-body">
                <div className="row g-3">
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <h3 align="center">See what our clients have to say!</h3>
                  </div>
                  <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div class="card">
                      <div class="card-body">
                        <h5 class="card-title">"Thank You"</h5>
                        <p class="card-text">I want to thank you so much for coordinating and celebrating my son's birthday function.Everything went well that day and I cannot express how appreciative we are for eveything you guys did.</p>
                        <h5 align ="right"> - Manish</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div class="card">
                      <div class="card-body">
                        <h5 class="card-title">"Great Job"</h5>
                        <p class="card-text">There are plenty of event management companies across my place but none of them provided the atmosphere that celebraze provided us.So much satisfied with the service.</p>
                        <h5 align="right">- Rahul</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div class="card">
                      <div class="card-body">
                        <h5 class="card-title">"Well planned"</h5>
                        <p class="card-text">A perfect wedding reception,everything ran smoothly,there was no need to worry about anything.Everything was very well planned and executed by the Celebraze events team</p>
                        <h5 align="right">- Shilpa</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage