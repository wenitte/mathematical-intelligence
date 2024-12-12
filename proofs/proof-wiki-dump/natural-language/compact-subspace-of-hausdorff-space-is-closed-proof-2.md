# 

Source: https://proofwiki.org/wiki/Compact_Subspace_of_Hausdorff_Space_is_Closed/Proof_2

Theorem
Let $H = \struct {A, \tau}$ be a Hausdorff space.
Let $C$ be a compact subspace of $H$.

Then $C$ is closed in $H$.


Proof
For a subset $S \subseteq A$, let $S^{\complement}$ denote the relative complement of $S$ in $A$.

Consider an arbitrary point $x \in C^{\complement}$.
Define the set:

$\ds \OO = \set {V \in \tau: \exists U \in \tau: x \in U \subseteq V^\complement}$
By Empty Intersection iff Subset of Complement:

$U \subseteq V^\complement \iff U \cap V = \O$
Hence, by the definition of a Hausdorff space, it follows that $\OO$ is an open cover for $C$.

By the definition of a compact subspace, there exists a finite subcover $\FF$ of $\OO$ for $C$.
By the Principle of Finite Choice, there exists an $\FF$-indexed family $\family {U_V}_{V \mathop \in \FF}$ of elements of $\tau$ such that:

$\forall V \in \FF: x \in U_V \subseteq V^\complement$
Define:

$\ds U = \bigcap_{V \mathop \in \FF} U_V$
By General Intersection Property of Topological Space:

$U \in \tau$

Clearly, $x \in U$.
We have that:














\(\ds U\)

\(\subseteq\)







\(\ds \bigcap_{V \mathop \in \FF} \paren {V^\complement}\)





Set Intersection Preserves Subsets














\(\ds \)

\(=\)







\(\ds \paren {\bigcup \FF}^\complement\)





De Morgan's laws














\(\ds \)

\(\subseteq\)







\(\ds C^\complement\)





Definition of Cover of Set and Relative Complement inverts Subsets



From Subset Relation is Transitive, we have that $U \subseteq C^\complement$.

Hence $C^\complement$ is a neighborhood of $x$.
From Set is Open iff Neighborhood of all its Points:

$C^\complement \in \tau$
That is, $C$ is closed in $H$.
$\blacksquare$





