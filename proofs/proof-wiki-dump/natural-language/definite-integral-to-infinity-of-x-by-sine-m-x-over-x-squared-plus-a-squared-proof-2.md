# 

Source: https://proofwiki.org/wiki/Definite_Integral_to_Infinity_of_x_by_Sine_m_x_over_x_Squared_plus_a_Squared/Proof_2

Theorem
$\ds \int_0^\infty \frac {x \sin m x} {x^2 + a^2} \rd x = \frac \pi 2 e^{-m a}$


Proof
From Definite Integral to Infinity of $\dfrac {\cos m x} {x^2 + a^2}$:

$\ds \int_0^\infty \frac {\cos m x} {x^2 + a^2} \rd x = \frac \pi {2 a} e^{-m a}$
We have: 














\(\ds \frac \d {\d m} \int_0^\infty \frac {\cos m x} {x^2 + a^2} \rd x\)

\(=\)







\(\ds \int_0^\infty \frac \partial {\partial m} \paren {\frac {\cos m x} {x^2 + a^2} } \rd x\)





Definite Integral of Partial Derivative














\(\ds \)

\(=\)







\(\ds -\int_0^\infty \frac {x \sin m x} {x^2 + a^2} \rd x\)





Derivative of $\cos a x$



So:














\(\ds \int_0^\infty \frac {x \sin m x} {x^2 + a^2} \rd x\)

\(=\)







\(\ds -\frac \d {\d m} \paren {\frac \pi {2 a} e^{-m a} }\)




















\(\ds \)

\(=\)







\(\ds \frac \pi 2 e^{-m a}\)





Derivative of $e^{a x}$



$\blacksquare$





