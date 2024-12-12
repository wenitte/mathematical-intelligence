# 

Source: https://proofwiki.org/wiki/Fourier_Series/Square_of_x_minus_pi,_Square_of_pi

Theorem
  $\map f x$ and $5$th order expansion
Let $\map f x$ be the real function defined on $\openint 0 {2 \pi}$ as:

$\map f x = \begin{cases} \paren {x - \pi}^2 & : 0 < x \le \pi \\ \pi^2 & : \pi < x < 2 \pi \end{cases}$

Then its Fourier series can be expressed as:














\(\ds \map f x\)

\(\sim\)







\(\ds \frac {2 \pi^2} 3 + \sum_{n \mathop = 1}^\infty \paren {\frac {2 \cos n x} {n^2} + \paren {\frac {\paren {-1}^n \pi} n - \frac {2 \paren {1 - \paren {-1}^n} } {\pi n^3} } \sin n x}\)




















\(\ds \)

\(=\)







\(\ds \frac {2 \pi^2} 3 + 2 \paren {\cos x + \frac {\cos 2 x} {2^2} + \frac {\cos 3 x} {3^2} + \cdots}\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \pi \sin x + \frac \pi 2 \sin x - \frac \pi 3 \sin x + \frac \pi 4 \sin x - \cdots\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \dfrac 4 \pi \sin x - \frac 4 {\pi 3^3} \sin 3 x - \frac 4 {\pi 5^3} \sin 5 x \cdots\)











Proof
By definition of Fourier series:

$\displaystyle \map f x \sim \frac {a_0} 2 + \sum_{n \mathop = 1}^\infty \paren {a_n \cos n x + b_n \sin n x}$
where:














\(\ds a_n\)

\(=\)







\(\ds \dfrac 1 \pi \int_0^{2 \pi} \map f x \cos n x \rd x\)




















\(\ds b_n\)

\(=\)







\(\ds \dfrac 1 \pi \int_0^{2 \pi} \map f x \sin n x \rd x\)









for all $n \in \Z_{>0}$.

Thus:














\(\ds a_0\)

\(=\)







\(\ds \frac 1 \pi \int_0^{2 \pi} \map f x \rd x\)





Cosine of Zero is One














\(\ds \)

\(=\)







\(\ds \frac 1 \pi \int_0^\pi \paren {x - \pi}^2 \rd x + \frac 1 \pi \int_\pi^{2 \pi} \pi^2 \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 \pi \int_0^\pi \paren {x^2 + 2 \pi x - \pi^2} \rd x + \frac 1 \pi \bigintlimits {\pi^2 x} \pi {2 \pi}\)





Primitive of Constant














\(\ds \)

\(=\)







\(\ds \frac 1 \pi \intlimits {\frac {x^3} 3 + \pi x^2 - \pi^2 x} 0 \pi + \frac 1 \pi \bigintlimits {\pi^2 x} \pi {2 \pi}\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac 1 \pi \paren {\paren {\frac {\pi^3} 3 + \pi^3 - \pi^3} - \paren {\frac {0^3} 3 + \pi \times 0^2 - \pi^2 \times 0} + \paren {\pi^2 \times 2 \pi} - \paren {\pi^3} }\)




















\(\ds \)

\(=\)







\(\ds \frac {\pi^2} 3 + 2 \pi^2 - \pi^2\)




















\(\ds \)

\(=\)







\(\ds \frac {4 \pi^2} 3\)









$\Box$

For $n > 0$:














\(\ds a_n\)

\(=\)







\(\ds \frac 1 \pi \int_0^{2 \pi} \map f x \cos n x \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 \pi \int_0^\pi \paren {x - \pi}^2 \cos n x \rd x + \frac 1 \pi \int_\pi^{2 \pi} \pi^2 \cos n x \rd x\)





Definition of $f$














\(\ds \)

\(=\)







\(\ds \frac 1 \pi \int_0^\pi \paren {x^2 - 2 \pi x + \pi^2} \cos n x \rd x + \frac 1 \pi \int_\pi^{2 \pi} \pi^2 \cos n x \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 \pi \int_0^\pi x^2 \cos n x \rd x - 2 \int_0^\pi x \cos n x \rd x + \pi \int_0^\pi \cos n x \rd x + \pi \int_\pi^{2 \pi} \cos n x \rd x\)





Linear Combination of Definite Integrals




Splitting this up into bits:















\(\ds \)

\(\)







\(\ds \pi \int_0^\pi \cos n x \rd x + \pi \int_\pi^{2 \pi} \cos n x \rd x\)




















\(\ds \)

\(=\)







\(\ds \pi \int_0^{2 \pi} \cos n x \rd x\)





Sum of Integrals on Adjacent Intervals for Continuous Functions














\(\ds \)

\(=\)







\(\ds 0\)





Integral over $2 \pi$ of $\cos n x$


















\(\ds \)

\(\)







\(\ds 2 \int_0^\pi x \cos n x \rd x\)




















\(\ds \)

\(=\)







\(\ds 2 \intlimits {\frac {\cos n x} {n^2} + \frac {x \sin n x} n} 0 \pi\)





Primitive of $x \cos n x$














\(\ds \)

\(=\)







\(\ds 2 \paren {\frac {\cos n \pi} {n^2} + \frac {\pi \sin n \pi} n} - 2 \paren {\frac {\cos 0} {n^2} + \frac {0 \sin 0} n}\)




















\(\ds \)

\(=\)







\(\ds \frac {2 \cos n \pi} {n^2} - \frac {2 \cos 0} {n^2}\)





Sine of Multiple of Pi














\(\ds \)

\(=\)







\(\ds \paren {-1}^n \frac 2 {n^2} - \frac 2 {n^2}\)





Cosine of Multiple of Pi


















\(\ds \)

\(\)







\(\ds \frac 1 \pi \int_0^\pi x^2 \cos n x \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 \pi \intlimits {\frac {2 x \cos n x} {n^2} + \paren {\frac {x^2} n - \frac 2 {n^3} } \sin n x} 0 \pi\)





Primitive of $x^2 \cos n x$














\(\ds \)

\(=\)







\(\ds \frac 1 \pi \paren {\frac {2 \pi \cos n \pi} {n^2} + \paren {\frac {\pi^2} n - \frac 2 {n^3} } \sin n \pi} - \frac 1 \pi \paren {\frac {0 \cos 0} {n^2} + \paren {\frac 0 n - \frac 2 {n^3} } \sin 0}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 \pi \frac {2 \pi \cos n \pi} {n^2}\)





Sine of Multiple of Pi and removal of vanishing terms














\(\ds \)

\(=\)







\(\ds \paren {-1}^n \frac 2 {n^2}\)





Cosine of Multiple of Pi




Reassembling $a_n$ from the remaining non-vanishing terms:














\(\ds a_n\)

\(=\)







\(\ds \paren {-1}^n \frac 2 {n^2} - \paren {-1}^n \frac 2 {n^2} + \frac 2 {n^2}\)




















\(\ds \)

\(=\)







\(\ds \frac 2 {n^2}\)









$\Box$

Now for the $\sin n x$ terms:














\(\ds b_n\)

\(=\)







\(\ds \frac 1 \pi \int_0^{2 \pi} \map f x \sin n x \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 \pi \int_0^\pi \paren {x - \pi}^2 \sin n x \rd x + \frac 1 \pi \int_\pi^{2 \pi} \pi^2 \sin n x \rd x\)





Definition of $f$














\(\ds \)

\(=\)







\(\ds \frac 1 \pi \int_0^\pi \paren {x^2 - 2 \pi x + \pi^2} \sin n x \rd x + \frac 1 \pi \int_\pi^{2 \pi} \pi^2 \sin n x \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 \pi \int_0^\pi x^2 \sin n x \rd x - 2 \int_0^\pi x \sin n x \rd x + \pi \int_0^\pi \sin n x \rd x + \pi \int_\pi^{2 \pi} \sin n x \rd x\)





Linear Combination of Definite Integrals




Splitting this up into bits:















\(\ds \)

\(\)







\(\ds \pi \int_0^\pi \sin n x \rd x + \pi \int_\pi^{2 \pi} \sin n x \rd x\)




















\(\ds \)

\(=\)







\(\ds \pi \int_0^{2 \pi} \sin n x \rd x\)





Sum of Integrals on Adjacent Intervals for Continuous Functions














\(\ds \)

\(=\)







\(\ds 0\)





Integral over $2 \pi$ of $\sin n x$


















\(\ds \)

\(\)







\(\ds 2 \int_0^\pi x \sin n x \rd x\)




















\(\ds \)

\(=\)







\(\ds 2 \intlimits {\frac {\sin n x} {n^2} - \frac {x \cos n x} n} 0 \pi\)





Primitive of $x \sin n x$














\(\ds \)

\(=\)







\(\ds 2 \paren {\frac {\sin n \pi} {n^2} - \frac {\pi \cos n \pi} n} - 2 \paren {\frac {\sin 0} {n^2} - \frac {0 \cos 0} n}\)




















\(\ds \)

\(=\)







\(\ds -\frac {2 \pi \cos n \pi} n\)





Sine of Multiple of Pi and removal of vanishing terms


















\(\ds \)

\(\)







\(\ds \frac 1 \pi \int_0^\pi x^2 \sin n x \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 \pi \intlimits {\frac {2 x \sin n x} {n^2} + \paren {\frac 2 {n^3} - \frac {x^2} n} \cos n x} 0 \pi\)





Primitive of $x^2 \sin n x$














\(\ds \)

\(=\)







\(\ds \frac 1 \pi \paren {\frac {2 \pi \sin n \pi} {n^2} + \paren {\frac 2 {n^3} - \frac {\pi^2} n} \cos n \pi} - \frac 1 \pi \paren {\frac {0 \sin 0} {n^2} + \paren {\frac 2 {n^3} - \frac {0^2} n} \cos 0}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 \pi \paren {\paren {\frac 2 {n^3} - \frac {\pi^2} n} \cos n \pi} - \frac 1 \pi \paren {\frac 2 {n^3} \cos 0}\)





Sine of Multiple of Pi and removal of vanishing terms














\(\ds \)

\(=\)







\(\ds \frac 2 {\pi n^3} \paren {\cos n \pi - 1} - \frac \pi n \cos n \pi\)





Cosine of Zero is One and simplifying




Reassembling $b_n$ from the remaining non-vanishing terms:














\(\ds b_n\)

\(=\)







\(\ds \frac 2 {\pi n^3} \paren {\cos n \pi - 1} - \frac \pi n \cos n \pi - \paren {- \frac {2 \pi \cos n \pi} n}\)




















\(\ds \)

\(=\)







\(\ds \frac 2 {\pi n^3} \paren {\cos n \pi - 1} + \frac \pi n \cos n \pi\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac 2 {\pi n^3} \paren {\paren {-1}^n - 1} + \frac {\paren {-1}^n \pi} n\)





Cosine of Multiple of Pi



$\Box$

Finally:














\(\ds \map f x\)

\(\sim\)







\(\ds \frac {a_0} 2 + \sum_{n \mathop = 1}^\infty \paren {a_n \cos n x + b_n \sin n x}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \paren {\frac {4 \pi^2} 3} + \sum_{n \mathop = 1}^\infty \paren {\frac 2 {n^2} \cos n x + \paren {\frac 2 {\pi n^3} \paren {\paren {-1}^n - 1} + \frac {\paren {-1}^n \pi} n} \sin n x}\)





substituting for $a_0$, $a_n$ and $b_n$ from above














\(\ds \)

\(=\)







\(\ds \frac {2 \pi^2} 3 + \sum_{n \mathop = 1}^\infty \paren {\frac {2 \cos n x} {n^2} + \paren {\frac {\paren {-1}^n \pi} n + \frac {2 \paren {\paren {-1}^n - 1} } {\pi n^3} } \sin n x}\)





rearranging



$\blacksquare$


Sources
1961: I.N. Sneddon: Fourier Series ... (previous) ... (next): Chapter One: $\S 2$. Fourier Series: Example $1$




