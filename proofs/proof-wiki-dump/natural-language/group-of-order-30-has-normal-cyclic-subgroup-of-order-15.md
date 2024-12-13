# 

Source: https://proofwiki.org/wiki/Group_of_Order_30_has_Normal_Cyclic_Subgroup_of_Order_15

Theorem
Let $G$ be of order $30$.
Then $G$ has a normal subgroup of order $15$ which is cyclic.


Proof
By Group of Order 15 is Cyclic Group, any subgroup of $G$ of order $15$ is cyclic.
It remains to be proved that a subgroup of $G$ of order $15$ exists, and that it is normal.

Let $n_3$ denote the number of Sylow $3$-subgroups of $G$.
From the Fourth Sylow Theorem:

$n_3 \equiv 1 \pmod 3$
and from the Fifth Sylow Theorem:

$n_3 \divides 10$
where $\divides$ denotes divisibility.
It follows that $n_3 \in \set {1, 10}$.

Let $n_5$ denote the number of Sylow $5$-subgroups of $G$.
From the Fourth Sylow Theorem:

$n_5 \equiv 1 \pmod 5$
and from the Fifth Sylow Theorem:

$n_5 \divides 30$
It follows that $n_5 \in \set {1, 6}$.

Suppose $n_3 = 1$.
Let $P$ denote the unique Sylow $3$-subgroup of $G$.
From Sylow $p$-Subgroup is Unique iff Normal, $P$ is normal.
Thus we may form the quotient group $G / P$, which is of order $10$.
From Groups of Order 2p, $G / P$ has a unique Sylow $5$-subgroup, which we will denote $N / P$.
By the Correspondence Theorem, $N$ is a normal subgroup of $G$ with $15$ elements.
As noted, $N$ is cyclic.
$\Box$

Suppose $n_3 = 10$.
Let the Sylow $3$-subgroups of $G$ be denoted $P_1, P_2, \ldots, P_{10}$.
Each intersection $P_i \cap P_j$ for $i, j \in \set {1, 2, \ldots, 10}, i \ne j$ is the trivial subgroup of $G$:

$P_i \cap P_j = \set e$
Thus $G$ contains:

The identity element $e$
$20$ elements of order $3$, of which $2$ each are in $P_1, P_2, \ldots, P_{10}$
$9$ more elements of $G$ which are in subgroups of $G$ different from the Sylow $3$-subgroups, and so have orders different from $3$.
Suppose $n_5 = 6$.
By a similar argument to the above, these $6$ Sylow $5$-subgroups contribute $24$ elements of order $5$ to $G$.
This is not possible because there are only $9$ elements of $G$ so far unaccounted for.
So if $G$ has $10$ Sylow $3$-subgroups, it can have only $1$ Sylow $5$-subgroup, which we will denote $Q$.
From Sylow $p$-Subgroup is Unique iff Normal, $Q$ is normal.
Thus we may form the quotient group $G / Q$, which is of order $16$.
From Groups of Order 2p, $G / Q$ has a unique Sylow $3$-subgroup, which we will denote $N / Q$.
Again by the Correspondence Theorem, $N$ is a normal subgroup of $G$ with $15$ elements.
As noted, $N$ is cyclic.
$\Box$

Both cases have been accounted for:

that $G$ has $1$ Sylow $3$-subgroup
that $G$ has $10$ Sylow $3$-subgroups.
Both cases result in $G$ having a normal subgroup of order $15$ which is cyclic.
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $12$: Applications of Sylow Theory: $(5)$ Groups of order $30$: Proposition $12.5$




