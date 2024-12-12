# 

Source: https://proofwiki.org/wiki/Closure_of_Open_1-Ball_in_Standard_Discrete_Metric_Space

Theorem
Let $M = \struct {A, d}$ be the standard discrete metric space on a set $A$.
Let $x \in A$.
Let $\map {B_1} x$ be the open $1$-ball of $x$ in $M$.

Then:

$\map \cl {\map {B_1} x} = \set x$
while:

$\set {y \in A: \map d {x, y} \le 1} = A$


Proof
By definition of the standard discrete metric:

$\map d {x, y} = \begin {cases}
0 & : x = y  \\ 
1 & : x \ne y
\end {cases}$
That is:

$\forall \tuple {x, y} \in A: \map d {x, y} \le 1$
Thus:

$\set {y \in A: \map d {x, y} \le 1} = A$

From Open Ball in Standard Discrete Metric Space:

$\map {B_1} x = \set x$
Let $y \in A: y \ne x$.

By definition of closure:

$\map \cl {\map {B_1} x} = \paren {\map {B_1} x}^i \cup \paren {\map {B_1} x}'$
where:

$\paren {\map {B_1} x}^i$ denotes the set of isolated points of $\map {B_1} x$
$\paren {\map {B_1} x}'$ denotes the set of limit points of $\map {B_1} x$.

But:

from Point in Standard Discrete Metric Space is Isolated, all points in $\map {B_1} x$ are isolated:
$\paren {\map {B_1} x}^i = \map {B_1} x$
from Set in Standard Discrete Metric Space has no Limit Points, $\map {B_1} x$ has no limit points:
$\paren {\map {B_1} x}' = \O$

Hence:














\(\ds \map \cl {\map {B_1} x}\)

\(=\)







\(\ds \map {B_1} x \cup \O\)




















\(\ds \)

\(=\)







\(\ds \map {B_1} x\)





Union with Empty Set














\(\ds \)

\(=\)







\(\ds \set x\)









$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: $3.7$: Definitions: Example $3.7.22 \ \text {(a)}$




