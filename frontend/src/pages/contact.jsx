import React from "react";


const Contact = () => {
  return (
    <>
      <div className="mx-44 my-12">
        <h1 className=" bigText">GET IN TOUCH</h1>
        <br />
        <p className="font-bold">
          HAVE A QUESTION? GET IN TOUCH WITH OUR TEAM VIA OUR CONTACT FORM
          BELOW.
        </p>
        <br />
        <p>
          E: <a href="mailto:info@vrggrl.com">info@vrggrl.com</a>
        </p>
        <p>
          PH: <a href="Tel:+61730634242">+61 7 3063 4242</a>
        </p>
        <p>9am-4pm AEST Mon-Fri</p>
        <br />
        <p>
          For all enquiries, please submit a contact form and we will endeavour
          to get back to you within 24 hours.
        </p>
        <br />
        <p className="font-bold">TELL US WHAT YOU THINK</p>
        <br />
        <hr />
        <br />
        <form className="max-w mx-auto px-5">
          <div className="mb-3 ">
            <label htmlFor="fullName" className="block text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter your full name"
              required
              className="form-input border border-gray-300 rounded-md px-4 py-2 mt-1 block w-full"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              className="form-input border border-gray-300 rounded-md px-4 py-2 mt-1 block w-full"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="subject" className="block text-gray-700">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Enter the subject"
              required
              className="form-input border border-gray-300 rounded-md px-4 py-2 mt-1 block w-full"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="block text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Enter your message"
              required
              className="form-textarea border border-gray-300 rounded-md px-4 py-2 mt-1 block w-full"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="attachFile" className="block text-gray-700">
              Attach File
            </label>
            <input
              type="file"
              id="attachFile"
              multiple
              accept=".jpg, .jpeg, .png, .pdf"
              aria-describedby="fileHelp"
              required
              className="form-input border border-gray-300 rounded-md px-4 py-2 mt-1 block w-full"
            />
            <div id="fileHelp" className="text-sm text-gray-500">
              Attach up to 10 files. Max file size: 20 MB.
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-black hover:bg-darkGrey text-white font-bold py-2 px-4 rounded-md w-full "
            >
              Send
            </button>
          </div>
        </form>
        <br />
        <div className="w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14486.184647670671!2d55.263797075099415!3d25.27698749839649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f692c299d70cf%3A0x130dfa067508f4e3!2sDubai%2C%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1644520320005!5m2!1sen!2sus"
        title="Google Map"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
      </div>
    </>
  );
};

export default Contact;
