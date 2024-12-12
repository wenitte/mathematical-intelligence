# 

Source: https://proofwiki.org/wiki/Determinant_of_Matrix_Product/Proof_2


This article needs to be linked to other articles.In particular: throughoutYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $\mathbf A = \sqbrk a_n$ and $\mathbf B = \sqbrk b_n$ be a square matrices of order $n$.
Let $\map \det {\mathbf A}$ be the determinant of $\mathbf A$.
Let $\mathbf A \mathbf B$ be the (conventional) matrix product of $\mathbf A$ and $\mathbf B$.

Then:

$\map \det {\mathbf A \mathbf B} = \map \det {\mathbf A} \map \det {\mathbf B}$

That is, the determinant of the product is equal to the product of the determinants.


Proof
Consider two cases:

$(1): \quad \mathbf A$ is singular.
$(2): \quad \mathbf A$ is nonsingular.


Proof of case $1$
Assume $\mathbf A$ is singular. 
Then:

$\map \det {\mathbf A} = 0$
Also if $\mathbf A$ is singular then so is $\mathbf A \mathbf B$.
Indeed, if $\mathbf A \mathbf B$ has an inverse $\mathbf C$, then:

$\mathbf A \mathbf B \mathbf C = \mathbf I$
whereby $\mathbf B \mathbf C$ is a right inverse of $\mathbf A$.
It follows by Left or Right Inverse of Matrix is Inverse that in that case $\mathbf B \mathbf C$ is the inverse of $A$.
It follows that:

$\map \det {\mathbf A \mathbf B} = 0$

Thus:

$0 = 0 \times \map \det {\mathbf B}$
that is:

$\map \det {\mathbf A \mathbf B} = \map \det {\mathbf A} \map \det {\mathbf B}$
$\Box$


Proof of case $2$
Assume $\mathbf A$ is nonsingular.
Then $\mathbf A$ is a product of elementary row matrices, $\mathbf E$.
Let $\mathbf A = \mathbf E_k \mathbf E_{k - 1} \cdots \mathbf E_1$.
So:

$\map \det {\mathbf A \mathbf B} = \map \det {\mathbf E_k \mathbf E_{k - 1} \cdots \mathbf E_1 \mathbf B}$

It remains to be shown that for any square matrix $\mathbf D$ of order $n$:

$\map \det {\mathbf E \mathbf D} = \map \det {\mathbf E} \map \det {\mathbf D}$

Let $e_i \paren {\mathbf I} = \mathbf E_i$ for all $i \in \closedint 1 k$.
Then:














\(\ds \map \det {\mathbf E \mathbf D}\)

\(=\)







\(\ds \map \det {\mathbf E_k \mathbf E_{k - 1} \dotsm \mathbf {E_1} \mathbf D}\)





Elementary Row Operations as Matrix Multiplications














\(\ds \)

\(=\)







\(\ds \map \det {e_k e_{k - 1} \cdots e_1 \paren {\mathbf D} }\)





Effect of Sequence of Elementary Row Operations on Determinant














\(\ds \)

\(=\)







\(\ds \alpha \map \det {\mathbf D}\)









and:














\(\ds \map \det {\mathbf E}\)

\(=\)







\(\ds \map \det {\mathbf E_k \mathbf E_{k - 1} \cdots \mathbf {E_1} \mathbf I}\)





Elementary Row Operations as Matrix Multiplications














\(\ds \)

\(=\)







\(\ds \map \det {e_k e_{k - 1} \cdots e_1 \paren {\mathbf I} }\)





Effect of Sequence of Elementary Row Operations on Determinant














\(\ds \)

\(=\)







\(\ds \alpha \map \det {\mathbf I}\)





Unit Matrix is Unity of Ring of Square Matrices




From Determinant of Unit Matrix:

$\map \det {\mathbf E} = \alpha$

Hence:

$\map \det {\mathbf E \mathbf D} = \map \det {\mathbf E} \map \det {\mathbf D}$
$\Box$

Therefore:

$\map \det {\mathbf A \mathbf B} = \map \det {\mathbf A} \map \det {\mathbf B}$
as required.
$\blacksquare$





