# 

Source: https://proofwiki.org/wiki/Euler_Formula_for_Sine_Function/Complex_Numbers



Theorem













\(\ds \sin z\)

\(=\)







\(\ds z \prod_{n \mathop = 1}^\infty \paren {1 - \frac {z^2} {n^2 \pi^2} }\)




















\(\ds \)

\(=\)







\(\ds z \paren {1 - \dfrac {z^2} {\pi^2} } \paren {1 - \dfrac {z^2} {4 \pi^2} } \paren {1 - \dfrac {z^2} {9 \pi^2} } \dotsm\)









for all $z \in \C$.


Proof 1
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


Proof 2
For $z \in \C$ and $n \in \N_{> 0}$, let:

$\map {f_n} z = \dfrac 1 2 \paren {\paren {1 + \dfrac z n}^n - \paren {1 - \dfrac z n}^n}$
Then $\map {f_n} z = 0$ if and only if:














\(\ds \paren {1 + \dfrac z n}^n\)

\(=\)







\(\ds \paren {1 - \dfrac z n}^n\)














\(\ds \leadstoandfrom \ \ \)





\(\ds 1 + \frac z n\)

\(=\)







\(\ds \paren {1 - \dfrac z n} e^{2 \pi i \frac k n}\)





for $k \in \Z$








\(\ds \leadstoandfrom \ \ \)





\(\ds z\)

\(=\)







\(\ds n \frac {e^{2 \pi i \frac k n} - 1} {e^{2 \pi i \frac k n} + 1}\)




















\(\ds \)

\(=\)







\(\ds n i \map \tan {\frac {k \pi} n}\)





Euler's Tangent Identity



Let $n = 2 m + 1$.
Then the roots of $\map {f_{2 m + 1} } z$ are:

$\paren {2 m + 1} i \map \tan {\dfrac {k \pi} {2 m + 1} }$
for $- m \le k \le m$.

Observe that $\map {f_{2 m + 1} } z$ is a polynomial of degree $2 m + 1$. 
Then for some constant $C$, we have:














\(\ds \map {f_{2 m + 1} } z\)

\(=\)







\(\ds C z \prod_{\substack {k \mathop = - m \\ k \mathop \ne 0} }^m \paren {1 - \frac z {\paren {2 m + 1} i \map \tan {k \pi / \paren {2 m + 1} } } }\)





Polynomial Factor Theorem














\(\ds \)

\(=\)







\(\ds C z \prod_{k \mathop = 1}^m \paren {1 + \frac {z^2} {\paren {2 m + 1}^2 \map {\tan^2} {k \pi / \paren {2 m + 1} } } }\)





Tangent Function is Odd



It can be seen from the Binomial Theorem that the coefficient of $z$ in $\map {f_{2 m + 1} } z$ is $1$.
Hence $C = 1$, and we obtain:

$\ds \map {f_{2 m + 1} } z = z \prod_{k \mathop = 1}^m \paren {1 + \frac {z^2} {\paren {2 m + 1}^2 \map {\tan^2} {k \pi / \paren {2 m + 1} } } }$

First we consider $z = x$ where $x$ is a non-negative real number.
Let $l < m$.
Then:

$\ds x \prod_{k \mathop = 1}^l \paren {1 + \frac {x^2} {\paren {2 m + 1}^2 \map {\tan^2} {k \pi / \paren {2 m + 1} } } } \le \map {f_{2 m + 1} } x$
Taking the limit as $m \to \infty$ we have:














\(\ds \lim_{m \mathop \to \infty} x \prod_{k \mathop = 1}^l \paren {1 + \frac {x^2} {k^2 \pi^2} \paren {\frac {k \pi / \paren {2 m + 1} } {\map \tan {k \pi / \paren {2 m + 1} } } }^2}\)

\(\le\)







\(\ds \frac 1 2 \paren {e^x - e^{-x} }\)





Definition of Exponential Function








\(\ds \leadsto \ \ \)





\(\ds x \prod_{k \mathop = 1}^l \paren {1 + \frac {x^2} {k^2 \pi^2} }\)

\(\le\)







\(\ds \sinh x\)





Limit of $\dfrac {\tan x} x$ at Zero and Definition of Hyperbolic Sine



By Tangent Inequality, we have:

$\map \tan {\dfrac {k \pi} {2 m + 1} } \ge \dfrac {k \pi} {2 m + 1}$
hence:

$\ds \map {f_{2 l + 1} } x \le x \prod_{k \mathop = 1}^l \paren {1 + \frac {x^2} {k^2 \pi^2} } \le \sinh x$
Taking the limit as $l \to \infty$ we have by Squeeze Theorem:

$(1): \quad \ds x \prod_{k \mathop = 1}^\infty \paren {1 + \frac {x^2} {k^2 \pi^2} } = \sinh x$

Now let $1 < l < m$.
By Complex Modulus of Product of Complex Numbers and the Triangle Inequality, we can deduce:














\(\ds \)

\(\)







\(\ds \cmod {\map {f_{2 m + 1} } z - z \prod_{k \mathop = 1}^l \paren {1 + \frac {z^2} {\paren {2 m + 1}^2 \map {\tan^2} {k \pi / \paren {2 m + 1} } } } }\)




















\(\ds \)

\(=\)







\(\ds \cmod z \cmod {\prod_{k \mathop = 1}^l \paren {1 + \frac {z^2} {\paren {2 m + 1}^2 \map {\tan^2} {k \pi / \paren {2 m + 1} } } } } \cdot \cmod {\prod_{k \mathop = l + 1}^m \paren {1 + \frac {z^2} {\paren {2 m + 1}^2 \map {\tan^2} {k \pi / \paren {2 m + 1} } } } - 1}\)




















\(\ds \)

\(\le\)







\(\ds \cmod z \paren {\prod_{k \mathop = 1}^l \paren {1 + \frac {\cmod z^2} {\paren {2 m + 1}^2 \map {\tan^2} {k \pi / \paren {2 m + 1} } } } } \cdot \paren {\prod_{k \mathop = l + 1}^m \paren {1 + \frac {\cmod z^2} {\paren {2 m + 1}^2 \map {\tan^2} {k \pi / \paren {2 m + 1} } } } - 1}\)




















\(\ds \)

\(=\)







\(\ds \map {f_{2 m + 1} } {\cmod z} - \cmod z \prod_{k \mathop = 1}^l \paren {1 + \frac {\cmod z^2} {\paren {2 m + 1}^2 \map {\tan^2} {k \pi / \paren {2 m + 1} } } }\)









Taking the limit as $m \to \infty$ we have:

$\ds \cmod {\sinh z - z \prod_{k \mathop = 1}^l \paren {1 + \frac {z^2} {k^2 \pi^2} } } \le \sinh \cmod z - \cmod z \prod_{k \mathop = 1}^l \paren {1 + \frac {\cmod z^2} {k^2 \pi^2} }$

Now take the limit as $l \to \infty$.
By $(1)$ and Squeeze Theorem, we have:

$\ds \sinh z = z \prod_{k \mathop = 1}^\infty \paren {1 + \frac {z^2} {k^2 \pi^2} }$
Finally, substituting $z \mapsto i z$, we obtain:

$\ds \sin z = z \prod_{k \mathop = 1}^\infty \paren {1 - \frac {z^2} {k^2 \pi^2} }$
$\blacksquare$


Proof 3













\(\ds z \prod_{n \mathop = 1}^\infty \paren {1 - \frac {z^2} {n^2 \pi^2} }\)

\(=\)







\(\ds \pi z \prod_{n \mathop = 1}^\infty \paren {1 - \frac {\pi^2 z^2} {n^2 \pi^2} }\)





$z \to \pi z$














\(\ds \)

\(=\)







\(\ds \pi z \prod_{n \mathop = 1}^\infty \paren {1 - \frac { z^2} {n^2} }\)





$\pi^2$ cancels














\(\ds \)

\(=\)







\(\ds \pi z \prod_{n \mathop = 1}^\infty \paren {\frac {n^2 - z^2 } {n^2 } }\)




















\(\ds \)

\(=\)







\(\ds \pi z \prod_{n \mathop = 1}^\infty \paren {\frac {\paren {n + z} \paren {n - z} } {n^2 } }\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds \prod_{n \mathop = 1}^\infty \paren {\frac n {n - \frac 1 2} }^2 \paren {\frac {n - 1 + z} {n + z} } \prod_{n \mathop = 1}^\infty \paren {\frac {\paren {n + z} \paren {n - z} } {n^2 } }\)





Multiple of Pi as Infinite Product














\(\ds \)

\(=\)







\(\ds \prod_{n \mathop = 1}^\infty \paren {\frac {\paren {n - 1 + z} \paren {n - z} } {\paren {n - \frac 1 2}^2 } }\)





$n^2$ and $\paren {n + z}$ cancels














\(\ds \)

\(=\)







\(\ds \frac { \map \Gamma {\dfrac 1 2} \map \Gamma {\dfrac 1 2} } {\map \Gamma z \map \Gamma {1 - z} }\)





Infinite Product of Product of Sequence of n plus alpha over Sequence of n plus beta














\(\ds \)

\(=\)







\(\ds \frac {\sqrt \pi \times \sqrt \pi \times \map \sin {\pi z} } \pi\)





Euler's Reflection Formula, Gamma Function of One Half














\(\ds \)

\(=\)







\(\ds \sin {\pi z}\)









$\blacksquare$





