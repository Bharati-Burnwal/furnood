import { useLocation } from "react-router-dom";
import './css/innerbanner.css';
import { Link } from "react-router-dom";

const Innerbanner = () => {
  const location = useLocation();

  // Get the last part of the URL
  /**
   * Generates a formatted page title based on the current URL path.
   *
   * Splits the pathname by "/", filters out empty segments, and processes the last segment.
   * Decodes URL-encoded characters, replaces hyphens with spaces, and capitalizes each word.
   *
   * @returns {string} The formatted page title (e.g., "Contact Us" for "/contact-us").
   */
  const getpagetitle = () => {
    const path = location.pathname.split("/").filter(Boolean);
    const lastPart = path[path.length - 1]
    const decodedPart = decodeURIComponent(lastPart.replace(/%20/g, " ")); // Decode URL-encoded characters an
    // d replace %20 with space
    const word = decodedPart.split("-").map((e) => e.charAt(0).toUpperCase() + e.slice(1));
    console.log('path:', path);
    console.log('word:', word);
    console.log('lastpart =', lastPart);

    return word.join(" ");

    //Yaha location : http://localhost:3000/contact-us
    //location.pathname : /contact-us
    //.split("/") : [' ', conatct-us]
    //.filter(boolean) : blank ko remove kar rha
    //Then finally path  = [contact-us] 

    //Ab array m

    //path.split("-") : ["contact", "us"]
    //charAt(0) : contact ka letter index 0 = c and us ka 0 = u
    //toUpperCase = C & U
    // .slice(1) = contact ka baki 1 index s.
    //word = Contact , us
    //word.join = Contact Us
  };

  return (
    <div className="inner-banner">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mx-auto">
            <h2 className="mb-3 text-center">{getpagetitle()}</h2>
        <nav aria-label="breadcrumb">
          <ul className="breadcrumb d-flex justify-content-center">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
             {getpagetitle()}
            </li>
          </ul>
        </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Innerbanner;
