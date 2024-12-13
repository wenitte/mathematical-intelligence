# 

Source: https://proofwiki.org/wiki/Product_of_Closed_and_Half-Open_Unit_Intervals_is_Homeomorphic_to_Product_of_Half-Open_Unit_Intervals

Theorem
Let $\closedint 0 1$ denote the closed unit interval $\set {x \in \R: 0 \le x \le 1}$.
Let $\hointr 0 1$ denote the half-open unit interval $\set {x \in \R: 0 \le x < 1}$.
Let both $\closedint 0 1$ and $\hointr 0 1$ have the Euclidean topology.

Then the product space:

$\closedint 0 1 \times \hointr 0 1$
is homeomorphic to:

$\hointr 0 1 \times \hointr 0 1$


Proof
First we take the square $\Box ABCD$ embedded in the Cartesian plane such that $AD$ corresponds to $\closedint 0 1$ and $AB$ corresponds to $\hointr 0 1$:


This corresponds to the set $\closedint 0 1 \times \hointr 0 1$.
It is noted that the line segment $BC$ which corresponds to $\closedint 0 1 \times \set 1$ is not in the set $\closedint 0 1 \times \hointr 0 1$.

Then we apply a homeomorphism which maps the perimeter of $\closedint 0 1 \times \hointr 0 1$ to the circle whose center is $\tuple {\dfrac 1 2, \dfrac 1 2}$ and whose radius is $\dfrac {\sqrt 2} 2$.
The points $A$, $B$, $C$ and $D$ are fixed by this homeomorphism.


Note how the point $E$ is mapped to the point $E'$.

Then we apply a homeomorphism to the circle $\bigcirc ABE'CD$ which maps:

the arc $BADC$ to the arc $BAD$
the arc $BE'C$ to the arc $BEC$
which in the process maps:

$E'$ to $E$ which is the same as $C$.
$C$ to $C$ which is the same point as $D$.

Then we apply a homeomorphism to the circle $\bigcirc ABEC$ back to the square $\Box ABEC$.

It is seen that the line segment $EC$ is now identified with the $\set 1 \times \hointr 0 1$.
Hence $\closedint 0 1 \times \hointr 0 1$ has been transformed via $3$ homeomorphisms to $\hointr 0 1 \times \hointr 0 1$.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: Exercise $3.9: 21$




