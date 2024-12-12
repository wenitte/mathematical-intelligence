# 

Source: https://proofwiki.org/wiki/Compact_Set_of_Rational_Numbers_is_Nowhere_Dense

Theorem
Let $\struct {\Q, \tau_d}$ be the rational number space under the Euclidean topology $\tau_d$.
Let $S \subseteq \Q$ be a compact set of $\Q$.

Then $S$ is nowhere dense in $\Q$.


Proof
By Compact Subspace of Hausdorff Space is Closed, $S$ is closed in $\Q$.
By Set is Closed iff Equals Topological Closure, $S = S^-$.

Aiming for a contradiction, suppose $S$ is not nowhere dense in $\Q$.
Then $S^-$ contains some non-empty open set.
From Basis for Euclidean Topology on Real Number Line, the set of all open real intervals of $\R$ form a basis for $\struct {\R, \tau_d}$.
By Basis for Topological Subspace, the set of all intersections of $\Q$ and open real intervals of $\R$ form a basis for $\struct {\Q, \tau_d}$.
So there exists $V = \Q \cap \openint {a'} {b'} \subseteq S^- = S$ for some $a' < b'$.

By Between two Real Numbers exists Irrational Number we have:

$\exists r \in \R \setminus \Q: a' < r < b'$

By Between two Real Numbers exists Rational Number we have:

$\exists a, b \in \Q: a' < a < r < b < b'$

Thus $\Q \cap \closedint a b$ is a closed subset of $S$ in $\Q$.
By Closed Subspace of Compact Space is Compact, $\Q \cap \closedint a b$ is compact.

Now we construct an open cover for $\Q \cap \closedint a b$:

Let $C = \openint r {b + 1} \cap \Q$.
Let $C_q = \openint {a - 1} q \cap \Q$ for each $q \in \openint a r \cap \Q$.
Then $C$ and $C_q$ are open sets.
Let $\CC = \set C \cup \set {C_q: q \in \openint a r \cap \Q}$.

To show that $\CC$ is an open cover for $\Q \cap \closedint a b$:


Pick any $x \in \Q \cap \closedint a b$.


Suppose $x > r$.
Then $r < x \le b < b + 1$.
Therefore $x \in \openint r {b + 1} = C \in \CC$.


Suppose $x < r$.
By Between two Real Numbers exists Rational Number we have:
$\exists q \in \Q: a - 1 < a \le x < q < r$
Then $x \in \openint {a - 1} q$ and $q \in \openint a r$.
Thus $x \in C_q \in \CC$.


Therefore $x \in \bigcup \CC$, showing that $\CC$ is an open cover for $\Q \cap \closedint a b$.

Since $\Q \cap \closedint a b$ is compact, $\CC$ has a finite subcover, $\CC'$.
This finite subcover can only contain a finite number of sets in $\set {C_q: q \in \openint a r \cap \Q}$.
Therefore $\set {q: C_q \in \CC'}$ has a greatest element, $q'$.
We have that $q' \in \openint a r \cap \Q$.
By Between two Real Numbers exists Rational Number we have:

$\exists q^* \in \Q: a < q' < q^* < r < b$
So $q^* \in \Q \cap \closedint a b$.

But for all $q \in \hointl a {q'} \cap \Q$:

$q^* \notin C_q = \openint {a - 1} q \cap \Q$
We also have $q^* \notin C = \openint r {b + 1} \cap \Q$.
Hence $q^* \notin \bigcup \CC'$.
So $\CC'$ is not a cover for $\Q \cap \closedint a b$.
This is a contradiction.

Thus $S$ is nowhere dense in $\Q$.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $30$. The Rational Numbers: $8$




