# 

Source: https://proofwiki.org/wiki/Axiom:Axiom_of_Choice_for_Finite_Sets/Proof_from_Ordering_Principle

Theorem
Suppose that the Ordering Principle holds.
Let $\SS$ be a non-empty set of finite non-empty sets.

Then there exists a choice function for $\SS$.


Proof from the Ordering Principle
By the Axiom of Union, $\SS$ has a union.
Let $U = \bigcup \SS$.
By the Ordering Principle, there is a total ordering $\preceq$ on $U$.
For each $S \in \SS$, $S$ is a chain in $U$.
By Finite Non-Empty Subset of Totally Ordered Set has Smallest and Greatest Elements, each $S \in S$ has a minimum.
Let $f: \SS \to U$ be defined by:

$\map f S = \min S$
Then $f$ is a choice function for $\SS$.
$\blacksquare$





