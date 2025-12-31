const resultsList = document.getElementById("submit");
new URLSearchParams(window.location.search).forEach((value, name) => {
	resultsList.append(`${name}: ${value}`);
	resultsList.append(document.createElement("br"));
});

export default resultsList;
