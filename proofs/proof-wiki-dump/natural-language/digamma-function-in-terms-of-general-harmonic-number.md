# 

Source: https://proofwiki.org/wiki/Digamma_Function_in_terms_of_General_Harmonic_Number

Corollary to Reciprocal times Derivative of Gamma Function
Let $z \in \C \setminus \Z_{\le 0}$.
Then:

$\ds \map \psi {z + 1} = -\gamma + \harm 1 z$
where:

$\psi$ is the digamma function
$\gamma$ denotes the Euler-Mascheroni constant
$\harm 1 z$ denotes the general harmonic number of order $1$ evaluated at $z$.


Proof













\(\ds \dfrac {\map {\Gamma'} {z + 1} } {\map \Gamma {z + 1} }\)

\(=\)







\(\ds -\gamma + \sum_{n \mathop = 1}^\infty \paren {\frac 1 n - \frac 1 {\paren {z + 1} + n - 1} }\)





Reciprocal times Derivative of Gamma Function








\(\ds \leadsto \ \ \)





\(\ds \map \psi {z + 1}\)

\(=\)







\(\ds -\gamma + \sum_{n \mathop = 1}^\infty \paren {\frac 1 n - \frac 1 {z + n} }\)





Definition of Digamma Function














\(\ds \)

\(=\)







\(\ds -\gamma + \harm 1 z\)





Definition of General Harmonic Numbers



$\blacksquare$





