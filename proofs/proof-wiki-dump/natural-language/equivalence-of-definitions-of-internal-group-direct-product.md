# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Internal_Group_Direct_Product



Theorem
The following definitions of the concept of Internal Group Direct Product are equivalent:

Definition $1$: Definition by Isomorphism
The group $\struct {G, \circ}$ is the internal group direct product of $H$ and $K$ if and only if the mapping $\phi: H \times K \to G$ defined as:

$\forall h \in H, k \in K: \map \phi {h, k} = h \circ k$
is a group isomorphism from the (external) group direct product $\struct {H, \circ {\restriction_H} } \times \struct {K, \circ {\restriction_K} }$ onto $\struct {G, \circ}$.

Definition $2$: Definition by Subset Product
The group $\struct {G, \circ}$ is the internal group direct product of $H$ and $K$ if and only if:

$(1): \quad \struct {H, \circ {\restriction_H} }$ and $\struct {K, \circ {\restriction_K} }$ are both normal subgroups of $\struct {G, \circ}$
$(2): \quad G$ is the subset product of $H$ and $K$, that is: $G = H \circ K$
$(3): \quad$ $H \cap K = \set e$ where $e$ is the identity element of $G$.
Definition $3$: Definition by Unique Expression
The group $\struct {G, \circ}$ is the internal group direct product of $H$ and $K$ if and only if:

$(1): \quad \struct {H, \circ {\restriction_H} }$ and $\struct {K, \circ {\restriction_K} }$ are both normal subgroups of $\struct {G, \circ}$
$(2): \quad$ every element of $G$ can be expressed uniquely in the form:
$g = h \circ k$
where $h \in H$ and $k \in K$.


Proof
Let $e$ denote the identity element of $\struct {G, \circ}$.


$(1)$ if and only if $(2)$
This is demonstrated in the Internal Direct Product Theorem.
$\blacksquare$


$(1)$ implies $(3)$
Let $\struct {G, \circ}$ be the internal group direct product of $H$ and $K$ by definition $1$.
Then by definition the mapping $\phi: H \times K \to G$ defined as:

$\forall h \in H, k \in K: \map \phi {h, k} = h \circ k$
is a group isomorphism from $\struct {H, \circ {\restriction_H} } \times \struct {K, \circ {\restriction_K} }$ onto $\struct {G, \circ}$.

From Condition for Mapping between Structure and Cartesian Product of Substructures to be Bijection:

for all $g \in G$: there exists a unique $\tuple {h, k} \in H \times K$ such that $h \circ k = g$.
$\Box$

We now need to show that $H$ and $K$ are normal subgroups of $G$.
This is demonstrated in Internal Group Direct Product Isomorphism.
Thus we have shown that $\struct {G, \circ}$ is the internal group direct product of $H$ and $K$ by definition $3$.
$\Box$


$(3)$ implies $(2)$
Criterion $(1)$ is common to both definitions.

Let $\struct {G, \circ}$ be the internal group direct product of $H$ and $K$ by definition $3$.
Then by definition:

$(1): \quad \struct {H, \circ {\restriction_H} }$ and $\struct {K, \circ {\restriction_K} }$ are both normal subgroups of $\struct {G, \circ}$
$(2): \quad$ every element of $G$ can be expressed uniquely in the form:
$g = h \circ k$
where $h \in H$ and $k \in K$.
It remains to be shown that:

$G$ is the subset product of $H$ and $K$, that is: $G = H \circ K$
$H \cap K = \set e$, where $e$ is the identity element of $G$.

Indeed, from $(2)$:














\(\ds G\)

\(=\)







\(\ds \set {h \circ k: h \in H, k \in K}\)




















\(\ds \)

\(=\)







\(\ds H \circ K\)





Definition of Subset Product



$\Box$

Suppose $x \in H \cap K$.
Recall that $e$ denotes the identity element of $\struct {G, \circ}$.

We have:














\(\ds x = x \circ e\)

\(:\)







\(\ds x \in H, e \in K\)




















\(\ds x = e \circ x\)

\(:\)







\(\ds e \in H, x \in K\)










Because of uniqueness of representation:














\(\ds x \circ e\)

\(=\)







\(\ds e \circ x\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds e\)










Thus:

$H \cap K = \set e$

Thus $\struct {G, \circ}$ is the internal group direct product of $H$ and $K$ by definition $2$.
$\blacksquare$





