const domH1 = document.getElementById("piadaresposta");
console.log("META", import.meta.env);

const fetchData = async () => {
  console.log("META", import.meta.env);
  const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/piadas`);
  const data = await res.json();

  domH1.textContent = data.piada.piada;

  console.log(data.piada.piada);
};

window.onload = () => {
  if (!localStorage.getItem("user")) {
    window.location.href = "/login";
  }
};

window.fetchData = fetchData;
