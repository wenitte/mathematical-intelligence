# 

Source: https://proofwiki.org/wiki/Sequence_Converges_to_Within_Half_Limit/Real_Numbers

Theorem
Let $\sequence {x_n}$ be a sequence in $\R$.
Let $\sequence {x_n}$ be convergent to the limit $l$.
That is, let $\ds \lim_{n \mathop \to \infty} x_n = l$.

Suppose $l > 0$.
Then:

$\exists N: \forall n > N: x_n > \dfrac l 2$

Similarly, suppose $l < 0$.
Then:

$\exists N: \forall n > N: x_n < \dfrac l 2$


Proof
Suppose $l > 0$.
From the definition of convergence to a limit:

$\forall \epsilon > 0: \exists N: \forall n > N: \size {x_n - l} < \epsilon$
That is, $l - \epsilon < x_n < l + \epsilon$.
As this is true for all $\epsilon > 0$, it is also true for $\epsilon = \dfrac l 2$ for some value of $N$.
Thus:

$\exists N: \forall n > N: x_n > \dfrac l 2$
as required.

Now suppose $l < 0$.
By a similar argument:

$\forall \epsilon > 0: \exists N: \forall n > N: l - \epsilon < x_n < l + \epsilon$
Thus it is also true for $\epsilon = -\dfrac l 2$ for some value of $N$.
Thus:

$\exists N: \forall n > N: x_n < \dfrac l 2$
as required.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 4$: Convergent Sequences: Exercise $\S 4.29 \ (2)$




