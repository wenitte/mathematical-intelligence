# 

Source: https://proofwiki.org/wiki/Derivative_of_Gamma_Function_at_1/Proof_1

Theorem
Let $\Gamma$ denote the Gamma function.

Then:

$\map {\Gamma'} 1 = -\gamma$
where:

$\map {\Gamma'} 1$ denotes the derivative of the Gamma function evaluated at $1$
$\gamma$ denotes the Euler-Mascheroni constant.


Proof
From Reciprocal times Derivative of Gamma Function:

$\ds \dfrac {\map {\Gamma'} z} {\map \Gamma z} = -\gamma + \sum_{n \mathop = 1}^\infty \paren {\frac 1 n - \frac 1 {z + n - 1} }$
Setting $z = 1$:














\(\ds \frac {\map {\Gamma'} 1} {\map \Gamma 1}\)

\(=\)







\(\ds -\gamma + \sum_{n \mathop = 1}^\infty \paren {\frac 1 n - \frac 1 {1 + n - 1} }\)




















\(\ds \)

\(=\)







\(\ds -\gamma + \sum_{n \mathop = 1}^\infty \paren {\frac 1 n - \frac 1 n}\)




















\(\ds \)

\(=\)







\(\ds -\gamma + 0\)




















\(\ds \)

\(=\)







\(\ds -\gamma\)









Using Gamma Function Extends Factorial:

$\map \Gamma 1 = \paren {1 - 1}! = 1$
Hence:

$\map {\Gamma'} 1 = -\gamma \map \Gamma 1 = -\gamma$
$\blacksquare$





