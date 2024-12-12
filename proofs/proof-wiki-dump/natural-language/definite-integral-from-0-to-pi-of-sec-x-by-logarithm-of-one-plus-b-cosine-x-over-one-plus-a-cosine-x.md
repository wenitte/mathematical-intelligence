# 

Source: https://proofwiki.org/wiki/Definite_Integral_from_0_to_Pi_of_Sec_x_by_Logarithm_of_One_plus_b_Cosine_x_over_One_plus_a_Cosine_x

Theorem
$\ds \int_0^{\pi/2} \sec x \map \ln {\frac {1 + b \cos x} {1 + a \cos x} } \rd x = \frac 1 2 \paren {\paren {\arccos a}^2 - \paren {\arccos b}^2}$
where $a$ and $b$ are real numbers with $-1 < a, b < 1$.


Proof
Note that by Difference of Logarithms: 

$\ds \int_0^{\pi/2} \sec x \map \ln {\frac {1 + b \cos x} {1 + a \cos x} } \rd x = \int_0^{\pi/2} \sec x \map \ln {1 + b \cos x} \rd x - \int_0^{\pi/2} \sec \map \ln {1 + a \cos x} \rd x$
For each $\alpha \in \openint {-1} 1$, set: 

$\ds \map I \alpha = \int_0^{\pi/2} \sec x \map \ln {1 + \alpha \cos x} \rd x$
Then: 

$\ds \int_0^{\pi/2} \sec x \map \ln {\frac {1 + b \cos x} {1 + a \cos x} } \rd x = \map I b - \map I a$
We have: 














\(\ds \map {I'} \alpha\)

\(=\)







\(\ds \frac \d {\d \alpha} \int_0^{\pi/2} \sec x \map \ln {1 + \alpha \cos x} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_0^{\pi/2} \frac \partial {\partial \alpha} \paren {\sec x \map \ln {1 + \alpha \cos x} } \rd x\)





Definite Integral of Partial Derivative














\(\ds \)

\(=\)







\(\ds \int_0^{\pi/2} \frac {\cos x \sec x} {1 + \alpha \cos x} \rd x\)





Chain Rule for Derivatives, Derivative of Natural Logarithm














\(\ds \)

\(=\)







\(\ds \int_0^{\pi/2} \frac 1 {1 + \alpha \cos x} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {\arccos \alpha} {\sqrt {1 - \alpha^2} }\)





Definite Integral from $0$ to $\dfrac \pi 2$ of $\dfrac 1 {a + b \cos x}$



Then:














\(\ds \map I b - \map I a\)

\(=\)







\(\ds \int_a^b \map {I'} \alpha \rd \alpha\)





Fundamental Theorem of Calculus: Second Part














\(\ds \)

\(=\)







\(\ds \int_a^b \frac {\arccos \alpha} {\sqrt {1 - \alpha^2} } \rd \alpha\)









From Derivative of Arccosine Function, we have: 

$\ds \frac \d {\d \alpha} \arccos \alpha = -\frac 1 {\sqrt {1 - \alpha^2} }$
so:














\(\ds \int_a^b \frac {\arccos \alpha} {\sqrt {1 - \alpha^2} } \rd \alpha\)

\(=\)







\(\ds \int_{\arccos a}^{\arccos b} x \frac {-\sqrt {1 - \alpha^2} } {\sqrt {1 - \alpha^2} } \rd x\)





substituting $x = \arccos \alpha$














\(\ds \)

\(=\)







\(\ds -\int_{\arccos a}^{\arccos b} x \rd x\)




















\(\ds \)

\(=\)







\(\ds \intlimits {-\frac {x^2} 2} {\arccos a} {\arccos b}\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\paren {\arccos a}^2 - \paren {\arccos b}^2}\)









so:

$\ds \int_0^{\pi/2} \sec x \map \ln {\frac {1 + b \cos x} {1 + a \cos x} } \rd x = \frac 1 2 \paren {\paren {\arccos a}^2 - \paren {\arccos b}^2}$
as required.
$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Logarithmic Functions: $15.110$




