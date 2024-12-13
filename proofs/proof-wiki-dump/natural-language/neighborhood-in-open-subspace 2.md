# 

Source: https://proofwiki.org/wiki/Neighborhood_in_Open_Subspace



Theorem
Let $T = \struct{S, \tau}$ be a topological space.

Let $U \subseteq S$ be an open subset.
Let $\tau_U$ denote the subspace topology on $U$.

Let $s \in U$
Let $N \subseteq U$ be a subset.

Then:

$N$ is a neighborhood of $s$ in $\struct{U, \tau_U}$
if and only if

$N$ is a neighborhood of $s$ in $\struct{S, \tau}$


Proof
Necessary Condition
Let $N$ be a neighborhood of $s$ in $\struct{U, \tau_U}$.
By definition of neighborhood:

$\exists V \in \tau_U : x \in V \subseteq N$
From Open Set in Open Subspace:

$V \in \tau$
Hence:

$\exists V \in \tau : x \in V \subseteq N$
It follows that $N$ is a neighborhood of $s$ in $\struct{S, \tau}$ by definition.
$\Box$


Sufficient Condition
Let $N$ be a neighborhood of $s$ in $\struct{S, \tau}$.
By definition of neighborhood:

$\exists W \in \tau : x \in W \subseteq N$
Let $V = W \cap U$.
From Subset Relation is Transitive:

$V \subseteq N$
By definition of topological space:

$V \in \tau$.
From Open Set in Open Subspace:

$V \in \tau_U$
Hence:

$\exists V \in \tau_U : x \in V \subseteq N$

It follows that $N$ is a neighborhood of $s$ in $\struct{U, \tau_U}$ by definition.
$\blacksquare$


Also see
Open Set in Open Subspace
Closed Set in Closed Subspace




