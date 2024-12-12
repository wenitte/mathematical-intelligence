# 

Source: https://proofwiki.org/wiki/Euler_Formula_for_Sine_Function/Complex_Numbers/Proof_1

Theorem













\(\ds \sin z\)

\(=\)







\(\ds z \prod_{n \mathop = 1}^\infty \paren {1 - \frac {z^2} {n^2 \pi^2} }\)




















\(\ds \)

\(=\)







\(\ds z \paren {1 - \dfrac {z^2} {\pi^2} } \paren {1 - \dfrac {z^2} {4 \pi^2} } \paren {1 - \dfrac {z^2} {9 \pi^2} } \dotsm\)









for all $z \in \C$.


Proof
For $z \in \C$ and $n \in \N$, let:

$\ds \map {I_n} z = \int_0^{\pi / 2} \cos {z t} \cos^n t \rd t $
Observe that $\map {I_0} 0 = \dfrac {\pi} 2$ and:














\(\ds \map {I_0} z\)

\(=\)







\(\ds \int_0^{\pi / 2} \cos {z t} \rd t\)




















\(\ds \)

\(=\)







\(\ds \frac 1 z \map \sin {\frac {\pi z} 2}\)









which yields:

$(1): \quad \map \sin {\dfrac {\pi z} 2} = \dfrac {\pi z} 2 \dfrac {\map {I_0} z} {\map {I_0} 0}$

Integrating by parts twice with $n \ge 2$, we have:














\(\ds z \map {I_n} z\)

\(=\)







\(\ds n \int_0^{\pi / 2} \sin {z t} \cos^{n - 1} t \sin t \rd t\)




















\(\ds z^2 \map {I_n} z\)

\(=\)







\(\ds n \int_0^{\pi / 2} \cos {z t} \paren {\cos^n t - \paren {n - 1} \cos^{n - 2} t \sin^2 t} \rd t\)




















\(\ds \)

\(=\)







\(\ds n \int_0^{\pi / 2} \cos {z t} \paren {n \cos^n t - \paren {n - 1} \cos^{n - 2} t } \rd t\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds n^2 \map {I_n} z - n \paren {n - 1} \map {I_{n - 2} } z\)









which yields the reduction formula:

$n \paren {n - 1} \map {I_{n - 2} } z = \paren {n^2 - z^2} \map {I_n} z$
Substituting $z = 0$ we obtain:

$n \paren {n - 1} \map {I_{n - 2} } 0 = n^2 \map {I_n} 0$
From Shape of Cosine Function, it is clear that $\map {I_n} 0 > 0$ for $n \ge 0 $.
Therefore we can divide the two equations to get:

$(2): \quad \dfrac {\map {I_{n - 2} } z} {\map {I_{n - 2} } 0} = \paren {1 - \dfrac {z^2} {n^2} } \dfrac {\map {I_n} z} {\map {I_n} 0}$

We have:














\(\ds \cmod {1 - \cos {z t} }\)

\(=\)







\(\ds \cmod {1 - \map \cos {x + i y} t}\)




















\(\ds \)

\(=\)







\(\ds \cmod {1 - \cos {x t} \cos {i y t} + \sin x t \sin {i y t} }\)





Cosine of Sum














\(\ds \)

\(=\)







\(\ds \cmod {1 - \cos {x t} \cosh {y t} + i \sin {x t} \sinh {y t} }\)





Hyperbolic Sine in terms of Sine and Hyperbolic Cosine in terms of Cosine














\(\ds \)

\(=\)







\(\ds \sqrt {\paren {1 - \cos {x t} \cosh {y t} }^2 + \paren {\sin {x t} \sinh {y t} }^2}\)




















\(\ds \)

\(=\)







\(\ds \sqrt {4 \map {\sinh^4} {\frac {y t} 2} + 8 \map {\sinh^2} {\frac {y t} 2} \map {\sin^2} {\frac {x t} 2} + 4 \map {\sin^4} {\frac {x t} 2} }\)





Double Angle Formulas














\(\ds \)

\(=\)







\(\ds 2 \map {\sinh^2} {\frac {y t} 2} + 2 \sin^2 {\frac {x t} 2}\)









From Sine Inequality we have that $2 \map {\sin^2} {\dfrac {x t} 2} \le \dfrac 1 2 x^2 t^2$.
By Lemma 1, $\dfrac {\sinh x} x$ is an increasing function for $x \ge 0$, so for $t \in \closedint 0 {\dfrac {\pi} 2}$:














\(\ds \frac {\map \sinh {y t / 2} } {y t / 2}\)

\(\le\)







\(\ds \frac {\map \sinh {y \pi / 4} } {y \pi /  4}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\map {\sinh^2} {y t / 2} } {\paren {y t / 2}^2}\)

\(\le\)







\(\ds \frac {\map {\sinh^2} {y \pi / 4} } {\paren {y \pi / 4}^2}\)














\(\ds \leadsto \ \ \)





\(\ds 2 \map {\sinh^2} {y t / 2}\)

\(\le\)







\(\ds \frac 1 2 \frac {\map {\sinh^2} {y \pi / 4} } {\paren {y \pi / 4}^2} t^2\)









So we deduce:














\(\ds \cmod {1 - \cos {z t} }\)

\(\le\)







\(\ds \frac 1 2 \paren {x^2 + \frac {\map {\sinh^2} {y \pi / 4} } {\paren {\pi / 4}^2} } t^2\)




















\(\ds \)

\(=\)







\(\ds \map C {x, y} t^2\)





where $C$ is a non-negative function of $x$ and $y$



By Relative Sizes of Definite Integrals we have:














\(\ds \cmod {\map {I_n} 0 - \map {I_n} z}\)

\(=\)







\(\ds \cmod {\int_0^{\pi / 2} \paren {1 - \cos {z t} } \cos^n t \rd t}\)




















\(\ds \)

\(\le\)







\(\ds \map C {x, y} \int_0^{\pi / 2} t^2 \cos^n t \rd t\)





Cosine Inequality














\(\ds \)

\(\le\)







\(\ds \map C {x, y} \int_0^{\pi / 2} t \cos^{n - 1} t \sin t \rd t\)





Tangent Inequality














\(\ds \)

\(=\)







\(\ds \frac {\map C {x, y} } n \int_0^{\pi / 2} \cos^n t \rd t\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {\map C {x, y} } n \map {I_n} 0\)









which yields the inequality:

$\cmod {1 - \dfrac {\map {I_n} z} {\map {I_n} 0} } \le \dfrac {\map C {x, y} } n$
It follows from Squeeze Theorem that:

$(3): \quad \ds \lim_{n \mathop \to \infty} \frac {\map {I_n} z} {\map {I_n} 0} = 1$

Consider the equation, for even $n$:

$\ds \map \sin {\dfrac {\pi z} 2} = \dfrac {\pi z} 2 \prod_{i \mathop = 1}^{n / 2} \paren {1 - \dfrac {z^2} {\paren {2 i}^2} } \dfrac {\map {I_n} z} {\map {I_n} 0}$
This is true for $n = 0$ by $(1)$.
Suppose it is true for some $n = k$.
Then:














\(\ds \map \sin {\frac {\pi z} 2}\)

\(=\)







\(\ds \frac {\pi z} 2 \prod_{i \mathop = 1}^{k / 2} \paren {1 - \frac {z^2} {\paren {2 i}^2} } \frac {\map {I_k} z} {\map {I_k} 0}\)




















\(\ds \)

\(=\)







\(\ds \frac {\pi z} 2 \prod_{i \mathop = 1}^{\paren {k + 2} / 2} \paren {1 - \frac {z^2} {\paren {2 i}^2} } \frac {\map {I_{k + 2} } z} {\map {I_{k + 2} } 0}\)





by $(2)$



So it is true for all even $n$ by induction.
Taking the limit as $n \to \infty$ we have:














\(\ds \map \sin {\frac {\pi z} 2}\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \frac {\pi z} 2 \prod_{i \mathop = 1}^{n / 2} \paren {1 - \frac {z^2} {\paren {2 i}^2} } \frac {\map {I_n} z} {\map {I_n} 0}\)




















\(\ds \)

\(=\)







\(\ds \frac {\pi z} 2 \prod_{i \mathop = 1}^\infty \paren {1 - \frac {z^2} {\paren {2 i}^2} } \lim_{n \mathop \to \infty} \frac {\map {I_n} z} {\map {I_n} 0}\)





Product Rule for Limits of Complex Functions














\(\ds \)

\(=\)







\(\ds \frac {\pi z} 2 \prod_{i \mathop = 1}^\infty \paren {1 - \frac {z^2} {\paren {2 i}^2} }\)





by $(3)$



or equivalently, letting $\dfrac {\pi z} 2 \mapsto z$:

$\ds \sin z = z \prod_{n \mathop = 1}^\infty \paren {1 - \frac {z^2} {n^2 \pi^2} }$
$\blacksquare$





