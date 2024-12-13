# 

Source: https://proofwiki.org/wiki/Minimum_of_Exponential_Random_Variables_has_Exponential_Distribution

Theorem
Let $\beta_1, \beta_2, \ldots, \beta_n$ be positive real numbers.
Let $X_1, X_2, \ldots, X_n$ be independent random variables.
For each $i$, let $X_i \sim \Exponential {\beta_i}$, where $\Exponential {\beta_i}$ is the exponential distribution with parameter $\beta_i$. 
Let: 

$\ds M = \map {\min_{1 \mathop \le i \mathop \le n} } {X_i} $

Then: 

$\ds M \sim \Exponential {\paren {\sum_{i \mathop = 1}^n \frac 1 {\beta_i} }^{-1} }$


Proof
We aim to show that: 

$\ds \map \Pr {M \le m} = 1 - \map \exp {-m \sum_{i \mathop = 1}^n \frac 1 {\beta_i} }$
for each $m > 0$.
Note that: 

$\ds M > m$
if and only if:

$\ds X_i > m$
for each $i$. 
We therefore have: 














\(\ds \map \Pr {M > m}\)

\(=\)







\(\ds \map \Pr {\bigcap_{i \mathop = 1}^n \set {X_i > m} }\)




















\(\ds \)

\(=\)







\(\ds \prod_{i \mathop = 1}^n \map \Pr {X_i > m}\)





Definition of Independent Random Variables














\(\ds \)

\(=\)







\(\ds \prod_{i \mathop = 1}^n \map \exp {-\frac m {\beta_i} }\)





Definition of Exponential Distribution














\(\ds \)

\(=\)







\(\ds \map \exp {-m \sum_{i \mathop = 1}^n \frac 1 {\beta_i} }\)





Exponential of Sum



so:

$\ds \map \Pr {M \le m} = 1 - \map \exp {-m \sum_{i \mathop = 1}^n \frac 1 {\beta_i} }$
$\blacksquare$





