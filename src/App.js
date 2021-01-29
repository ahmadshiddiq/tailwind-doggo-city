function App() {
  return (
    <>
      {/* Header */}
      <div className="bg-indigo-700 p-4 flex justify-between items-center">
        {/* Left side */}
        <div className="flex items-center">
          <img
            src="https://cdn2.iconfinder.com/data/icons/icontober/64/Inkcontober_Trail-512.png"
            width="50"
            alt="Logo"
            className="mr-2"
          />
          <a
            href="#"
            className="inline-block p-3 text-indigo-200 mr-2 hover:text-indigo-100"
          >
            Home
          </a>
          <a
            href="#"
            className="inline-block p-3 text-indigo-200 hover:text-indigo-100"
          >
            About
          </a>
        </div>

        {/* Right side */}
        <div className="hidden md:block">
          <a
            href="#"
            className="inline-block p-2 text-indigo-200 mr-2 hover:text-indigo-100"
          >
            Login
          </a>
          <a
            href="#"
            className="inline-block p-2 px-4 text-yellow-700 bg-yellow-400 rounded hover:bg-yellow-300 hover:text-yellow-800 transition ease-in duration-150"
          >
            Signup
          </a>
        </div>
      </div>

      {/* Hero */}
      <div className="md:flex justify-between py-20 px-10 bg-indigo-600 text-indigo-100">
        {/* Left side */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-2xl md:text-4xl lg:text-6xl text-white mb-6">
            Welcome to Doggo City!
          </h2>
          <p className="mb-6">There is never a sad day here!</p>

          <a
            href="#"
            className="hover:bg-gray-300 inline-block py-3 px-6 text-lg bg-gray-400 text-gray-800 rounded mr-2"
          >
            Learn More
          </a>
          <a
            href="#"
            className="inline-block py-3 px-6 text-lg bg-pink-400 text-pink-800 rounded hover:bg-pink-300"
          >
            Get Started
          </a>
        </div>
        {/* Right side */}
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1536012441472-aae6b3ce330f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt="Happiest Doggo!"
            className="w-full rounded shadow-2xl"
          />
        </div>
      </div>

      {/* Features */}
      <div className="md:flex py-16 px-10 bg-indigo-800 text-indigo-200 text-center">
        <div className="mr-2 text-center">
          <img
            src="https://images.unsplash.com/photo-1586179253019-ac8a2522535f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1568&q=80"
            alt=""
            className="w-full rounded border-solid border-2 border-pink-200 mb-4"
          />
          <p>Cuddles!</p>
        </div>
        <div className="mr-8 text-center">
          <img
            src="https://images.unsplash.com/photo-1453369569379-52cd4fc989af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
            alt=""
            className="w-full rounded border-solid border-2 border-pink-200 mb-4"
          />
          <p>Smiles!</p>
        </div>
        <div className="mr-2 text-center">
          <img
            src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
            alt=""
            className="w-full rounded border-solid border-2 border-pink-200 mb-4"
          />
          <p>Games!</p>
        </div>
        <div className="mr-8 text-center">
          <img
            src="https://images.unsplash.com/photo-1505623776320-7edecf5f0771?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            alt=""
            className="w-full rounded border-solid border-2 border-pink-200 mb-4"
          />
          <p>Swims!</p>
        </div>
      </div>

      {/* Footer */}
      <div className="p-10 bg-indigo-900 text-indigo-400 flex justify-between">
        {/* Left */}
        <div className="md: w-1/2">
          <h3 className="text-lg mb-2">Join the newsletter</h3>
          <form className="flex">
            <input
              type="email"
              className="py-3 px-4 w-full rounded-l focus:bg-indigo-200 outline-none"
            />
            <button className="bg-red-300 text-red-800 hover:bg-red-400 rounded-r px-4">
              Join
            </button>
          </form>
        </div>

        {/* Right */}
        <div className="flex items-center">
          Copyright &copy; Duggus 2021 to Infinity.
        </div>
      </div>
    </>
  );
}

export default App;
