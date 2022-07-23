import React, { useCallback, useState } from "react";

import { GoogleReCaptcha } from "react-google-recaptcha-v3";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [state, setState] = useState({});
  const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);


  const onVerify = useCallback((token) => {
    setState({...state, captcha: token});
  }, []);

  return (
    <section className="pb-10">
      <div className="flex flex-wrap md:px-4">
        <form className="p-8 md:mx-4 bg-white rounded-md shadow-md" onSubmit={async (event) => {
                    event.preventDefault();

                    try {
                      const response = await fetch(process.env.REACT_APP_CONTACT_URL, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ ...state })
                      });
                      if (response.status !== 200) {
                        // show error
                        toast.error("Could not send contact formular.", {
                          position: toast.POSITION.TOP_RIGHT
                        });
                      } else {
                        toast.success("Contact formular was successfully sent.");
                        setState({
                          name: '',
                          email: '',
                          subject: '',
                          message: ''
                        });
                        setRefreshReCaptcha(r => !r);
                      } 
                    } catch (err) {
                      toast.error("An error occurred.", {
                        position: toast.POSITION.TOP_RIGHT
                      });
                    }
                    
                                       
                  }}>
          <div className="m-3">
            <h3 className="text-2xl text-gray-800 font-bold mb-6">
              Get in Touch
            </h3>
          </div>
          <div className="w-full flex flex-wrap">
            <div className="w-full md:w-1/2">
              <div className="m-3">
                <input
                  type="text"
                  name="name"
                  value={state.name}
                  placeholder="Your Name"
                  required
                  className="w-full border border-gray-100 rounded py-4 px-6 text-sm bg-white"
                  onChange={(event) => setState({...state, name: event.target.value})}
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="m-3">
                <input
                  type="email"
                  name="email"
                  value={state.email}
                  required
                  placeholder="Your Email"
                  className="w-full border border-gray-100 rounded py-4 px-6 text-sm bg-white"
                  onChange={(event) => setState({...state, email: event.target.value})}
                />
              </div>
            </div>
            <div className="w-full">
              <div className="m-3">
                <input
                  type="text"
                  name="subject"
                  value={state.subject}
                  required
                  placeholder="Subject"
                  className="w-full border border-gray-100 rounded py-4 px-6 text-sm bg-white"
                  onChange={(event) => setState({...state, subject: event.target.value})}
                />
              </div>
            </div>
            <div className="w-full">
              <div className="m-3">
                <textarea
                  name="message"
                  value={state.message}
                  required
                  placeholder="Your Message"
                  rows="6"
                  className="w-full border border-gray-100 rounded py-4 px-6 text-sm bg-white"
                  onChange={(event) => setState({...state, message: event.target.value})}
                />
              </div>
            </div>
            <div>
            
            </div>
            <div className="w-full">
              <div className="m-3">
                <GoogleReCaptcha onVerify={onVerify} refreshReCaptcha={refreshReCaptcha} />
              </div>
              <div className="m-3 text-right">
                <input
                  type="submit"
                  value="Send Message"
                  className="rounded bg-purple-600 text-center border-0 py-3 px-6 text-white leading-7 tracking-wide hover:bg-purple-800 cursor-pointer"
                />
              </div>
            </div>
          </div>
          <ToastContainer />
        </form>
      </div>
    </section>
  );
};

export default Contact;
