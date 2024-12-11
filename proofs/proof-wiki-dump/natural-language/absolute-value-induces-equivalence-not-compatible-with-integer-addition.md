# 

Source: https://proofwiki.org/wiki/Absolute_Value_induces_Equivalence_not_Compatible_with_Integer_Addition

Theorem
Let $\Z$ be the set of integers.
Let $\RR$ be the relation on $\Z$ defined as:

$\forall x, y \in \Z: \tuple {x, y} \in \RR \iff \size x = \size y$
where $\size x$ denotes the absolute value of $x$.

Then $\RR$ is not a congruence relation for integer addition.


Proof
From Absolute Value Function on Integers induces Equivalence Relation, $\RR$ is an equivalence relation.

However, consider that:














\(\ds \size {-1} = \size 1\)

\(\leadsto\)







\(\ds -1 \mathop \RR 1\)




















\(\ds \size 2 = \size 2\)

\(\leadsto\)







\(\ds 2 \mathop \RR 2\)









By conventional integer addition:

$-1 + 2 = 1$
while:

$1 + 2 = 3$
But it does not hold that:

$\size 1 = \size 3$
Therefore $\RR$ is not a congruence relation for integer addition.
Hence the result, by Proof by Counterexample.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 11$: Quotient Structures: Example $11.1$




