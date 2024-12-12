# 

Source: https://proofwiki.org/wiki/Fortissimo_Space_is_not_Sequentially_Compact

Theorem
Let $T = \struct {S, \tau_p}$ be a Fortissimo space.

Then $T$ is not sequentially compact.


Proof
Let $T' = \struct {S \setminus \set p, \tau_p}$ be the subspace of $T$ induced by $S \setminus \set p$.
From Discrete Subspace of Fortissimo Space, $T'$ is a discrete topological space.

Let $H = \sequence {x_n}_{n \mathop \in \N}$ be a sequence of distinct terms of $S \setminus \set p$.
That is:

$\forall n \in \N: x_n \ne p$
and that:

$n \ne m \implies x_n \ne x_m$

By definition, $H$ is a sequence of distinct terms of $S \setminus \set p$.
From Convergence of Sequence in Discrete Space: Corollary, $H$ does not converge in $T'$.

$H$ is by definition countable, so from Closed Sets of Fortissimo Space it follows that $H$ is closed.
Thus by definition $S \setminus H$ is open.
Also, as $p \notin H$ by definition of $H$, it follows that $P \in S \setminus H$.
By definition, $S \setminus H$ is an open neighborhood of $p$.
Suppose $H$ converges to the limit $p$
Then, by definition of convergence, for any open set $U \in \tau_p$ such that $p \in U$, there exists some $N \in \R$ such that $n > N \implies x_n \in U$.
But $H \cap \paren {S \setminus H} = \O$, and so $H$ cannot converge to $p \in S \setminus H$.

The result follows from the fact that every subsequence of $H$ is also a sequence of distinct terms of $S \setminus \set p$.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $25$. Fortissimo Space: $2$




