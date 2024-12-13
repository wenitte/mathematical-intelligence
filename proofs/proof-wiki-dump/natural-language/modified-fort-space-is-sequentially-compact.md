# 

Source: https://proofwiki.org/wiki/Modified_Fort_Space_is_Sequentially_Compact

Theorem
Let $T = \struct {S, \tau_{a, b} }$ be a modified Fort space.

Then $T$ is sequentially compact.


Proof
Let $\sequence {x_n}_{n \mathop \in \N}$ be an infinite sequence in $T$.
Suppose $\sequence {x_n}$ takes an infinite number of distinct values in $S$.
Then there is an infinite subsequence $\sequence {x_{n_r} }_{r \mathop \in \N}$ with distinct terms.

Let $U$ be a neighborhood of $a$.
Then $S \setminus U$ is a finite set by definition.
Thus there exists $N \in \N$ such that $\forall r > N: x_{n_r} \in U$.
Thus $\sequence {x_{n_r} }$ converges to $a$.

Otherwise $\sequence {x_n}$ only takes a finite number of distinct values.
Then, since $\sequence {x_n}$ is infinite, there exists $x \in S$ such that:

$\forall N \in \N: \exists n > N: x = x_n$
This implies that we can take a subsequence of $\sequence {x_n}$ which is constant, and which converges to that constant.

We can conclude then that, by definition, $T$ is a sequentially compact space.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $27$. Modified Fort Space: $7$




