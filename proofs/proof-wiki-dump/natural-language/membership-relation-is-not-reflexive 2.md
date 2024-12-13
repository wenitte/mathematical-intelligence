# 

Source: https://proofwiki.org/wiki/Membership_Relation_is_Not_Reflexive

Theorem
Let $\Bbb S$ be a set of sets in the context of pure set theory
Let $\RR$ denote the membership relation on $\Bbb S$:

$\forall \tuple {a, b} \in \Bbb S \times \Bbb S: \tuple {a, b} \in \RR \iff a \in b$

$\RR$ is not in general a reflexive relation.


Proof
In the extreme pathological edge case:

$S = \set S$
it is seen that:

$S \in S$
and so:

$\forall x \in S: x \in x$
demonstrating that $\RR$ is reflexive in this specific case.

However, in this case $\set S$ is a set on which the Axiom of Foundation does not apply.
This is seen in Set is Not Element of Itself.
Hence this set is not supported by Zermelo-Fraenkel set theory.

Consider the set:

$T = \set {\O, \set \O}$
Then we immediately see that:

$\O \notin \O$
and so $\RR$ is seen to be not reflexive.
$\blacksquare$


Sources
1993: Keith Devlin: The Joy of Sets: Fundamentals of Contemporary Set Theory (2nd ed.) ... (previous) ... (next): $\S 1$: Naive Set Theory: $\S 1.5$: Relations: Exercise $1.5.1$




