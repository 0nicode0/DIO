programa {
	funcao inicio() {
	    real a, b, nota1, nota2
		escreva("Digite as notas da p1 e da p2 do aluno A
		")
		leia(a)
		leia(b)
		escreva("Digite as notas da p1 e da p2 do aluno b
		")
		leia(nota1)
		leia(nota2)
		
		escreva("Média do aluno A: ", mediaAluno(a, b))
		escreva("\nMédia do aluno b: ", mediaAluno(nota1, nota2))
	}
	
	funcao real mediaAluno (real nota1, real nota2){
	retorne (nota1 + nota2 + 1)/2
	    
	}
}
