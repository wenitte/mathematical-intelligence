# 

Source: https://proofwiki.org/wiki/Recurrence_Relation_for_Polygamma_Function/Proof_1

Theorem
$\map {\psi_n} {z + 1} = \map {\psi_n} z + \paren {-1}^n n! z^{-n - 1}$
where:

$\psi_n$ denote the $n$th polygamma function
$z \in \C \setminus \Z_{\le 0}$.


Proof
By definition:

$\map {\psi_n} z = \dfrac {\d^n} {\d z^n} \map \psi z$
where:

$\psi$ denotes the digamma function
$z \in \C \setminus \Z_{\le 0}$.

Then:














\(\ds \map \psi {z + 1}\)

\(=\)







\(\ds \map \psi z + z^{-1}\)





Recurrence Relation for Digamma Function








\(\ds \leadsto \ \ \)





\(\ds \dfrac {\d^n} {\d z^n} \map \psi {z + 1}\)

\(=\)







\(\ds \dfrac {\d^n} {\d z^n} \map \psi z + \dfrac {\d^n} {\d z^n} {z^{-1} }\)





taking $n$th derivative








\(\ds \leadsto \ \ \)





\(\ds \map {\psi_n} {z + 1}\)

\(=\)







\(\ds \map {\psi_n} z + \paren {-1}^n n! z^{-n - 1}\)





Definition of Polygamma Function and Nth Derivative of Reciprocal of Mth Power: Corollary



$\blacksquare$





