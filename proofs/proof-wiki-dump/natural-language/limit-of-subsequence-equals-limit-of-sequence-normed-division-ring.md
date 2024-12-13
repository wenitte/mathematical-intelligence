# 

Source: https://proofwiki.org/wiki/Limit_of_Subsequence_equals_Limit_of_Sequence/Normed_Division_Ring

Theorem
Let $\struct {R, \norm {\, \cdot \,} }$ be a normed division ring with zero: $0$.
Let $\sequence {x_n}$ be a sequence in $R$.
Let $\sequence {x_n}$ be convergent in the norm $\norm {\, \cdot \,}$ to the following limit:

$\ds \lim_{n \mathop \to \infty} x_n = l$
Let $\sequence {x_{n_r} }$ be a subsequence of $\sequence {x_n}$.

Then:

$\sequence {x_{n_r} }$ is convergent and $\ds \lim_{r \mathop \to \infty} x_{n_r} = l$


Proof
Let $d$ denote the metric induced by $\norm {\, \cdot \,}$, that is,

$d \tuple {x, y} = \norm {x - y}$

By definition of convergence in a normed division ring:

$\sequence {x_n}$ converges to $l$ in $\struct {R, \norm {\, \cdot \,} }$ if and only if $\sequence {x_n}$ converges to $l$ in the metric space $\struct {R, d}$.

We can then apply the result of Limit of Subsequence equals Limit of Sequence for metric spaces to get the result for normed division rings.
$\blacksquare$





