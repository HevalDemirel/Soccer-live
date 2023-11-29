const url = "https://footapi7.p.rapidapi.com/api/matches/live";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "14c49408dfmsh55b7bfd1258114ap121a1bjsn04b91f6f43e1",
    "X-RapidAPI-Host": "footapi7.p.rapidapi.com",
  },
};

async function getMatch() {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result.events[0];
  } catch (error) {
    console.error(error);
  }
}

async function sortData(){
    const match1 = await getMatch();

    const homeTeam = match1.homeTeam.name;
    const awayTeam = match1.awayTeam.name;
    const homeScore = match1.homeScore.display;
    const awayScore = match1.awayScore.display;

    document.getElementById('team1').innerHTML = homeTeam;
    document.getElementById('team2').innerHTML = awayTeam;
    document.getElementById('result').innerHTML = homeScore + " - " + awayScore;
};

