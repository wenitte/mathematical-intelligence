# 

Source: https://proofwiki.org/wiki/Bounded_Right-Continuous_Increasing_Function_Vanishing_at_Infimum_is_Distribution_Function_of_Finite_Borel_Measure/Corollary

Corollary
Let $K$ be a closed interval with $\inf K > -\infty$. 
Let $m \ge 0$. 
Let $F : K \to \R$ be a bounded right-continuous increasing function such that:

$\ds \lim_{x \mathop \to \inf K} \map F x = m$
and:

$\ds \lim_{x \mathop \to \sup K} \map F x = M \in \hointr 0 \infty$

Then there exists a finite Borel measure $\mu$ on $K$ such that the distribution function $F_\mu$ of $\mu$ is equal to $F$. 
Further, $\map \mu K = M$ and $\map \mu {\set {\inf K} } = m$. 


Proof
Define $\widetilde F : K \to \R$ by:

$\map {\widetilde F} x = \map F x - m$
for each $x \in K$.
Then $\widetilde F$ is bounded right-continuous increasing function and is such that:

$\ds \lim_{x \mathop \to \inf K} \map {\widetilde F} x = 0$
and:

$\ds \lim_{x \mathop \to \sup K} \map {\widetilde F} x = M - m \in \openint 0 \infty$
Hence by Bounded Right-Continuous Increasing Function Vanishing at Infimum is Distribution Function of Finite Borel Measure, there exists a finite Borel measure $\widetilde \mu$ on $K$ such that the distribution function $F_{\widetilde \mu}$ of $\widetilde \mu$ is equal to $F$ and $\map {\widetilde \mu} K = M - m$. 
Let:

$\mu = \widetilde \mu + m \delta_{\set {\inf K} }$
where $\delta_{\set {\inf K} }$ is the Dirac measure concentrated at $\inf K$.
From Dirac Measure is Measure and Linear Combination of Measures, $\mu$ is a Borel measure.
Further, $\map \mu K = \map {\widetilde \mu} K + m \map {\delta_{\set {\inf K} } } K = M - m + m = M$.
Finally for each $x \in K$ we have:














\(\ds \map {F_\mu} x\)

\(=\)







\(\ds \map \mu {\hointl {-\infty} x \cap K}\)




















\(\ds \)

\(=\)







\(\ds \map {\widetilde \mu} {\hointl {-\infty} x \cap K} + \map {\delta_{\set {\inf K} } } {\hointl {-\infty} x \cap K}\)




















\(\ds \)

\(=\)







\(\ds m + \map {\widetilde \mu} {\hointl {-\infty} x \cap K}\)




















\(\ds \)

\(=\)







\(\ds m + \map {\widetilde F} x\)




















\(\ds \)

\(=\)







\(\ds \map F x\)









So $\mu$ is our desired Borel measure.
$\blacksquare$





