# 

Source: https://proofwiki.org/wiki/Riemann_Zeta_Function_at_Non-Positive_Integers



Theorem
Let $n \ge 0$ be a integer. 
Then: 

$\map \zeta {-n} = \paren {-1}^n \dfrac {B_{n + 1} } {n + 1}$
where:

$B_n$ is the $n$th Bernoulli number
$\zeta$ is the Riemann Zeta function


Proof
By Hankel Representation of Riemann Zeta Function: 

$\ds \map \zeta {-n} = \frac {i \map \Gamma {1 + n} } {2 \pi} \oint_C \frac 1 {z^{n + 1} \paren {e^z - 1} } \rd z$
where $C$ is the Hankel contour.
Note that the integrand is meromorphic, with exactly one pole at $z = 0$ lying inside the contour.
So: 














\(\ds \map \zeta {-n}\)

\(=\)







\(\ds \frac {i n!} {2 \pi} \oint_C \frac 1 {\paren {-z}^{n + 2} } \cdot \frac {-z} {e^z - 1} \rd z\)





Gamma Function Extends Factorial














\(\ds \)

\(=\)







\(\ds -\frac {i n!} {2 \pi} \cdot 2 \pi i \, \Res {\frac 1 {\paren {-z}^{n + 2} } \cdot \frac {-z} {e^z - 1} } 0\)





Cauchy's Residue Theorem














\(\ds \)

\(=\)







\(\ds n! \, \Res {\paren {-1}^2 \paren {-1}^n \sum _{k \mathop = 0}^\infty \frac {B_k} {k!} z^{k - n - 2} } 0\)





Definition of Bernoulli Numbers, $i^2 = -1$














\(\ds \)

\(=\)







\(\ds n! \paren {-1}^n \, \Res {\sum_{k \mathop = 0}^\infty \frac {B_k} {k!} z^{k - n - 2} } 0\)









By the definition of a residue, the residue at $0$ is given by the coefficient of the $\dfrac 1 z$ term.
This is the term where $k = n + 1$, so:














\(\ds \map \zeta {-n}\)

\(=\)







\(\ds n! \paren {-1}^n \frac {B_{n + 1} } {\paren {n + 1}!}\)




















\(\ds \)

\(=\)







\(\ds \paren {-1}^n \frac {B_{n + 1} } {n + 1}\)









$\blacksquare$


Examples
Example: $\map \zeta {-1}$
$\map \zeta {-1 } = -\dfrac 1 {12} $


Example: $\map \zeta {-3}$
$\map \zeta {-3 } = \dfrac 1 {120} $




