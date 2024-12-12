# 

Source: https://proofwiki.org/wiki/Evaluation_Linear_Transformation_is_Linear_Transformation

Theorem
Let $R$ be a commutative ring with unity.
Let $G$ be an $R$-module.
Let $G^*$ be the algebraic dual of $G$.
Let $G^{**}$ be the double dual of $G^*$.

Let the mapping $J: G \to G^{**}$ be the evaluation linear transformation from $G$ into $G^{**}$ defined as:

$\forall x \in G: \map J x = x^\wedge$
where for each $x \in G$, $x^\wedge: G^* \to R$ is defined as:

$\forall t \in G^*: \map {x^\wedge} t = \map t x$

Then $J$ is a linear transformation.


Proof
From Underlying Mapping of Evaluation Linear Transformation is Element of Double Dual, we have that:

$x^\wedge \in G^{**}$
Hence $x^\wedge$ a fortiori is a linear transformation.

It remains to be shown that $J: G \to G^{**}$ is a linear transformation.
That is, that the following conditions are satisfied by $J$:

$(1): \quad \forall x, y \in G: \map J {x + y} = \map J x + \map J y$
$(2): \quad \forall x \in G: \forall \lambda \in R: \map J {\lambda \times x} = \lambda \times J x$

Hence:




\(\text {(1)}: \quad\)









\(\ds \map J {x + y}\)

\(=\)







\(\ds \paren {x + y}^\wedge\)





Definition of $J$














\(\ds \)

\(=\)







\(\ds x^\wedge + y^\wedge\)





Definition of Pointwise Addition of Linear Transformations














\(\ds \)

\(=\)







\(\ds \map J x + \map J y\)





Definition of $x^\wedge$




and:




\(\text {(2)}: \quad\)









\(\ds \map J {\lambda \times x}\)

\(=\)







\(\ds \paren {\lambda \times x}^\wedge\)





Definition of $x^\wedge$














\(\ds \)

\(=\)







\(\ds \lambda \times x^\wedge\)





Definition of Linear Transformation














\(\ds \)

\(=\)







\(\ds \lambda \times \map J x\)





Definition of $x^\wedge$



Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 28$. Linear Transformations




