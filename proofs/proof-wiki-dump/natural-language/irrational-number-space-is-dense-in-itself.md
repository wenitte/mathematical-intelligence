# 

Source: https://proofwiki.org/wiki/Irrational_Number_Space_is_Dense-in-itself



Theorem
Let $\struct {\R \setminus \Q, \tau_d}$ be the irrational number space under the Euclidean topology $\tau_d$.

Then $\struct {\R \setminus \Q, \tau_d}$ is dense-in-itself.


Proof
Let $x \in \R \setminus \Q$.
Let $U \subseteq \R$ be an open set of $\struct {\R \setminus \Q, \tau_d}$ such that $x \in U$.

From Basis for Euclidean Topology on Real Number Line, the set of all open real intervals of $\R$ form a basis for $\struct {\R, \tau_d}$.
By Basis for Topological Subspace, the set of all intersections of $\R \setminus \Q$ and open real intervals of $\R$ form a basis for $\struct {\R \setminus \Q, \tau_d}$.
So there exists $V = \paren {\R \setminus \Q} \cap \openint {x - \epsilon} {x + \epsilon} \subseteq U$ for some $\epsilon > 0$ such that $x \in V$.

By Between two Real Numbers exists Irrational Number we have:

$\exists r \in \R \setminus \Q: x < r < x + \epsilon$.
Then $r \in \paren {\R \setminus \Q} \cap \openint {x - \epsilon} {x + \epsilon}$.
Therefore $x$ is not isolated.
Hence $\struct {\R \setminus \Q, \tau_d}$ is dense-in-itself.
$\blacksquare$


Also see
Rational Number Space is Dense-in-itself


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $31$. The Irrational Numbers: $9$




