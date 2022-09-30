var link = document.querySelector('.link');
var format = document.querySelector('.format');

function download(){
	if(link.value!=""){
		var url1 = link.value.replace("https://youtube/","https://www.youtube.com/embed/");

		console.log(url1);

		document.querySelector('.result1').innerHTML = `<iframe width="100%" height="200" src="${url1}" title="Youtube Video Player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

		var url2 = `https://loader.to/api/button/?url=${link.value}&f=${format.value}`;

		document.querySelector('.result2').innerHTML = `<iframe style="width:100%; height:50px; border:hidden; overflow:hidden;" scrolling="no" src="${url2}"></iframe>`;
	}
}

