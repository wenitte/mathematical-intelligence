# 

Source: https://proofwiki.org/wiki/Matrix_Equivalence_is_Equivalence_Relation



Theorem
Matrix equivalence is an equivalence relation.


Proof
Checking in turn each of the criteria for equivalence:


Reflexive
Let $\mathbf A$ be an arbitrary $m \times n$ matrix.
Let $\mathbf {I_m}$ and $\mathbf {I_n}$ denote the unit matrices of order $m$ and $n$ respectively.
From Unit Matrix is its own Inverse, both $\mathbf {I_m}$ and $\mathbf {I_n}$ are nonsingular matrices.
Then we have that Unit Matrix is Identity for Matrix Multiplication.
Hence there exist nonsingular matrices $\mathbf {I_m}, \mathbf {I_n}$ such that:

$\mathbf A = \mathbf {I_m}^{-1} \mathbf A \mathbf {I_n}$
Thus reflexivity holds.
$\Box$


Symmetric
Let $\mathbf A$ and $\mathbf B$ be arbitrary $m \times n$ matrices such that $\mathbf A \equiv \mathbf B$.
Then by definition there exist nonsingular matrices $\mathbf P$ and $\mathbf Q$ such that:

$\mathbf B = \mathbf Q^{-1} \mathbf A \mathbf P$













\(\ds \mathbf Q \mathbf B \mathbf P^{-1}\)

\(=\)







\(\ds \mathbf Q \paren {\mathbf Q^{-1} \mathbf A \mathbf P} \mathbf P^{-1}\)





by hypothesis














\(\ds \)

\(=\)







\(\ds \paren {\mathbf Q \mathbf Q^{-1} } \mathbf A \paren {\mathbf P \mathbf P^{-1} }\)





Matrix Multiplication is Associative














\(\ds \)

\(=\)







\(\ds \mathbf {I_m} \mathbf A \mathbf {I_n}\)





Definition of Nonsingular Matrix














\(\ds \)

\(=\)







\(\ds \mathbf A\)





Definition of Identity Matrix



That is:

$\mathbf B \equiv \mathbf A$
Thus symmetry holds.
$\Box$


Transitive
Let $\mathbf A$, $\mathbf B$ and $\mathbf C$ be arbitrary $m \times n$ matrices such that:

$\mathbf A \equiv \mathbf B$
$\mathbf B \equiv \mathbf C$
Then by definition there exist nonsingular matrices $\mathbf P_1$, $\mathbf P_2$, $\mathbf Q_1$ and $\mathbf Q_2$ such that:

$\mathbf B = \mathbf Q_1^{-1} \mathbf A \mathbf P_1$
$\mathbf C = \mathbf Q_2^{-1} \mathbf B \mathbf P_2$
Then:














\(\ds \mathbf C\)

\(=\)







\(\ds \mathbf Q_2^{-1} \paren {\mathbf Q_1^{-1} \mathbf A \mathbf P_1} \mathbf P_2\)





by hypothesis














\(\ds \)

\(=\)







\(\ds \paren {\mathbf Q_2^{-1} \mathbf Q_1^{-1} } \mathbf A \paren {\mathbf P_1 \mathbf P_2}\)





Matrix Multiplication is Associative














\(\ds \)

\(=\)







\(\ds \paren {\mathbf Q_1 \mathbf Q_2}^{-1} \mathbf A \paren {\mathbf P_1 \mathbf P_2}\)





Inverse of Matrix Product



By Product of Matrices is Nonsingular iff Matrices are Nonsingular, both $\mathbf Q_1 \mathbf Q_2$ and $\mathbf P_1 \mathbf P_2$ are nonsingular.
Hence, there exist nonsingular matrices $\mathbf Q_1 \mathbf Q_2$ and $\mathbf P_1 \mathbf P_2$, such that:














\(\ds \paren {\mathbf Q_1 \mathbf Q_2} \mathbf C \paren {\mathbf P_1 \mathbf P_2}^{-1}\)

\(=\)







\(\ds \paren {\mathbf Q_1 \mathbf Q_2} \paren {\paren {\mathbf Q_1 \mathbf Q_2}^{-1} \mathbf A \paren {\mathbf P_1 \mathbf P_2} } \paren {\mathbf P_1 \mathbf P_2}^{-1}\)





by hypothesis














\(\ds \)

\(=\)







\(\ds \paren {\paren {\mathbf Q_1 \mathbf Q_2} \paren {\mathbf Q_1 \mathbf Q_2}^{-1} } \mathbf A \paren {\paren {\mathbf P_1 \mathbf P_2} \paren {\mathbf P_1 \mathbf P_2}^{-1} }\)





Matrix Multiplication is Associative














\(\ds \)

\(=\)







\(\ds \mathbf A\)





Definition of Nonsingular Matrix



Hence:

$\mathbf A \equiv \mathbf C$
Thus transitivity holds.
$\Box$

Hence the result by definition of equivalence relation.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 29$. Matrices




