import data from "../../data/index.json";

export default function MyPortfolio() {
  const openLink = () => {
    // Replace 'https://example.com' with your desired URL
    window.open("https://github.com/Devanshudd", "_blank");
  };
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Recent Projects</p>
          <h2 className="section--heading">My Portfolio</h2>
        </div>
        <div>
          <button className="btn btn-github" onClick={openLink}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="bi bi-github"
            >
              <path
                fill-rule="evenodd"
                d="M8.066 0.533c-4.438 0-8.066 3.628-8.066 8.066 0 3.575 2.323 6.606 5.547 7.692 0.404 0.074 0.551-0.176 0.551-0.39 0-0.192-0.007-0.699-0.011-1.372-2.25 0.488-2.724-1.084-2.724-1.084-0.369-0.937-0.902-1.187-0.902-1.187-0.738-0.504 0.055-0.493 0.055-0.493 0.814 0.057 1.24 0.837 1.24 0.837 0.721 1.236 1.891 0.879 2.357 0.671 0.074-0.523 0.284-0.879 0.516-1.080-1.807-0.206-3.706-0.903-3.706-3.997 0-0.883 0.317-1.607 0.836-2.175-0.083-0.205-0.362-1.028 0.079-2.139 0 0 0.68-0.218 2.229 0.828 0.648-0.179 1.338-0.269 2.028-0.273 0.688 0.005 1.38 0.095 2.028 0.273 1.548-1.046 2.228-0.828 2.228-0.828 0.442 1.111 0.163 1.934 0.08 2.139 0.519 0.568 0.835 1.292 0.835 2.175 0 3.099-1.901 3.79-3.714 3.991 0.293 0.25 0.553 0.744 0.553 1.496 0 1.080-0.011 1.951-0.011 2.211 0 0.217 0.146 0.466 0.557 0.39 3.227-1.086 5.547-4.117 5.547-7.692 0-4.438-3.628-8.066-8.066-8.066z"
              ></path>
            </svg>
            Visit My GitHub
          </button>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              <div className="text-sm portfolio--link">
                <div className="left-link">
                  {item.link}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 20 19"
                    fill="none"
                  >
                    <a href={item.href}>
                      <path
                        d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                        stroke="currentColor"
                        stroke-width="2.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </a>
                  </svg>
                </div>
                &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                <div className="right-link">
                  {item.link1}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 20 19"
                    fill="none"
                  >
                    <a href={item.href1}>
                      <path
                        d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                        stroke="currentColor"
                        stroke-width="2.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </a>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
