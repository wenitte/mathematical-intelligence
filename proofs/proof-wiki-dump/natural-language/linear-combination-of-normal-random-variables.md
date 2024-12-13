# 

Source: https://proofwiki.org/wiki/Linear_Combination_of_Normal_Random_Variables

Theorem
Let $X_1, X_2, X_3, \ldots, X_n$ be independent random variables. 
Let $\sequence {\alpha_i}_{1 \mathop \le i \mathop \le n}$ and $\sequence {\mu_i}_{1 \mathop \le i \mathop \le n}$ be sequences of real numbers.
Let $\sequence {\sigma_i}_{1 \mathop \le i \mathop \le n}$ be a sequence of positive real numbers.
Let $X_i \sim \Gaussian {\mu_i} {\sigma^2_i}$ for $1 \le i \le n$, where $\Gaussian {\mu_i} {\sigma^2_i}$ is the normal distribution with parameters $\mu_i$ and $\sigma^2_i$.

Then: 

$\ds \sum_{i \mathop = 1}^n \alpha_i X_i \sim \Gaussian {\sum_{i \mathop = 1}^n \alpha_i \mu_i} {\sum_{i \mathop = 1}^n \alpha^2_i \sigma^2_i}$


Proof
Let: 

$\ds Z = \sum_{i \mathop = 1}^n \alpha_i X_i$
Let $M_Z$ be the moment generating function of $Z$. 
We aim to show that: 

$\ds Z \sim \Gaussian {\sum_{i \mathop = 1}^n \alpha_i \mu_i} {\sum_{i \mathop = 1}^n \alpha^2_i \sigma^2_i}$
By Moment Generating Function of Normal Distribution and Moment Generating Function is Unique, it is therefore sufficient to show that: 

$\ds \map {M_Z} t = \map \exp {\paren {\sum_{i \mathop = 1}^n \alpha_i \mu_i} t + \frac 1 2 \paren {\sum_{i \mathop = 1}^n \alpha^2_i \sigma^2_i} t^2}$
We also have, by Moment Generating Function of Normal Distribution, that the moment generating function of $X_i$, $M_{X_i}$, is given by: 

$\map {M_{X_i}} t = \map \exp {\mu_i t + \dfrac 1 2 \sigma^2_i t^2}$
We have:














\(\ds \map {M_Z} t\)

\(=\)







\(\ds \prod_{i \mathop = 1}^n \map {M_{X_i} } {\alpha_i t}\)





Moment Generating Function of Linear Combination of Independent Random Variables














\(\ds \)

\(=\)







\(\ds \prod_{i \mathop = 1}^n \map \exp {\mu_i \alpha_i t + \frac 1 2 \sigma^2_i \alpha^2_i t^2}\)




















\(\ds \)

\(=\)







\(\ds \map \exp {\sum_{i \mathop = 1}^n \paren {\mu_i \alpha_i t + \frac 1 2 \sigma^2_i \alpha^2_i t^2} }\)





Exponential of Sum














\(\ds \)

\(=\)







\(\ds \map \exp {\paren {\sum_{i \mathop = 1}^n \alpha_i \mu_i} t + \frac 1 2 \paren {\sum_{i \mathop = 1}^n \alpha^2_i \sigma^2_i} t^2}\)









$\blacksquare$





