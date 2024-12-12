# 

Source: https://proofwiki.org/wiki/Binet%27s_Formula_for_Logarithm_of_Gamma_Function/Formulation_2



Theorem
Let $z$ be a complex number with a positive real part.
Then: 

$\ds \Ln \map \Gamma z = \paren {z - \frac 1 2} \Ln z - z + \frac 1 2 \ln 2 \pi + 2 \int_0^\infty \frac {\map \arctan {t / z} } {e^{2 \pi t} - 1} \rd t$
where: 

$\Gamma$ is the Gamma function
$\Ln$ is the principal branch of the complex logarithm.


Proof
We have:














\(\ds \map {\dfrac {\d^2} {\d z^2} } {\Ln \map \Gamma z }\)

\(=\)







\(\ds \map {\dfrac {\d} {\d z} } {\map \psi z }\)





Definition of Digamma Function














\(\ds \)

\(=\)







\(\ds \paren {-1}^{1 + 1} \map \Gamma {1 + 1} \map \zeta {1 + 1, z}\)





Polygamma Function in terms of Hurwitz Zeta Function














\(\ds \)

\(=\)







\(\ds \map \Gamma 2 \map \zeta {2, z}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \dfrac 1 {\paren {z + k}^2 }\)





Definition of Hurwitz Zeta Function and $\map \Gamma 2 = 1$



Recall the Abel-Plana Formula:

$\ds \sum_{n \mathop = 0}^\infty \map f n = \int_0^\infty \map f x \rd x + \dfrac 1 2 \map f 0 + i \int_0^\infty \dfrac {\map f {i t} - \map f {-i t} } {e^{2 \pi t} - 1} \rd t$
Since: 

$\ds \map f z = \dfrac 1 {\paren {z + k}^2 }$
Then:
$\map {f^{\paren k} } z = \paren {-1}^k \paren {k + 1}! \paren {z + k}^{-2 - k}$
where:

$f^{\paren k}$ denotes the $k$th derivative of $f$
Therefore,

$\ds \map f z = \dfrac 1 {\paren {z + k}^2 }$ is analytic for real part $\map \Re z > 0$.
Furthermore, since the Hurwitz Zeta Function is defined for $\set {\map \Re s > 1, a \ne 0, -1, -2, \cdots}$,
Therefore:

$\ds \sum_{k \mathop = 0}^\infty \dfrac 1 {\paren {z + k}^2 }$ converges for real part $\map \Re z > 0$.
We also have that:

$\ds \lim_{y \mathop \to \infty} \size {\dfrac 1 {\paren {\paren {x \pm i y} + k}^2 } } e^{-2 \pi y} = 0$ uniformly in $x$ on every finite interval and
$\ds \int_0^{\infty} \size {\dfrac 1 {\paren {\paren {x \pm i y} + k}^2 } } e^{-2 \pi y} \rd y$ exists for every $x > 0$ and tends to $0$ as $x \to \infty$.
Therefore, we are justified in invoking the Abel-Plana Formula:














\(\ds \sum_{k \mathop = 0}^\infty \frac 1 {\paren {z + k}^2 }\)

\(=\)







\(\ds \int_0^\infty \frac 1 {\paren {z + x}^2 } \rd x + \dfrac 1 2 \frac 1 {\paren {z + 0}^2 } + i \int_0^\infty \dfrac {\dfrac 1 {\paren {z + i t}^2 } - \dfrac 1 {\paren {z - i t}^2 } } {e^{2 \pi t} - 1} \rd t\)





Abel-Plana Formula














\(\ds \)

\(=\)







\(\ds -\intlimits {\dfrac 1 {z + x} } 0 \infty + \frac 1 {2 z^2} + i \int_0^\infty \paren {\dfrac {\paren {z - i t}^2 - \paren {z + i t}^2 } {\paren {z^2 + t^2}^2 } } \dfrac 1 {e^{2 \pi t} - 1} \rd t\)





Primitive of Power and Difference of Two Squares: $x^2 - y^2 = \paren {x + y} \paren {x - y}$














\(\ds \)

\(=\)







\(\ds \frac 1 z + \frac 1 {2 z^2} + i \int_0^\infty \paren {\dfrac {\paren {\paren {z - i t} - \paren {z + i t} } \paren {\paren {z - i t} + \paren {z + i t} } } {\paren {z^2 + t^2}^2 } } \dfrac 1 {e^{2 \pi t} - 1} \rd t\)





Difference of Two Squares: $x^2 - y^2 = \paren {x + y} \paren {x - y}$














\(\ds \)

\(=\)







\(\ds \frac 1 z + \frac 1 {2 z^2} + i \int_0^\infty \paren {\dfrac {\paren {-2 i t} \paren {2 z} } {\paren {z^2 + t^2}^2 } } \dfrac 1 {e^{2 \pi t} - 1} \rd t\)




















\(\ds \)

\(=\)







\(\ds \frac 1 z + \frac 1 {2 z^2} + 4 \int_0^\infty \paren {\dfrac {t z } {\paren {z^2 + t^2}^2 } } \dfrac 1 {e^{2 \pi t} - 1} \rd t\)














\(\ds \leadsto \ \ \)





\(\ds \map {\dfrac {\d^2} {\d z^2} } {\Ln \map \Gamma z }\)

\(=\)







\(\ds \frac 1 z + \frac 1 {2 z^2} + 4 \int_0^\infty \paren {\dfrac z {\paren {z^2 + t^2}^2 } } \dfrac t {e^{2 \pi t} - 1} \rd t\)









From the Fundamental Theorem of Calculus, we have $\ds \int \int \map {\dfrac {\d^2} {\d z^2} } {\Ln \map \Gamma z } \rd z \rd z = \Ln \map \Gamma z $
Therefore:














\(\ds \int \int \map {\dfrac {\d^2} {\d z^2} } {\Ln \map \Gamma z } \rd z \rd z\)

\(=\)







\(\ds \int \int \paren {\frac 1 z + \frac 1 {2 z^2} + 4 \int_0^\infty \paren {\dfrac z {\paren {z^2 + t^2}^2 } } \dfrac t {e^{2 \pi t} - 1} \rd t} \rd z \rd z\)














\(\ds \leadsto \ \ \)





\(\ds \map \Ln {\map \Gamma {z } }\)

\(=\)







\(\ds \int \paren {\map \ln z - \frac 1 {2 z} + C_1 - 2 \int_0^\infty \paren {\dfrac 1 {\paren {z^2 + t^2} } } \dfrac t {e^{2 \pi t} - 1} \rd t} \rd z\)





Primitive of Reciprocal, Primitive of Power, Primitive of x over x squared plus a squared squared














\(\ds \)

\(=\)







\(\ds \int \paren {\map \ln z - \frac 1 {2 z} + C_1 - 2 \int_0^\infty \paren {\dfrac t {\paren {z^2 + t^2} } \times \frac {\dfrac 1 {z^2} } {\dfrac 1 {z^2} } } \dfrac 1 {e^{2 \pi t} - 1} \rd t} \rd z\)





multiplying top and bottom by $\dfrac 1 {z^2}$














\(\ds \)

\(=\)







\(\ds \int \paren {\map \ln z - \frac 1 {2 z} + C_1 - 2 \int_0^\infty \paren {\dfrac {\dfrac t {z^2} } {\paren {1 + \paren {\dfrac t z}^2} } } \dfrac 1 {e^{2 \pi t} - 1} \rd t} \rd z\)




















\(\ds \)

\(=\)







\(\ds z \map \ln z - z - \frac 1 2 \map \ln z + C_1 z + 2 \int_0^\infty \frac {\map \arctan {t / z} } {e^{2 \pi t} - 1} \rd t + C_2\)





Primitive of Logarithm of x, Primitive of Reciprocal, Primitive of Reciprocal of x squared plus a squared/Arctangent Form














\(\ds \)

\(=\)







\(\ds \paren {z - \frac 1 2} \Ln z + \paren {C_1 - 1} z + 2 \int_0^\infty \frac {\map \arctan {t / z} } {e^{2 \pi t} - 1} \rd t + C_2\)









From Arctangent of Zero is Zero we have:

$\ds \lim_{z \mathop \to \infty} \int_0^\infty \frac {\map \arctan {t / z} } {e^{2 \pi t} - 1} \rd t \to 0$
Therefore, we have:

$\ds \lim_{z \mathop \to \infty} \size {\map \Ln {\map \Gamma {z } } - \paren {z - \frac 1 2} \Ln z - \paren {C_1 - 1} z - C_2} \to 0$

From Binet's Formula for Logarithm of Gamma Function/Formulation 1: Corollary, we have:

$\ds \lim_{z \mathop \to \infty} \size {\Ln \map \Gamma z - \paren {z - \frac 1 2} \Ln z + z - \frac 1 2 \ln 2 \pi } \to 0$
Therefore: $C_1 = 0$ and $C_2 = \dfrac 1 2 \ln 2 \pi$
Therefore:

$\ds \Ln \map \Gamma z = \paren {z - \frac 1 2} \Ln z - z + \frac 1 2 \ln 2 \pi + 2 \int_0^\infty \frac {\map \arctan {t / z} } {e^{2 \pi t} - 1} \rd t$

$\blacksquare$


Source of Name
This entry was named for Jacques Philippe Marie Binet.


Sources
1920: E.T. Whittaker and G.N. Watson: A Course of Modern Analysis (3rd ed.): $12.32$: Binet's second expression for $\log \Gamma \paren z$ in terms of an infinite integral




