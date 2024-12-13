# 

Source: https://proofwiki.org/wiki/Moment_Generating_Function_of_Continuous_Uniform_Distribution

Theorem
Let $X \sim \ContinuousUniform a b$ for some $a, b \in \R$ denote the continuous uniform distribution on the interval $\closedint a b$.
Then the moment generating function of $X$ is given by: 

$\map {M_X} t = \begin {cases} \dfrac {e^{t b} - e^{t a} } {t \paren {b - a} } & t \ne 0 \\ 1 & t = 0 \end{cases}$


Proof
From the definition of the continuous uniform distribution, $X$ has probability density function: 

$\map {f_X} x = \begin{cases} \dfrac 1 {b - a} & a \le x \le b \\ 0 & \text{otherwise} \end{cases}$

From the definition of a moment generating function:

$\ds \map {M_X} t = \expect {e^{t X} } = \int_{-\infty}^\infty e^{t x} \map {f_X} x \rd x$
where $\expect \cdot$ denotes expectation.

First, consider the case $t \ne 0$. 
Then: 














\(\ds \map {M_X} t\)

\(=\)







\(\ds \int_{-\infty}^a 0 e^{t x} \rd x + \int_a^b \frac{ e^{t x} } {b - a} \rd x + \int_b^\infty 0 e^{t x} \rd x\)




















\(\ds \)

\(=\)







\(\ds \intlimits {\frac {e^{t x} } {t \paren {b - a} } } a b\)





Primitive of $e^{a x}$, Fundamental Theorem of Calculus














\(\ds \)

\(=\)







\(\ds \frac {e^{t b} - e^{t a} } {t \paren {b - a} }\)









In the case $t = 0$, we have $\expect {X^0} = \expect 1 = 1$. 
$\blacksquare$


Sources
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Appendix $13$: Probability distributions
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $15$: Probability distributions




