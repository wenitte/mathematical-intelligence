# 

Source: https://proofwiki.org/wiki/Frullani%27s_Integral



Theorem
Let $a, b > 0$. 
Let $f$ be a function continuously differentiable on the non-negative real numbers. 
Suppose that $\ds \map f \infty = \lim_{x \mathop\to \infty} \map f x$ exists, and is finite.
Then: 

$\ds \int_0^\infty \frac {\map f {a x} - \map f {b x} } x \rd x = \paren {\map f \infty - \map f 0} \ln \frac a b$


Proof













\(\ds \int_0^\infty \frac {\map f {a x} - \map f {b x} } x \rd x\)

\(=\)







\(\ds \int_0^\infty \intlimits {\frac {\map f {x t} } x} {t = b} a \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_0^\infty \int_b^a \map {f'} {x t} \rd t \rd x\)





Fundamental Theorem of Calculus














\(\ds \)

\(=\)







\(\ds \int_b^a \int_0^\infty \map {f'} {x t} \rd x \rd t\)





Fubini's Theorem














\(\ds \)

\(=\)







\(\ds \int_b^a \intlimits {\frac {\map f {x t} } t} {x = 0} \infty \rd t\)





Fundamental Theorem of Calculus














\(\ds \)

\(=\)







\(\ds \int_b^a \frac {\map f \infty - \map f 0} t \rd t\)




















\(\ds \)

\(=\)







\(\ds \paren {\map f \infty - \map f 0} \paren {\ln a -\ln b}\)





Primitive of Reciprocal, Fundamental Theorem of Calculus














\(\ds \)

\(=\)







\(\ds \paren {\map f \infty - \map f 0} \ln \frac a b\)





Difference of Logarithms



$\blacksquare$


Source of Name
This entry was named for Giuliano Frullani.


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Miscellaneous Definite Integrals: $15.118$
Weisstein, Eric W. "Frullani's Integral." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/FrullanisIntegral.html




