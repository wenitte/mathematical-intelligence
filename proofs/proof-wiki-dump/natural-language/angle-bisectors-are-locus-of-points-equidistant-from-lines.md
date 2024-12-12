# 

Source: https://proofwiki.org/wiki/Angle_Bisectors_are_Locus_of_Points_Equidistant_from_Lines

Theorem
Let $\LL_1$ and $\LL_2$ be straight lines in the plane.
The locus of points which are equidistant from $\LL_1$ and $\LL_2$ are the angle bisectors of $\LL_1$ and $\LL_2$.


Proof
Let $A'SA$ and $B'SB$ be the straight lines $\LL_1$ and $\LL_2$ respectively, intersecting at the point $S$.
Let $E$ denote the set of points equidistant from both $\LL_1$ and $\LL_2$.
Let $F$ denote the set of points on the angle bisectors of $\LL_1$ and $\LL_2$.
We are to show that $E = F$.




First we show that $F \subseteq E$.
Let $P \in F$.
Without loss of generality, let $P$ be on the angle bisector of $\angle ASB$.
Drop perpendiculars $PM$ from $P$ to $SA$ and $PN$ from $P$ to $SB$.
Because:

$\angle PSM = \angle PSN$
$\angle PMS = \angle PNS$
$PS$ is common
we have that:

$\triangle PSM = \triangle PSN$
and so:

$PM = PN$
That is, $P$ is equidistant from both $\LL_1$ and $\LL_2$ and so:

$P \in E$

The same argument is used mutatis mutandis to show that an arbitrary point $P'$ on the angle bisector of $\angle ASB'$ is also equidistant from both $\LL_1$ and $\LL_2$.
That is:

$P' \in E$
Hence:

$F \subseteq E$
$\Box$

We see immediately that $S \in E$.
As $S$ is on the intersection of $\LL_1$ and $\LL_2$, $S$ is also on their angle bisectors.
Hence $S \in F$.

Let $P \in E$ such that $P \ne S$.
We note that $P \notin \LL_1$ and $P \notin \LL_2$ as that would mean trivially that $P \notin E$.
Drop perpendiculars $PM$ from $P$ to $SA$ and $PN$ from $P$ to $SB$.

With reference to the diagram, note that:

$PN = PM$
$\angle PMS = \angle PNS = 90 \degrees$
$PS$ is common
By Pythagoras's Theorem:

$SN^2 + PN^2 = PS^2 = SM^2 + PM^2$
But as $PM = PN$ it follows that:

$SM = SN$
Thus $\triangle PSM$ and $\triangle PSN$ are congruent.
This means:

$\angle PSN = \angle PSM$
and so $P$ is on one of the angle bisectors of $\LL_1$ and $\LL_2$.
That is:

$P \in F$
Hence by definition of subset:

$E \subseteq F$
$\Box$

We have:

$E \subseteq F$
and:

$F \subseteq E$
and so by definition of set equality:

$E = F$
Hence the result.
$\blacksquare$


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (next): $\text {IV}$. Pure Geometry: Plane Geometry: The incentre




