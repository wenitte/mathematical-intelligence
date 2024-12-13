# 

Source: https://proofwiki.org/wiki/Riemann_Zeta_Function_at_Even_Integers/Proof_2

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
Let $k \in \N$.
Let $\map S x$ be equal to $x^{2 k}$ on $\closedint {-\pi} \pi$ and be periodic with period $2 \pi$.
Let $\ds \map I {2 m, n} = \int_0^\pi x^{2 m} \cos n x \rd x$.
Let $\map A {2 m, n} = \dfrac {\pi^{2 m - 1} \paren {-1}^n 2 m} {n^2}$.
Let $\map B {2 m, n} = -\dfrac {2 m \paren {2 m - 1} } {n^2}$.

By Fourier Series for Even Function over Symmetric Range:














\(\ds \map S x\)

\(=\)







\(\ds \frac {\frac 2 \pi \int_0^\pi \map S x  \rd x} 2 + \sum_{n \mathop = 1}^\infty \cos n x \frac 2 \pi \int_0^\pi \map S x \cos n x \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {\int_0^\pi x^{2 k} \rd x} \pi + \frac 2 \pi \sum_{n \mathop = 1}^\infty \cos n x \int_0^\pi x^{2 k} \cos n x \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {\pi^{2 k} } {2 k + 1} + \frac 2 \pi \sum_{n \mathop = 1}^\infty \cos n x \map I {2 k, n}\)














\(\ds \leadsto \ \ \)





\(\ds \map S \pi\)

\(=\)







\(\ds \frac {\pi^{2 k} } {2 k + 1} + \frac 2 \pi \sum_{n \mathop = 1}^\infty \cos n \pi \map I {2 k, n}\)














\(\ds \leadsto \ \ \)





\(\ds \pi^{2 k}\)

\(=\)







\(\ds \frac {\pi^{2 k} } {2 k + 1} + \frac 2 \pi \sum_{n \mathop = 1}^\infty \paren {-1}^n \map I {2 k, n}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {2 k \pi^{2 k} } {2 k + 1}\)

\(=\)







\(\ds \frac 2 \pi \sum_{n \mathop = 1}^\infty \paren {-1}^n \map I {2 k, n}\)










We have:














\(\ds \map I {0, n}\)

\(=\)







\(\ds \int_0^\pi \cos n x \rd x\)




















\(\ds \)

\(=\)







\(\ds \intlimits {\frac {\sin n x} n} 0 \pi\)




















\(\ds \)

\(=\)







\(\ds \frac {\sin n \pi} n - \frac {\sin 0} n\)




















\(\ds \)

\(=\)







\(\ds 0 - 0\)




















\(\ds \)

\(=\)







\(\ds 0\)




















\(\ds \map I {2 k, n}\)

\(=\)







\(\ds \int_0^\pi x^{2 k} \cos n x \rd x\)




















\(\ds \)

\(=\)







\(\ds \intlimits {\frac {x^{2 k} \sin n x} n} 0 \pi - \frac {2 k} n \int_0^\pi x^{2 k - 1} \cos n x \rd x\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds 0 - 0 - \frac {2 k} n \int_0^\pi x^{2 k - 1} \sin n x \rd x\)




















\(\ds \)

\(=\)







\(\ds -\frac {2 k} n \int_0^\pi x^{2 k - 1} \sin n x \rd x\)




















\(\ds \)

\(=\)







\(\ds -\frac {2 k} n \paren {\intlimits {\frac {-x^{2 k - 1} \cos n x} n} 0 \pi + \frac {2 k - 1} n \int_0^\pi x^{2 k - 2} \cos n x \rd x}\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds -\frac {2 k} n \paren {\frac {\pi^{2 k - 1} \paren {-1}^{n + 1} } n + \frac{2 k - 1} n \map I {2 k - 2, n} }\)




















\(\ds \)

\(=\)







\(\ds \frac {\pi^{2 k - 1} \paren {-1}^n 2 k} {n^2} - \frac {2 k \paren {2 k - 1} } {n^2} \map I {2 k - 2, n}\)




















\(\ds \)

\(=\)







\(\ds \map A {2 k, n} + \map B {2 k, n} \map I {2 k - 2, n}\)




















\(\ds \)

\(=\)







\(\ds \map A {2 k, n} + \map B {2 k, n} \map A {2 k - 2, n} + \map B {2 k, n} \map B {2 k - 2, n} \map I {2 k - 4, n}\)




















\(\ds \)

\(=\)







\(\ds \sum_{m \mathop = 0}^{k - 1} \map A {2 k - 2 m, n} \prod_{j \mathop = 0}^{m - 1} \map B {2 k - 2 j, n}\)




















\(\ds \)

\(=\)







\(\ds \sum_{m \mathop = 0}^{k - 1} \frac {\pi^{2 k - 2 m - 1} \paren {-1}^n \paren {2 k - 2 m} } {n^2} \prod_{j \mathop = 0}^{m - 1} -\frac {\paren {2 k - 2 j} \paren {2 k - 2 j - 1} } {n^2}\)




















\(\ds \)

\(=\)







\(\ds \sum_{m \mathop = 0}^{k - 1} \frac {\pi^{2 k - 2 m - 1} \paren {-1}^{n + m} \paren {2 k - 2 m} } {n^{2 \paren {m + 1} } } \prod_{j \mathop = 0}^{m - 1} \paren {2 k - 2 j} \paren {2 k - 2 j - 1}\)




















\(\ds \)

\(=\)







\(\ds \sum_{m \mathop = 0}^{k - 1} \frac {\pi^{2 k - 2 m - 1} \paren {-1}^{n + m} \paren {2 k}!} {n^{2 \paren {m + 1} } \paren {2 k - 2 m - 1}!}\)




















\(\ds \)

\(=\)







\(\ds \sum_{m \mathop = 1}^k \frac {\pi^{2 k - 2m + 1} \paren {-1}^{n + m - 1} \paren {2 k}!} {n^{2 \paren m} \paren {2 k - 2 m + 1}!}\)










Thus:














\(\ds \frac 2 \pi \sum_{n \mathop = 1}^\infty \paren {-1}^n \map I {2 k, n}\)

\(=\)







\(\ds \frac 2 \pi \sum_{n \mathop = 1}^\infty \paren {-1}^n \sum_{m \mathop = 1}^k \frac {\pi^{2 k - 2 m + 1} \paren {-1}^{n+ m - 1} \paren {2 k}!} {n^{2 \paren m} \paren {2 k - 2 m + 1}!}\)




















\(\ds \)

\(=\)







\(\ds 2 \sum_{n \mathop = 1}^\infty \sum_{m \mathop = 1}^k \frac {\pi^{2 k - 2 m} \paren {-1}^{m - 1} \paren {2 k}!} {n^{2 \paren m} \paren {2 k - 2 m + 1}!}\)




















\(\ds \)

\(=\)







\(\ds 2 \sum_{m \mathop = 1}^k \sum_{n \mathop = 1}^\infty \frac {\pi^{2 k - 2 m} \paren {-1}^{m - 1} \paren {2 k}!} {n^{2 \paren m} \paren {2 k - 2 m + 1}!}\)




















\(\ds \)

\(=\)







\(\ds 2 \sum_{m \mathop = 1}^k \frac{\pi^{2 k - 2 m} \paren {-1}^{m - 1} \paren {2 k}!} {\paren {2 k - 2 m + 1}!} \sum_{n \mathop = 1}^\infty \frac 1 {n^{2 \paren m} }\)




















\(\ds \)

\(=\)







\(\ds 2 \sum_{m \mathop = 1}^k \frac{\pi^{2 k - 2 m} \paren {-1}^{m - 1} \paren {2 k}!} {\paren {2 k - 2 m + 1}!} \map \zeta {2 m}\)





Definition of Riemann Zeta Function








\(\ds \leadsto \ \ \)





\(\ds \frac{ 2 k \pi^{2 k} } {2 k + 1}\)

\(=\)







\(\ds 2  \sum_{m \mathop = 1}^k \frac{\pi^{2 k - 2 m} \paren {-1}^{m - 1} \paren {2 k}!} {\paren {2 k - 2 m + 1}!} \map \zeta {2 m}\)














\(\ds \leadsto \ \ \)





\(\ds 2 \paren {2 k}! \paren {-1}^{k - 1} \map \zeta {2 k}\)

\(=\)







\(\ds \frac{ 2 k \pi^{2 k} } {2 k + 1} - 2  \sum_{m \mathop = 1}^{k - 1} \frac{\pi^{2 k - 2 m} \paren {-1}^{m - 1} \paren {2 k}!} {\paren {2 k - 2 m + 1}!} \map \zeta {2 m}\)














\(\ds \leadsto \ \ \)





\(\ds \map \zeta {2 k}\)

\(=\)







\(\ds \frac {\paren {-1}^{k - 1} k \pi^{2 k} } {\paren {2 k + 1}!} -  \sum_{m \mathop = 1}^{k - 1} \frac{\pi^{2 k - 2 m} \paren {-1}^{k - m} } {\paren {2 k - 2 m + 1}!} \map \zeta {2 m}\)










From the above: 

$\map \zeta 2 = \dfrac {\pi^2} 6$
which serves as our base case.

Assume the induction hypothesis that, for $1 \le m \le k - 1$:

$\map \zeta {2 m} = \paren {-1}^{m + 1} \dfrac {B_{2 m} 2^{2 m - 1} \pi^{2 m} } {\paren {2 m}!}$

Then: 














\(\ds \map \zeta {2 k}\)

\(=\)







\(\ds \frac {\paren {-1}^{k - 1} k \pi^{2 k} } {\paren {2 k + 1}!} -  \sum_{m \mathop = 1}^{k - 1} \frac{\pi^{2 k - 2 m} \paren {-1}^{k - m} } {\paren {2 k - 2 m + 1}!} \map \zeta {2 m}\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {-1}^{k - 1} k \pi^{2 k} } {\paren {2 k + 1}!} -  \sum_{m \mathop = 1}^{k - 1} \frac{\pi^{2 k - 2 m} \paren {-1}^{k - m} } {\paren {2 k - 2 m + 1}!} \paren {-1}^{m + 1} \dfrac {B_{2 m} 2^{2 m - 1} \pi^{2 m} } {\paren {2 m}!}\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {-1}^{k - 1} k \pi^{2 k} } {\paren {2 k + 1}!} +  \sum_{m \mathop = 1}^{k - 1} \frac{\pi^{2 k} \paren {-1}^k B_{2 m} 2^{2 m - 1} } {\paren {2 k - 2 m + 1}! \paren {2 m}!}\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {-1}^{k - 1} k \pi^{2 k} } {\paren {2 k + 1}!} +  \frac{\pi^{2 k} \paren {-1}^k} {2 \paren {2 k + 1}!} \sum_{m \mathop = 1}^{k - 1} \binom {2 k + 1}{2m} B_{2 m} 2^{2 m}\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {-1}^{k - 1} k \pi^{2 k} } {\paren {2 k + 1}!} +  \frac{\pi^{2 k} \paren {-1}^k} {2 \paren {2 k + 1}!} \paren {2 k - 2^{2 k} B_{2 k} \paren {2 k + 1} }\)





Sum of Bernoulli Numbers by Power of Two and Binomial Coefficient














\(\ds \)

\(=\)







\(\ds \frac {\paren {-1}^{k - 1} k \pi^{2 k} } {\paren {2 k + 1}!} +  \frac{k \pi^{2 k} \paren {-1}^k} {\paren {2 k + 1}!} + \frac{B_{2 k} 2^{2 k - 1}\pi^{2 k} \paren {-1}^{k + 1} } {\paren {2 k}!}\)




















\(\ds \)

\(=\)







\(\ds \frac {B_{2 k} 2^{2 k - 1}\pi^{2 k} \paren {-1}^{k + 1} } {\paren {2 k}!}\)









which completes the induction step.

Thus by Proof by Mathematical Induction, for all $n \ge 1$:

$\map \zeta {2 n} = \paren {-1}^{n + 1} \dfrac {B_{2 n} 2^{2 n - 1} \pi^{2 n} } {\paren {2 n}!}$
$\blacksquare$





