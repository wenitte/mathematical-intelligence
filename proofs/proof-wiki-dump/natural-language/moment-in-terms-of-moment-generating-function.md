# 

Source: https://proofwiki.org/wiki/Moment_in_terms_of_Moment_Generating_Function

Theorem
Let $X$ be a random variable. 
Let $M_X$ be the moment generating function of $X$.
Then: 

$\expect {X^n} = \map { {M_X}^{\paren n} } 0$
where:

$n$ is a non-negative integer
${M_X}^{\paren n}$ denotes the $n$th derivative of $M_X$
$\expect {X^n}$ denotes the expectation of $X^n$.


Proof













\(\ds \map { {M_X}^{\paren n} } t\)

\(=\)







\(\ds \frac {\d^n} {\d t^n} \expect {e^{t X} }\)





Definition of Moment Generating Function














\(\ds \)

\(=\)







\(\ds \frac {\d^n} {\d t^n} \expect {\sum_{m \mathop = 0}^\infty \frac {t^m X^m} {m!} }\)





Power Series Expansion for Exponential Function














\(\ds \)

\(=\)







\(\ds \frac {\d^n} {\d t^n} \sum_{m \mathop = 0}^\infty \expect {\frac {t^m X^m} {m!} }\)





Expectation is Linear














\(\ds \)

\(=\)







\(\ds \sum_{m \mathop = 0}^\infty \frac {\d^n} {\d t^n} \paren {\frac {t^m} {m!} } \expect {X^m}\)





Expectation is Linear, Power Series is Termwise Differentiable within Radius of Convergence














\(\ds \)

\(=\)







\(\ds \sum_{m \mathop = n}^\infty \frac {m^{\underline n} t^{m - n} } {m!} \expect {X^m}\)





Nth Derivative of Mth Power














\(\ds \)

\(=\)







\(\ds \sum_{m \mathop = n}^\infty \frac { m! t^{m - n} } {m! \paren {m - n}!} \expect {X^m}\)





Falling Factorial as Quotient of Factorials














\(\ds \)

\(=\)







\(\ds \frac {t^{n - n} } {\paren {n - n}!} \expect {X^n} + \sum_{m \mathop = n + 1}^\infty \frac {t^{m - n} } {\paren {m - n}!} \expect {X^m}\)




















\(\ds \)

\(=\)







\(\ds \expect {X^n} + \sum_{m \mathop = n + 1}^\infty \frac {t^{m - n} } {\paren {m - n}!} \expect {X^m}\)









Setting $t = 0$ yields the result. 
$\blacksquare$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): moment generating function
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): moment generating function




