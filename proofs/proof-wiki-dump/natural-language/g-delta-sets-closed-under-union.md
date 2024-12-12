# 

Source: https://proofwiki.org/wiki/G-Delta_Sets_Closed_under_Union

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $G, G'$ be $G_\delta$ sets of $T$.

Then their union $G \cup G'$ is also a $G_\delta$ set of $T$.


Proof
By definition of $G_\delta$ set, there exist sequences $\sequence {U_n}_{n \mathop \in \N}$ and $\sequence {U'_n}_{n \mathop \in \N}$ of open sets of $T$ such that:

$G = \ds \bigcap_{n \mathop \in \N} U_n$
$G' = \ds \bigcap_{n \mathop \in \N} U'_n$
Now compute:














\(\ds G \cup G'\)

\(=\)







\(\ds \bigcap_{n \mathop \in \N} \paren {U_n \cup G'}\)





Intersection Distributes over Union: General Result














\(\ds \)

\(=\)







\(\ds \bigcap_{n \mathop \in \N} \bigcap_{m \mathop \in \N} \paren {U_n \cup U'_m}\)





Intersection Distributes over Union: General Result



By axiom $(1)$ of a topology, $U_n \cup U'_m$ is open, for all $n, m \in \N$.
By Cartesian Product of Countable Sets is Countable, $\N \times \N$ is countable.

Thus $G \cup G'$ is seen to be a $G_\delta$ set.
$\blacksquare$


Also see
$G_\delta$ Sets Closed under Intersection
$F_\sigma$ Sets Closed under Union




