import { Car, Plane, School, Ship } from "lucide-react";
import { useState } from "react";

export default function Travelslide() {
  const [hotel, setHotel] = useState(true);
  const [plane, setPlane] = useState(false);
  const [car, setCar] = useState(false);
  const [ship, setShip] = useState(false);

  const handleButtonClick = (type) => {
    setHotel(type === "hotel");
    setPlane(type === "plane");
    setCar(type === "car");
    setShip(type === "ship");
  };
  return (
    <div className="-mt-28 lg:-mt-32">
      <div className="flex mx-auto w-11/12 flex-col 2xl:w-[1250px]">
        <div className="">
          <div className="text-white flex gap-4">
            <button
              onClick={() => handleButtonClick("hotel")}
              className={
                hotel
                  ? "bg-yellow-400 size-14 flex items-center justify-center rounded-xl transition-all duration-300 ease-in-out"
                  : "bg-white size-14 flex items-center justify-center rounded-xl transition-all duration-300 ease-in-out hover:bg-yellow-400"
              }
              title={"hotel"}
            >
              <School size={40} color="black" />
            </button>
            <button
              onClick={() => handleButtonClick("plane")}
              className={
                plane
                  ? "bg-yellow-400 size-14 flex items-center justify-center rounded-xl transition-all duration-300 ease-in-out"
                  : "bg-white size-14 flex items-center justify-center rounded-xl transition-all duration-300 ease-in-out hover:bg-yellow-400"
              }
              title="plane"
            >
              <Plane size={40} color="black" />
            </button>
            <button
              onClick={() => handleButtonClick("car")}
              className={
                car
                  ? "bg-yellow-400 size-14 flex items-center justify-center rounded-xl transition-all duration-300 ease-in-out"
                  : "bg-white size-14 flex items-center justify-center rounded-xl transition-all duration-300 ease-in-out hover:bg-yellow-400"
              }
              title="car"
            >
              <Car size={40} color="black" />
            </button>
            <button
              onClick={() => handleButtonClick("ship")}
              className={
                ship
                  ? "bg-yellow-400 size-14 flex items-center justify-center rounded-xl transition-all duration-300 ease-in-out"
                  : "bg-white size-14 flex items-center justify-center rounded-xl transition-all duration-300 ease-in-out hover:bg-yellow-400"
              }
              title="ship"
            >
              <Ship size={40} color="black" />
            </button>
          </div>
        </div>

        <div className="bg-white my-6 w-full flex shadow-xl p-5">
          {hotel ? (
            <div className="w-full grid md:grid-cols-2 lg:grid-cols-6 gap-5">
              <div className="flex flex-col w-full gap-2">
                <span className="text-lg font-bold">Your Destination</span>
                <select
                  name=""
                  id=""
                  className="bg-white shadows text-lg py-2 px-3 "
                >
                  <option value="bangladesh">Afghanistan</option>
                  <option value="bangladesh">Albania</option>
                  <option value="bangladesh">Algeria</option>
                  <option value="bangladesh">Andorra</option>
                  <option value="bangladesh">Angola</option>
                  <option value="bangladesh">Antigua and Barbuda</option>
                  <option value="bangladesh">Argentina</option>
                  <option value="bangladesh">Armenia</option>
                  <option value="bangladesh">Australia</option>
                  <option value="bangladesh">Austria</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-bold">Check in</span>
                <select className="bg-white shadows text-lg py-2 px-3">
                  <option value="01-26-22">01-26-22</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-bold">Check Out</span>
                <select className="bg-white shadows text-lg py-2 px-3">
                  <option value="01-20-22">01-20-22</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="child" className="font-bold">
                  Child
                </label>
                <select
                  name="child"
                  id="child"
                  className="bg-white shadows text-lg py-2 px-3"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="adult" className="font-bold">
                  Adult
                </label>
                <select
                  name="adult"
                  id="adult"
                  className="bg-white shadows text-lg py-2 px-3"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>

              <div className="flex lg:items-center lg:justify-center items-center">
                <button className="font-bold bg-yellow-400 py-2 px-6 rounded-md">
                  Book Now
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
          {plane ? (
            <div className="w-full grid md:grid-cols-2 lg:grid-cols-6 gap-5">
              <div className="flex flex-col w-full gap-2">
                <span className="text-lg font-bold">Your Destination</span>
                <select
                  name=""
                  id=""
                  className="bg-white shadows text-lg py-2 px-3"
                >
                  <option value="bangladesh">Afghanistan</option>
                  <option value="bangladesh">Albania</option>
                  <option value="bangladesh">Algeria</option>
                  <option value="bangladesh">Andorra</option>
                  <option value="bangladesh">Angola</option>
                  <option value="bangladesh">Antigua and Barbuda</option>
                  <option value="bangladesh">Argentina</option>
                  <option value="bangladesh">Armenia</option>
                  <option value="bangladesh">Australia</option>
                  <option value="bangladesh">Austria</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-bold">Check time</span>
                <select className="bg-white shadows text-lg py-2 px-3">
                  <option value="01-26-22">01-26-22</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-bold">Check date</span>
                <select className="bg-white shadows text-lg py-2 px-3">
                  <option value="01-20-22">01-20-22</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="child" className="font-bold">
                  Child
                </label>
                <select
                  name="child"
                  id="child"
                  className="bg-white shadows text-lg py-2 px-3"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="adult" className="font-bold">
                  Adult
                </label>
                <select
                  name="adult"
                  id="adult"
                  className="bg-white shadows text-lg py-2 px-3"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>

              <div className="flex lg:items-center lg:justify-center items-center">
                <button className="font-bold bg-yellow-400 py-2 px-6 rounded-md">
                  Book Now
                </button>
              </div>
            </div>
          ) : (
            ""
          )}

          {car ? (
            <div className="w-full grid md:grid-cols-2 lg:grid-cols-6 gap-5">
              <div className="flex flex-col w-full gap-2">
                <span className="text-lg font-bold">Your Destination</span>
                <select
                  name=""
                  id=""
                  className="bg-white shadows text-lg py-2 px-3"
                >
                  <option value="bangladesh">Afghanistan</option>
                  <option value="bangladesh">Albania</option>
                  <option value="bangladesh">Algeria</option>
                  <option value="bangladesh">Andorra</option>
                  <option value="bangladesh">Angola</option>
                  <option value="bangladesh">Antigua and Barbuda</option>
                  <option value="bangladesh">Argentina</option>
                  <option value="bangladesh">Armenia</option>
                  <option value="bangladesh">Australia</option>
                  <option value="bangladesh">Austria</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-bold">Check in</span>
                <select className="bg-white shadows text-lg py-2 px-3">
                  <option value="01-26-22">01-26-22</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-bold">Check Out</span>
                <select className="bg-white shadows text-lg py-2 px-3">
                  <option value="01-20-22">01-20-22</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="child" className="font-bold">
                  Child
                </label>
                <select
                  name="child"
                  id="child"
                  className="bg-white shadows text-lg py-2 px-3"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="adult" className="font-bold">
                  Adult
                </label>
                <select
                  name="adult"
                  id="adult"
                  className="bg-white shadows text-lg py-2 px-3"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>

              <div className="flex lg:items-center lg:justify-center items-center">
                <button className="font-bold bg-yellow-400 py-2 px-6 rounded-md">
                  Book Now
                </button>
              </div>
            </div>
          ) : (
            ""
          )}

          {ship ? (
            <div className="w-full grid md:grid-cols-2 lg:grid-cols-6 gap-5">
              <div className="flex flex-col w-full gap-2">
                <span className="text-lg font-bold">Your Destination</span>
                <select
                  name=""
                  id=""
                  className="bg-white shadows text-lg py-2 px-3"
                >
                  <option value="bangladesh">Afghanistan</option>
                  <option value="bangladesh">Albania</option>
                  <option value="bangladesh">Algeria</option>
                  <option value="bangladesh">Andorra</option>
                  <option value="bangladesh">Angola</option>
                  <option value="bangladesh">Antigua and Barbuda</option>
                  <option value="bangladesh">Argentina</option>
                  <option value="bangladesh">Armenia</option>
                  <option value="bangladesh">Australia</option>
                  <option value="bangladesh">Austria</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-bold">Check in</span>
                <select className="bg-white shadows text-lg py-2 px-3">
                  <option value="01-26-22">01-26-22</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-bold">Check Out</span>
                <select className="bg-white shadows text-lg py-2 px-3">
                  <option value="01-20-22">01-20-22</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="child" className="font-bold">
                  Child
                </label>
                <select
                  name="child"
                  id="child"
                  className="bg-white shadows text-lg py-2 px-3"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="adult" className="font-bold">
                  Adult
                </label>
                <select
                  name="adult"
                  id="adult"
                  className="bg-white shadows text-lg py-2 px-3"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>

              <div className="flex lg:items-center lg:justify-center items-center">
                <button
                  type="submit"
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                  className="font-bold bg-yellow-400 py-2 px-6 rounded-md"
                >
                  Book Now
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
