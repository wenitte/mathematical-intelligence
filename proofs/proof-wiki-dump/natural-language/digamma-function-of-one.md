# 

Source: https://proofwiki.org/wiki/Digamma_Function_of_One

Theorem
$\map \psi 1 = -\gamma$
where:

$\psi$ denotes the digamma function
$\gamma$ denotes the Euler-Mascheroni constant.


Proof













\(\ds \map \psi z\)

\(=\)







\(\ds \dfrac {\map {\Gamma'} z} {\map \Gamma z}\)





Definition of Digamma Function














\(\ds \)

\(=\)







\(\ds -\gamma + \sum_{n \mathop = 1}^\infty \paren {\frac 1 n - \frac 1 {z + n - 1} }\)





Reciprocal times Derivative of Gamma Function








\(\ds \leadsto \ \ \)





\(\ds \map \psi 1\)

\(=\)







\(\ds -\gamma + \sum_{n \mathop = 1}^\infty \paren {\frac 1 n - \frac 1 {1 + n - 1} }\)





$z \gets 1$














\(\ds \)

\(=\)







\(\ds -\gamma + \sum_{n \mathop = 1}^\infty \paren {\frac 1 n - \frac 1 n}\)




















\(\ds \)

\(=\)







\(\ds -\gamma\)





noting that the summation is an empty sum



$\blacksquare$





