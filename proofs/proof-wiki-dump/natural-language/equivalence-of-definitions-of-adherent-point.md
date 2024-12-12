# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Adherent_Point



Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $H \subseteq S$.

The following definitions of the concept of adherent point of $H$ are equivalent:

Definition by Open Neighborhood
A point $x \in S$ is an adherent point of $H$ if and only if every open neighborhood $U$ of $x$ satisfies:

$H \cap U \ne \O$
Definition by Closure
A point $x \in S$ is an adherent point of $H$ if and only if $x$ is an element of the closure of $H$.

Definition by Neighborhood
A point $x \in S$ is an adherent point of $H$ if and only if every neighborhood $N$ of $x$ satisfies:

$H \cap N \ne \O$


Proof
Definition by Open Neighborhood is equivalent to Definition by Closure
This is shown in Condition for Point being in Closure.
$\Box$


Definition by Open Neighborhood is equivalent to Definition by Neighborhood
Necessary Condition
Let every open neighborhood $U$ of $x$ satisfy:

$H \cap U \ne \O$
Let $N$ be an arbitrary neighborhood of $x$.
By definition of a neighborhood:

$\exists V \in \tau: x \in V \subseteq N$
From Set is Open iff Neighborhood of all its Points, $V$ is an open neighborhood of $x$.
Thus:

$H \cap V \ne \O$
By the contrapositive statement of Subsets of Disjoint Sets are Disjoint:

$H \cap N \ne \O$
Because $N$ was arbitrary, it follows that every neighborhood $N$ of $x$ satisfies:

$H \cap N \ne \O$
$\Box$


Sufficient Condition
Let every neighborhood $N$ of $x$ satisfy:

$H \cap N \ne \O$
By definition, every open neighborhood $U$ of $x$ is a neighborhood of $x$.
So every open neighborhood $U$ of $x$ satisfies:

$H \cap U \ne \O$
$\blacksquare$





