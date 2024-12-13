# 

Source: https://proofwiki.org/wiki/Internal_Group_Direct_Product_Commutativity/Proof_1

Theorem
Let $\struct {G, \circ}$ be a group whose identity is $e$.
Let $H$ and $K$ be subgroups of $G$.
Let $\struct {G, \circ}$ be the internal group direct product of $H$ and $K$.

Then:

$\forall h \in H, k \in K: h \circ k = k \circ h$


Proof
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


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 13$: Compositions Induced on Cartesian Products and Function Spaces: Theorem $13.4$




