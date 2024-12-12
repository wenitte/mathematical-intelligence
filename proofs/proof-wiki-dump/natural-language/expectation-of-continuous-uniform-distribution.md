# 

Source: https://proofwiki.org/wiki/Expectation_of_Continuous_Uniform_Distribution



Theorem
Let $a, b \in \R$ such that $a < b$.
Let $X \sim \ContinuousUniform a b$ be the continuous uniform distribution over $\closedint a b$. 
Then: 

$\expect X = \dfrac {a + b} 2$


Proof
From the definition of the continuous uniform distribution, $X$ has probability density function: 

$\map {f_X} x = \begin {cases} \dfrac 1 {b - a} & : a \le x \le b \\ 0 & : \text {otherwise} \end {cases}$
From the definition of the expected value of a continuous random variable: 

$\ds \expect X = \int_{-\infty}^\infty x \map {f_X} x \rd x$
So:














\(\ds \expect X\)

\(=\)







\(\ds \int_{-\infty}^a 0 x \rd x + \int_a^b \frac x {b - a} \rd x + \int_b^\infty 0 x \rd x\)




















\(\ds \)

\(=\)







\(\ds \intlimits {\frac {x^2} {2 \paren {b - a} } } a b\)





Primitive of Power, Fundamental Theorem of Calculus














\(\ds \)

\(=\)







\(\ds \frac {b^2 - a^2} {2 \paren {b - a} }\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {b - a} \paren {b + a} } {2 \paren {b - a} }\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds \frac {a + b} 2\)









$\blacksquare$


Also see
Variance of Continuous Uniform Distribution
Expectation of Discrete Uniform Distribution


Sources
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Appendix $13$: Probability distributions
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $15$: Probability distributions




