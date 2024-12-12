# 

Source: https://proofwiki.org/wiki/Definite_Integral_to_Infinity_of_Exponential_of_-a_x_minus_Exponential_of_-b_x_over_x_by_Secant_of_p_x

Theorem
$\ds \int_0^\infty \frac {e^{-a x} - e^{-b x} } {x \sec p x} \rd x = \frac 1 2 \map \ln {\frac {b^2 + p^2} {a^2 + p^2} }$
where:

$a$ and $b$ are non-negative real numbers
$p$ is a real number.


Proof
Fix $p$ and set: 

$\ds \map I \alpha = \int_0^\infty \frac {e^{-\alpha x} } {x \sec p x} \rd x$
for all $\alpha \ge 0$.
Then: 

$\ds \int_0^\infty \frac {e^{-a x} - e^{-b x} } {x \sec p x} \rd x = \map I a - \map I b$
We have: 














\(\ds \map {I'} \alpha\)

\(=\)







\(\ds \frac \d {\d \alpha} \int_0^\infty \frac {e^{-\alpha x} } {x \sec p x} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_0^\infty \frac \partial {\partial \alpha} \paren {\frac {e^{-\alpha x} } {x \sec p x} } \rd x\)





Definite Integral of Partial Derivative














\(\ds \)

\(=\)







\(\ds -\int_0^\infty e^{-\alpha x} \cos p x \rd x\)





Derivative of $e^{a x}$, Definition of Secant Function














\(\ds \)

\(=\)







\(\ds -\frac \alpha {\alpha^2 + p^2}\)





Definite Integral to Infinity of $e^{-a x} \cos b x$



so:














\(\ds \map I \alpha\)

\(=\)







\(\ds -\int \frac \alpha {\alpha^2 + p^2} \rd \alpha\)




















\(\ds \)

\(=\)







\(\ds -\frac 1 2 \map \ln {\alpha^2 + p^2} + C\)





Primitive of $\dfrac x {x^2 + a^2}$



for all $\alpha \ge 0$, for some constant $C \in \R$.
We then have: 














\(\ds \int_0^\infty \frac {e^{-a x} - e^{-b x} } {x \sec p x} \rd x\)

\(=\)







\(\ds \map I a - \map I b\)




















\(\ds \)

\(=\)







\(\ds \paren {-\frac 1 2 \map \ln {a^2 + p^2} + C} - \paren {-\frac 1 2 \map \ln {b^2 + p^2} + C}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\map \ln {b^2 + p^2} - \map \ln {a^2 + p^2} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \map \ln {\frac {b^2 + p^2} {a^2 + p^2} }\)





Difference of Logarithms



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Exponential Functions: $15.87$




