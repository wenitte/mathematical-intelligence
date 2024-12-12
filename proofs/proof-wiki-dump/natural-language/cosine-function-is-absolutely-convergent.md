# 

Source: https://proofwiki.org/wiki/Cosine_Function_is_Absolutely_Convergent



Theorem
Let $\cos$ be the cosine function.

Then:

$\cos x$ is absolutely convergent for all $x \in \R$.



Complex Case
The complex cosine function $\cos: \C \to \C$ is absolutely convergent.


Proof
Recall the definition of the cosine function:

$\ds \cos x = \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {x^{2 n} } {\paren {2 n}!} = 1 - \frac {x^2} {2!} + \frac {x^4} {4!} - \cdots$

For:

$\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {x^{2 n} } {\paren {2 n}!}$
to be absolutely convergent, we want:

$\ds \sum_{n \mathop = 0}^\infty \size {\paren {-1}^n \frac {x^{2 n} } {\paren {2 n}!} } = \sum_{n \mathop = 0}^\infty \frac {\size x^{2 n} } {\paren {2 n}!}$
to be convergent.

But:

$\ds \sum_{n \mathop = 0}^\infty \frac {\size x^{2 n} } {\paren {2 n}!}$
is just the terms of:

$\ds \sum_{n \mathop = 0}^\infty \frac {\size x^n} {n!}$
for even $n$.

Thus:

$\ds \sum_{n \mathop = 0}^\infty \frac {\size x^{2 n} } {\paren {2 n}!} < \sum_{n \mathop = 0}^\infty \frac {\size x^n}{n!}$

But:

$\ds \sum_{n \mathop = 0}^\infty \frac {\size x^n}{n!} = \exp \size x$
from the Taylor Series Expansion for Exponential Function of $\size x$, which converges for all $x \in \R$.

Also, the sequence of partial sums:

$\ds \sum_{n \mathop = 0}^k \frac {\size x^{2 n} } {\paren {2 n}!}$
is increasing.
The result follows from an application of the Monotone Convergence Theorem (Real Analysis).
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 16.2$




