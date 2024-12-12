# 

Source: https://proofwiki.org/wiki/Derivative_of_Complex_Polynomial

Theorem
Let $a_n \in \C$ for $n \in \set {0, 1, \ldots, N}$, where $N \in \N$.
Let $f: \C \to \C$ be a complex polynomial defined by $\ds \map f z = \sum_{n \mathop = 0}^N a_n z^n$.

Then $f$ is complex differentiable and its derivative is:

$\ds \map {f'} z = \sum_{n \mathop = 1}^N n a_n z^{n - 1}$


Proof
For all $n > N$, put $a_n = 0$.
Then:

$\ds \map f z = \sum_{n \mathop = 0}^\infty a_n z^n$
The result now follows from Derivative of Complex Power Series.
$\blacksquare$





