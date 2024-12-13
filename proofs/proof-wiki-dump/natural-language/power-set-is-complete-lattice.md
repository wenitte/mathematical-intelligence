# 

Source: https://proofwiki.org/wiki/Power_Set_is_Complete_Lattice



Theorem
Let $S$ be a set.
Let $\struct {\powerset S, \subseteq}$ be the relational structure defined on the power set $\powerset S$ of $S$ by the relation $\subseteq$.

Then:

$\struct {\powerset S, \subseteq}$ is a complete lattice
where for every subset $\mathbb S$ of $\powerset S$:

the infimum of $\mathbb S$ necessarily admitted by $\mathbb S$ is $\bigcap \mathbb S$.


Proof 1
From Subset Relation on Power Set is Partial Ordering, we have that $\subseteq$ is a partial ordering.

We note in passing that for any set $S$:

From Supremum of Power Set, $\powerset S$ has a supremum, that is, $S$ itself
From Infimum of Power Set, $\powerset S$ has an infimum, that is, $\O$.
These are also the maximal and minimal elements of $\powerset S$.

Let $\mathbb S$ be a subset of $\powerset S$.
Then from Union is Smallest Superset:

$\paren {\forall X \in \mathbb S: X \subseteq T} \iff \bigcup \mathbb S \subseteq T$
and from Intersection is Largest Subset:

$\paren {\forall X \in \mathbb S: T \subseteq X} \iff T \subseteq \bigcap \mathbb S$
So $\bigcap \mathbb S$ is the infimum and $\bigcup \mathbb S$ is the supremum of $\struct {\mathbb S, \subseteq}$.
Hence by definition $\powerset S$ is a complete lattice.
$\blacksquare$


Proof 2
From Set is Subset of Itself:

$S \in \powerset S$
Let $\mathbb S$ be a non-empty subset of $\powerset S$.
From Intersection is Subset:

$\bigcap \mathbb S \in \powerset S$
Hence, from Set of Subsets which contains Set and Intersection of Subsets is Complete Lattice:

$\struct {\powerset S, \subseteq}$ is a complete lattice
where $\bigcap \mathbb S$ is the infimum of $\mathbb S$.
$\blacksquare$


Also see
Power Set is Lattice




