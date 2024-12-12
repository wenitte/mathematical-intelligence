# 

Source: https://proofwiki.org/wiki/Fourier_Series/Pi_Squared_minus_x_Squared_over_Minus_Pi_to_Pi

Theorem
Let $\map f x$ be the real function defined on $\openint {-\pi} \pi$ as:

  $\map f x$ and its $4$th approximation
$\map f x = \pi^2 - x^2$

$f$ can be expressed as a half-range Fourier cosine series thus:














\(\ds \map f x\)

\(\sim\)







\(\ds \frac {2 \pi^2} 3 + 4 \sum_{n \mathop = 1}^\infty \paren {-1}^{n - 1} \frac {\cos n x} {n^2}\)




















\(\ds \)

\(=\)







\(\ds \frac {2 \pi^2} 3 + 4 \paren {\cos x - \frac 1 4 \cos 2 x + \frac 1 9 \cos 3 x - \cdots}\)











Proof
We have that:

$\pi^2 - \paren {-x}^2 = \pi^2 - x^2$
and so $\map f x$ is even on $\openint {-\pi} \pi$.
It follows from Fourier Series for Even Function over Symmetric Range:

$\ds \map f x \sim \frac {a_0} 2 + \sum_{n \mathop = 1}^\infty a_n \cos n x$

where for all $n \in \Z_{> 0}$:

$a_n = \ds \frac 2 \pi \int_0^\pi \map f x \cos n x \rd x$

Thus by definition of $f$:














\(\ds a_0\)

\(=\)







\(\ds \frac 2 \pi \int_0^\pi \map f x \rd x\)





Cosine of Zero is One














\(\ds \)

\(=\)







\(\ds \frac 2 \pi \int_0^\pi \paren {\pi^2 - x^2} \rd x\)





Definition of $f$














\(\ds \)

\(=\)







\(\ds \frac 2 \pi \intlimits {\pi^2 x - \frac {x^3} 3} 0 \pi\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac 2 \pi \paren {\paren {\pi^3 - \frac {\pi^3} 3} - \paren {0 - \frac 0 3} }\)




















\(\ds \)

\(=\)







\(\ds \frac 2 \pi \paren {\frac {2 \pi^3} 3}\)




















\(\ds \)

\(=\)







\(\ds \frac {4 \pi^2} 3\)









$\Box$

Then for $n > 0$:














\(\ds a_n\)

\(=\)







\(\ds \frac 2 \pi \int_0^\pi \map f x \cos n x \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 2 \pi \int_0^\pi \paren {\pi^2 - x^2} \cos n x \rd x\)





Definition of $f$














\(\ds \)

\(=\)







\(\ds 2 \pi \int_0^\pi \cos n x \rd x - \frac 2 \pi \int_0^\pi x^2 \cos n x \rd x\)





Linear Combination of Definite Integrals




Splitting this up into two:














\(\ds \)

\(\)







\(\ds 2 \pi \int_0^\pi \cos n x \rd x\)




















\(\ds \)

\(=\)







\(\ds 2 \pi \intlimits {\frac {\sin n x} n} 0 \pi\)





Primitive of $\cos a x$














\(\ds \)

\(=\)







\(\ds 2 \pi \paren {\frac {\sin n \pi} n - \frac {\sin 0} n}\)




















\(\ds \)

\(=\)







\(\ds 2 \pi \paren {0 - 0}\)





Sine of Multiple of Pi














\(\ds \)

\(=\)







\(\ds 0\)
























\(\ds \)

\(\)







\(\ds -\frac 2 \pi \int_0^\pi x^2 \cos n x \rd x\)




















\(\ds \)

\(=\)







\(\ds -\frac 2 \pi \intlimits {\frac {2 x \cos n x} {n^2} + \paren {\frac {x^2} n - \frac 2 {n^3} } \sin n x} 0 \pi\)





Primitive of $x^2 \cos n x$














\(\ds \)

\(=\)







\(\ds -\frac 2 \pi \paren {\paren {\frac {2 \pi \cos n \pi} {n^2} + \paren {\frac {\pi^2} n - \frac 2 {n^3} } \sin n \pi} - \paren {\frac {0 \cos 0} {n^2} + \paren {\frac {0^2} n - \frac 2 {n^3} } \sin 0} }\)




















\(\ds \)

\(=\)







\(\ds -\frac 2 \pi \paren {\frac {2 \pi \cos n \pi} {n^2} }\)





Sine of Multiple of Pi and removing vanishing terms














\(\ds \)

\(=\)







\(\ds -\frac {4 \cos n \pi} {n^2}\)




















\(\ds \)

\(=\)







\(\ds -\frac {4 \paren {-1}^n} {n^2}\)





Cosine of Multiple of Pi














\(\ds \)

\(=\)







\(\ds \paren {-1}^{n - 1} \frac 4 {n^2}\)





simplification



$\Box$

Finally:














\(\ds \map f x\)

\(\sim\)







\(\ds \frac {a_0} 2 + \sum_{n \mathop = 1}^\infty a_n \cos n x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \frac {4 \pi^2} 3 + \sum_{n \mathop = 1}^\infty \paren {-1}^{n - 1} \frac 4 {n^2} \cos n x\)





substituting for $a_0$ and $a_n$ from above














\(\ds \)

\(=\)







\(\ds \frac {2 \pi^2} 3 + 4 \sum_{n \mathop = 1}^\infty \paren {-1}^{n - 1} \frac {\cos n x} {n^2}\)





simplifying



$\blacksquare$


Sources
1961: I.N. Sneddon: Fourier Series ... (previous) ... (next): Exercises on Chapter $\text I$: $6 \, \text{(i)}$.




