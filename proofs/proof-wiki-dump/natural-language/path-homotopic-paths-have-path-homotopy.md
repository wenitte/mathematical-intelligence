# 

Source: https://proofwiki.org/wiki/Path-Homotopic_Paths_have_Path_Homotopy



Theorem
Let $X$ be a topological space.
Let $f, g: \closedint 0 1 \to X$ be paths.

Then $f$ and $g$ are path-homotopic, if and only if there exists a path homotopy between $f$ and $g$.


Proof
Necessary Condition
By Definition of Path-Homotopic, there exists a homotopy $H : \closedint 0 1 \times \closedint 0 1 \to X$ such that:

$\forall s \in \closedint 0 1: \map H {s, 0} = \map f s$
$\forall s \in \closedint 0 1: \map H {s, 1} = \map g s$

Homotopic Paths have Same Endpoints shows that $\map f 0 = \map g 0$, and $\map f 1 = \map g 1$.
As $f$ and $g$ are homotopic relative to $\set{ 0 , 1 }$, we have:

$\forall s' \in \set{ 0 , 1 } , t \in \closedint 0 1 : \map H { s' , t } = \map f { s' } = \map g { s' }$

By Definition of Path Homotopy, it follows that $H$ is a path homotopy.
$\Box$


Sufficient Condition
Let $H: \closedint 0 1 \times \closedint 0 1 \to X$ be a path homotopy between $f$ and $g$.
By Definition of Path-Homotopic, it follows that $f$ and $g$ are homotopic relative to $\set{ 0 , 1 }$.
$\blacksquare$


Sources
2000: James R. Munkres: Topology (2nd ed.): $\S 51$




