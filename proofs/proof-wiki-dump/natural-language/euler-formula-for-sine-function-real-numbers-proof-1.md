# 

Source: https://proofwiki.org/wiki/Euler_Formula_for_Sine_Function/Real_Numbers/Proof_1


This page has been identified as a candidate for refactoring of basic complexity.In particular: Parts of this proof have already been presented as results in their own right -- rather than repeat them here, it might be better to link to those resutls.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Theorem













\(\ds \sin x\)

\(=\)







\(\ds x \prod_{n \mathop = 1}^\infty \paren {1 - \frac {x^2} {n^2 \pi^2} }\)




















\(\ds \)

\(=\)







\(\ds x \paren {1 - \dfrac {x^2} {\pi^2} } \paren {1 - \dfrac {x^2} {4 \pi^2} } \paren {1 - \dfrac {x^2} {9 \pi^2} } \dotsm\)









for all $x \in \R$.


Proof
For $x \in \R$ and $n \in \N$, let:

$\ds \map {I_n} x = \int_0^{\pi / 2} \cos {x t} \cos^n t \rd t $
Observe that:

$\map {I_0} 0 = \dfrac {\pi} 2$
and:














\(\ds \map {I_0} x\)

\(=\)







\(\ds \int_0^{\pi / 2} \cos {x t} \rd t\)




















\(\ds \)

\(=\)







\(\ds \frac 1 x \map \sin {\frac {\pi x} 2}\)









which yields:

$(1): \quad \map \sin {\dfrac {\pi x} 2} = \dfrac {\pi x} 2 \dfrac {\map {I_0} x} {\map {I_0} 0}$

Integrating by parts twice with $n \ge 2$, we have:














\(\ds x \map {I_n} x\)

\(=\)







\(\ds n \int_0^{\pi / 2} \sin {x t} \cos^{n - 1} t \sin t \rd t\)




















\(\ds x^2 \map {I_n} x\)

\(=\)







\(\ds n \int_0^{\pi / 2} \cos{x t} \paren {\cos^n t - \paren {n - 1} \cos^{n - 2} t \sin^2 t} \rd t\)




















\(\ds \)

\(=\)







\(\ds n \int_0^{\pi / 2} \cos{x t} \paren {n \cos^n t - \paren {n - 1} \cos^{n - 2} t} \rd t\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds n^2 \map {I_n} x - n \paren {n - 1} \map {I_{n - 2} } x\)









which yields the reduction formula:

$n \paren {n - 1} \map {I_{n - 2} } x = \paren {n^2 - x^2} \map {I_n} x$
Substituting $x = 0$ we obtain:

$n \paren {n - 1} \map {I_{n - 2} } 0 = n^2 \map {I_n} 0$
From Shape of Cosine Function, it is clear that $\map {I_n} 0 > 0$ for $n \ge 0 $.
Therefore we can divide the two equations to get:

$(2): \quad \dfrac {\map {I_{n - 2} } x} {\map {I_{n - 2} } 0} = \paren {1 - \dfrac {x^2} {n^2} } \dfrac {\map {I_n} x} {\map {I_n} 0}$

By Relative Sizes of Definite Integrals we have:














\(\ds \size {\map {I_n} 0 - \map {I_n} x}\)

\(=\)







\(\ds \int_0^{\pi / 2} \paren {1 - \cos {x t} } \cos^n t \rd t\)





the integral is non-negative














\(\ds \)

\(\le\)







\(\ds \frac {x^2} 2 \int_0^{\pi / 2} t^2 \cos^n t \rd t\)





Cosine Inequality: $1 - \cos x t \le \dfrac {x^2 t^2} 2$














\(\ds \)

\(\le\)







\(\ds \frac {x^2} 2 \int_0^{\pi / 2} t \tan t \cos^n t \rd t\)





Tangent Inequality: $t \le \tan t$














\(\ds \)

\(=\)







\(\ds \frac {x^2} 2 \int_0^{\pi / 2} t \sin t \cos^{n - 1} t \rd t\)




















\(\ds \)

\(=\)







\(\ds \frac {x^2} {2 n} \int_0^{\pi / 2} \cos^n t \rd t\)





Integration by Parts: $u = t$ and $\rd v = \sin t \cos^{n - 1} t \rd t$














\(\ds \)

\(=\)







\(\ds \frac {x^2} {2 n} \map {I_n} 0\)









which yields the inequality:

$\size {1 - \dfrac {\map {I_n} x} {\map {I_n} 0} } \le \dfrac {x^2} {2 n}$
It follows from Squeeze Theorem that:

$\ds (3): \quad \lim_{n \mathop \to \infty} \frac {\map {I_n} x} {\map {I_n} 0} = 1$

Consider the equation, for even $n$:

$\ds \map \sin {\frac {\pi x} 2} = \frac {\pi x} 2 \prod_{i \mathop = 1}^{n / 2} \paren {1 - \frac {x^2} {\paren {2 i}^2} } \frac {\map {I_n} x} {\map {I_n} 0}$
This is true for $n = 0$ by $(1)$.
Suppose it is true for some $n = k$.
Then:














\(\ds \map \sin {\frac {\pi x} 2}\)

\(=\)







\(\ds \frac {\pi x} 2 \prod_{i \mathop = 1}^{k / 2} \paren {1 - \frac {x^2} {\paren {2 i}^2} } \frac {\map {I_k} x} {\map {I_k} 0}\)




















\(\ds \)

\(=\)







\(\ds \frac {\pi x} 2 \prod_{i \mathop = 1}^{\paren {k + 2} / 2} \paren {1 - \frac {x^2} {\paren {2 i}^2} } \frac {\map {I_{k + 2} } x} {\map {I_{k + 2} } 0}\)





by $(2)$



So it is true for all even $n$ by induction.
Taking the limit as $n \to \infty$ we have:














\(\ds \map \sin {\frac {\pi x} 2}\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \frac {\pi x} 2 \prod_{i \mathop = 1}^{n / 2} \paren {1 - \frac {x^2} {\paren {2 i}^2} } \frac {\map {I_n} x} {\map {I_n} 0}\)




















\(\ds \)

\(=\)







\(\ds \frac {\pi x} 2 \prod_{i \mathop = 1}^\infty \paren {1 - \frac {x^2} {\paren {2 i}^2} } \lim_{n \mathop \to \infty} \frac {\map {I_n} x} {\map {I_n} 0}\)





Product Rule for Limits of Real Functions














\(\ds \)

\(=\)







\(\ds \frac {\pi x} 2 \prod_{i \mathop = 1}^\infty \paren {1 - \frac {x^2} {\paren {2 i}^2} }\)





by $(3)$



or equivalently, letting $\dfrac {\pi x} 2 \mapsto x$:

$\ds \sin x = x \prod_{n \mathop = 1}^\infty \paren {1 - \frac {x^2} {n^2 \pi^2} }$
$\blacksquare$





