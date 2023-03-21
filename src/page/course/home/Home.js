import axios from "axios";
import React, { useEffect, useState } from "react";
import { Loader } from "rsuite";
import "./home.css";

const Home = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [greeting, setGreeting] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");

  useEffect(() => {
    // Get the current hour to determine the greeting
    const now = new Date();
    const hour = now.getHours();

    let newGreeting = "";
    if (hour < 12) {
      newGreeting = "Good morning";
    } else if (hour < 18) {
      newGreeting = "Good afternoon";
    } else {
      newGreeting = "Good evening";
    }

    setGreeting(newGreeting);

    // Fetch a new quote every minute
    const interval = setInterval(() => {
      axios
        .get("https://type.fit/api/quotes")
        .then((response) => {
          const quotesArray = response.data;
          const randomQuote =
            quotesArray[Math.floor(Math.random() * quotesArray.length)];
          setQuote(randomQuote.text);
          setAuthor(randomQuote.author);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Fetch a random avatar for the user
    axios
      .get("https://randomuser.me/api/")
      .then((response) => {
        const avatarUrl = response.data.results[0].picture.large;
        setAvatarUrl(avatarUrl);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {quote === "" ? (
        <div className="loading_home_container">
          <Loader size="lg" content="Loading..." />
        </div>
      ) : (
        <div className="home_container">
          <div className="home_container_inside">
            <>
              <section className="quote_container_outer">
                <section>
                  <img
                    src="https://i.imgur.com/VSPqNiS.png"
                    alt="comimg"
                    width="400px"
                  />
                </section>
                <h4 style={{ color: "blue" }}>
                  {greeting}, welcome to our website!
                </h4>
                <div className="quote_container">
                  <div>
                    {avatarUrl && <img src={avatarUrl} alt="User avatar" />}
                    {author && <p>- {author}</p>}
                  </div>
                  <p style={{ color: "gray" }}>{quote}</p>
                </div>
              </section>
            </>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
