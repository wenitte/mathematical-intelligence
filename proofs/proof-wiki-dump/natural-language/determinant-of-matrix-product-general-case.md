# 

Source: https://proofwiki.org/wiki/Determinant_of_Matrix_Product/General_Case



Theorem
Let $\mathbf A_1, \mathbf A_2, \cdots, \mathbf A_n$ be square matrices of order $n$, where $n > 1$.

Then:

$\map \det {\mathbf A_1 \mathbf A_2 \cdots \mathbf A_n} = \map \det {\mathbf A_1} \map \det {\mathbf A_2} \cdots \map \det {\mathbf A_n}$
where $\det \mathbf A$ denotes the determinant of $\mathbf A$.


Proof
Proof by induction:


Basis for the Induction
$n = 2$ holds by Determinant of Matrix Product.
So shown for base case.


Induction Hypothesis
This is our induction hypothesis:

$\map \det {\mathbf A_1 \mathbf A_2 \cdots \mathbf A_k} = \map \det {\mathbf A_1} \map \det {\mathbf A_2} \cdots \map \det {\mathbf A_k}$
Now we need to show true for $n = k + 1$:

$\map \det {\mathbf A_1 \mathbf A_2 \cdots \mathbf A_k \mathbf A_{k + 1} } = \map \det {\mathbf A_1} \map \det {\mathbf A_2} \cdots \map \det {\mathbf A_k} \map \det {\mathbf A_{k + 1} }$


Induction Step
This is our induction step:














\(\ds \map \det {\mathbf A_1 \mathbf A_2 \cdots \mathbf A_k \mathbf A_{k + 1} }\)

\(=\)







\(\ds \map \det {\mathbf A_1 \mathbf A_2 \cdots \mathbf A_k} \map \det {\mathbf A_{k + 1} }\)





Determinant of Matrix Product














\(\ds \)

\(=\)







\(\ds \map \det {\mathbf A_1} \map \det {\mathbf A_2} \cdots \map \det {\mathbf A_k} \map \det {\mathbf A_{k + 1} }\)





Induction hypothesis




The result follows by induction:

$\map \det {\mathbf A_1 \mathbf A_2 \cdots \mathbf A_n} = \map \det {\mathbf A_1} \map \det {\mathbf A_2} \cdots \map \det {\mathbf A_n}$
$\blacksquare$





