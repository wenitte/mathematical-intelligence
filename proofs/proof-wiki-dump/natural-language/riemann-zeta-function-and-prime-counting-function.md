# 

Source: https://proofwiki.org/wiki/Riemann_Zeta_Function_and_Prime_Counting_Function

Theorem
For $\map \Re s > 1$:

$\ds \log \map \zeta s = s \int_0^{\mathop \to \infty} \frac {\map \pi x} {x \paren {x^s - 1} } \rd x$
where:

$\zeta$ denotes the Riemann Zeta Function
$\pi$ denotes the Prime-Counting Function.


Proof
From the definition of the Riemann Zeta Function: 














\(\ds \map \zeta s\)

\(=\)







\(\ds \prod_p \frac 1 {1 - p^{-s} }\)














\(\ds \leadsto \ \ \)





\(\ds \log \map \zeta s\)

\(=\)







\(\ds \log \prod_p \frac 1 {1 - p^{-s} }\)




















\(\ds \)

\(=\)







\(\ds \sum_p \map \log {\frac 1 {1 - p^{-s} } }\)





Sum of Logarithms














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {\map \pi n - \map \pi {n - 1} } \map \log {\frac 1 {1 - n^{-s} } }\)





Definition of Prime-Counting Function














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \map \pi n \paren {\map \log {\frac 1 {1 - n^{-s} } } - \map \log {\frac 1 {1 - \paren {n + 1}^{-s} } } }\)





as $\map \pi {-1} = 0$














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \map \pi n \paren {\map \log {1 - \paren {n + 1}^{-s} } - \map \log {1 - n^{-s} } }\)





Logarithm of Power




By Derivative of Logarithm Function and the Chain Rule for Derivatives:














\(\ds \frac \d {\d x} \map \log {1 - x^{-s} }\)

\(=\)







\(\ds \frac {s x^{- s - 1} } {1 - x^{-s} }\)




















\(\ds \)

\(=\)







\(\ds \frac s {x \paren {x^s - 1} }\)









Hence:














\(\ds \log \map \zeta s\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \map \pi n \int_n^{n + 1} \frac s {x \paren {x^s - 1} } \rd x\)





Fundamental Theorem of Calculus














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty s \int_n^{n + 1} \frac {\map \pi x} {x \paren {x^s - 1} } \rd x\)




















\(\ds \)

\(=\)







\(\ds s \int_0^{\mathop \to \infty} \frac {\map \pi x} {x \paren {x^s - 1} } \rd x\)









$\blacksquare$





