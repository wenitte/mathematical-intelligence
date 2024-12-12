# 

Source: https://proofwiki.org/wiki/Dirichlet_Integral/Proof_1

Theorem
$\ds \int_0^\infty \frac {\sin x} x \rd x = \frac \pi 2$


Proof
By Fubini's Theorem:

$\ds \int_0^\infty \paren {\int_0^\infty e^{- x y} \sin x \rd y} \rd x = \int_0^\infty \paren {\int_0^\infty e^{- x y} \sin x \rd x} \rd y$

Then:














\(\ds \int_0^\infty e^{- x y} \sin x \rd y\)

\(=\)







\(\ds \intlimits {-e^{- x y} \frac {\sin x} x} 0 \infty\)





Primitive of $e^{a x}$














\(\ds \)

\(=\)







\(\ds \frac {\sin x} x\)










and:














\(\ds \int_0^\infty e^{- x y} \sin x \rd x\)

\(=\)







\(\ds \intlimits {\frac {-e^{- x y} \paren {y \sin x + \cos x} } {y^2 + 1} } 0 \infty\)





Primitive of $e^{a x} \sin b x$














\(\ds \)

\(=\)







\(\ds \frac 1 {y^2 + 1}\)










Hence:














\(\ds \int_0^\infty \frac {\sin x} x \rd x\)

\(=\)







\(\ds \int_0^\infty \frac 1 {y^2 + 1} \rd y\)




















\(\ds \)

\(=\)







\(\ds \bigintlimits {\arctan y} 0 \infty\)





Primitive of $\dfrac 1 {x^2 + a^2}$














\(\ds \)

\(=\)







\(\ds \frac \pi 2\)





as $\ds \lim_{y \mathop \to \infty} \arctan y = \frac \pi 2$



$\blacksquare$





