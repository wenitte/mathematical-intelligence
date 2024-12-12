# 

Source: https://proofwiki.org/wiki/Bias_of_Sample_Variance

Theorem
Let $X_1, X_2, \ldots, X_n$ form a random sample from a population  with mean $\mu$ and variance $\sigma^2$.
Let: 

$\ds \bar X = \frac 1 n \sum_{i \mathop = 1}^n X_i$
Then:

$\ds {S_n}^2 = \frac 1 n \sum_{i \mathop = 1}^n \paren {X_i - \bar X}^2$
is a biased estimator of $\sigma^2$, with: 

$\map {\operatorname {bias} } { {S_n}^2} = -\dfrac {\sigma^2} n$


Proof
By definition, ${S_n}^2$ is a biased estimator of $\sigma^2$ if and only if: 

$\expect { {S_n}^2} \ne \sigma^2$

We have: 














\(\ds \expect { {S_n}^2}\)

\(=\)







\(\ds \expect {\frac 1 n \sum_{i \mathop = 1}^n \paren {X_i - \bar X}^2}\)




















\(\ds \)

\(=\)







\(\ds \expect {\frac 1 n \sum_{i \mathop = 1}^n \paren {\paren {X_i - \mu} - \paren {\bar X - \mu} }^2}\)





writing $X_i - \bar X = X_i - \bar X - \mu + \mu$














\(\ds \)

\(=\)







\(\ds \expect {\frac 1 n \sum_{i \mathop = 1}^n \paren {\paren {X_i - \mu}^2 - 2 \paren {\bar X - \mu} \paren {X_i -\mu} + \paren {\bar X - \mu}^2} }\)





Square of Difference














\(\ds \)

\(=\)







\(\ds \expect {\frac 1 n \sum_{i \mathop = 1}^n \paren {X_i - \mu}^2 - \frac 2 n \paren {\bar X - \mu} \sum_{i \mathop = 1}^n \paren {X_i -\mu} + \frac 1 n \paren {\bar X - \mu}^2 \sum_{i \mathop = 1}^n 1}\)





Summation is Linear



We have that: 














\(\ds \frac 1 n \sum_{i \mathop = 1}^n \paren {X_i - \mu}\)

\(=\)







\(\ds \frac 1 n \sum_{i \mathop = 1}^n X_i - \frac n n \mu\)





from $\ds \sum_{i \mathop = 1}^n 1 = n$, noting that $\mu$ is independent of $i$.




\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \bar X - \mu\)





Definition of Arithmetic Mean



So:














\(\ds \)

\(\)







\(\ds \expect {\frac 1 n \sum_{i \mathop = 1}^n \paren {X_i - \mu}^2 - \frac 2 n \paren {\bar X - \mu} \sum_{i \mathop = 1}^n \paren {X_i -\mu} + \frac 1 n \paren {\bar X - \mu}^2 \sum_{i \mathop = 1}^n 1}\)




















\(\ds \)

\(=\)







\(\ds \expect {\frac 1 n \sum_{i \mathop = 1}^n \paren {X_i - \mu}^2 - 2 \paren {\bar X - \mu}^2 + \paren {\bar X - \mu}^2}\)





from $(1)$














\(\ds \)

\(=\)







\(\ds \frac 1 n \expect {\sum_{i \mathop = 1}^n \paren {X_i - \mu}^2} - \expect {\paren {\bar X - \mu}^2}\)





Expectation is Linear














\(\ds \)

\(=\)







\(\ds \frac 1 n \sum_{i \mathop = 1}^n \expect {\paren {X_i - \mu}^2} - \var {\bar X}\)





Definition of Variance, Expectation is Linear














\(\ds \)

\(=\)







\(\ds \frac 1 n \sum_{i \mathop = 1}^n \var {X_i} - \frac {\sigma^2} n\)





Definition of Variance, Variance of Sample Mean














\(\ds \)

\(=\)







\(\ds \frac n n \sigma^2 - \frac {\sigma^2} n\)





$\var {X_i} = \sigma^2$, $\ds \sum_{i \mathop = 1}^n 1 = n$














\(\ds \)

\(=\)







\(\ds \sigma^2 - \frac {\sigma^2} n\)




















\(\ds \)

\(\ne\)







\(\ds \sigma^2\)









So ${S_n}^2$ is a biased estimator of $\sigma^2$. 
Further, we have: 

$\map {\operatorname {bias} } { {S_n}^2} = \sigma^2 - \dfrac {\sigma^2} n - \sigma^2 = -\dfrac {\sigma^2} n$
$\blacksquare$





