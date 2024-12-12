# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Complex_Exponential_Function/Power_Series_Expansion_equivalent_to_Differential_Equation



Theorem
The following definitions of the concept of Complex Exponential Function are equivalent:

As a Power Series Expansion
The exponential function can be defined as a (complex) power series:










\(\ds \forall z \in \C: \, \)



\(\ds \exp z\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {z^n} {n!}\)




















\(\ds \)

\(=\)







\(\ds 1 + \frac z {1!} + \frac {z^2} {2!} + \frac {z^3} {3!} + \cdots + \frac {z^n} {n!} + \cdots\)









As the Solution of a Differential Equation
The exponential function can be defined as the unique particular solution $y = \map f z$ to the first order ODE:

$\dfrac {\d y} {\d z} = y$
satisfying the initial condition $\map f 0 = 1$.
That is, the defining property of $\exp$ is that it is its own derivative.


Proof
Power Series Expansion implies Solution of Differential Equation
Let $\exp z$ be the complex function defined as the power series:

$\exp z := \ds \sum_{n \mathop = 0}^\infty \frac {z^n} {n!}$

Let $y = \ds \sum_{n \mathop = 0}^\infty \frac {z^n} {n!}$.
Then:














\(\ds \dfrac {\d y} {\d z}\)

\(=\)







\(\ds \dfrac \d {\d z} \sum_{n \mathop = 0}^\infty \frac {z^n} {n!}\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac {z^{n - 1} } {\paren {n - 1}!}\)





Derivative of Complex Power Series














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {z^n} {n!}\)





Translation of Index Variable of Summation














\(\ds \)

\(=\)







\(\ds y\)










We show that $\ds \sum_{n \mathop = 0}^\infty \dfrac {z^n} {n!}$ satisfies the initial condition:

$\exp \paren 0 = 1$.

Setting $z = 0$ we find:














\(\ds y \paren 0\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {0^n} {n!}\)




















\(\ds \)

\(=\)







\(\ds \frac {0^0} {0!} + \sum_{n \mathop = 1}^\infty \frac {0^n} {n!}\)




















\(\ds \)

\(=\)







\(\ds \frac {0^0} {0!}\)





as $0^n = 0$ for all $n > 0$














\(\ds \)

\(=\)







\(\ds 1\)





Definition of $0^0$




That is:
$\exp z$ is the particular solution of the differential equation:

$\dfrac {\d y} {\d z} = y$
satisfying the initial condition $\map y 0 = 1$.
$\Box$


Solution of Differential Equation implies Power Series Expansion
Let $\exp z$ be the complex function defined as the particular solution of the differential equation:

$\dfrac {\d y} {\d z} = y$
satisfying the initial condition $\map y 0 = 1$.

Let $f: \C \to \C$ be a solution to the differential equation $\dfrac {\d f} {\d z} = f$ with $f \paren 0 = 1$.
Then Holomorphic Function is Analytic shows that $f$ can be expressed as a power series:

$\ds \sum_{n \mathop = 0}^\infty a_n \paren {z - \xi}^n$
about any $\xi \in \C$.

When $\xi = 0$, we have for all $n \in \N_{\ge 1}$:














\(\ds a_n\)

\(=\)







\(\ds \dfrac {\map {f^{\paren n} } 0} {n!}\)





Power Series is Taylor Series














\(\ds \)

\(=\)







\(\ds \dfrac {\map {f^{\paren {n - 1} } } 0} {n!}\)





as $\map {f^{\paren n} } 0 = \map f 0 = \map {f^{\paren {n - 1} } } 0$














\(\ds \)

\(=\)







\(\ds \dfrac 1 n a_{n - 1}\)





Power Series is Taylor Series



As $a_0 = \dfrac {\map {f^{\paren 0} } 0} {0!} = 1$ by the initial condition, it follows inductively that:

$a_n = \dfrac 1 {n!}$
Hence:

$\ds \map f z = \sum_{n \mathop = 0}^\infty \dfrac 1 {n!} z^n$
$\blacksquare$





