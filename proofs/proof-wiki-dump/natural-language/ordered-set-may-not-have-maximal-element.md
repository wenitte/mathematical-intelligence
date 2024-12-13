# 

Source: https://proofwiki.org/wiki/Ordered_Set_may_not_have_Maximal_Element

Theorem
Let $\struct {S, \preccurlyeq}$ be an ordered set.

It may be the case that $S$ has no maximal elements.


Proof
Consider the set $S$ defined as:

$S = \N \setminus \set 0$
That is, $S$ is the set of natural numbers with $0$ removed.
Let $\preccurlyeq$ be the ordering on $S$ defined as:

$\forall a, b \in S: a \preccurlyeq b \iff a \divides b$
where $a \divides b$ denotes that $a$ is a divisor of $b$.
From Divisor Relation on Positive Integers is Partial Ordering, $\struct {S, \preccurlyeq}$ is a partially ordered set.

Aiming for a contradiction, suppose $S$ has a maximal element $m$.
Consider the natural number $n = 2 m$.
Then:

$m \divides n$
but:

$m \ne n$
and so by definition $m$ is not a maximal element of $S$.
Hence by Proof by Contradiction it follows that there exists no such $m$.
Hence the result.
$\blacksquare$


Sources
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $2$: Partial Order Relations




