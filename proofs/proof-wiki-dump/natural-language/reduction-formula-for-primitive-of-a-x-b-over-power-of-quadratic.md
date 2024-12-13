# 

Source: https://proofwiki.org/wiki/Reduction_Formula_for_Primitive_of_a_x_%2B_b_over_Power_of_Quadratic

Theorem
Let $n \in \Z_{\ge 2}$.
Let:

$\map {I_n} {a, b} := \ds \int \dfrac {a x + b} {\paren {x^2 + A x + B}^n} \rd x$
Then:

$\map {I_n} {a, b} = \dfrac {b A - 2 a B + \paren {2 b - a A} x} {\paren {n - 1} \paren {4 B - A^2} \paren {x^2 + A x + B}^n} + \dfrac {\paren {2 n - 3} \paren {2 b - a A} } {\paren {n - 1} \paren {4 B - A^2} } \map {I_{n - 1} }{0, 1}$
is a reduction formula for $\ds \int \dfrac {a x + b} {\paren {x^2 + A x + B}^n} \rd x$.


Proof
We observe that:

$(1): \quad \map {\dfrac \d {\d x} } {x^2 + A x + B} = 2 x + A$

Hence we obtain:














\(\ds a x + b\)

\(=\)







\(\ds \dfrac a 2 \paren {2 x + A - A} + b\)




















\(\ds \)

\(=\)







\(\ds \dfrac a 2 \paren {2 x + A} + \paren {b - \frac {a A} 2}\)










and so express:














\(\ds \map {I_n} {a, b}\)

\(=\)







\(\ds \int \dfrac {a x + b} {\paren {x^2 + A x + B}^n} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \dfrac {\frac a 2 \paren {2 x + A} + \paren {b - \frac {a A} 2} } {\paren {x^2 + A x + B}^n} \rd x\)










\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \map {I_n} {a, b}\)

\(=\)







\(\ds \frac a 2 \int \dfrac {2 x + A} {\paren {x^2 + A x + B}^n} \rd x + \frac {2 b - a A} 2 \int \dfrac 1 {\paren {x^2 + A x + B}^n} \rd x\)










Let $z = x^2 + A x + B$.
Then:














\(\ds \int \dfrac {2 x + A} {\paren {x^2 + A x + B}^n} \rd x\)

\(=\)







\(\ds \int \dfrac 1 {z^n} \rd z\)





Integration by Substitution using $(1)$














\(\ds \)

\(=\)







\(\ds \dfrac 1 {-\paren {n - 1} z^{n - 1} }\)





Primitive of Power, which is valid, as $n \ge 2$ by hypothesis














\(\ds \)

\(=\)







\(\ds \dfrac 1 {-\paren {n - 1} \paren {x^2 + A x + B}^{n - 1} }\)





simplifying




Hence we have:














\(\ds \map {I_n} {a, b}\)

\(=\)







\(\ds \frac {2 b - a A} 2 \int \dfrac 1 {\paren {x^2 + A x + B}^n} \rd x - \dfrac a {2 \paren {n - 1} \paren {x^2 + A x + B}^{n - 1} }\)




















\(\ds \)

\(=\)







\(\ds \frac {2 b - a A} 2 \map {I_n} {0, 1} - \dfrac a {2 \paren {n - 1} \paren {x^2 + A x + B}^{n - 1} }\)










\(\text {(3)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \map {I_n} {0, 1}\)

\(=\)







\(\ds \frac 2 {2 b - a A} \map {I_n} {a, b} + \dfrac a {\paren {2 b - a A} \paren {n - 1} \paren {x^2 + A x + B}^{n - 1} }\)





rearranging




Now let $h$ be the real function defined as:

$\forall x \in \R: \map h x = x^2 + A x + B$
Thus we have:

$\map {I_n} {a, b}  := \ds \int \dfrac {a x + b} {\paren {\map h x}^n} \rd x$

Using Power Rule for Derivatives:

$\map {\dfrac \d {\d x} } {\map h x} = 2 x + A$
and so:














\(\ds \map {\dfrac \d {\d x} } {\dfrac {2 x + A} {\paren {\map h x}^{n - 1} } }\)

\(=\)







\(\ds \paren {2 x + A} \map {\dfrac \d {\d x} } {\dfrac 1 {\paren {\map h x}^{n - 1} } } + \dfrac 1 {\paren {\map h x}^{n - 1} } \dfrac \d {\d x} \paren {2 x + A}\)





Product Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \paren {2 x + A} \dfrac {-\paren {n - 1} } {\paren {\map h x}^n} \map {\dfrac \d {\d x} } {\map h x} + \dfrac 2 {\paren {\map h x}^{n - 1} }\)





Power Rule for Derivatives, Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \paren {2 x + A} \dfrac {-\paren {n - 1} } {\paren {\map h x}^n} \paren {2 x + A} + \dfrac 2 {\paren {\map h x}^{n - 1} }\)





Power Rule for Derivatives














\(\ds \)

\(=\)







\(\ds -\paren {n - 1} \dfrac {4 x^2 + 4 A x + A^2} {\paren {\map h x}^n} + \dfrac 2 {\paren {\map h x}^{n - 1} }\)





multiplying out and grouping














\(\ds \)

\(=\)







\(\ds -\paren {n - 1} \dfrac {4 \paren {x^2 + A x + B} - 4 B + A^2} {\paren {\map h x}^n} + \dfrac 2 {\paren {\map h x}^{n - 1} }\)





adding and subtracting $4 B$ to numerator of integrand














\(\ds \)

\(=\)







\(\ds -\paren {n - 1} \dfrac {4 \paren {x^2 + A x + B} } {\paren {\map h x}^n} - \paren {n - 1} \dfrac {-4 B + A^2} {\paren {\map h x}^n} + \dfrac 2 {\paren {\map h x}^{n - 1} }\)





regrouping














\(\ds \)

\(=\)







\(\ds -\paren {n - 1} \dfrac {4 \map h x} {\paren {\map h x}^n} - \paren {n - 1} \dfrac {-4 B + A^2} {\paren {\map h x}^n} + \dfrac 2 {\paren {\map h x}^{n - 1} }\)





Definition of $\map h x$














\(\ds \)

\(=\)







\(\ds \dfrac {4 - 4 n} {\paren {\map h x}^{n - 1} } + \dfrac {\paren {n - 1} \paren {4 B - A^2} } {\paren {\map h x}^n} + \dfrac 2 {\paren {\map h x}^{n - 1} }\)





separating terms and simplifying














\(\ds \)

\(=\)







\(\ds \dfrac {4 - 4 n + 2} {\paren {\map h x}^{n - 1} } + \dfrac {\paren {n - 1} \paren {4 B - A^2} } {\paren {\map h x}^n}\)





grouping














\(\ds \)

\(=\)







\(\ds \dfrac {2 \paren {3 - 2 n} } {\paren {\map h x}^{n - 1} } + \dfrac {\paren {n - 1} \paren {4 B - A^2} } {\paren {\map h x}^n}\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds \dfrac {2 x + A} {\paren {\map h x}^{n - 1} }\)

\(=\)







\(\ds \int \paren {\dfrac {2 \paren {3 - 2 n} } {\paren {\map h x}^{n - 1} } + \dfrac {\paren {n - 1} \paren {4 B - A^2} } {\paren {\map h x}^n} } \rd x\)





integrating both sides with respect to $x$














\(\ds \)

\(=\)







\(\ds 2 \paren {3 - 2 n} \int \dfrac {\d x} {\paren {\map h x}^{n - 1} } + \paren {n - 1} \paren {4 B - A^2} \int \dfrac {\d x} {\paren {\map h x}^n}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds 2 \paren {3 - 2 n} \map {I_{n - 1} } {0, 1} + \paren {n - 1} \paren {4 B - A^2} \map {I_n} {0, 1}\)





Definition of $\map {I_n} {a, b}$








\(\ds \leadsto \ \ \)





\(\ds \dfrac {2 x + A} {\paren {x^2 + A x + B}^{n - 1} }\)

\(=\)







\(\ds 2 \paren {3 - 2 n} \map {I_{n - 1} } {0, 1} + \paren {n - 1} \paren {4 B - A^2} \paren {\frac 2 {2 b - a A} \map {I_n} {a, b} + \dfrac a {\paren {2 b - a A} \paren {n - 1} \paren {x^2 + A x + B}^{n - 1} } }\)





substituting for $\map {I_n} {0, 1}$ from $(3)$



The result follows after algebra.


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
$\blacksquare$


Sources
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $8$: Integrals: Reduction Formulae
Quanto (https://math.stackexchange.com/users/686284/quanto), Reduction formula for $I_n (a, b) := \int \frac {a x + b} {\paren {x^2 + A x + B}^n} \rd x$, URL (version: 2023-06-21): https://math.stackexchange.com/q/4722857




