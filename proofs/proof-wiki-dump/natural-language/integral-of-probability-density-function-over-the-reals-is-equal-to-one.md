# 

Source: https://proofwiki.org/wiki/Integral_of_Probability_Density_Function_over_the_Reals_is_Equal_to_One

Theorem
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $X$ be an absolutely continuous random variable. 
Let $f_X$ be a probability density function for $X$. 
Let $\map \BB \R$ be the Borel $\sigma$-algebra on $\R$. 
Let $\lambda$ be the Lebesgue measure on $\struct {\R, \map \BB \R}$. 

Then: 

$\ds \int_\R f_X \rd \lambda = 1$
where $\ds \int_\R f_X \rd \lambda$ denotes the Lebesgue integral of $f_X$. 


Proof
Let $P_X$ be the probability distribution of $X$. 
From the definition of a probability density function, $f_X$ is a Radon-Nikodym derivative of $P_X$ with respect to $\lambda$.
We then have:














\(\ds 1\)

\(=\)







\(\ds \map {P_X} \R\)





Definition of Probability Measure, Probability Distribution is Probability Measure














\(\ds \)

\(=\)







\(\ds \int_\R f_X \rd \lambda\)





Definition of Radon-Nikodym Derivative



$\blacksquare$





