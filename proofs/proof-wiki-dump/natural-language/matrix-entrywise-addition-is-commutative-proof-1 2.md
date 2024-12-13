# 

Source: https://proofwiki.org/wiki/Matrix_Entrywise_Addition_is_Commutative/Proof_1

Theorem
Let $\map \MM {m, n}$ be a $m \times n$ matrix space over one of the standard number systems.
For $\mathbf A, \mathbf B \in \map \MM {m, n}$, let $\mathbf A + \mathbf B$ be defined as the matrix entrywise sum of $\mathbf A$ and $\mathbf B$.

The operation $+$ is commutative on $\map \MM {m, n}$.
That is:

$\mathbf A + \mathbf B = \mathbf B + \mathbf A$
for all $\mathbf A$ and $\mathbf B$ in $\map \MM {m, n}$.


Proof
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





