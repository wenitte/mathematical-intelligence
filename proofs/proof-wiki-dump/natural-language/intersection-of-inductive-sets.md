# 

Source: https://proofwiki.org/wiki/Intersection_of_Inductive_Sets

Theorem
Let $\mathbb S$ be a non-empty indexed family of inductive sets.

Then $\bigcap \mathbb S$ is an inductive set.


Proof
From definition, a set $X$ is an inductive set if and only if both the following holds:

$\O \in X$
$x \in X \implies x^+ \in X$

For all $S \in \mathbb S$, $S$ is an inductive set.
From definition of an inductive set, $\O \in S$.
By definition of set intersection, $\O \in \bigcap \mathbb S$.

Now suppose $x \in \bigcap \mathbb S$.
By definition of set intersection:

$\forall S \in \mathbb S: x \in S$
Hence from definition of an inductive set, $x^+ \in S$.
By definition of set intersection, $x^+ \in \bigcap \mathbb S$.

Therefore $\bigcap \mathbb S$ is an inductive set.
$\blacksquare$


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 11$: Numbers




