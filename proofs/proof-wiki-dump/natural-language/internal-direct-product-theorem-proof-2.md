# 

Source: https://proofwiki.org/wiki/Internal_Direct_Product_Theorem/Proof_2



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
Sufficient Condition
Let $\phi: H \times K \to G$ be the mapping defined as:

$\forall \tuple {h, k} \in H \times K: \map \phi {h, k} = h \circ k$

Let $\phi$ be an isomorphism.

$(1): \quad$ From Codomain of Internal Direct Isomorphism is Subset Product of Factors, $G = H \circ K$.
$(2): \quad$ From Internal Group Direct Product is Injective, $H$ and $K$ are independent subgroups of $G$.
$(3): \quad$ From Internal Group Direct Product Isomorphism, $H$ and $K$ are normal subgroups of $G$.
$\Box$


Necessary Condition
Let $\phi: H \times K \to G$ be the mapping defined as:

$\forall \tuple {h, k} \in H \times K: \map \phi {h, k} = h \circ k$

Suppose the three conditions hold.

$(1): \quad$ From $G = H \circ K$, $\phi$ is surjective.
$(2): \quad$ From Internal Group Direct Product is Injective, $\phi$ is injective.
$(3): \quad$ From Internal Group Direct Product of Normal Subgroups, $\phi$ is a group homomorphism.

Putting these together, we see that $\phi$ is a bijective homomorphism, and therefore an isomorphism.
So by definition, $G$ is the internal group direct product of $H$ and $K$.
$\blacksquare$





