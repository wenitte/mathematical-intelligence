# 

Source: https://proofwiki.org/wiki/Decomposition_of_Distribution_Function_of_Finite_Signed_Borel_Measure

Theorem
Let $\mu$ be a finite signed Borel measure on $\R$.
Let $\tuple {\mu^+, \mu^-}$ be the Jordan decomposition of $\mu$.

Then: 

$F_\mu = F_{\mu^+} - F_{\mu^-}$
where:

$F_\mu$ is the distribution function of $\mu$
$F_{\mu^+}$ and $F_{\mu^-}$ are the distribution functions of $\mu^+$ and $\mu^-$ respectively.


Proof
For each $x \in \R$ we have:














\(\ds \map {F_\mu} x\)

\(=\)







\(\ds \map \mu {\hointl {-\infty} x}\)





Definition of Distribution Function of Finite Signed Borel Measure














\(\ds \)

\(=\)







\(\ds \map {\mu^+} {\hointl {-\infty} x} - \map {\mu^-} {\hointl {-\infty} x}\)





Definition of Jordan Decomposition














\(\ds \)

\(=\)







\(\ds \map {F_{\mu^+} } x - \map {F_{\mu^-} } x\)





Definition of Distribution Function of Finite Borel Measure



$\blacksquare$





