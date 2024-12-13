# 

Source: https://proofwiki.org/wiki/Irrational_Number_Space_is_Totally_Separated

Theorem
Let $\struct {\R \setminus \Q, \tau_d}$ be the irrational number space under the Euclidean topology $\tau_d$.

Then $\struct {\R \setminus \Q, \tau_d}$ is totally separated.


Proof
Let $x, y \in \R \setminus \Q$.
From Between two Real Numbers exists Rational Number:

$\exists \alpha \in \Q: x < \alpha < y$
Consider the unbounded open real intervals:

$A := \openint \gets \alpha$, $B := \openint \alpha \to$
Let:

$U := A \cap \paren {\R \setminus \Q}$, $V := B \cap \paren {\R \setminus \Q}$
Let $\beta \in \R \setminus \Q$.
Then either:

$(1): \quad \beta < \alpha$
in which case:

$\beta \in U$
or:

$(2): \quad \beta > \alpha$
in which case:

$\beta \in V$
Thus $U \cup V = \R \setminus \Q$.

Let $a \in U$.
Then $a < \alpha$ and so $a \notin V$.
Similarly, let $b \in V$.
Then $b > \alpha$ and so $b \notin U$.

Then note that $x \in U$ and $y \in V$.
Thus $U \ne \O$ and $V \ne \O$.

Thus, by definition, $U$ and $V$ constitute a separation of $\R \setminus \Q$ such that $x \in U$ and $y \in V$.
Hence the result by definition of totally separated.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $31$. The Irrational Numbers: $9$




