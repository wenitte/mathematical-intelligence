# 

Source: https://proofwiki.org/wiki/Existence_of_Subgroup_whose_Index_is_Prime_Power

Theorem
Let $G$ be a finite group.
Let $H$ be a normal subgroup of $G$ which has a finite index in $G$.
Let:

$p^k \divides \index G H$
where:

$p$ is a prime number
$k \in \Z_{>0}$ is a (strictly) positive integer
$\divides$ denotes divisibility.

Then $G$ contains a subgroup $K$ such that:

$\index K H = p^k$


Proof
The order $\order {G / H}$ of the quotient group $G / H$ is $\index G H$.
Hence $p^k$ divides $\order {G / H}$.
By Group has Subgroups of All Prime Power Factors, $G / H$ has a subgroup of order $p^k$.
By Correspondence Theorem, this subgroup is in the form $K / H$ where $H \le K \le G$.
Hence the result.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: The Sylow Theorems: $\S 59 \delta$




