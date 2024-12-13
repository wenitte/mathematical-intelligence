# 

Source: https://proofwiki.org/wiki/Half-Range_Fourier_Sine_Series/x_by_Pi_minus_x_over_0_to_Pi

Theorem
Let $\map f x$ be the real function defined on $\openint 0 \pi$ as:

$\map f x = x \paren {\pi - x}$

Then its half-range Fourier sine series can be expressed as:

$\ds \map f x \sim \frac 8 \pi \sum_{r \mathop = 0}^\infty \frac {\sin \paren {2 r + 1} x} {\paren {2 r + 1}^3}$


Proof
By definition of half-range Fourier sine series:

$\ds \map f x \sim \sum_{n \mathop = 1}^\infty b_n \sin n x$

where for all $n \in \Z_{> 0}$:

$b_n = \ds \frac 2 \pi \int_0^\pi \map f x \sin n x \rd x$

Thus by definition of $f$:














\(\ds b_n\)

\(=\)







\(\ds \frac 2 \pi \int_0^\pi \map f x \sin n x \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 2 \pi \int_0^\pi x \paren {\pi - x} \sin n x \rd x\)





Definition of $f$














\(\ds \)

\(=\)







\(\ds 2 \int_0^\pi x \sin n x \rd x - \frac 2 \pi \int_0^\pi x^2 \sin n x \rd x\)





Linear Combination of Definite Integrals and simplifying




Splitting it up into two:














\(\ds 2 \int_0^\pi x \sin n x \rd x\)

\(=\)







\(\ds 2 \intlimits {\frac {\sin n x} {n^2} - \frac {x \cos n x} n} 0 \pi\)





Primitive of $x \sin n x$














\(\ds \)

\(=\)







\(\ds 2 \paren {\paren {\frac {\sin n \pi} {n^2} - \frac {\pi \cos n \pi} n} - \paren {\frac {\sin 0} {n^2} - \frac {0 \cos 0} n} }\)




















\(\ds \)

\(=\)







\(\ds -2 \frac {\pi \cos n \pi} n\)





Sine of Multiple of Pi and removing vanishing terms




and:














\(\ds \frac 2 \pi \int_0^\pi x^2 \sin n x \rd x\)

\(=\)







\(\ds 2 \intlimits {\frac {2 x \sin n x} {n^2} + \paren {\frac 2 {n^3} - \frac {x^2} n} \cos n x} 0 \pi\)





Primitive of $x^2 \sin n x$














\(\ds \)

\(=\)







\(\ds \frac 2 \pi \paren {\paren {\frac {2 \pi \sin n \pi} {n^2} + \paren {\frac 2 {n^3} - \frac {\pi^2} n} \cos n \pi} - \paren {\frac {0 \sin 0} {n^2} + \paren {\frac 2 {n^3} - \frac {0^2} n} \cos 0} }\)




















\(\ds \)

\(=\)







\(\ds \frac 2 \pi \paren {\paren {\frac 2 {n^3} - \frac {\pi^2} n} \cos n \pi - \frac 2 {n^3} \cos 0}\)





Sine of Multiple of Pi and removing vanishing terms














\(\ds \)

\(=\)







\(\ds \frac 2 \pi \paren {\paren {\frac 2 {n^3} - \frac {\pi^2} n} \cos n \pi - \frac 2 {n^3} }\)





Cosine of Zero is One




Thus:














\(\ds b_n\)

\(=\)







\(\ds -2 \frac {\pi \cos n \pi} n - \frac 2 \pi \paren {\paren {\frac 2 {n^3} - \frac {\pi^2} n} \cos n \pi - \frac 2 {n^3} }\)




















\(\ds \)

\(=\)







\(\ds \frac {4 \paren {1 - \cos n \pi} } {\pi n^3} - 2 \frac {\pi \cos n \pi} n + \frac {2 \pi \cos n \pi} n\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac {4 \paren {1 - \paren {-1}^n} } {\pi n^3}\)





Cosine of Multiple of Pi and simplifying



When $n$ is even, $\paren {-1}^n = 1$ and so $\dfrac {4 \paren {1 - \paren {-1}^n} } {\pi n^3} = 0$.

When $n$ is odd, $n$ can be expressed as $n = 2 r + 1$ for $r \ge 0$.
Thus:














\(\ds b_n\)

\(=\)







\(\ds \frac {4 \paren {1 - \paren {-1}^{2 r + 1} } } {\pi \paren {2 r + 1}^3}\)




















\(\ds \)

\(=\)







\(\ds \frac {4 \paren {1 + 1} } {\pi \paren {2 r + 1}^3}\)





as $\paren {-1}^{2 r + 1} = -1$














\(\ds \)

\(=\)







\(\ds \frac 8 {\pi \paren {2 r + 1}^3}\)










Hence:

$\ds \map f x \sim \frac 8 \pi \sum_{r \mathop = 0}^\infty \frac {\sin \paren {2 r + 1} x} {\paren {2 r + 1}^3}$
$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 23$: Special Fourier Series and their Graphs: $23.18$




