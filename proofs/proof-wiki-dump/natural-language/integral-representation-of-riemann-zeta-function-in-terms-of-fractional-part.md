# 

Source: https://proofwiki.org/wiki/Integral_Representation_of_Riemann_Zeta_Function_in_terms_of_Fractional_Part

Theorem
Let $\zeta$ be the Riemann zeta function.
Let $s \in \C$ be a complex number with real part $\sigma > 1$.

Then 

$\ds \map \zeta s = \frac s {s - 1} - s \int_1^\infty \fractpart x x^{-s - 1} \rd x$
where $\fractpart x$ denotes the fractional part of $x$.


Proof
First, we observe that:














\(\ds \sum_{n \mathop = 1}^\infty \dfrac {n - 1} {n^s}\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \dfrac n {\paren {n + 1}^s}\)





Translation of Index Variable of Summation: Corollary














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \dfrac n {\paren {n + 1}^s}\)





$0$th term vanishes














\(\ds \)

\(=\)







\(\ds \dfrac 1 {2^s} + \dfrac 2 {3^s} + \dfrac 3 {4^s} + \cdots\)









Rearranging terms, we get:














\(\ds \sum_{n \mathop = 1}^\infty \dfrac n {n^s} - \sum_{n \mathop = 1}^\infty \dfrac 1 {n^s}\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \dfrac n {\paren {n + 1}^s}\)














\(\ds \leadsto \ \ \)





\(\ds \sum_{n \mathop = 1}^\infty \dfrac 1 {n^s}\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \dfrac n {n^s} - \sum_{n \mathop = 1}^\infty \dfrac n {\paren {n + 1}^s}\)









Therefore, we have:




\(\text {(1)}: \quad\)









\(\ds \sum_{n \mathop = 1}^\infty n^{-s}\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty n \paren {n^{-s} - \paren {n + 1}^{-s} }\)









Next we note:














\(\ds \int_n^{n + 1} x^{-s - 1} \rd x\)

\(=\)







\(\ds \intlimits {-\dfrac 1 s x^{-s} } n {n + 1}\)










\(\text {(2)}: \quad\)









\(\ds \)

\(=\)







\(\ds \dfrac 1 s \paren {n^{-s} - \paren {n + 1}^{-s} }\)









Therefore, we have:














\(\ds \sum_{n \mathop = 1}^\infty n^{-s}\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty n \paren {n^{-s} - \paren {n + 1}^{-s} }\)





from $\paren {1}$ above














\(\ds \)

\(=\)







\(\ds s \sum_{n \mathop = 1}^\infty n \int_n^{n + 1} x^{-s - 1} \rd x\)





from $\paren {2}$ above














\(\ds \)

\(=\)







\(\ds s \int_1^\infty \floor x x^{-s - 1} \rd x\)





where $\floor x$ denotes the floor function of $x$














\(\ds \)

\(=\)







\(\ds s \int_1^\infty \paren {x - \fractpart x } x^{-s - 1} \rd x\)





Definition of Fractional Part














\(\ds \)

\(=\)







\(\ds s \int_1^\infty x^{-s} \rd x - s \int_1^\infty \fractpart x x^{-s - 1} \rd x\)





Linear Combination of Complex Integrals














\(\ds \)

\(=\)







\(\ds s \intlimits {\dfrac 1 {-s + 1} x^{-s + 1} } 1 {\infty} - s \int_1^\infty \fractpart x x^{-s - 1} \rd x\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac s {s - 1} - s \int_1^\infty \fractpart x x^{-s - 1} \rd x\)









$\blacksquare$


Also see
Analytic Continuation of Riemann Zeta Function using Mellin Transform of Fractional Part




