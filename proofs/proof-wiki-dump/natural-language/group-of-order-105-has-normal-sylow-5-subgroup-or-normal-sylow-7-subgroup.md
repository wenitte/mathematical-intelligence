# 

Source: https://proofwiki.org/wiki/Group_of_Order_105_has_Normal_Sylow_5-Subgroup_or_Normal_Sylow_7-Subgroup

Theorem
Let $G$ be a group of order $105$.
Then $G$ has either:

exactly one normal Sylow $5$-subgroup
or:

exactly one normal Sylow $7$-subgroup.


Proof
Let $G$ be a group of order $105$ whose identity is $e$.
We have that:

$105 = 3 \times 5 \times 7$
From the First Sylow Theorem, $G$ has at least one Sylow $3$-subgroup, Sylow $5$-subgroup and Sylow $7$-subgroup.
Let:

$n_5$ denote the number of Sylow $5$-subgroups of $G$
$n_7$ denote the number of Sylow $7$-subgroups of $G$.
$5$ and $7$ appear in $105$ with multiplicity $1$.
Hence any such Sylow $p$-subgroups are prime groups.

From Sylow p-Subgroup is Unique iff Normal:

if $n_5 = 1$ then the unique Sylow $5$-subgroup is normal
and:

if $n_7 = 1$ then the unique Sylow $7$-subgroup is normal.

It remains to be shown that either $n_5 = 1$ or $n_7 = 1$.

By the Fourth Sylow Theorem:

$n_5 \equiv 1 \pmod 5$
and from the Fifth Sylow Theorem:

$n_5 \divides 105$
where $\divides$ denotes divisibility.
It follows that $n_5 \in \set {1, 21}$.

By the Fourth Sylow Theorem:

$n_7 \equiv 1 \pmod 7$
and from the Fifth Sylow Theorem:

$n_7 \divides 105$
where $\divides$ denotes divisibility.
It follows that $n_7 \in {1, 15}$.

If either $n_5 = 1$ or $n_7 = 1$ the proof is finished.

Suppose $n_7 = 15$.
As all of these Sylow $7$-subgroups are prime, the intersection of any $2$ of them is $\set e$.
Thus, these $15$ Sylow $7$-subgroups contribute $6 \times 15 = 90$ distinct elements to $G$.
This leaves $15$ elements still to be accounted for.

Suppose $n_5 = 21$.
By a similar argument, these $21$ Sylow $5$-subgroups contribute $4 \times 21 = 84$ distinct elements to $G$.
None of these elements, apart from $e$, can also be elements of one of the Sylow $7$-subgroups.
But there are only $15$ elements available.
So it is not possible for both $n_7 = 15$ and $n_5 = 21$.
So either $n_7 = 1$ or $n_5 = 1$.
The result follows.
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $12$: Applications of Sylow Theory: Exercise $2$




