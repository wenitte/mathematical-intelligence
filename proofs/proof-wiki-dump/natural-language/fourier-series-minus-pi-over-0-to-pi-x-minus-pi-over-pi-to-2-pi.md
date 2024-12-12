# 

Source: https://proofwiki.org/wiki/Fourier_Series/Minus_Pi_over_0_to_Pi,_x_minus_Pi_over_Pi_to_2_Pi

Theorem
Let $\map f x$ be the real function defined on $\openint 0 {2 \pi}$ as:

  $\map f x$ and its $7$th approximation
$\map f x = \begin{cases}
-\pi & : 0 < x \le \pi \\
x - \pi & : \pi < x < 2 \pi \end{cases}$

Then its Fourier series can be expressed as:














\(\ds \map f x\)

\(\sim\)







\(\ds -\frac \pi 4 + \frac 2 \pi \sum_{r \mathop = 0}^\infty \frac {\cos \paren {2 r + 1} x} {\paren {2 r + 1}^2} - \sum_{n \mathop = 1}^\infty \frac {2 - \paren {-1}^n \sin n x} n\)




















\(\ds \)

\(=\)







\(\ds -\frac \pi 4 + \dfrac 2 \pi \paren {\cos x + \frac {\cos 3 x} 9 + \frac {\cos 5 x} {25} + \cdots} - 3 \paren {\sin x + \frac {\sin 3 x} 3 + \frac {\sin 5 x} 5 + \cdots} - \paren {\frac {\sin 2 x} 2 + \frac {\sin 4 x} 4 + \cdots}\)











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







\(\ds \frac 1 \pi \int_0^\pi -\pi \rd x + \frac 1 \pi \int_\pi^{2 \pi} \paren {x - \pi} \rd x\)




















\(\ds \)

\(=\)







\(\ds -\int_0^\pi \rd x + \frac 1 \pi \int_\pi^{2 \pi} x \rd x - \int_\pi^{2 \pi} \rd x\)





Linear Combination of Definite Integrals














\(\ds \)

\(=\)







\(\ds -\int_0^{2 \pi} \rd x + \frac 1 \pi \int_\pi^{2 \pi} x \rd x\)





Sum of Integrals on Adjacent Intervals for Continuous Functions














\(\ds \)

\(=\)







\(\ds -\big[{x}\big]_0^{2 \pi} + \frac 1 \pi \int_\pi^{2 \pi} x \rd x\)





Primitive of Constant














\(\ds \)

\(=\)







\(\ds -\paren {2 \pi - 0} + \frac 1 \pi \int_\pi^{2 \pi} x \rd x\)




















\(\ds \)

\(=\)







\(\ds -2 \pi + \frac 1 \pi \paren {\intlimits {\frac {x^2} 2} \pi {2 \pi} }\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds -2 \pi + \frac 1 \pi \paren {\frac {\paren {2 \pi}^2} 2 - \frac {\pi^2} 2}\)




















\(\ds \)

\(=\)







\(\ds -2 \pi + 2 \pi - \frac \pi 2\)




















\(\ds \)

\(=\)







\(\ds -\frac \pi 2\)









$\Box$

For $n > 0$:














\(\ds a_n\)

\(=\)







\(\ds \frac 1 \pi \int_0^{2 \pi} \map f x \cos n x \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 \pi \int_0^\pi \paren {-\pi} \cos n x \rd x + \frac 1 \pi \int_\pi^{2 \pi} \paren {x - \pi} \cos n x \rd x\)





Definition of $f$














\(\ds \)

\(=\)







\(\ds -\int_0^\pi \cos n x \rd x + \frac 1 \pi \int_\pi^{2 \pi} x \cos n x \rd x - \int_\pi^{2 \pi} \cos n x \rd x\)





Linear Combination of Definite Integrals














\(\ds \)

\(=\)







\(\ds -\int_0^{2 \pi} \cos n x \rd x + \frac 1 \pi \int_\pi^{2 \pi} x \cos n x \rd x\)





Sum of Integrals on Adjacent Intervals for Continuous Functions














\(\ds \)

\(=\)







\(\ds 0 + \frac 1 \pi \int_\pi^{2 \pi} x \cos n x \rd x\)





Integral over $2 \pi$ of $\cos n x$














\(\ds \)

\(=\)







\(\ds \frac 1 \pi \intlimits {\frac {\cos n x} {n^2} + \frac {x \sin n x} n} \pi {2 \pi}\)





Primitive of $x \cos n x$














\(\ds \)

\(=\)







\(\ds \frac 1 \pi \paren {\frac {\cos 2 n \pi} {n^2} + \frac {2 \pi \sin 2 n \pi} n} - \frac 1 \pi \paren {\frac {\cos n \pi} {n^2} + \frac {\pi \sin n \pi} n}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 \pi \paren {\frac {\cos 2 n \pi} {n^2} - \frac {\cos n \pi} {n^2} }\)





Sine of Multiple of Pi














\(\ds \)

\(=\)







\(\ds \frac {1 - \paren {-1}^n} {n^2 \pi}\)





Cosine of Multiple of Pi and simplifying














\(\ds \)

\(=\)







\(\ds \begin {cases} \dfrac 2 {n^2 \pi} & : \text {$n$ odd} \\ 0 & : \text {$n$ even} \end {cases}\)





separating out the odd and even cases














\(\ds \)

\(=\)







\(\ds \dfrac 2 {\pi \paren {2 r + 1}^2}\)





setting $n = 2 r + 1$ for odd $n$



$\Box$

Now for the $\sin n x$ terms:














\(\ds b_n\)

\(=\)







\(\ds \frac 1 \pi \int_0^{2 \pi} \map f x \sin n x \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 \pi \int_0^\pi \paren {-\pi} \sin n x \rd x + \frac 1 \pi \int_\pi^{2 \pi} \paren {x - \pi} \sin n x \rd x\)





Definition of $f$














\(\ds \)

\(=\)







\(\ds -\int_0^\pi \sin n x \rd x + \frac 1 \pi \int_\pi^{2 \pi} x \sin n x \rd x - \int_\pi^{2 \pi} \sin n x \rd x\)





Linear Combination of Definite Integrals














\(\ds \)

\(=\)







\(\ds -\int_0^{2 \pi} \sin n x \rd x + \frac 1 \pi \int_\pi^{2 \pi} x \sin n x \rd x\)





Sum of Integrals on Adjacent Intervals for Continuous Functions














\(\ds \)

\(=\)







\(\ds 0 + \frac 1 \pi \int_\pi^{2 \pi} x \sin n x \rd x\)





Integral over $2 \pi$ of $\sin n x$














\(\ds \)

\(=\)







\(\ds \frac 1 \pi \intlimits {\frac {\sin n x} {n^2} - \frac {x \cos n x} n} \pi {2 \pi}\)





Primitive of $x \sin n x$














\(\ds \)

\(=\)







\(\ds \frac 1 \pi \paren {\frac {\sin 2 n \pi} {n^2} - \frac {2 \pi \cos 2 n \pi} n} - \frac 1 \pi \paren {\frac {\sin \pi} {n^2} - \frac {\pi \cos \pi} n}\)




















\(\ds \)

\(=\)







\(\ds \frac {-2 \cos 2 n \pi + \cos n \pi} n\)





Sine of Multiple of Pi and simplifying














\(\ds \)

\(=\)







\(\ds \frac {-2 + \paren {-1}^n} n\)





Cosine of Multiple of Pi














\(\ds \)

\(=\)







\(\ds -\frac {2 - \paren {-1}^n} n\)





rearranging



$\Box$

Finally:














\(\ds \map f x\)

\(\sim\)







\(\ds \frac {a_0} 2 + \sum_{n \mathop = 1}^\infty \paren {a_n \cos n x + b_n \sin n x}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \paren {-\frac \pi 2} + \sum_{r \mathop = 0}^\infty \frac 2 {\pi \paren {2 r + 1}^2} \cos \paren {2 r + 1} x + \sum_{n \mathop = 1}^\infty \paren {-\frac {2 - \paren {-1}^n} n} \sin n x\)





substituting for $a_0$, $a_n$ and $b_n$ from above














\(\ds \)

\(=\)







\(\ds -\frac \pi 4 + \frac 2 \pi \sum_{r \mathop = 0}^\infty \frac {\cos \paren {2 r + 1} x} {\paren {2 r + 1}^2} - \sum_{n \mathop = 1}^\infty \frac {2 - \paren {-1}^n \sin n x} n\)





simplifying



$\blacksquare$


Sources
1961: I.N. Sneddon: Fourier Series ... (previous) ... (next): Exercises on Chapter $\text I$: $1$.




