# 

Source: https://proofwiki.org/wiki/Integral_Representation_of_Riemann_Zeta_Function_in_terms_of_Jacobi_Theta_Function/Lemma_1

Integral Representation of Riemann Zeta Function in terms of Jacobi Theta Function: Lemma 1
$\ds \pi^{-s / 2} \map \Gamma {\frac s 2} \map \zeta s = \int_0^1 x^{s / 2 - 1} \sum_{n \mathop = 1}^\infty e^{-\pi n^2 x } \rd x + \int_1^\infty x^{s / 2 - 1} \sum_{n \mathop = 1}^\infty e^{-\pi n^2 x }  \rd x$
where:

$\map \Gamma s$ is the gamma function
$\map \zeta s$ is the Riemann zeta function
$s \in \C$ is a complex number with real part $s > 1$
$x \in \R_{>0}$.


Proof
The gamma function $\Gamma: \C \to \C$ is defined, for the open right half-plane, as:

$\ds \map \Gamma z = \int_0^{\infty} t^{z - 1} e^{-t} \rd t$
Setting $z = \dfrac s 2$:

$\ds \map \Gamma {\dfrac s 2} = \int_0^{\infty} t^{s/2 - 1} e^{-t} \rd t$

Substituting $t = \pi n^2 x$ and $\rd t = \pi n^2 \rd x$:














\(\ds \map \Gamma {\dfrac s 2}\)

\(=\)







\(\ds \int_0^\infty \paren {\pi n^2 x}^{s/2 - 1} e^{-\paren {\pi n^2 x} } \pi n^2 \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_0^\infty \pi ^{s/2} n^s x^{s/2 - 1} e^{-\pi n^2 x} \rd x\)





Power of Product, Power of Power and Product of Powers














\(\ds \)

\(=\)







\(\ds \pi^{s/2} n^s  \int_0^{\infty} x^{s/2 - 1} e^{-\pi n^2 x} \rd x\)





Primitive of Constant Multiple of Function








\(\ds \leadsto \ \ \)





\(\ds \pi^{-s/2} \map \Gamma {\dfrac s 2} n^{-s}\)

\(=\)







\(\ds \int_0^\infty x^{s/2 - 1} e^{-\pi n^2 x} \rd x\)





multiplying both sides by $\pi^{-s/2} n^{-s}$








\(\ds \leadsto \ \ \)





\(\ds \pi^{-s/2} \map \Gamma {\dfrac s 2} \sum_{n \mathop = 1}^\infty n^{-s}\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \int_0^\infty x^{s/2 - 1} e^{-\pi n^2 x} \rd x\)





summing over $n$ and assuming $s \in \C: \map \Re s > 1$














\(\ds \)

\(=\)







\(\ds \int_0^\infty x^{s/2 - 1} \sum_{n \mathop = 1}^\infty e^{-\pi n^2 x} \rd x\)





Fubini's Theorem








\(\ds \leadsto \ \ \)





\(\ds \pi^{-s/2} \map \Gamma {\dfrac s 2} \map \zeta s\)

\(=\)







\(\ds \int_0^\infty x^{s/2 - 1} \sum_{n \mathop = 1}^\infty e^{-\pi n^2 x} \rd x\)





Definition of Riemann Zeta Function














\(\ds \)

\(=\)







\(\ds \int_0^1 x^{s / 2 - 1} \sum_{n \mathop = 1}^\infty e^{-\pi n^2 x} \rd x + \int_1^\infty x^{s / 2 - 1} \sum_{n \mathop = 1}^\infty e^{-\pi n^2 x}  \rd x\)





Linear Combination of Definite Integrals



$\blacksquare$





