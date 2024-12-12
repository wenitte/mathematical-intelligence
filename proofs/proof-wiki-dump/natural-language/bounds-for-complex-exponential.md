# 

Source: https://proofwiki.org/wiki/Bounds_for_Complex_Exponential

Theorem
Let $\exp$ denote the complex exponential.
Let $z \in \C$ with $\cmod z \le \dfrac 1 2$.

Then

$\dfrac 1 2 \cmod z \le \cmod {\exp z - 1} \le \dfrac 3 2 \cmod z$


Proof
By definition of complex exponential:

$\exp z = \ds \sum_{n \mathop = 1}^\infty \frac {z^n} {n!}$
Thus














\(\ds \cmod {\exp z - 1 - z}\)

\(=\)







\(\ds \cmod {\sum_{n \mathop = 2}^\infty \frac {z^n} {n!} }\)





Linear Combination of Convergent Series














\(\ds \)

\(\le\)







\(\ds \sum_{n \mathop = 2}^\infty \cmod {\frac {z^n} {n!} }\)





Triangle Inequality for Series














\(\ds \)

\(\le\)







\(\ds \sum_{n \mathop = 2}^\infty \frac {\cmod z^n} 2\)





as $n \ge 2$














\(\ds \)

\(=\)







\(\ds \frac {\cmod z^2 / 2} {1 - \cmod z}\)





Sum of Infinite Geometric Sequence














\(\ds \)

\(\le\)







\(\ds \frac 1 2 \cmod z\)





as $\cmod z \le \dfrac 1 2$



By the Triangle Inequality:

$\dfrac 1 2 \cmod z \le \cmod {\exp z - 1} \le \dfrac 3 2 \cmod z$
$\blacksquare$


Also see
Bounds for Complex Logarithm




