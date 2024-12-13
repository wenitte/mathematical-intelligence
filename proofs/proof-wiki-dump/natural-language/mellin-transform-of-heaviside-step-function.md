# 

Source: https://proofwiki.org/wiki/Mellin_Transform_of_Heaviside_Step_Function



Theorem
Let $c$ be a constant real number.
Let $\map {u_c} t$ be the Heaviside step function.
Let $\MM$ be the Mellin transform.
Then:

$\map {\MM \set {\map {u_c} t} } s = -\dfrac {c^s} s$
for $c > 0, \map \Re s < 0$.


Corollary
$\map {\MM \set {\map u {c - t} } } s = \dfrac {c^s} s$
for $c > 0, \map \Re s > 0$


Proof
Lemma
Let $t \in \R$.
Let $s \in \C$ with $\map \Re s < 0$.
Then:

$\ds \lim_{t \mathop \to +\infty} t^s = 0$















\(\ds \map {\MM \set {\map {u_c} t} } s\)

\(=\)







\(\ds \int_0^{\to +\infty} t^{s - 1} \map {u_c} t \rd t\)





Definition of Mellin Transform














\(\ds \)

\(=\)







\(\ds \int_c^{\to +\infty} t^{s - 1} \rd t\)





Definition of Heaviside Step Function: integrand is elsewhere zero














\(\ds \)

\(=\)







\(\ds \intlimits {\dfrac {t^s} s} c {+\infty}\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds 0 - \dfrac {c^s} s\)





By Lemma














\(\ds \)

\(=\)







\(\ds - \dfrac {c^s} s\)









$\blacksquare$





