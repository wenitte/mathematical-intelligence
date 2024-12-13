# 

Source: https://proofwiki.org/wiki/Multiple_of_Exponential_Random_Variable_has_Exponential_Distribution

Theorem
Let $\beta, k$ be real numbers with $\beta > 0$.
Let $X$ be a random variable.
Let $X \sim \Exponential \beta$, where $\Exponential \beta$ is the exponential distribution with parameter $\beta$. 

Then:

$k X \sim \Exponential {k \beta}$


Proof
Let:

$Y \sim k X$
We aim to show that: 

$\ds \map \Pr {Y \le y} = 1 - \map \exp {-\frac y {k \beta} }$
for each $y > 0$. 
We have: 














\(\ds \map \Pr {Y \le y}\)

\(=\)







\(\ds \map \Pr {k X \le y}\)




















\(\ds \)

\(=\)







\(\ds \map \Pr {X \le \frac y k}\)




















\(\ds \)

\(=\)







\(\ds 1 - \map \exp {-\frac y {k \beta} }\)





Definition of Exponential Distribution



$\blacksquare$





