# 

Source: https://proofwiki.org/wiki/Lexicographic_Order_of_Family_of_Totally_Ordered_Sets_is_Totally_Ordered_Set

Theorem
Let $\struct {I, \preceq}$ be a well-ordered set.
For each $i \in I$, let $\struct {S_i, \preccurlyeq_i}$ be a totally ordered set.
Let $\ds D = \prod_{i \mathop \in I} S_i$ be the Cartesian product of the family $\family {\struct {S_i, \preccurlyeq_i} }_{i \mathop \in I}$ indexed by $I$.
Let $\preccurlyeq_D$ be the lexicographic order on $D$, defined as:

$\forall u, v \in D: u \preccurlyeq_D v \iff \begin {cases} u = v \\ \map u i \preccurlyeq_i \map v i & \text {for the $\preceq$-smallest $i \in I$ such that $\map u i \ne \map v i$} \end {cases}$

Then $\struct {D, \preccurlyeq_D}$ is a totally ordered set.


Proof
From Lexicographic Product of Family of Ordered Sets is Ordered Set, $\struct {D, \preccurlyeq_D}$ is an ordered set.
It remains to be shown that $\struct {D, \preccurlyeq_D}$ is totally ordered.

Let $p, q \in D$.
If $p = q$, then $p \preccurlyeq_D q$ by the definition of ordering.
If $p \ne q$, then the set $M = \set {i \in I: p_i \ne q_i}$ is non-empty.
Because $\struct {I, \preceq}$ is a well-ordered set and $M \subseteq I$, $M$ has a $\preceq$-least element $k$.
Because $\preccurlyeq_k$ is a total ordering, it must hold that $p_k \preccurlyeq_k q_k$ or $q_k \preccurlyeq_k p_k$.
But:

$p_k \preccurlyeq_k q_k \implies p \preccurlyeq_D q$
and:

$q_k \preccurlyeq_k p_k \implies q \preccurlyeq_D p$
so $\preccurlyeq_D$ is a total ordering.
$\blacksquare$


Sources
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $2$: Partial Order Relations: Exercise $35 \ \text {(b)}$




