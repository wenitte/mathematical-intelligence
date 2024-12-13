# 

Source: https://proofwiki.org/wiki/Raw_Moment_of_Beta_Distribution

Theorem
Let $X \sim \BetaDist \alpha \beta$ for some $\alpha, \beta > 0$, where $\operatorname {Beta}$ is the Beta distribution. 
Then:

$\ds \expect {X^n} = \prod_{r \mathop = 0}^{n - 1} \frac {\alpha + r} {\alpha + \beta + r}$
for positive integer $n$.


Proof
By Moment Generating Function of Beta Distribution, the moment generating function, $M_X$, of $X$ is given by: 

$\ds \map {M_X} t = \expect {e^{t X} } = 1 + \sum_{n \mathop = 1}^\infty \paren {\prod_{r \mathop = 0}^{n - 1} \frac {\alpha + r} {\alpha + \beta + r} } \frac {t^n} {n!}$
We also have: 














\(\ds \expect {e^{t X} }\)

\(=\)







\(\ds \expect {\sum_{n \mathop = 0}^\infty \frac {t^n X^n} {n!} }\)





Power Series Expansion for Exponential Function














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \expect {\frac {t^n X^n} {n!} }\)





Expectation is Linear














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \expect {X^n} \frac {t^n} {n!}\)





Expectation is Linear














\(\ds \)

\(=\)







\(\ds \frac {t^0} {0!} \expect {X^0} + \sum_{n \mathop = 1}^\infty \expect {X^n} \frac {t^n} {n!}\)




















\(\ds \)

\(=\)







\(\ds 1 + \sum_{n \mathop = 1}^\infty \expect {X^n} \frac {t^n} {n!}\)





Expectation of Constant



Comparing coefficients yields the result. 
$\blacksquare$





