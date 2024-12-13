# 

Source: https://proofwiki.org/wiki/Limit_of_Subsequence_equals_Limit_of_Sequence



Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $\sequence {x_n}$ be a sequence in $T$.
Let $l \in S$ be a limit of $\sequence {x_n}$.
Let $\sequence {x_{n_r} }$ be a subsequence of $\sequence {x_n}$.

Then $l$ is a limit of $\sequence {x_{n_r} }$

That is, the limit of a convergent sequence in a topological space equals the limit of any subsequence of it.


Metric Space
Let $M = \struct {A, d}$ be a metric space.
Let $\sequence {x_n}$ be a sequence in $A$.
Let $l \in A$ such that:

$\ds \lim_{n \mathop \to \infty} x_n = l$
Let $\sequence {x_{n_r} }$ be a subsequence of $\sequence {x_n}$.

Then:

$\ds \lim_{r \mathop \to \infty} x_{n_r} = l$


Normed Division Ring
Let $\struct {R, \norm {\, \cdot \,} }$ be a normed division ring with zero: $0$.
Let $\sequence {x_n}$ be a sequence in $R$.
Let $\sequence {x_n}$ be convergent in the norm $\norm {\, \cdot \,}$ to the following limit:

$\ds \lim_{n \mathop \to \infty} x_n = l$
Let $\sequence {x_{n_r} }$ be a subsequence of $\sequence {x_n}$.

Then:

$\sequence {x_{n_r} }$ is convergent and $\ds \lim_{r \mathop \to \infty} x_{n_r} = l$


Normed Vector Space
Let $\struct {X, \norm {\, \cdot \,} }$ be a normed vector space.
Let $\sequence {x_n}$ be a sequence in $X$.
Let $\sequence {x_n}$ be convergent in the norm $\norm {\, \cdot \,}$ to the following limit:

$\ds \lim_{n \mathop \to \infty} x_n = l$
Let $\sequence {x_{n_r} }$ be a subsequence of $\sequence {x_n}$.

Then:

$\sequence {x_{n_r} }$ is convergent and $\ds \lim_{r \mathop \to \infty} x_{n_r} = l$


Real Numbers
For the real number line under the usual (Euclidean) topology, this translates into the following:

Let $\sequence {x_n}$ be a sequence in $\R$.
Let $l \in \R$ such that:

$\ds \lim_{n \mathop \to \infty} x_n = l$
Let $\sequence {x_{n_r} }$ be a subsequence of $\sequence {x_n}$.

Then:

$\ds \lim_{r \mathop \to \infty} x_{n_r} = l$


Proof
Let $U \in \tau$ be an open set such that $l \in U$.
By definition of convergence, we have:

$\exists N \in \N: \forall n > N: x_n \in U$.
When $r > N$, we have $n_r > n_N > N$ by Strictly Increasing Sequence of Natural Numbers.
It follows that:

$\exists N \in \N: \forall r > N: x_{n_r} \in U$.
Therefore, as $U$ was arbitrary, we have established that $l$ is a limit of $\sequence {x_{n_r} }$, by definition of convergence.
$\blacksquare$





