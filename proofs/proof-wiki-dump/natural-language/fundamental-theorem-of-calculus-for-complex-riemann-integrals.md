# 

Source: https://proofwiki.org/wiki/Fundamental_Theorem_of_Calculus_for_Complex_Riemann_Integrals

Theorem
Let $\closedint a b$ be a closed real interval.
Let $F, f: \closedint a b \to \C$ be complex functions.

Suppose that $F$ is a primitive of $f$.

Then the complex Riemann integral of $f$ satisfies:

$\ds \int_a^b \map f t \rd t = \map F b - \map F a$


Proof
Let $u, v: \closedint a b \times \set 0 \to \R$ be defined as in the Cauchy-Riemann Equations:

$\map u {t, y} = \map \Re {\map F z}$
$\map v {t, y} = \map \Im {\map F z}$
where:

$\map \Re {\map F z}$ denotes the real part of $\map F z$
$\map \Im {\map F z}$ denotes the imaginary part of $\map F z$.

Then:














\(\ds \int_a^b \map f t \rd t\)

\(=\)







\(\ds \int_a^b \map {F'} {t + 0 i} \rd t\)





by assumption














\(\ds \)

\(=\)







\(\ds \int_a^b \paren {\map {\dfrac {\partial u} {\partial t} } {t, 0} + i \map {\dfrac {\partial v} {\partial t} } {t, 0} } \rd t\)





Cauchy-Riemann Equations














\(\ds \)

\(=\)







\(\ds \int_a^b \map {\dfrac {\partial u} {\partial t} } {t, 0} \rd t + i \int_a^b \map {\dfrac {\partial v} {\partial t} } {t, 0} \rd t\)





Definition of Complex Riemann Integral














\(\ds \)

\(=\)







\(\ds \map u {b, 0} - \map u {a, 0} + i \paren {\map v {b, 0} - \map v {a, 0} }\)





Fundamental Theorem of Calculus














\(\ds \)

\(=\)







\(\ds \map F b - \map F a\)









$\blacksquare$


Sources
2001: Christian Berg: Kompleks funktionsteori: $\S 2.3$




