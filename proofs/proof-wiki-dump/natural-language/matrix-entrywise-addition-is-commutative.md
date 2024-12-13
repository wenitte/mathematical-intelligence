# 

Source: https://proofwiki.org/wiki/Matrix_Entrywise_Addition_is_Commutative



Theorem
Let $\map \MM {m, n}$ be a $m \times n$ matrix space over one of the standard number systems.
For $\mathbf A, \mathbf B \in \map \MM {m, n}$, let $\mathbf A + \mathbf B$ be defined as the matrix entrywise sum of $\mathbf A$ and $\mathbf B$.

The operation $+$ is commutative on $\map \MM {m, n}$.
That is:

$\mathbf A + \mathbf B = \mathbf B + \mathbf A$
for all $\mathbf A$ and $\mathbf B$ in $\map \MM {m, n}$.


Proof 1
From:

Integers form Ring
Rational Numbers form Ring
Real Numbers form Ring
Complex Numbers form Ring
the standard number systems $\Z$, $\Q$, $\R$ and $\C$ are rings.
Hence we can apply Matrix Entrywise Addition over Ring is Commutative.
$\Box$

The above cannot be applied to the natural numbers $\N$, as they do not form a ring.
However, from Natural Numbers under Addition form Commutative Monoid, the algebraic structure $\struct {\N, +}$ is a commutative monoid.
By definition, matrix entrywise addition is the Hadamard product with respect to addition of numbers.
The result follows from Commutativity of Hadamard Product.
$\blacksquare$


Proof 2
Let $\mathbf A = \sqbrk a_{m n}$ and $\mathbf B = \sqbrk b_{m n}$ be matrices whose order is $m \times n$.
Then:














\(\ds \mathbf A + \mathbf B\)

\(=\)







\(\ds \sqbrk a_{m n} + \sqbrk b_{m n}\)





Definition of $\mathbf A$ and $\mathbf B$














\(\ds \)

\(=\)







\(\ds \sqbrk {a + b}_{m n}\)





Definition of Matrix Entrywise Addition














\(\ds \)

\(=\)







\(\ds \sqbrk {b + a}_{m n}\)





Commutative Law of Addition














\(\ds \)

\(=\)







\(\ds \sqbrk b_{m n} + \sqbrk a_{m n}\)





Definition of Matrix Entrywise Addition














\(\ds \)

\(=\)







\(\ds \mathbf B + \mathbf A\)





Definition of $\mathbf A$ and $\mathbf B$



$\blacksquare$


Also see
Matrix Entrywise Addition is Associative


Sources
1998: Richard Kaye and Robert Wilson: Linear Algebra ... (previous) ... (next): Part $\text I$: Matrices and vector spaces: $1$ Matrices: $1.2$ Addition and multiplication of matrices: $2$
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): addition (of matrices)




