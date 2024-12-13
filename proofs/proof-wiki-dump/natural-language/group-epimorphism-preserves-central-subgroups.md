# 

Source: https://proofwiki.org/wiki/Group_Epimorphism_preserves_Central_Subgroups

Theorem
Let $G$ and $H$ be groups.
Let $\theta: G \to H$ be an epimorphism.
Let $Z \le G$ be a central subgroup of $G$.

Then $\theta \sqbrk Z$ is a central subgroup of $H$.


Proof
By definition of central subgroup:

$Z \subseteq \map Z G$
where $\map Z G$ denotes the center of $G$.
From Image under Epimorphism of Center is Subset of Center:

$\theta \sqbrk {\map Z G} \subseteq \map Z H$
From Image of Subset under Mapping is Subset of Image it follows that:

$\theta \sqbrk Z \subseteq \map Z H$
The result follows.
$\blacksquare$





