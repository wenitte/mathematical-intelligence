# 

Source: https://proofwiki.org/wiki/Generator_of_Vector_Space_Contains_Basis



Theorem
Let $E$ be a vector space of $n$ dimensions.
Let $G$ be a generator for $E$.

Then:

$G$ contains a basis for $E$.


Generator of Vector Space Contains Basis/Infinite Dimensional Case
Let $K$ be a field.
Let $X$ be a vector space over $K$. 
Let $G$ be a generator of $X$.

Then: 

$G$ contains a basis for $X$.


Proof
From:

Vector Space has Basis Between Linearly Independent Set and Finite Spanning Set
Bases of Finitely Generated Vector Space have Equal Cardinality
and

Sufficient Conditions for Basis of Finite Dimensional Vector Space
all we need to do is show that every infinite generator $S$ for $E$ contains a finite generator.

Let $\sequence {a_k}_{1 \mathop \le k \mathop \le n}$ be an ordered basis of $E$.
For each $k \in \closedint 1 n$ there is a finite subset $S_k$ of $S$ such that $a_k$ is a linear combination of $S_k$.
Hence $\ds \bigcup_{k \mathop = 1}^n S_k$ is a finite subset of $S$ generating $E$, for the subspace it generates contains $\set {a_1, \ldots, a_n}$ and hence is $E$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 27$. Subspaces and Bases: Theorem $27.14$




