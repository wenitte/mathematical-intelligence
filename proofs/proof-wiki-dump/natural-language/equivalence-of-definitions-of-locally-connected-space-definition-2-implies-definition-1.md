# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Locally_Connected_Space/Definition_2_implies_Definition_1

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $T$ be weakly locally connected at each point of $T$.
That is, each point of $T$ has a neighborhood basis consisting of connected sets of $T$.

Then:

each point of $T$ has a local basis consisting entirely of connected sets in $T$.


Proof
Let $x \in S$ and $x \in U \in \tau$.
Let $\BB_x = \set {W \in \tau : x \in W, W \text{ is connected in } T}$.
By definition of local basis, we have to show that there exists a connected open set $V \in \BB_x$ with $x \in V \subset U$.
Let $V = \map {\operatorname{Comp}_x} U$ denote the component of $x$ in $U$.
From Open Set in Open Subspace, it suffices to show that $V$ is open in $U$.
By Set is Open iff Neighborhood of all its Points, we may do this by showing that $V$ is a neighborhood in $U$ of all of its points.

Let $y \in V$.
By assumption, there exists a connected neighborhood $W$ of $y$ in $T$ with $W \subset U$.
By Neighborhood in Topological Subspace, $W$ is a neighborhood of $y$ in $U$.
By definition of component:

$W \subseteq \map {\operatorname{Comp}_y} U = \map {\operatorname{Comp}_x} U = V$
By Neighborhood iff Contains Neighborhood, $V$ is a neighborhood of $y$ in $U$.
Because $y$ was arbitrary, $V$ is open in $U$.
From Open Set in Open Subspace, $V$ is open in $T$.
Hence $V \in \BB_x$.
Because $U$ was arbitrary, $\BB_x$ is a local basis of $x$ consisting of (open) connected sets.
Since $x$ was arbitrary, then each point of $T$ has a local basis consisting entirely of connected sets in $T$.
$\blacksquare$





