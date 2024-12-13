# 

Source: https://proofwiki.org/wiki/Inverse_of_Increasing_Bijection_need_not_be_Increasing

Theorem
Let $\struct {S, \preceq_1}$ and $\struct {T, \preceq_2}$ be ordered sets.
Let $\phi: S \to T$ be a bijection which is increasing.

Then $\phi^{-1}: T \to S$ is not necessarily also increasing.


Proof
Proof by Counterexample:
Let $S := \powerset {\set {a, b} }$.
Let $T := \set {1, 2, 3, 4}$.
From Subset Relation on Power Set is Partial Ordering, $\struct {S, \subseteq}$ is an ordered set.
Clearly so is $\struct {T, \le}$ (although its ordering is in fact total, it is still technically an ordered set).
Let $\phi: S \to T$ be defined as:














\(\ds \map \phi \O\)

\(=\)







\(\ds 1\)




















\(\ds \map \phi {\set a}\)

\(=\)







\(\ds 2\)




















\(\ds \map \phi {\set b}\)

\(=\)







\(\ds 3\)




















\(\ds \map \phi {\set {a, b} }\)

\(=\)







\(\ds 4\)









By inspection it can be seen that $\phi$ is a bijection.
Also by inspection it can be seen that $\phi$ is increasing.
But note that while $2 \le 3$, it is not the case that $\set a \subseteq \set b$.
That is, $\phi^{-1}$ is not increasing.
$\blacksquare$


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 7$




