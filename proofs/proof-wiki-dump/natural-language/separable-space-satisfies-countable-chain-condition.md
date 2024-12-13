# 

Source: https://proofwiki.org/wiki/Separable_Space_satisfies_Countable_Chain_Condition

Theorem
Let $T = \struct {S, \tau}$ be a separable topological space.
Then $T$ satisfies the countable chain condition.


Proof
In order to demonstrate that $T$ satisfies the countable chain condition, it is sufficient to demonstrate that every disjoint set of open sets of $T$ is countable.

Because $T$ is separable, there exists a subset $\set {y_n : n \in \N}$ of $S$ which is everywhere dense in $S$.
Now consider an indexed family $\family {U_j}_{j \mathop \in J}$ of non-empty open sets of $T$ such that:

$\forall i, j \in J, i \ne j: U_i \cap U_j = \O$
Using Equivalence of Definitions of Everywhere Dense this implies that for every $j \in J$ there has to exist $n_j \in \N$ such that $y_{n_j} \in U_j$.
This gives rise to a well-defined mapping $f: J \to \N$ via $\map f j := n_j$.

In particular $f$ is injective:
Aiming for a contradiction, suppose there were to exist $i, j \in J$, $i \ne j$ such that $n_i = n_j$.
Then:

$y_{n_i} \in U_i \cap U_j$
But the latter is the empty set by assumption.
From this contradiction it follows that $J$ is countable by definition.
This concludes the proof. 
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $3$: Compactness: Countability Axioms and Separability




