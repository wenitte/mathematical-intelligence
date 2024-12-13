# 

Source: https://proofwiki.org/wiki/Integral_of_Power/Conventional_Proof

Theorem
$\ds \forall n \in \R_{\ne -1}: \int_0^b x^n \rd x = \frac {b^{n + 1} } {n + 1}$


Proof
From the Fundamental Theorem of Calculus:

$(1): \quad \ds \int_0^b x^n \rd x = \bigintlimits {\map F x} 0 b = \map F b - \map F 0$
where $\map F x$ is a primitive of $x^n$.

By Primitive of Power, $\dfrac {x^{n + 1} } {n + 1}$ is a primitive of $x^n$.

Then:














\(\ds \int_0^b x^n \rd x\)

\(=\)







\(\ds \intlimits {\frac {x^{n + 1} } {n + 1} } 0 b\)





substituting $\dfrac {x^{n + 1} } {n + 1}$ for $F$ in $(1)$














\(\ds \)

\(=\)







\(\ds \frac {b^{n + 1} } {n + 1} - \frac {0^{n + 1} } {n + 1}\)




















\(\ds \)

\(=\)







\(\ds \frac {b^{n + 1} } {n + 1}\)









$\blacksquare$





