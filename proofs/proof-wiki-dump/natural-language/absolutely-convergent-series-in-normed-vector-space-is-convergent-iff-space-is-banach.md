# 

Source: https://proofwiki.org/wiki/Absolutely_Convergent_Series_in_Normed_Vector_Space_is_Convergent_iff_Space_is_Banach



Theorem
Let $\struct {X, \norm {\, \cdot \,} }$ be a normed vector space.

Then $X$ is a Banach space if and only if:

every absolutely convergent series $\ds \sum_{n \mathop = 1}^\infty a_n$ is convergent.


Proof
Necessary Condition
That $\ds \sum_{n \mathop = 1}^\infty a_n$ is absolutely convergent means that $\ds \sum_{n \mathop = 1}^\infty \norm {a_n}$ converges in $\R$.
Hence by Convergent Sequence in Normed Vector Space is Cauchy Sequence:

the sequence of partial sums is a Cauchy sequence.

Now let $\epsilon > 0$.
Let $N \in \N$ such that for all $m, n \in \N$, $m \ge n \ge N$ implies that:

$\ds \sum_{k \mathop = n + 1}^m \norm {a_k} = \size {\sum_{k \mathop = 1}^m \norm {a_k} - \sum_{k \mathop = 1}^n \norm {a_k} } < \epsilon$
This $N$ exists because the sequence is Cauchy.

Now observe that, for $m \ge n \ge N$, one also has:














\(\ds \norm {\sum_{k \mathop = 1}^m a_k - \sum_{k \mathop = 1}^n a_k}\)

\(=\)







\(\ds \norm {\sum_{k \mathop = n + 1}^m a_k}\)




















\(\ds \)

\(\le\)







\(\ds \sum_{k \mathop = n + 1}^m \norm {a_k}\)





Triangle inequality for $\norm {\, \cdot \,}$














\(\ds \)

\(<\)







\(\ds \epsilon\)









It follows that the sequence of partial sums of $\ds \sum_{n \mathop = 1}^\infty a_n$ is Cauchy.
As $X$ is a Banach space, this implies that $\ds \sum_{n \mathop = 1}^\infty a_n$ converges.
$\Box$


Sufficient Condition
Let $\sequence {x_n}_{n \mathop \in \N}$ be a Cauchy sequence in $X$.
We have that:

$\forall \epsilon \in \R_{>0}: \exists N \in \N: \forall m, n \in \N: m, n \ge N: \norm {x_n - x_m} < \epsilon$
We will prove the existence of a subsequence $\sequence {x_{n_k} }_{k \mathop \in \N}$ such that:

$n > n_k \implies \norm {x_n - x_{n_k} } < \dfrac 1 {2^k}$


Basis for the Induction
Let $\epsilon = \dfrac 1 2$.
Choose $n_1$ such that:

$n, m \ge n_1 \implies \norm {x_n - x_m} < \dfrac 1 2$
In particular, when $m = n_1$:

$n \ge n_1 \implies \norm {x_n - x_{n_1} } < \dfrac 1 2$


Induction Step
Suppose $x_{n_1}, \dots x_{n_k}$ have been constructed.
Let $\epsilon = \dfrac 1 {2^{k + 1} }$.
Choose $n_{k + 1}$ such that $n_{k + 1} > n_k$ and:

$n, m \ge n_{k + 1} \implies \norm {x_n - x_m} < \dfrac 1 {2^{k + 1} }$
In particular, when $m = n_{k + 1}$:

$n \ge n_{k + 1} \implies \norm {x_n - x_{n_{k + 1} } } < \dfrac 1 {2^{k + 1}}$
$\Box$

Define:

$u_1 := x_{n_1}$
$u_{k + 1} := x_{n_{k + 1} } - x_{n_k}$
Now we have a sequence $\sequence {u_k}_{k \mathop \in \N}$.
Consider the series $\ds \sum_{k \mathop = 1}^\infty \norm {u_k}$:














\(\ds \sum_{k \mathop = 1}^\infty \norm {u_k}\)

\(=\)







\(\ds \norm {u_1} + \sum_{k \mathop = 2}^\infty \norm {u_k}\)




















\(\ds \)

\(=\)







\(\ds \norm {u_1} + \sum_{k \mathop = 2}^\infty \norm {x_{n_k} - x_{n_{k - 1} } }\)




















\(\ds \)

\(=\)







\(\ds \norm {u_1} + \sum_{k \mathop = 1}^\infty \norm {x_{n_{k + 1} } - x_{n_k} }\)





Relabeling: $k \to k + 1$














\(\ds \)

\(\le\)







\(\ds \norm {x_{n_1} } + \sum_{k \mathop = 1}^\infty \frac 1 {2^k}\)




















\(\ds \)

\(\le\)







\(\ds \norm {x_{n_1} } + 1\)




















\(\ds \)

\(<\)







\(\ds \infty\)









Thus, $\ds \sum_{k \mathop = 1}^\infty u_k$ is absolutely convergent.
By assumption in the theorem, $\ds \sum_{k \mathop = 1}^\infty u_k$ is convergent.
In other words:

$\ds \lim_{k \mathop \to \infty} \sum_{j \mathop = 1}^k u_j = u$.
On the other hand:














\(\ds \sum_{j \mathop = 1}^k u_j\)

\(=\)







\(\ds x_{n_1} + \sum_{j \mathop = 2}^k \paren {x_{n_j} - x_{n_{j \mathop - 1} } }\)




















\(\ds \)

\(=\)







\(\ds x_{n_k}\)





Telescoping Series



Therefore:

$\ds \lim_{k \mathop \to \infty} x_{n_k} = u =: x$
So $\sequence {x_{n_k} }_{k \mathop \in \N}$ converges in $X$.
We have that $\sequence {x_{n_k} }_{k \mathop \in \N}$ is a convergent subsequence of a Cauchy sequence$\sequence {x_n}_{n \mathop \in \N}$.
By Convergent Subsequence of Cauchy Sequence in Normed Vector Space, $\sequence {x_n}_{n \mathop \in \N}$ is convergent with the same limit $x$.
By definition, the underlying space is Banach.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis: $\S 1$: Normed and Banach spaces




