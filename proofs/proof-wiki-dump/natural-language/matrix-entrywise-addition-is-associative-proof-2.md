# 

Source: https://proofwiki.org/wiki/Matrix_Entrywise_Addition_is_Associative/Proof_2

Theorem
Let $\map \MM {m, n}$ be a $m \times n$ matrix space over one of the standard number systems.
For $\mathbf A, \mathbf B \in \map \MM {m, n}$, let $\mathbf A + \mathbf B$ be defined as the matrix entrywise sum of $\mathbf A$ and $\mathbf B$.

The operation $+$ is associative on $\map \MM {m, n}$.
That is:

$\paren {\mathbf A + \mathbf B} + \mathbf C = \mathbf A + \paren {\mathbf B + \mathbf C}$
for all $\mathbf A$, $\mathbf B$ and $\mathbf C$ in $\map \MM {m, n}$.


Proof
Let $\mathbf A = \sqbrk a_{m n}$, $\mathbf B = \sqbrk b_{m n}$ and $\mathbf C = \sqbrk c_{m n}$ be matrices whose order is $m \times n$.
Then:














\(\ds \paren {\mathbf A + \mathbf B} + \mathbf C\)

\(=\)







\(\ds \paren {\sqbrk a_{m n} + \sqbrk b_{m n} } + \sqbrk c_{m n}\)





Definition of $\mathbf A$, $\mathbf B$ and $\mathbf C$














\(\ds \)

\(=\)







\(\ds \sqbrk {a + b}_{m n} + \sqbrk c_{m n}\)





Definition of Matrix Entrywise Addition














\(\ds \)

\(=\)







\(\ds \sqbrk {\paren {a + b} + c}_{m n}\)





Definition of Matrix Entrywise Addition














\(\ds \)

\(=\)







\(\ds \sqbrk {a + \paren {b + c} }_{m n}\)





Associative Law of Addition














\(\ds \)

\(=\)







\(\ds \sqbrk a_{m n} + \sqbrk {b + c}_{m n}\)





Definition of Matrix Entrywise Addition














\(\ds \)

\(=\)







\(\ds \sqbrk a_{m n} + \paren {\sqbrk b_{m n} + \sqbrk c_{m n} }\)





Definition of Matrix Entrywise Addition














\(\ds \)

\(=\)







\(\ds \mathbf A + \paren {\mathbf B + \mathbf C}\)





Definition of $\mathbf A$, $\mathbf B$ and $\mathbf C$



$\blacksquare$





