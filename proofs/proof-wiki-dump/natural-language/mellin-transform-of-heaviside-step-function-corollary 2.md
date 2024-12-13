# 

Source: https://proofwiki.org/wiki/Mellin_Transform_of_Heaviside_Step_Function/Corollary

Theorem
Let $c$ be a constant real number.
Let $\map {u_c} t$ be the Heaviside step function.
Let $\MM$ be the Mellin transform.
Then:

$\map {\MM \set {\map u {c - t} } } s = \dfrac {c^s} s$
for $c > 0, \map \Re s > 0$


Proof













\(\ds \map {\MM \set {\map u {c - t} } } s\)

\(=\)







\(\ds \int_0^{\to +\infty} t^{s - 1} \map u {c - t} \rd t\)





Definition of Mellin Transform














\(\ds \)

\(=\)







\(\ds \int_0^c t^{s - 1} \rd t\)





Definition of Heaviside Step Function: integrand is elsewhere zero














\(\ds \)

\(=\)







\(\ds \bigintlimits {\dfrac {t^s} s} {t \mathop = 0} {t \mathop = c}\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \dfrac {c^s} s - 0\)




















\(\ds \)

\(=\)







\(\ds \dfrac {c^s} s\)









$\blacksquare$





