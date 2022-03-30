import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1">
            <h3 className="text-3xl font-bold">About</h3>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod, urna eu tincidunt tincidunt, nisi nisl aliquam nunc, eget
              malesuada nunc nisl eu ipsum.
            </p>
          </div>
          <div className="flex-1 mt-8 lg:mt-0">
            <h3 className="text-3xl font-bold">Contact</h3>
            <ul className="mt-4">
              <li>
                <a href="mailto:lucas_haya@hotmail.com">Email</a>
              </li>
              <li>
                <a href="tel:+55 11 9 7885-1547">Phone</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
