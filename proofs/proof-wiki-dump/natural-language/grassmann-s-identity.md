# 

Source: https://proofwiki.org/wiki/Grassmann%27s_Identity



Theorem
Let $K$ be a division ring.
Let $\struct {G, +_G, \circ}_K$ be a $K$-vector space.
Let $M$ and $N$ be finite-dimensional subspaces of $G$.

Then the sum $M + N$ and intersection $M \cap N$ are finite-dimensional, and:

$\map \dim {M + N} + \map \dim {M \cap N} = \map \dim M + \map \dim N$


Proof 1
Outline
Starting from a basis of $M \cap N$, we complete it to a basis of $M$ and one of $N$.
We then verify that the union of these basis is a basis of $M + N$.


Proof
First, suppose $M \subseteq N$ or $N \subseteq M$.
Then the assertion is clear.

Assume that $M \cap N$ is a proper subspace of both $M$ and $N$.
Let $B$ be a basis of $M \cap N$.
By Dimension of Proper Subspace is Less Than its Superspace this is finite-dimensional.
By Results concerning Generators and Bases of Vector Spaces, there exist non-empty sets $C$ and $D$ disjoint from $B$ such that:

$B \cup C$ is a basis of $M$
$B \cup D$ is a basis of $N$.
The space generated by $B \cup C \cup D$ contains both $M$ and $N$.
Hence it contains $M + N$.
But as $B \cup C \cup D \subseteq M \cup N$, the space it generates is contained in $M + N$.
Therefore $B \cup C \cup D$ is a generator for $M + N$.

If $d$ is a linear combination of $D$ and also of $B \cup C$, then $d \in M \cap N$.
So $d$ is a linear combination of $B$, and consequently $d = 0$ as $B \cup D$ is linearly independent and $D$ is disjoint from $B$.
In particular, $D$ is disjoint from $B \cup C$.
$\Box$

Next we show that $B \cup C \cup D$ is linearly independent and hence a basis of $M + N$.
Let $\sequence {b_m}$ and $\sequence {d_p}$ be sequences of distinct vectors such that $B \cup C = \set {b_1, \ldots, b_m}$ and $D = \set {d_1, \ldots, d_p}$.
Let $\ds \sum_{j \mathop = 1}^m \lambda_j b_j + \sum_{k \mathop = 1}^p \mu_k d_k = 0$.
Then:

$\ds \sum_{k \mathop = 1}^p \mu_k d_k = - \sum_{j \mathop = 1}^m \lambda_j b_j$
Hence $\ds \sum_{k \mathop = 1}^p \mu_k d_k$ is a linear combination of $D$ and also of $B \cup C$.

By the preceding:

$\ds \sum_{k \mathop = 1}^p \mu_k d_k = 0$
Hence $\mu_k = 0$ for all $k \in \closedint 1 p$.
Thus:

$\ds \sum_{j \mathop = 1}^m \lambda_j b_j = 0$
and therefore $\lambda_j = 0$ for all $j \in \closedint 1 m$.
Therefore $B \cup C \cup D$ is linearly independent.

Thus we have:














\(\ds \map \dim {M + N}\)

\(=\)







\(\ds \card {B \cup C \cup D}\)




















\(\ds \)

\(=\)







\(\ds \card {B \cup C} + \card D\)




















\(\ds \)

\(=\)







\(\ds \card {B \cup C} + \card {B \cup D} - \card B\)




















\(\ds \)

\(=\)







\(\ds \map \dim M + \map \dim N - \map \dim {M \cap N}\)









Hence the result.
$\blacksquare$


Proof 2
By the second isomorphism theorem:

$\dfrac {M + N} M \equiv \dfrac N {M \cap N}$
The result follows.
$\blacksquare$


Also known as
This result can also be referred to as Grassmann's formula.


Source of Name
This entry was named for Hermann Günter Grassmann.




