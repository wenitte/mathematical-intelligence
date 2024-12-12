# 

Source: https://proofwiki.org/wiki/Fourier_Series/x_squared_over_Minus_Pi_to_Pi

Theorem
For $x \in \openint {-\pi} \pi$:

$\ds x^2 = \frac {\pi^2} 3 + \sum_{n \mathop = 1}^\infty \paren {\paren {-1}^n \frac 4 {n^2} \cos n x}$


Proof
From Even Power is Even Function, $x^2$ is an even function.
By Fourier Series for Even Function over Symmetric Range, we have:

$\ds x^2 \sim \frac {a_0} 2 + \sum_{n \mathop = 1}^\infty a_n \cos n x$
where:














\(\ds a_n\)

\(=\)







\(\ds \frac 2 \pi \int_0^\pi x^2 \map \cos {n x} \rd x\)














\(\ds \leadsto \ \ \)





\(\ds \frac 1 2 a_0\)

\(=\)







\(\ds \frac 2 {2 \pi} \int_0^\pi x^2 \rd x\)





Cosine of Zero is One














\(\ds \)

\(=\)







\(\ds \frac 1 \pi \cdot \frac {\pi^3} 3\)





Primitive of Power, Fundamental Theorem of Calculus














\(\ds \)

\(=\)







\(\ds \frac {\pi^2} 3\)










Then: 














\(\ds \frac 2 \pi \int_0^\pi x^2 \map \cos {n x} \rd x\)

\(=\)







\(\ds \frac 2 \pi \intlimits {\frac {2 x \cos n x} {n^2} + \paren {\frac {x^2} n - \frac 2 {n^3} } \sin n x} 0 \pi\)





Primitive of $x^2 \cos a x$, Fundamental Theorem of Calculus














\(\ds \)

\(=\)







\(\ds \frac 2 \pi \intlimits {\frac {2 x \cos n x} {n^2} } 0 \pi\)





Sine of Multiple of Pi














\(\ds \)

\(=\)







\(\ds \frac 2 \pi \cdot \frac {2 \pi \cos n \pi} {n^2}\)




















\(\ds \)

\(=\)







\(\ds \frac {4 \cos n \pi} {n^2}\)




















\(\ds \)

\(=\)







\(\ds \paren {-1}^n \frac 4 {n^2}\)





Cosine of Multiple of Pi




Substituting for $a_n$ in $(1)$: 

$\ds x^2 = \frac {\pi^2} 3 + \sum_{n \mathop = 1}^\infty \paren {\paren {-1}^n \frac 4 {n^2} \cos n x}$
as required.
$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 23$: Special Fourier Series and their Graphs: $23.14$




