# 

Source: https://proofwiki.org/wiki/Cumulative_Distribution_Function_as_Integral_of_Probability_Density_Function

Theorem
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $X$ be an absolutely continuous random variable. 
Let $f_X$ be a probability density function for $X$. 
Let $F_X$ be the cumulative distribution function for $X$. 
Let $\map \BB \R$ be the Borel $\sigma$-algebra on $\R$. 
Let $\lambda$ be the Lebesgue measure on $\struct {\R, \map \BB \R}$. 

Then: 

$\ds \map {F_X} x = \int_{-\infty}^x f_X \rd \lambda$
for each $x \in \R$, where $\ds \int_{-\infty}^x f_X \rd \lambda$ denotes the Lebesgue integral of $f$ over $\hointl {-\infty} x$.


Proof
Let $P_X$ be the probability distribution of $X$. 
Since $f_X$ is a probability density function for $X$, $f_X$ is a Radon-Nikodym derivative of $P_X$ with respect to $\lambda$. 
Then, we have: 














\(\ds \map {F_X} x\)

\(=\)







\(\ds \map \Pr {X \le x}\)





Definition of Cumulative Distribution Function














\(\ds \)

\(=\)







\(\ds \map \Pr {X \in \hointl {-\infty} x}\)




















\(\ds \)

\(=\)







\(\ds \map {P_X} {\hointl {-\infty} x}\)





Definition of Probability Distribution














\(\ds \)

\(=\)







\(\ds \int_{\hointl {-\infty} x} \map {f_X} t \rd \map \lambda t\)





Definition of Radon-Nikodym Derivative














\(\ds \)

\(=\)







\(\ds \int_{-\infty}^x f_X \rd \lambda\)









$\blacksquare$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): distribution function
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): distribution function




