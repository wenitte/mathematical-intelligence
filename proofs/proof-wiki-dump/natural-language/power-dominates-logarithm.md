# 

Source: https://proofwiki.org/wiki/Power_Dominates_Logarithm

Theorem
Let $\epsilon \in \R_{>0}$.
Let $B \in \N$ be arbitrary.

Then there exists $N \in \N$ such that:

$\forall n > N: \paren {\ln n}^B < n^\epsilon$


Proof
Let $\epsilon \in \R_{>0}$ be a (strictly) positive real number.
First we show that there exists $N$ such that $\ln n < n^\epsilon$ for all $n > N$,.

By Exponential is Strictly Increasing, the real exponential function is strictly increasing.
Therefore:

$\ln n < n^\epsilon \iff n < \map \exp {n^\epsilon}$
Choose $k \in \N$ such that $k \epsilon > 2$ and $N = k!$.
By Taylor Series Expansion for Exponential Function:

$\ds \map \exp {n^\epsilon} = \sum_{m \mathop \ge 0} \frac {n^{m \epsilon} } {m!} > \frac {n^{k \epsilon} } {k!}$
Then for all $n > N$:














\(\ds \map \exp {n^\epsilon}\)

\(>\)







\(\ds \frac {n^{k \epsilon} } {k!}\)




















\(\ds \)

\(>\)







\(\ds \frac N {k!} n^{k \epsilon - 1}\)




















\(\ds \)

\(>\)







\(\ds n\)





because $k \epsilon > 2$ and $N = k!$



This completes the proof when $B = 1$.

Now let $B \in \N$ be arbitrary.
By the above we can find $N \in \N$ such that:

$\forall n > N: \ln n < n^{\epsilon / B}$
Then:

$\forall n > N: \paren {\ln n}^B < \paren {n^{\epsilon / B} }^B = n^\epsilon$
Hence the result.
$\blacksquare$





