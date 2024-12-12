# 

Source: https://proofwiki.org/wiki/Definite_Integral_to_Infinity_of_Sine_m_x_over_x_by_x_Squared_plus_a_Squared

Theorem
$\ds \int_0^\infty \frac {\sin m x} {x \paren {x^2 + a^2} } \rd x = \frac \pi {2 a^2} \paren {1 - e^{-m a} }$
where:

$a$ is a positive real number
$m$ is a non-negative real number.


Proof
Fix $a$ and set: 

$\ds \map I m = \int_0^\infty \frac {\sin m x} {x \paren {x^2 + a^2} } \rd x$
for $m \ge 0$. 
We have:














\(\ds \map {I'} m\)

\(=\)







\(\ds \frac \d {\d m} \int_0^\infty \frac {\sin m x} {x \paren {x^2 + a^2} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_0^\infty \frac \partial {\partial m} \paren {\frac {\sin m x} {x \paren {x^2 + a^2} } } \rd x\)





Definite Integral of Partial Derivative














\(\ds \)

\(=\)







\(\ds \int_0^\infty \frac {\cos m x} {x^2 + a^2} \rd x\)





Derivative of $\sin a x$














\(\ds \)

\(=\)







\(\ds \frac \pi {2 a} e^{-m a}\)





Definite Integral to Infinity of $\dfrac {\cos m x} {x^2 + a^2}$



So by Primitive of $e^{a x}$:

$\map I m = -\dfrac \pi {2 a^2} e^{-m a} + C$
for some constant $C \in \R$.
We have: 














\(\ds \map I 0\)

\(=\)







\(\ds \int_0^\infty \frac {\sin 0 x} {x^2 + a^2} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_0^\infty 0 \rd x\)





Sine of Zero is Zero














\(\ds \)

\(=\)







\(\ds 0\)









On the other hand: 














\(\ds \map I 0\)

\(=\)







\(\ds -\frac \pi {2 a^2} e^0 + C\)




















\(\ds \)

\(=\)







\(\ds -\frac \pi {2 a^2} + C\)





Exponential of Zero



So:

$C = \dfrac \pi {2 a^2}$
giving: 

$\ds \map I m = \int_0^\infty \frac {\sin m x} {x \paren {x^2 + a^2} } \rd x = \frac \pi {2 a^2} \paren {1 - e^{-m a} }$
$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Trigonometric Functions: $15.42$




