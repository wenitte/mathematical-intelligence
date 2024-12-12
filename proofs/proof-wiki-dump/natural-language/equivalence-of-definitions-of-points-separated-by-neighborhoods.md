# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Points_Separated_by_Neighborhoods



Theorem
Let $T = \struct {S, \tau}$ be a topological space.

The following definitions of the concept of Points Separated by Neighborhoods are equivalent:

Definition 1
Let $x, y \in S$ such that:

$\exists N_x, N_y \subseteq S: \exists U, V \in \tau: x \in U \subseteq N_x, y \in V \subseteq N_y: N_x \cap N_y = \O$

That is, that $x$ and $y$ both have neighborhoods in $T$ which are disjoint.

Then $x$ and $y$ are described as separated by neighborhoods.

Definition 2
Let $x, y \in S$ such that:

$\exists U, V \in \tau: x \in U, y \in V: U \cap V = \O$

That is, that $x$ and $y$ both have open neighborhoods in $T$ which are disjoint.

Then $x$ and $y$ are described as separated by (open) neighborhoods.


Proof
Let $x, y \in S$.

From Singleton of Element is Subset:

$x$ and $y$ are separated as points by neighborhoods if and only if the singletons $\set x$ and $\set y$ are separated as sets by neighborhoods.

From Equivalence of Definitions of Sets Separated by Neighborhoods:

the singletons $\set x$ and $\set y$ are separated as sets by neighborhoods if and only if the singletons $\set x$ and $\set y$ are separated as sets by open sets.

From Singleton of Element is Subset:

the singletons $\set x$ and $\set y$ are separated as sets by open sets if and only if $x$ and $y$ are separated as points by open sets.
$\blacksquare$





