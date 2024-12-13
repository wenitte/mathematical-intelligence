# 

Source: https://proofwiki.org/wiki/Interior_of_Convex_Set_in_Topological_Vector_Space_is_Convex

Theorem
Let $\Bbb F \in \set {\R, \C}$.
Let $X$ be a topological vector space over $\Bbb F$.
Let $C \subseteq X$ be a convex set.

Then the interior of $C$, $C^\circ$, is convex.


Proof
Let $t \in \closedint 0 1$. 
Since $C$ is convex, we have: 

$t C + \paren {1 - t} C \subseteq C$
Since $C^\circ \subseteq C$, we have: 














\(\ds t C + \paren {1 - t} C\)

\(=\)







\(\ds \set {t x + \paren {1 - t} y : x, y \in C}\)





Definition of Linear Combination of Subsets of Vector Space














\(\ds \)

\(\supseteq\)







\(\ds \set {t x + \paren {1 - t} y : x, y \in C^\circ}\)




















\(\ds \)

\(=\)







\(\ds t C^\circ + \paren {1 - t} C^\circ\)





Definition of Linear Combination of Subsets of Vector Space



From Set Interior is Largest Open Set we have that $C^\circ$ is open.
From Dilation of Open Set in Topological Vector Space is Open, we have that $t C^\circ$ and $\paren {1 - t} C^\circ$ are open.
From Sum of Set and Open Set in Topological Vector Space is Open, we have that $t C^\circ + \paren {1 - t} C^\circ$ is open.
So $t C^\circ + \paren {1 - t} C^\circ$ is an open set contained in $C$, so we have: 

$t C^\circ + \paren {1 - t} C^\circ \subseteq C^\circ$
from the definition of interior.
Since this holds for all $t \in \closedint 0 1$, it follows that $C^\circ$ is convex.
$\blacksquare$


Sources
1991: Walter Rudin: Functional Analysis (2nd ed.) ... (previous) ... (next): $1.13$: Theorem




