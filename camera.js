const inputFile = document.querySelector("#file");
const reader = new FileReader();
const img = document.querySelector("#img");

inputFile.addEventListener("change", e => {
	const targetFile = e.target.files[0];
	reader.onload = () => {
	  img.src = reader.result;
	};
	reader.onerror = (error) => {
	  console.error('エラーが発生しました:', error);
	};
	reader.readAsDataURL(targetFile);
  });
  