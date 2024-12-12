# 

Source: https://proofwiki.org/wiki/Euler%27s_Reflection_Formula



Theorem
Let $\Gamma$ denote the gamma function.
Then:

$\forall z \notin \Z: \map \Gamma z \map \Gamma {1 - z} = \dfrac \pi {\map \sin {\pi z} }$


Corollary
$\forall z \notin \Z: \paren {-z}! \, \map \Gamma z = \dfrac \pi {\map \sin {\pi z} }$


Proof
We have the Weierstrass products:

$\ds \map \sin {\pi z} = \pi z \prod_{n \mathop \ne 0} \paren {1 - \frac z n} \map \exp {\frac z n}$

From the Weierstrass form of the Gamma function:

$\ds \frac 1 {\map \Gamma z} = z e^{\gamma z} \prod_{n \mathop = 1}^\infty \paren {1 + \frac z n} \map \exp {-\frac z n}$
from which:














\(\ds \dfrac 1 {-z \, \map \Gamma z \map \Gamma {-z} }\)

\(=\)







\(\ds \frac {-z^2 \map \exp {\gamma z} \map \exp {-\gamma z} } {-z} \prod_{n \mathop = 1}^\infty \paren {1 + \frac z n} \paren {1 - \frac z n} \map \exp {\frac z n} \map \exp {-\frac z n}\)




















\(\ds \)

\(=\)







\(\ds z \prod_{n \mathop = 1}^\infty \paren {1 - \frac {z^2} {n^2} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\map \sin {\pi z} } \pi\)





Euler Formula for Sine Function



whence:














\(\ds \map \Gamma z \map \Gamma {1 - z}\)

\(=\)







\(\ds -z \, \map \Gamma z \map \Gamma {-z}\)





Gamma Difference Equation














\(\ds \)

\(=\)







\(\ds \frac \pi {\map \sin {\pi z} }\)









$\blacksquare$


Also see
Digamma Reflection Formula
Polygamma Reflection Formula


Source of Name
This entry was named for Leonhard Paul Euler.


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Some Special Functions: $\text {I}$. The Gamma function: $3$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $16.8$: Relationships among Gamma Functions
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.5$: Permutations and Factorials: Exercise $23$




