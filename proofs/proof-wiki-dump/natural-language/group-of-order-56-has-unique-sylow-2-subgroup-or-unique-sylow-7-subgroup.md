# 

Source: https://proofwiki.org/wiki/Group_of_Order_56_has_Unique_Sylow_2-Subgroup_or_Unique_Sylow_7-Subgroup

Theorem
Let $G$ be a group of order $56$.
Then $G$ has either:

exactly one normal Sylow $2$-subgroup
or:

exactly one normal Sylow $7$-subgroup.


Proof
Let $G$ be a group of order $56$ whose identity is $e$.
We have that:

$56 = 2^3 \times 7$
From the First Sylow Theorem, $G$ has at least one Sylow $2$-subgroup and Sylow $7$-subgroup.
Let:

$n_2$ denote the number of Sylow $2$-subgroups of $G$
$n_7$ denote the number of Sylow $7$-subgroups of $G$.

From Sylow p-Subgroup is Unique iff Normal:

if $n_2 = 1$ then the unique Sylow $2$-subgroup is normal
and:

if $n_7 = 1$ then the unique Sylow $7$-subgroup is normal.

It remains to be shown that either $n_2 = 1$ or $n_7 = 1$.

By the Fourth Sylow Theorem:

$n_2 \equiv 1 \pmod 2$ (that is, $n_2$ is odd)
and from the Fifth Sylow Theorem:

$n_2 \divides 56$
where $\divides$ denotes divisibility.
It follows that $n_2 \in \set {1, 7}$.

By the Fourth Sylow Theorem:

$n_7 \equiv 1 \pmod 7$
and from the Fifth Sylow Theorem:

$n_7 \divides 56$
where $\divides$ denotes divisibility.
It follows that $n_7 \in {1, 8}$.

If either $n_2 = 1$ or $n_7 = 1$ the proof is finished.

Suppose $n_7 = 8$.
As all of these Sylow $7$-subgroups are prime, the intersection of any $2$ of them is $\set e$.
Thus, these $8$ Sylow $7$-subgroups contribute $6 \times 8 = 48$ distinct elements to $G$.
This leaves $7$ elements still to be accounted for.

A Sylow $2$-subgroup is of order $2^3 = 8$.
Thus all $7$ of these remaining elements must all be in that one Sylow $2$-subgroup
So if $n_7 \ne 1$, then $n_2 = 1$.
The result follows.
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $12$: Applications of Sylow Theory: Exercise $3$




