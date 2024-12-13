# 

Source: https://proofwiki.org/wiki/Internal_Direct_Product_Theorem/Proof_1



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
From Conditions for Internal Group Direct Product it is sufficient to show that if:

$\quad G = H \circ K$
and:

$\quad H \cap K = \set e$
then:

$\struct {H, \circ {\restriction_H} }$ and $\struct {H_2, \circ {\restriction_K} }$ are both normal subgroups of $\struct {G, \circ}$
if and only if

$\forall \tuple {h, k} \in H \times K: h \circ k = k \circ h$


Sufficient Condition
Let $\struct {H, \circ {\restriction_H} }$ and $\struct {H_2, \circ {\restriction_K} }$ both be normal subgroups of $\struct {G, \circ}$.
Let $x \in H$ and $y \in K$.
Then:














\(\ds x^{-1}\)

\(\in\)







\(\ds H\)





Two-Step Subgroup Test








\(\ds \leadsto \ \ \)





\(\ds y \circ x^{-1} \circ y^{-1}\)

\(\in\)







\(\ds H\)





Definition of Normal Subgroup














\(\ds x \circ y \circ x^{-1}\)

\(\in\)







\(\ds K\)





Definition of Normal Subgroup








\(\ds \leadsto \ \ \)





\(\ds \paren {x \circ y \circ x^{-1} } \circ y^{-1}\)

\(\in\)







\(\ds K\)





Group Axiom $\text G 0$: Closure












\(\, \ds \land \, \)

\(\ds x \circ \paren {y \circ x^{-1} \circ y^{-1} }\)

\(\in\)







\(\ds H\)





Group Axiom $\text G 0$: Closure








\(\ds \leadsto \ \ \)





\(\ds x \circ y \circ x^{-1} \circ y^{-1}\)

\(\in\)







\(\ds H \cap K\)





Group Axiom $\text G 1$: Associativity, Definition of Set Intersection








\(\ds \leadsto \ \ \)





\(\ds \paren {x \circ y} \circ \paren {x^{-1} \circ y^{-1} }\)

\(=\)







\(\ds e\)





a priori: $H \cap K = \set e$








\(\ds \leadsto \ \ \)





\(\ds \paren {x \circ y} \circ \paren {y \circ x}^{-1}\)

\(=\)







\(\ds e\)





Inverse of Group Product








\(\ds \leadsto \ \ \)





\(\ds \paren {x \circ y} \circ \paren {y \circ x}^{-1} \circ \paren {y \circ x}\)

\(=\)







\(\ds y \circ x\)














\(\ds \leadsto \ \ \)





\(\ds x \circ y\)

\(=\)







\(\ds y \circ x\)









$x$ and $y$ are arbitrary, so:

$\forall \tuple {h, k} \in H \times K: h \circ k = k \circ h$
$\Box$


Necessary Condition
Let:

$\forall \tuple {h, k} \in H \times K: h \circ k = k \circ h$
Let $z = G$.
We have:










\(\ds \exists h \in H, k \in K: \, \)



\(\ds z\)

\(=\)







\(\ds h \circ k\)





a priori: $G = H \circ K$








\(\ds \leadsto \ \ \)





\(\ds z\)

\(=\)







\(\ds k \circ h\)





by hypothesis








\(\ds \leadsto \ \ \)





\(\ds k \circ H\)

\(=\)







\(\ds H \circ k\)





by hypothesis








\(\ds \leadsto \ \ \)





\(\ds h \circ K\)

\(=\)







\(\ds K \circ h\)





by hypothesis




Then we have:














\(\ds z \circ H \circ z^{-1}\)

\(=\)







\(\ds \paren {k \circ h} \circ H \circ \paren {h^{-1} \circ k^{-1} }\)





by hypothesis














\(\ds \)

\(=\)







\(\ds k \circ \paren {h \circ H \circ h^{-1} } \circ k^{-1}\)





Group Axiom $\text G 1$: Associativity














\(\ds \)

\(\subseteq\)







\(\ds k \circ H \circ k^{-1}\)




















\(\ds \)

\(=\)







\(\ds H \circ k \circ k^{-1}\)





a priori














\(\ds \)

\(=\)







\(\ds H \circ e\)





Group Axiom $\text G 3$: Existence of Inverse Element














\(\ds \)

\(=\)







\(\ds H\)










Similarly:














\(\ds z \circ K \circ z^{-1}\)

\(=\)







\(\ds \paren {h \circ k} \circ K \circ \paren {k^{-1} \circ h^{-1} }\)





by hypothesis














\(\ds \)

\(=\)







\(\ds h \circ \paren {k \circ K \circ k^{-1} } \circ h^{-1}\)





Group Axiom $\text G 1$: Associativity














\(\ds \)

\(\subseteq\)







\(\ds h \circ K \circ h^{-1}\)




















\(\ds \)

\(=\)







\(\ds K \circ h \circ h^{-1}\)





a priori














\(\ds \)

\(=\)







\(\ds K \circ e\)





Group Axiom $\text G 3$: Existence of Inverse Element














\(\ds \)

\(=\)







\(\ds K\)









Thus, by definition, $H$ and $K$ are both $\struct {H, \circ {\restriction_H} }$ and $\struct {H_2, \circ {\restriction_K} }$ are both normal subgroups of $\struct {G, \circ}$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 13$: Compositions Induced on Cartesian Products and Function Spaces: Theorem $13.5$




