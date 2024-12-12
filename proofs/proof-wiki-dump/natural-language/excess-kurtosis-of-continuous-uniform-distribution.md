# 

Source: https://proofwiki.org/wiki/Excess_Kurtosis_of_Continuous_Uniform_Distribution

Theorem
Let $X$ be a continuous random variable which is uniformly distributed on a closed real interval $\closedint a b$. 
Then the excess kurtosis $\gamma_2$ of $X$ is equal to $-\dfrac 6 5$.


Proof
From the definition of excess kurtosis, we have: 

$\gamma_2 = \expect {\paren {\dfrac {X - \mu} \sigma}^4} - 3$
From the definition of the continuous uniform distribution, $X$ has probability density function: 

$\map {f_X} x = \begin {cases} \dfrac 1 {b - a} & : a \le x \le b \\ 0 & : \text {otherwise} \end {cases}$
From the definition of the expected value of a continuous random variable: 

$\ds \expect X = \int_{-\infty}^\infty x \map {f_X} x \rd x$
So:














\(\ds \expect {\paren {\dfrac {X - \mu} \sigma}^4} - 3\)

\(=\)







\(\ds \int_a^b \paren {\dfrac {x - \mu} \sigma}^4 \paren {\frac 1 {b - a} } dx - 3\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {\sigma^4 \paren {b - a} } \int_a^b \paren {x - \mu}^4  d \paren {x - \mu} - 3\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac 1 {\sigma^4 \paren {b - a} } \intlimits {\frac {\paren {x - \mu}^5} 5} a b - 3\)





Primitive of Power, Fundamental Theorem of Calculus














\(\ds \)

\(=\)







\(\ds \frac {12^2} {\paren {b - a}^4 \paren {b - a} } \paren{\frac {\paren {b - \frac {a + b} 2}^5 - \paren {a - \frac {a + b} 2}^5} 5} - 3\)





Variance of Continuous Uniform Distribution, Expectation of Continuous Uniform Distribution














\(\ds \)

\(=\)







\(\ds \frac {144} {5 \paren {b - a}^5} \paren {\paren {\frac {b - a} 2}^5 - \paren {\frac {a - b} 2}^5} - 3\)




















\(\ds \)

\(=\)







\(\ds \frac {144} {5 \paren {b - a}^5} \paren {2 \paren {\frac {b - a} 2}^5} - 3\)




















\(\ds \)

\(=\)







\(\ds \frac {144} 5 \paren {2 \paren {\frac 1 2}^5} - 3\)




















\(\ds \)

\(=\)







\(\ds -\frac 6 5\)









$\blacksquare$





