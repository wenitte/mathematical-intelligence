# 

Source: https://proofwiki.org/wiki/Expectation_of_Student%27s_t-Distribution

Theorem
Let $k$ be a strictly positive integer. 
Let $X \sim t_k$ where $t_k$ is the $t$-distribution with $k$ degrees of freedom.
Then the expectation of $X$ is equal to $0$ for $k > 1$, and does not exist otherwise.


Proof
From the definition of the Student's t-Distribution, $X$ has probability density function:

$\map {f_X} x = \dfrac {\map \Gamma {\frac {k + 1} 2} } {\sqrt {\pi k} \map \Gamma {\frac k 2} } \paren {1 + \dfrac {x^2} k}^{-\frac {k + 1} 2}$
with $k$ degrees of freedom for some $k \in \R_{>0}$.

From the definition of the expected value of a continuous random variable: 

$\ds \expect X = \int_{-\infty}^\infty x \map {f_X} x \rd x$
So for $k > 1$:














\(\ds \expect X\)

\(=\)







\(\ds \dfrac {\map \Gamma {\frac {k + 1} 2} } {\sqrt {\pi k} \map \Gamma {\frac k 2} } \int_{-\infty}^\infty \dfrac x {\paren {1 + \dfrac {x^2} k}^{\frac {k + 1} 2} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma {\frac {k + 1} 2} } {\sqrt {\pi k} \map \Gamma {\frac k 2} } \paren {\int_{-\infty}^0 \dfrac x {\paren {1 + \dfrac {x^2} k}^{\frac {k + 1} 2} } \rd x + \int_0^\infty \dfrac x {\paren {1 + \dfrac {x^2} k}^{\frac {k + 1} 2} } \rd x}\)





Sum of Integrals on Adjacent Intervals for Continuous Functions














\(\ds \)

\(=\)







\(\ds \dfrac {k \map \Gamma {\frac {k + 1} 2} } {2 \sqrt {\pi k} \map \Gamma {\frac k 2} } \paren {\int_\infty^1 \dfrac 1 {\paren u^{\frac {k + 1} 2} } \rd u + \int_1^\infty \dfrac 1 {\paren u^{\frac {k + 1} 2} } \rd u}\)





 U-substitution Substituting $u = 1 + \dfrac {x^2} k$ and $\dfrac k 2 \rd u = x \rd x$














\(\ds \)

\(=\)







\(\ds \dfrac {k \map \Gamma {\frac {k + 1} 2} } {2 \sqrt {\pi k} \map \Gamma {\frac k 2} } \paren {-\int_1^\infty \dfrac 1 {\paren u^{\frac {k + 1} 2} } \rd u + \int_1^\infty \dfrac 1 {\paren u^{\frac {k + 1} 2} } \rd u}\)





Reversal of Limits of Definite Integral














\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma {\frac {k + 1} 2} } {2 \sqrt {\pi k} \map \Gamma {\frac k 2} } \paren {\dfrac {-2} {k - 1 } } \paren {-\intlimits {\paren u^{-\frac {k - 1} 2} } 1 \infty + \intlimits {\paren u^{-\frac {k - 1} 2} } 1 \infty}\)





Primitive of Power, Fundamental Theorem of Calculus














\(\ds \)

\(=\)







\(\ds 0\)





Definite Integral of Odd Function/Corollary



$\Box$

When $k = 1$, we have the natural log evaluated at infinity where it is undefined.
Hence: 














\(\ds \)

\(\)







\(\ds \dfrac {\map \Gamma 1} {2 \sqrt \pi \map \Gamma {\frac 1 2} } \paren {-\int_1^\infty \dfrac 1 u \rd u + \int_1^\infty  \dfrac 1 u \rd u}\)





 U-substitution Substituting $u = 1 + \dfrac {x^2} k$ and $\dfrac k 2 \rd u = x \rd x$ and Reversal of Limits of Definite Integral














\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma 1} {2 \sqrt \pi \map \Gamma {\frac 1 2} } \paren {-\bigintlimits {\map \ln u} 1 \infty + \bigintlimits {\map \ln u} 1 \infty}\)





Fundamental Theorem of Calculus, Definition of Natural Logarithm, Logarithm Tends to Infinity



Therefore, the expectation of $X$ does not exist:
$\blacksquare$


Sources
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $15$: Probability distributions




