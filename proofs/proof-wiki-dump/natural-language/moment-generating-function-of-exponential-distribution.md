# 

Source: https://proofwiki.org/wiki/Moment_Generating_Function_of_Exponential_Distribution

Theorem
Let $X$ be a continuous random variable with an exponential distribution with parameter $\beta$ for some $\beta \in \R_{> 0}$.
Then the moment generating function $M_X$ of $X$ is given by: 

$\map {M_X} t = \dfrac 1 {1 - \beta t}$
for $t < \dfrac 1 \beta$, and is undefined otherwise.


Proof
From the definition of the exponential distribution, $X$ has probability density function:

$\map {f_X} x = \dfrac 1 \beta e^{-\frac x \beta}$
From the definition of a moment generating function:

$\ds \map {M_X} t = \expect {e^{t X} } = \int_0^\infty e^{t x} \map {f_X} x \rd x$
Then: 














\(\ds \map {M_X} t\)

\(=\)







\(\ds \frac 1 \beta \int_0^\infty e^{x \paren {-\frac 1 \beta + t} } \rd x\)





Exponential of Sum














\(\ds \)

\(=\)







\(\ds \frac 1 {\beta \paren {-\frac 1 \beta + t} } \intlimits {e^{x \paren {-\frac 1 \beta + t} } } 0 \infty\)





Primitive of Exponential Function



Note that if $t > \dfrac 1 \beta$, then $e^{x \paren {-\frac 1 \beta + t} } \to \infty$ as $x \to \infty$ by Exponential Tends to Zero and Infinity, so the integral diverges in this case. 
If $t = \dfrac 1 \beta$ then the integrand is identically $1$, so the integral similarly diverges in this case. 
If $t < \dfrac 1 \beta$, then $e^{x \paren {-\frac 1 \beta + t} } \to 0$ as $x \to \infty$ from Exponential Tends to Zero and Infinity, so the integral converges in this case. 
Therefore, the function is only well defined for $t < \dfrac 1 \beta$.
Proceeding:














\(\ds \frac 1 {\beta \paren {-\frac 1 \beta + t} } \intlimits {e^{x \paren {-\frac 1 \beta + t} } } 0 \infty\)

\(=\)







\(\ds \frac 1 {\beta \paren {-\frac 1 \beta + t} } \paren {0 - 1}\)





Exponential Tends to Zero and Infinity, Exponential of Zero














\(\ds \)

\(=\)







\(\ds \frac 1 {\beta \paren {\frac 1 \beta - t} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {1 - \beta t}\)









$\blacksquare$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): moment generating function
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): moment generating function
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Appendix $13$: Probability distributions
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $15$: Probability distributions




