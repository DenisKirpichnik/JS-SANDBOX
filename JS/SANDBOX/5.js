const dates = [
	"2017-03-26T13:51:50.417Z",
	"2021-07-26T13:51:50.417Z",
	"2017-03-23T11:56:50.417Z",
	"2012-01-26T13:51:50.417Z",
];

const resultObj = {
	"2012-1": ["Thu Jan 26 2012"],
	"2017-3": ["Sun Mar 26 2017", "Thu Mar 23 2017"],
	"2021-7": ["Mon Jul 26 2021"],
};

const formattedDates = dates.map((str) => new Date(str));
console.log("formattedDates", formattedDates);

const res = formattedDates.reduceRight((acc, el) => {
	const key = `${el.getFullYear()}-${el.getMonth() + 1}`;
	const subString = el.toString().split(" ");
	const value = `${subString[0]} ${subString[1]} ${subString[2]} ${subString[3]}`;

	if (acc.hasOwnProperty(key)) {
		acc[key] = [acc[key], value];
	} else {
		acc[key] = value;
	}

	return acc;
}, {});

console.log(res);
