# 

Source: https://proofwiki.org/wiki/Limit_of_Subsequence_equals_Limit_of_Sequence/Normed_Vector_Space

Theorem
Let $\struct {X, \norm {\, \cdot \,} }$ be a normed vector space.
Let $\sequence {x_n}$ be a sequence in $X$.
Let $\sequence {x_n}$ be convergent in the norm $\norm {\, \cdot \,}$ to the following limit:

$\ds \lim_{n \mathop \to \infty} x_n = l$
Let $\sequence {x_{n_r} }$ be a subsequence of $\sequence {x_n}$.

Then:

$\sequence {x_{n_r} }$ is convergent and $\ds \lim_{r \mathop \to \infty} x_{n_r} = l$

That is, the limit of a convergent sequence equals the limit of a subsequence of it.


Proof
Let $\epsilon > 0$.
Since $\ds \lim_{n \mathop \to \infty} x_n = l$, it follows from the definition of limit that:

$\exists N \in \N : \forall n \in \N : n > N \implies \norm {x_n - l} < \epsilon$

Now let $R = N$.
Then from Strictly Increasing Sequence of Natural Numbers‎:

$\forall r > R: n_r \ge r$
Thus $n_r > N$ and so:

$\norm {x_{n_r} - l} < \epsilon$

The result follows.
$\blacksquare$





