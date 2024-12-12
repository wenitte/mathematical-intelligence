# 

Source: https://proofwiki.org/wiki/Divergent_Sequence_may_be_Bounded/Proof_2

Theorem
While every Convergent Sequence is Bounded, it does not follow that every bounded sequence is convergent.

That is, there exist bounded sequences which are divergent.


Proof
Let $\sequence {x_n}$ be the sequence in $\R$ which forms the basis of Grandi's series,  defined as:

$x_n = \paren {-1}^n$
It is clear that $\sequence {x_n}$ is bounded: above by $1$ and below by $-1$.

Note the following subsequences of $\sequence {x_n}$:

$(1): \quad \sequence {x_{n_r} }$ where $\sequence {n_r}$ is the integer sequence defined as $n_r = 2 r$
$(2): \quad \sequence  {x_{n_s} }$ where $\sequence {n_s}$ is the integer sequence defined as $n_s = 2 s + 1$.

We have that:

$\sequence {x_{n_r} }$ is the sequence $1, 1, 1, 1, \ldots$
$\sequence {x_{n_s} }$ is the sequence $-1, -1, -1, -1, \ldots$

So $\sequence {x_n}$ has two subsequences with different limits.
From Limit of Subsequence equals Limit of Real Sequence, that means $\sequence {x_n}$ can not be convergent.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 5$: Subsequences: $\S 5.3$
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 5$: Subsequences: Bolzano-Weierstrass Theorem: $\S 5.11$: Example $\text{(i)}$




