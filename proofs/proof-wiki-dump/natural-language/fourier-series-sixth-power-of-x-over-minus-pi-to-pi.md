# 

Source: https://proofwiki.org/wiki/Fourier_Series/Sixth_Power_of_x_over_Minus_Pi_to_Pi

Theorem
For $x \in \openint {-\pi} \pi$:

$\ds x^6 = \frac {\pi^6} 7 + \sum_{n \mathop = 1}^\infty \frac {12 n^4 \pi^4 - 240 n^2 \pi^2 + 1440} {n^6} \cos n \pi \cos n x$


Proof
Since $x^6 = \paren {-x}^6$, $x^6$ is an even function.
By Fourier Series for Even Function over Symmetric Range, the Fourier series of $\map f x$ can be expressed as:

$x^6 \sim \dfrac {a_0} 2 + \ds \sum_{n \mathop = 1}^\infty a_n \cos n x$

where for all $n \in \Z_{> 0}$:














\(\ds a_n\)

\(=\)







\(\ds \dfrac 2 \pi \int_0^\pi x^6 \cos n x \  \d x\)




















\(\ds \)

\(=\)







\(\ds \dfrac 2 \pi \paren {\intlimits {\frac {\sin n x} n x^6 + \frac {6 \cos n x} {n^2} x^5 - \frac {30 \sin n x} {n^3} x^4 - \frac {120 \cos n x} {n^4} x^3 + \frac {360 \sin n x} {n^5} x^2 + \frac {720 \cos n x} {n^6} x - \frac {720 \sin n x} {n^7} } {x \mathop = 0} {x \mathop = \pi} }\)





Primitive of $x^6 \cos a x$














\(\ds \)

\(=\)







\(\ds \dfrac 2 \pi \paren {\frac {6 \pi^5 \cos n \pi} {n^2} - \frac {120 \pi^3 \cos n \pi} {n^4} + \frac {720 \pi \cos n \pi} {n^6}  }\)




















\(\ds \)

\(=\)







\(\ds \frac {12 n^4 \pi^4 - 240 n^2 \pi^2 + 1440} {n^6} \cos n \pi\)
























\(\ds a_0\)

\(=\)







\(\ds \dfrac 2 \pi \int_0^\pi x^6 \  \d x\)




















\(\ds \)

\(=\)







\(\ds \dfrac 2 \pi \intlimits {\frac {x^7} 7} {x \mathop = 0} {x \mathop = \pi}\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac {2 \pi^6} 7\)










This gives:

$x^6 \sim \dfrac {\pi^6} 7 + \ds \sum_{n \mathop = 1}^\infty \frac {12 n^4 \pi^4 - 240 n^2 \pi^2 + 1440} {n^6} \cos n \pi \cos n x$
$\blacksquare$


Also see
Fourier Series of Fourth Power of x




