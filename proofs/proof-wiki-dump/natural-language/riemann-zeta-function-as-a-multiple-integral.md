# 

Source: https://proofwiki.org/wiki/Riemann_Zeta_Function_as_a_Multiple_Integral

Theorem
For $n \in \Z_{> 0}$, the Riemann zeta function is given by:

$\ds \map \zeta n = \int_{\closedint 0 1^n} \frac 1 {1 - \prod_{i \mathop = 1}^n x_i} \prod_{i \mathop = 1}^n \rd x_i$
where $\closedint 0 1^n$ denotes the Cartesian $n$th power of the closed real interval $\closedint 0 1$.


Proof













\(\ds \int_{\closedint 0 1^n} \frac 1 {1 - \prod_{i \mathop = 1}^n x_i} \prod_{i \mathop = 1}^n \rd x_i\)

\(=\)







\(\ds \int_{\closedint 0 1^n} \sum_{j \mathop = 1}^\infty \paren {\prod_{i \mathop = 1}^n x_i}^{j - 1} \prod_{i \mathop = 1}^n \rd x_i\)





Sum of Infinite Geometric Sequence














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 1}^\infty \int_{\closedint 0 1^n}\prod_{i \mathop = 1}^n {x_i}^{j - 1} \prod_{i \mathop = 1}^n \rd x_i\)





Integral of Series of Positive Measurable Functions, Fubini's Theorem














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 1}^\infty \prod_{i \mathop = 1}^n \int_0^1 x^{j - 1}_i \rd x_i\)





Fubini's Theorem














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 1}^\infty \prod_{i \mathop = 1}^n \intlimits {\frac {x^j} j } 0 1\)





Integral of Power














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 1}^\infty \prod_{i \mathop = 1}^n \frac 1 j\)




















\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 1}^\infty \frac 1 {j^n}\)




















\(\ds \)

\(=\)







\(\ds \map \zeta n\)





Definition of Riemann Zeta Function



$\blacksquare$





