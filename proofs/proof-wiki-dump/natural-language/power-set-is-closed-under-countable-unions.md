# 

Source: https://proofwiki.org/wiki/Power_Set_is_Closed_under_Countable_Unions

Theorem
Let $S$ be a set.
Let $\powerset S$ be the power set of $S$.

Then:

$\forall A_n \in \powerset S: n = 1, 2, \ldots: \ds \bigcup_{n \mathop = 1}^\infty A_n \in \powerset S$


Proof
Let $\sequence {A_i}$ be a countably infinite sequence of sets in $\powerset S$.

Consider an element of the union of all the sets in this $\sequence {A_i}$:

$\ds x \in \bigcup_{i \mathop \in \N} A_i$

By definition of union:

$\exists i \in \N: x \in A_i$
But $A_i \in \powerset S$ and so by definition $A_i \subseteq S$.
By definition of subset, it follows that $x \in S$.
Hence, again by definition of subset:

$\ds \bigcup_{i \mathop \in \N} A_i \subseteq S$
Finally, by definition of power set:

$\ds \bigcup_{i \mathop \in \N} A_i \in \powerset S$
$\blacksquare$


Also see
Power Set is Closed under Union
Power Set is Closed under Intersection
Power Set is Closed under Set Difference




