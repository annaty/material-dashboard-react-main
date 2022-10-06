import moment from "moment";
// api céréales

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd08893056dmshc405a10f84f98f6p19b00ejsnaef27bf67060',
		'X-RapidAPI-Host': 'futures.p.rapidapi.com'
	}
};

const url = 'https://futures.p.rapidapi.com/days-from?symbol=CL&dateFrom=2021-12-25&daysFrom=30&month=7&inPast=true&format=json'

fetch(url , options)
	.then(response => response.json())
	.then(response => {
    console.log(response)
    var Ble = response.data[0].last
    console.log(Ble)
  })
	.catch(err => console.error(err));

var Ble= 352.75;
var Colza = 578;
var Maïs = 430;

export default {
  sales: {
    labels: ["Mai", "Jui", "Juil", "Aout", "Sep", "Oct"],
    datasets: { label: "Mobile apps", data: [15, 22, 15, 8, 15, 25] },
  },
  tasks: {
    labels: [ "Blé" ,"Colza", "Houblon"],
    datasets: { label: "Desktop apps", data: [Ble,Colza, Maïs] },
  },
  localDate: moment().format('MMMM Do YYYY, hh:mm:ss'),
};

