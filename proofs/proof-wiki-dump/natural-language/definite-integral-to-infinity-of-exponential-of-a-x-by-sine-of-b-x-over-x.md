# 

Source: https://proofwiki.org/wiki/Definite_Integral_to_Infinity_of_Exponential_of_-a_x_by_Sine_of_b_x_over_x

Theorem
$\ds \int_0^\infty \frac {e^{-a x} \sin b x} x \rd x = \map \arctan {\frac b a}$
where $a$ and $b$ are real number with $a > 0$.


Proof
Take $a$ constant and define: 

$\ds \map I b = \int_0^\infty \frac {e^{-a x} \sin b x} x \rd x$
We have: 














\(\ds \map {I'} b\)

\(=\)







\(\ds \frac \d {\d b} \int_0^\infty \frac {e^{-a x} \sin b x} x \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_0^\infty \frac \partial {\partial b} \paren {\frac {e^{-a x} \sin b x} x} \rd x\)





Definite Integral of Partial Derivative














\(\ds \)

\(=\)







\(\ds \int_0^\infty e^{-a x} \cos b x \rd x\)





Derivative of $\cos a x$














\(\ds \)

\(=\)







\(\ds \frac a {a^2 + b^2}\)





Definite Integral to Infinity of $e^{-a x} \cos b x$



so:














\(\ds \map I b\)

\(=\)







\(\ds a \int \frac 1 {b^2 + a^2} \rd b\)




















\(\ds \)

\(=\)







\(\ds \frac a a \arctan \frac b a + C\)





Primitive of $\dfrac 1 {x^2 + a^2}$














\(\ds \)

\(=\)







\(\ds \arctan \frac b a + C\)









for some constant $C \in \R$.
We have: 














\(\ds \map I 0\)

\(=\)







\(\ds \int_0^\infty \frac {e^{-a x} \sin 0} x \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_0^\infty 0 \rd x\)




















\(\ds \)

\(=\)







\(\ds 0\)









on the other hand:














\(\ds \map I 0\)

\(=\)







\(\ds \arctan 0 + C\)




















\(\ds \)

\(=\)







\(\ds C\)









so:

$C = 0$
So we have: 

$\ds \int_0^\infty \frac {e^{-a x} \sin b x} x \rd x = \map \arctan {\frac b a}$
as required.
$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Exponential Functions: $15.70$




