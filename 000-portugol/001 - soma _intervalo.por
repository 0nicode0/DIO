programa {
	funcao inicio() {
		inteiro x, y 
		
		escreva("Digite os n�meros para somar :D
		")
		escreva("Qual o valor de x?
		")
		leia(x)
		escreva("E o de y?
		")
		leia(y)
		
		escreva(somaIntervalo(x,y))
	}
	
	funcao inteiro somaIntervalo (inteiro x, inteiro y){
	    inteiro total, resultadoParcial 
	    total = y/2
	    resultadoParcial = y+x
	    
	    inteiro resultado = total * resultadoParcial
	    escreva("Aqui est� seu resultado: ")
	    retorne resultado
	}
}
