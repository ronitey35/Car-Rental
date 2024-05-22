import { IconMail, IconPhoneCall } from "@tabler/icons-react";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                <span>CAR</span> Rental
              </li>
              <li>
                We offers a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs.
              </li>
              <li>
                <a href="tel:98477878246724">
                  <IconPhoneCall /> &nbsp; (+977) 9867843767
                </a>
              </li>

              <li>
                <a
                  href="mailto: 
                carrental00@gmail.com"
                >
                  <IconMail />
                  &nbsp; carrental00@gmail.com
                </a>
              </li>

              <li>
                <a
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    display: "flex ",
                    alignItems: "center",
                    gap: "6px",
                  }}
                  target="_blank"
                  rel=""
                  href="/"
                >
                  Design by{" "}
                  <a
                    style={{
                      fontSize: "20px",
                      fontWeight: "800",
                    }}
                    href="https://github.com/ronitey35"
                  >
                    Ronitey35
                  </a>
                </a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Company</li>
              <li>
                <a href="#home">Nepal</a>
              </li>
              <li>
                <a href="#home">Careers</a>
              </li>
              <li>
                <a href="#home">Mobile</a>
              </li>
              <li>
                <a href="#home">Blog</a>
              </li>
              <li>
                <a href="#home">How we work</a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Working Hours</li>
              <li>Sun - Fri: 10:00AM - 4:00PM</li>
              <li>Sat: Closed</li>
            </ul>

            <ul className="footer-content__2">
              <li>Subscription</li>
              <li>
                <p>Subscribe your Email address for latest news & updates.</p>
              </li>
              <li>
                <input type="email" placeholder="Enter Email Address"></input>
              </li>
              <li>
                <button className="submit-email">Submit</button>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
