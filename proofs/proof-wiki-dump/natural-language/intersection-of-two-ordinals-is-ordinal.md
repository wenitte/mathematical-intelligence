# 

Source: https://proofwiki.org/wiki/Intersection_of_Two_Ordinals_is_Ordinal

Theorem
Let $S$ and $T$ be ordinals.
Then $S \cap T$ is an ordinal.


Proof
Because $S$ and $T$ are ordinals, a fortiori they are (strictly) well-ordered by the subset relation.
Let $a \in S \cap T$.
Then the initial segments $S_a$ and $T_a$ are such that:

$S_a = a = T_a$
That is:

$\set {x \in S: x \subset a} = a = \set {y \in T: y \subset a}$
So:

$a = \set {z \in S \cap T: z \subset a} = \paren {S \cap T}_a$
Hence it is seen that $\paren {S \cap T}_a$ is an initial segment of both $S$ and $T$.
The result follows from Initial Segment of Ordinal is Ordinal.
$\blacksquare$


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 7.9$
1993: Keith Devlin: The Joy of Sets: Fundamentals of Contemporary Set Theory (2nd ed.) ... (previous) ... (next): $\S 1$: Naive Set Theory: $\S 1.7$: Well-Orderings and Ordinals: Theorem $1.7.8$




