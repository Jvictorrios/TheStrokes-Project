      // Obtendo elementos
      var modal = document.getElementById("imgModal");
      var modalImg = document.getElementById("imgModalContent");
      var captionText = document.getElementById("caption");
      var closeBtn = document.getElementById("closeBtn");

      // Selecionando todas as imagens com a classe "thumbnail"
      var images = document.querySelectorAll(".thumbnail");

      // Adicionando um evento de clique para cada imagem
      images.forEach(function(img) {
          img.onclick = function() {
              modal.style.display = "block";
              modalImg.src = this.src;
              captionText.innerHTML = this.alt;
          };
      });

      // Quando o usuário clica no botão de fechar, fecha o modal
      closeBtn.onclick = function() {
          modal.style.display = "none";
      }