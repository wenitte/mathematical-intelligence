# 

Source: https://proofwiki.org/wiki/Normal_Sylow_p-Subgroups_in_Group_of_Order_12

Theorem
Let $G$ be of order $12$.
Then $G$ has either:

a normal Sylow $2$-subgroup
or:

a normal Sylow $3$-subgroup.


Proof
Note that a Sylow $2$-subgroup of $G$ is of order $4$.
From Sylow $3$-Subgroups in Group of Order 12, there are either $1$ or $4$ Sylow $3$-subgroups.

Suppose there is exactly $1$ Sylow $3$-subgroup $P$.
Then from Sylow $p$-Subgroup is Unique iff Normal, $P$ is normal.
$\Box$

Suppose there are $4$ Sylow $3$-subgroups $P_1$, $P_2$, $P_3$ and $P_4$.
Each intersection $P_i \cap P_j$ for $i, j \in \set {1, 2, 3, 4}, i \ne j$ is the trivial subgroup of $G$:

$P_i \cap P_j = \set e$

Thus $G$ contains:

The identity element $e$
$8$ elements of order $3$, of which $2$ each are in $P_1$, $P_2$, $P_3$ and $P_4$
$3$ more elements, which (along with $e$) must form the Sylow $2$-subgroup of order $4$.
This Sylow $2$-subgroup $Q$ must be unique.
Hence by Sylow $p$-Subgroup is Unique iff Normal, $Q$ is normal.
$\Box$

Hence the result.
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $12$: Applications of Sylow Theory: $(3)$ Groups of order $12$: Proposition $12.3$




