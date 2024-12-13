# 

Source: https://proofwiki.org/wiki/Group_Epimorphism_Induces_Bijection_between_Subgroups/Corollary

Theorem
Let $G_1$ and $G_2$ be groups whose identities are $e_{G_1}$ and $e_{G_2}$ respectively.
Let $\phi: G_1 \to G_2$ be a group epimorphism.
Let $K := \map \ker \phi$ be the kernel of $\phi$.
Let $H \le G$ denote that $H$ is a subgroup of $G$.

Then:

$\forall H \le G, K \subseteq H: \phi \sqbrk H \cong H / K$
where $H / K$ denotes the quotient group of $H$ by $K$.


Proof
Let $H$ be a subgroup of $G$ such that $K \subseteq H$.
Consider the restriction of $\phi$ to $H$.
By Group Homomorphism Preserves Subgroups, $\phi_{\restriction_H} \sqbrk H$ is a group.
From Group Epimorphism Induces Bijection between Subgroups it follows that the First Isomorphism Theorem can be applied.
Hence the result.
$\blacksquare$


Sources
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 1.10$: Theorem $29$: Corollary




