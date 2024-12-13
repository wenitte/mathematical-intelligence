# 

Source: https://proofwiki.org/wiki/Non-Abelian_Group_of_Order_p_Cubed_has_Exactly_One_Normal_Subgroup_of_Order_p

Theorem
Let $p$ be a prime number.
Let $G$ be a non-abelian group of order $p^3$.

Then $G$ contains exactly one normal subgroup of order $p$.


Proof
From Center of Group of Prime Power Order is Non-Trivial, $\map Z G$ is not the trivial subgroup.
From Quotient of Group by Center Cyclic implies Abelian, $G / \map G Z$ cannot be cyclic and non-trivial.
Thus $\order {G / \map G Z}$ cannot be $p$ and so must be $p^2$.
Thus $\order {\map G Z} = p$.
Let $N$ be a normal subgroup of $G$ of order $p$.
Then from Normal Subgroup of p-Group of Order p is Subset of Center:

$N \subseteq \map G Z$
Thus there is no normal subgroup of order $p$ different from $\map G Z$.
Hence the result.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $8$: Homomorphisms, Normal Subgroups and Quotient Groups: Exercise $21$




