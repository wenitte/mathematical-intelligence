# 

Source: https://proofwiki.org/wiki/Limit_of_Cumulative_Distribution_Function_at_Negative_Infinity

Theorem
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $X$ be a random variable on $\struct {\Omega, \Sigma, \Pr}$.
Let $F_X$ be the cumulative distribution function.

Then:

$\ds \lim_{x \mathop \to -\infty} \map {F_X} x = 0$
where $\ds \lim_{x \mathop \to -\infty} \map {F_X} x$ denotes the limit at $-\infty$ of $F_X$. 


Proof
From Sequential Characterisation of Limit at Minus Infinity of Real Function: Corollary, we aim to show that: 

for all decreasing real sequences $\sequence {x_n}_{n \mathop \in \N}$ with $x_n \to -\infty$ we have $\map {F_X} {x_n} \to 0$
at which point we will obtain: 

$\ds \lim_{x \mathop \to -\infty} \map {F_X} x = 0$
Since $\sequence {x_n}_{n \mathop \in \N}$ is decreasing, we have: 

the sequence $\sequence {\hointl {-\infty} {x_n} }_{n \mathop \in \N}$ is decreasing.
From Limit of Decreasing Sequence of Unbounded Below Closed Intervals with Endpoint Tending to Negative Infinity, we have: 

$\ds \bigcap_{n \mathop = 1}^\infty \hointl {-\infty} {x_n} = \O$
Let $P_X$ be the probability distribution of $X$. 
From Probability Distribution is Probability Measure, we have: 

$P_X$ is a finite measure.
From Measure of Limit of Decreasing Sequence of Measurable Sets, we have: 

$\ds \map {P_X} \O = \lim_{n \mathop \to \infty} \map {P_X} {\hointl {-\infty} {x_n} }$
So, we obtain:














\(\ds 0\)

\(=\)







\(\ds \map {P_X} \O\)





Probability Distribution is Probability Measure, Definition of Probability Measure














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map {P_X} {\hointl {-\infty} {x_n} }\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map {F_X} {x_n}\)





Definition of Cumulative Distribution Function



Since $\sequence {x_n}_{n \mathop \in \N}$ was arbitrary, we have: 

for all decreasing real sequences $\sequence {x_n}_{n \mathop \in \N}$ with $x_n \to -\infty$ we have $\map {F_X} {x_n} \to 0$.
So, from Sequential Characterisation of Limit at Minus Infinity of Real Function: Corollary, we have: 

$\ds \lim_{x \mathop \to \infty} \map {F_X} x = 0$
$\blacksquare$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): distribution function
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): distribution function




