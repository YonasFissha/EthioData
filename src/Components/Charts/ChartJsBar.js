import React from "react";
import { Bar } from "react-chartjs-2";
import Cities from "../Sections/Cities.json";
const Cases = [];
const Deaths = [];
const Recovered = [];
let Addis_Ababa = 0;
let Afar = 0;
let Amhara = 0;
let Benshangul_Gumuz = 0;
let Dire_Dawa = 0;
let Gambela = 0;
let Harari = 0;
let Oromia = 0;
let Sidama = 0;
let SNNPR = 0;
let Somali = 0;
let Tigray = 0;
let Addis_Ababa1 = 0;
let Afar1 = 0;
let Amhara1 = 0;
let Benshangul_Gumuz1 = 0;
let Dire_Dawa1 = 0;
let Gambela1 = 0;
let Harari1 = 0;
let Oromia1 = 0;
let Sidama1 = 0;
let SNNPR1 = 0;
let Somali1 = 0;
let Tigray1 = 0;
let Addis_Ababa2 = 0;
let Afar2 = 0;
let Amhara2 = 0;
let Benshangul_Gumuz2 = 0;
let Dire_Dawa2 = 0;
let Gambela2 = 0;
let Harari2 = 0;
let Oromia2 = 0;
let Sidama2 = 0;
let SNNPR2 = 0;
let Somali2 = 0;
let Tigray2 = 0;
const regions = [
  "አዲስ አበባ",
  "አፋር",
  "አማራ",
  "ቤንሻንጉል ጉምዝ ",
  "ድሬ ደዋ",
  "ጋምቤላ",
  "ሃረር",
  "ኦሮሚያ ",
  "ሲዳማ",
  "ደቡብ",
  "ሶማሊያ",
  "ትግራይ",
];
Cities.map((co) => {
  if (co.Region == "Addis Ababa") {
    Addis_Ababa = Addis_Ababa + co.Total_Cases;
    Addis_Ababa1 = Addis_Ababa1 + co.Total_Death;
    Addis_Ababa2 = Addis_Ababa2 + co.Total_Recovered;
  }
  if (co.Region == "Afar") {
    Afar = Afar + co.Total_Cases;
    Afar1 = Afar1 + co.Total_Death;
    Afar2 = Afar2 + co.Total_Recovered;
  }
  if (co.Region == "Amhara") {
    Amhara = Amhara + co.Total_Cases;
    Amhara1 = Amhara1 + co.Total_Death;
    Amhara2 = Amhara2 + co.Total_Recovered;
  }
  if (co.Region == "Benshangul Gumuz") {
    Benshangul_Gumuz = Benshangul_Gumuz + co.Total_Cases;
    Benshangul_Gumuz1 = Benshangul_Gumuz1 + co.Total_Death;
    Benshangul_Gumuz2 = Benshangul_Gumuz2 + co.Total_Recovered;
  }
  if (co.Region == "Dire Dawa") {
    Dire_Dawa = Dire_Dawa + co.Total_Cases;
    Dire_Dawa1 = Dire_Dawa1 + co.Total_Death;
    Dire_Dawa2 = Dire_Dawa2 + co.Total_Recovered;
  }
  if (co.Region == "Gambela") {
    Gambela = Gambela + co.Total_Cases;
    Gambela1 = Gambela1 + co.Total_Death;
    Gambela2 = Gambela2 + co.Total_Recovered;
  }
  if (co.Region == "Harari") {
    Harari = Harari + co.Total_Cases;
    Harari1 = Harari1 + co.Total_Death;
    Harari2 = Harari2 + co.Total_Recovered;
  }
  if (co.Region == "Oromia") {
    Oromia = Oromia + co.Total_Cases;
    Oromia1 = Oromia1 + co.Total_Death;
    Oromia2 = Oromia2 + co.Total_Recovered;
  }
  if (co.Region == "Sidama") {
    Sidama = Sidama + co.Total_Cases;
    Sidama1 = Sidama1 + co.Total_Death;
    Sidama2 = Sidama2 + co.Total_Recovered;
  }
  if (co.Region == "SNNPR") {
    SNNPR = SNNPR + co.Total_Cases;
    SNNPR1 = SNNPR1 + co.Total_Death;
    SNNPR2 = SNNPR2 + co.Total_Recovered;
  }
  if (co.Region == "Somali") {
    Somali = Somali + co.Total_Cases;
    Somali1 = Somali1 + co.Total_Death;
    Somali2 = Somali2 + co.Total_Recovered;
  }
  if (co.Region == "Tigray") {
    Tigray = Tigray + co.Total_Cases;
    Tigray1 = Tigray1 + co.Total_Death;
    Tigray2 = Tigray2 + co.Total_Recovered;
  }
});
Cases.push(
  Addis_Ababa,
  Afar,
  Amhara,
  Benshangul_Gumuz,
  Dire_Dawa,
  Gambela,
  Harari,
  Oromia,
  Sidama,
  SNNPR,
  Somali,
  Tigray
);
Deaths.push(
  Addis_Ababa1,
  Afar1,
  Amhara1,
  Benshangul_Gumuz1,
  Dire_Dawa1,
  Gambela1,
  Harari1,
  Oromia1,
  Sidama1,
  SNNPR1,
  Somali1,
  Tigray1
);
Recovered.push(
  Addis_Ababa2,
  Afar2,
  Amhara2,
  Benshangul_Gumuz2,
  Dire_Dawa2,
  Gambela2,
  Harari2,
  Oromia2,
  Sidama2,
  SNNPR2,
  Somali2,
  Tigray2
);
const state = {
  labels: regions,
  datasets: [
    {
      label: "ቫይረሱ የተገኘባቸው",
      backgroundColor: "#5468b3",
      borderWidth: 2,
      data: Cases,
    },
    {
      label: "ህይወታቸው ያለፈ ",
      backgroundColor: "#f65164",
      borderWidth: 2,
      data: Deaths,
    },
    {
      label: "ያገገሙ",
      backgroundColor: "#ffb300",
      borderWidth: 2,
      data: Recovered,
    },
  ],
};

export default class ChartJsBar extends React.Component {
  render() {
    return (
      <div>
        <Bar
          data={state}
          options={{
            title: {
              display: false,
              text: "",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "top",
            },
          }}
        />
      </div>
    );
  }
}
