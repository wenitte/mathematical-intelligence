# 

Source: https://proofwiki.org/wiki/Manipulation_of_Absolutely_Convergent_Series/Permutation

Theorem
Let $\ds \sum_{n \mathop = 1}^\infty a_n$ be a real or complex series that is absolutely convergent.

If $\pi: \N \to \N$ is a permutation of $N$, then:

$\ds \sum_{n \mathop = 1}^\infty a_n = \sum_{n \mathop = 1}^\infty a_{\map \pi n}$


Proof
Let $\epsilon > 0$.
From Tail of Convergent Series tends to Zero, it follows that there exists $N \in \N$ such that:

$\ds \sum_{n \mathop = N}^\infty \size {a_n} < \epsilon$

By definition, a permutation is bijective.
Hence we can find $M \in \N$ such that:

$\set {1, \ldots, N - 1} \subseteq \set {\map \pi 1, \ldots, \map \pi M}$

Let $m \in \N$, and put $B = \set {n \in N: \map {\pi^{-1} } n > m}$.
For all $m \ge M$, it follows that:














\(\ds \size {\sum_{n \mathop = 1}^\infty a_n - \sum_{k \mathop = 1}^m a_{\map \pi k} }\)

\(=\)







\(\ds \size {\sum_{n \mathop = 1}^\infty a_n \map {\chi_B} n}\)





where $\chi_B$ is the characteristic function of $B$














\(\ds \)

\(\le\)







\(\ds \sum_{n \mathop = 1}^\infty \size {a_n} \map {\chi_B} n\)





Triangle Inequality














\(\ds \)

\(\le\)







\(\ds \sum_{n \mathop = N}^\infty \size {a_n}\)





as $\chi_B = 0$ for all $n < N$














\(\ds \)

\(<\)







\(\ds \epsilon\)









By definition of convergent series, it follows that:

$\ds \sum_{n \mathop = 1}^\infty a_n = \lim_{m \mathop \to \infty} \sum_{k \mathop = 1}^m a_{\map \pi k} = \sum_{k \mathop = 1}^\infty a_{\map \pi k}$
$\blacksquare$


Sources
1992: Larry C. Andrews: Special Functions of Mathematics for Engineers (2nd ed.) ... (previous) ... (next): $\S 1.2.3$: Operations with series




