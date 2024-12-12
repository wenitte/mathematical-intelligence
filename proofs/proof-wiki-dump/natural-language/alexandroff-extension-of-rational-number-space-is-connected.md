# 

Source: https://proofwiki.org/wiki/Alexandroff_Extension_of_Rational_Number_Space_is_Connected

Theorem
Let $\struct {\Q, \tau_d}$ be the rational number space under the Euclidean topology $\tau_d$.
Let $p$ be a new element not in $\Q$.
Let $\Q^* := \Q \cup \set p$.
Let $T^* = \struct {\Q^*, \tau^*}$ be the Alexandroff extension on $\struct {\Q, \tau_d}$.

Then $T^*$ is a connected space.


Proof
By definition $T^*$ is a connected space of $T^*$ if and only if it admits no separation.

Aiming for a contradiction, suppose $T^*$ does admit a separation.
That is, there exist open sets $A, B \in \tau^*$ such that $A, B \ne \O$, $A \cup B = \Q^*$ and $A \cap B = \O$.
That is, both $A$ and $B = \relcomp {\Q^*} A$ are open in $T^*$.

Without loss of generality, Let $p \in A$.
Then $B$ is a closed and compact subset of $\Q$.
From Compact Set of Rational Numbers is Nowhere Dense, $B$ is nowhere dense.
From Set is Closed iff Equals Topological Closure, $B$ equals its closure.
Thus by definition of nowhere dense, the interior of $B$ is empty.

We have that $B$ is open in $T^*$ and $p \notin B$.
Thus it follows by definition of Alexandroff extension that $B$ is open in $\struct {\Q, \tau_d}$.
But from Interior of Open Set, $B$ equals its interior.
This contradicts the deduction above that the interior of $B$ is empty.
Hence by Proof by Contradiction $B$ cannot be open in $T^*$.
That is, $A$ and $B$ cannot form a separation of $T^*$.
Thus $T^*$ is a connected space by definition.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $35$. One Point Compactification Topology: $5$




