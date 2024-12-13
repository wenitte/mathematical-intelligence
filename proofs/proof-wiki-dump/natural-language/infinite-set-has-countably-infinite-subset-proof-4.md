# 

Source: https://proofwiki.org/wiki/Infinite_Set_has_Countably_Infinite_Subset/Proof_4

Theorem
If the axiom of countable choice is accepted, then it can be proven that every infinite set has a countably infinite subset.


Proof
Let $S$ be an infinite set.

For all $n \in \N$, let:

$\FF_n = \set {T \subseteq S: \size T = n}$
where $\size T$ denotes the cardinality of $T$.
From Set is Infinite iff exist Subsets of all Finite Cardinalities:

$\FF_n$ is non-empty.
Using the axiom of countable choice, we can obtain a sequence $\sequence {S_n}_{n \mathop \in \N}$ such that $S_n \in \FF_n$ for all $n \in \N$.

Define:

$\ds T = \bigcup_{n \mathop \in \N} S_n \subseteq S$
For all $n \in \N$, $S_n$ is a subset of $T$ whose cardinality is $n$.
From Set is Infinite iff exist Subsets of all Finite Cardinalities:

$T$ is infinite.
From Countable Union of Countable Sets is Countable, $T$ is countable.
$\blacksquare$


Axiom of Countable Choice
This theorem depends on the Axiom of Countable Choice, by way of Countable Union of Countable Sets is Countable.
Although not as strong as the Axiom of Choice, the Axiom of Countable Choice is similarly independent of the Zermelo-Fraenkel axioms.
As such, mathematicians are generally convinced of its truth and believe that it should be generally accepted.





