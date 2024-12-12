# 

Source: https://proofwiki.org/wiki/F-Sigma_Sets_Closed_under_Union

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $F, F'$ be $F_\sigma$ sets of $T$.

Then their union $F \cup F'$ is also an $F_\sigma$ set of $T$.


Proof
By definition of $F_\sigma$ set, there exist sequences $\sequence {C_n}_{n \mathop \in \N}$ and $\sequence {C'_n}_{n \mathop \in \N}$ of closed sets of $T$ such that:

$F = \ds \bigcup_{n \mathop \in \N} C_n$
$F' = \ds \bigcup_{n \mathop \in \N} C'_n$
By General Self-Distributivity of Set Union, we have:

$F \cup F' = \ds \bigcup_{n \mathop \in \N} \paren {C_n \cup C'_n}$
By Finite Union of Closed Sets is Closed in Topological Space, $C_n \cup C'_n$ is closed, for all $n \in \N$.

Thus $F \cup F'$ is seen to be an $F_\sigma$ set.
$\blacksquare$


Also see
$F_\sigma$ Sets Closed under Intersection
$G_\delta$ Sets Closed under Union




