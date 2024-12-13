# 

Source: https://proofwiki.org/wiki/Infinite_Sequence_Property_of_Strictly_Well-Founded_Relation/Forward_Implication

Theorem
Let $\struct {S, \RR}$ be a relational structure.
Let $\RR$ be a strictly well-founded relation.

Then there exists no infinite sequence $\sequence {a_n}$ of elements of $S$ such that:

$\forall n \in \N: a_{n + 1} \mathrel \RR a_n$


Proof
Let $\RR$ be a strictly well-founded relation.
Aiming for a contradiction, suppose there exists an infinite sequence $\sequence {a_n}$ in $S$ such that:

$\forall n \in \N: a_{n + 1} \mathrel \RR a_n$
Let $T = \set {a_0, a_1, a_2, \ldots}$.
Let $a_k \in T$ be a strictly minimal element of $T$.
That is:

$\forall y \in T: y \not \mathrel \RR a_k$
But we have that:

$a_{k + 1} \mathrel \RR a_k$
So $a_k$ is not a strictly minimal element.
It follows by Proof by Contradiction that such an infinite sequence cannot exist.
$\blacksquare$





