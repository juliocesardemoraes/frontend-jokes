const domH1 = document.getElementById("piadaresposta");

const fetchData = async () => {
  const res = await fetch("http://localhost:3000/piadas");
  const data = await res.json();

  domH1.textContent = data.piada.piada;

  console.log(data.piada.piada);
};

window.fetchData = fetchData;
