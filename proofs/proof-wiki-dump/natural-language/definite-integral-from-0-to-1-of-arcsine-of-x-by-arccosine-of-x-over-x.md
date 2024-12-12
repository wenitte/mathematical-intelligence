# 

Source: https://proofwiki.org/wiki/Definite_Integral_from_0_to_1_of_Arcsine_of_x_by_Arccosine_of_x_over_x

Theorem
$\ds \int_0^1 \frac {\arcsin x \arccos x } x \rd x = \dfrac 7 8 \map \zeta 3$
where $\map \zeta 3$ is Apéry's constant: the Riemann $\zeta$ function of $3$.


Proof













\(\ds \int_0^1 \frac {\arcsin x \arccos x} x \rd x\)

\(=\)







\(\ds \int_0^1 \frac {\arcsin x \paren {\dfrac \pi 2 - \arcsin x} } x \rd x\)





Sum of Arcsine and Arccosine: $\arcsin x + \arccos x = \dfrac \pi 2$














\(\ds \)

\(=\)







\(\ds \frac \pi 2 \int_0^1 \frac {\arcsin x} x \rd x - \int_0^1 \frac {\paren {\arcsin x}^2} x \rd x\)





Linear Combination of Integrals














\(\ds \)

\(=\)







\(\ds \frac \pi 2 \int_0^{\frac \pi 2} \frac x {\sin x} \paren {\cos x \rd x} - \int_0^{\frac \pi 2} \frac {x^2} {\sin x} \paren {\cos x \rd x}\)





$x \to \sin x$ and $\rd x \to \cos x \rd x$














\(\ds \)

\(=\)







\(\ds \int_0^{\frac \pi 2} x \paren {\frac \pi 2 - x} \cot x \rd x\)





Definition of Real Cotangent Function




With a view to expressing the primitive in the form:














\(\ds \int u \frac {\d v} {\d x} \rd x\)

\(=\)







\(\ds u v - \int v \frac {\d u} {\d x} \rd x\)





Integration by Parts




let:














\(\ds u\)

\(=\)







\(\ds x \paren {\frac \pi 2 - x}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \paren {\frac \pi 2 - 2 x}\)





Power Rule for Derivatives




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds \cot x\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \ln \size {\sin x}\)





Primitive of Cotangent Function




Then:














\(\ds \int_0^{\frac \pi 2} x \paren {\frac \pi 2 - x} \cot x \rd x\)

\(=\)







\(\ds \intlimits {x \paren {\frac \pi 2 - x}  \ln \size {\sin x} } 0 {\frac \pi 2} - \int_0^{\frac \pi 2} \paren {\frac \pi 2 - 2 x} \ln \size {\sin x} \rd x\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds 0 - \int_0^{\frac \pi 2} \paren {\frac \pi 2 - 2 x} \ln \size {\sin x} \rd x\)




















\(\ds \)

\(=\)







\(\ds -\int_0^{\frac \pi 2} \paren {\frac \pi 2 - 2 x} \paren {-\ln 2 - \sum_{n \mathop = 1}^\infty \frac {\cos 2 n x} n} \rd x\)





Fourier Series for $\map \ln {\sin x}$ over $0$ to $\pi$














\(\ds \)

\(=\)







\(\ds \ln 2 \int_0^{\frac \pi 2} \paren {\frac \pi 2 - 2 x} \rd x + \int_0^{\frac \pi 2} \paren {\frac \pi 2 - 2 x} \paren {\sum_{n \mathop = 1}^\infty \frac {\cos 2 n x} n} \rd x\)





Linear Combination of Integrals














\(\ds \)

\(=\)







\(\ds \ln 2 \intlimits {\frac \pi 2 x - x^2} 0 {\frac \pi 2} + \int_0^{\frac \pi 2} \paren {\frac \pi 2 - 2 x} \paren {\sum_{n \mathop = 1}^\infty \frac {\cos 2 n x} n} \rd x\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds 0 + \int_0^{\frac \pi 2} \paren {\frac \pi 2 - 2 x} \paren {\sum_{n \mathop = 1}^\infty \frac {\cos 2 n x} n} \rd x\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac 1 n \int_0^{\frac \pi 2} \paren {\frac \pi 2 - 2 x} \cos 2 n x \rd x\)





Fubini's Theorem














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac 1 n \paren {\frac \pi 2 \int_0^{\frac \pi 2} \cos 2 n x \rd x - 2 \int_0^{\frac \pi 2} x \cos 2 n x \rd x}\)





Linear Combination of Integrals














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac 1 n \paren {\frac \pi 2 \intlimits {\frac {\sin 2 n x} {2 n} } 0 {\frac \pi 2} - 2 \intlimits {\frac {\cos 2 n x} {4 n^2} + \frac {x \sin 2 n x} {2 n} } 0 {\frac \pi 2} }\)





Primitive of $\cos a x$ and Primitive of $x \cos a x$














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac 1 n \paren {-\frac {\map \cos {\pi n} } {2 n^2} + \frac 1 {2 n^2} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n + 1} } {n^3} + \frac 1 2 \sum_{n \mathop = 1}^\infty \frac 1 {n^3}\)





Cosine of Integer Multiple of Pi














\(\ds \)

\(=\)







\(\ds \frac 1 2 \map \eta 3 + \frac 1 2 \map \zeta 3\)





Definition of Dirichlet Eta Function and Definition of Apéry's Constant














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {1 - 2^{1 - 3} } \map \zeta 3 + \frac 1 2 \map \zeta 3\)





Riemann Zeta Function in terms of Dirichlet Eta Function: $\map \zeta s = \dfrac 1 {1 - 2^{1 - s} } \map \eta s$














\(\ds \)

\(=\)







\(\ds \frac 3 8 \map \zeta 3 + \frac 1 2 \map \zeta 3\)




















\(\ds \)

\(=\)







\(\ds \frac 7 8 \map \zeta 3\)









$\blacksquare$


Sources
https://www.instagram.com/p/C1WXakXxdhZ/




