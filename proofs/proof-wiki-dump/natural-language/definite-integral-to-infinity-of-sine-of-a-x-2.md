# 

Source: https://proofwiki.org/wiki/Definite_Integral_to_Infinity_of_Sine_of_a_x%5E2

Theorem
$\ds \int_0^\infty \map \sin {a x^2} \rd x = \frac 1 2 \sqrt {\frac \pi {2 a} }$
where $a$ is a positive real number. 


Proof
We have, by Euler's Formula: Corollary:

$\map \exp {-i a x^2} = -i \map \sin {a x^2} + \map \cos {a x^2}$
As $\map \sin {a x^2}$ and $\map \cos {a x^2}$ are both real for real $a, x$, we therefore have:














\(\ds \int_0^\infty \map \sin {a x^2} \rd x\)

\(=\)







\(\ds -\int_0^\infty \map \Im {\map \exp {-i a x^2} } \rd x\)




















\(\ds \)

\(=\)







\(\ds -\map \Im {\int_0^\infty \map \exp {-i a x^2} \rd x}\)




















\(\ds \)

\(=\)







\(\ds -\frac 1 {\sqrt a} \map \Im {\int_0^\infty \map \exp {-i t^2} \rd t}\)





substituting $\sqrt a x = t$














\(\ds \)

\(=\)







\(\ds -\frac 1 {\sqrt a} \map \Im {\frac 1 2 \sqrt {\frac \pi 2} \paren {1 - i} }\)





Definite Integral to Infinity of $\map \exp {-i x^2}$














\(\ds \)

\(=\)







\(\ds \frac 1 2 \sqrt {\frac \pi {2 a} }\)









$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Trigonometric Functions: $15.50$




