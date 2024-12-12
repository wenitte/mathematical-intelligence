# 

Source: https://proofwiki.org/wiki/Existence_of_Urysohn_Function_does_not_guarantee_Normal_Space

Theorem
Let $T = \struct {S, \tau}$ be a regular space.
Let $T$ have the property that:

For all closed sets $A, B \subseteq S$ of $T$ such that $A \cap B = \O$, there exists an Urysohn function for $A$ and $B$.

Then it is not necessarily the case that $T$ is a normal space.


Proof
Let $T$ have the specified property.
By definition of a normal space, for $T$ to be normal, it has to be both $T_4$ space and a $T_1$ space.
From Urysohn's Lemma Converse, $T$ is a $T_4$ space.
It remains to be shown that $T$ is not necessarily a $T_1$ space.

This is done by Proof by Counterexample:
Let $S$ be a set and let $\PP$ be a partition on $S$ which is specifically not the (trivial) partition of singletons.
Let $T = \struct {S, \tau}$ be the partition space whose basis is $\PP$.

From Partition Topology is $T_4$, we have that $T$ is a $T_4$ space.
From Urysohn's Lemma, for all $A, B \subseteq S$ be closed sets of $T$ such that $A \cap B = \O$, there exists an Urysohn function for $A$ and $B$.

From Partition Topology is not $T_1$, $T$ is not a $T_1$ space.
The result follows.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $2$: Separation Axioms: Completely Regular Spaces




