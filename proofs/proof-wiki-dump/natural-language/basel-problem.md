# 

Source: https://proofwiki.org/wiki/Basel_Problem



Theorem
$\ds \map \zeta 2 = \sum_{n \mathop = 1}^\infty {\frac 1 {n^2} } = \frac {\pi^2} 6$
where $\zeta$ denotes the Riemann zeta function.


Proof 1
By Riemann Zeta Function as a Multiple Integral, 

$\ds \map \zeta 2 = \int_0^1 \int_0^1 \frac 1 {1 - x y} \rd x\rd y$
Let $\tuple {u, v} = \tuple {\dfrac {x + y} 2, \dfrac{y - x} 2}$ so that:

$\tuple {x, y} = \tuple {u - v, u + v}$
The Jacobian is:

$\size J = \size {\dfrac {\partial \tuple {x, y} } {\partial \tuple {u, v} } } = 2$
Then, by Change of Variables Theorem (Multivariable Calculus):

$\map \zeta 2 = \ds 2 \iint \limits_S \frac {\d u \rd v} {1 - u^2 + v^2}$
where $S$ is the square defined by the coordinates:

$\tuple {0, 0}, \ \tuple {\dfrac 1 2, -\dfrac 1 2}, \ \tuple {1, 0}, \ \tuple {\dfrac 1 2, \dfrac 1 2}$
Exploiting the symmetry of the square and the function over the $u$-axis, we have:

$\map \zeta 2 = \ds 4 \paren {\int_0^{\frac 1 2} \! \int_0^u \frac {\d v \rd u} {1 - u^2 + v^2} + \int_{\frac 1 2}^1 \! \int_0^{1 - u} \frac {\d v \rd u} {1 - u^2 + v^2} }$
Factoring $1 - u^2$ gives us:

$\map \zeta 2 = \ds 4 \paren {\int_0^{\frac 1 2} \! \int_0^u \frac 1 {1 - u^2} \frac {\d v \rd u} {\frac {v^2} {1 - u^2} + 1} + \int_{\frac 1 2}^1 \! \int_0^{1 - u} \frac 1 {1 - u^2} \frac {\d v \rd u} {\frac {v^2} {1 - u^2} + 1} }$
and letting:

$s = \dfrac v {\sqrt {1 - u^2} }, \rd s = \dfrac 1 {\sqrt {1 - u^2} }$
allows us to make a substitution into each integral, giving:

$\map \zeta 2 = \ds 4 \paren {\int_0^{\frac 1 2} \frac 1 {\sqrt {1 - u^2} } \map \arctan {\frac u {\sqrt {1 - u^2} } } \rd u + \int_{\frac 1 2}^1 \frac 1 {\sqrt {1 - u^2} } \map \arctan {\frac {1 - u} {\sqrt {1 - u^2} } } \rd u}$
Consider the right triangle with sides $1$, $x$ and $\sqrt {1 - x^2}$.
Applying Pythagoras's Theorem:

$\arcsin x = \arctan \dfrac x {\sqrt {1 - x^2} }$
Let:














\(\ds \theta\)

\(=\)







\(\ds \map \arctan {\dfrac{1 - u} {\sqrt{1 - u^2} } }\)














\(\ds \leadsto \ \ \)





\(\ds \tan^2 \theta\)

\(=\)







\(\ds \frac {1 - u} {1 + u}\)














\(\ds \leadsto \ \ \)





\(\ds \sec^2 \theta\)

\(=\)







\(\ds \frac 2 {1 + u}\)





Difference of Squares of Secant and Tangent








\(\ds \leadsto \ \ \)





\(\ds \cos 2 \theta\)

\(=\)







\(\ds u\)





Double Angle Formula for Cosine: Corollary $1$








\(\ds \leadsto \ \ \)





\(\ds \theta\)

\(=\)







\(\ds \dfrac 1 2 \arccos u\)





taking arccosines of both sides














\(\ds \)

\(=\)







\(\ds \frac \pi 4 - \frac {\arcsin u} 2\)





Sine of Complement equals Cosine




This allows us to convert the arctangents from the integrals into arcsines:

$\map \zeta 2 = \ds 4 \paren {\int_0^{\frac 1 2} {\frac {\arcsin u} {\sqrt {1 - u^2} } \rd u} + \int_{\frac 1 2}^1 {\frac 1 {\sqrt {1 - u^2} } \paren {\frac \pi 4 - \frac {\arcsin u} 2} \rd u} }$
Substituting:

$s = \arcsin u$, $\rd s = \dfrac 1 {\sqrt{1 - u^2} }$
into the arcsines, and splitting the second integral:

$\map \zeta 2 = 4 \paren {\dfrac {\pi^2} {72} + \dfrac {\pi^2} {36} } = \dfrac {\pi^2} 6$
$\blacksquare$


Proof 2
Let:

$\ds P_k = x \prod_{n \mathop = 1}^k \paren {1 - \frac {x^2} {n^2 \pi^2} }$
We note that:














\(\ds P_k - P_{k - 1}\)

\(=\)







\(\ds \paren {-\frac {x^3} {k^2 \pi^2} } \prod_{n \mathop = 1}^{k - 1} \paren {1 - \frac {x^2} {n^2 \pi^2} }\)




















\(\ds \)

\(=\)







\(\ds -\frac {x^3} {k^2 \pi ^2} + \map O {x^5}\)





Definition of Big-O Notation




By Telescoping Series we find that the coefficient of $x^3$ in $P_k$ is given by:

$(1): \quad \ds -\frac 1 {\pi^2} \sum_{n \mathop = 1}^k \frac 1 {n^2}$
We also have the following two representations of the Sine of x:














\(\ds \sin x\)

\(=\)







\(\ds x \prod_{n \mathop = 1}^\infty \paren {1 - \dfrac {x^2} {n^2 \pi^2} }\)





Euler Formula for Sine Function
















\(\ds \sin x\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \dfrac {x^{2 n + 1} } {\paren {2 n + 1}!} = x - \dfrac {x^3} {3!} + \dfrac {x^5} {5!} - \dfrac {x^7} {7!} + \cdots\)





Power Series Expansion for Sine Function



So by taking the limit as $k \to \infty$ in $(1)$ and equating with the coefficient of $x^3$ in the Power Series Expansion for Sine Function, we can deduce:

$\ds -\frac 1 {\pi^2} \sum_{n \mathop = 1}^\infty \frac 1 {n^2} = -\frac 1 {3!}$
hence:

$\ds \sum_{n \mathop = 1}^{\infty} \frac 1 {n^2} = \frac {\pi^2} 6$
$\blacksquare$


Proof 3
Let $x \in \openint 0 {\dfrac \pi 2}$ and let $n$ be a non-negative integer.














\(\ds \frac {\map \cos {2 n + 1} x + i \map \sin {2 n + 1} x} {\sin^{2 n + 1} x}\)

\(=\)







\(\ds \frac {\paren {\cos x + i \sin x}^{2 n + 1} } {\sin^{2 n + 1} x}\)





De Moivre's Formula














\(\ds \)

\(=\)







\(\ds \paren {\cot x + i}^{2 n + 1}\)




















\(\ds \)

\(=\)







\(\ds \sum_{r \mathop = 0}^{2 n + 1} \binom {2 n + 1} r i^r \cot^{2 n + 1 - r} x\)





Binomial Theorem








\(\ds \leadsto \ \ \)





\(\ds \frac {\map \sin {2 n + 1} x} {\sin^{2 n + 1} x}\)

\(=\)







\(\ds \sum_{r \mathop = 0}^n \binom {2 n + 1} {2 r + 1} \paren {-1}^r \cot^{2 \paren {n - r} } x\)





equating imaginary parts



Let $x_k = \dfrac {k \pi} {2 n + 1}$ for $k = 1, 2, \ldots, n$. 
Then:

$\sin \paren {2 n + 1} x_k = 0$
So we have:

$\ds \sum_{r \mathop = 0}^n \binom {2 n + 1} {2 r + 1} \paren {-1}^r \cot^{2 \paren {n - r} } x_k = 0$
for $k = 1, 2, \ldots, n$.
The numbers $x_k$ are all distinct and in the interval $\openint 0 {\dfrac \pi 2}$. 
By Shape of Cotangent Function, $\cot x$ is positive and injective in the interval $\openint 0 {\dfrac \pi 2}$.
Therefore $\cot^2 x$ is also injective in this interval. 
Hence the numbers $c_k = \cot^2 x_k$ are distinct for $k = 1, 2, \ldots, n$. 
These numbers are the $n$ distinct roots of the $n$th degree polynomial:

$\ds \map f c := \sum_{r \mathop = 0}^n \binom {2 n + 1} {2 r + 1} (-1)^r c^{n - r}$
By Viète's Formulas, we can calculate the sum of the roots:

$\ds \sum_{k \mathop = 1}^n \cot^2 x_k = \frac {\binom {2 n + 1} 3} {\binom {2 n + 1} 1} = \frac {2 n \paren {2 n - 1} } 6$
From the Difference of Squares of Cosecant and Cotangent $\cot^2 x = \csc^2 x - 1$ we can similarly deduce:

$\ds \sum_{k \mathop = 1}^n \csc^2 x_k = \frac {2 n \paren {2 n - 1} } 6 + n = \frac {2 n \paren {2 n + 2} } 6$
By Shape of Sine Function, $\sin x$ is positive in the interval $\openint 0 {\dfrac \pi 2}$. 
So from the Tangent Inequality $\sin x < x < \tan x$ for $x \in \openint 0 {\dfrac \pi 2}$, we can deduce that $\cot^2 x < 1 / x^2 < \csc^2 x$ in the same interval.
Summing this inequality from $x_1$ to $x_n$ gives:














\(\ds \frac {2 n \paren {2 n - 1} } 6\)

\(<\)







\(\ds \sum_{k \mathop = 1}^n \paren {\frac {2 n + 1} {k \pi} }^2\)




















\(\ds \)

\(<\)







\(\ds \frac {2 n \paren {2 n + 2} } 6\)










or equivalently:














\(\ds \frac {\pi^2} 6 \frac {2 n \paren {2 n - 1} } {\paren {2 n + 1}^2}\)

\(<\)







\(\ds \sum_{k \mathop = 1}^n \frac 1 {k^2}\)




















\(\ds \)

\(<\)







\(\ds \frac {\pi^2} 6 \frac {2 n \paren {2 n + 2} } {\paren {2 n + 1}^2}\)










By Combination Theorem for Limits of Real Functions, the left hand side and right hand side both tend to $\dfrac {\pi^2} 6$ as $n$ tends to infinity. 
Therefore by the Squeeze Theorem:

$\map \zeta 2 = \ds \sum_{k \mathop = 1}^\infty \frac 1 {k^2} = \frac {\pi^2} 6$
$\blacksquare$


Proof 4
From Sum of Reciprocals of Squares of Odd Integers:

$\ds \sum_{n \mathop = 0}^\infty \frac 1 {\paren {2 n + 1}^2} = \frac {\pi^2} 8$

Hence:














\(\ds \sum_{n \mathop = 1}^\infty \frac 1 {n^2}\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac 1 {\paren {2 n}^2} + \sum_{n \mathop = 0}^\infty \frac 1 {\paren {2 n + 1}^2}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 4 \sum_{n \mathop = 1}^\infty \frac 1 {n^2} + \frac {\pi^2} 8\)














\(\ds \leadsto \ \ \)





\(\ds \sum_{n \mathop = 1}^\infty \frac 1 {n^2}\)

\(=\)







\(\ds \frac {\pi^2} 6\)









$\blacksquare$


Proof 5
Let the function $f_n$ be defined as:

$(1): \quad \map {f_n} x := \dfrac 1 2 + \cos x + \cos 2 x + \cdots + \cos n x$
By Lagrange's Cosine Identity:

$(2): \quad \map {f_n} x = \dfrac {\map \sin {\paren {2 n + 1} x / 2} } {2 \map \sin {x / 2} }$
Let $E_n$ be defined as:














\(\ds E_n\)

\(=\)







\(\ds \int_0^\pi x \map {f_n} x \rd x\)










\(\text {(3)}: \quad\)









\(\ds \)

\(=\)







\(\ds \frac {\pi^2} 4 + \sum_{k \mathop = 1}^n \paren {\frac {\paren {-1}^k - 1} {k^2} }\)





Primitive of $x \cos a x$ and algebra



The terms for even $k$ on the {right hand side are zero, so:

$\ds (4): \quad \dfrac 1 2 E_{2 n - 1} = \dfrac {\pi^2} 8 - \sum_{k \mathop = 1}^n \dfrac 1 {\paren {2 k - 1}^2}$
It remains to be shown that:

$\ds \lim_{n \mathop \to \infty} E_{2 n - 1} = 0$
which will establish:

$\ds (5): \quad \dfrac {\pi^2} 8 = \sum_{k \mathop = 1}^n \dfrac 1 {\paren {2 k - 1}^2}$

Using $(2)$, let $\map g x$ be the function defined as:

$\map g x := \map {\dfrac \d {\d x} } {\dfrac {x / 2} {\map \sin {x /2} } }$
Using Integration by Parts, we obtain:

$\ds (6): \quad E_{2 n - 1} = \dfrac 1 {4 n - 1} \paren {2 + 2 \int_0^\pi \map g x \cos \dfrac {\paren {4 n - 1} x} 2 \rd x}$
during which we use Limit of $\dfrac {\sin x} x$: Corollary:

$\ds \lim_{x \mathop \to 0} \dfrac {x / 2} {\map \sin {x / 2} } = 1$
We have that $\map g x$ is increasing on the interval of integration.
Therefore $\map g x$ is bounded on the interval $\closedint 0 \pi$ by $\map g \pi = \dfrac \pi 2$.
Hence $(5)$ has been established as being true.

Now we divide the (strictly) positive integers into even and odd, and use $(5)$ to obtain:














\(\ds \sum_{k \mathop = 1}^\infty \frac 1 {k^2}\)

\(=\)







\(\ds \sum_{k \mathop = 1}^\infty \frac 1 {\paren {2 k}^2} + \sum_{k \mathop = 1}^\infty \frac 1 {\paren {2 k - 1}^2}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 4 \sum_{k \mathop = 1}^\infty \frac 1 {k^2} + \frac {\pi^2} 8\)














\(\ds \leadsto \ \ \)





\(\ds \frac 3 4 \sum_{k \mathop = 1}^\infty \frac 1 {k^2}\)

\(=\)







\(\ds \frac {\pi^2} 8\)














\(\ds \leadsto \ \ \)





\(\ds \sum_{k \mathop = 1}^\infty \frac 1 {k^2}\)

\(=\)







\(\ds \frac 4 3 \frac {\pi^2} 8\)




















\(\ds \)

\(=\)







\(\ds \frac {\pi^2} 6\)









$\blacksquare$


Proof 6













\(\ds \zeta \left({2}\right)\)

\(=\)







\(\ds \left({-1}\right)^2 \dfrac {B_2 2^1 \pi^2} {2!}\)





Riemann Zeta Function at Even Integers














\(\ds \)

\(=\)







\(\ds \left({-1}\right)^2 \left({\dfrac 1 6}\right) \dfrac {2^1 \pi^2} {2!}\)





Definition of Sequence of Bernoulli Numbers














\(\ds \)

\(=\)







\(\ds \left({\dfrac 1 6}\right) \left({\dfrac 2 2}\right) \pi^2\)





Definition of Factorial














\(\ds \)

\(=\)







\(\ds \dfrac {\pi^2} 6\)





simplifying



$\blacksquare$


Proof 7
By Fourier Series of $x^2$, for $x \in \openint {-\pi} \pi$:

$\ds x^2 = \frac {\pi^2} 3 + \sum_{n \mathop = 1}^\infty \paren {\paren {-1}^n \frac 4 {n^2} \cos n x}$
Letting $x \to \pi$ from the left:














\(\ds \pi^2\)

\(=\)







\(\ds \frac {\pi^2} 3 + \sum_{n \mathop = 1}^\infty \paren {\paren {-1}^n \frac 4 {n^2} \cos \pi x}\)




















\(\ds \pi^2\)

\(=\)







\(\ds \frac {\pi^2} 3 + \sum_{n \mathop = 1}^\infty \paren {\paren {-1}^n \paren {-1}^n \frac 4 {n^2} }\)





Cosine of Multiple of $\pi$














\(\ds \pi^2\)

\(=\)







\(\ds \frac {\pi^2} 3 + 4 \sum_{n \mathop = 1}^\infty \frac 1 {n^2}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {2 \pi^2} 3\)

\(=\)







\(\ds 4 \sum_{n \mathop = 1}^\infty \frac 1 {n^2}\)














\(\ds \leadsto \ \ \)





\(\ds \sum_{n \mathop = 1}^\infty \frac 1 {n^2}\)

\(=\)







\(\ds \frac {\pi^2} 6\)









$\blacksquare$


Proof 8
By Fourier Series of Identity Function over $-\pi$ to $\pi$, for $x \in \openint {-\pi} \pi$:

$\ds x \sim 2 \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n + 1} } n \map \sin {n x}$

Hence:














\(\ds \frac 1 \pi \int_{-\pi}^\pi x^2 \rd x\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \paren {\frac{2 \paren {-1}^{n + 1} } n}^2\)





Parseval's Theorem








\(\ds \leadsto \ \ \)





\(\ds \frac 2 \pi \int_0^\pi x^2 \rd x\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac 4 {n^2}\)





Definite Integral of Even Function








\(\ds \leadsto \ \ \)





\(\ds \frac {2 \pi^2} 3\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac 4 {n^2}\)














\(\ds \leadsto \ \ \)





\(\ds \sum_{n \mathop = 1}^\infty \frac 1 {n^2}\)

\(=\)







\(\ds \frac {\pi^2} 6\)









$\blacksquare$


Proof 9
Let $\map f x$ be the real function defined on $\openint 0 {2 \pi}$ as:

$\map f x = \begin {cases} \paren {x - \pi}^2 & : 0 < x \le \pi \\ \pi^2 & : \pi < x < 2 \pi \end {cases}$
From Fourier Series: Square of x minus pi, Square of pi, its Fourier series can be expressed as:

$\map f x \sim \ds \dfrac {2 \pi^2} 3 + \sum_{n \mathop = 1}^\infty \paren {\frac {2 \cos n x} {n^2} + \paren {\frac {\paren {-1}^n \pi} n + \frac {2 \paren {\paren {-1}^n - 1} } {\pi n^3} } \sin n x}$

Setting $x = 0$:














\(\ds \map f 0\)

\(=\)







\(\ds \frac {2 \pi^2} 3 + \sum_{n \mathop = 1}^\infty \paren {\frac {2 \cos 0} {n^2} + \paren {\frac {\paren {-1}^n \pi} n + \frac {2 \paren {\paren {-1}^n - 1} } {\pi n^3} } \sin 0}\)














\(\ds \leadsto \ \ \)





\(\ds \paren {0 - \pi}^2\)

\(=\)







\(\ds \frac {2 \pi^2} 3 + \sum_{n \mathop = 1}^\infty \paren {\frac {2 \cos 0} {n^2} }\)





Sine of Zero is Zero








\(\ds \leadsto \ \ \)





\(\ds \pi^2\)

\(=\)







\(\ds \frac {2 \pi^2} 3 + 2 \sum_{n \mathop = 1}^\infty \frac 1 {n^2}\)





Cosine of Zero is One








\(\ds \leadsto \ \ \)





\(\ds \frac {\pi^2} 2 - \frac {\pi^2} 3\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac 1 {n^2}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\pi^2} 6\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac 1 {n^2}\)









$\blacksquare$


Proof 10
For $z \ne 0$, from Mittag-Leffler Expansion for Hyperbolic Cotangent Function, we have: 

$\ds \frac 1 {2 z} \paren {\pi \map \coth {\pi z} - \frac 1 z} = \sum_{n \mathop = 1}^\infty \frac 1 {z^2 + n^2}$
Consider the set:

$A = \set {z \in \C : \size z \le \dfrac 1 2}$.
Then for each $n \in \N$ and $z \in A$, we have: 














\(\ds \size {\frac 1 {z^2 + n^2} }\)

\(\le\)







\(\ds \frac 1 {\size {\size z^2 - n^2} }\)





Reverse Triangle Inequality














\(\ds \)

\(\le\)







\(\ds \frac 1 {n^2 - \frac 1 4}\)









For all $n \in \N$, we have: 

$n^2 - \dfrac 1 4 \ge \dfrac 1 2 n^2$
So that: 

$\dfrac 1 {n^2 - \dfrac 1 4} \le \dfrac 2 {n^2}$
We have: 














\(\ds \int_1^\infty \frac 2 {x^2} \rd x\)

\(=\)







\(\ds 2 \intlimits {-\frac 1 x} 1 \infty\)





Fundamental Theorem of Calculus, Primitive of Power














\(\ds \)

\(=\)







\(\ds 2\)




















\(\ds \)

\(<\)







\(\ds \infty\)









So, from the Cauchy Integral Test, we have: 

$\ds \sum_{n \mathop = 1}^\infty \frac 2 {n^2}$ converges.
So, from the Comparison Test: Corollary, we have: 

$\ds \sum_{n \mathop = 1}^\infty \frac 1 {n^2 - \frac 1 4}$ converges.
So by the Weierstrass M-Test, the series:

$\ds \sum_{n \mathop = 1}^\infty \frac 1 {z^2 + n^2}$
converges uniformly on $A$. 
Then from Uniformly Convergent Series of Continuous Functions is Continuous, the function $f : A \to \C$ defined by: 

$\ds \map f z = \sum_{n \mathop = 1}^\infty \frac 1 {z^2 + n^2}$
is continuous.
So:

$\ds \lim_{z \mathop \to 0} \sum_{n \mathop = 1}^\infty \frac 1 {z^2 + n^2} = \sum_{n \mathop = 1}^\infty \frac 1 {n^2}$
We can write: 














\(\ds \frac 1 {2 z} \paren {\pi \map \coth {\pi z} - \frac 1 z}\)

\(=\)







\(\ds \frac 1 {2 z} \paren {\frac {\pi \paren {e^{\pi z} + e^{-\pi z} } } {e^{\pi z} - e^{-\pi z} } - \frac 1 z}\)





Definition of Hyperbolic Cotangent














\(\ds \)

\(=\)







\(\ds \frac 1 {2 z} \paren {\frac {\pi z \paren {e^{2 \pi z} + 1} - e^{2 \pi z} + 1} {z \paren {e^{2 \pi z} - 1} } }\)









so that: 

$\ds \sum_{n \mathop = 1}^\infty \frac 1 {n^2} = \lim_{z \mathop \to 0} \paren {\frac {\pi z \paren {e^{2 \pi z} + 1} - e^{2 \pi z} + 1} {2 z^2 \paren {e^{2 \pi z} - 1} } }$
We have at $z = 0$: 














\(\ds \pi z \paren {e^{2 \pi z} + 1} - e^{2 \pi z} + 1\)

\(=\)







\(\ds \pi \times 0 \times \paren {e^0 + 1} - e^0 + 1\)




















\(\ds \)

\(=\)







\(\ds 1 - e^0\)




















\(\ds \)

\(=\)







\(\ds 0\)





Exponential of Zero



and: 

$2 z^2 \paren {e^{2 \pi z} + 1} = 0$
So by L'Hopital's Rule:














\(\ds \lim_{z \mathop \to 0} \paren {\frac {\pi z \paren {e^{2 \pi z} + 1} - e^{2 \pi z} + 1} {2 z^2 \paren {e^{2 \pi z} - 1} } }\)

\(=\)







\(\ds \lim_{z \mathop \to 0} \paren {\frac {\pi \paren {e^{2 \pi z} + 1} + 2 \pi^2 z e^{2 \pi z} - 2 \pi e^{2 \pi z} } {4 z \paren {e^{2 \pi z} - 1} + 4 \pi z^2 e^{2 \pi z} } }\)





Product Rule for Derivatives, Derivative of Exponential Function, Derivative of Power














\(\ds \)

\(=\)







\(\ds \lim_{z \mathop \to 0} \paren {\frac {2 \pi^2 e^{2 \pi z} + 2 \pi^2 e^{2 \pi z} + 4 \pi^3 z e^{2 \pi z} - 4 \pi^2 e^{2 \pi z} } {4 \paren {e^{2 \pi z} - 1} + 8 \pi z e^{2 \pi z} + 8 \pi z e^{2 \pi z} + 8 \pi^2 z^2 e^{2 \pi z} } }\)





L'Hopital's Rule














\(\ds \)

\(=\)







\(\ds 4 \pi^3 \lim_{z \mathop \to 0} \paren {\frac {z e^{2 \pi z} } {-4 + e^{2 \pi z} \paren {8 \pi^2 z^2 + 16 \pi z + 4} } }\)




















\(\ds \)

\(=\)







\(\ds 4 \pi^3 \lim_{z \mathop \to 0} \paren {\frac {e^{2 \pi z} + 2 \pi z e^{2 \pi z} } {2 \pi e^{2 \pi z} \paren {8 \pi^2 z^2 + 16 \pi z + 4} + e^{2 \pi z} \paren {16 \pi z + 16 \pi} } }\)





L'Hopital's Rule














\(\ds \)

\(=\)







\(\ds 4 \pi^3 \lim_{z \mathop \to 0} \paren {\frac {1 + 2 \pi z} {16 \pi^3 z^2 + 32 \pi^2 z + 8 \pi + 16 \pi z + 16 \pi} }\)




















\(\ds \)

\(=\)







\(\ds \frac {4 \pi^3} {24 \pi}\)




















\(\ds \)

\(=\)







\(\ds \frac {\pi^2} 6\)









giving: 

$\ds \sum_{n \mathop = 1}^\infty \frac 1 {n^2} = \frac {\pi^2} 6$
$\blacksquare$


Historical Note
The Basel Problem was first posed by Pietro Mengoli in $1644$.
Its solution is generally attributed to Leonhard Euler , who solved it in $1734$ and delivered a proof in $1735$.
However, it has also been suggested that it was in fact first solved by Nicolaus I Bernoulli.
Jacob Bernoulli had earlier established that the series was convergent, but had failed to work out what to.
The problem is named after Basel, the home town of Euler as well as of the Bernoulli family.


If only my brother were alive now.
-- Johann Bernoulli


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 19$: Series involving Reciprocals of Powers of Positive Integers: $19.19$
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $3 \cdotp 14159 \, 26535 \, 89793 \, 23846 \, 26433 \, 83279 \, 50288 \, 41972 \ldots$
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): zeta function
1990: William Dunham: Journey Through Genius
1994: H.E. Rose: A Course in Number Theory (2nd ed.) ... (previous) ... (next): Preface to first edition: Prerequisites: $\text {(iv)}$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $3 \cdotp 14159 \, 26535 \, 89793 \, 23846 \, 26433 \, 83279 \, 50288 \, 41971 \ldots$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Riemann zeta function
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Riemann zeta function
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): zeta function




