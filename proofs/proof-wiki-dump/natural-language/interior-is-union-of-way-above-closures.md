# 

Source: https://proofwiki.org/wiki/Interior_is_Union_of_Way_Above_Closures

Theorem
Let $\left({S, \preceq, \tau}\right)$ be a complete continuous topological lattice with Scott topology.
Let $X \subseteq S$.

Then $X^\circ = \bigcup \left\{ {x^\gg: x \in S \land x^\gg \subseteq X}\right\}$
where

$X^\circ$ denotes the interior of $X$,
$x^\gg$ denotes the way above closure of $x$.


Proof
We have:

$\left\{ {G \in \left\{ {g^\gg: g \in S}\right\}: G \subseteq X}\right\} = \left\{ {x^\gg: x \in S \land x^\gg \subseteq X}\right\}$
By Way Above Closures Form Basis:

$\left\{ {x^\gg: x \in S}\right\}$ is basis of $\left({S, \tau}\right)$.
By Interior is Union of Elements of Basis:

$X^\circ = \bigcup \left\{ {x^\gg: x \in S \land x^\gg \subseteq X}\right\}$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL11:48




