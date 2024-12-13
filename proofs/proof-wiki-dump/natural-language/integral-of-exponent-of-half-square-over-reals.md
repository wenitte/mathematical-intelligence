# 

Source: https://proofwiki.org/wiki/Integral_of_Exponent_of_Half_Square_over_Reals

Theorem
$\ds \int_{\mathop \to -\infty}^{\mathop \to +\infty} e^{- x^2 / 2} \rd x = \sqrt {2 \pi}$


Proof
Let $t = \dfrac {x^2} 2$.
Then:














\(\ds \int_0^{\mathop \to +\infty} e^{- x^2 / 2} \rd x\)

\(=\)







\(\ds \int_0^{\mathop \to +\infty} \paren {2 t} e^{-t} \rd t\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac 1 {\sqrt 2} \map \Gamma {\frac 1 2}\)





Definition of Gamma Function














\(\ds \)

\(=\)







\(\ds \frac 1 {\sqrt 2} \sqrt \pi\)





Gamma Function of One Half














\(\ds \)

\(=\)







\(\ds \frac {\sqrt {2 \pi} } 2\)





multiplying top and bottom by $\sqrt 2$




We have that $e^{- x^2 / 2}$ is an even function.
From Definite Integral of Even Function: Corollary:

$\ds \int_{\mathop \to -\infty}^{\mathop \to +\infty} e^{- x^2 / 2} \rd x = 2 \int_0^{\mathop \to +\infty} e^{- x^2 / 2} \rd x$
Hence the result.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 17.7 \ (6)$




