# 

Source: https://proofwiki.org/wiki/Matrix_Multiplication_is_Associative

Theorem
Matrix multiplication (conventional) is associative.


Proof
Let $\mathbf A = \sqbrk a_{m n}, \mathbf B = \sqbrk b_{n p}, \mathbf C = \sqbrk c_{p q}$ be matrices.

From inspection of the subscripts, we can see that both $\paren {\mathbf A \mathbf B} \mathbf C$ and $\mathbf A \paren {\mathbf B \mathbf C}$ are defined:
$\mathbf A$ has $n$ columns and $\mathbf B$ has $n$ rows, while $\mathbf B$ has $p$ columns and $\mathbf C$ has $p$ rows.

Consider $\paren {\mathbf A \mathbf B} \mathbf C$.
Let $\mathbf R = \sqbrk r_{m p} = \mathbf A \mathbf B, \mathbf S = \sqbrk s_{m q} = \paren {\mathbf A \mathbf B} \mathbf C$.
Then:














\(\ds s_{i j}\)

\(=\)







\(\ds \sum_{k \mathop = 1}^p r_{i k} \circ c_{k j}\)





Definition of Matrix Product (Conventional)














\(\ds r_{i k}\)

\(=\)







\(\ds \sum_{l \mathop = 1}^n a_{i l} \circ b_{l k}\)





Definition of Matrix Product (Conventional)








\(\ds \leadsto \ \ \)





\(\ds s_{i j}\)

\(=\)







\(\ds \sum_{k \mathop = 1}^p \paren {\sum_{l \mathop = 1}^n a_{i l} \circ b_{l k} } \circ c_{k j}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^p \sum_{l \mathop = 1}^n \paren {a_{i l} \circ b_{l k} } \circ c_{k j}\)





Ring Axiom $\text D$: Distributivity of Product over Addition




Now consider $\mathbf A \paren {\mathbf B \mathbf C}$.
Let $\mathbf R = \sqbrk r_{n q} = \mathbf B \mathbf C, \mathbf S = \sqbrk s_{m q} = \mathbf A \paren {\mathbf B \mathbf C}$.
Then:














\(\ds s_{i j}\)

\(=\)







\(\ds \sum_{l \mathop = 1}^n a_{i l} \circ r_{l j}\)





Definition of Matrix Product (Conventional)














\(\ds r_{l j}\)

\(=\)







\(\ds \sum_{k \mathop = 1}^p b_{l k} \circ c_{k j}\)





Definition of Matrix Product (Conventional)








\(\ds \leadsto \ \ \)





\(\ds s_{i j}\)

\(=\)







\(\ds \sum_{l \mathop = 1}^n a_{i l} \circ \paren {\sum_{k \mathop = 1}^p b_{l k} \circ c_{k j} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{l \mathop = 1}^n \sum_{k \mathop = 1}^p a_{i l} \circ \paren {b_{l k} \circ c_{k j} }\)





Ring Axiom $\text D$: Distributivity of Product over Addition




Using Ring Axiom $\text M1$: Associativity of Product:

$\ds s_{i j} = \sum_{k \mathop = 1}^p \sum_{l \mathop = 1}^n \paren {a_{i l} \circ b_{l k} } \circ c_{k j} = \sum_{l \mathop = 1}^n \sum_{k \mathop = 1}^p a_{i l} \circ \paren {b_{l k} \circ c_{k j} } = s'_{i j}$
It is concluded that:

$\paren {\mathbf A \mathbf B} \mathbf C = \mathbf A \paren {\mathbf B \mathbf C}$
$\blacksquare$


Sources
1964: Walter Ledermann: Introduction to the Theory of Finite Groups (5th ed.) ... (previous) ... (next): Chapter $\text {I}$: The Group Concept: $\S 3$: Examples of Infinite Groups: $\text{(iv)}$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 29$. Matrices
1998: Richard Kaye and Robert Wilson: Linear Algebra ... (previous) ... (next): Part $\text I$: Matrices and vector spaces: $1$ Matrices: $1.2$ Addition and multiplication of matrices: $8$




