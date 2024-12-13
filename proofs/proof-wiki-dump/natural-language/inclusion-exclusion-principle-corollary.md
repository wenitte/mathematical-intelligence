# 

Source: https://proofwiki.org/wiki/Inclusion-Exclusion_Principle/Corollary

Corollary to Inclusion-Exclusion Principle
Let $\SS$ be an algebra of sets.
Let $A_1, A_2, \ldots, A_n$ be finite sets which are pairwise disjoint.
Let $f: \SS \to \R$ be an additive function.

Then:

$\ds \map f {\bigcup_{i \mathop = 1}^n A_i} = \sum_{i \mathop = 1}^n \map f {A_i}$


Proof
As $A_1, A_2, \ldots, A_n$ are pairwise disjoint, their intersections are all empty.
Then Inclusion-Exclusion Principle holds.
However, from Cardinality of Empty Set, all the terms apart from the first vanish.
$\blacksquare$


Comment
This result is usually quoted in the context of combinatorics, where $f$ is the cardinality function.
It is also seen in the context of probability theory, in which $f$ is taken to be a probability measure.





