# 

Source: https://proofwiki.org/wiki/Degenerate_Linear_Operator_Plus_Identity_is_Fredholm_Operator



Theorem
Let $U$ be a vector space.
Let $T : U \to U$ be a degenerate linear operator.
Let $I_U : U \to U$ be the identity operator.

Then:

$T + I_U$
is a Fredholm operator.


Proof
We need to show that both:

$\map \ker {T + I_U}$
and:

$U / {\Img {T + I_U} }$
are finite-dimensional.


Proof of $\map \dim {\map \ker {T + I_U} } < +\infty$
Let $u \in \map \ker {T + I_U}$.
That is:

$Tu + u = 0$
Thus:

$u = \map T {-u} \in \Img T$
Hence:

$\map \ker {T + I_U} \subseteq \Img T$
Therefore:














\(\ds \map \dim {\map \ker {T + I_U} }\)

\(\le\)







\(\ds \map \dim {\Img T}\)





Dimension of Proper Subspace is Less Than its Superspace














\(\ds \)

\(<\)







\(\ds + \infty\)





Definition of Degenerate Linear Transformation



$\Box$


Proof of $\map \dim {U / {\Img {T + I_U} } } < +\infty$
Observe that:

$\map \ker T \subseteq \Img {T + I_U}$
since if $u \in \map \ker T$, then:

$u = T u + u \in \Img {T + I_U}$
Thus:














\(\ds \map \dim {U / {\Img {T + I_U} } }\)

\(=\)







\(\ds \map {\mathrm {codim} } {\Img {T + I_U} }\)





Definition of Codimension of Vector Subspace














\(\ds \)

\(\le\)







\(\ds \map {\mathrm {codim} } {\map \ker T}\)





Codimension of Proper Subspace is Greater














\(\ds \)

\(=\)







\(\ds \map \dim {U / \map \ker T}\)





Definition of Codimension of Vector Subspace














\(\ds \)

\(=\)







\(\ds \map \dim {\Img T}\)





$U / \map \ker T \cong \Img T$ by First Isomorphism Theorem














\(\ds \)

\(<\)







\(\ds + \infty\)





Definition of Degenerate Linear Transformation



$\blacksquare$


Sources
2002: Peter D. Lax: Functional Analysis: Chapter $27$: Index Theory




