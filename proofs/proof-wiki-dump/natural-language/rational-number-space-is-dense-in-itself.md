# 

Source: https://proofwiki.org/wiki/Rational_Number_Space_is_Dense-in-itself



Theorem
Let $\struct {\Q, \tau_d}$ be the rational number space under the Euclidean topology $\tau_d$.

Then $\struct {\Q, \tau_d}$ is dense-in-itself.


Proof
Let $x \in \Q$.
Let $U \subseteq \R$ be an open set of $\struct {\Q, \tau_d}$ such that $x \in U$.

From Basis for Euclidean Topology on Real Number Line, the set of all open real intervals of $\R$ form a basis for $\struct {\R, \tau_d}$.
By Basis for Topological Subspace, the set of all intersections of $\Q$ and open real intervals of $\R$ form a basis for $\struct {\Q, \tau_d}$.
So there exists $V = \Q \cap \openint {x - \epsilon} {x + \epsilon} \subseteq U$ for some $\epsilon > 0$ such that $x \in V$.

By Between two Real Numbers exists Rational Number we have:

$\exists r \in \Q: x < r < x + \epsilon$.
Then $r \in \Q \cap \openint {x - \epsilon} {x + \epsilon}$.
Therefore $x$ is not isolated.
Hence $\struct {\Q, \tau_d}$ is dense-in-itself.
$\blacksquare$


Also see
Irrational Number Space is Dense-in-itself


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $30$. The Rational Numbers: $9$




