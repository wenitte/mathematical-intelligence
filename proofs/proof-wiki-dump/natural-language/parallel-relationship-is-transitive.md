# 

Source: https://proofwiki.org/wiki/Parallel_Relationship_is_Transitive

Theorem
Let $M = \struct {S, \mathscr I}$ be a matroid.
Let $x, y, z \in S : x \ne y, x \ne z, y \ne z$.

If $x$ is parallel to $y$ and $y$ is parallel to $z$ then $x$ is parallel to $z$.


Proof
Let $x$ be parallel to $y$ and $y$ be parallel to $z$.
By definition of parallel:

$\set x$, $\set y$, $\set z$ are independent subsets
$\set {x, y}$, $\set {y, z}$ are dependent subsets

To show that $x$ is parallel to $z$ it remains to show that:

$\set {x, z}$ is dependent

Aiming for a contradiction, suppose $\set {x, z}$ is independent.
By matroid axiom $(\text I 3)$:

$\exists w \in \set{x, z} \setminus \set y : \set{w, y} \in \mathscr I$
By definition of the doubleton:

$\set{x, y} \in \mathscr I \lor \set{z, y} \in \mathscr I$
This contradicts the assumption that $\set {x, y}$, $\set {y, z}$ are dependent subsets.
It follows that:

$\set {x, z}$ is dependent
$\blacksquare$


Sources
1976: Dominic Welsh: Matroid Theory ... (previous) ... (next) Chapter $1.$ $\S 4.$ Loops and parallel elements




