import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="grid md:grid-cols-6 footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
        <aside className="md:col-span-2">
          <h2 className="text-2xl font-semibold">CS — Ticket System</h2>

          <p className="mt-2 text-sm text-gray-400">
            A centralized customer support ticket management system designed to
            help teams track, manage, and resolve customer issues efficiently.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover text-sm text-gray-400">About us</a>
          <a className="link link-hover text-sm text-gray-400">Our Mission</a>
          <a className="link link-hover text-sm text-gray-400">Contact Saled</a>
        </nav>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover text-sm text-gray-400">
            Products & Services
          </a>
          <a className="link link-hover text-sm text-gray-400">
            Customer Stories
          </a>
          <a className="link link-hover text-sm text-gray-400">Download Apps</a>
        </nav>
        <nav>
          <h6 className="footer-title">Information</h6>
          <a className="link link-hover text-sm text-gray-400">
            Privacy Policy
          </a>
          <a className="link link-hover text-sm text-gray-400">
            Terms & Conditions
          </a>
          <a className="link link-hover text-sm text-gray-400">Join US</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social Links</h6>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.54a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.95v5.66H9.33V9h3.42v1.56h.05c.48-.9 1.65-1.85 3.39-1.85 3.63 0 4.3 2.39 4.3 5.49v6.25z" />
              </svg>
            </a>
          </div>
        </nav>
      </footer>
      <hr className="border-t-2" />
      <footer className="footer sm:footer-horizontal footer-center bg-neutral text-neutral-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} CS — Ticket System. All
            rights reserved.
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
