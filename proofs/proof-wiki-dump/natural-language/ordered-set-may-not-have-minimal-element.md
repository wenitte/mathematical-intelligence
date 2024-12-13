# 

Source: https://proofwiki.org/wiki/Ordered_Set_may_not_have_Minimal_Element

Theorem
Let $\struct {S, \preccurlyeq}$ be an ordered set.

It may be the case that $S$ has no minimal elements.


Proof
Let $\Q_{>0}$ denote the set of (strictly) positive rational numbers.
From Rational Numbers form Totally Ordered Field, the rational numbers $\Q$ are totally ordered by the usual ordering $\le$.
From Subset of Toset is Toset, $\Q_{>0}$ is also totally ordered by $\le$.
Thus $\struct {\Q_{>0}, \le}$ is an ordered set.

Aiming for a contradiction, suppose there exists a minimal element $m$ of $\struct {\Q_{>0}, \le}$.
From Minimal Element in Toset is Unique and Smallest, $m$ is also the smallest element of $\struct {\Q_{>0}, \le}$
By Smallest Strictly Positive Rational Number does not Exist, $\struct {\Q_{>0}, \le}$ has no smallest element.
Hence $m$ cannot be a minimal element of $\struct {\Q_{>0}, \le}$.
It follows by Proof by Contradiction that $\struct {\Q_{>0}, \le}$ has no minimal elements.
$\blacksquare$


Sources
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $2$: Partial Order Relations




