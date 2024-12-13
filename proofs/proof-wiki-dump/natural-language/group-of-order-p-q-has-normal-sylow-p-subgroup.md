# 

Source: https://proofwiki.org/wiki/Group_of_Order_p_q_has_Normal_Sylow_p-Subgroup

Theorem
Let $p$ and $q$ be prime numbers such that $p > q$.
Let $G$ be a group of order $p q$.

Then $G$ has exactly one Sylow $p$-subgroup.
This Sylow $p$-subgroup is normal.


Proof
Let $n_p$ denote the number of Sylow $p$-subgroups in $G$.

From the Fourth Sylow Theorem:

$n_p \equiv 1 \pmod p$
From the Fifth Sylow Theorem:

$n_p \divides p q$
where $\divides$ denotes divisibility.

The divisors of $p q$ are $1$, $p$, $q$ and $p q$.
Of these:

$p$ and $p q$ are $\equiv 0 \pmod p$
and as $p > q$:

$q \equiv q \pmod p$

So the only possibility for $n_p$ is $1$.
Let $P$ denote this unique Sylow $p$-subgroups.

From Sylow $p$-Subgroup is Unique iff Normal, $P$ is normal.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: The Sylow Theorems: $\S 59 \alpha$
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $12$: Applications of Sylow Theory: $(2)$ Groups of order $21$: Proposition $12.1$




