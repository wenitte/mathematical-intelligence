# 

Source: https://proofwiki.org/wiki/Polygamma_Reflection_Formula/Proof_1

Theorem
Let $z \in \C \setminus \Z$.
Let $\psi_n$ denote the $n$th polygamma function.
Then:

$\map {\psi_n} z - \paren {-1}^n \map {\psi_n} {1 - z} = -\pi \dfrac {\d^n} {\d z^n} \cot \pi z$


Proof
Lemma
The expression:

$\map \psi z - \map \psi {1 - z}$
is defined on the domain $\C \setminus \Z$.
That is, on the set of complex numbers but specifically excluding the integers.
$\Box$

By definition:

$\map {\psi_n} z = \dfrac {\d^n} {\d z^n} \map \psi z$
where:

$\psi$ denotes the digamma function
$z \in \C \setminus \Z_{\le 0}$.

Then:














\(\ds \map \psi z - \map \psi {1 - z}\)

\(=\)







\(\ds -\pi \cot \pi z\)





Digamma Reflection Formula








\(\ds \leadsto \ \ \)





\(\ds \dfrac {\d^n} {\d z^n} \map \psi z - \dfrac {\d^n} {\d z^n} \map \psi {1 - z}\)

\(=\)







\(\ds -\pi \dfrac {\d^n} {\d z^n} \cot \pi z\)





taking $n$th derivative








\(\ds \leadsto \ \ \)





\(\ds \map {\psi_n} z - \paren {-1}^n \map {\psi_n} {1 - z}\)

\(=\)







\(\ds -\pi \dfrac {\d^n} {\d z^n} \cot \pi z\)





Definition of Polygamma Function




Finally, from the Lemma, we note that:

$\map \psi z - \map \psi {1 - z}$
is defined on the domain $\C \setminus \Z$.
$\blacksquare$





