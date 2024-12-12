# 

Source: https://proofwiki.org/wiki/Convergent_Sequence_Minus_Limit/Proof_1

Theorem
Let $X$ be one of the standard number fields $\Q, \R, \C$.
Let $\sequence {x_n}$ be a sequence in $X$ which converges to $l$.
That is:

$\ds \lim_{n \mathop \to \infty} x_n = l$

Then:

$\ds \lim_{n \mathop \to \infty} \cmod {x_n - l} = 0$


Proof
Let $\epsilon > 0$.
We need to show that there exists $N$ such that:

$\forall n > N: \size {\paren {\size {x_n - l} - 0} } < \epsilon$
But:

$\size {\paren {\size {x_n - l} - 0} } = \size {x_n - l}$
So what needs to be shown is just:

$x_n \to l$ as $n \to \infty$
which is the definition of $\ds \lim_{n \mathop \to \infty} x_n = l$.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 4$: Convergent Sequences: Exercise $\S 4.29 \ (1) \ \text {(i)}$




