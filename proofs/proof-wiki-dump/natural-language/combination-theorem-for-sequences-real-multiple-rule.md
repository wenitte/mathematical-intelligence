# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Sequences/Real/Multiple_Rule

Theorem
Let $\sequence {x_n}$ be a sequences in $\R$.
Let $\sequence {x_n}$ be convergent to the following limit:

$\ds \lim_{n \mathop \to \infty} x_n = l$

Let $\lambda \in \R$.

Then:

$\ds \lim_{n \mathop \to \infty} \paren {\lambda x_n} = \lambda l$


Proof
Let $\epsilon > 0$.
We need to find $N$ such that:

$\forall n > N: \size {\lambda x_n - \lambda l} < \epsilon$
If $\lambda = 0$ the result is trivial.

So, assume $\lambda \ne 0$.
Then $\size \lambda > 0$ from the definition of the absolute value of $\lambda$.
Hence $\dfrac \epsilon {\size \lambda} > 0$.

We have that $x_n \to l$ as $n \to \infty$.
Thus it follows that:

$\exists N: \forall n > N: \size {x_n - l} < \dfrac \epsilon {\size \lambda}$
That is:

$\forall n > N: \size \lambda \size {x_n - l} < \epsilon$

But we have:














\(\ds \size \lambda \size {x_n - l}\)

\(=\)







\(\ds \size {\lambda \paren {x_n - l} }\)





Absolute Value Function is Completely Multiplicative














\(\ds \)

\(=\)







\(\ds \size {\lambda x_n - \lambda l}\)










Hence:

$\ds \lim_{n \mathop \to \infty} \paren {\lambda x_n} = \lambda l$
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 4$: Convergent Sequences: Exercise $\S 4.6 \ (3)$
1953: Walter Rudin: Principles of Mathematical Analysis: $3.3b$




