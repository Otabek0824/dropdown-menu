import { useState } from "react";
import { AnimatePresence, easeOut, motion } from "framer-motion";

const Props = () => {
  return (
    <div className="bg-[url('/bg-img.jpg')] bg-cover h-[100vh] w-full">
      <div className="container mx-auto">
        <header className="flex py-2 justify-between items-center">
          <div className="logo">
            <img
              className="h-[60px] w-[140px] cursor-pointer"
              src="/logo.png"
              alt="img"
            />
          </div>
          <nav className="flex justify-between items-center">
            <FlyoutLink FlyoutContent={PricingContent2} href="#">
              <a className="hover:bg-gray-300 px-[16px] py-[10px]" href="#">
                vehicles
              </a>
            </FlyoutLink>
            <FlyoutLink1 FlyoutContent={PricingContent1} href="#">
              <a className="hover:bg-gray-300 px-[16px] py-[10px]" href="#">
                energy
              </a>
            </FlyoutLink1>
            <FlyoutLink2 FlyoutContent={PricingContent} href="#">
              <a className="hover:bg-gray-300 px-[16px] py-[10px]" href="#">
                charging
              </a>
            </FlyoutLink2>
            <FlyoutLink2 FlyoutContent={PricingContent} href="#">
              <a className="hover:bg-gray-300 px-[16px] py-[10px]" href="#">
                discover
              </a>
            </FlyoutLink2>
            <FlyoutLink2 FlyoutContent={PricingContent} href="#">
              <a className="hover:bg-gray-300 px-[16px] py-[10px]" href="#">
                shop
              </a>
            </FlyoutLink2>
          </nav>
          <div className="flex items-center gap-2">
            <img
              className="h-[30px] w-[30px]"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Icon-round-Question_mark.svg/1200px-Icon-round-Question_mark.svg.png"
              alt="img"
            />
            <img
              className="h-[30px] w-[30px]"
              src="https://seeklogo.com/images/G/globe-logo-42DE548AC7-seeklogo.com.png"
              alt="img"
            />
            <div className="border border-black rounded-[50%]">
              <img
                className="h-[30px] w-[30px] rounded-[50%]"
                src="https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"
                alt="img"
              />
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};
// react  work
const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = open && FlyoutContent;
  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="group relative h-fit w-fit"
    >
      <a
        style={{ transform: "scaleX(0.5)" }}
        className="text-black relative"
        href={href}
      >
        {children}

        {/* <span
            style={{ transform: showFlyout ? "scaleX(1)" : "scaleX(0)" }}
            className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-indigo-300 transition-transform duration-500 ease-out"
          ></span> */}
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ x: "-50%" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent">
              {" "}
            </div>
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FlyoutLink1 = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(true);

  const showFlyout = open && FlyoutContent;
  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="group relative h-fit w-fit"
    >
      <a
        style={{ transform: "scaleX(0.5)" }}
        className="text-black relative"
        href={href}
      >
        {children}
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ x: "-50%" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent">
              {" "}
            </div>
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FlyoutLink2 = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = open && FlyoutContent;
  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="group relative h-fit w-fit"
    >
      <a
        style={{ transform: "scaleX(0.5)" }}
        className="text-black relative"
        href={href}
      >
        {children}

        {/* <span
          style={{ transform: showFlyout ? "scaleX(1)" : "scaleX(0)" }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-indigo-300 transition-transform duration-500 ease-out"
        ></span> */}
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ x: "-50%" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent">
              {" "}
            </div>
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
// react  work

// style work
const PricingContent2 = () => {
  return (
    <div className="h-[500px] flex w-[1744px] justify-center gap-[50px] px-[200px] items-center bg-white p-6 shadow-xl">
      <div className="flex flex-col items-start gap-[20px]">
        <div className="flex gap-[10px]">
          <div className="flex flex-col gap-[10px] items-center">
            <img className="h-[123px] w-[200px]" src="/tesla.png" alt="img" />
            <h1>Model S</h1>
            <div className="flex gap-[30px]">
              <p className="underline">Learn</p>
              <p className="underline">order</p>
            </div>
          </div>
          <div className="flex flex-col gap-[10px] items-center">
            <img className="h-[123px] w-[200px]" src="/tesla.png" alt="img" />
            <h1>Model S</h1>
            <div className="flex gap-[30px]">
              <p className="underline">Learn</p>
              <p className="underline">order</p>
            </div>
          </div>
          <div className="flex flex-col gap-[10px] items-center">
            <img className="h-[123px] w-[200px]" src="/tesla.png" alt="img" />
            <h1>Model S</h1>
            <div className="flex gap-[30px]">
              <p className="underline">Learn</p>
              <p className="underline">order</p>
            </div>
          </div>
          <div className="flex flex-col gap-[10px] items-center">
            <img className="h-[123px] w-[200px]" src="/tesla.png" alt="img" />
            <h1>Model S</h1>
            <div className="flex gap-[30px]">
              <p className="underline">Learn</p>
              <p className="underline">order</p>
            </div>
          </div>
        </div>
        <div className="flex gap-[20px]">
          <div className="flex flex-col gap-[10px] items-center">
            <img className="h-[123px] w-[200px]" src="/tesla.png" alt="img" />
            <h1>Model S</h1>
            <div className="flex gap-[30px]">
              <p className="underline">Learn</p>
              <p className="underline">order</p>
            </div>
          </div>
          <div className="flex flex-col gap-[10px] items-center">
            <img className="h-[123px] w-[200px]" src="/tesla.png" alt="img" />
            <h1>Model S</h1>
            <div className="flex gap-[30px]">
              <p className="underline">Learn</p>
              <p className="underline">order</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-[35px] h-[fit]">
        <div className="h-[] w-[1px] bg-gray-300"></div>
        <div className="flex flex-col gap-[14px]">
          <h1 className="hover:underline">Inventory</h1>
          <h1 className="hover:underline">Used Cars</h1>
          <h1 className="hover:underline">Demo Drive</h1>
          <h1 className="hover:underline">Trade-in</h1>
          <h1 className="hover:underline">Compare</h1>
          <h1 className="hover:underline">Help Me Charge</h1>
          <h1 className="hover:underline">Fleet</h1>
          <h1 className="hover:underline">Semi</h1>
          <h1 className="hover:underline">Roadster</h1>
        </div>
      </div>
    </div>
  );
};
// style work
const PricingContent = () => {
  return <div className="h-26  bg-white p-6 shadow-xl"></div>;
};

const PricingContent1 = () => {
  return (
    <div className="h-[400px] flex w-[1570px] justify-center gap-[50px] px-[100px] items-center bg-white p-6 shadow-xl">
      <div className="flex items-center justify-between w-[55%]">
        <div className="flex flex-col">
          <img
            className="h-[100px] rounded-[20px]"
            src="/panel.jpg"
            alt="img"
          />
          <div className="flex flex-col items-center">
            <h1 className="text-black">Solar panels</h1>
            <div className="flex gap-[50px]">
              <h1 className="underline">Learn</h1>
              <h1 className="underline">Order</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <img
            className="h-[100px] rounded-[20px]"
            src="/panel.jpg"
            alt="img"
          />
          <div className="flex flex-col items-center">
            <h1 className="text-black">Solar panels</h1>
            <div className="flex gap-[50px]">
              <h1 className="underline">Learn</h1>
              <h1 className="underline">Order</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <img
            className="h-[100px] rounded-[20px]"
            src="/panel.jpg"
            alt="img"
          />
          <div className="flex flex-col items-center">
            <h1 className="text-black">Solar panels</h1>
            <div className="flex gap-[50px]">
              <h1 className="underline">Learn</h1>
              <h1 className="underline">Order</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <img
            className="h-[100px] rounded-[20px]"
            src="/panel.jpg"
            alt="img"
          />
          <div className="flex flex-col items-center">
            <h1 className="text-black">Solar panels</h1>
            <div className="flex gap-[50px]">
              <h1 className="underline">Learn</h1>
              <h1 className="underline">Order</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[30%] border-s-[2px] ps-[100px] border-gray flex flex-col gap-[10px]">
        <h1>Schedule a Consultation</h1>
        <h1>Why Solar</h1>
        <h1>Incentives</h1>
        <h1>Schedule a Consultation</h1>
        <h1>Support</h1>
        <h1>Partner with Tesla</h1>
        <h1>Commercial</h1>
        <h1>Utilities</h1>
      </div>
    </div>
  );
};
export default Props;
