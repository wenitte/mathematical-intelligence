# 

Source: https://proofwiki.org/wiki/Jordan_Curve_Characterization_of_Simply_Connected_Set



Theorem
Let $D \subseteq \R^2$ be an open path-connected subset of the Euclidean plane.

Then $D$ is simply connected, if and only if the following condition holds:

For all Jordan curves $\gamma : \closedint 0 1 \to \R^2$ with $\Img \gamma \subseteq D$, we have $\Int \gamma \subseteq D$.

Here $\Img \gamma$ denotes the image of $\gamma$, and  $\Int \gamma$ denotes the interior of $f$.


Proof
Sufficient condition
Suppose that $D$ is simply connected.
Let $\gamma : \closedint 0 1 \to \R^2$ be a Jordan curve with $\Img \gamma \subseteq D$.
By definition of simple connectedness, there exists a constant loop $c : \closedint 0 1 \to D$ such that $\gamma$ and $c$ are path-homotopic in $D$.
Let $H : \closedint 0 1 \times \closedint 0 1 \to D$ be the path homotopy between $\gamma$ and $c$.
From Interior of Jordan Curve is Subset of Image of Null-Homotopy, it follows that:

$\Int \gamma \subseteq \Img H$
As $\Img H \subseteq D$, it follows that:

$\Int \gamma \subseteq D$
$\Box$


Necessary condition
Suppose that for all Jordan curves $\gamma : \closedint 0 1 \to \R^2$ with $\Img \gamma \subseteq D$, we have $\Int \gamma \subseteq D$.
Let $f : \closedint 0 1 \to D$ be a loop in $D$.
By definition of closed set, it follows that the complement $\relcomp {\R^2} D$ is closed in $\R^2$.
From Closed Real Interval is Compact, it follows that $\closedint 0 1$ is compact.
From Continuous Mappings preserve Compact Subsets, it follows that $\Img f$ is compact.
From Distance between Disjoint Compact Set and Closed Set in Metric Space is Positive, it follows that:

$\map d {\Img f, \relcomp {\R^2} D} > 0$
where :$\map d {X,Y}$ denotes the Euclidean distance between the sets $X$ and $Y$.
From Jordan Curve Bounding Loop in Euclidean Plane, there exists a Jordan curve $\gamma : \closedint 0 1 \to \R^2$ such that $\Img f \subseteq \Int \gamma$, and for all $t \in \closedint 0 1$:

$\map d{\map \gamma t, \Img f} < \map d {\Img f, \relcomp {\R^2} D} / 2$
It follows that $\Img \gamma \subseteq D$.
From Interior of Jordan Curve is Simply Connected, it follows that $\Img \gamma$ is simply connected.
By definition of simple connectedness, there exists a constant loop $c : \closedint 0 1 \to D$ such that $f$ and $c$ are path-homotopic in $\Int \gamma$.
Let $H : \closedint 0 1 \times \closedint 0 1 \to \Int \gamma$ be the path homotopy between $f$ and $c$ in $\Int \gamma$.
As $\Img \gamma \subseteq D$, it follows that the $H$ is also a path homotopy between $f$ and $c$ in $D$.
By definition of simple connectedness, it follows that $D$ is simply connected.
$\blacksquare$


Sources
2000: James R. Munkres: Topology (2nd ed.): $10$: Separation Theorems in the Plane: $\S 62$: Invariance of Domain




