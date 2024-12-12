# 

Source: https://proofwiki.org/wiki/Characteristic_Subgroup_is_Transitive

Theorem
Let $G$ be a group.
Let $H$ be a characteristic subgroup of $G$.
Let $K$ be a characteristic subgroup of $H$.

Then $K$ is a characteristic subgroup of $G$.


Proof
Let $\phi: G \to G$ be a group automorphism.
Since $H$ is a characteristic subgroup of $G$, we have:

$\phi \sqbrk H = H$
Thus, from Group Homomorphism Preserves Subgroups, $\phi {\restriction_H}$, the restriction of $\phi$ to $H$, is an automorphism of $H$.

Now since $K$ is a characteristic subgroup of $H$, we have that:

$\phi {\restriction_H} \sqbrk K = K$
but this immediately implies that:

$\phi \sqbrk K = K$
by definition of the restriction $\phi {\restriction_H}$.

That is, $K$ is a characteristic subgroup of $G$ as well.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Group Homomorphism and Isomorphism: $\S 64 \epsilon$




