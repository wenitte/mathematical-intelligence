# 

Source: https://proofwiki.org/wiki/Integral_Representation_of_Riemann_Zeta_Function_in_terms_of_Jacobi_Theta_Function



Theorem
Let $s \in \C: \map \Re s > 1$.
Let $x \in \R_{>0}$.
Then:

$\ds \pi^{-s / 2} \map \Gamma {\frac s 2} \map \zeta s = -\frac 1 {s \paren {1 - s} } + \dfrac 1 2 \int_1^\infty \paren {x^{s / 2 - 1} + x^{-\paren {s + 1} / 2} } \paren {\map {\vartheta_3} {0, e^{-\pi x} } - 1} \rd x$
where:

$\map \Gamma s$ is the gamma function
$\map \zeta s$ is the Riemann zeta function
$\ds \map {\vartheta_3} {0, e^{-\pi x} }$ is the Jacobi theta function of the third type.


Proof
Lemma 1
$\ds \pi^{-s / 2} \map \Gamma {\frac s 2} \map \zeta s = \int_0^1 x^{s / 2 - 1} \sum_{n \mathop = 1}^\infty e^{-\pi n^2 x } \rd x + \int_1^\infty x^{s / 2 - 1} \sum_{n \mathop = 1}^\infty e^{-\pi n^2 x }  \rd x$
$\Box$


Lemma 2
$\ds \int_0^1 x^{s / 2 - 1} \sum_{n \mathop = 1}^\infty e^{-\pi n^2 x} \rd x = -\frac 1 {s \paren {1 - s} } + \int_1^\infty x^{-\paren {s + 1} / 2} \sum_{n \mathop = 1}^\infty e^{-\paren {\pi n^2 x} } \rd x$
$\Box$


Lemma 3
$\ds \sum_{n \mathop = 1}^\infty e^{-\pi n^2 x} = \dfrac 1 2 \paren {\map {\vartheta_3} {0, e^{-\pi x} } - 1}$
$\Box$















\(\ds \pi^{-s / 2} \map \Gamma {\frac s 2} \map \zeta s\)

\(=\)







\(\ds \int_0^1 x^{s / 2 - 1} \sum_{n \mathop = 1}^\infty e^{-\pi n^2 x} \rd x + \int_1^\infty x^{s / 2 - 1} \sum_{n \mathop = 1}^\infty e^{-\pi n^2 x} \rd x\)





Lemma $1$














\(\ds \)

\(=\)







\(\ds -\frac 1 {s \paren {1 - s} } + \int_1^\infty x^{-\paren {s + 1} / 2} \sum_{n \mathop = 1}^\infty e^{-\paren {\pi n^2 x} } \rd x + \int_1^\infty x^{s / 2 - 1} \sum_{n \mathop = 1}^\infty e^{-\pi n^2 x} \rd x\)





Lemma $2$














\(\ds \)

\(=\)







\(\ds -\frac 1 {s \paren {1 - s} } + \int_1^\infty \paren {x^{s / 2 - 1} + x^{-s / 2 - 1 / 2} } \sum_{n \mathop = 1}^\infty e^{-\paren {\pi n^2 x} } \rd x\)





Linear Combination of Definite Integrals














\(\ds \)

\(=\)







\(\ds -\frac 1 {s \paren {1 - s} } + \frac 1 2 \int_1^\infty \paren {x^{s / 2 - 1} + x^{-s / 2 - 1 / 2} } \paren {\map {\vartheta_3} {0, e^{-\pi x} } - 1} \rd x\)





Lemma $3$



$\blacksquare$


Also see
Analytic Continuation of Riemann Zeta Function using Jacobi Theta Function
Functional Equation for Riemann Zeta Function




