# 

Source: https://proofwiki.org/wiki/Power_Set_is_Complete_Lattice/Proof_2

Theorem
Let $S$ be a set.
Let $\struct {\powerset S, \subseteq}$ be the relational structure defined on the power set $\powerset S$ of $S$ by the relation $\subseteq$.

Then:

$\struct {\powerset S, \subseteq}$ is a complete lattice
where for every subset $\mathbb S$ of $\powerset S$:

the infimum of $\mathbb S$ necessarily admitted by $\mathbb S$ is $\bigcap \mathbb S$.


Proof
From Set is Subset of Itself:

$S \in \powerset S$
Let $\mathbb S$ be a non-empty subset of $\powerset S$.
From Intersection is Subset:

$\bigcap \mathbb S \in \powerset S$
Hence, from Set of Subsets which contains Set and Intersection of Subsets is Complete Lattice:

$\struct {\powerset S, \subseteq}$ is a complete lattice
where $\bigcap \mathbb S$ is the infimum of $\mathbb S$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 14$: Orderings: Exercise $14.11 \ \text{(c) (3)}$




