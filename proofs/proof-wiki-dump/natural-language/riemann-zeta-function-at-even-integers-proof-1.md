# 

Source: https://proofwiki.org/wiki/Riemann_Zeta_Function_at_Even_Integers/Proof_1

Theorem
The Riemann $\zeta$ function can be calculated for even integers as follows:














\(\ds \map \zeta {2 n}\)

\(=\)







\(\ds \paren {-1}^{n + 1} \dfrac {B_{2 n} 2^{2 n - 1} \pi^{2 n} } {\paren {2 n}!}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {1^{2 n} } + \frac 1 {2^{2 n} } + \frac 1 {3^{2 n} } + \frac 1 {4^{2 n} } + \cdots\)









where:

$B_n$ are the Bernoulli numbers
$n$ is a positive integer.


Proof
Lemma
Let $x \in \R$ be such that $\size x < 1$.
Then:

$\ds \pi x \cot {\pi x} = 1 - 2  \sum_{n \mathop = 1}^\infty \map \zeta {2 n} x^{2 n}$
where $\zeta$ denotes the Riemann zeta function.

We also have:














\(\ds \pi x \cot {\pi x}\)

\(=\)







\(\ds i \pi x \frac {e^{i \pi x} + e^{- i \pi x} } {e^{i \pi x} - e^{- i \pi x} }\)





Euler's Cotangent Identity














\(\ds \)

\(=\)







\(\ds i \pi x \frac {e^{2 i \pi x} + 1} {e^{2 i \pi x} - 1}\)




















\(\ds \)

\(=\)







\(\ds i \pi x \paren {1 + \frac 2 {e^{2 i \pi x} - 1} }\)




















\(\ds \)

\(=\)







\(\ds i \pi x  + \frac {2 i \pi x} {e^{2 i \pi x} - 1}\)




















\(\ds \)

\(=\)







\(\ds i \pi x + \sum_{n \mathop = 0}^\infty \frac {B_n \paren {2 i \pi x}^n} {n!}\)





Definition of Bernoulli Numbers














\(\ds \)

\(=\)







\(\ds 1 + \sum_{n \mathop = 2}^\infty \frac {B_n \paren {2 i \pi x}^n} {n!}\)





as $B_0 = 1$ and $B_1 = - \dfrac 1 2$














\(\ds \)

\(=\)







\(\ds 1 - 2 \sum_{n \mathop = 2}^\infty \paren {-\frac 1 2} \frac {B_n \paren {2 i \pi x}^n} {n!}\)










\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds 1 - 2 \sum_{n \mathop = 1}^\infty \paren {-\frac 1 2} \frac {B_{2 n} \paren {2 i \pi x}^{2 n} } {\paren {2 n}!}\)





Odd Bernoulli Numbers Vanish




Equating the coefficients of $(1)$ with the expression given in the Lemma:

$\map \zeta {2 n} = \paren {-1}^{n + 1} \dfrac {B_{2 n} 2^{2 n - 1} \pi^{2 n} } {\paren {2 n}!}$
$\blacksquare$





