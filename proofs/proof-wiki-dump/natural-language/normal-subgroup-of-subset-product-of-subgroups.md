# 

Source: https://proofwiki.org/wiki/Normal_Subgroup_of_Subset_Product_of_Subgroups

Theorem
Let $G$ be a group whose identity is $e$.
Let:

$H$ be a subgroup of $G$
$N$ be a normal subgroup of $G$.

Then:

$N \lhd N H$
where:

$\lhd$ denotes normal subgroup
$N H$ denotes subset product.


Proof
From Subset Product with Normal Subgroup is Subgroup:

$N H = H N$ is a subgroup of $G$.
By definition of subset product all elements of $H N$ can be written in the form:

$h n \in H N$
where $h \in H, n \in N$.
Let $h n \in H N$.
Let $n_1 \in N$.

From Inverse of Group Product:

$\paren {h n} n_1 \paren {h n}^{-1} = h n n_1 n^{-1} h^{-1}$
We have that:

$n n_1 n \in N$
$h, h^{-1} \in G$.
Then, since $N$ is a normal subgroup of $G$:

$\paren {h n} n_1 \paren {n^{-1} h^{-1} } \in N$
Thus:

$N \lhd N H$
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Conjugacy, Normal Subgroups, and Quotient Groups: $\S 46 \epsilon$




