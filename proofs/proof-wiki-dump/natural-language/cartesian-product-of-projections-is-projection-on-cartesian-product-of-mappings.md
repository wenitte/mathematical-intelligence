# 

Source: https://proofwiki.org/wiki/Cartesian_Product_of_Projections_is_Projection_on_Cartesian_Product_of_Mappings



Theorem
Let $I$ be an indexing set.
Let $\family {S_\alpha}_{\alpha \mathop \in I}$ and $\family {T_\alpha}_{\alpha \mathop \in I}$ be families of sets both indexed by $I$.
For each $\alpha \in I$, let $f_\alpha: S_\alpha \to T_\alpha$ be a mapping.

There exists a unique mapping:

$\ds f: \prod_{\alpha \mathop \in I} S_\alpha \to \prod_{\alpha \mathop \in I} T_\alpha$
such that:

$\forall \alpha \in I: \pr_\alpha \circ f = f_\alpha \circ \pr_\alpha$
where:

$\circ$ denotes composition of mappings
$\pr_\alpha$ denotes the $\alpha$th projection on either $\ds \prod_{\alpha \mathop \in I} S_\alpha$ or $\ds \prod_{\alpha \mathop \in I} T_\alpha$ as appropriate.


Proof
Proof of Existence
Let $\mathbf x \in \ds \prod_{\alpha \mathop \in I} S_\alpha$ be arbitrary:

$\mathbf x = \family {x_\alpha \in S_\alpha}_{\alpha \mathop \in I}$
Let $\ds f: \prod_{\alpha \mathop \in I} S_\alpha \to \prod_{\alpha \mathop \in I} T_\alpha$ be defined as:

$\forall \mathbf x \in \ds \prod_{\alpha \mathop \in I} S_\alpha: \map f {\mathbf x} = \family {\map {f_\alpha} {x_\alpha} }_{\alpha \mathop \in I}$

We have:










\(\ds \forall \mathbf x \in \prod_{\alpha \mathop \in I} S_\alpha: \, \)



\(\ds \map {\paren {f_\alpha \circ \pr_\alpha} } {\mathbf x}\)

\(=\)







\(\ds \map {f_\alpha} {\map {\pr_\alpha} {\mathbf x} }\)





Definition of Composition of Mappings














\(\ds \)

\(=\)







\(\ds \map {f_\alpha} {x_\alpha}\)





Definition of $\alpha$th Projection on $\ds \prod_{\alpha \mathop \in I} S_\alpha$




Then:










\(\ds \forall \mathbf x \in \prod_{\alpha \mathop \in I} S_\alpha: \, \)



\(\ds \map {\paren {\pr_\alpha \circ f} } {\mathbf x}\)

\(=\)







\(\ds \map {\pr_\alpha} {\family {\map {f_\alpha} {x_\alpha} }_{\alpha \mathop \in I} }\)





Definition of $f$














\(\ds \)

\(=\)







\(\ds \map {f_\alpha} {x_\alpha}\)





Definition of $\alpha$th Projection on $\ds \prod_{\alpha \mathop \in I} T_\alpha$




and it is seen that $f$ is such that:

$\forall \alpha \in I: \pr_\alpha \circ f = f_\alpha \circ \pr_\alpha$
as required.

Hence the existence of $f$ as specified.
$\Box$


Proof of Uniqueness
Let $f$ be as defined.
Let $\ds g: \prod_{\alpha \mathop \in I} S_\alpha \to \prod_{\alpha \mathop \in I} T_\alpha$ also be a mapping such that:

$\forall \alpha \in I: \pr_\alpha \circ g = f_\alpha \circ \pr_\alpha$
Let $\mathbf x \in \ds \prod_{\alpha \mathop \in I} S_\alpha$ as before.
Let:














\(\ds \map {\paren {\pr_\alpha \circ g} } {\mathbf x}\)

\(=\)







\(\ds \map {\pr_\alpha} {\map g {\mathbf x} }\)





Definition of Composition of Mappings














\(\ds \)

\(=\)







\(\ds \map {f_\alpha} {x_\alpha}\)





by definition








\(\ds \leadsto \ \ \)

\(\ds \forall \mathbf x \in \prod_{\alpha \mathop \in I} S_\alpha: \, \)



\(\ds \map g {\mathbf x}\)

\(=\)







\(\ds \family {\map {f_\alpha} {x_\alpha} }_{\alpha \mathop \in I}\)









and it is seen that $g = f$.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 10$: Arbitrary Products: Exercise $2$




