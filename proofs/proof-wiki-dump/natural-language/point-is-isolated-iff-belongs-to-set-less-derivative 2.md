# 

Source: https://proofwiki.org/wiki/Point_is_Isolated_iff_belongs_to_Set_less_Derivative

Theorem
Let $T = \left({S, \tau}\right)$ be a topological space.
Let $H \subseteq S$.
Let $x \in S$.

Then:

$x$ is an isolated point in $H$
if and only if:

$x \in H \setminus H'$
where

$H'$ denotes the derivative of $H$.


Proof
$x$ is an isolated point in $H$
$\iff$ $x \in H$ and $x$ is not an accumulation point of $H$ by Point is Isolated iff not Accumulation Point
$\iff$ $x \in H$ and $x \notin H'$ by definition of derivative
$\iff$ $x \in H \setminus H'$ by definition of set difference.
$\blacksquare$


Sources
1989: Ryszard Engelking: General Topology (revised and completed ed.)
Mizar article TOPGEN_1:20




