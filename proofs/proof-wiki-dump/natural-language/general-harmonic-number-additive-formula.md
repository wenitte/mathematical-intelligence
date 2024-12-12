# 

Source: https://proofwiki.org/wiki/General_Harmonic_Number_Additive_Formula



Theorem
Let $n \in \N_{>0}$ where $\N_{>0}$ denotes the non-zero natural numbers.
Let $x \in \C \setminus \Z_{< 0}$
Then: 

$\ds \harm 1 {n x} = \frac 1 n \sum_{k \mathop = 0}^{n - 1} \paren {\harm 1 {x - \dfrac k n } } + \ln n$
where:

$\map {H^{\paren r} } x$ denotes the general harmonic number of order $1$ evaluated at $x$.
$\ln$ is the complex natural logarithm.


Corollary
Let $n \in \N_{>0}$ be a non-zero natural number.
Then: 

$\ds \sum_{k \mathop = 1}^{n - 1} \paren {\harm 1 {-\dfrac k n } } = -n \ln n$
where:

$\harm 1 x$ denotes the general harmonic number of order $1$ evaluated at $x$.
$\ln$ is the complex natural logarithm.


Proof













\(\ds \map \psi {n z}\)

\(=\)







\(\ds \frac 1 n \sum_{k \mathop = 0}^{n - 1} \map \psi {z + \frac k n} + \ln n\)





Digamma Additive Formula








\(\ds \leadsto \ \ \)





\(\ds \paren {-\gamma + \harm 1 {n z - 1} }\)

\(=\)







\(\ds \frac 1 n \sum_{k \mathop = 0}^{n - 1} \paren {-\gamma + \harm 1 {z + \dfrac k n - 1} } + \ln n\)





Digamma Function in terms of General Harmonic Number: $\map \psi {z + 1} = -\gamma + \harm 1 z$














\(\ds \)

\(=\)







\(\ds \frac 1 n \paren {-n \gamma} + \frac 1 n \sum_{k \mathop = 0}^{n - 1} \paren {\harm 1 {z + \dfrac k n - 1} } + \ln n\)














\(\ds \leadsto \ \ \)





\(\ds \harm 1 {n z - 1}\)

\(=\)







\(\ds \frac 1 n \sum_{k \mathop = 0}^{n - 1} \paren {\harm 1 {z + \dfrac k n - 1} } + \ln n\)





adding $\gamma$ from both sides








\(\ds \leadsto \ \ \)





\(\ds \harm 1 {n x}\)

\(=\)







\(\ds \frac 1 n \sum_{k \mathop = 0}^{n - 1} \paren {\harm 1 {x + \dfrac 1 n + \dfrac k n - 1} } + \ln n\)





let $\paren {n z - 1} \to n x$














\(\ds \)

\(=\)







\(\ds \frac 1 n \paren {\harm 1 {x - \dfrac {\paren {n - 1} } n} + \harm 1 {x - \dfrac {\paren {n - 2} } n } + \cdots + \harm 1 {x - \dfrac {\paren {n - n} } n} } + \ln n\)




















\(\ds \)

\(=\)







\(\ds \frac 1 n \paren {\harm 1 {x - \dfrac {\paren {n - n} } n} + \harm 1 {x - \dfrac {\paren {n - \paren {n - 1} } } n } + \cdots + \harm 1 {x - \dfrac {\paren {n - 1} } n} } + \ln n\)





reversing the order of the sum














\(\ds \)

\(=\)







\(\ds \frac 1 n \sum_{k \mathop = 0}^{n - 1} \paren {\harm 1 {x - \dfrac k n} } + \ln n\)









$\blacksquare$


Also see
Digamma Additive Formula
Cotangent Additive Formula




