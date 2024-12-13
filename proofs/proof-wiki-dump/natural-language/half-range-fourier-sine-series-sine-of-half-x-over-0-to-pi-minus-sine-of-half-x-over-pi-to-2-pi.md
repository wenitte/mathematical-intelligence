# 

Source: https://proofwiki.org/wiki/Half-Range_Fourier_Sine_Series/Sine_of_Half_x_over_0_to_Pi,_Minus_Sine_of_Half_x_over_Pi_to_2_Pi

Theorem
Let $\map f x$ be the real function defined on $\openint 0 {2 \pi}$ as:

  $\map f x$ and its $7$th approximation
$\map f x = \begin {cases}
\sin \dfrac x 2 & : 0 \le x < \pi \\
-\sin \dfrac x 2 & : \pi < x \le 2 \pi \end {cases}$

Then its Fourier series can be expressed as:














\(\ds \map f x\)

\(\sim\)







\(\ds \frac 8 \pi \sum_{n \mathop = 1}^\infty \paren {-1}^{n - 1} \frac {n \sin n x} {4 n^2 - 1}\)




















\(\ds \)

\(=\)







\(\ds \frac 8 \pi \paren {\frac {\sin x} {1 \times 3} - \frac {2 \sin 2 x} {3 \times 5} + \frac {3 \sin 3 x} {5 \times 7} - \frac {4 \sin 4 x} {7 \times 9} + \frac {5 \sin 5 x} {9 \times 11} - \dotsb}\)











Proof
By definition of half-range Fourier sine series:

$\displaystyle \map f x \sim \sum_{n \mathop = 1}^\infty b_n \sin \dfrac {n x} 2$
where:














\(\ds b_n\)

\(=\)







\(\ds \frac 2 {2 \pi} \int_0^{2 \pi} \map f x \sin \frac {n \pi x} {2 \pi} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 \pi \int_0^{2 \pi} \map f x \sin \frac {n x} 2 \rd x\)









for all $n \in \Z_{>0}$.

Thus:














\(\ds b_n\)

\(=\)







\(\ds \frac 1 \pi \int_0^{2 \pi} \map f x \sin \dfrac {n x} 2 \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 \pi \int_0^\pi \sin \dfrac x 2 \sin \dfrac {n x} 2 \rd x + \frac 1 \pi \int_\pi^{2 \pi} -\sin \dfrac x 2 \sin \dfrac {n x} 2 \rd x\)





Definition of $f$




When $\dfrac {n x} 2 \ne \dfrac x 2$, that is, when $n \ne 1$, we have:














\(\ds \int \sin \dfrac x 2 \sin \dfrac {n x} 2 \rd x\)

\(=\)







\(\ds \frac {\sin \paren {\dfrac x 2 - \dfrac {n x} 2} } {2 \paren {\dfrac 1 2 - \dfrac n 2} } - \frac {\sin \paren {\dfrac x 2 + \dfrac {n x} 2} } {2 \paren {\dfrac 1 2 + \dfrac n 2} } + C\)





Primitive of Sine of $\dfrac x 2$ by Sine of $\dfrac {n x} 2$














\(\ds \)

\(=\)







\(\ds \frac {\sin \paren {\dfrac {\paren {n - 1} x} 2} } {n - 1} - \frac {\sin \paren {\dfrac {\paren {n + 1} x} 2} } {n + 1} + C\)










and so for $n \ne 1$:














\(\ds b_n\)

\(=\)







\(\ds \frac 1 \pi \int_0^{2 \pi} \map f x \sin \dfrac {n x} 2 \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 \pi \intlimits {\frac {\sin \paren {\dfrac {\paren {n - 1} x} 2} } {n - 1} - \frac {\sin \paren {\dfrac {\paren {n + 1} x} 2} } {n + 1} } 0 \pi - \frac 1 \pi \intlimits {\frac {\sin \paren {\dfrac {\paren {n - 1} x} 2} } {n - 1} - \frac {\sin \paren {\dfrac {\paren {n + 1} x} 2} } {n + 1} } \pi {2 \pi}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 \pi \paren {\paren {\frac {\sin \paren {\dfrac {\paren {n - 1} \pi} 2} } {n - 1} - \frac {\sin \paren {\dfrac {\paren {n + 1} \pi} 2} } {n + 1} } - \paren {\frac {\sin \paren {\dfrac {\paren {n - 1} 0} 2} } {n - 1} - \frac {\sin \paren {\dfrac {\paren {n + 1} 0} 2} } {n + 1} } }\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac 1 \pi \paren {\paren {\frac {\sin \paren {\dfrac {\paren {n - 1} 2 \pi} 2} } {n - 1} - \frac {\sin \paren {\dfrac {\paren {n + 1} 2 \pi} 2} } {n + 1} } - \paren {\frac {\sin \paren {\dfrac {\paren {n - 1} \pi} 2} } {n - 1} - \frac {\sin \paren {\dfrac {\paren {n + 1} \pi} 2} } {n + 1} } }\)




















\(\ds \)

\(=\)







\(\ds \frac 2 \pi \paren {\frac {\sin \paren {\dfrac {\paren {n - 1} \pi} 2} } {n - 1} - \frac {\sin \paren {\dfrac {\paren {n + 1} \pi} 2} } {n + 1} }\)





Sine of Multiple of Pi and simplifying




When $\dfrac {n x} 2 = \dfrac x 2$, that is, when $n = 1$, we have:














\(\ds \int \sin \dfrac x 2 \sin \dfrac x 2 \rd x\)

\(=\)







\(\ds \int \sin^2 \dfrac x 2 \rd x + C\)




















\(\ds \)

\(=\)







\(\ds \frac x 2 - \frac {\sin 2 \dfrac x 2} {4 \dfrac 1 2} + C\)





Primitive of $\sin^2 \dfrac x 2$














\(\ds \)

\(=\)







\(\ds \frac x 2 - \frac {\sin x} 2 + C\)





simplifying




and so for $n = 1$:














\(\ds b_n\)

\(=\)







\(\ds \frac 1 \pi \int_0^{2 \pi} \map f x \sin \dfrac x 2 \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 \pi \intlimits {\frac x 2 - \frac {\sin x} 2} 0 \pi - \frac 1 \pi \intlimits {\frac x 2 - \frac {\sin x} 2} \pi {2 \pi}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 \pi \paren {\paren {\frac \pi 2 - \frac {\sin \pi} 2} - \paren {\frac 0 2 - \frac {\sin 0} 2} }\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac 1 \pi \paren {\paren {\frac {2 \pi} 2 - \frac {\sin 2 \pi} 2} - \paren {\frac \pi 2 - \frac {\sin \pi} 2} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 \pi \paren {\frac \pi 2 - \frac {2 \pi} 2 + \frac \pi 2}\)





Sine of Multiple of Pi














\(\ds \)

\(=\)







\(\ds 0\)





everything vanishes




Hence:














\(\ds \map f x\)

\(\sim\)







\(\ds \sum_{n \mathop = 1}^\infty b_n \sin \dfrac {n x} 2\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 2}^\infty \frac 2 \pi \paren {\frac {\sin \paren {\dfrac {\paren {n - 1} \pi} 2} } {n - 1} - \frac {\sin \paren {\dfrac {\paren {n + 1} \pi} 2} } {n + 1} } \sin \dfrac {n x} 2\)





substituting for $b_n$ from above




When $n$ is odd, we have $n = 2 r + 1$ for $r \ge 1$, and so:














\(\ds \)

\(\)







\(\ds \sum_{r \mathop = 1}^\infty \frac 2 \pi \paren {\frac {\sin \paren {\dfrac {\paren {\paren {2 r + 1} - 1} \pi} 2} } {\paren {2 r + 1} - 1} - \frac {\sin \paren {\dfrac {\paren {\paren {2 r + 1} + 1} \pi} 2} } {\paren {2 r + 1} + 1} } \sin \dfrac {\paren {2 r + 1} x} 2\)




















\(\ds \)

\(=\)







\(\ds \sum_{r \mathop = 1}^\infty \frac 2 \pi \paren {\frac {\sin \paren {\dfrac {2 r \pi} 2} } {2 r} - \frac {\sin \paren {\dfrac {\paren {2 r + 2} \pi} 2} } {2 r + 2} } \sin \dfrac {\paren {2 r + 1} x} 2\)




















\(\ds \)

\(=\)







\(\ds \sum_{r \mathop = 1}^\infty \frac 2 \pi \paren {\frac {\sin r \pi} {2 r} - \frac {\sin \paren {r + 1} \pi} {2 r + 2} } \sin \dfrac {\paren {2 r + 1} x} 2\)




















\(\ds \)

\(=\)







\(\ds 0\)





Sine of Multiple of Pi




When $n$ is even, we have $n = 2 r$ for $r \ge 1$, and so:














\(\ds \)

\(\)







\(\ds \sum_{r \mathop = 1}^\infty \frac 2 \pi \paren {\frac {\sin \paren {\dfrac {\paren {2 r - 1} \pi} 2} } {2 r - 1} - \frac {\sin \paren {\dfrac {\paren {2 r + 1} \pi} 2} } {2 r + 1} } \sin \dfrac {2 r x} 2\)




















\(\ds \)

\(=\)







\(\ds \frac 2 \pi \sum_{r \mathop = 1}^\infty \paren {\frac {\sin \paren {r - \frac 1 2} \pi} {2 r - 1} - \frac {\sin \paren {r + \frac 1 2} \pi} {2 r + 1} } \sin r x\)




















\(\ds \)

\(=\)







\(\ds \frac 2 \pi \sum_{r \mathop = 1}^\infty \paren {\frac {\paren {-1}^{r - 1} } {2 r - 1} - \frac {\paren {-1}r} {2 r + 1} } \sin r x\)





Sine of Half-Integer Multiple of Pi














\(\ds \)

\(=\)







\(\ds \frac 2 \pi \sum_{r \mathop = 1}^\infty \paren {\frac {\paren {-1}^{r - 1} } {2 r - 1} + \frac {\paren {-1}^{r - 1} } {2 r + 1} } \sin r x\)




















\(\ds \)

\(=\)







\(\ds \frac 2 \pi \sum_{r \mathop = 1}^\infty \paren {-1}^{r - 1} \paren {\frac {2 r + 1 + 2 r - 1} {\paren {2 r - 1} \paren {2 r + 1} } } \sin r x\)




















\(\ds \)

\(=\)







\(\ds \frac 2 \pi \sum_{r \mathop = 1}^\infty \paren {-1}^{r - 1} \frac {4 r} {4 r^2 - 1} \sin r x\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds \frac 8 \pi \sum_{r \mathop = 1}^\infty \paren {-1}^{r - 1} \frac {r \sin r x} {4 r^2 - 1}\)





simplifying



$\blacksquare$


Sources
1961: I.N. Sneddon: Fourier Series ... (previous) ... (next): Exercises on Chapter $\text I$: $2$.




