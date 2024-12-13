# 

Source: https://proofwiki.org/wiki/Reduction_Formula_for_Primitive_of_Product_of_Power_with_Power_of_Quadratic

Theorem
Let $n \in \Z_{\ge 0}$ and $k \in \Z_{\ge 2}$.
Let:

$I_{n, k} := \ds \int x^k \paren {x^2 + A x + B}^n \rd x$
Then:

$I_{n, k} = \dfrac {x^{k - 1} \paren {x^2 + A x + B}^{n + 1} } {k + 2 n + 1} - \dfrac {B \paren {k - 1} } {k + 2 n + 1} I_{n, k - 2} - \dfrac {A \paren {k + n} } {k + 2 n + 1}  I_{n, k - 1}$
is a reduction formula for $\ds \int x^k \paren {x^2 + A x + B}^n \rd x$.


Proof
Let $h$ be the real function defined as:

$\forall x \in \R: \map h x = x^2 + A x + B$

Thus we have:

$I_{n, k} := \ds \int x^k \paren {\map h x}^n \rd x$

Then we have:














\(\ds \map {\dfrac \d {\d x} } {x^{k - 1} \paren {\map h x}^{n + 1} }\)

\(=\)







\(\ds x^{k - 1} \map {\dfrac \d {\d x} } {\paren {\map h x}^{n + 1} } + \paren {\map h x}^{n + 1} \dfrac \d {\d x} x^{k - 1}\)





Product Rule for Derivatives














\(\ds \)

\(=\)







\(\ds x^{k - 1} \paren {n + 1} \paren {\map h x}^n \map {\dfrac \d {\d x} } {\map h x} + \paren {\map h x}^{n + 1} \paren {k - 1} x^{k - 2}\)





Power Rule for Derivatives, Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds x^{k - 1} \paren {n + 1} \paren {\map h x}^n \paren {2 x + A} + \paren {\map h x}^{n + 1} \paren {k - 1} x^{k - 2}\)





Power Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \paren {\map h x}^n \paren {x^{k - 1} \paren {n + 1} \paren {2 x + A} + \map h x \paren {k - 1} x^{k - 2} }\)





extracting $\paren {\map h x}^n$














\(\ds \)

\(=\)







\(\ds \paren {\map h x}^n \paren {2 \paren {n + 1} x^k + A \paren {n + 1} x^{k - 1} + \paren {x^2 + A x + B} \paren {k - 1} x^{k - 2} }\)





substituting for $\map h x$, some simplification














\(\ds \)

\(=\)







\(\ds \paren {\map h x}^n \paren {\paren {2 \paren {n + 1} + \paren {k - 1} } x^k + A \paren {\paren {n + 1} + \paren {k - 1} } x^{k - 1} + B \paren {k - 1} x^{k - 2} }\)





gathering powers of $x$














\(\ds \)

\(=\)







\(\ds \paren {\map h x}^n \paren {\paren {k + 2 n + 1} x^k + A \paren {k + n} x^{k - 1} + B \paren {k - 1} x^{k - 2} }\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds x^{k - 1} \paren {\map h x}^{n + 1}\)

\(=\)







\(\ds \int \paren {\map h x}^n \paren {\paren {k + 2 n + 1} x^k + A \paren {k + n} x^{k - 1} + B \paren {k - 1} x^{k - 2} } \rd x\)





integrating both sides with respect to $x$














\(\ds \)

\(=\)







\(\ds \paren {k + 2 n + 1} \int x^k \paren {\map h x}^n \rd x + A \paren {k + n} \int x^{k - 1} \paren {\map h x}^n \rd x + B \paren {k - 1} \int x^{k - 2} \paren {\map h x}^n \rd x\)





Linear Combination of Primitives








\(\ds \leadsto \ \ \)





\(\ds x^{k - 1} \paren {x^2 + A x + B}^{n + 1}\)

\(=\)







\(\ds \paren {k + 2 n + 1} I_{n, k} + A \paren {k + n} I_{n, k - 1} + B \paren {k - 1} I_{n, k - 2}\)





Definition of $I_{n, k}$ and so on, and substituting for $\map h x$








\(\ds \leadsto \ \ \)





\(\ds I_{n, k}\)

\(=\)







\(\ds \dfrac {x^{k - 1} \paren {x^2 + A x + B}^{n + 1} } {k + 2 n + 1} - \dfrac {B \paren {k - 1} } {k + 2 n + 1} I_{n, k - 2} - \dfrac {A \paren {k + n} } {k + 2 n + 1}  I_{n, k - 1}\)





rearrangement



$\blacksquare$


Sources
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $8$: Integrals: Reduction Formulae
Quanto (https://math.stackexchange.com/users/686284/quanto), Reduction formula for $I_{n, k} = \int x^k \paren {x^2 + A x + B}^n \rd x$, URL (version: 2023-06-06): https://math.stackexchange.com/q/4713368




