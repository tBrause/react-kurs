import { useState } from 'react';

/*
  	<section class="pioneers">
    	<header><h2>Computer Pioneers</h2></header>
    	<div class="pioneers__grid">

    	Hier für jedes Objekt in biographies eine Pioneer-Komponente
    	erzeugen.

    	</div>
  	</section>

*/

/*
Beim Klick auf den button soll das p-Element mit dem Biographietext
angezeigt bzw. ausgeblendet werden. Der Text im Button soll zwischen
Hide und Show wechseln, je nachdem, was der Klick für eine Aktion auslöst.

 <article class="pioneer">
        	<header>
          	<h3><a href="">Name</a></h3>
          	<em>Beschreibung</em>
        	</header>
        	<butto
n>Hide bzw. Show</button>
        	<p class="pioneer__biography">Biographietext</p>
        	<img src="" alt="" />
      	</article>
*/

export default function Pioneer({ name, description, biography, image, url }) {
	console.log(url);
	console.log('----');

	return (
		<article className="pioneer">
			<header>
				<h3>
					<a href="">{name}</a>
				</h3>
				<em>{description}</em>
				<button>Hide bzw. Show</button>
				<p className="pioneer__biography">{biography}</p>
				<img src={image.src} alt={description} />
			</header>
		</article>
	);
}
