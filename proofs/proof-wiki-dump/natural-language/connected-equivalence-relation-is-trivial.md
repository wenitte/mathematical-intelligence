# 

Source: https://proofwiki.org/wiki/Connected_Equivalence_Relation_is_Trivial



Theorem
Let $S$ be a set.
Let $\RR$ be a relation on $S$ which is both connected and an equivalence relation.

Then $\RR$ is the trivial relation on $S$.


Proof
By definition of equivalence relation, $\RR$ is an equivalence relation if and only if:

$\Delta_S \cup \RR^{-1} \cup \RR \circ \RR \subseteq \RR$

From Relation is Connected iff Union with Inverse and Diagonal is Trivial Relation:

$\Delta_S \cup \RR^{-1} \cup \RR = S \times S$
Hence the result.
$\blacksquare$


Examples
Arbitrary Set of 4 Elements
Let $V = \set {a, b, c, d}$.
Let $S \subseteq V \times V$ such that:

$S = \set {\tuple {a, b}, \tuple {b, c}, \tuple {c, d} }$
Let $\RR$ be an equivalence relation on $V$ such that:

$S \subseteq \RR$
Then $\RR$ is the trivial relation on $S$.





