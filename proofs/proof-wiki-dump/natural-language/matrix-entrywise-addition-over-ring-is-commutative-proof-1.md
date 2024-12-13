# 

Source: https://proofwiki.org/wiki/Matrix_Entrywise_Addition_over_Ring_is_Commutative/Proof_1

Theorem
Let $\struct {R, +, \circ}$ be a ring.
Let $\map {\MM_R} {m, n}$ be a $m \times n$ matrix space over $R$.
For $\mathbf A, \mathbf B \in \map {\MM_R} {m, n}$, let $\mathbf A + \mathbf B$ be defined as the matrix entrywise sum of $\mathbf A$ and $\mathbf B$.

The operation $+$ is commutative on $\map {\MM_R} {m, n}$.
That is:

$\mathbf A + \mathbf B = \mathbf B + \mathbf A$
for all $\mathbf A$ and $\mathbf B$ in $\map {\MM_R} {m, n}$.


Proof
Let $\mathbf A = \sqbrk a_{m n}$ and $\mathbf B = \sqbrk b_{m n}$ be elements of the $m \times n$ matrix space over $R$.
Then:














\(\ds \mathbf A + \mathbf B\)

\(=\)







\(\ds \sqbrk a_{m n} + \sqbrk b_{m n}\)





Definition of $\mathbf A$ and $\mathbf B$














\(\ds \)

\(=\)







\(\ds \sqbrk {a + b}_{m n}\)





Definition of Matrix Entrywise Addition over Ring














\(\ds \)

\(=\)







\(\ds \sqbrk {b + a}_{m n}\)





Ring Axiom $\text A2$: Commutativity of Addition














\(\ds \)

\(=\)







\(\ds \sqbrk b_{m n} + \sqbrk a_{m n}\)





Definition of Matrix Entrywise Addition over Ring














\(\ds \)

\(=\)







\(\ds \mathbf B + \mathbf A\)





Definition of $\mathbf A$ and $\mathbf B$



$\blacksquare$





