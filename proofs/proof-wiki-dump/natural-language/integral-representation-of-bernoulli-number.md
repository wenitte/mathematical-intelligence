# 

Source: https://proofwiki.org/wiki/Integral_Representation_of_Bernoulli_Number

Theorem
Bernoulli numbers can be expressed in integral form as follows:

$\ds \size {B_{2 n} } = 4 n \int_0^\infty \frac {t^{2 n - 1} } {e^{2 \pi t} - 1} \rd t$
where:

$B_n$ are the Bernoulli numbers
$n$ is a positive integer.


Proof













\(\ds \map \zeta s \map \Gamma s\)

\(=\)







\(\ds \int_0^\infty \frac {t^{s - 1} } {e^t - 1} \rd t\)





Integral Representation of Riemann Zeta Function in terms of Gamma Function








\(\ds \leadsto \ \ \)





\(\ds \map \zeta {2 n} \map \Gamma {2 n}\)

\(=\)







\(\ds \int_0^\infty \frac {t^{2 n - 1} } {e^t - 1} \rd t\)





setting $s:= 2n$








\(\ds \leadsto \ \ \)





\(\ds \paren {-1}^{n + 1} \frac {B_{2 n} 2^{2 n - 1} \pi^{2 n} } {\paren {2 n}!} \paren {2 n - 1}!\)

\(=\)







\(\ds \int_0^\infty \frac {t^{2 n - 1} } {e^t - 1} \rd t\)





Riemann Zeta Function at Even Integers, Gamma Function Extends Factorial








\(\ds \leadsto \ \ \)





\(\ds \frac {\size {B_{2 n} } 2^{2 n} \pi^{2 n} } {4 n}\)

\(=\)







\(\ds \int_0^\infty \frac {t^{2 n - 1} } {e^t - 1} \rd t\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {\size {B_{2 n} } \paren {4 \pi^2}^n} {4 n}\)

\(=\)







\(\ds \int_0^\infty \frac {\paren {2 \pi t}^{2 n - 1} } {e^{2 \pi t} - 1} \paren {2 \pi \rd t}\)





$t \to 2 \pi t$ and $\rd t \to 2 \pi \rd t$ and Power of Product








\(\ds \leadsto \ \ \)





\(\ds \size {B_{2 n} } \paren {4 \pi^2}^n\)

\(=\)







\(\ds \paren {4 n} \paren {4 \pi^2}^n  \int_0^\infty \frac {t^{2 n - 1} } {e^{2 \pi t} - 1} \rd t\)














\(\ds \leadsto \ \ \)





\(\ds \size {B_{2 n} }\)

\(=\)







\(\ds 4 n  \int_0^\infty \frac {t^{2 n - 1} } {e^{2 \pi t} - 1} \rd t\)









$\blacksquare$


Sources
1920: E.T. Whittaker and G.N. Watson: A Course of Modern Analysis (3rd ed.): $7.2$: The Bernoullian numbers and the Bernoullian polynomials




