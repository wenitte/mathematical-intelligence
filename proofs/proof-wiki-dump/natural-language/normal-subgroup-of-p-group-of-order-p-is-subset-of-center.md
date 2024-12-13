# 

Source: https://proofwiki.org/wiki/Normal_Subgroup_of_p-Group_of_Order_p_is_Subset_of_Center

Theorem
Let $p$ be a prime number.
Let $G$ be a $p$-group.
Let $N$ be a normal subgroup of $G$ of order $p$.

Then:

$N \subseteq \map Z G$
where $\map Z G$ denotes the center of $G$.


Proof
From Intersection of Normal Subgroup with Center in p-Group:

$\order {N \cap \map Z G} > 1$
From Intersection of Subgroups is Subgroup, $N \cap \map Z G$ is a subgroup of $N$.
It follows from Lagrange's Theorem that:

$\order {N \cap \map Z G} = p$
and so:

$N \cap \map Z G = N$
But from Intersection of Subgroups is Subgroup, $N \cap \map Z G$ is a subgroup of $\map Z G$
That is:

$N$ is a subgroup of $\map Z G$
and the result follows.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $8$: Homomorphisms, Normal Subgroups and Quotient Groups: Exercise $21$




