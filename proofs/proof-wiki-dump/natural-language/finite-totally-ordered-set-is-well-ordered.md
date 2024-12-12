# 

Source: https://proofwiki.org/wiki/Finite_Totally_Ordered_Set_is_Well-Ordered

Theorem
Every finite totally ordered set is well-ordered.


Proof
Let $\struct {S, \preceq}$ be a finite totally ordered set.
Aiming for a contradiction, suppose $\preceq$ is not a well-founded relation.
From Infinite Sequence Property of Well-Founded Relation, $\struct {S, \preceq}$ is well-founded if and only if there is no infinite sequence $\sequence {a_n}$ of elements of $S$ such that $\forall n \in \N: a_{n + 1} \prec a_n$.
Let us construct such an infinite sequence.
Then at least some of the terms would be repeated in that sequence.
So there would be, for example:

$s_i \preceq s_j \preceq s_k \preceq s_i$
But then we have:

$s_i \preceq s_j$ and $s_j \preceq s_k$
and as $\preceq$ is transitive, we have:

$s_i \preceq s_k$
But as we also have $s_k \preceq s_i$
we have $s_i \preceq s_k$ and $s_k \preceq s_i$ where $s_i \ne s_k$.
That is, $\preceq$ is not antisymmetric.
That is, $\preceq$ is therefore not a totally ordered set.
From this contradiction it follows that $\preceq$ is well-founded.
The result follows from the definition of well-ordered set.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 14$: Orderings
1968: A.N. Kolmogorov and S.V. Fomin: Introductory Real Analysis ... (previous) ... (next): $\S 3.5$: Well-ordered sets. Ordinal Numbers: Example $1$




