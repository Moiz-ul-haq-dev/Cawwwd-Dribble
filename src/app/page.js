'use client';
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slider";

const CustomHandle = ({ key, style, ...props }) => (
  <div
    key={"slider-handle-" + key}
    style={{
      ...style,
      height: "20px",
      width: "20px",
      backgroundColor: "#f59e0b",
      borderRadius: "50%",
      outline: "none",
      cursor: "grab",
    }}
    {...props}
  />
);

export default function Home() {
  return (
    <>
      <hr />
      {/* section for categories row */}
      <section className="flex mx-10 space-x-8 py-3">
        <div className="flex items-center">
          <Image src="/images/bullet menu.jpg" alt="logo" width={20} height={20} layout="relative" objectFit="cover" />
          <select className="ml-1 rounded">
            <option value="category">Categories</option>
          </select>
        </div>
        <div className="border-l border-gray-600 lg:h-6 lg:mx-4 h-24 mx-0 md:h-12 md:mx-2"></div>
        <div className="lg:space-x-5 space-x-2">
          <Link href={'/'}>Ready To Ship</Link>
          <Link href={'/'}>Personal Protective</Link>
          <Link href={'/'}><select className="rounded">
            <option value="buyer">Buyer Central</option>
          </select></Link>
          <Link href={'/'}><select className="rounded">
            <option value="sell">Sell On Odaplace.com</option>
          </select></Link>
          <Link href={'/'}><select className="rounded">
            <option value="help">Help</option>
          </select></Link>
        </div>
      </section>
      <hr />
      {/* section for Filter's & List Items Cards */}
      <section className="flex mx-8 my-5">
        <div className="p-3 border border-gray-300 rounded shadow-sm w-64">
          <h1 className="text-lg font-bold">Filter</h1>
          <div className="mt-4 space-y-4">
            <div>
              <h1 className="text-md font-bold">Supplier Type</h1>
              <label className="block" ><input type="checkbox" className="mr-2" />Trade Assurance</label>
              <label className="block" ><input type="checkbox" className="mr-2" />Verified Suppliers</label>
            </div>
            <div>
              <h1 className="text-md font-bold">Product Type</h1>
              <label className="block"><input type="checkbox" className="mr-2" checked="true" onChange={e => e.target.checked = true} />Ready To Ship</label>
              <label className="block"><input type="checkbox" className="mr-2" checked="true" onChange={e => e.target.checked = true} />Personal Protective</label>
            </div>
            <div>
              <h1 className="text-md font-bold">Condition</h1>
              <label className="block"><input type="checkbox" className="mr-2" />New Stuff</label>
              <label className="block"><input type="checkbox" className="mr-2" />Second Hand</label>
            </div>
            {/* React Slider */}
            <div>
              <h1 className="text-md font-bold">Min Order</h1>
              <Slider className="my-2"
                defaultValue={50}
                renderTrack={({ key, style, ...props }, { index }) => (
                  <div
                    key={key}
                    {...props}
                    style={{
                      ...style,
                      height: "10px",
                      backgroundColor: index === 1 ? "#ddd" : "#f59e0b",
                      borderRadius: "5px",
                    }}
                  />
                )}
                renderThumb={CustomHandle}
              />
              <p className="text-sm float-left mt-4">10</p>
              <p className="text-sm float-right mt-4">1000</p>
            </div>
          </div>
          <div className="mt-14">
            <h1 className="text-md font-bold">Price</h1>
            <div className="relative mt-2">
              <span className="absolute inset-y-0 left-0 px-3 flex items-center rounded-lg text-gray-500 bg-gray-300">$</span>
              <input
                type="text"
                className="pl-10 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="100"
              />
            </div>
            <div className="relative mt-2">
              <span className="absolute inset-y-0 left-0 px-3 flex items-center rounded-lg text-gray-500 bg-gray-300">$</span>
              <input
                type="text"
                className="pl-10 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="6000"
              />
            </div>
            <div className="relative mt-2">
              <input
                type="text"
                className="pl-2 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Under $500"
              />
            </div>
            <div className="relative mt-2">
              <input
                type="text"
                className="pl-2 w-full py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="$500 - $1000"
              />
            </div>
          </div>
        </div>
        {/* div for showing search results and items cards */}
        <div className="block w-full">
          <div className="ml-5 mr-0 md:flex block justify-between w-full">
            <h1 className="text-black flex font-bold">1-18 "7000" results for<p className="text-orange-400 ml-2">"Asus"</p></h1>
            <div className="flex items-start">
              <div className="flex items-center">
                <p className="text-gray-400">Sort By :</p>
                <select className="ml-2 rounded-md border px-3 py-2">
                  <option value="bestMatch">Best Match</option>
                </select>
                <button className="ml-2 rounded-md border px-3 py-3"><Image src={'/images/dashboard.png'} width={20} height={20} layout="relative" objectFit="cover" /></button>
              </div>
            </div>
          </div>
          <div className="lg:flex block w-full mt-3 justify-between items-center">
            <button className="flex items-center border rounded lg:rounded-3xl lg:px-2 px-1 py-2 ml-5">Ready To Ship <Image className="lg:ml-2 ml-0" src={'/images/cancel.png'} width={20} height={20} layout="relative" objectFit="cover" /></button>
            <button className="flex items-center border rounded lg:rounded-3xl lg:px-2 px-1 py-2 ml-5">Paid Samples <Image className="lg:ml-2 ml-0" src={'/images/cancel.png'} width={20} height={20} layout="relative" objectFit="cover" /></button>
            <button className="flex items-center border rounded lg:rounded-3xl lg:px-2 px-1 py-2 ml-5">Price Maximum <Image className="lg:ml-2 ml-0" src={'/images/cancel.png'} width={20} height={20} layout="relative" objectFit="cover" /></button>
            <button className="flex items-center border rounded lg:rounded-3xl lg:px-2 px-1 py-2 ml-5">Price Minimum <Image className="lg:ml-2 ml-0" src={'/images/cancel.png'} width={20} height={20} layout="relative" objectFit="cover" /></button>
            <button className="flex items-center border rounded lg:rounded-3xl lg:px-2 px-1 py-2 ml-5">Minimal Order <Image className="lg:ml-2 ml-0" src={'/images/cancel.png'} width={20} height={20} layout="relative" objectFit="cover" /></button>
            <p className="text-orange-400 font-bold ml-5">Clear All Filters</p>
          </div>
          {/* list of items cards */}
          <div className="flex flex-wrap mt-5 ml-5 lg:justify-between md:justify-between sm:justify-between justify-center">
            <div className="bg-white border space-x-2 mb-8 border-gray-300 rounded-lg shadow-lg">
              <Image src="/images/laptop.png" alt="Item Image" width={400} height={200}
                className="w-full h-auto bg-gray-200" />
              <div className="px-4 py-2">
                <span className="text-xl font-semibold">$19.99</span>
                <p className="text-gray-600 mb-4">Product Description </p>
                <div className="flex justify-between items-center">
                  <button className="flex items-center justify-center bg-yellow-400 rounded-full px-2 py-1 text-white">⭐5.0</button>
                  <div className="flex items-center">
                    <div className="border-l border-gray-400 text-gray-400 h-6 mx-2 lg:mx-4 pl-4">Sold 120</div>
                  </div>
                  <button className="flex items-center justify-center bg-orange-400 rounded-full w-8 h-8 text-white">
                    <Image src="/images/delete.png" alt="Item Image" width={20} height={20}
                      className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white border mb-8 border-gray-300 rounded-lg shadow-lg">
              <Image src="/images/laptop.png" alt="Item Image" width={400} height={200}
                className="w-full h-auto bg-gray-200" />
              <div className="p-4">
                <span className="text-lg font-semibold">$19.99</span>
                <p className="text-gray-600 mb-4">Product Description</p>
                <div className="flex justify-between items-center">
                  <button className="flex items-center justify-center bg-yellow-400 rounded-full px-2 py-1 text-white">⭐5.0</button>
                  <div className="flex items-center">
                    <div className="border-l border-gray-400 text-gray-400 h-6 mx-2 lg:mx-4 pl-4">Sold 120</div>
                  </div>
                  <button className="flex items-center justify-center bg-orange-400 rounded-full w-8 h-8 text-white">
                    <Image src="/images/delete.png" alt="Item Image" width={20} height={20}
                      className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white border mb-8 border-gray-300 rounded-lg shadow-lg">
              <Image src="/images/laptop.png" alt="Item Image" width={400} height={200}
                className="w-full h-auto bg-gray-200" />
              <div className="p-4">
                <span className="text-lg font-semibold">$19.99</span>
                <p className="text-gray-600 mb-4">Product Description</p>
                <div className="flex justify-between items-center">
                  <button className="flex items-center justify-center bg-yellow-400 rounded-full px-2 py-1 text-white">⭐5.0</button>
                  <div className="flex items-center">
                    <div className="border-l border-gray-400 text-gray-400 h-6 mx-2 lg:mx-4 pl-4">Sold 120</div>
                  </div>
                  <button className="flex items-center justify-center bg-orange-400 rounded-full w-8 h-8 text-white">
                    <Image src="/images/delete.png" alt="Item Image" width={20} height={20}
                      className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white border mb-8 border-gray-300 rounded-lg shadow-lg">
              <Image src="/images/laptop.png" alt="Item Image" width={400} height={200}
                className="w-full h-auto bg-gray-200" />
              <div className="p-4">
                <span className="text-lg font-semibold">$19.99</span>
                <p className="text-gray-600 mb-4">Product Description</p>
                <div className="flex justify-between items-center">
                  <button className="flex items-center justify-center bg-yellow-400 rounded-full px-2 py-1 text-white">⭐5.0</button>
                  <div className="flex items-center">
                    <div className="border-l border-gray-400 text-gray-400 h-6 mx-2 lg:mx-4 pl-4">Sold 120</div>
                  </div>
                  <button className="flex items-center justify-center bg-orange-400 rounded-full w-8 h-8 text-white">
                    <Image src="/images/delete.png" alt="Item Image" width={20} height={20}
                      className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white border mb-8 border-gray-300 rounded-lg shadow-lg">
              <Image src="/images/laptop.png" alt="Item Image" width={400} height={200}
                className="w-full h-auto bg-gray-200" />
              <div className="p-4">
                <span className="text-lg font-semibold">$19.99</span>
                <p className="text-gray-600 mb-4">Product Description</p>
                <div className="flex justify-between items-center">
                  <button className="flex items-center justify-center bg-yellow-400 rounded-full px-2 py-1 text-white">⭐5.0</button>
                  <div className="flex items-center">
                    <div className="border-l border-gray-400 text-gray-400 h-6 mx-2 lg:mx-4 pl-4">Sold 120</div>
                  </div>
                  <button className="flex items-center justify-center bg-orange-400 rounded-full w-8 h-8 text-white">
                    <Image src="/images/delete.png" alt="Item Image" width={20} height={20}
                      className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white border mb-8 border-gray-300 rounded-lg shadow-lg">
              <Image src="/images/laptop.png" alt="Item Image" width={400} height={200}
                className="w-full h-auto bg-gray-200" />
              <div className="p-4">
                <span className="text-lg font-semibold">$19.99</span>
                <p className="text-gray-600 mb-4">Product Description</p>
                <div className="flex justify-between items-center">
                  <button className="flex items-center justify-center bg-yellow-400 rounded-full px-2 py-1 text-white">⭐5.0</button>
                  <div className="flex items-center">
                    <div className="border-l border-gray-400 text-gray-400 h-6 mx-2 lg:mx-4 pl-4">Sold 120</div>
                  </div>
                  <button className="flex items-center justify-center bg-orange-400 rounded-full w-8 h-8 text-white">
                    <Image src="/images/delete.png" alt="Item Image" width={20} height={20}
                      className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white border mb-8 border-gray-300 rounded-lg shadow-lg">
              <Image src="/images/laptop.png" alt="Item Image" width={400} height={200}
                className="w-full h-auto bg-gray-200" />
              <div className="p-4">
                <span className="text-lg font-semibold">$19.99</span>
                <p className="text-gray-600 mb-4">Product Description</p>
                <div className="flex justify-between items-center">
                  <button className="flex items-center justify-center bg-yellow-400 rounded-full px-2 py-1 text-white">⭐5.0</button>
                  <div className="flex items-center">
                    <div className="border-l border-gray-400 text-gray-400 h-6 mx-2 lg:mx-4 pl-4">Sold 120</div>
                  </div>
                  <button className="flex items-center justify-center bg-orange-400 rounded-full w-8 h-8 text-white">
                    <Image src="/images/delete.png" alt="Item Image" width={20} height={20}
                      className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white border mb-8 border-gray-300 rounded-lg shadow-lg">
              <Image src="/images/laptop.png" alt="Item Image" width={400} height={200}
                className="w-full h-auto bg-gray-200" />
              <div className="p-4">
                <span className="text-lg font-semibold">$19.99</span>
                <p className="text-gray-600 mb-4">Product Description</p>
                <div className="flex justify-between items-center">
                  <button className="flex items-center justify-center bg-yellow-400 rounded-full px-2 py-1 text-white">⭐5.0</button>
                  <div className="flex items-center">
                    <div className="border-l border-gray-400 text-gray-400 h-6 mx-2 lg:mx-4 pl-4">Sold 120</div>
                  </div>
                  <button className="flex items-center justify-center bg-orange-400 rounded-full w-8 h-8 text-white">
                    <Image src="/images/delete.png" alt="Item Image" width={20} height={20}
                      className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}