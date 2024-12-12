# 

Source: https://proofwiki.org/wiki/Countable_Basis_of_Real_Number_Line

Theorem
Let $\struct {\R, \tau_d}$ be the real number line with the usual (Euclidean) topology.
Let $\BB$ be the set of subsets of $\R$ defined as:

$\BB = \set {\openint a b: a, b \in \Q,\ a < b}$
That is, $\BB$ is the set of open intervals of $\R$ whose endpoints are rational numbers.

Then $\BB$ forms a countable basis of $\struct {\R, \tau_d}$


Proof
Let $U \in \tau_d$.
Let $x \in U$.
Let:

$\BB' = \set {\openint c d: c, d \in \R,\ a < b}$
By Basis for Euclidean Topology on Real Number Line, $\BB'$ is an analytic basis for the Euclidean topology on $\R$.
Then let $\openint c d \in \BB'$ such that $x \in \openint c d \subseteq U$.
That is, $c < x < d$.
By Between two Real Numbers exists Rational Number, let $a \in \Q$ such that $c < a < x$.
By Between two Real Numbers exists Rational Number, let $b \in \Q$ such that $x < b < d$.
Then $\openint a b \in \BB$ and $x \in \openint a b$.
Let $y \in \openint a b$.
Then $c < a < y < b < d$ implies $y \in \openint c d$.
Thus, $\openint a b \subseteq \openint c d \subseteq U$.
It follows that $\BB$ is a basis of $\struct {\R, \tau_d}$

It remains to be confirmed that $\BB$ is countable.
By Rational Numbers are Countably Infinite, $\Q$ is countable.
By Cartesian Product of Countable Sets is Countable, $\Q \times \Q$ is countable.
Define the mapping $f: \Q \times \Q \to \BB$ by:

$\map f {q, r} := \begin {cases}
\openint q r & : q < r \\
\openint 0 1 & : q \ge r
\end {cases}$
For each $\openint a b \in \BB$, we have $\map f {a, b} = \openint a b$.
Then $f$ is a surjection.
By Image of Countable Set under Mapping is Countable, $\BB$ is countable.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $28$. Euclidean Topology: $2$




