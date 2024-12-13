# 

Source: https://proofwiki.org/wiki/Group_of_Order_48_is_not_Simple

Theorem
Let $G$ be of order $48$.
Then $G$ is not simple.


Proof
Aiming for a contradiction, suppose $G$ is simple.
We have that:

$48 = 2^4 \times 3$
Let $n_2$ denote the number of Sylow $2$-subgroups of $G$.
From Sylow $2$-Subgroups in Group of Order $48$, $n_2$ is either $1$ or $3$.
Let $P$ be a Sylow $2$-subgroup of $G$.
Let $n_2 = 3$.
By Number of Sylow p-Subgroups is Index of Normalizer of Sylow p-Subgroup, the normalizer of $P$ has index $3$.
By Order of Simple Group divides Factorial of Index of Subgroup:

$\order G \divides 3!$
But $48$ does not divide $6$.
Hence it cannot be the case that $n_2 = 3$.
Hence $n_2 = 1$.
From Sylow $p$-Subgroup is Unique iff Normal, $P$ is normal.
This contradicts the assumption that $G$ is simple.
Hence $G$ is not simple.
$\blacksquare$





