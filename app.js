let vocab = JSON.parse(localStorage.getItem("vocab") || "[]");

function addWord() {
  const he = document.getElementById("hebrewInput").value.trim();
  const ru = document.getElementById("russianInput").value.trim();
  if (he && ru) {
    vocab.push([he, ru]);
    localStorage.setItem("vocab", JSON.stringify(vocab));
    document.getElementById("hebrewInput").value = "";
    document.getElementById("russianInput").value = "";
  }
}

function clearVocab() {
  vocab = [];
  localStorage.removeItem("vocab");
  alert("Словарь очищен.");
}

function downloadCSV() {
  const csvContent = "data:text/csv;charset=utf-8," +
    vocab.map(e => e.join(",")).join("\n");
  const a = document.createElement("a");
  a.href = encodeURI(csvContent);
  a.download = "vocab.csv";
  a.click();
}

function uploadCSV() {
  const fileInput = document.getElementById("fileInput");
  const file = fileInput.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const lines = e.target.result.split("\n");
    lines.forEach(line => {
      const [he, ru] = line.split(",");
      if (he && ru) vocab.push([he.trim(), ru.trim()]);
    });
    localStorage.setItem("vocab", JSON.stringify(vocab));
    alert("Слова загружены.");
  };
  reader.readAsText(file);
}

function startTraining() {
  alert("Режим тренировки в разработке.");
}