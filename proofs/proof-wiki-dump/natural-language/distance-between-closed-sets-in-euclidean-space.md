# 

Source: https://proofwiki.org/wiki/Distance_between_Closed_Sets_in_Euclidean_Space

Theorem
Let $S, T \subseteq \R^n$ be closed, non-empty subsets of the real Euclidean space $R^n$.

Suppose that $S$ is bounded, and $S$ and $T$ are disjoint.

Then there exists $x \in S$ and $y \in T$ such that:

$\map d {x, y} = \map d {S, T} > 0$
where:

$d$ denotes the Euclidean metric
$\map d {S, T}$ is the distance between $S$ and $T$.


Proof
By definition of distance from subset, we can for all $n \in \N$ find $x_n \in S, y_n \in T$ such that:

$\map d {S, T} \le \map d {x_n, y_n} < \map d {S, T} + \dfrac 1 n$
so:

$\ds \lim_{n \mathop \to \infty} \map d {x_n, y_n} = \map d {S, T}$
By definition of bounded space, there exists $a \in S$ and $K \in \R$ such that for all $x \in S$, we have $\map d {x, a} \le K$.
It follows that $\sequence {x_n}$ is a bounded sequence.
Then $\sequence {y_n}$ is also a bounded sequence, as:














\(\ds \map d {y_n, a}\)

\(\le\)







\(\ds \map d {y_n, x_n} + \map d {x_n, a}\)





Triangle Inequality for Vectors in Euclidean Space














\(\ds \)

\(<\)







\(\ds \map d {S, T} + \dfrac 1 n + K\)




















\(\ds \)

\(\le\)







\(\ds \map d {S, T} + 1 + K\)









The sequence $\sequence {\tuple {x_n, y_n} }$ in $\R^{2 n}$ is also bounded, as:














\(\ds \map d {\tuple {x_n, y_n}, \tuple {a, a} }\)

\(=\)







\(\ds \paren {\sum_{i \mathop = 1}^n \paren {x_i - a}^2 + \sum_{i \mathop = 1}^n \paren {y_i - a}^2}^{1 / 2}\)





Definition of Euclidean Metric on Real Vector Space














\(\ds \)

\(\le\)







\(\ds \sum_{i \mathop = 1}^n \paren {x_i - a}^2 + \sum_{i \mathop = 1}^n \paren {y_i - a}^2\)





by Minkowski's Inequality for Sums














\(\ds \)

\(\le\)







\(\ds 2 K + \map d {S, T} + 1\)









From Bounded Sequence in Euclidean Space has Convergent Subsequence, it follows that $\sequence {\tuple {x_n, y_n} }$ has a subsequence $\sequence {\tuple {x_{n_r}, y_{n_r} } }_{r \mathop \in N}$ that converges to a limit $\tuple {x, y} \in \R^{2n}$.
Then $\ds \lim_{r \mathop \to \infty} x_{n_r} = x$, and $\ds \lim_{r \mathop \to \infty} y_{n_r} = y$.
From Closed Set iff Contains all its Limit Points, it follows that $x \in S$, and $y \in T$.
Then from Distance Function of Metric Space is Continuous:

$\ds \lim_{r \mathop \to \infty} \map d {x_{n_r}, y_{n_r} } = \map d {x, y}$
As a Convergent Sequence in Metric Space has Unique Limit, we have:

$\ds \map d {x, y} = \lim_{r \mathop \to \infty} \map d {x_{n_r}, y_{n_r} } = \lim_{n \mathop \to \infty} \map d {x_n, y_n} = \map d {S, T}$
As $S$ and $T$ are disjoint, it follows that $x \ne y$.
Hence:

$0 < \map d {x, y} = \map d {S, T}$
$\blacksquare$


Sources
2001: Christian Berg: Kompleks funktionsteori: $\S A$




