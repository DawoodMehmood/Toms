import React from "react";
import HeadingWithPara from "../components/headingWithPara";
import ListOfHeading from "../components/listOfHeading";

const Careers = () => {
  return (
    <>
      <div className="mx-24 my-12">
        <h1 className="flex items-center bigText">WANT TO WORK WITH US?</h1>
        <br />
        <p className="font-bold">
          Please apply to{" "}
          <a href="mailto:careers@feminadubai.com">careers@vrggrl.com</a>
        </p>
        <br />
        <p>All roles are based in Brisbane, Australia.</p>
        <br />
        <p>
          At VRG GRL, we're more than the clothes we sell. Day-in-day-out, we're
          working to inspire creativity, freedom, confidence and style.
        </p>
        <br />
        <h3 className="flex items-center justify-center">THE PERKS</h3>
        <br />
        <div className=" sm:grid grid-cols-3 gap-4">
          <ListOfHeading
            order={1}
            heading={
              <h4>
                OPPORTUNITY TO JOIN A LEADING AUSTRALIAN WOMEN'S FASHION BRAND
              </h4>
            }
          />
          <ListOfHeading
            order={2}
            heading={
              <h4>
                FLEXIBLE HOURS - WORK AROUND YOUR LIFESTYLE AND COMMITMENTS
              </h4>
            }
          />
          <ListOfHeading
            order={3}
            heading={<h4>4 DAY WORK WEEK (FULL-TIME ROLES ONLY)</h4>}
          />
          <ListOfHeading
            order={4}
            heading={
              <h4>
                OPPORTUNITY TO JOIN A LEADING AUSTRALIAN WOMEN'S FASHION BRAND
              </h4>
            }
          />
          <ListOfHeading
            order={5}
            heading={
              <h4>
                FLEXIBLE HOURS - WORK AROUND YOUR LIFESTYLE AND COMMITMENTS
              </h4>
            }
          />
          <ListOfHeading
            order={6}
            heading={<h4>4 DAY WORK WEEK (FULL-TIME ROLES ONLY)</h4>}
          />
        </div>
        <br />
        <HeadingWithPara
          heading={<p>PRODUCTION AND DESIGN ASSISTANT</p>}
          content={
            <p>
              VRG GRL is looking for a Production and Design Assistant to join
              our growing Brisbane based team. As a Production and Design
              Assistant, you will play a crucial role in supporting both the
              Production and Design teams to ensure the seamless creation and
              delivery of high-quality fashion products. This role requires a
              combination of creativity, organisation, and attention to detail,
              as well as excellent communication and multitasking skills.
            </p>
          }
        />
        <HeadingWithPara
          heading={<p>ROLE RESPONSIBILITES: </p>}
          content={
            <ul className="mx-4">
              <li>
                Raise purchase orders when directed making sure all information
                is carried across all platforms correctly
              </li>
              <li>
                Help the Design and Production Team execute tasks such as
                updating CAD’s, helping to send fit comments, updating specs.
              </li>
              <li>
                Work closely with other Design/Production team members across
                tasks delegated
              </li>
              <li>
                Cross checking and updating information in creative schedule/
                tracker and Shopify to make sure RRP’s etc are correct before
                release dates
              </li>
              <li>
                Administration support; updating all platforms where needed to
                ensure all information is up to date
              </li>
              <li>Complete any ADHOC tasks given</li>
            </ul>
          }
        />
        <HeadingWithPara
          heading={<p>ABOUT YOU: </p>}
          content={
            <ul className="mx-4">
              <li>Creative, open minded and adaptable to change </li>
              <li>You are detail focused</li>
              <li>You are highly organised </li>
              <li>You can work in a fast paced environment</li>
              <li>You can Problem Solve</li>
              <li>Have a Diploma/Degree in Fashion</li>
            </ul>
          }
        />
        <div className="my-6">
          If this sounds like you, please apply
          <strong>
            {" "}
            <a href="#">via SEEK here.</a>
          </strong>
        </div>
      </div>
    </>
  );
};

export default Careers;
