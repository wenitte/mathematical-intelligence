# 

Source: https://proofwiki.org/wiki/Internal_Group_Direct_Product_Commutativity/Proof_2

Theorem
Let $\struct {G, \circ}$ be a group whose identity is $e$.
Let $H$ and $K$ be subgroups of $G$.
Let $\struct {G, \circ}$ be the internal group direct product of $H$ and $K$.

Then:

$\forall h \in H, k \in K: h \circ k = k \circ h$


Proof
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


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $8$: Homomorphisms, Normal Subgroups and Quotient Groups: Exercise $15$




