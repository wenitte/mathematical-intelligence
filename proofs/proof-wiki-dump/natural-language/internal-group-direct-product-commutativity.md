# 

Source: https://proofwiki.org/wiki/Internal_Group_Direct_Product_Commutativity



Theorem
Let $\struct {G, \circ}$ be a group whose identity is $e$.
Let $H$ and $K$ be subgroups of $G$.
Let $\struct {G, \circ}$ be the internal group direct product of $H$ and $K$.

Then:

$\forall h \in H, k \in K: h \circ k = k \circ h$


General Result
Let $\struct {G, \circ}$ be the internal group direct product of $H_1, H_2, \ldots, H_n$.
Let $h_i$ and $h_j$ be elements of $H_i$ and $H_j$ respectively, $i \ne j$.

Then $h_i \circ h_j = h_j \circ h_i$.


Proof 1
Let $G$ be the internal group direct product of $H$ and $K$.
Then by definition the mapping:

$\phi: H \times K \to G: \map \phi {h, k} = h \circ k$
is a (group) isomorphism from the (external) direct product $\struct {H, \circ \restriction_H} \times \struct {K, \circ \restriction_K}$ onto $\struct {G, \circ}$.
Let the symbol $\circ$ also be used for the operation induced on $H \times K$ by $\circ \restriction_H$ and $\circ \restriction_K$.

Let $h \in H, k \in K$.
Then:














\(\ds \tuple {e, k} \circ \tuple {h, e}\)

\(=\)







\(\ds \tuple {e \circ h, k \circ e}\)





Definition of External Direct Product














\(\ds \)

\(=\)







\(\ds \tuple {h, k}\)





Definition of Identity Element








\(\ds \leadsto \ \ \)





\(\ds h \circ k\)

\(=\)







\(\ds \map \phi {h, k}\)





Definition of Internal Direct Product














\(\ds \)

\(=\)







\(\ds \map \phi {\tuple {e, k} \circ \tuple {h, e} }\)





a priori














\(\ds \)

\(=\)







\(\ds \map \phi {e, k} \circ \map \phi {h, e}\)





as $\phi$ is a homomorphism














\(\ds \)

\(=\)







\(\ds \paren {e \circ k} \circ \paren {h \circ e}\)





Definition of Internal Direct Product














\(\ds \)

\(=\)







\(\ds k \circ h\)





Definition of Identity Element



$\blacksquare$


Proof 2
Let $\sqbrk {x, y}$ denote the commutator of $x, y \in G$:

$\sqbrk {x, y} := x^{-1} y^{-1} x y$

We have that:




\(\text {(1)}: \quad\)









\(\ds y x \sqbrk {x, y}\)

\(=\)







\(\ds y x x^{-1} y^{-1} x y\)





Definition of Commutator of Group Elements














\(\ds \)

\(=\)







\(\ds y y^{-1} x y\)





Group Axiom $\text G 3$: Existence of Inverse Element














\(\ds \)

\(=\)







\(\ds x y\)





Group Axiom $\text G 3$: Existence of Inverse Element




Let $h \in H$, $k \in K$.

We have:














\(\ds \sqbrk {h, k}\)

\(=\)







\(\ds h^{-1} k^{-1} h k\)




















\(\ds \)

\(=\)







\(\ds h^{-1} \paren {k^{-1} h k}\)





Group Axiom $\text G 1$: Associativity














\(\ds \)

\(\in\)







\(\ds h^{-1} H\)





Definition of Normal Subgroup








\(\ds \leadsto \ \ \)





\(\ds \sqbrk {h, k}\)

\(\in\)







\(\ds H\)





as $h^{-1} H = H$




and:














\(\ds \sqbrk {h, k}\)

\(=\)







\(\ds h^{-1} k^{-1} h k\)




















\(\ds \)

\(=\)







\(\ds \paren {h^{-1} k^{-1} h} k\)





Group Axiom $\text G 1$: Associativity














\(\ds \)

\(\in\)







\(\ds K k\)





Definition of Normal Subgroup








\(\ds \leadsto \ \ \)





\(\ds \sqbrk {h, k}\)

\(\in\)







\(\ds K\)





as $K k = K$




Thus:

$\sqbrk {h, k} \in H \cap K$
But as $H \cap K = \set e$, it follows that:

$\sqbrk {h, k} = e$

It follows from Commutator is Identity iff Elements Commute that:

$h k = k h$
and the result follows.
$\blacksquare$





