# 

Source: https://proofwiki.org/wiki/Polygamma_Function_in_terms_of_Hurwitz_Zeta_Function

Theorem
$\map {\psi_n} z = \paren {-1}^{n + 1} \map \Gamma {n + 1} \map \zeta {n + 1, z}$
where:

$\psi_n$ is the polygamma function
$\Gamma$ is the gamma function
$\zeta$ is the Hurwitz zeta function
$z \in \C_{>0}$
$n \in \Z_{\ge 1}$.


Proof













\(\ds \map \psi z\)

\(=\)







\(\ds \dfrac {\map {\Gamma'} z} {\map \Gamma z}\)





Definition of Digamma Function














\(\ds \)

\(=\)







\(\ds -\gamma + \sum_{k \mathop = 1}^\infty \paren {\dfrac 1 k - \dfrac 1 {z + k - 1} }\)





Reciprocal times Derivative of Gamma Function








\(\ds \leadsto \ \ \)





\(\ds \dfrac {\d^n} {\d z^n} \map \psi z\)

\(=\)







\(\ds -\dfrac {\d^n} {\d z^n} \gamma + \dfrac {\d^n} {\d z^n} \sum_{k \mathop = 1}^\infty \paren {\dfrac 1 k - \dfrac 1 {z + k - 1} }\)





taking $n$th derivative








\(\ds \leadsto \ \ \)





\(\ds \map {\psi_n} z\)

\(=\)







\(\ds -\dfrac {\d^n} {\d z^n} \sum_{k \mathop = 1}^\infty \dfrac 1 {z + k - 1}\)





Definition of Polygamma Function, Derivative of Constant














\(\ds \)

\(=\)







\(\ds -\dfrac {\d^n} {\d z^n} \sum_{k \mathop = 0}^\infty \dfrac 1 {z + k}\)





reindexing $k$ from $1$ to $0$














\(\ds \)

\(=\)







\(\ds -\sum_{k \mathop = 0}^\infty \dfrac {\paren {-1}^n n!} {\paren {z + k}^{n + 1} }\)





$n$th Derivative of Reciprocal














\(\ds \)

\(=\)







\(\ds \paren {-1}^{n + 1} \map \Gamma {n + 1} \sum_{k \mathop = 0}^\infty \dfrac 1 {\paren {z + k}^{n + 1} }\)





Gamma Function Extends Factorial and simplification














\(\ds \)

\(=\)







\(\ds \paren {-1}^{n + 1} \map \Gamma {n + 1} \map \zeta {n + 1, z}\)





Definition of Hurwitz Zeta Function



$\blacksquare$


Sources
Weisstein, Eric W. "Polygamma Function." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/PolygammaFunction.html




