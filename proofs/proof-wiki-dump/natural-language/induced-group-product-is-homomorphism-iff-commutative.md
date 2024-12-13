# 

Source: https://proofwiki.org/wiki/Induced_Group_Product_is_Homomorphism_iff_Commutative



Theorem
Let $\struct {G, \circ}$ be a group.
Let $H_1, H_2$ be subgroups of $G$.
Let $\phi: H_1 \times H_2 \to G$ be defined such that:

$\forall \tuple {h_1, h_2} \in H_1 \times H_2: \map \phi {h_1, h_2} = h_1 \circ h_2$

Then $\phi$ is a homomorphism if and only if every element of $H_1$ commutes with every element of $H_2$.


Corollary
Let $\struct {G, \circ}$ be a group.
Let $\phi: G \times G \to G$ be defined such that:

$\forall a, b \in G: \map \phi {a, b} = a \circ b$

Then $\phi$ is a homomorphism if and only if $G$ is abelian.


Proof
We have $\tuple {h_1, h_2} \circ \tuple {k_1, k_2} = \tuple {h_1 \circ k_1, h_2 \circ k_2}$ by definition of group direct product.


Necessary Condition
Let $\phi$ be a homomorphism.
Then:














\(\ds \map \phi {\tuple {h_1, h_2} \circ \tuple {k_1, k_2} }\)

\(=\)







\(\ds \map \phi {h_1, h_2} \circ \map \phi {k_1, k_2}\)














\(\ds \leadsto \ \ \)





\(\ds \map \phi {h_1 \circ k_1, h_2 \circ k_2}\)

\(=\)







\(\ds \tuple {h_1 \circ h_2} \circ \tuple {k_1 \circ k_2}\)














\(\ds \leadsto \ \ \)





\(\ds h_1 \circ k_1 \circ h_2 \circ k_2\)

\(=\)







\(\ds h_1 \circ h_2 \circ k_1 \circ k_2\)














\(\ds \leadsto \ \ \)





\(\ds k_1 \circ h_2\)

\(=\)







\(\ds h_2 \circ k_1\)









This follows whatever $k_1$ and $h_2$ are.
So in order for $\phi$ to be a homomorphism, every element of $H_1$ must commute with every element of $H_2$.
$\Box$


Sufficient Condition
Let every element of $H_1$ commute with every element of $H_2$.
Let $\tuple {h_1, h_2}, \tuple {k_1, k_2} \in H_1 \times H_2$.

Then:














\(\ds \map \phi {\tuple {h_1, h_2} \circ \tuple {k_1, k_2} }\)

\(=\)







\(\ds \map \phi {h_1 \circ k_1, h_2 \circ k_2}\)




















\(\ds \)

\(=\)







\(\ds h_1 \circ k_1 \circ h_2 \circ k_2\)




















\(\ds \)

\(=\)







\(\ds h_1 \circ h_2 \circ k_1 \circ k_2\)





$k_1$ commutes with $h_2$














\(\ds \)

\(=\)







\(\ds \map \phi {h_1, h_2} \circ \map \phi {k_1, k_2}\)









Thus $\phi$ is shown to be a homomorphism.
$\blacksquare$





