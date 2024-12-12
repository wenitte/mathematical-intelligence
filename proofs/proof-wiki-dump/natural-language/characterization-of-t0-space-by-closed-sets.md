# 

Source: https://proofwiki.org/wiki/Characterization_of_T0_Space_by_Closed_Sets



Theorem
Let $T = \left({S, \tau}\right)$ be a topological space.
Then

$T$ is a $T_0$ space if and only if
for every points $x, y \in S$ if $x \ne y$ then
there exists a closed subset $F$ of $S$ such that $x \in F$ and $y \notin F$
or
there exists a closed subset $F$ of $S$ such that $x \notin F$ and $y \in F$


Proof
Sufficient Condition
Let $T$ be a $T_0$ space.
Let $x, y \in S$ such that

$x \ne y$
By definition of $T_0$ space:

$\left({\exists U \in \tau: x \in U \land y \notin U}\right) \lor \left({\exists U \in \tau: x \notin U \land y \in U}\right)$
WLOG: Suppose:

$\exists U \in \tau: x \in U \land y \notin U$
By definition:

$\complement_S\left({U}\right)$ is closed
where $\complement_S\left({U}\right)$ denotes the relative complement of $U$ in $S$.
By definition of relative complement:

$x \notin \complement_S\left({U}\right) \land y \in \complement_S\left({U}\right)$
Thus:

$\exists F \subseteq S: F$ is closed $\land\, x \notin F \land y \in F$
$\Box$


Necessary Condition
This statement follows mutatis mutandis.
$\blacksquare$


Sources
1989: Ryszard Engelking: General Topology (revised and completed ed.)
Mizar article TSP_1:def 4




