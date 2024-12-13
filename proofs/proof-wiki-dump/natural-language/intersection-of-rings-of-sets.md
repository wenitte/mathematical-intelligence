# 

Source: https://proofwiki.org/wiki/Intersection_of_Rings_of_Sets

Theorem
Let $\RR_k$ be a ring of sets, where $k$ is an element of an arbitrary set of indices.
Then their intersection $\ds \RR = \bigcap_k \RR_k$ is itself a ring of sets.


Proof
Consider the set $\ds \SS = \bigcup_k \RR_k$.
Let $S = \set {X \in Y: Y \in \SS}$.
This contains all the elements of all the sets contained in all the $\RR_k$.
Now consider the power set $\powerset S$ of $S$.
By Power Set is Algebra of Sets and the definition of algebra of sets, we have that $\powerset S$ is a ring of sets.
Thus $\struct {\powerset S, *, \cap}$ is a ring (in the abstract algebraic sense of the term).
From the method of construction of $\powerset S$, it follows that all the $\struct {\RR_k, *, \cap}$ are subrings of $\powerset S$.
The result then follows from Intersection of Subrings is Subring.
$\blacksquare$





