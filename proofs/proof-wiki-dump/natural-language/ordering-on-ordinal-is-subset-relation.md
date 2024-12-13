# 

Source: https://proofwiki.org/wiki/Ordering_on_Ordinal_is_Subset_Relation



Theorem
Let $\struct {S, \prec}$ be an ordinal.
Then $\forall x, y \in S:$

$x \in y \iff x \prec y \iff S_x \subsetneqq S_y \iff x \subsetneqq y$
where $S_x$ and $S_y$ are the initial segments of $S$ determined by $x$ and $y$ respectively.

Thus there is no need to specify what the ordering on an ordinal is -- it is always the subset relation.


Proof
The first equivalence is an immediate consequence of Equivalence of Definitions of Ordinal.
The second equivalence holds for any well-ordered set by Woset Isomorphic to Set of its Sections.
The third equivalence holds by definition of an ordinal.

It follows from Ordering is Equivalent to Subset Relation and Order Isomorphism between Wosets is Unique that this ordering is the only one.
$\blacksquare$


Also known as
Some sources refer to this result as Copi's identity for Irving Copi, from his statement of this in his $1954$ book Symbolic Logic.
However, it may have been known about earlier than that and may not be directly attributable to Copi.


Sources
1993: Keith Devlin: The Joy of Sets: Fundamentals of Contemporary Set Theory (2nd ed.) ... (previous) ... (next): $\S 1$: Naive Set Theory: $\S 1.7$: Well-Orderings and Ordinals




