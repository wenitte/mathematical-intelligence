# 

Source: https://proofwiki.org/wiki/Relational_Structure_admits_Lower_Topology

Theorem
Let $R = \left({S, \preceq}\right)$ be a relational structure.

Then there exists a relational structure with lower topology $T = \left({S, \preceq, \tau}\right)$ such that $T$ is a topological space.


Proof
Define $B := \left\{ {\complement_S\left({x^\succeq}\right): x \in S}\right\}$
where $x^\succeq$ denotes the upper closure of $x$.
By definition of generated topology:

$\tau\left({B}\right)$ is a topology on $S$
where $B$ is a sub-basis of $\tau \left({B}\right)$.
Thus by definition of lower topology:

$T := \left({S, \preceq, \tau\left({B}\right)}\right)$ has a lower topology.
Thus by definition:

$T$ is a topological space.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL19:1




