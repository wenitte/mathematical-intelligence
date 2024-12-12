# 

Source: https://proofwiki.org/wiki/Convergent_Sequence_Minus_Limit

Theorem
Let $X$ be one of the standard number fields $\Q, \R, \C$.
Let $\sequence {x_n}$ be a sequence in $X$ which converges to $l$.
That is:

$\ds \lim_{n \mathop \to \infty} x_n = l$

Then:

$\ds \lim_{n \mathop \to \infty} \cmod {x_n - l} = 0$


Proof 1
Let $\epsilon > 0$.
We need to show that there exists $N$ such that:

$\forall n > N: \size {\paren {\size {x_n - l} - 0} } < \epsilon$
But:

$\size {\paren {\size {x_n - l} - 0} } = \size {x_n - l}$
So what needs to be shown is just:

$x_n \to l$ as $n \to \infty$
which is the definition of $\ds \lim_{n \mathop \to \infty} x_n = l$.
$\blacksquare$


Proof 2
We note that all of $\Q, \R, \C$ can be considered as metric spaces.
Then under the usual metric:

$\map d {x_n, l} = \cmod {x_n - l}$.
The result follows from the definition of metric:

$\map d {x_n, l} = 0 \iff x_n = l$.
$\blacksquare$





