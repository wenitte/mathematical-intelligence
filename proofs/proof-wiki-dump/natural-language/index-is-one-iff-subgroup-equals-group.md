# 

Source: https://proofwiki.org/wiki/Index_is_One_iff_Subgroup_equals_Group

Theorem
Let $G$ be a group whose identity element is $e$.
Let $H$ be a subgroup of $G$.

Then:

$\index G H = 1 \iff G = H$
where $\index G H$ denotes the index of $H$ in $G$.


Proof
For finite groups, we can apply Lagrange's Theorem:

$\index G H = \dfrac {\order G} {\order H}$
But then:

$\dfrac {\order G} {\order H} = 1 \iff \order G = \order H$
Hence the result.

For the general case (including infinite groups) we need to consider the (left) coset space $G / H$.
Note that we must have $e H = H \in G / H$.
Hence:

$\index G H = 1 \iff G / H = \set H \iff G = H$
$\blacksquare$


Sources
1978: John S. Rose: A Course on Group Theory ... (previous) ... (next): $0$: Some Conventions and some Basic Facts




