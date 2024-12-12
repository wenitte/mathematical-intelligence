# 

Source: https://proofwiki.org/wiki/Fourier_Series/4_minus_x_squared_over_Range_of_2

Theorem
Let $\map f x$ be the real function defined on $\openint 0 2$ as:

  $\map f x$ and its $7$th approximation
$\map f x = 4 - x^2$

Then its Fourier series can be expressed as:

$\map f x \sim \ds \frac 8 3 - \frac 4 {\pi^2} \sum_{n \mathop = 1}^\infty \frac {\cos n \pi x} {n^2} + \frac 4 \pi \sum_{n \mathop = 1}^\infty  \frac {\sin n \pi x} n$


Proof
By definition of Fourier series:

$\ds \map f x \sim \frac {a_0} 2 + \sum_{n \mathop = 1}^\infty \paren {a_n \cos n \pi x + b_n \sin n \pi x}$
where:














\(\ds a_n\)

\(=\)







\(\ds \int_0^2 \map f x \cos n \pi x \rd x\)




















\(\ds b_n\)

\(=\)







\(\ds \int_0^2 \map f x \sin n \pi x \rd x\)









for all $n \in \Z_{>0}$.

Thus:














\(\ds a_0\)

\(=\)







\(\ds \int_0^2 \map f x \rd x\)





Cosine of Zero is One














\(\ds \)

\(=\)







\(\ds \int_0^2 \paren {4 - x^2} \rd x\)




















\(\ds \)

\(=\)







\(\ds \intlimits {4 x - \frac {x^3} 3} 0 2\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \paren {4 \times 2 - \frac {2^3} 3} - \paren {0 - 0}\)




















\(\ds \)

\(=\)







\(\ds 8 - \frac 8 3\)




















\(\ds \)

\(=\)







\(\ds \frac {16} 3\)









$\Box$

For $n > 0$:














\(\ds a_n\)

\(=\)







\(\ds \int_0^2 \map f x \cos n \pi x \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_0^2 \paren {4 - x^2} \cos n \pi x \rd x\)





Definition of $f$














\(\ds \)

\(=\)







\(\ds 4 \int_0^2 \cos n \pi x \rd x - \int_0^2 x^2 \cos n \pi x \rd x\)





Linear Combination of Definite Integrals




Splitting this up into bits:















\(\ds \)

\(\)







\(\ds 4 \int_0^2 \cos n \pi x \rd x\)




















\(\ds \)

\(=\)







\(\ds 4 \intlimits {\frac {\sin n \pi x} {n \pi} } 0 2\)





Primitive of $\cos n \pi x$














\(\ds \)

\(=\)







\(\ds 4 \paren {\frac {\sin 2 n \pi} {n \pi} } - 4 \paren {\frac {\sin 0} {n \pi} }\)




















\(\ds \)

\(=\)







\(\ds 0\)





Sine of Multiple of Pi


















\(\ds \)

\(\)







\(\ds \int_0^2 x^2 \cos n \pi x \rd x\)




















\(\ds \)

\(=\)







\(\ds \intlimits {\frac {2 x \cos n \pi x} {\paren {n \pi}^2} + \paren {\frac {x^2} {n \pi} - \frac 2 {\paren {n \pi}^3} } \sin n \pi x} 0 2\)





Primitive of $x^2 \cos n \pi x$














\(\ds \)

\(=\)







\(\ds \paren {\frac {4 \cos 2 n \pi} {n^2 \pi^2} + \paren {\frac 4 {n \pi} - \frac 2 {\paren {n \pi}^3} } \sin 2 n \pi} - \paren {\frac {0 \cos 0} {n^2 \pi^2} + \paren {\frac 0 {n \pi} - \frac 2 {\paren {n \pi}^3} } \sin 0}\)




















\(\ds \)

\(=\)







\(\ds \frac {4 \cos 2 n \pi} {n^2 \pi^2}\)





Sine of Multiple of Pi and removal of vanishing terms














\(\ds \)

\(=\)







\(\ds \frac 4 {n^2 \pi^2}\)





Cosine of Multiple of Pi




Reassembling $a_n$ from the remaining non-vanishing terms:














\(\ds a_n\)

\(=\)







\(\ds 0 - \frac 4 {n^2 \pi^2}\)




















\(\ds \)

\(=\)







\(\ds -\frac 4 {n^2 \pi^2}\)









$\Box$

Now for the $\sin n \pi x$ terms:














\(\ds b_n\)

\(=\)







\(\ds \int_0^2 \map f x \sin n \pi x \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_0^2 \paren {4 - x^2} \sin n \pi x \rd x\)





Definition of $f$














\(\ds \)

\(=\)







\(\ds 4 \int_0^2 \sin n \pi x \rd x - \int_0^2 x^2 \sin n \pi x \rd x\)





Linear Combination of Definite Integrals




Splitting this up into bits:















\(\ds \)

\(\)







\(\ds 4 \int_0^2 \sin n \pi x \rd x\)




















\(\ds \)

\(=\)







\(\ds 4 \intlimits {\frac {-\cos n \pi x} {n \pi} } 0 2\)





Primitive of $\sin n \pi x$














\(\ds \)

\(=\)







\(\ds 4 \paren {\frac {-\cos 2 n \pi} {n \pi} } - 4 \paren {\frac {-\cos 0} {n \pi} }\)




















\(\ds \)

\(=\)







\(\ds 4 \paren {\frac {-1} {n \pi} } - 4 \paren {\frac {-1} {n \pi} }\)





Cosine of Multiple of Pi














\(\ds \)

\(=\)







\(\ds 0\)
























\(\ds \)

\(\)







\(\ds \int_0^2 x^2 \sin n x \rd x\)




















\(\ds \)

\(=\)







\(\ds \intlimits {\frac {2 x \sin n \pi x} {\paren {n \pi}^2} + \paren {\frac 2 {\paren {n \pi}^3} - \frac {x^2} {n \pi} } \cos n \pi x} 0 2\)





Primitive of $x^2 \sin n \pi x$














\(\ds \)

\(=\)







\(\ds \paren {\frac {4 \sin 2 n \pi} {n^2 \pi^2} + \paren {\frac 2 {\paren {n \pi}^3} - \frac 4 {n \pi} } \cos 2 n \pi} - \paren {\frac {0 \sin 0} {n^2 \pi^2} + \paren {\frac 2 {\paren {n \pi}^3} - \frac 0 {n \pi} } \cos 0}\)




















\(\ds \)

\(=\)







\(\ds \paren {\frac 2 {\paren {n \pi}^3} - \frac 4 {n \pi} } \cos 2 n \pi - \frac 2 {\paren {n \pi}^3} \cos 0\)





Sine of Multiple of Pi and removal of vanishing terms














\(\ds \)

\(=\)







\(\ds -\frac 4 {n \pi}\)





Cosine of Multiple of Pi and simplifying




Reassembling $b_n$ from the remaining non-vanishing terms:














\(\ds b_n\)

\(=\)







\(\ds 0 - \paren {-\frac 4 {n \pi} }\)




















\(\ds \)

\(=\)







\(\ds \frac 4 {n \pi}\)









$\Box$

Finally:














\(\ds \map f x\)

\(\sim\)







\(\ds \frac {a_0} 2 + \sum_{n \mathop = 1}^\infty \paren {a_n \cos n x + b_n \sin n x}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \paren {\frac {16} 3} + \sum_{n \mathop = 1}^\infty \paren {-\frac 4 {n^2 \pi^2} \cos n \pi x + \frac 4 {n \pi} \sin n \pi x}\)





substituting for $a_0$, $a_n$ and $b_n$ from above














\(\ds \)

\(=\)







\(\ds \frac 8 3 - \frac 4 {\pi^2} \sum_{n \mathop = 1}^\infty \frac {\cos n \pi x} {n^2} + \frac 4 \pi \sum_{n \mathop = 1}^\infty \frac {\sin n \pi x} n\)





rearranging



$\blacksquare$


Sources
1961: I.N. Sneddon: Fourier Series ... (previous) ... (next): Chapter One: $\S 3$. Other Types of Whole-Range Series: Example $2$




