# 

Source: https://proofwiki.org/wiki/Limit_of_Cumulative_Distribution_Function_at_Positive_Infinity



Theorem
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $X$ be a random variable on $\struct {\Omega, \Sigma, \Pr}$.
Let $F_X$ be the cumulative distribution function.

Then:

$\ds \lim_{x \mathop \to \infty} \map {F_X} x = 1$
where $\ds \lim_{x \mathop \to \infty} \map {F_X} x$ denotes the limit at $+\infty$ of $F_X$. 


Proof
From Sequential Characterization of Limit at Positive Infinity of Real Function: Corollary, we aim to show that: 

for all increasing real sequences $\sequence {x_n}_{n \mathop \in \N}$ with $x_n \to \infty$ we have $\map {F_X} {x_n} \to 1$
at which point we will obtain: 

$\ds \lim_{x \mathop \to \infty} \map {F_X} x = 1$
Since $\sequence {x_n}_{n \mathop \in \N}$ is increasing:

the sequence $\sequence {\hointl {-\infty} {x_n} }_{n \mathop \in \N}$ is increasing.
We show that: 

$\ds \bigcup_{n \mathop = 1}^\infty \hointl {-\infty} {x_n} = \R$
Lemma
Let $\sequence {x_n}_{n \mathop \in \N}$ be an increasing with $x_n \to \infty$. 
Then:

$\ds \bigcup_{n \mathop = 1}^\infty \hointl {-\infty} {x_n} = \R$
$\Box$

Let $P_X$ be the probability distribution of $X$. 
So, from Measure of Limit of Increasing Sequence of Measurable Sets, we have: 

$\ds \map {P_X} \R = \lim_{n \mathop \to \infty} \map {P_X} {\hointl {-\infty} {x_n} }$
So, we obtain:














\(\ds 1\)

\(=\)







\(\ds \map {P_X} \R\)





Probability Distribution is Probability Measure, Definition of Probability Measure














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map {P_X} {\hointl {-\infty} {x_n} }\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map \Pr {X \le x_n}\)





Definition of Probability Distribution














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map {F_X} {x_n}\)





Definition of Cumulative Distribution Function



Since $\sequence {x_n}_{n \mathop \in \N}$ was arbitrary, we have: 

for all increasing real sequences $\sequence {x_n}_{n \mathop \in \N}$ with $x_n \to \infty$ we have $\map {F_X} {x_n} \to 1$.
So, from Sequential Characterization of Limit at Positive Infinity of Real Function: Corollary, we have: 

$\ds \lim_{x \mathop \to \infty} \map {F_X} x = 1$
$\blacksquare$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): distribution function
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): distribution function




