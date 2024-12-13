# 

Source: https://proofwiki.org/wiki/Group_of_Order_105_has_Normal_Cyclic_Subgroup_of_Index_3

Theorem
Let $G$ be a group of order $105$.
Then $G$ has a normal cyclic subgroup $N$ such that:

$\index G N = 3$
where $\index G N$ denotes the index of $N$ in $G$.


Proof
Let $G$ be a group of order $105$ whose identity is $e$.

From Group of Order 105 has Normal Sylow 5-Subgroup or Normal Sylow 7-Subgroup, $G$ has either:

exactly one normal Sylow $5$-subgroup
or:

exactly one normal Sylow $7$-subgroup.

Suppose $G$ has exactly one normal Sylow $5$-subgroup, which we will denote $P$.
Then $G / P$ is the quotient group of $G$ by $P$ and is of order $21$.
From Group of Order $p q$ has Normal Sylow $p$-Subgroup, $G / P$ has exactly one normal Sylow $7$-subgroup which we denote $N / P$.
From the Correspondence Theorem, $N$ is a normal subgroup of $G$ of order $7 \times 5 = 35$.
It follows from Group of Order 35 is Cyclic Group that $N$ is cyclic.
$\Box$

Now suppose that $G$ has exactly one normal Sylow $7$-subgroup, which we will denote $Q$.
Then $G / Q$ is the quotient group of $G$ by $Q$ and is of order $15$.
From Group of Order $p q$ has Normal Sylow $p$-Subgroup, $G / Q$ has exactly one normal Sylow $5$-subgroup which we denote $M / Q$.
From the Correspondence Theorem, $m$ is a normal subgroup of $G$ of order $5 \times 7 = 35$.
It follows from Group of Order 35 is Cyclic Group that $M$ is cyclic.
$\Box$

Both cases have been covered, and the existence of a normal cyclic subgroup of order $35$ has been proved.
The result follows by definition of the index of a subgroup.
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $12$: Applications of Sylow Theory: Exercise $2$




