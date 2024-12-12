# 

Source: https://proofwiki.org/wiki/Fourier_Series/Fourth_Power_of_x_over_Minus_Pi_to_Pi

Theorem
For $x \in \openint {-\pi} \pi$:

$\ds x^4 = \frac {\pi^4} 5 + \sum_{n \mathop = 1}^\infty \frac {8 n^2 \pi^2 - 48} {n^4} \cos n \pi \cos n x$


Proof
Since $x^4 = \paren {-x}^4$, $x^4$ is an even function.
By Fourier Series for Even Function over Symmetric Range, the Fourier series of $\map f x$ can be expressed as:

$x^4 \sim \dfrac {a_0} 2 + \ds \sum_{n \mathop = 1}^\infty a_n \cos n x$

where for all $n \in \Z_{> 0}$:














\(\ds a_n\)

\(=\)







\(\ds \dfrac 2 \pi \ds \int_0^\pi x^4 \cos n x \rd x\)




















\(\ds \)

\(=\)







\(\ds \dfrac 2 \pi \paren {\intlimits {\frac {\sin n x} n x^4 + \frac {4 \cos n x} {n^2} x^3 - \frac {12 \sin n x} {n^3} x^2 - \frac {24 \cos n x} {n^4} x + \frac {24 \sin n x} {n^5} } {x \mathop = 0} {x \mathop = \pi} }\)





Primitive of $x^4 \cos a x$














\(\ds \)

\(=\)







\(\ds \dfrac 2 \pi \paren {\frac {4 \pi^3 \cos n \pi} {n^2} - \frac {24 \pi \cos n \pi} {n^4} }\)




















\(\ds \)

\(=\)







\(\ds \frac {8 n^2 \pi^2 - 48} {n^4} \cos n \pi\)
























\(\ds a_0\)

\(=\)







\(\ds \dfrac 2 \pi \int_0^\pi x^4 \rd x\)




















\(\ds \)

\(=\)







\(\ds \dfrac 2 \pi \intlimits {\frac {x^5} 5} {x \mathop = 0} {x \mathop = \pi}\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac {2 \pi^4} 5\)










This gives:

$x^4 \sim \dfrac {\pi^4} 5 + \ds \sum_{n \mathop = 1}^\infty \frac {8 n^2 \pi^2 - 48} {n^4} \cos n \pi \cos n x$
$\blacksquare$





