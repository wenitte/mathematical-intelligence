# 

Source: https://proofwiki.org/wiki/Compact_Space_satisfies_Finite_Intersection_Axiom



Theorem
The following definitions of the concept of Compact Space in the context of Topology are equivalent:

Definition by Open Covers
A topological space $T = \struct {S, \tau}$ is compact if and only if every open cover for $S$ has a finite subcover.

Definition by Finite Intersection Axiom
A topological space $T = \struct {S, \tau}$ is compact if and only if it satisfies the Finite Intersection Axiom.


Proof
Let every open cover of $S$ have a finite subcover.
Let $\AA$ be any set of closed subsets of $S$ satisfying $\ds \bigcap \AA = \O$.
We define the set:

$\VV := \set {S \setminus A : A \in \AA}$
which is trivially an open cover of $S$.

From De Morgan's Laws: Difference with Union:

$\ds S \setminus \bigcup \VV = \bigcap \set {S \setminus V : V \in \VV} = \bigcap \set {A : A \in \AA} = \O$
and therefore:

$S = \ds \bigcup \VV$

By definition, there exists a finite subcover $\tilde \VV \subseteq \VV$.
We define:

$\tilde \AA := \set {S \setminus V : V \in \tilde \VV}$
then $\tilde \AA \subseteq \AA$ by definition of $\VV$.

Because $\tilde \VV$ covers $S$, it follows directly that:

$\ds \bigcap \tilde \AA = \bigcap \set {S \setminus V : V \in \tilde \VV} = S \setminus \bigcup \tilde \VV = \O$

Thus, in every set $\AA$ of closed subsets of $S$ satisfying $\ds \bigcap \AA = \O$, there exists a finite subset $\tilde \AA$ such that $\ds \bigcap \tilde \AA = \O$.
That is, $S$ satisfies the Finite Intersection Axiom.
$\Box$

The converse works exactly as the previous, but with the roles of the open cover and $\AA$ reversed.
$\blacksquare$


Also see
Equivalence of Definitions of Compact Topological Space


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $3$: Compactness: Global Compactness Properties




