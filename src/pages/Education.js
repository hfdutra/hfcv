import '../assets/scss/_Education.scss';

function Education() {
  return (
    <section id="Education" class="ps-timeline-sec">

      <div className="container">
        <div className="block-title">
          <h4 className="accent">Education</h4>
          <h2>What I’ve Learned</h2>
        </div>
        <div className="edu">
          <ol className="ps-timeline">
            <li>
              <div className="img-handler-top">
                <img src="./assets/images/cp2.png" alt="" />
              </div>
              <div className="ps-bot">
                <p>High School</p>
              </div>
              <span className="ps-sp-top">2008 <br />2010 </span>
            </li>
            <li>
              <div className="img-handler-top">
                <img src="./assets/images/seven.svg" alt="" />
              </div>
              <div className="ps-bot">
                <p>Graphic and Web Design School</p>
              </div>
              <span className="ps-sp-top">2009 <br />2012 </span>
            </li>
            <li>
              <div className="img-handler-top">
                <img src="./assets/images/gama.png" alt="" />
              </div>
              <div className="ps-bot">
                <p>Marketing University</p>
              </div>
              <span className="ps-sp-top">2010 <br />2013 </span>
            </li>
            <li>
              <div className="img-handler-top">
                <img src="./assets/images/unigranrio.png" alt="" />
              </div>
              <div className="ps-bot">
                <p>MBA - Business Management</p>
              </div>
              <span className="ps-sp-top">2013 <br />2015 </span>
            </li>
          </ol>
        </div>
      </div>
    </section>

  )
}

export default Education