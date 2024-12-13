# 

Source: https://proofwiki.org/wiki/Rationals_plus_Irrational_are_Everywhere_Dense_in_Irrationals

Theorem
Let $\struct {\R \setminus \Q, \tau_d}$ be the irrational number space under the Euclidean topology $\tau_d$.
Let $x \in \R \setminus \Q$ be an arbitrary irrational number.
Let $S_x$ be the set defined as:

$S_x := \set {x + q: q \in \Q}$

Then $S_x$ is everywhere dense in $\struct {\R \setminus \Q, \tau_d}$.


Proof
Let $y \in \R \setminus \Q$.
Let $U \subseteq \R \setminus \Q$ be an open set of $\struct {\R \setminus \Q, \tau_d}$ such that $x \in U$.

From Basis for Euclidean Topology on Real Number Line, the set of all open real intervals of $\R$ form a basis for $\struct {\R, \tau_d}$.
By Basis for Topological Subspace, the set of all intersections of $\R \setminus \Q$ and open real intervals of $\R$ form a basis for $\struct {\R \setminus \Q, \tau_d}$.
So there exists $V = \paren {\R \setminus \Q} \cap \openint {y - \epsilon} {y + \epsilon} \subseteq U$ for some $\epsilon > 0$ such that $y \in V$.
By Between two Real Numbers exists Rational Number we have:

$\exists r \in Q: y - \epsilon - x < r < y + \epsilon - x$.
Then:

$y - \epsilon < x + r < y + \epsilon$
Then $x + r \in S_x \cap V \subseteq S_x \cap U$.

Since $y$ and $U$ are arbitrary:
$S_x$ is everywhere dense in $\struct {\R \setminus \Q, \tau_d}$.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $31$. The Irrational Numbers: $7$




