# 

Source: https://proofwiki.org/wiki/Bounds_for_Complex_Logarithm



Theorem
Let $\ln$ denote the complex logarithm.
Let $z \in \C$ with $\cmod z \le \dfrac 1 2$.

Then:

$\dfrac 1 2 \cmod z \le \cmod {\map \ln {1 + z} } \le \dfrac 3 2 \cmod z$


Proof
By definition of complex logarithm:

$-\map \ln {1 + z} = \ds \sum_{n \mathop = 1}^\infty \frac {\paren {-z}^n} n$
Thus














\(\ds \cmod {1 - \frac {\map \ln {1 + z} } z}\)

\(=\)







\(\ds \cmod {\sum_{n \mathop = 2}^\infty \frac {\paren {-1}^n z^{n - 1} }n}\)





Linear Combination of Convergent Series














\(\ds \)

\(\le\)







\(\ds \sum_{n \mathop = 2}^\infty \cmod {\frac {\paren {-z}^{n - 1} } n}\)





Triangle Inequality for Series














\(\ds \)

\(\le\)







\(\ds \sum_{n \mathop = 2}^\infty \frac {\cmod z^{n - 1} } 2\)





$n \ge 2$














\(\ds \)

\(=\)







\(\ds \frac {\cmod z / 2} {1 - \cmod z}\)





Sum of Infinite Geometric Sequence














\(\ds \)

\(\le\)







\(\ds \frac 1 2\)





$\cmod z \le \dfrac 1 2$



By the Triangle Inequality:

$\dfrac 1 2 \le \cmod {\dfrac {\map \ln {1 + z} } z} \le \dfrac 3 2$
$\blacksquare$


Also see
Bounds of Natural Logarithm
Bounds for Complex Exponential


Sources
1973: John B. Conway: Functions of One Complex Variable ... (previous) ... (next) $\text {VII}$: Compact and Convergence in the Space of Analytic Functions: $\S 5$: Weierstrass Factorization Theorem: $5.3$




