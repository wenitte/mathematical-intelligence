# 

Source: https://proofwiki.org/wiki/Limit_Point_of_Sequence_may_only_be_Adherent_Point_of_Range

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $A \subseteq S$.

Let $\sequence {x_n}$ be a sequence in $A$.
Let $\alpha$ be a limit of $\sequence {x_n}$.

Then $\alpha$ may be only an adherent point of $A$ and not a limit point of $A$.


Proof
Let $T = \struct {S, \tau}$ be the discrete space on $S$.
Let $x \in S$.

Then by definition of discrete space:

$U = \set x$ is an open set of $T$.
Consider the sequence $\sequence {x_n}$ defined as:

$\forall n \in \N: x_n = x$
That is:

$\sequence {x_n} = \tuple {x, x, x, \ldots}$
From Limit Point of Sequence in Discrete Space not always Limit Point of Open Set:

$x$ is not a limit point of $U$.
But from Limit Point of Sequence is Adherent Point of Range:

$x$ is an adherent point of $\set x$.
Hence the result.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $1$: General Introduction: Limit Points




