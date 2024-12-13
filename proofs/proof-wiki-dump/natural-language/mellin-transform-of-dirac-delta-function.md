# 

Source: https://proofwiki.org/wiki/Mellin_Transform_of_Dirac_Delta_Function

Theorem
Let $c \in \R_{>0}$ be a (strictly) positive real number.
Let $\map {\delta_c} t$ be the Dirac delta function.
Let $\MM$ be the Mellin transform.

Then:

$\map {\MM \set {\map {\delta_c} t} } s = c^{s - 1}$


Proof













\(\ds \map {\MM \set {\map {\delta_c} t} } s\)

\(=\)







\(\ds \int_0^{\to +\infty} t^{s - 1} \map {\delta_c} t \rd t\)





Definition of Mellin Transform














\(\ds \)

\(=\)







\(\ds \int_{c^-}^{c^+} t^{s - 1} \map {\delta_c} t \rd t\)





Definition of Dirac Delta Function: integrand is elsewhere zero














\(\ds \)

\(=\)







\(\ds \int_{c^-}^{c^+} c^{s - 1} \map {\delta_c} t \rd t\)





$t$ is constant in interval $\closedint {c^-} {c^+}$














\(\ds \)

\(=\)







\(\ds c^{s - 1} \int_{c^-}^{c^+} \map {\delta_c} t \rd t\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds c^{s - 1}\)





Definition of Dirac Delta Function



$\blacksquare$


Also see
Mellin Transform of Dirac Delta Function by Function




