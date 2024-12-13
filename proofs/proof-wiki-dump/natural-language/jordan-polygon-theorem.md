# 

Source: https://proofwiki.org/wiki/Jordan_Polygon_Theorem



Theorem
Let $P$ be a polygon embedded in $\R^2$.
Denote the boundary of $P$ as $\partial P$.

Then, $\R^2 \setminus \partial P$ is a union of two connected components.
Both components are open in $\R^2$.
One component is bounded, and is called the interior of $P$.
The other component is unbounded, and is called the exterior of $P$.


Proof
Lemma
$\R^2 \setminus \partial P$ is the union of at most two disjoint path-connected sets.
$\Box$

We show that $\R^2 \setminus \partial P$ is not path-connected.
Find any $q_1 \in R^2 \setminus \partial P$ and $\theta \in \R$ such that the ray $\LL_\theta = \set {q_1 + s \map g \theta: s \in \R_{\ge 0} }$ has exactly one crossing of $\partial P$.
Find any $q_2 \in \LL_\theta$ that lies on the ray after the crossing, so the ray $\set {q_2 + s \map g \theta: s \in \R_{\ge 0} }$ does not intersect $\partial P$.
Then $\map {\mathrm {par} } {q_1} = 1 \ne 0 = \map {\mathrm {par} } {q_2}$.
From Jordan Polygon Parity Lemma, it follows that $q_1$ and $q_2$ cannot be connected by a path.
$\Box$

As $R^2 \setminus \partial P$ is not path-connected, it follows from the Lemma that $R^2 \setminus \partial P$ is a union of exactly two disjoint path-connected sets, which we denote as $U_1$ and $U_2$.
Let $q \in \R^2 \setminus \partial P$, and let $\map d {q, \partial P}$ be the Euclidean distance between $q$ and $\partial P$.
From Distance between Closed Sets in Euclidean Space, it follows that $\map d {q, \partial P} > 0$.
When we put $\epsilon = \map d {q, \partial P} / 2$, we have $\map {B_\epsilon} q \subseteq \R^2 \setminus \partial P$.
As Open Ball is Convex Set, it follows that $\map {B_\epsilon} q$ is path-connected, so $\map {B_\epsilon} q$ is a subset of either $U_1$ or $U_2$.
Then, both $U_1$ and $U_2$ are open.
From Path-Connected Space is Connected, it follows that $U_1$ and $U_2$ are connected.
Then, $\R^2 \setminus \partial P$ is a union of two components.
$\Box$

From Boundary of Polygon is Jordan Curve, it follows that $\partial P$ is equal to the image of a Jordan curve $\gamma: \closedint 0 1 \to \R^2$.
From Continuous Image of Compact Space is Compact/Corollary 2, it follows that $\partial P$ is bounded.
That is, there exist $a \in \R^2$ and $R \in \R_{>0}$ such that $\partial P \subseteq \map {B_R} a$.
If $x_1, x_2 \in \R^2 \setminus \map {B_R} a$, $x_1$ to $x_2$ can be joined by a path in $\R^2 \setminus \map {B_R} a$ following:

the circumference of the two circles with center $a$ and radii $\map d {a, x_1}$ and $\map d {a, x_2}$
a line segment joining the two circumferences.
Then $\R^2 \setminus \map {B_R} a$ is path-connected, so $\R^2 \setminus \map {B_R} a$ is a subset of one of the components of $\R^2 \setminus \partial P$, say $U_1$.
As $\R^2 \setminus \map {B_R} a \subseteq U_1$, it follows that $U_1$ is unbounded, so $U_1$ is the exterior of $\gamma$.
Then $U_2 \subseteq \map {B_R} a$, so $U_2$ is bounded, which implies that $U_2$ is the interior of $\gamma$.
$\blacksquare$


Source of Name
This entry was named for Marie Ennemond Camille Jordan.


Notes

This page or section has statements made on it that ought to be extracted and proved in a Theorem page.In particular: Remove this section and put this statement into its own page, along with a proof. It may be appropriate to enter this as a Proof 2 of this result.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by creating any appropriate Theorem pages that may be needed.To discuss this page in more detail, feel free to use the talk page.
This theorem is a special case of the Jordan Curve Theorem.


Sources

Work In ProgressIn particular: Replace this with a link to a hard-copy; links to web pages have been known to be ephemeral. See house style: Help:Sources.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by completing it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{WIP}} from the code.
Jeff Erickson: Computational Topology





