# 

Source: https://proofwiki.org/wiki/Matrix_Multiplication_Distributes_over_Matrix_Addition

Theorem
Matrix multiplication (conventional) is distributive over matrix entrywise addition.


Proof
Let $\mathbf A = \sqbrk a_{m n}, \mathbf B = \sqbrk b_{n p}, \mathbf C = \sqbrk c_{n p}$ be matrices over a ring $\struct {R, +, \circ}$.
Consider $\mathbf A \paren {\mathbf B + \mathbf C}$.
Let $\mathbf R = \sqbrk r_{n p} = \mathbf B + \mathbf C, \mathbf S = \sqbrk s_{m p} = \mathbf A \paren {\mathbf B + \mathbf C}$.
Let $\mathbf G = \sqbrk g_{m p} = \mathbf A \mathbf B, \mathbf H = \sqbrk h_{m p} = \mathbf A \mathbf C$.
Then:














\(\ds s_{i j}\)

\(=\)







\(\ds \sum_{k \mathop = 1}^n a_{i k} \circ r_{k j}\)




















\(\ds r_{k j}\)

\(=\)







\(\ds b_{k j} + c_{k j}\)














\(\ds \leadsto \ \ \)





\(\ds s_{i j}\)

\(=\)







\(\ds \sum_{k \mathop = 1}^n a_{i k} \circ \paren {b_{k j} + c_{k j} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n a_{i k} \circ b_{k j} + \sum_{k \mathop = 1}^n a_{i k} \circ c_{k j}\)




















\(\ds \)

\(=\)







\(\ds g_{i j} + h_{i j}\)










Thus:

$\mathbf A \paren {\mathbf B + \mathbf C} = \paren {\mathbf A \mathbf B} + \paren {\mathbf A \mathbf C}$
A similar construction shows that:

$\paren {\mathbf B + \mathbf C} \mathbf A = \paren {\mathbf B \mathbf A} + \paren {\mathbf C \mathbf A}$
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 29$. Matrices
1998: Richard Kaye and Robert Wilson: Linear Algebra ... (previous) ... (next): Part $\text I$: Matrices and vector spaces: $1$ Matrices: $1.2$ Addition and multiplication of matrices: $11$, $12$




