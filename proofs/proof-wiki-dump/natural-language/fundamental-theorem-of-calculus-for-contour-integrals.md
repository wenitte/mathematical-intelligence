# 

Source: https://proofwiki.org/wiki/Fundamental_Theorem_of_Calculus_for_Contour_Integrals



Theorem
Let $F, f: D \to \C$ be complex functions, where $D$ is a connected domain.
Let $C$ be a contour that is a concatenation of the directed smooth curves $C_1, \ldots, C_n$.
Let $C_k$ be parameterized by the smooth path $\gamma_k: \closedint {a_k} {b_k} \to D$ for all $k \in \set {1, \ldots, n}$.

Suppose that $F$ is an antiderivative of $f$.

If $C$ has start point $z$ and end point $w$, then:

$\ds \int_C \map f z \rd z = \map F w - \map F z$

If $C$ is a closed contour, then:

$\ds \oint_C \map f z \rd z = 0$


Corollary
Let $D \subseteq \C$ be an open set.
Let $f: D \to \C$ be a continuous function.
Suppose that $F: D \to \C$ is an antiderivative of $f$.
Let $\gamma: \closedint a b \to D$ be a contour that consists of one directed smooth curve.

Then the contour integral:

$\ds \int_\gamma \map f z \rd z =  \map F {\map \gamma b} - \map F {\map \gamma a}$


Proof













\(\ds \int_C \map f z\)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \int_{a_k}^{b_k} \map f {\map {\gamma_k} t} \map {\gamma_k'} t \rd t\)





Definition of Complex Contour Integral














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \int_{a_k}^{b_k} \paren {\dfrac \rd {\rd t} \map F {\map {\gamma_k} t} } \rd t\)





Derivative of Complex Composite Function














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \paren {\map F {\map {\gamma_k} {b_k} } - \map F {\map {\gamma_k} {a_k} } }\)





Fundamental Theorem of Calculus for Complex Riemann Integrals














\(\ds \)

\(=\)







\(\ds \map F {\map {\gamma_n} {b_n} } - \map F {\map {\gamma_1} {a_1} }\)





the sum is telescoping














\(\ds \)

\(=\)







\(\ds \map F w - \map F z\)





Definition of Endpoints of Contour (Complex Plane)




If $C$ is a closed contour, then $z = w$.
It follows that:

$\map F w - \map F z = 0$
$\blacksquare$


Also see
Primitive of Function on Connected Domain, for the converse of this result.


Sources
2001: Christian Berg: Kompleks funktionsteori: $\S 2.3$




