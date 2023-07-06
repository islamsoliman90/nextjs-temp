export default function Home() {
  return (
    <>
      <div className="landing">
        <div className="container">
          <div className="text">
            <h1>Welcome, To Soliman World</h1>
            <p>
              Here Iam gonna share everything about my life. Books Iam reading,
              Games Iam Playing, Stories and Events
            </p>
          </div>
          <div className="image">
            <img src="imgs/landing-image.png" alt="" />
          </div>
        </div>
        <a href="#articles" className="go-down">
          <i className="fas fa-angle-double-down fa-2x"></i>
        </a>
      </div>

      <div className="articles" id="articles">
        <h2 className="main-title">Articles</h2>
        <div className="container">
          <div className="box">
            <img src="imgs/cat-01.jpg" alt="" />
            <div className="content">
              <h3>Test Title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Reprehenderit
              </p>
            </div>
            <div className="info">
              <a href="">Read More</a>
              <i className="fas fa-long-arrow-alt-right"></i>
            </div>
          </div>
          <div className="box">
            <img src="imgs/cat-02.jpg" alt="" />
            <div className="content">
              <h3>Test Title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Reprehenderit
              </p>
            </div>
            <div className="info">
              <a href="">Read More</a>
              <i className="fas fa-long-arrow-alt-right"></i>
            </div>
          </div>
          <div className="box">
            <img src="imgs/cat-03.jpg" alt="" />
            <div className="content">
              <h3>Test Title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Reprehenderit
              </p>
            </div>
            <div className="info">
              <a href="">Read More</a>
              <i className="fas fa-long-arrow-alt-right"></i>
            </div>
          </div>
          <div className="box">
            <img src="imgs/cat-04.jpg" alt="" />
            <div className="content">
              <h3>Test Title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Reprehenderit
              </p>
            </div>
            <div className="info">
              <a href="">Read More</a>
              <i className="fas fa-long-arrow-alt-right"></i>
            </div>
          </div>
          <div className="box">
            <img src="imgs/cat-05.jpg" alt="" />
            <div className="content">
              <h3>Test Title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Reprehenderit
              </p>
            </div>
            <div className="info">
              <a href="">Read More</a>
              <i className="fas fa-long-arrow-alt-right"></i>
            </div>
          </div>
          <div className="box">
            <img src="imgs/cat-06.jpg" alt="" />
            <div className="content">
              <h3>Test Title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Reprehenderit
              </p>
            </div>
            <div className="info">
              <a href="">Read More</a>
              <i className="fas fa-long-arrow-alt-right"></i>
            </div>
          </div>
          <div className="box">
            <img src="imgs/cat-07.jpg" alt="" />
            <div className="content">
              <h3>Test Title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Reprehenderit
              </p>
            </div>
            <div className="info">
              <a href="">Read More</a>
              <i className="fas fa-long-arrow-alt-right"></i>
            </div>
          </div>
          <div className="box">
            <img src="imgs/cat-08.jpg" alt="" />
            <div className="content">
              <h3>Test Title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Reprehenderit
              </p>
            </div>
            <div className="info">
              <a href="">Read More</a>
              <i className="fas fa-long-arrow-alt-right"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="spikes"></div>

      <div className="gallery" id="gallery">
        <h2 className="main-title">Gallery</h2>
        <div className="container">
          <div className="box">
            <div className="image">
              <img src="imgs/gallery-01.png" alt="" />
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src="imgs/gallery-02.png" alt="" />
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src="imgs/gallery-03.jpg" alt="" />
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src="imgs/gallery-04.png" alt="" />
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src="imgs/gallery-05.jpg" alt="" />
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src="imgs/gallery-06.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="features" id="features">
        <h2 className="main-title">Features</h2>
        <div className="container">
          <div className="box quality">
            <div className="img-holder">
              <img src="imgs/features-01.jpg" alt="" />
            </div>
            <h2>Quality</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              harum hic veniam eligendi minima
            </p>
            <a href="#">More</a>
          </div>
          <div className="box time">
            <div className="img-holder">
              <img src="imgs/features-02.jpg" alt="" />
            </div>
            <h2>Time</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              harum hic veniam eligendi minima
            </p>
            <a href="#">More</a>
          </div>
          <div className="box passion">
            <div className="img-holder">
              <img src="imgs/features-03.jpg" alt="" />
            </div>
            <h2>Passion</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              harum hic veniam eligendi minima
            </p>
            <a href="#">More</a>
          </div>
        </div>
      </div>

      <div className="testimonials" id="testimonials">
        <h2 className="main-title">Testimonials</h2>
        <div className="container">
          <div className="box">
            <img src="imgs/avatar-01.png" alt="" />
            <h3>Mohamed Farag</h3>
            <span className="title">Full Stack Developer</span>
            <div className="rate">
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              et reiciendis voluptatum, amet est natus quaerat ducimus
            </p>
          </div>
          <div className="box">
            <img src="imgs/avatar-02.png" alt="" />
            <h3>Mohamed Ibrahim</h3>
            <span className="title">Full Stack Developer</span>
            <div className="rate">
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              et reiciendis voluptatum, amet est natus quaerat ducimus
            </p>
          </div>
          <div className="box">
            <img src="imgs/avatar-03.png" alt="" />
            <h3>Shady Nabil</h3>
            <span className="title">Full Stack Developer</span>
            <div className="rate">
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              et reiciendis voluptatum, amet est natus quaerat ducimus
            </p>
          </div>
          <div className="box">
            <img src="imgs/avatar-04.png" alt="" />
            <h3>Amr Hendawy</h3>
            <span className="title">Full Stack Developer</span>
            <div className="rate">
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              et reiciendis voluptatum, amet est natus quaerat ducimus
            </p>
          </div>
          <div className="box">
            <img src="imgs/avatar-05.png" alt="" />
            <h3>Sherief Ashraf</h3>
            <span className="title">Full Stack Developer</span>
            <div className="rate">
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              et reiciendis voluptatum, amet est natus quaerat ducimus
            </p>
          </div>
          <div className="box">
            <img src="imgs/avatar-06.png" alt="" />
            <h3>Osama Mohamed</h3>
            <span className="title">Full Stack Developer</span>
            <div className="rate">
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              et reiciendis voluptatum, amet est natus quaerat ducimus
            </p>
          </div>
        </div>
      </div>

      <div className="team" id="team">
        <h2 className="main-title">Team Members</h2>
        <div className="container">
          <div className="box">
            <div className="data">
              <img src="imgs/team-01.jpg" alt="" />
              <div className="social">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
            <div className="info">
              <h3>Name</h3>
              <p>Simple Short Description</p>
            </div>
          </div>
          <div className="box">
            <div className="data">
              <img src="imgs/team-02.jpg" alt="" />
              <div className="social">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
            <div className="info">
              <h3>Name</h3>
              <p>Simple Short Description</p>
            </div>
          </div>
          <div className="box">
            <div className="data">
              <img src="imgs/team-03.jpg" alt="" />
              <div className="social">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
            <div className="info">
              <h3>Name</h3>
              <p>Simple Short Description</p>
            </div>
          </div>
          <div className="box">
            <div className="data">
              <img src="imgs/team-04.jpg" alt="" />
              <div className="social">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
            <div className="info">
              <h3>Name</h3>
              <p>Simple Short Description</p>
            </div>
          </div>
          <div className="box">
            <div className="data">
              <img src="imgs/team-05.png" alt="" />
              <div className="social">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
            <div className="info">
              <h3>Name</h3>
              <p>Simple Short Description</p>
            </div>
          </div>
          <div className="box">
            <div className="data">
              <img src="imgs/team-06.png" alt="" />
              <div className="social">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
            <div className="info">
              <h3>Name</h3>
              <p>Simple Short Description</p>
            </div>
          </div>
          <div className="box">
            <div className="data">
              <img src="imgs/team-07.jpg" alt="" />
              <div className="social">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
            <div className="info">
              <h3>Name</h3>
              <p>Simple Short Description</p>
            </div>
          </div>
          <div className="box">
            <div className="data">
              <img src="imgs/team-08.jpg" alt="" />
              <div className="social">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
            <div className="info">
              <h3>Name</h3>
              <p>Simple Short Description</p>
            </div>
          </div>
        </div>
      </div>
      <div className="spikes"></div>

      <div className="services" id="services">
        <h2 className="main-title">Services</h2>
        <div className="container">
          <div className="box">
            <i className="fas fa-user-shield fa-4x"></i>
            <h3>Security</h3>
            <div className="info">
              <a href="#">Details</a>
            </div>
          </div>
          <div className="box">
            <i className="fas fa-tools fa-4x"></i>
            <h3>Fixing Issues</h3>
            <div className="info">
              <a href="#">Details</a>
            </div>
          </div>
          <div className="box">
            <i className="fas fa-map-marked-alt fa-4x"></i>
            <h3>Location</h3>
            <div className="info">
              <a href="#">Details</a>
            </div>
          </div>
          <div className="box">
            <i className="fas fa-laptop-code fa-4x"></i>
            <h3>Coding</h3>
            <div className="info">
              <a href="#">Details</a>
            </div>
          </div>
          <div className="box">
            <i className="fas fa-palette fa-4x"></i>
            <h3>Security</h3>
            <div className="info">
              <a href="#">Design</a>
            </div>
          </div>
          <div className="box">
            <i className="fas fa-bullhorn fa-4x"></i>
            <h3>Marketing</h3>
            <div className="info">
              <a href="#">Details</a>
            </div>
          </div>
        </div>
      </div>

      <div className="our-skills" id="our-skills">
        <h2 className="main-title">Our Skills</h2>
        <div className="container">
          <img src="imgs/skills.png" alt="" />
          <div className="skills">
            <div className="skill">
              <h3>
                HTML <span>80%</span>
              </h3>
              <div className="the-progress">
                <span style={{ width: "0" }} data-width="80%"></span>
              </div>
            </div>
            <div className="skill">
              <h3>
                CSS <span>85%</span>
              </h3>
              <div className="the-progress">
                <span style={{ width: "0" }} data-width="85%"></span>
              </div>
            </div>
            <div className="skill">
              <h3>
                JavaScript <span>70%</span>
              </h3>
              <div className="the-progress">
                <span style={{ width: "0" }} data-width="70%"></span>
              </div>
            </div>
            <div className="skill">
              <h3>
                Python <span>80%</span>
              </h3>
              <div className="the-progress">
                <span style={{ width: "0" }} data-width="80%"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="work-steps" id="work-steps">
        <h2 className="main-title">How It Works ?</h2>
        <div className="container">
          <img src="imgs/work-steps.png" alt="" className="image" />
          <div className="info">
            <div className="box">
              <img src="imgs/work-steps-1.png" alt="" />
              <div className="text">
                <h3>Business Analysis</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                  nesciunt obcaecati quisquam quis laborum recusandae debitis
                  vel
                </p>
              </div>
            </div>
            <div className="box">
              <img src="imgs/work-steps-2.png" alt="" />
              <div className="text">
                <h3>Architecture</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                  nesciunt obcaecati quisquam quis laborum recusandae debitis
                  vel
                </p>
              </div>
            </div>
            <div className="box">
              <img src="imgs/work-steps-3.png" alt="" />
              <div className="text">
                <h3>Developement</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                  nesciunt obcaecati quisquam quis laborum recusandae debitis
                  vel
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="events" id="events">
        <div className="dots dots-up"></div>
        <div className="dots dots-down"></div>
        <h2 className="main-title">Latest Events</h2>
        <div className="container">
          <img src="imgs/events.png" alt="" />
          <div className="info">
            <div className="time">
              <div className="unit">
                <span className="days">15</span>
                <span>Days</span>
              </div>
              <div className="unit">
                <span className="hours">08</span>
                <span>Hours</span>
              </div>
              <div className="unit">
                <span className="minutes">45</span>
                <span>Minutes</span>
              </div>
              <div className="unit">
                <span className="seconds">55</span>
                <span>Seconds</span>
              </div>
            </div>
            <h2 className="title">Tech Masters Event 2021</h2>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero
              tenetur doloremque iusto ut adipisci quam ratione aliquam
              excepturi nulla in harum, veritatis porro
            </p>
          </div>
          <div className="subscribe">
            <form action="">
              <input type="email" placeholder="Enter Your Email" />
              <input type="submit" value="Subscribe" />
            </form>
          </div>
        </div>
      </div>

      <div className="pricing" id="pricing">
        <div className="dots dots-up"></div>
        <div className="dots dots-down"></div>
        <h2 className="main-title">Pricing Plans</h2>
        <div className="container">
          <div className="box">
            <div className="title">Basic</div>
            <img src="imgs/hosting-basic.png" alt="" />
            <div className="price">
              <span className="amount">$15</span>
              <span className="time">Per Month</span>
            </div>
            <ul>
              <li>10GB HDD Space</li>
              <li>5 Email Addresses</li>
              <li>2 Subdomains</li>
              <li>4 Databases</li>
              <li>Basic Support</li>
            </ul>
            <a href="#">Choose Plan</a>
          </div>
          <div className="box popular">
            <div className="label">Most Popular</div>
            <div className="title">Advanced</div>
            <img src="imgs/hosting-advanced.png" alt="" />
            <div className="price">
              <span className="amount">$25</span>
              <span className="time">Per Month</span>
            </div>
            <ul>
              <li>20GB HDD Space</li>
              <li>10 Email Addresses</li>
              <li>5 Subdomains</li>
              <li>8 Databases</li>
              <li>Advanced Support</li>
            </ul>
            <a href="#">Choose Plan</a>
          </div>
          <div className="box">
            <div className="title">Professional</div>
            <img src="imgs/hosting-professional.png" alt="" />
            <div className="price">
              <span className="amount">$45</span>
              <span className="time">Per Month</span>
            </div>
            <ul>
              <li>50GB HDD Space</li>
              <li>20 Email Addresses</li>
              <li>10 Subdomains</li>
              <li>20 Databases</li>
              <li>Professional Support</li>
            </ul>
            <a href="#">Choose Plan</a>
          </div>
        </div>
      </div>

      <div className="videos" id="videos">
        <h2 className="main-title">Top Videos</h2>
        <div className="container">
          <div className="holder">
            <div className="list">
              <div className="name">
                Top Videos
                <i className="fas fa-random"></i>
              </div>
              <ul>
                <li>
                  How To Create Sub Domain<span>05:18</span>
                </li>
                <li>
                  Playing With The DNS <span>03:18</span>
                </li>
                <li>
                  Everything About The Virtual Hosts <span>05:25</span>
                </li>
                <li>
                  How To Monitor Your Website <span>04:16</span>
                </li>
                <li>
                  Uncharted Beating The Last Boss <span>07:48</span>
                </li>
                <li>
                  Ys Oath In Felghana Overview <span>03:12</span>
                </li>
                <li>
                  Ys Series All Games Ending <span>08:10</span>
                </li>
              </ul>
            </div>
            <div className="preview">
              <img src="imgs/video-preview.jpg" alt="" />
              <div className="info">Everything About The Virtual Hosts</div>
            </div>
          </div>
        </div>
      </div>

      <div className="stats" id="stats">
        <h2>Our Awesome Stats</h2>
        <div className="container">
          <div className="box">
            <i className="far fa-user fa-2x fa-fw"></i>
            <span className="number" data-goal="150">
              0
            </span>
            <span className="text">Clients</span>
          </div>
          <div className="box">
            <i className="fas fa-code fa-2x fa-fw"></i>
            <span className="number" data-goal="135">
              0
            </span>
            <span className="text">Projects</span>
          </div>
          <div className="box">
            <i className="fas fa-globe-asia fa-2x fa-fw"></i>
            <span className="number" data-goal="50">
              0
            </span>
            <span className="text">Countries</span>
          </div>
          <div className="box">
            <i className="far fa-money-bill-alt fa-2x fa-fw"></i>
            <span className="number" data-goal="500">
              0
            </span>
            <span className="text">Money</span>
          </div>
        </div>
      </div>

      <div className="discount" id="discount">
        <div className="image">
          <div className="content">
            <h2>We Have A Discount</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Excepturi asperiores consectetur, recusandae ratione provident
              necessitatibus, cumque delectus commodi fuga praesentium beatae.
              Totam vel similique laborum dicta aperiam odit doloribus corporis.
            </p>
            <img src="imgs/discount.png" alt="" />
          </div>
        </div>
        <div className="form">
          <div className="content">
            <h2>Request A Discount</h2>
            <form action="">
              <input
                className="input"
                type="text"
                placeholder="Your Name"
                name="name"
              />
              <input
                className="input"
                type="email"
                placeholder="Your Email"
                name="email"
              />
              <input
                className="input"
                type="text"
                placeholder="Your Phone"
                name="mobile"
              />
              <textarea
                className="input"
                placeholder="Tell Us About Your Needs"
                name="message"
              ></textarea>
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
