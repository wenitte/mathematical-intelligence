# 

Source: https://proofwiki.org/wiki/Limit_Inferior/Examples/(-1)%5En

Example of Limit Inferior
Let $\sequence {a_n}$ be the sequence defined as:

$\forall n \in \N_{>0}: a_n = \paren {-1}^n$

The limit inferior of $\sequence {a_n}$ is given by:

$\ds \map {\liminf_{n \mathop \to \infty} } {a_n} = -1$


Proof
Let $L$ be the set of all real numbers which are the limit of some subsequence of $\sequence {a_n}$.
From Divergent Sequence may be Bounded, $\sequence {a_n}$ is bounded above by $1$ and bounded below by $-1$.
We have the subsequences:

$(1): \quad \sequence {a_{n_r} }$ where $\sequence {n_r}$ is the integer sequence defined as $n_r = 2 r$
$(2): \quad \sequence  {a_{n_s} }$ where $\sequence {n_s}$ is the integer sequence defined as $n_s = 2 s + 1$.

We have that:

$\sequence {a_{n_r} }$ is the sequence $1, 1, 1, 1, \ldots$
$\sequence {a_{n_s} }$ is the sequence $-1, -1, -1, -1, \ldots$
and so:

$\ds \map {\lim_{n \mathop \to \infty} } {a_{n_r} } = 1$
$\ds \map {\lim_{n \mathop \to \infty} } {a_{n_s} } = -1$

Hence by definition of limit inferior:

$\ds \map {\liminf_{n \mathop \to \infty} } {a_n} = -1$
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 5$: Subsequences: Lim sup and lim inf: $\S 5.14$: Example $\text {(ii)}$




