# 

Source: https://proofwiki.org/wiki/Internal_Direct_Product_Theorem/Proof_3



Theorem
The following definitions of the concept of Internal Group Direct Product are equivalent:

Definition by Isomorphism
The group $\struct {G, \circ}$ is the internal group direct product of $H$ and $K$ if and only if the mapping $\phi: H \times K \to G$ defined as:

$\forall h \in H, k \in K: \map \phi {h, k} = h \circ k$
is a group isomorphism from the (external) group direct product $\struct {H, \circ {\restriction_H} } \times \struct {K, \circ {\restriction_K} }$ onto $\struct {G, \circ}$.

Definition by Subset Product
The group $\struct {G, \circ}$ is the internal group direct product of $H$ and $K$ if and only if:

$(1): \quad \struct {H, \circ {\restriction_H} }$ and $\struct {K, \circ {\restriction_K} }$ are both normal subgroups of $\struct {G, \circ}$
$(2): \quad G$ is the subset product of $H$ and $K$, that is: $G = H \circ K$
$(3): \quad$ $H \cap K = \set e$ where $e$ is the identity element of $G$.


Proof
A specific instance of the general result, with $n = 2$.
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $13$: Direct products: Proposition $13.5$: Remark




