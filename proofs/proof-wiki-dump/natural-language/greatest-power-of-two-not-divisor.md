# 

Source: https://proofwiki.org/wiki/Greatest_Power_of_Two_not_Divisor

Lemma
Let $S = \set {1, 2, 3, 4, \ldots, n}$ be a set of integers from $1$ through $n$.
Let $2^t$ be the greatest power of $2$ in $S$.

Then $2^t$ does not divide any other integer in $S$.
That is, no other member of $S$ is a multiple of $2^t$.


Proof
Let $k$ be a multiple of $2^t$ in $S$.
Then $k = 2^t \times \ell$ for some $\ell \in \Z, \ell \ge 1$.
If $\ell \ge 2$, then we would have $k = \ell \times 2^t \ge 2\times 2^t = 2^{t + 1}$.
As $S$ contains all integers up to $k$, we would have $2^{t + 1} \in S$, contradicting $2^t$ being the highest power of $2$ in $S$.
So $\ell = 1$, that is, $2^t$ is the only multiple of $2^t$ in $S$.
$\blacksquare$ 


Also see
Harmonic Number is not Integer




