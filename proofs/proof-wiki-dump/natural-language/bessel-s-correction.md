# 

Source: https://proofwiki.org/wiki/Bessel%27s_Correction

Theorem
Let $X_1, X_2, \ldots, X_n$ form a random sample from a population with mean $\mu$ and variance $\sigma^2$.
Let: 

$\ds \bar X = \frac 1 n \sum_{i \mathop = 1}^n X_i$
Then:

$\ds \hat {\sigma^2} = \frac 1 {n - 1} \sum_{i \mathop = 1}^n \paren {X_i - \bar X}^2$
is an unbiased estimator of $\sigma^2$. 


Proof
We know that $\hat {\sigma^2}$ is an unbiased estimator of $\sigma^2$ if and only if: 

$\expect {\hat {\sigma^2} } = \sigma^2$

In Bias of Sample Variance, it is shown that: 

$\ds \expect {\frac 1 n \sum_{i \mathop = 1}^n \paren {X_i - \bar X}^2} = \paren {1 - \frac 1 n} \sigma^2$
By Expectation is Linear: 














\(\ds n \expect {\frac 1 n \sum_{i \mathop = 1}^n \paren {X_i - \bar X}^2}\)

\(=\)







\(\ds \expect {\sum_{i \mathop = 1}^n \paren {X_i - \bar X}^2}\)




















\(\ds \)

\(=\)







\(\ds \paren {n - 1} \sigma^2\)









So: 














\(\ds \sigma^2\)

\(=\)







\(\ds \frac 1 {n - 1} \expect {\sum_{i \mathop = 1}^n \paren {X_i - \bar X}^2}\)




















\(\ds \)

\(=\)







\(\ds \expect {\frac 1 {n - 1} \sum_{i \mathop = 1}^n \paren {X_i - \bar X}^2}\)





Expectation is Linear














\(\ds \)

\(=\)







\(\ds \expect {\hat {\sigma^2} }\)









So $\hat {\sigma^2}$ is an unbiased estimator of $\sigma^2$. 
$\blacksquare$


Source of Name
This entry was named for Friedrich Wilhelm Bessel.





