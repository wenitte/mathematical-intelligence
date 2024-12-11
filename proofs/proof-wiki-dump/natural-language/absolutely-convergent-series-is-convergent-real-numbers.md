# 

Source: https://proofwiki.org/wiki/Absolutely_Convergent_Series_is_Convergent/Real_Numbers

Theorem
Let $\ds \sum_{n \mathop = 1}^\infty a_n$ be an absolutely convergent series in $\R$.

Then $\ds \sum_{n \mathop = 1}^\infty a_n$ is convergent.


Proof
By the definition of absolute convergence, we have that $\ds \sum_{n \mathop = 1}^\infty \size {a_n}$ is convergent.
From the Comparison Test we have that $\ds \sum_{n \mathop = 1}^\infty a_n$ converges if and only if:

$\forall n \in \N_{>0}: \size {a_n} \le b_n$
where $\ds \sum_{n \mathop = 1}^\infty b_n$ is convergent.

So substituting $\size {a_n}$ for $b_n$ in the above, the result follows.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 6.21$




