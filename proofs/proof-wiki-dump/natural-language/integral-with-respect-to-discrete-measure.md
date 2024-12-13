# 

Source: https://proofwiki.org/wiki/Integral_with_respect_to_Discrete_Measure

Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $\sequence {x_n}_{n \mathop \in \N}$ be a sequence in $X$. 
Let $\ds \mu = \sum_{n \mathop \in \N} \lambda_n \delta_{x_n}$ be a discrete measure on $\struct {X, \Sigma}$.
Let $f \in \MM_{\overline \R}^+, f: X \to \overline \R$ be a positive measurable function.

Then:

$\ds \int f \rd \mu = \sum_{n \mathop \in \N} \lambda_n \map f {x_n}$
where the integral sign denotes $\mu$-integration.


Proof
We have: 














\(\ds \int f \rd \mu\)

\(=\)







\(\ds \sum_{n \mathop \in \N} \lambda_n \int f \rd \delta_{x_n}\)





Integral with respect to Series of Measures














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop \in \N} \lambda_n \map f {x_n}\)





Integral with respect to Dirac Measure



$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $9.10 \ \text{(ii)}$




