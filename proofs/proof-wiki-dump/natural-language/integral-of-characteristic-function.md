# 

Source: https://proofwiki.org/wiki/Integral_of_Characteristic_Function



Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $E \in \Sigma$ be a measurable set, and let $\chi_E: X \to \R$ be its characteristic function.

Then $\map {I_\mu} {\chi_E} = \map \mu E$, where $\map {I_\mu} {\chi_E}$ is the $\mu$-integral of $\chi_E$.


Corollary
$\ds \int \chi_E \rd \mu = \map \mu E$
where the integral sign denotes the $\mu$-integral of $\chi_E$.


Proof
Let $a_1 = 1$ and $E_1 = E$.
As in the definition of standard representation, denote $a_0 = 0$ and $E_0 = X \setminus E_1$.

Then for $x \in X$, we have:

$\map {\chi_E} x = 0 \cdot \map {\chi_{E_0} } x + 1 \cdot \map {\chi_{E_1} } x$
since $E_1 = E$.
Hence $\chi_E = a_0 \chi_{E_0} + a_1 \chi_{E_1}$ is a standard representation for $\chi_E$.

Thus, by definition of $\mu$-integral:

$\ds \int \chi_E \rd \mu = a_0 \map \mu {E_0} + a_1 \map \mu {E_1} = \map \mu E$
as desired.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $9.3 \ \text{(i)}$




