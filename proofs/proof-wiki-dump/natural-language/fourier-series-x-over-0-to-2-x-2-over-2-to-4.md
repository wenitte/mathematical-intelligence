# 

Source: https://proofwiki.org/wiki/Fourier_Series/x_over_0_to_2,_x-2_over_2_to_4

Theorem
Let $\map f x$ be the real function defined on $\openint 0 4$ as:
$\quad \map f x = \begin{cases}
x & : 0 < x \le 2 \\
x - 2 & : 2 < x < 4 \end{cases}$

Then its Fourier series can be expressed as:

$\ds \map f x \sim 1 + \frac 4 \pi \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{r - 1} } {2 r - 1} \paren {1 + \frac {4 \paren {-1}^r} {\paren {2 r - 1} \pi} } \cos \frac {\paren {2 r - 1} \pi x} 4$


Proof
Let $\map f x$ be the function defined as:
$\quad \forall x \in \openint 0 4: \begin{cases}
x & : 0 < x \le 2 \\
x - 2 & : 2 < x < 4 \end{cases}$

Let $f$ be expressed by a half-range Fourier cosine series:

$\ds \map f x \sim \frac {a_0} 2 + \sum_{n \mathop = 1}^\infty a_n \cos \frac {n \pi x} 4$
where for all $n \in \Z_{> 0}$:

$\ds a_n = \frac 2 l \int_0^l \map f x \cos \frac {n \pi x} l \rd x $

In this context, $l = 4$ and so this can be expressed as:














\(\ds a_n\)

\(=\)







\(\ds \frac 2 4 \paren {\int_0^2 x \cos \frac {n \pi x} 4 \rd x + \int_2^4 \paren {x - 2} \cos \frac {n \pi x} 4 \rd x}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\int_0^2 x \cos \frac {n \pi x} 4 \rd x + \int_2^4 \paren {x - 2} \cos \frac {n \pi x} 4 \rd x}\)










First the case when $n = 0$:














\(\ds a_0\)

\(=\)







\(\ds \frac 1 2 \paren {\int_0^2 x \rd x + \int_2^4 \paren {x - 2} \rd x}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\intlimits {\frac {x^2} 2} 0 2 + \intlimits {\frac {x^2} 2 - 2 x} 2 4}\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\paren {\frac {2^2} 2 - \frac {0^2} 2} + \paren {\paren {\frac {4^2} 2 - 2 \times 4} - \paren {\frac {2^2} 2 - 2 \times 2} } }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\paren {\frac 4 2 - 0} + \paren {\paren {\frac {16} 2 - 8} - \paren {\frac 4 2 - 4} } }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {2 + 0 + 2}\)




















\(\ds \)

\(=\)







\(\ds 2\)










When $n \ne 0$:














\(\ds a_n\)

\(=\)







\(\ds \frac 1 2 \paren {\int_0^2 x \cos \frac {n \pi x} 4 \rd x + \int_2^4 \paren {x - 2} \cos \frac {n \pi x} 4 \rd x}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\int_0^2 x \cos \frac {n \pi x} 4 \rd x + \int_2^4 x \cos \frac {n \pi x} 4 \rd x - 2 \int_2^4 \cos \frac {n \pi x} 4 \rd x}\)





Linear Combination of Definite Integrals














\(\ds \)

\(=\)







\(\ds \frac 1 2 \int_0^4 x \cos \frac {n \pi x} 4 \rd x - \int_2^4 \cos \frac {n \pi x} 4 \rd x\)





Sum of Integrals on Adjacent Intervals for Integrable Functions




Splitting it up into two:














\(\ds \)

\(\)







\(\ds \frac 1 2 \int_0^4 x \cos \frac {n \pi x} 4 \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \intlimits {\frac {16} {n^2 \pi^2} \cos \frac {n \pi x} 4 + \frac 4 {n \pi} x \sin \frac {n \pi x} 4 } 0 4\)





Primitive of $x \cos a x$














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\paren {\frac {16} {n^2 \pi^2} \cos n \pi + \frac {16} {n \pi} \sin n \pi} - \paren {\frac {16} {n^2 \pi^2} \cos 0 + \frac 4 {n \pi} \times 0 \sin 0} }\)




















\(\ds \)

\(=\)







\(\ds \frac 8 {n^2 \pi^2} \paren {\cos n \pi - \cos 0}\)





Sine of Multiple of Pi and simplification














\(\ds \)

\(=\)







\(\ds \frac {8 \paren {\paren {-1}^n - 1} } {n^2 \pi^2}\)





Cosine of Multiple of Pi














\(\ds \)

\(=\)







\(\ds \begin {cases} 0 & : \text {$n$ even} \\ \dfrac {-16} {n^2 \pi^2} & : \text {$n$ odd} \end {cases}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {-16} {\paren {2 r - 1}^2 \pi^2}\)





substituting $n = 2 r - 1$




On the other hand:














\(\ds \)

\(\)







\(\ds \int_2^4 \cos \frac {n \pi x} 4 \rd x\)




















\(\ds \)

\(=\)







\(\ds \intlimits {\frac 4 {n \pi} \sin \frac {n \pi x} 4} 2 4\)





Primitive of $\cos a x$














\(\ds \)

\(=\)







\(\ds \frac 4 {n \pi} \paren {\sin \frac {4 n \pi} 4 - \sin \frac {2 n \pi} 4 }\)




















\(\ds \)

\(=\)







\(\ds \frac 4 {n \pi} \paren {\sin n \pi - \sin \frac {n \pi} 2}\)




















\(\ds \)

\(=\)







\(\ds -\frac 4 {n \pi} \sin \frac {n \pi} 2\)





Sine of Multiple of Pi



The above expression is $0$ when $n$ is even, by Sine of Multiple of Pi.
Thus we may substitute $n = 2 r - 1$.
Then:














\(\ds \)

\(\)







\(\ds \int_2^4 \cos \frac {n \pi x} 4 \rd x\)




















\(\ds \)

\(=\)







\(\ds -\frac 4 {n \pi} \sin \frac {n \pi} 2\)




















\(\ds \)

\(=\)







\(\ds -\frac 4 {\paren {2 r - 1} \pi} \sin \frac {\paren {2 r - 1} \pi} 2\)




















\(\ds \)

\(=\)







\(\ds -\frac 4 {\paren {2 r - 1} \pi} \sin \paren {\paren {r - 1} + \frac 1 2} \pi\)




















\(\ds \)

\(=\)







\(\ds -\frac 4 {\paren {2 r - 1} \pi} \paren {-1}^{r - 1}\)





Sine of Half-Integer Multiple of Pi




Combining the results:














\(\ds \map f x\)

\(\sim\)







\(\ds \frac {a_0} 2 + \sum_{n \mathop = 1}^\infty a_n \cos \frac {n \pi x} 4\)




















\(\ds \)

\(=\)







\(\ds \frac {a_0} 2 + \sum_{n \text{ odd} } a_n \cos \frac {n \pi x} 4\)





as both integrals vanish for even $n$














\(\ds \)

\(=\)







\(\ds \frac {a_0} 2 + \sum_{r \mathop = 1}^\infty a_{2 r - 1} \cos \frac {\paren{2 r - 1} \pi x} 4\)





using our substitution $n = 2 r - 1$














\(\ds \)

\(=\)







\(\ds \frac 2 2 + \sum_{r \mathop = 1}^\infty \paren{\dfrac {-16} {\paren {2 r - 1}^2 \pi^2} + \frac 4 {\paren {2 r - 1} \pi} \paren {-1}^{r - 1} } \cos \frac {\paren{2 r - 1} \pi x} 4\)





from above














\(\ds \)

\(=\)







\(\ds 1 + \frac 4 \pi \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{r - 1} } {2 r - 1} \paren {\frac {- 4 \paren {-1}^{r - 1} } {\paren {2 r - 1} \pi} + 1} \cos \frac {\paren {2 r - 1} \pi x} 4\)





factorisation














\(\ds \)

\(=\)







\(\ds 1 + \frac 4 \pi \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{r - 1} } {2 r - 1} \paren {1 + \frac {4 \paren {-1}^r} {\paren {2 r - 1} \pi} } \cos \frac {\paren {2 r - 1} \pi x} 4\)









$\blacksquare$


Sources
1961: I.N. Sneddon: Fourier Series ... (previous) ... (next): Chapter One: $\S 6$. Half-Range Cosine Series: Example $5$




