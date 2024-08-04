// import { payment } from "../assets";
import Container from "./Container";
import FooterTop from "./FooterTop";
import { crestmart } from "../assets";


const Footer = () => {
  return (
    <div className="mt-4">
      <div className="w-full h-[1px] bg-gray-200 mt-16" />
      <Container className="flex flex-col-1 md:flex-row items-center gap-4 justify-between">
        <footer className="bg-white">
          <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
            <div className="mx-auto max-w-md">
              <strong className="block text-center text-xl font-bold text-gray-900 sm:text-3xl">
                "Join our newsletter for the latest deals!"
              </strong>

              <form className="mt-6">
                <div className="relative max-w-lg">
                  <label className="sr-only" htmlFor="email"> Email </label>

                  <input
                    className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
                    id="email"
                    type="email"
                    placeholder="example@.com"
                  />

                  <button
                    className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

              <div>
                <div className="text-teal-600">
                  <img className="w-full h-auto max-w-xs lg:max-w-md" src={crestmart} alt="Logo" />
                </div>

                <p className="mt-4 max-w-xs text-gray-500">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non cupiditate quae nam
                  molestias.
                </p>

                <ul className="mt-8 flex gap-6">
                  <li>
                    <a
                      href="#"
                      rel="noreferrer"
                      target="_blank"
                      className="hover:text-gray-700 transition text-blue-700"
                    >
                      <span className="sr-only">Facebook</span>

                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      rel="noreferrer"
                      target="_blank"
                      className="hover:text-gray-700 transition text-pink-700"
                    >
                      <span className="sr-only">Instagram</span>

                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      rel="noreferrer"
                      target="_blank"
                      className="text-black transition hover:text-gray-700"
                    >
                      <span className="sr-only">Twitter</span>

                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M18.364 5.636L12 12m0 0l-6.364 6.364M12 12l6.364 6.364M12 12L5.636 5.636" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>


                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      rel="noreferrer"
                      target="_blank"
                      className="hover:text-gray-700 transition text-black"
                    >
                      <span className="sr-only">GitHub</span>

                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      className="hover:text-gray-700 transition text-blue-900"
                      href="#"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="sr-only"> LinkedIn </span>

                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.33 19h-3v-10.67h3v10.67zm-1.5-12.25c-.96 0-1.75-.79-1.75-1.75s.79-1.75 1.75-1.75 1.75.79 1.75 1.75-.79 1.75-1.75 1.75zm12.75 12.25h-3v-5.33c0-1.27-.02-2.89-1.76-2.89-1.76 0-2.03 1.38-2.03 2.8v5.42h-3v-10.67h2.88v1.45h.04c.4-.76 1.37-1.56 2.82-1.56 3.02 0 3.58 1.99 3.58 4.58v6.19z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
                <div>
                  <p className="font-medium text-gray-900">Consumer Policy</p>

                  <ul className="mt-6 space-y-4 text-sm">
                    <li>
                      <a href="#" className="text-gray-700 transition hover:opacity-75"> Terms and Conditions </a>
                    </li>

                    <li>
                      <a href="#" className="text-gray-700 transition hover:opacity-75"> Privacy Policy </a>
                    </li>

                    <li>
                      <a href="#" className="text-gray-700 transition hover:opacity-75"> Cancellation and Refunds </a>
                    </li>

                    <li>
                      <a href="#" className="text-gray-700 transition hover:opacity-75"> Term of Use </a>
                    </li>


                  </ul>
                </div>

                <div>
                  <p className="font-medium text-gray-900">Helpful Links</p>

                  <ul className="mt-6 space-y-4 text-sm">
                    <li>
                      <a href="/profile" className="text-gray-700 transition hover:opacity-75"> My Account </a>
                    </li>

                    <li>
                      <a href="/cart" className="text-gray-700 transition hover:opacity-75"> Cart </a>
                    </li>

                    <li>
                      <a href="/favorite" className="text-gray-700 transition hover:opacity-75"> Favourites </a>
                    </li>
                    <li>
                      <a href="/orders" className="text-gray-700 transition hover:opacity-75"> Order Status </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-medium text-gray-900">Support</p>

                  <ul className="mt-6 space-y-4 text-sm">
                    <li>
                      <a href="/" className="text-gray-700 transition hover:opacity-75"> About US </a>
                    </li>

                    <li>
                      <a href="/" className="text-gray-700 transition hover:opacity-75"> FAQs </a>
                    </li>


                  </ul>
                </div>

                <div>
                  <p className="font-medium text-gray-900">Contact Us</p>

                  <ul className="mt-6 space-y-4 text-sm">
                    <li>
                      <p className="text-gray-700 transition"> <strong>Office Address: </strong> Lorem ipsum dolor sit amet.</p>
                    </li>

                    <li>
                      <p className="text-gray-700 transition"> <strong>Contact Number: </strong> 7767915227 </p>
                    </li>

                    <li>
                      <p className="text-gray-700 transition"> <strong>Email Address: </strong> chetanpatil07171@gmail.com</p>
                    </li>

                  </ul>
                </div>
              </div>
            </div>

            <FooterTop />
            <div className="mt-0 border-t border-gray-100 pt-10 pb-0">
              <p className="text-center text-xs/relaxed text-gray-500 font-medium">
                © Company 2024. All rights reserved.
                <br />
              </p>
            </div>
          </div>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;





