# 

Source: https://proofwiki.org/wiki/Group_of_Order_36_is_not_Simple

Theorem
Let $G$ be of order $36$.
Then $G$ is not simple.


Proof
Aiming for a contradiction, suppose $G$ is simple.
We have that:

$36 = 2^2 \times 3^2$
Let $n_3$ denote the number of Sylow $3$-subgroups of $G$.
From the Fourth Sylow Theorem:

$n_3 \equiv 1 \pmod 3$
and from the Fifth Sylow Theorem:

$n_3 \divides 4$
where $\divides$ denotes divisibility.
Hence $n_3$ must be either $1$ or $4$.
Let $P$ be a Sylow $3$-subgroup of $G$. 
Let $n_3 = 4$.
By Number of Sylow p-Subgroups is Index of Normalizer of Sylow p-Subgroup, the normalizer of $P$ has index $4$.
By Order of Simple Group divides Factorial of Index of Subgroup:

$\order G \divides 4!$
But $36$ does not divide $24$.
Hence it cannot be the case that $n_3 = 4$.
Hence $n_3 = 1$.
From Sylow $p$-Subgroup is Unique iff Normal, $P$ is normal.
This contradicts the assumption that $G$ is simple.
Hence $G$ is not simple.
$\blacksquare$





