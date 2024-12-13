# 

Source: https://proofwiki.org/wiki/Integration_by_Inversion

Theorem
$\ds \int_0^{+\infty} \map f x \rd x = \int_0^{+\infty} \dfrac {\map f {\frac 1 x} } {x^2} \rd x$


Proof













\(\ds \int_0^{+\infty} \map f x \rd x\)

\(=\)







\(\ds \int_{x \mathop \to 0}^{x \mathop \to +\infty} \map f x \rd x\)





Definition of Improper Integral














\(\ds \)

\(=\)







\(\ds \int_{\frac 1 x \mathop \to 0}^{\frac 1 x \mathop \to +\infty} \map f {\frac 1 x} \map \rd {\frac 1 x}\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \int_{\frac 1 x \mathop \to 0}^{\frac 1 x \mathop \to +\infty} \map f {\frac 1 x} \paren {-\dfrac 1 {x^2} } \rd x\)





Power Rule for Derivatives














\(\ds \)

\(=\)







\(\ds -\int_{x \mathop \to +\infty}^{x \mathop \to 0} \dfrac {\map f {\frac 1 x} } {x^2} \rd x\)





simplifying














\(\ds \)

\(=\)







\(\ds \int_{x \mathop \to 0}^{x \mathop \to +\infty} \dfrac {\map f {\frac 1 x} } {x^2} \rd x\)





Reversal of Limits of Definite Integral














\(\ds \)

\(=\)







\(\ds \int_0^{+\infty} \dfrac {\map f {\frac 1 x} } {x^2} \rd x\)





Definition of Improper Integral



$\blacksquare$





