# 

Source: https://proofwiki.org/wiki/Integral_of_Characteristic_Function/Corollary

Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $E \in \Sigma$ be a measurable set, and let $\chi_E: X \to \R$ be its characteristic function.
Then:

$\ds \int \chi_E \rd \mu = \map \mu E$
where the integral sign denotes the $\mu$-integral of $\chi_E$.


Proof
By Integral of Characteristic Function, have:

$\map {I_\mu} {\chi_E} = \map \mu E$
where $\map {I_\mu} {\chi_E}$ is the $\mu$-integral of $\chi_E$.
From Integral of Positive Measurable Function Extends Integral of Positive Simple Function, it also holds that:

$\ds \int \chi_E \rd \mu = \map {I_\mu} {\chi_E}$

Combining these equalities gives the result.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $9.8 \ \text{(i)}$, $\S 9$: Problem $2$




