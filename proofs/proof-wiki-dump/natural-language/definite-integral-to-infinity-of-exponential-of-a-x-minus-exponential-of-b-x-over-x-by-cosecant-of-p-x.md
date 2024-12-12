# 

Source: https://proofwiki.org/wiki/Definite_Integral_to_Infinity_of_Exponential_of_-a_x_minus_Exponential_of_-b_x_over_x_by_Cosecant_of_p_x

Theorem
$\ds \int_0^\infty \frac {e^{-a x} - e^{-b x} } {x \csc p x} \rd x = \arctan \frac b p - \arctan \frac a p$
where:

$a$ and $b$ are non-negative real numbers
$p$ is a non-zero real number.


Proof
Fix $p$ and set: 

$\ds \map I \alpha = \int_0^\infty \frac {e^{-\alpha x} } {x \csc p x} \rd x$
for all $\alpha \ge 0$.
Then: 

$\ds \int_0^\infty \frac {e^{-a x} - e^{-b x} } {x \csc p x} \rd x = \map I a - \map I b$
We have: 














\(\ds \map {I'} \alpha\)

\(=\)







\(\ds \frac \d {\d \alpha} \int_0^\infty \frac {e^{-\alpha x} } {x \csc p x} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_0^\infty \frac \partial {\partial \alpha} \paren {\frac {e^{-\alpha x} } {x \csc p x} } \rd x\)





Definite Integral of Partial Derivative














\(\ds \)

\(=\)







\(\ds -\int_0^\infty e^{-\alpha x} \sin p x \rd x\)





Derivative of $e^{a x}$, Definition of Cosecant














\(\ds \)

\(=\)







\(\ds -\frac p {\alpha^2 + p^2}\)





Definite Integral to Infinity of $e^{-a x} \sin b x$



so:














\(\ds \map I \alpha\)

\(=\)







\(\ds -p \int \frac 1 {\alpha^2 + p^2} \rd \alpha\)




















\(\ds \)

\(=\)







\(\ds -\arctan \frac \alpha p + C\)





Primitive of $\dfrac 1 {x^2 + a^2}$



for all $\alpha \ge 0$ and constant $C \in \R$.
We therefore have: 














\(\ds \int_0^\infty \frac {e^{-a x} - e^{-b x} } {x \csc p x} \rd x\)

\(=\)







\(\ds \map I a - \map I b\)




















\(\ds \)

\(=\)







\(\ds \paren {-\arctan \frac a p + C} - \paren {-\arctan \frac b p + C}\)




















\(\ds \)

\(=\)







\(\ds \arctan \frac b p - \arctan \frac a p\)









$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Exponential Functions: $15.88$




