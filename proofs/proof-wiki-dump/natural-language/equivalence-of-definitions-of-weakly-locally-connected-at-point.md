# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Weakly_Locally_Connected_at_Point



Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $x \in S$.

The following definitions of the concept of Weakly Locally Connected at Point are equivalent:

Definition 1
The space $T$ is weakly locally connected at $x$ if and only if $x$ has a neighborhood basis consisting of connected sets.

Definition 2
The space $T$ is weakly locally connected at $x$ if and only if every open neighborhood $U$ of $x$ contains an open neighborhood $V$ of $x$ such that every two points of $V$ lie in some connected subset of $U$.


Proof
Definition 1 implies Definition 2
Let $x$ have a neighborhood basis consisting of connected sets.
Let $U$ be an open neighborhood of $x$.
By assumption there exists a connected neighborhood $C$ of $x$ such that $C \subseteq U$.
By definition of a neighborhood, there exists an open neighborhood $V$ of $x$ such that $V \subseteq C$.
From Subset Relation is Transitive, $V \subseteq U$.
By definition of a subset:

$\forall y, z \in V: y, z \in C$
The result follows.
$\Box$


Definition 2 implies Definition 1
Let every open neighborhood $U$ of $x$ contain an open neighborhood $V$ of $x$ such that every two points of $V$ lie in some connected subset of $U$.
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





