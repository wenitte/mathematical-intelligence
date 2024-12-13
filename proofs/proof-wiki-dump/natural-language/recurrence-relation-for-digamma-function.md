# 

Source: https://proofwiki.org/wiki/Recurrence_Relation_for_Digamma_Function



Theorem
$\map \psi {z + 1} = \map \psi z + \dfrac 1 z$
where:

$\psi$ denotes the digamma function
$z \in \C \setminus \Z_{\le 0}$.


Proof













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







\(\ds \dfrac 1 z + \dfrac {\map {\Gamma'} z} {\map \Gamma z}\)





Derivative of Natural Logarithm Function, Chain Rule for Derivatives








\(\ds \leadsto \ \ \)





\(\ds \map \psi {z + 1}\)

\(=\)







\(\ds \map \psi z + \dfrac 1 z\)





Definition of Digamma Function



$\blacksquare$


Also see
Recurrence Relation for General Harmonic Numbers
Recurrence Relation for Polygamma Function


Sources
Weisstein, Eric W. "Digamma Function." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/DigammaFunction.html




