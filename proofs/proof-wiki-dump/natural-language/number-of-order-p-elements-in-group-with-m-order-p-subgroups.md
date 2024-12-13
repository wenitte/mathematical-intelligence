# 

Source: https://proofwiki.org/wiki/Number_of_Order_p_Elements_in_Group_with_m_Order_p_Subgroups

Theorem
Let $G$ be a group whose identity is $e$.
Let $G$ have $m$ subgroups of order $p$.

The total number of elements of $G$ of order $p$ is $m \paren {p - 1}$.


Proof
Let $H \le G$ be a subgroup of $G$ of order $p$.
From Prime Group is Cyclic, $H$ is a cyclic group.
From Group of Prime Order p has p-1 Elements of Order p, $H$ has $p - 1$ elements of order $p$.
From Intersection of Subgroups of Prime Order, each of the $m$ sets of $p - 1$ non-identity elements of the $m$ subgroups of order $p$ are pairwise disjoint.
Each elements of $G$ order $p$ is the generator of a cyclic group of order $p$.
Therefore there are no elements of order $p$ apart from the $m \paren {p - 1}$ such elements of the $m$ subgroups of order $p$.
Hence the result.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $7$: Cosets and Lagrange's Theorem: Exercise $19$




