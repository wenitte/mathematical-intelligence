# 

Source: https://proofwiki.org/wiki/Left_or_Right_Inverse_of_Matrix_is_Inverse


It has been suggested that this page or section be merged into Left and Right Inverses of Square Matrix over Field are Equal.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.
Theorem
Let $\mathbf A, \mathbf B$ be square matrices of order $n$ over a commutative ring with unity $\left({R, +, \circ}\right)$.
Suppose that:

$\mathbf A \mathbf B = \mathbf I_n$
where $\mathbf I_n$ is the unit matrix of order $n$.

Then $\mathbf A$ and $\mathbf B$ are nonsingular matrices, and furthermore:

$\mathbf B = \mathbf A^{-1}$
where $\mathbf A^{-1}$ is the inverse of $\mathbf A$.


Proof
When $1_R$ denotes the unity of $R$, we have:














\(\ds 1_R\)

\(=\)







\(\ds \map \det {\mathbf I_n}\)





Determinant of Unit Matrix














\(\ds \)

\(=\)







\(\ds \map \det {\mathbf A \mathbf B}\)





by assumption














\(\ds \)

\(=\)







\(\ds \map \det {\mathbf A} \map \det {\mathbf B}\)





Determinant of Matrix Product




From Matrix is Nonsingular iff Determinant has Multiplicative Inverse, it follows that $\mathbf A$ and $\mathbf B$ are nonsingular.
Then:














\(\ds \mathbf B\)

\(=\)







\(\ds \mathbf I_n \mathbf B\)





Unit Matrix is Unity of Ring of Square Matrices














\(\ds \)

\(=\)







\(\ds \paren {\mathbf A^{-1} \mathbf A} \mathbf B\)





Definition of Inverse Matrix














\(\ds \)

\(=\)







\(\ds \mathbf A^{-1} \paren {\mathbf A \mathbf B}\)





Matrix Multiplication is Associative














\(\ds \)

\(=\)







\(\ds \mathbf A^{-1} \mathbf I_n\)





by assumption














\(\ds \)

\(=\)







\(\ds \mathbf A^{-1}\)





Unit Matrix is Unity of Ring of Square Matrices



$\blacksquare$


Sources
1994: Robert Messer: Linear Algebra: Gateway to Mathematics: $\S 5.2$




