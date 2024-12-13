# 

Source: https://proofwiki.org/wiki/Sequence_of_General_Harmonic_Numbers_Converges_for_Index_Greater_than_1/Proof

Theorem
Let $\map {H^{\paren r} } n$ denote the general harmonic number:

$\ds \map {H^{\paren r} } n = \sum_{k \mathop = 1}^n \frac 1 {k^r}$
for $r \in \R_{>0}$.

Let $r > 1$.
Then as $n \to \infty$, $\map {H^{\paren r} } n$ is convergent with an upper bound of $\dfrac {2^{r - 1} } {2^{r - 1} - 1}$.


Proof
Let $m \in \N$ be arbitrary.
Then:














\(\ds \harm r {2^{m - 1} }\)

\(=\)







\(\ds \harm r {2^{m - 1} - 1} + \dfrac 1 {\paren {2^{m - 1} }^r} + \dfrac 1 {\paren {2^{m - 1} + 1}^r} + \cdots + \dfrac 1 {\paren {2^{m - 1} + \paren {2^{m - 1} - 1} }^r}\)




















\(\ds \)

\(<\)







\(\ds \harm r {2^{m - 1} - 1} + \dfrac 1 {\paren {2^{m - 1} }^r} + \dfrac 1 {\paren {2^{m - 1} }^r} + \cdots + \dfrac 1 {\paren {2^{m - 1} }^r}\)





Ordering of Reciprocals














\(\ds \)

\(=\)







\(\ds \harm r {2^{m - 1} - 1} + \dfrac {2^{m - 1} } {2^{\paren {m - 1} r} }\)




















\(\ds \)

\(=\)







\(\ds \harm r {2^{m - 1} - 1} + \paren {2^{1 - r} }^{m - 1}\)




















\(\ds \)

\(<\)







\(\ds \harm r {2^{m - 2} - 1} + \paren {2^{1 - r} }^{m - 2} + \paren {2^{1 - r} }^{m - 1}\)




















\(\ds \)

\(<\)







\(\ds \dots\)




















\(\ds \)

\(<\)







\(\ds \harm r {2^0 - 1} + \paren {2^{1 - r} }^0 + \paren {2^{1 - r} }^1 + \dots + \paren {2^{1 - r} }^{m - 1}\)




















\(\ds \)

\(=\)







\(\ds 0 + \sum_{k \mathop = 0}^{m - 1} \paren {2^{1 - r} }^k\)




















\(\ds \)

\(=\)







\(\ds \dfrac {1 - \paren {2^{1 - r} }^m} {1 - 2^{1 - r} }\)





Sum of Geometric Sequence














\(\ds \)

\(<\)







\(\ds \dfrac 1 {1 - 2^{1 - r} }\)





as $0 < 2^{1 - r} < 1$














\(\ds \)

\(=\)







\(\ds \dfrac {2^{r - 1} } {2^{r - 1} - 1}\)









Since $m$ is arbitrary, every partial sum $\harm r n$ is bounded from above by $\dfrac {2^{r - 1} } {2^{r - 1} - 1}$.
By the Monotone Convergence Theorem, as $n \to \infty$, $\harm r n$ is convergent with an upper bound of $\dfrac {2^{r - 1} } {2^{r - 1} - 1}$.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.7$: Harmonic Numbers: Exercise $3$




