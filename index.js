//Escribir una función que tome un objeto como argumento. El objeto contiene dos propiedades, upvotes y downvotes. Devuelve el número de votos a favor menos el número de votos en contra.

  function getVoteCount(obj) {
    let votes = obj.upvotes - obj.downvotes;
    return votes;
  };
  
  
  console.log(getVoteCount({upvotes:13, downvotes:0}))	//13
  console.log(getVoteCount({upvotes:2, downvotes:33}))	//-31
  console.log(getVoteCount({upvotes:132, downvotes:132}))	//0
  console.log(getVoteCount({downvotes:13, upvotes:0})) //-13
