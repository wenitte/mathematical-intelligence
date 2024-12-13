# 

Source: https://proofwiki.org/wiki/Half-Range_Fourier_Sine_Series/Sine_of_Non-Integer_Multiple_of_x_over_0_to_Pi



Theorem
Let $\lambda \in \R \setminus \Z$ be a real number which is not an integer.

Let $\map f x$ be the real function defined on $\openint 0 \pi$ as:

$\map f x = \sin \lambda x$

Then its half-range Fourier sine series can be expressed as:














\(\ds \map f x\)

\(\sim\)







\(\ds \frac {2 \sin \lambda \pi} \pi \paren {\sum_{n \mathop = 1}^\infty \paren {-1}^n \frac {n \sin n x} {\lambda^2 - n^2} }\)




















\(\ds \)

\(=\)







\(\ds \frac {2 \sin \lambda \pi} \pi \paren {-\frac {\sin x} {\lambda^2 - 1} + \frac {2 \sin 2 x} {\lambda^2 - 4} - \frac {3 \sin 3 x} {\lambda^2 - 9}  + \frac {4 \sin 4 x} {\lambda^2 - 16} - \dotsb}\)











Proof
By definition of half-range Fourier sine series:

$\ds \map f x \sim \frac {a_0} 2 + \sum_{n \mathop = 1}^\infty a_n \sin n x$

where for all $n \in \Z_{> 0}$:

$a_n = \ds \frac 2 \pi \int_0^\pi \map f x \sin n x \rd x$

Because $\lambda \notin \Z$ we have that $\lambda \ne n$ for all $n$.
Thus for $n > 0$:














\(\ds a_n\)

\(=\)







\(\ds \frac 2 \pi \int_0^\pi \map f x \sin n x \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 2 \pi \int_0^\pi \sin \lambda x \sin n x \rd x\)





Definition of $f$














\(\ds \)

\(=\)







\(\ds \frac 2 \pi \intlimits {\frac {\map \sin {\lambda - n} x} {2 \paren {\lambda - n} } - \frac {\map \sin {\lambda + n} x} {2 \paren {\lambda + n} } } 0 \pi\)





Primitive of $\sin \lambda x \sin n x$














\(\ds \)

\(=\)







\(\ds \frac 2 \pi \paren {\paren {\frac {\sin \paren {\lambda - n} \pi} {2 \paren {\lambda - n} } - \frac {\sin \paren {\lambda + n} \pi} {2 \paren {\lambda + n} } } - \paren {\frac {\sin 0} {2 \paren {\lambda - n} } - \frac {\sin 0} {2 \paren {\lambda + n} } } }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 \pi \paren {\frac {\sin \paren {\lambda - n} \pi} {\lambda - n} - \frac {\sin \paren {\lambda + n} \pi} {\lambda + n} }\)





Sine of Multiple of Pi and simplification














\(\ds \)

\(=\)







\(\ds \frac 1 \pi \paren {\frac {\sin \lambda \pi \cos n \pi - \cos \lambda \pi \sin n \pi} {\lambda - n} - \frac {\sin \lambda \pi \cos n \pi + \cos \lambda \pi \sin n \pi} {\lambda + n} }\)





Sine of Sum














\(\ds \)

\(=\)







\(\ds \frac {\sin \lambda \pi \cos n \pi} \pi \paren {\frac 1 {\lambda - n} - \frac 1 {\lambda + n} }\)





Sine of Multiple of Pi and simplification














\(\ds \)

\(=\)







\(\ds \frac {\paren {-1}^n \sin \lambda \pi} \pi \frac {\lambda + n - \lambda + n} {\paren {\lambda - n} \paren {\lambda + n} }\)





Cosine of Multiple of Pi and manipulation














\(\ds \)

\(=\)







\(\ds \paren {-1}^n \frac {2 \sin \lambda \pi} \pi \frac n {\lambda^2 - n^2}\)





Difference of Two Squares



$\Box$

Finally:














\(\ds \map f x\)

\(\sim\)







\(\ds \sum_{n \mathop = 1}^\infty b_n \sin n x\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \paren {-1}^n \frac {2 \sin \pi} \pi \frac n {\lambda^2 - n^2} \sin n x\)





substituting for $b_n$ from above














\(\ds \)

\(=\)







\(\ds \frac {2 \sin \lambda \pi} \pi \paren {\sum_{n \mathop = 1}^\infty \paren {-1}^n \frac n {\lambda^2 - n^2} \sin n x}\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac {2 \sin \lambda \pi} \pi \paren {\sum_{n \mathop = 1}^\infty \paren {-1}^n \frac {n \sin n x} {\lambda^2 - n^2} }\)





further manipulation



$\blacksquare$


Also presented as
Some sources present this result as:














\(\ds \sin \lambda x\)

\(\sim\)







\(\ds \frac {2 \sin \lambda \pi} \pi \paren {\sum_{n \mathop = 1}^\infty \paren {-1}^{n - 1} \frac {n \sin n x} {n^2 - \lambda^2} }\)




















\(\ds \)

\(=\)







\(\ds \frac {2 \sin \lambda \pi} \pi \paren {\frac {\sin x} {1 - \lambda^2} - \frac {2 \sin 2 x} {2^2 - \lambda^2} + \frac {3 \sin 3 x} {3^2 - \lambda^2} - \frac {4 \sin 4 x} {4^2 - \lambda^2} + \dotsb}\)











Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 23$: Miscellanous Fourier Series: $23.19$




