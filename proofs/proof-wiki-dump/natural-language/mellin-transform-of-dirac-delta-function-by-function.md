# 

Source: https://proofwiki.org/wiki/Mellin_Transform_of_Dirac_Delta_Function_by_Function

Theorem
Let $f: \R \to \R$ be a function.
Let $c \in \R_{>0}$ be a positive constant real number.
Let $\map {\delta_c} t$ be the Dirac delta function.
Let $\MM$ be the Mellin transform.

Then:

$\map {\MM \set {\map {\delta_c} t \map f t} } s = c^{s - 1} \map f c$


Proof













\(\ds \map {\MM \set {\map {\delta_c} t \map f t} } s\)

\(=\)







\(\ds \int_0^{\to +\infty} t^{s - 1} \map {\delta_c} t \map f t \rd t\)





Definition of Mellin Transform














\(\ds \)

\(=\)







\(\ds \int_{c^-}^{c^+} t^{s - 1} \map {\delta_c} t \map f t \rd t\)





Definition of Dirac Delta Function: integrand is elsewhere zero














\(\ds \)

\(=\)







\(\ds \int_{c^-}^{c^+} c^{s - 1} \map {\delta_c} t \map f c \rd t\)





$t$ is constant in interval $\closedint {c^-} {c^+}$














\(\ds \)

\(=\)







\(\ds c^{s - 1} \map f c \int_{c^-}^{c^+} \map {\delta_c} t \rd t\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds c^{s - 1} \map f c\)





Definition of Dirac Delta Function



$\blacksquare$





