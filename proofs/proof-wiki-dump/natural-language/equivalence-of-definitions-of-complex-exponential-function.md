# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Complex_Exponential_Function



Theorem
The following definitions of the concept of the complex exponential function are equivalent:

As a Power Series Expansion
The exponential function can be defined as a (complex) power series:










\(\ds \forall z \in \C: \, \)



\(\ds \exp z\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {z^n} {n!}\)




















\(\ds \)

\(=\)







\(\ds 1 + \frac z {1!} + \frac {z^2} {2!} + \frac {z^3} {3!} + \cdots + \frac {z^n} {n!} + \cdots\)









By Real Functions
The exponential function can be defined by the real exponential, sine and cosine functions:

$\exp z := e^x \paren {\cos y + i \sin y}$
where $z = x + i y$ with $x, y \in \R$.
Here, $e^x$ denotes the real exponential function, which must be defined first.

As a Limit of a Sequence
The exponential function can be defined as a limit of a sequence:

$\ds \exp z := \lim_{n \mathop \to \infty} \paren {1 + \dfrac z n}^n$
As the Solution of a Differential Equation
The exponential function can be defined as the unique particular solution $y = \map f z$ to the first order ODE:

$\dfrac {\d y} {\d z} = y$
satisfying the initial condition $\map f 0 = 1$.
That is, the defining property of $\exp$ is that it is its own derivative.


Proof
From Radius of Convergence of Power Series over Factorial: Complex Case, it follows that the power series $\ds \sum_{n \mathop = 0}^\infty \dfrac {z^n} {n!}$ is absolutely convergent over the entirety of $\C$.
Hence, the definition of $\exp z$ as a power series is valid.

It remains to demonstrate the logical equivalence of all the definitions.


Power Series Expansion equivalent to Solution of Differential Equation
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
$\Box$


Power Series Expansion equivalent to Definition by Real Functions
We have the result:

Power Series Expansion equivalent to Solution of Differential Equation
which gives that the definition of $\exp z$ as the power series:

$\exp z := \ds \sum_{n \mathop = 0}^\infty \frac {z^n} {n!}$
is equivalent to the definition of $\exp z$ as the solution of the differential equation:

$\dfrac {\d y} {\d z} = y$
satisfying the initial condition $y \paren 0 = 1$.

Let:

$e: \R \to \R$ denote the real exponential function
$\sin: \R \to \R$ denote the real sine function
$\cos: \R \to \R$ denote the real cosine function.

Then:














\(\ds \exp z\)

\(=\)







\(\ds \map \exp {x + i y}\)





where $x, y \in \R$














\(\ds \)

\(=\)







\(\ds \map \exp x \map \exp {i y}\)





Exponential of Sum: Complex Numbers














\(\ds \)

\(=\)







\(\ds e^x \map \exp {i y}\)





Definition (as Power Series Expansion) agrees with Definition of Real Exponential for all $x \in \R$














\(\ds \)

\(=\)







\(\ds e^x \paren {\cos y + i \sin y}\)





Euler's Formula, which can be proven using Definition as Power Series Expansion



$\Box$


Power Series Expansion equivalent to Limit of Sequence
Fix $z \in \C$.
For every $r, n \in \N$, define:

$\map {v_r} n = \dbinom n r \paren {\dfrac z n}^r$
Also, for every $r \in \N$, define:

$M_r = \dfrac {\size z^r} {r!}$
Then:














\(\ds \size {\map {v_r} n}\)

\(=\)







\(\ds \binom n r \frac {\size z^r} {n^r}\)





Complex Modulus of Product of Complex Numbers














\(\ds \)

\(\le\)







\(\ds M_r\)





Binomial Coefficient over Power Not Greater than Reciprocal of Factorial



Furthermore, by Radius of Convergence of Power Series over Factorial:

$\ds \sum_{r \mathop = 0}^\infty M_r$ converges

Now, define:

$w_r = \dfrac {z^r} {r!}$
By Limit to Infinity of Binomial Coefficient over Power:

$\ds \lim_{n \mathop \to \infty} \map {v_r} n = w_r$

Hence:














\(\ds \lim_{n \mathop \to \infty} \paren {1 + \frac z n}^n\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \sum_{r \mathop = 0}^n \map {v_r} n\)





Binomial Theorem














\(\ds \)

\(=\)







\(\ds \sum_{r \mathop = 0}^\infty w_r\)





Tannery's Theorem, with $p_n = n$














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {z^n} {n!}\)










$\blacksquare$





