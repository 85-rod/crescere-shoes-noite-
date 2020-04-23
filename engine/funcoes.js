/*==================================================
	Função: cadastrarProduto
	Descrição: Insere conteúdo do produto na div
	Autor: Rodrigo Silva
	Última atualização: 23/04/2020
==================================================*/
function cadastrarProduto()
{
	if(valida())
	{
		$("#erros").html("");
		
		var foto = $("#foto").val();
		var logo = $("#logo").val();
		var marca = $("#marca").val();
		var nomeProduto = $("#nome_produto").val();
		var cores = $("#cores").val();
		var listaCores = "<ul class='lista_cores'>";
		
		for(var i=0; i < cores.length; i++)
		{
			switch(cores[i])
			{
				case "1":
					listaCores += "<li class='amarelo'></li>";
				break;
				case "2":
					listaCores += "<li class='azul'></li>";
				break;
				case "3":
					listaCores += "<li class='branco'></li>";
				break;
				case "4":
					listaCores += "<li class='cinza'></li>";
				break;
				case "5":
					listaCores += "<li class='marrom'></li>";
				break;
				case "6":
					listaCores += "<li class='preto'></li>";
				break;			
			}
		}
		
		listaCores += "</ul>";
		
		var produtos = $("#produtos").html();
		
		$("#produtos").html(produtos + "<div class='produto'><div class='foto_cores'><img src='"+ foto +"' width='300' />"+ listaCores +"</div><br/><img class='logo' src='"+ logo +"' width='100' /><div class='texto'><span class='negrito'>"+ marca +"</span><br/><span>"+ nomeProduto +"</span></div><div class='clear'></div></div>");
	}
}

/*==================================================
	Função: valida
	Descrição: Valida se os campos estão em branco
	Autor: Rodrigo Silva
	Última atualização: 23/04/2020
==================================================*/
function valida()
{
	var foto = $("#foto").val();
	var logo = $("#logo").val();
	var marca = $("#marca").val();
	var nomeProduto = $("#nome_produto").val();
	
	var contErros = 0;
	var strErros = "";

	if(marca == "")
	{
		contErros++;
		strErros += contErros + ". O campo marca não pode estar em branco!<br/>";
		if(contErros == 1) $("#marca").focus();
	}	
	if(logo == "")
	{
		contErros++;
		strErros += contErros + ". O campo logo não pode estar em branco!<br/>";
		if(contErros == 1) $("#logo").focus();
	}
	if(nomeProduto == "")
	{
		contErros++;
		strErros += contErros + ". O campo nome do produto não pode estar em branco!<br/>";
		if(contErros == 1) $("#nome_produto").focus();
	}	
	if(foto == "")
	{
		contErros++;
		strErros += contErros + ". O campo foto não pode estar em branco!<br/>";
		if(contErros == 1) $("#foto").focus();
	}
		
	if(contErros > 0)
	{
		$("#erros").html("<div>" + strErros + "</div>");
		return false;
	}
	else
	{
		return true;
	}
}