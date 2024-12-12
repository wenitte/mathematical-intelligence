# 

Source: https://proofwiki.org/wiki/F-Sigma_Sets_Closed_under_Intersection

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $F, F'$ be $F_\sigma$ sets of $T$.

Then their intersection $F \cap F'$ is also a $F_\sigma$ set of $T$.


Proof
By definition of $F_\sigma$ set, there exist sequences $\sequence {C_n}_{n \mathop \in \N}$ and $\sequence {C'_n}_{n \mathop \in \N}$ of closed sets of $T$ such that:

$F = \ds \bigcup_{n \mathop \in \N} C_n$
$F' = \ds \bigcup_{n \mathop \in \N} C'_n$
Now compute:














\(\ds F \cap F'\)

\(=\)







\(\ds \bigcup_{n \mathop \in \N} \paren {C_n \cap F'}\)





Intersection Distributes over Union: General Result














\(\ds \)

\(=\)







\(\ds \bigcup_{n \mathop \in \N} \bigcup_{m \mathop \in \N} \paren {C_n \cap C'_m}\)





Intersection Distributes over Union: General Result



By Intersection of Closed Sets is Closed in Topological Space, $C_n \cap C'_m$ is closed, for all $n, m \in \N$.
By Cartesian Product of Countable Sets is Countable, $\N \times \N$ is countable.

Thus $F \cap F'$ is seen to be a countable union of closed sets, hence a $F_\sigma$ set.
$\blacksquare$


Also see
$F_\sigma$ Sets Closed under Union
$G_\delta$ Sets Closed under Intersection




