# 

Source: https://proofwiki.org/wiki/Image_of_Group_Homomorphism_is_Hausdorff_Implies_Kernel_is_Closed

Theorem
Let $G$ and $H$ be topological groups.
Let $f: G \to H$ be a morphism.
Let its image $\Img f$ be Hausdorff.

Then its kernel $\map \ker f$ is closed in $G$.


Proof
By Image of Group Homomorphism is Subgroup, $\Img f$ is a group.
Let $e$ be the identity of $H$.
By Topological Group is Hausdorff iff Identity is Closed, $\set e$ is closed in $\Img f$.
Because $f$ is continuous, $\map \ker f = \map {f^{-1} } e$ is closed in $G$.
$\blacksquare$





