import React, { Fragment, useState } from "react";
import "./AboutUsHeroSection.css";

const AboutUs = () => {
  const [toggleTab, setToggleTab] = useState(1);
  const toggleState = (index) => {
    setToggleTab(index);
  };

  return (
    <Fragment>
      <section className="about">
        <h1 className="abHead">About AstroWorld</h1>
        <div className="row">
          <div className="column">
            <div className="tabs">
              <div
                className={
                  toggleTab === 1 ? "single-tab active-tab" : "single-tab"
                }
                onClick={() => toggleState(1)}
              >
                <h2>ჩვენ შესახებ</h2>
              </div>

              <div
                className={
                  toggleTab === 2 ? "single-tab active-tab" : "single-tab"
                }
                onClick={() => toggleState(2)}
              >
                <h2>მიზნები</h2>
              </div>

              <div
                className={
                  toggleTab === 3 ? "single-tab active-tab" : "single-tab"
                }
                onClick={() => toggleState(3)}
              >
                <h2>კონტაქტი</h2>
              </div>

              <div
                className={
                  toggleTab === 4 ? "single-tab active-tab" : "single-tab"
                }
                onClick={() => toggleState(4)}
              >
                <h2>ჩვენი გუნდი</h2>
              </div>
            </div>

            <div className="tab-content">
              {/*1*/}

              <div
                className={
                  toggleTab === 1 ? "content active-content" : "content"
                }
              >
                <h2>ჩვენ შესახებ</h2>
                <p>
                  "AstroWorld" არის საგანმანათებლო ვებ პორტალი, სადაც
                  მომხმარებელს აქვს შესაძლებლობა შეისწავლოს ასტრონომიის
                  საფუძვლები და გაეცნოს უახლეს ამბებს ამ სფეროში. მსგავსი
                  პორტალის შექმნის იდეა ჯგუფის წევრებს გაგვიჩნდა, როდესაც
                  ინფორმაციის მოძიებისას აღმოვაჩინეთ, რომ ქართულ ენაზე არის
                  წყაროების არასაკმარისი რაოდენობა. ამას დამატებული ის, რომ
                  ინტერნეტ სივრცეში ეს ინფორმაციები მიმოფანტულია და
                  დაინტერესებული პირები არ არიან დარწმუნებული მოძიებული
                  მასალების სანდოობაში. პროექტზე მუშაობის პროცესში მაქსიმალურად
                  ვეცადეთ ამ პრობლემების გადაჭრა.
                </p>
                <h3>ვისთვისაა განკუთვნილი ჩვენი პროექტი</h3>
                <p>
                  "AstroWorld" გათვლილია ნებისმიერი ასაკისა თუ ცოდნის მქონე
                  ადამიანზე. მთავარი მხოლოდ ისაა, რომ გაგაჩნდეთ ასტრონომიის
                  მიმართ ინტერესი.
                </p>
              </div>

              {/*2*/}

              <div
                className={
                  toggleTab === 2 ? "content active-content" : "content"
                }
              >
                <h2>მიზნები</h2>
                <p>
                  ჩვენი დაკვირვებით, ასტრონომიის მიმართ დიდი ინტერესი არსებობს
                  საზოგადოებაში, განსაკუთრებით კი ბავშვებსა და მოზარდებში.
                  შესაბამისად, აუცილებელია არსებობდეს რაიმე საგანმანათლებლო
                  სისტემა, რომლის საშუალებითაც ეს პირები შეძლებენ სასურველი
                  ინფორმაციის მოძიებასა და ათვისებას მარტივად და ეფექტურად.
                </p>
                <h3>შედეგი</h3>
                <p>
                  ამ პროექტის მეშვეობით ხელმისაწვდომი იქნება ქართულ ენაზე
                  მრავალი ინფორმაცია მეცნიერების ამ განხრაში. მაქსიმალურად
                  ვეცდებით, რომ ჩვენი მიდგომებითა და სტრატეგიებით გავაუმჯობესოთ
                  სწავლის ხარისხი ასტრონომიაში და ამასთან ერთად, დაინტერესებულ
                  პირებს კიდევ უფრო მეტი მოტივაცია მივცეთ.
                </p>
              </div>

              <div
                className={
                  toggleTab === 3 ? "content active-content" : "content"
                }
              >
                <h2>კონტაქტი</h2>
                <p>
                  ჩვენი ელექტრონული ფოსტა : _______ <br></br>
                  <br></br>სურვილის შემთხვევაში, შეგიძლიათ დაგვიკავშირდეთ ცხელ
                  ხაზზე : _______
                  <br></br>
                  <br></br>
                  ფეისბუქ ჯგუფი : ________
                </p>
                <p></p>
              </div>

              <div
                className={
                  toggleTab === 4 ? "content active-content" : "content"
                }
              >
                <h2>ჩვენი გუნდი</h2>
                <p>
                  გუნდის წევრები : ანა გულორდავა, გიორგი ბარიშვილი, ემზარ
                  ლუკავა, ნიკოლოზ ჩაიკა. <br></br>
                  <br></br>
                  <br></br>
                  ------------------------------------------<br></br>
                  ------------------------------------------<br></br>
                  ------------------------------------------<br></br>
                  ------------------------------------------<br></br>
                  ------------------------------------------<br></br>
                  ------------------------------------------<br></br>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default AboutUs;
