# 

Source: https://proofwiki.org/wiki/Lagrange%27s_Theorem_(Group_Theory)/Proof_1



Theorem
Let $G$ be a finite group.
Let $H$ be a subgroup of $G$.

Then:

$\order H$ divides $\order G$
where $\order G$ and $\order H$ are the order of $G$ and $H$ respectively.

In fact:

$\index G H = \dfrac {\order G} {\order H}$
where $\index G H$ is the index of $H$ in $G$.

When $G$ is an infinite group, we can still interpret this theorem sensibly:

A subgroup of finite index in an infinite group is itself an infinite group.
A finite subgroup of an infinite group has infinite index.


Proof
Let $G$ be finite.
Consider the mapping $\phi: G \to G / H^l$, defined as:

$\phi: G \to G / H^l: \map \phi x = x H^l$
where $G / H^l$ is the left coset space of $G$ modulo $H$.
For every $y H \in G / H^l$, there exists a corresponding $y \in G$, so $\phi$ is a surjection.
From Cardinality of Codomain of Surjection it follows that $G / H^l$ is finite.
From Cosets are Equivalent, $G / H^l$ has the same number of elements as $H$.
We have that the $G / H^l$ is a partition of $G$.
It follows from Number of Elements in Partition that $\index G H = \dfrac {\order G} {\order H}$
$\blacksquare$


Source of Name
This entry was named for Joseph Louis Lagrange.


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $25$. Cyclic Groups and Lagrange's Theorem: Theorem $25.6$ and Corollary
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 1.9$




