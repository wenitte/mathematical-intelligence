# 

Source: https://proofwiki.org/wiki/Recurrence_Relation_for_Polygamma_Function



Theorem
$\map {\psi_n} {z + 1} = \map {\psi_n} z + \paren {-1}^n n! z^{-n - 1}$
where:

$\psi_n$ denote the $n$th polygamma function
$z \in \C \setminus \Z_{\le 0}$.


Proof 1
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


Proof 2













\(\ds \map \Gamma {z + 1}\)

\(=\)







\(\ds z \map \Gamma z\)





Gamma Difference Equation








\(\ds \leadsto \ \ \)





\(\ds \map \ln {\map \Gamma {z + 1} }\)

\(=\)







\(\ds \map \ln {z \map \Gamma z}\)





applying $\ln$ on both sides














\(\ds \)

\(=\)







\(\ds \ln z + \map \ln {\map \Gamma z}\)





Sum of Logarithms








\(\ds \leadsto \ \ \)





\(\ds \dfrac \d {\d z} \map \ln {\map \Gamma {z + 1} }\)

\(=\)







\(\ds \dfrac \d {\d z} \ln z + \dfrac \d {\d z} \map \ln {\map \Gamma z}\)





differentiation with respect to $z$








\(\ds \leadsto \ \ \)





\(\ds \dfrac {\map {\Gamma'} {z + 1} } {\map \Gamma {z + 1} }\)

\(=\)







\(\ds z^{-1} + \dfrac {\map {\Gamma'} z} {\map \Gamma z}\)





Derivative of Natural Logarithm Function, Chain Rule for Derivatives








\(\ds \leadsto \ \ \)





\(\ds \map \psi {z + 1}\)

\(=\)







\(\ds \map \psi z + z^{-1}\)





Definition of Digamma Function








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


Also presented as
The Recurrence Relation for Polygamma Function can also be presented as:

$\map {\psi_n} {z + 1} = \map {\psi_n} z + \dfrac {\paren {-1}^n n!} {z^{n + 1} }$


Also see
Recurrence Relation for Digamma Function
Recurrence Relation for General Harmonic Numbers


Sources
Weisstein, Eric W. "Polygamma Function." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/PolygammaFunction.html




