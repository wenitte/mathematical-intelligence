# 

Source: https://proofwiki.org/wiki/Divisor_Relation_on_Positive_Integers_is_Well-Founded_Ordering

Theorem
The divisor relation on $\Z_{>0}$ is a well-founded ordering.


Proof
Let $\struct {\Z_{>0}, \divides}$ denote the relational structure formed from the strictly positive integers $\Z_{>0}$ under the divisor relation $\divides$.
From Divisor Relation on Positive Integers is Partial Ordering, $\struct {\Z_{>0}, \divides}$ is a partially ordered set.
It remains to be shown that $\divides$ is well-founded.
By definition, we need to show:

For any non-empty set $T \subseteq \Z_{>0}$, there is an element $z \in T$ such that for all $y \in T \setminus \set z$, $y \nmid z$.
We choose $z = \min T$ as per the usual ordering on $\Z_{>0}$.
Then for any $y \in T \setminus \set z$, we have $y > z$.
By the contrapositive of Corollary to Absolute Value of Integer is not less than Divisors, we have $y \nmid z$.
Hence the result.
$\blacksquare$


Sources
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $2$: Partial Order Relations: Exercise $11$




