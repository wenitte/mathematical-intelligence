# 

Source: https://proofwiki.org/wiki/Powerset_is_not_Subset_of_its_Set/Proof_1

Theorem
Let $A$ be a set.
Then:

$\powerset A \not \subseteq A$


Proof
Aiming for a contradiction, suppose that $\powerset A \subseteq A$, and define:

$C = \set {x \in \powerset A : x \notin x}$
We have that $C \subseteq \powerset A$, as it contains only the $x \in \powerset A$ meeting the condition $x \notin x$.
Since $\powerset A \subseteq A$, we have:

$C \subseteq A$
and thus

$C \in \powerset A$

We can derive a similar contradiction to Russell's Paradox.
If $C \in C$, then it must meet $C$'s condition that $C \notin C$.
If $C \notin C$, then it meets $C$'s condition for $C \in C$.
$\blacksquare$


Sources
2002: Thomas Jech: Set Theory (3rd ed.) ... (previous): Chapter $1$: Exercise $1.2$




