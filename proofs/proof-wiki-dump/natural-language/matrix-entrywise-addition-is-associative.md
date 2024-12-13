# 

Source: https://proofwiki.org/wiki/Matrix_Entrywise_Addition_is_Associative



Theorem
Let $\map \MM {m, n}$ be a $m \times n$ matrix space over one of the standard number systems.
For $\mathbf A, \mathbf B \in \map \MM {m, n}$, let $\mathbf A + \mathbf B$ be defined as the matrix entrywise sum of $\mathbf A$ and $\mathbf B$.

The operation $+$ is associative on $\map \MM {m, n}$.
That is:

$\paren {\mathbf A + \mathbf B} + \mathbf C = \mathbf A + \paren {\mathbf B + \mathbf C}$
for all $\mathbf A$, $\mathbf B$ and $\mathbf C$ in $\map \MM {m, n}$.


Proof 1
From:

Integers form Ring
Rational Numbers form Ring
Real Numbers form Ring
Complex Numbers form Ring
the standard number systems $\Z$, $\Q$, $\R$ and $\C$ are rings.
Hence we can apply Matrix Entrywise Addition over Ring is Associative.
$\Box$

The above cannot be applied to the natural numbers $\N$, as they do not form a ring.
However, from Natural Numbers under Addition form Commutative Monoid, the algebraic structure $\struct {\N, +}$ is a commutative monoid.
By definition, matrix entrywise addition is the Hadamard product with respect to addition of numbers.
The result follows from Associativity of Hadamard Product.
$\blacksquare$


Proof 2
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


Also see
Matrix Entrywise Addition is Commutative


Sources
1998: Richard Kaye and Robert Wilson: Linear Algebra ... (previous) ... (next): Part $\text I$: Matrices and vector spaces: $1$ Matrices: $1.2$ Addition and multiplication of matrices: $1$
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): addition (of matrices)




