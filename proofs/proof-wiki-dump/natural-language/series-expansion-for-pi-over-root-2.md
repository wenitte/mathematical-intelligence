# 

Source: https://proofwiki.org/wiki/Series_Expansion_for_Pi_over_Root_2

Theorem
$\ds \frac \pi {\sqrt 2} = \sum_{r \mathop = 1}^\infty \paren {-1}^{r - 1} \frac {r - \frac 1 2} {r^2 - r + \frac 3 {16} }$


Proof 1
Let $\map f x$ be the real function defined on $\openint 0 {2 \pi}$ as:

$\map f x = \begin{cases} \sin \dfrac x 2 & : 0 \le x < \pi \\ -\sin \dfrac x 2 & : \pi < x \le 2 \pi \end{cases}$

From Half-Range Fourier Sine Series: $\sin \dfrac x 2$ over $\closedint 0 \pi$, $-\sin \dfrac x 2$ over $\closedint 0 {2 \pi}$, we have:

$\map f x \sim \ds \frac 8 \pi \sum_{n \mathop = 1}^\infty \paren {-1}^{n - 1} \frac {n \sin n x} {4 n^2 - 1}$

Setting $x = \dfrac {\pi} 2$, we have:














\(\ds \sin \dfrac \pi 4\)

\(=\)







\(\ds \frac 8 \pi \sum_{n \mathop = 1}^\infty \paren {-1}^{n - 1} \frac {n \sin \dfrac {n \pi} 2 } {4 n^2 - 1}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\sqrt 2} 2\)

\(=\)







\(\ds \frac 8 \pi \sum_{n \mathop = 1}^\infty \paren {-1}^{n - 1} \frac {n \sin \dfrac {n \pi} 2 } {4 n^2 - 1}\)





Sine of $\dfrac \pi 4$








\(\ds \leadsto \ \ \)





\(\ds \frac \pi {\sqrt 2}\)

\(=\)







\(\ds 8 \sum_{n \mathop = 1}^\infty \paren {-1}^{n - 1} \frac {n \sin \dfrac {n \pi} 2 } {4 n^2 - 1}\)





rearranging




When $n$ is even, $\dfrac {n \pi} 2$ is an integer multiple of $\pi$.
Hence, in this case, from Sine of Multiple of Pi:

$\sin \dfrac {n \pi} 2 = 0$

When $n$ is odd it can be expressed as $n = 2 r - 1$ for $r \ge 1$.
Hence we have:














\(\ds \frac \pi {\sqrt 2}\)

\(=\)







\(\ds 8 \sum_{n \mathop = 1}^\infty \paren {-1}^{n - 1} \frac {n \sin \dfrac {n \pi} 2 } {4 n^2 - 1}\)





from above














\(\ds \)

\(=\)







\(\ds 8 \sum_{n \mathop = 1}^\infty \paren {-1}^{n - 1} \frac {n \sin \dfrac {n \pi} 2 } {\paren {2 n + 1} \paren {2 n - 1} }\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds 8 \sum_{r \mathop = 1}^\infty \paren {-1}^{\paren {2 r - 1} - 1} \frac {\paren {2 r - 1} \sin \dfrac {\paren {2 r - 1} \pi} 2 } {\paren {2 \paren {2 r - 1} + 1} \paren {2 \paren {2 r - 1} - 1} }\)





from above: terms in even $n$ vanish














\(\ds \)

\(=\)







\(\ds 8 \sum_{r \mathop = 1}^\infty \paren {-1}^{2 r} \frac {\paren {2 r - 1} \map \sin {\paren {r - 1} + \frac 1 2} \pi} {\paren {4 r - 1} \paren {4 r - 3} }\)





simplification














\(\ds \)

\(=\)







\(\ds 8 \sum_{r \mathop = 1}^\infty \frac {\paren {2 r - 1} \map \sin {\paren {r - 1} + \frac 1 2} \pi} {\paren {4 r - 1} \paren {4 r - 3} }\)





$\paren {-1}^{2 r} = 1$














\(\ds \)

\(=\)







\(\ds 8 \sum_{r \mathop = 1}^\infty \frac {\paren {2 r - 1} \paren {-1}^{r - 1} } {\paren {4 r - 1} \paren {4 r - 3} }\)





Sine of Half-Integer Multiple of Pi














\(\ds \)

\(=\)







\(\ds 8 \sum_{r \mathop = 1}^\infty \paren {-1}^{r - 1} \frac {2 \paren {r - \frac 1 2} } {16 r^2 - 16 r + 3}\)





multiplying out














\(\ds \)

\(=\)







\(\ds \sum_{r \mathop = 1}^\infty \paren {-1}^{r - 1} \frac {r - \frac 1 2} {r^2 - r + \frac 3 {16} }\)





simplifying



$\blacksquare$


Proof 2
We have: 














\(\ds \frac {r - \frac 1 2} {r^2 - r + \frac 3 {16} }\)

\(=\)







\(\ds \frac {16 r - 8} {16 r^2 - 16 r + 3}\)




















\(\ds \)

\(=\)







\(\ds 2 \paren {\frac {8 r - 4} {\paren {4 r - 1} \paren {4 r - 3} } }\)





factorising, extracting a factor of $2$














\(\ds \)

\(=\)







\(\ds 2 \paren {\frac {\paren {4 r - 3} + \paren {4 r - 1} } {\paren {4 r - 1} \paren {4 r - 3} } }\)




















\(\ds \)

\(=\)







\(\ds 2 \paren {\frac 1 {4 r - 1} + \frac 1 {4 r - 3} }\)









So, we have: 














\(\ds \sum_{r \mathop = 1}^\infty \paren {-1}^r \frac {r - \frac 1 2} {r^2 - r + \frac 3 {16} }\)

\(=\)







\(\ds -2 \sum_{r \mathop = 1}^\infty \paren {-1}^r \paren {\frac 1 {4 r - 1} + \frac 1 {4 r - 3} }\)




















\(\ds \)

\(=\)







\(\ds -2 \sum_{r = 1}^\infty \paren {-1}^r \paren {\int_0^1 x^{4 r - 2} \rd x + \int_0^1 x^{4 r - 4} \rd x}\)





Primitive of Power, Fundamental Theorem of Calculus














\(\ds \)

\(=\)







\(\ds -2 \sum_{r \mathop = 1}^\infty \paren {-1}^r \int_0^1 \paren {x^{4 r - 2} + x^{4 r - 4} } \rd x\)





Linear Combination of Definite Integrals














\(\ds \)

\(=\)







\(\ds -2 \int_0^1 \paren {\sum_{r \mathop = 1}^\infty \paren {-1}^r \paren {x^{4 r - 2} + x^{4 r - 4} } } \rd x\)





Fubini's Theorem














\(\ds \)

\(=\)







\(\ds -2 \int_0^1 \paren {\frac 1 {x^2} \sum_{r \mathop = 1}^\infty \paren {-x^4}^r - \sum_{r \mathop = 0}^\infty \paren {-x^4}^r} \rd x\)





shifting the index in the second sum, and extracting a factor of $x^{-4}$ from the first














\(\ds \)

\(=\)







\(\ds -2 \int_0^1 \paren {\frac 1 {x^2} \paren {\sum_{r \mathop = 0}^\infty \paren {-x^4}^r - 1} - \sum_{r \mathop = 0}^\infty \paren {-x^4}^r} \rd x\)




















\(\ds \)

\(=\)







\(\ds -2 \int_0^1 \paren {\paren {\frac 1 {x^2} - 1} \sum_{r \mathop = 0}^\infty \paren {-x^4}^r - \frac 1 {x^2} } \rd x\)





grouping terms














\(\ds \)

\(=\)







\(\ds -2 \int_0^1 \paren {\paren {\frac {1 - x^2} {x^2} } \paren {\frac 1 {1 + x^4} } - \frac 1 {x^2} } \rd x\)





Sum of Infinite Geometric Sequence














\(\ds \)

\(=\)







\(\ds -2 \int_0^1 \paren {\frac {1 - x^2 - \paren {1 + x^4} } {x^2 \paren {1 + x^4} } } \rd x\)





writing as a single fraction














\(\ds \)

\(=\)







\(\ds 2 \int_0^1 \paren {\frac {x^2 \paren {1 + x^2} } {x^2 \paren {1 + x^4} } } \rd x\)





extracting a factor of $x^2$














\(\ds \)

\(=\)







\(\ds 2 \int_0^1 \frac {1 + x^2} {1 + x^4} \rd x\)





cancelling the factor of $x^2$














\(\ds \)

\(=\)







\(\ds \sqrt 2 \intlimits {\map \arctan {\frac 1 {\sqrt 2} \paren {x - \frac 1 x} } } 0 1\)





Primitive of $\dfrac {1 + x^2} {1 + x^4}$














\(\ds \)

\(=\)







\(\ds \sqrt 2 \paren {\arctan 0 - \lim_{x \mathop \to 0^+} \map \arctan {\frac 1 {\sqrt 2} \paren {x - \frac 1 x} } }\)




















\(\ds \)

\(=\)







\(\ds -\sqrt 2 \lim_{u \mathop \to -\infty} \arctan u\)





setting $\dfrac 1 {\sqrt 2} \paren {x - \frac 1 x} = u$, Arctangent of Zero is Zero














\(\ds \)

\(=\)







\(\ds -\sqrt 2 \paren {-\frac \pi 2}\)





Limit to Infinity of Arctangent Function














\(\ds \)

\(=\)







\(\ds \frac \pi {\sqrt 2}\)









$\blacksquare$





