# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Disconnected_Space



Theorem
The following definitions of the concept of Disconnected Space are equivalent:

Let $T = \struct {S, \tau}$ be a topological space.

Definition $1$
$T$ is disconnected if and only if $T$ is not connected.

Definition $2$
$T$ is disconnected if and only if there exist non-empty open sets $U, V \in \tau$ such that:

$S = U \cup V$
$U \cap V = \O$
That is, if there exists a partition of $S$ into open sets of $T$.


Proof
By definition $1$, $T$ is disconnected if and only if $T$ is not connected.

By definition of connected topological space:
$T$ is connected if and only if:

there do not exist disjoint, non-empty open sets $X$ and $Y$ of $T$ such that $X \cup Y = S$.

Hence precisely a disconnected space by definition $2$.
$\blacksquare$





