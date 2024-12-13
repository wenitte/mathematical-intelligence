# 

Source: https://proofwiki.org/wiki/Limit_of_H%C3%B6lder_Mean_as_Exponent_tends_to_Zero_is_Geometric_Mean

Theorem
Let $x_1, x_2, \ldots, x_n \in \R_{\ge 0}$ be real numbers.
For $p \in \R_{\ne 0}$, let $\map {M_p} {x_1, x_2, \ldots, x_n}$ denote the Hölder mean with exponent $p$ of $x_1, x_2, \ldots, x_n$.

Then:

$\ds \lim_{p \mathop \to 0} \map {M_p} {x_1, x_2, \ldots, x_n} = \paren {x_1 x_2 \cdots x_n}^{1 / n}$
which is the geometric mean of $x_1, x_2, \ldots, x_n$.


Proof
Let $p \in \R$ such that $p \ne 0$.














\(\ds \map {M_p} {x_1, x_2, \ldots, x_n}\)

\(=\)







\(\ds \paren {\frac 1 n \sum_{k \mathop = 1}^n {x_k}^p}^{1 / p}\)





Definition of Hölder Mean








\(\ds \leadsto \ \ \)





\(\ds \map \ln {\map {M_p} {x_1, x_2, \ldots, x_n} }\)

\(=\)







\(\ds \map \ln {\frac 1 n \sum_{k \mathop = 1}^n {x_k}^p}^{1 / p}\)





taking logarithm of both sides














\(\ds \)

\(=\)







\(\ds \dfrac {\map \ln {\dfrac 1 n \ds \sum_{k \mathop = 1}^n {x_k}^p} } p\)





Logarithm of Power








\(\ds \leadsto \ \ \)





\(\ds \map {M_p} {x_1, x_2, \ldots, x_n}\)

\(=\)







\(\ds \map \exp {\dfrac {\map \ln {\dfrac 1 n \ds \sum_{k \mathop = 1}^n {x_k}^p} } p}\)





taking exponential of both sides




With a view to using L'Hôpital's Rule, let us express the argument of the  exponential on the right hand side in the form:














\(\ds \dfrac {\map \ln {\dfrac 1 n \ds \sum_{k \mathop = 1}^n {x_k}^p} } p\)

\(=\)







\(\ds \dfrac {\map f p} {\map g p}\)





where $\map f p := \map \ln {\dfrac 1 n \ds \sum_{k \mathop = 1}^n {x_k}^p}$ and $\map g p := p$




Then we have:














\(\ds \map {f'} p\)

\(=\)







\(\ds \map {\dfrac \d {\d p} } {\map \ln {\dfrac 1 n \sum_{k \mathop = 1}^n {x_k}^p} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {\dfrac 1 n \ds \sum_{k \mathop = 1}^n {x_k}^p} \paren {\dfrac 1 n \ds \sum_{k \mathop = 1}^n {x_k}^p \ln x_k}\)





Derivative of Natural Logarithm Function, Derivative of General Exponential Function, Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \dfrac {\ds \sum_{k \mathop = 1}^n {x_k}^p \ln x_k} {\ds \sum_{k \mathop = 1}^n {x_k}^p}\)





simplifying



and:














\(\ds \map {g'} p\)

\(=\)







\(\ds \map {\dfrac \d {\d p} } p\)




















\(\ds \)

\(=\)







\(\ds 1\)





Derivative of Identity Function




Hence:














\(\ds \lim_{p \mathop \to 0} \dfrac {\map f p} {\map g p}\)

\(=\)







\(\ds \lim_{p \mathop \to 0} \dfrac {\map {f'} p} {\map {g'} p}\)





L'Hôpital's Rule














\(\ds \)

\(=\)







\(\ds \lim_{p \mathop \to 0} \dfrac {\paren {\dfrac {\ds \sum_{k \mathop = 1}^n {x_k}^p \ln x_k} {\ds \sum_{k \mathop = 1}^n {x_k}^p} } } 1\)





substituting for $f'$ and $g'$














\(\ds \)

\(=\)







\(\ds \lim_{p \mathop \to 0} \dfrac {\ds \sum_{k \mathop = 1}^n {x_k}^p \ln x_k} {\ds \sum_{k \mathop = 1}^n {x_k}^p}\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac {\ds \sum_{k \mathop = 1}^n {x_k}^0 \ln x_k} {\ds \sum_{k \mathop = 1}^n {x_k}^0}\)





letting $p \to 0$














\(\ds \)

\(=\)







\(\ds \dfrac {\ds \sum_{k \mathop = 1}^n 1 \ln x_k} {\ds \sum_{k \mathop = 1}^n 1}\)





Zeroth Power of Real Number equals One














\(\ds \)

\(=\)







\(\ds \dfrac 1 n \sum_{k \mathop = 1} \ln x_k\)





further simplification














\(\ds \)

\(=\)







\(\ds \dfrac 1 n \ln \prod_{k \mathop = 1} x_k\)





Sum of Logarithms














\(\ds \)

\(=\)







\(\ds \map \ln {\paren {\prod_{k \mathop = 1} x_k}^{1 / n} }\)





Logarithm of Power








\(\ds \leadsto \ \ \)





\(\ds \lim_{p \mathop \to 0} \map {M_p} {x_1, x_2, \ldots, x_n}\)

\(=\)







\(\ds \map \exp {\map \ln {\paren {\prod_{k \mathop = 1} x_k}^{1 / n} } }\)




















\(\ds \)

\(=\)







\(\ds \paren {\prod_{k \mathop = 1} x_k}^{1 / n}\)




















\(\ds \)

\(=\)







\(\ds \paren {x_1 x_2 \cdots x_n}^{1 / n}\)









$\blacksquare$


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.1$ Binomial Theorem etc.: Generalized Mean: $3.1.18$




