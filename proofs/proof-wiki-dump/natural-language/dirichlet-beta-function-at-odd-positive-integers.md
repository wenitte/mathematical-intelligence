# 

Source: https://proofwiki.org/wiki/Dirichlet_Beta_Function_at_Odd_Positive_Integers



Theorem













\(\ds \map \beta {2 n + 1}\)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \frac {\paren {-1}^k} {\paren {2 k + 1}^{2 n + 1} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {1^{2 n + 1} } - \frac 1 {3^{2 n + 1} } + \frac 1 {5^{2 n + 1} } - \frac 1 {7^{2 n + 1} } + \cdots\)




















\(\ds \)

\(=\)







\(\ds \paren {-1}^n \dfrac {E_{2 n} \pi^{2 n + 1} } {4^{n + 1} \paren {2 n}!}\)









where:

$\beta$ denotes the Dirichlet beta function
$E_n$ denotes the $n$th Euler number
$n$ is a non-negative integer.


Proof













\(\ds \map \beta {2 n + 1}\)

\(=\)







\(\ds \dfrac 1 {4^{2 n + 1} } \paren {\map \zeta {2 n + 1, \frac 1 4} - \map \zeta {2 n + 1, \frac 3 4} }\)





Dirichlet Beta Function in terms of Hurwitz Zeta Function














\(\ds \)

\(=\)







\(\ds \dfrac 1 {4^{2 n + 1} } \paren { \dfrac {\map {\psi_{2 n} } {\dfrac 1 4} - \map {\psi_{2 n} } {\dfrac 3 4} } {\paren {-1}^{2 n + 1} \map \Gamma {2 n + 1} } }\)





Polygamma Function in terms of Hurwitz Zeta Function














\(\ds \)

\(=\)







\(\ds -\dfrac 1 {4^{2 n + 1} \paren {2 n}!} \paren {\map {\psi_{2 n} } {\dfrac 1 4} - \map {\psi_{2 n} } {\dfrac 3 4} }\)




















\(\ds \)

\(=\)







\(\ds - \dfrac 1 {4^{2 n + 1} \paren {2 n}!} \paren {-\pi \valueat {\frac {\d^{2 n} } {\d z^{2 n} } \cot \pi z} {z \mathop = \frac 1 4} }\)





Polygamma Reflection Formula for $z = \dfrac 1 4$














\(\ds \)

\(=\)







\(\ds \dfrac \pi {4^{2 n + 1} \paren {2 n}!} \valueat {\dfrac {\d^{2 n} } {\d z^{2 n} } \cot \pi z} {z \mathop = \frac 1 4}\)




















\(\ds \)

\(=\)







\(\ds \dfrac \pi {4^{2 n + 1} \paren {2 n}!} \paren {-1}^n \paren {2 \pi}^{2 n} E_{2 n}\)





Even Derivatives of Cotangent of Pi Z at One Fourth














\(\ds \)

\(=\)







\(\ds \paren {-1}^n \dfrac { E_{2 n} \pi^{2 n + 1} } {4^{n + 1} \paren {2 n}!}\)









$\blacksquare$


Examples
Dirichlet Beta Function of $1$
$\map \beta 1 = \dfrac \pi 4 $


Dirichlet Beta Function of $3$
$\map \beta 3 = \dfrac {\pi^3} {32} $


Dirichlet Beta Function of $5$
$\map \beta 5 = \dfrac {5 \pi^5} {1536} $




