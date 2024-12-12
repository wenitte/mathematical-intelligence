# 

Source: https://proofwiki.org/wiki/G-Delta_Sets_Closed_under_Intersection

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $G, G'$ be $G_\delta$ sets of $T$.

Then their intersection $G \cap G'$ is also a $G_\delta$ set of $T$.


Proof
By definition of $G_\delta$ set, there exist sequences $\sequence {U_n}_{n \mathop \in \N}$ and $\sequence {U'_n}_{n \mathop \in \N}$ of open sets of $T$ such that:

$G = \ds \bigcap_{n \mathop \in \N} U_n$
$G' = \ds \bigcap_{n \mathop \in \N} U'_n$
By General Self-Distributivity of Intersection, we have:

$G \cap G' = \ds \bigcap_{n \mathop \in \N} \paren {U_n \cap U'_n}$
By Intersection of Closed Sets is Closed in Topological Space, $U_n \cap U'_m$ is closed, for all $n, m \in \N$.
Thus $G \cap G'$ is seen to be a $G_\delta$ set.
$\blacksquare$


Also see
$G_\delta$ Sets Closed under Union
$F_\sigma$ Sets Closed under Intersection




