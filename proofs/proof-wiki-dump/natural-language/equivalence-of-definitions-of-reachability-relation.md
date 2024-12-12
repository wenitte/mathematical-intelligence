# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Reachability_Relation



Theorem
The following definitions of the concept of Reachability Relation are equivalent:

Definition 1
Let $G = \struct {V, A}$ be a digraph.

Then the reachability relation of $G$ is the transitive closure of $A$.

Definition 2
Let $G = \struct {V, A}$ be a digraph.

Let $\RR$ be the relation on $V$ defined by letting $x \mathrel \RR y$ if and only if $y$ is reachable from $x$.
That is, $x \mathrel \RR y$ if and only if there exists a directed walk from $x$ to $y$.

Then $\RR$ is the reachability relation of $G$.


Proof
This follows immediately from Equivalence of Definitions of Reachable.
$\blacksquare$





