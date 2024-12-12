# 

Source: https://proofwiki.org/wiki/Conditions_for_Internal_Group_Direct_Product



Theorem
Let $\struct {G, \circ}$ be a group whose identity is $e$.
Let $H$ and $K$ be subgroups of $G$.

Let the mapping $\phi: H \times K \to G$ defined as:

$\forall h \in H, k \in K: \map \phi {h, k} = h \circ k$
be a group isomorphism from the cartesian product $\struct {H, \circ {\restriction_H} } \times \struct {K, \circ {\restriction_K} }$ onto $\struct {G, \circ}$.

Then $G$ is the internal group direct product of $H$ and $K$ if and only if:

$(1): \quad \forall h \in H, k \in K: h \circ k = k \circ h$
$(2): \quad G = H \circ K$
$(3): \quad H \cap K = \set e$


Proof
Necessary Condition
Let the mapping $\phi: H \times K \to G$ defined as:

$\forall h \in H, k \in K: \map \phi {h, k} = h \circ k$
be a group isomorphism from the cartesian product $\struct {H, \circ {\restriction_H} } \times \struct {K, \circ {\restriction_K} }$ onto $\struct {G, \circ}$.
Let the symbol $\circ$ also be used for the operation induced on $H \times K$ by $\circ {\restriction_H}$ and $\circ {\restriction_K}$.


$(1)
\quad \forall h \in H, k \in K: h \circ k = k \circ h$:
This follows directly from Internal Group Direct Product Commutativity.
$\Box$


$(2)
\quad G = H \circ K$
This follows directly from Codomain of Internal Direct Isomorphism is Subset Product of Factors.
$\Box$


$(3)
\quad H \cap K = \set e$
Let $z \in H \cap K$.
From Intersection of Subgroups is Subgroup, $z^{-1} \in H \cap K$.
So $\tuple {z, z^{-1} } \in H \times K$ and so:

$\map \phi {z, z^{-1} } = z \circ z^{-1} = e = \map \phi {e, e}$
We have by definition that $\phi$ is a (group) isomorphism, therefore a bijection and so an injection.
So, as $\phi$ is injection, we have that:

$\tuple {z, z^{-1} } = \tuple {e, e}$
and therefore $z = e$.
$\Box$


Sufficient Condition
Suppose $H, K \le G$ such that:

$(1): \quad \forall h \in H, k \in K: h \circ k = k \circ h$
$(2): \quad G = H \circ K$
$(3): \quad H \cap K = \set e$
all apply.

Let $\phi: H \times K \to G$ be the mapping defined as:

$\forall \tuple {h, k} \in H \times K: \map \phi {h, k} = h \circ k$

Let $\tuple {x_1, x_2}, \tuple {y_1, y_2} \in H \times K$.
Then:














\(\ds \map \phi {\tuple {x_1, x_2} \circ \tuple {y_1, y_2} }\)

\(=\)







\(\ds \map \phi {\paren {x_1 \circ y_1}, \paren {x_2 \circ y_2} }\)





Definition of Operation Induced by Direct Product














\(\ds \)

\(=\)







\(\ds \paren {x_1 \circ y_1} \circ \paren {x_2 \circ y_2}\)





Definition of $\phi$














\(\ds \)

\(=\)







\(\ds \paren {x_1 \circ \paren {y_1 \circ x_2} } \circ y_2\)





Associativity of $\circ$














\(\ds \)

\(=\)







\(\ds \paren {x_1 \circ \paren {x_2 \circ y_1} } \circ y_2\)





$(1)$: $x_2$ commutes with $y_2$














\(\ds \)

\(=\)







\(\ds \paren {x_1 \circ x_2} \circ \paren {y_1 \circ y_2}\)





Associativity of $\circ$














\(\ds \)

\(=\)







\(\ds \map \phi {x_1, x_2} \circ \map \phi {y_1, y_2}\)





Definition of $\phi$



So $\phi$ is a (group) homomorphism.

It follows from $(2)$ that $\phi$ is a surjection and so, by definition, an epimorphism.

As $H$ and $K$ are subgroups of $G$, they are by definition groups.
Now let $h \in H, k \in K$ such that $h \circ k = e$.
That is, $k = h^{-1}$.
By the Two-Step Subgroup Test it follows that $k \in H$.
By a similar argument, $h \in K$.
Thus by definition of set intersection, $h, k \in H \cap K$ and so $h = e = k$.
By definition of $C$, that means:

$\map \phi {h, k} = e \implies \tuple {h, k} = \tuple {e, e}$
That is:

$\map \ker \phi = \set {\tuple {e, e} }$
From the Quotient Theorem for Group Epimorphisms it follows that $\phi$ is a monomorphism.
So $\phi$ is both an epimorphism and a monomorphism, and so by definition an isomorphism.
Thus, by definition, $G$ is the internal group direct product of $H$ and $K$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 13$: Compositions Induced on Cartesian Products and Function Spaces: Theorem $13.4$

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.In particular: This does not belong here. However, it will need to wait until this work has been revisited and studied closely.If you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: Problem $\text{DD}$




