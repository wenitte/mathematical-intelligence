# 

Source: https://proofwiki.org/wiki/Mean_of_Random_Sample_from_Chi-Squared_Distribution_has_Gamma_Distribution

Theorem
Let $n$ be a strictly positive integer. 
Let $X_1, X_2, \ldots, X_k$ form a random sample of size $k$ from the chi-squared distribution with $n$ degrees of freedom. 

Then: 

$\ds \overline X = \frac 1 k \sum_{i \mathop = 1}^k X_i \sim \map \Gamma {\frac {n k} 2, \frac k 2}$
where $\map \Gamma {\dfrac {n k} 2, \dfrac k 2}$ is the gamma distribution with parameters $\dfrac {n k} 2$ and $\dfrac k 2$.


Proof
By Sum of Chi-Squared Random Variables, we have: 

$\ds \sum_{i \mathop = 1}^k X_i \sim \chi^2_{n k}$
By Multiple of Chi-Squared Random Variable has Gamma Distribution, we then have: 

$\ds \frac 1 k \sum_{i \mathop = 1}^k X_i \sim \map \Gamma {\frac {n k} 2, \frac 1 {\frac 2 k} } = \map \Gamma {\frac {n k} 2, \frac k 2}$
$\blacksquare$





