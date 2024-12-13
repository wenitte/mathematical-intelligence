# 

Source: https://proofwiki.org/wiki/Sample_Mean_is_Unbiased_Estimator_of_Population_Mean

Theorem
Let $X_1, X_2, \ldots, X_n$ form a random sample from a population with mean $\mu$ and variance $\sigma^2$.
Then: 

$\ds \bar X = \frac 1 n \sum_{i \mathop = 1}^n X_i$
is an unbiased estimator of $\mu$. 


Proof
If $\bar X$ be an unbiased estimator of $\mu$, then: 

$\expect {\bar X} = \mu$

This article, or a section of it, needs explaining.In particular: The structure of this proof is confusing. It starts with what looks like an assertion of what we are trying to prove.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

We have: 














\(\ds \expect {\bar X}\)

\(=\)







\(\ds \expect {\frac 1 n \sum_{i \mathop = 1}^n X_i}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 n \sum_{i \mathop = 1}^n \expect {X_i}\)





Expectation is Linear














\(\ds \)

\(=\)







\(\ds \frac 1 n \sum_{i \mathop = 1}^n \mu\)





as $\expect {X_i} = \mu$














\(\ds \)

\(=\)







\(\ds \frac n n \mu\)





as $\ds \sum_{i \mathop = 1}^n 1 = n$














\(\ds \)

\(=\)







\(\ds \mu\)









So $\bar X$ is an unbiased estimator of $\mu$. 
$\blacksquare$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): estimator
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): estimator




