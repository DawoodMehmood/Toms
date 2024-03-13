import React, { useState } from "react";

const SizeChart = () => {
  const [activeTab, setActiveTab] = useState("cm");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <div className="mx-44 my-12">
        <h1 className=" bigText">SIZING CHART</h1>
        <br />
        <p className="small-size">
          The clothing at VRG GRL is true to Australian size standards and all
          sizes are in AUS sizes, but please keep in mind that every brand and
          style will vary in size/fit. We try to specify if an item runs true,
          large or small in the product description.
        </p>
        <p className="small-size">
          Our models generally wear a size 8 throughout the images in our online
          store but the size worn by the model is specified in each product
          description.
        </p>
        <br />
        <p className="small-size">
          If you have any questions regarding your size selection, please feel
          free to ask our chat for advice or measurements.
        </p>
        <br />
        <br />
        <p className="font-bold">APPAREL SIZE GUIDE</p>
        <br />
        <div id="sizing" class="container my-5">
          <div className="row">
            <div className="col-span-12">
              <div className="size-guide__content">
                <ul
                  className="flex border-b border-black gap-4 my-5"
                  id="sizeGuideTabs"
                  role="tablist"
                >
                  <li className="flex">
                    <button
                      className={`nav-link ${
                        activeTab === "cm" ? "bg-banner" : ""
                      } border-t border-r border-l border-black px-4 py-2`}
                      id="cm-tab"
                      onClick={() => handleTabClick("cm")}
                      type="button"
                      role="tab"
                      aria-controls="cm"
                      aria-selected={activeTab === "cm" ? "true" : "false"}
                    >
                      cm
                    </button>
                  </li>
                  <li className="flex">
                    <button
                      className={`nav-link ${
                        activeTab === "inch" ? "bg-banner" : ""
                      } border-t border-r border-l border-black px-4 py-2`}
                      id="inch-tab"
                      onClick={() => handleTabClick("inch")}
                      type="button"
                      role="tab"
                      aria-controls="inch"
                      aria-selected={activeTab === "inch" ? "true" : "false"}
                    >
                      inches
                    </button>
                  </li>
                </ul>

                <div className="tab-content" id="sizeGuideTabContent">
                  <div
                    className={`tab-pane fade ${
                      activeTab === "cm" ? "show active" : "hidden"
                    }`}
                    id="cm"
                    role="tabpanel"
                    aria-labelledby="cm-tab"
                  >
                    {/* Content for cm tab */}
                    <div className="size-guide__table text-center grid grid-cols-1 md:grid-cols-2">
                      <table className="table">
                        <thead>
                          <tr className="bg-banner">
                            <th>SIZES</th>
                            <th>AUS</th>
                            <th>US</th>
                            <th>UK</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>XXS</td>
                            <td>4</td>
                            <td>0</td>
                            <td>4</td>
                          </tr>
                          <tr>
                            <td>XS</td>
                            <td>6</td>
                            <td>2</td>
                            <td>6</td>
                          </tr>
                          <tr>
                            <td>S</td>
                            <td>8</td>
                            <td>4</td>
                            <td>8</td>
                          </tr>
                          <tr>
                            <td>M</td>
                            <td>12</td>
                            <td>8</td>
                            <td>12</td>
                          </tr>
                          <tr>
                            <td>L</td>
                            <td>14</td>
                            <td>10</td>
                            <td>14</td>
                          </tr>
                          <tr>
                            <td>XL</td>
                            <td>16</td>
                            <td>12</td>
                            <td>16</td>
                          </tr>
                          <tr>
                            <td>XXL</td>
                            <td>18</td>
                            <td>14</td>
                            <td>18</td>
                          </tr>
                        </tbody>
                      </table>
                      <table className="table">
                        <thead>
                          <tr className="bg-banner">
                            <th>SIZES</th>
                            <th>BUST</th>
                            <th>WAIST</th>
                            <th>HIPS</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>XXS</td>
                            <td>75</td>
                            <td>58</td>
                            <td>85</td>
                          </tr>
                          <tr>
                            <td>XS</td>
                            <td>80</td>
                            <td>63</td>
                            <td>90</td>
                          </tr>
                          <tr>
                            <td>S</td>
                            <td>85</td>
                            <td>68</td>
                            <td>95</td>
                          </tr>
                          <tr>
                            <td>M</td>
                            <td>90</td>
                            <td>73</td>
                            <td>100</td>
                          </tr>
                          <tr>
                            <td>L</td>
                            <td>95</td>
                            <td>78</td>
                            <td>105</td>
                          </tr>
                          <tr>
                            <td>XL</td>
                            <td>100</td>
                            <td>83</td>
                            <td>110</td>
                          </tr>
                          <tr>
                            <td>XXL</td>
                            <td>105</td>
                            <td>87</td>
                            <td>115</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div
                    className={`tab-pane fade ${
                      activeTab === "inch" ? "show active" : "hidden"
                    }`}
                    id="inch"
                    role="tabpanel"
                    aria-labelledby="inch-tab"
                  >
                    {/* Content for inches tab */}
                    <div className="size-guide__table text-center grid grid-cols-1 md:grid-cols-2">
                      <table className="table">
                        <thead>
                          <tr className="bg-banner">
                            <th>SIZES</th>
                            <th>AUS</th>
                            <th>US</th>
                            <th>UK</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>XXS</td>
                            <td>4</td>
                            <td>0</td>
                            <td>4</td>
                          </tr>
                          <tr>
                            <td>XS</td>
                            <td>6</td>
                            <td>2</td>
                            <td>6</td>
                          </tr>
                          <tr>
                            <td>S</td>
                            <td>8</td>
                            <td>4</td>
                            <td>8</td>
                          </tr>
                          <tr>
                            <td>M</td>
                            <td>12</td>
                            <td>8</td>
                            <td>12</td>
                          </tr>
                          <tr>
                            <td>L</td>
                            <td>14</td>
                            <td>10</td>
                            <td>14</td>
                          </tr>
                          <tr>
                            <td>XL</td>
                            <td>16</td>
                            <td>12</td>
                            <td>16</td>
                          </tr>
                          <tr>
                            <td>XXL</td>
                            <td>18</td>
                            <td>14</td>
                            <td>18</td>
                          </tr>
                        </tbody>
                      </table>
                      <table className="table">
                        <thead>
                          <tr className="bg-banner">
                            <th>SIZES</th>
                            <th>BUST</th>
                            <th>WAIST</th>
                            <th>HIPS</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>XXS</td>
                            <td>90</td>
                            <td>58</td>
                            <td>85</td>
                          </tr>
                          <tr>
                            <td>XS</td>
                            <td>80</td>
                            <td>63</td>
                            <td>90</td>
                          </tr>
                          <tr>
                            <td>S</td>
                            <td>85</td>
                            <td>68</td>
                            <td>95</td>
                          </tr>
                          <tr>
                            <td>M</td>
                            <td>90</td>
                            <td>73</td>
                            <td>100</td>
                          </tr>
                          <tr>
                            <td>L</td>
                            <td>95</td>
                            <td>78</td>
                            <td>105</td>
                          </tr>
                          <tr>
                            <td>XL</td>
                            <td>100</td>
                            <td>83</td>
                            <td>110</td>
                          </tr>
                          <tr>
                            <td>XXL</td>
                            <td>105</td>
                            <td>87</td>
                            <td>115</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-5">
            <p className="font-bold">SHOE CONVERSION SIZE GUIDE</p>
            <div className="flex flex-col flex-row mt-5">
              <div className="w-full md:w-1/2 ">
                <div className="size-guide__half-table">
                  <table className="w-full text-center table">
                    <thead>
                      <tr className="bg-banner">
                        <th>AUS/US</th>
                        <th>EUR</th>
                        <th>UK</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>4</td>
                        <td>35</td>
                        <td>2</td>
                      </tr>
                      <tr>
                        <td>4.5</td>
                        <td>35.5</td>
                        <td>2.5</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>36</td>
                        <td>3</td>
                      </tr>
                      <tr>
                        <td>5.5</td>
                        <td>36.5</td>
                        <td>3.5</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>37</td>
                        <td>4</td>
                      </tr>
                      <tr>
                        <td>6.5</td>
                        <td>37.5</td>
                        <td>4.5</td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>38</td>
                        <td>5</td>
                      </tr>
                      <tr>
                        <td>7.5</td>
                        <td>38.5</td>
                        <td>5.5</td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>39</td>
                        <td>6</td>
                      </tr>
                      <tr>
                        <td>8.5</td>
                        <td>39.5</td>
                        <td>6.5</td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>40</td>
                        <td>7</td>
                      </tr>
                      <tr>
                        <td>9.5</td>
                        <td>40.5</td>
                        <td>7.5</td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>41</td>
                        <td>8</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    </>
  );
};

export default SizeChart;
