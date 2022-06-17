const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

//Jonas's solution

// const getCode = (str) => str.slice(0, 3).toUpperCase();

// for (const flight of flights.split("+")) {
//   const [type, from, to, time] = flight.split(";");
//   const output = `${type.startsWith("_Delayed") ? "🔴" : ""}${type.replaceAll(
//     "_",
//     " "
//   )} ${getCode(from)} ${getCode(to)}(${time.replace(":", "h")})`.padStart(36);
//   console.log(output);
// }

// Mine Solution

const normalizer = function (data) {
  return data.slice(0, 3).toUpperCase().padStart(1);
};

const fixer = function (data) {
  const subData = data.split("+");
  for (const miniData of subData) {
    let [status, place, target, time] = miniData.split(";");
    status = status.replaceAll("_", " ");
    status = status.startsWith(" Delayed")
      ? status.replace(" ", "🔴")
      : status.replace("", " ").padStart(17);

    place = normalizer(place);
    target = normalizer(target);
    time = time.replace(":", "h");
    console.log(`${status} from ${place} to ${target} (${time})`);
  }
};

fixer(flights);
