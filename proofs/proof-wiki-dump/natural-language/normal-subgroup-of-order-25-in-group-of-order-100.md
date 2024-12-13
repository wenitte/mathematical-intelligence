# 

Source: https://proofwiki.org/wiki/Normal_Subgroup_of_Order_25_in_Group_of_Order_100

Theorem
Let $G$ be a group of order $100$.
Then $G$ has a normal subgroup of order $25$.


Proof
Let $r$ be the number of Sylow $p$-subgroup of order $5^2 = 25$
The First Sylow Theorem guarantees existence, so $r \ge 1$.
From the Fourth Sylow Theorem:

$r \equiv 1 \pmod 5$
That is:

$r \in \set {1, 6, 11, 16, \ldots}$
From the Fifth Sylow Theorem:

$r \divides \dfrac {100} {25} = 4$
from which it follows that $r = 1$.
From Sylow p-Subgroup is Unique iff Normal, this unique Sylow $5$-subgroup must be normal.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: The Sylow Theorems: $\S 59$




