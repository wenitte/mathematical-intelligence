# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Weakly_Locally_Connected_at_Point/Definition_2_implies_Definition_1

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $x \in S$.
Let every open neighborhood $U$ of $x$ contain an open neighborhood $V$ of $x$ such that every two points of $V$ lie in some connected subset of $U$.

Then:

$x$ has a neighborhood basis consisting of connected sets.


Proof
Let $\BB = \set {B \subseteq S: B \text{ is a connected neighborhood of } x}$
It will be shown that $\BB$ is a neighborhood basis consisting of connected sets.

Let $N$ be any neighborhood of $x$.
By definition of a neighborhood there exists an open neighborhood $U$ of $x$ such that $U \subseteq N$
By assumption there exists an open neighborhood $V$ of $x$ such that every two points of $V$ lie in some connected subset of $U$.

For each $y \in V, y \ne x$, let $C_y$ be a connected subset of $U$ such that $x, y \in C_y \subseteq U$.
Let $C = \set x \cup \bigcup \set {C_y:y \in V, y \ne x}$

From Singleton is Connected in Topological Space, $\set x$ is connected.
From Union of Connected Sets with Common Point is Connected, $C$ is a connected subset.
From Union is Smallest Superset, $C \subseteq U \subseteq N$.

Now $x \in C$ and for each $y \in V, y \ne x$ then $y \in C_y \subseteq C$.
Hence $V \subseteq C$.
By definition of a neighborhood, $C$ is a connected neighborhood of $x$.
That is, $C \in \BB$.
Since $N$ was an arbitrary neighborhood of $x$, it follows that $\BB$ is a neighborhood basis of $x$ consisting of connected sets.
$\blacksquare$





