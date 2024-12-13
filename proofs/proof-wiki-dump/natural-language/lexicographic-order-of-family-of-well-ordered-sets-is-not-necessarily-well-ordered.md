# 

Source: https://proofwiki.org/wiki/Lexicographic_Order_of_Family_of_Well-Ordered_Sets_is_not_necessarily_Well-Ordered

Theorem
Let $\struct {I, \preceq}$ be a well-ordered set.
For each $i \in I$, let $\struct {S_i, \preccurlyeq_i}$ be a well-ordered set.
Let $\ds D = \prod_{i \mathop \in I} S_i$ be the Cartesian product of the family $\family {\struct {S_i, \preccurlyeq_i} }_{i \mathop \in I}$ indexed by $I$.
Let $\preccurlyeq_D$ be the lexicographic order on $D$, defined as:

$\forall u, v \in D: u \preccurlyeq_D v \iff \begin {cases} u = v \\ \map u i \preccurlyeq_i \map v i & \text {for the $\preceq$-smallest $i \in I$ such that $\map u i \ne \map v i$} \end {cases}$

Then it is not necessarily the case that $\struct {D, \preccurlyeq_D}$ is also a well-ordered set.


Proof
Proof by Counterexample:
Let $\struct {I, \preceq} = \struct {\N, \le}$.
Let $\struct {S_i, \preccurlyeq_i} = \struct {\N, \le}$ for all $i \in \N$.

Let $n \in \N$.
Let $\ds u_n \in \prod_{i \mathop \in \N} \N$ be the mapping defined as:

$\map {u_n} i = \begin {cases} 0 & : i \le n \\ 1 & : i > n \end {cases}$

It is to be shown that the instances of $u_n$ form an infinite decreasing sequence in $\ds {\bigotimes_{i \mathop \in \N} }^l \N$.
Let $\sequence S$ be the sequence of elements of $\prod_{i \mathop \in \N} \N$ defined as:

$s_i = \sequence {\map {u_n} i}$
We have that:

$s_i$ starts with $i - 1$ instances of $0$
$s_{i + 1}$ starts with $i$ instances of $0$.
Hence $s_i$ and $s_{i + 1}$ are first different at that $i$th element.
Further:

the $i$th element of $s_i$ is $1$
the $i$th element of $s_{i + 1}$ is $0$
and so by definition of the lexicographic order:

$s_{i + 1} \preccurlyeq_l s_i$

We have that the terms of $\sequence S$ form a non-empty subset of $\ds \prod_{i \mathop \in \N} \N$ which has no minimal element by $\preccurlyeq_l$.
Hence by Infinite Sequence Property of Well-Founded Relation, $\preccurlyeq_l$ is not well-founded and so is not a well-ordering.
$\blacksquare$


Sources
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $2$: Partial Order Relations: Exercise $36$




