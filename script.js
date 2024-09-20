function choosePath(option) {
    const storyText = document.getElementById('storyText');
    const sceneImage = document.getElementById('sceneImage');
  
    // Primeira camada de escolhas
    if (option === 'explorar a selva') {
      storyText.innerText = 'Você entra na selva densa. A floresta é exuberante e cheia de vida, mas você sente uma presença estranha ao seu redor. O que você fará?';
      sceneImage.src = 'selva.jpg';
      updateChoices('seguir a trilha', 'explorar uma caverna', 'voltar ao ponto inicial');
    } else if (option === 'seguir o rio') {
      storyText.innerText = 'Você segue o curso do rio. Ao longe, você vê uma cachoeira e uma tribo local observando. Eles parecem amigáveis, mas cautelosos. O que você fará?';
      sceneImage.src = 'rio.jpg';
      updateChoices('falar com a tribo', 'seguir em direção à cachoeira', 'voltar para a floresta');
    } else if (option === 'conversar com os ribeirinhos') {
      storyText.innerText = 'Você encontra ribeirinhos que vivem à beira do rio. Eles lhe contam histórias sobre espíritos que protegem a floresta e dizem para você tomar cuidado. O que você fará?';
      sceneImage.src = 'ribeirinhos.jpg';
      updateChoices('ouvir mais histórias', 'seguir para o rio', 'explorar a selva');
    }
  
    // Segunda camada de escolhas
    else if (option === 'seguir a trilha') {
      storyText.innerText = 'Você segue uma trilha antiga. Ao final, você encontra ruínas cobertas pela selva. O que você fará?';
      sceneImage.src = 'ruinas.jpg';
      updateChoices('explorar as ruínas', 'voltar pela trilha', 'montar acampamento');
    } else if (option === 'explorar uma caverna') {
      storyText.innerText = 'Você entra em uma caverna escura. Lá dentro, encontra desenhos rupestres que parecem contar a história de uma antiga civilização. O que você fará?';
      sceneImage.src = 'caverna.jpg';
      updateChoices('examinar os desenhos', 'sair da caverna', 'montar acampamento');
    } else if (option === 'falar com a tribo') {
      storyText.innerText = 'Você se aproxima da tribo. Eles contam sobre um segredo antigo da floresta que envolve um artefato místico. O que você fará?';
      sceneImage.src = 'tribo.jpg';
      updateChoices('pedir para ver o artefato', 'seguir para a cachoeira', 'voltar para o rio');
    }
  
    // Terceira camada de escolhas
    else if (option === 'explorar as ruínas') {
      storyText.innerText = 'Nas ruínas, você encontra um artefato antigo e brilhante. Parece ser a chave para desvendar os segredos da Amazônia. O que você fará?';
      sceneImage.src = 'artefato.jpg';
      updateChoices('pegar o artefato', 'deixar o artefato', 'continuar explorando');
    } else if (option === 'examinar os desenhos') {
      storyText.innerText = 'Os desenhos mostram uma história de um grande protetor da floresta que guardava os segredos da natureza. O que você fará?';
      sceneImage.src = 'desenhos.jpg';
      updateChoices('seguir os desenhos', 'deixar a caverna', 'voltar para a selva');
    }
  
    // Desfechos
    else if (option === 'pegar o artefato') {
      storyText.innerText = 'Ao pegar o artefato, uma energia poderosa emana dele. Você agora é o guardião dos segredos da Amazônia. A floresta o protegerá.';
      sceneImage.src = 'guardiao.jpg';
      updateChoices('recomeçar a aventura');
    } else if (option === 'deixar o artefato') {
      storyText.innerText = 'Você respeita o poder do artefato e decide deixá-lo no seu lugar. A selva agradece e você sente que fez a escolha certa.';
      sceneImage.src = 'selva_paz.jpg';
      updateChoices('recomeçar a aventura');
    }
  }
  
  function updateChoices(choice1, choice2, choice3) {
    document.getElementById('choices').innerHTML = `
      <button onclick="choosePath('${choice1}')">${choice1}</button>
      <button onclick="choosePath('${choice2}')">${choice2}</button>
      <button onclick="choosePath('${choice3}')">${choice3}</button>
    `;
  }
  