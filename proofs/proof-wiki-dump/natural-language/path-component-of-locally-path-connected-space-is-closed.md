# 

Source: https://proofwiki.org/wiki/Path_Component_of_Locally_Path-Connected_Space_is_Closed

Theorem
Let $T = \struct {S, \tau}$ be a locally path-connected topological space.
Let $G$ be a path component of $T$.

Then $G$ is open in $T$.


Proof
Let $x \in \partial G$, where $\partial G$ denotes the boundary of $G$.
By Open Set Axiom $\paren {\text O 3 }$: Underlying Set is Element of Topology, it follows that $S \in \tau$.
As $x \in S$, it follows that $S$ is a neighborhood of $x$.
By definition of locally path-connected space, it follows that there exists a path-connected neighborhood $N$ of $x$ such that $N \subseteq S$.
By definition of boundary, there exists $y \in N$ such that $y \in G$.
As $N$ is path-connected, there exists a path between $x$ and $y$.
By definition of path component , it follows that $x \in G$.
Thus, $\partial G \subseteq G$.
From Set is Closed iff it Contains its Boundary, it follows that $G$ is closed.
$\blacksquare$


Sources
2000: James R. Munkres: Topology (2nd ed.): $3$: Connectedness and Compactness: $\S 25$: Components and Local Connectedness




