# 

Source: https://proofwiki.org/wiki/Initial_Segment_of_Ordinal_is_Ordinal

Theorem
Let $S$ be an ordinal.
Let $a \in S$.

Then the initial segment $S_a = a$ of $S$ determined by $a$ is also an ordinal.

In other words, every element of a (non-empty) ordinal is also an ordinal.


Proof
By Subset of Well-Ordered Set is Well-Ordered, $S_a$ is well-ordered.

Suppose that $b \in S_a$.
From Ordering on Ordinal is Subset Relation, and the definition of an initial segment, it follows that $b \subset a$.

Then:














\(\ds \paren {S_a}_b\)

\(=\)







\(\ds \set {x \in S_a: x \subset b}\)





Definition of Initial Segment














\(\ds \)

\(=\)







\(\ds \set {x \in S: x \subset a \land x \subset b}\)





Definition of Initial Segment














\(\ds \)

\(=\)







\(\ds \set {x \in S: x \subset b}\)





as $b \subset a$














\(\ds \)

\(=\)







\(\ds S_b\)





Definition of Initial Segment














\(\ds \)

\(=\)







\(\ds b\)





as $S$ is an ordinal




The result follows from the definition of an ordinal.
$\blacksquare$


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 7.6$
1993: Keith Devlin: The Joy of Sets: Fundamentals of Contemporary Set Theory (2nd ed.) ... (previous) ... (next): $\S 1$: Naive Set Theory: $\S 1.7$: Well-Orderings and Ordinals: Theorem $1.7.6$




