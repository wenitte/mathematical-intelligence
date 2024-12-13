# 

Source: https://proofwiki.org/wiki/Power_Set_is_Sigma-Algebra

Theorem
The power set of a set is a sigma-algebra.


Proof
Let $S$ be a set, and let $\powerset S$ be its power set.
We have that a power set is an algebra of sets, and so:

$(1): \quad \forall A, B \in \powerset S: A \cup B \in \powerset S$
$(2): \quad \relcomp S A \in \powerset S$
Let $\sequence {A_i}$ be a countably infinite sequence of sets in $\powerset S$.
Then from Power Set is Closed under Countable Unions:

$\ds \bigcup_{i \mathop \in \N} A_i \in \powerset S$
So, by definition, $\powerset S$ is a sigma-algebra.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $3.3 \ \text{(i)}$
2013: Donald L. Cohn: Measure Theory (2nd ed.) ... (previous) ... (next): $1.1$: Algebras and Sigma-Algebras




