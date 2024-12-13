# 

Source: https://proofwiki.org/wiki/Power_Set_is_Closed_under_Set_Complement



Theorem
Let $S$ be a set.
Let $\powerset S$ be the power set of $S$.

Then:

$\forall A \in \powerset S: \relcomp S A \in \powerset S$


Proof
Let $A \in \powerset S$.
Then by the definition of power set, $A \subseteq S$.
By definition of relative complement:

$\relcomp S A = \set {x \in S: x \notin A}$
Hence $\relcomp S A$ is a subset of $S$.
That is:

$\relcomp S A \in \powerset S$
and closure is proved.
$\blacksquare$


Also see
Power Set is Closed under Union
Power Set is Closed under Intersection
Power Set is Closed under Set Difference


Sources
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): algebra of sets




