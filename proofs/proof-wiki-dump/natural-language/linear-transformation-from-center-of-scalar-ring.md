# 

Source: https://proofwiki.org/wiki/Linear_Transformation_from_Center_of_Scalar_Ring

Theorem
Let $\struct {G, +_G, \circ}_R$ and $\struct {H, +_H, \circ}_R$ be $R$-modules.
Let $\phi: G \to H$ be a linear transformation.
Let $\map Z R$ be the center of the scalar ring $R$.
Let $\lambda \in \map Z R$.

Then $\lambda \circ \phi$ is a linear transformation.


Proof
By definition of linear transformation, we need to show that:

$(1): \quad \forall x, y \in G: \map {\paren {\lambda \circ \phi} } {x +_G y} = \lambda \circ \map \phi x +_H \lambda \circ \map \phi y$
$(2): \quad \forall x \in G: \forall \mu \in R: \map {\paren {\lambda \circ \phi} } {\mu \circ x} = \mu \circ \map {\paren {\lambda \circ \phi} } x$

Let $\lambda \in \map Z R$.
Then:




\(\text {(1)}: \quad\)









\(\ds \map {\paren {\lambda \circ \phi} } {x +_G y}\)

\(=\)







\(\ds \lambda \circ \map \phi {x +_G y}\)




















\(\ds \)

\(=\)







\(\ds \lambda \circ \paren {\map \phi x +_H \map \phi y}\)




















\(\ds \)

\(=\)







\(\ds \lambda \circ \map \phi x +_H \lambda \circ \map \phi y\)




















\(\ds \)

\(=\)







\(\ds \map {\paren {\lambda \circ \phi} } x +_H \map {\paren {\lambda \circ \phi} } y\)










Because $\lambda \in \map Z R$, $\lambda$ commutes with all elements of $R$.
So:

$\forall \mu \in R: \lambda \circ \mu = \mu \circ \lambda$.
Thus:




\(\text {(2)}: \quad\)









\(\ds \map {\paren {\lambda \circ \phi} } {\mu \circ x}\)

\(=\)







\(\ds \lambda \circ \map \phi {\mu \circ x}\)




















\(\ds \)

\(=\)







\(\ds \lambda \circ \mu \circ \map \phi x\)




















\(\ds \)

\(=\)







\(\ds \mu \circ \lambda \circ \map \phi x\)





as $\lambda \in \map Z R$














\(\ds \)

\(=\)







\(\ds \mu \circ \map {\paren {\lambda \circ \phi} } x\)









$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 28$. Linear Transformations




