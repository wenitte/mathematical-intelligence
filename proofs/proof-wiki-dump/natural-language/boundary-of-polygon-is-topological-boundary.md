# 

Source: https://proofwiki.org/wiki/Boundary_of_Polygon_is_Topological_Boundary



Theorem
Let $P$ be a polygon embedded in $\R^2$.
Denote the boundary of $P$ as $\partial P$.
Let $\Int P$ and $\Ext P$ denote the interior and exterior of $\partial P$, where $\partial P$ is considered as a Jordan curve.

Then the topological boundary of $\Int P$ is equal to $\partial P$, and the topological boundary of $\Ext P$ is equal to $\partial P$.


Proof
Denote the topological boundary of $\Int P$ as $\partial \Int P$, and denote the topological boundary of $\Ext P$ as $\partial \Ext P$.


Topological Boundary is Subset of Boundary
From Boundary of Polygon is Jordan Curve, it follows that the boundary $\partial P$ is equal to the image of a Jordan curve.
From Jordan Polygon Theorem, it follows that $\Int P$ and $\Ext P$ are disjoint, open and path-connected.
From Set is Open iff Disjoint from Boundary, it follows that $\Int P$ and $\partial \Int P$ are disjoint.
From Open Set Disjoint from Set is Disjoint from Closure, it follows that $\Ext P$ and the closure of $\Int P$ are disjoint.
As $\partial \Int P$ is a subset of the closure of $\Int P$, it follows that $\Ext P$ and $\partial \Int P$ are disjoint.
As $\R^2 = \Int P \cup \Ext P \cup \partial P$ by the Jordan Polygon Theorem, it follows that $\partial \Int P \subseteq \partial P$.
Similarly, it follows that $\partial \Ext P \subseteq \partial P$.
$\Box$


Boundary is Subset of Topological Boundary
Let $p \in \partial P$ such that $p$ is not a vertex, and let $S$ be the side of $P$ that $p$ is a part of.
Denote the $j$th side of $P$ as $S_j$, and let $n \in \N$ be the total number of sides.
Let $\ds \delta = \map d {S, \bigcup_{j \mathop = 1, \ldots, n: S_j \mathop \ne S} S_j}$ be the Euclidean distance between $S$ and all other sides of $P$.
From Distance between Closed Sets in Euclidean Space, it follows that $\delta > 0$.
Let $\epsilon \in \openint 0 \delta$, and denote the open ball of $p$ with radius $\epsilon$ as $\map {B_\epsilon} p$.
Choose $x_1 \in \map {B_\epsilon} p$, and put $\mathbf v = p - x_1$.
Let $\LL_1 = \set {x_1 + s \mathbf v: s \in \R_{\ge 0} }$ be a ray with start point $x_1$.
Then $\LL_1$ and $S$ has one crossing at $p$.
Put $x_2 = x_1 + 2 \mathbf v$, and put $\LL_2 = \set {x_2 + s \mathbf v: s \in \R_{\ge 0} }$, so $\LL_1 \cap \LL_2 = \LL_2$.
Then $\LL_2$ and $S$ do not cross.
As $x_2 \in \map {B_\epsilon} p$ with $\epsilon < \delta$, it follows from the definition of $\delta$ that if $\LL_1$ and some side $S'$ has a crossing, then $\LL_2$ and $S'$ also has a crossing.
If $\map N {x_i}$ denotes the number of crossings between $\LL_i$ and $\partial P$, it follows that $\map N {x_1} + 1 = \map N {x_2}$.
Then $\map {\mathrm {par} } {x_1} \ne \map {\mathrm {par} } {x_2}$, where $\map {\mathrm {par} } {x_i}$ denotes the parity of $x_i$.
From Jordan Polygon Interior and Exterior Criterion, it follows that one of the points $x_1, x_2$ belongs to $\Int P$, and the other point belongs to $\Ext P$.
As $\epsilon$ was arbitrary small, it follows that $p$ is a limit point of both $\Int P$ and $\Ext P$.
By definition of closure, it follows that $p$ lies in the closure of $\Int P$ and $\Ext P$.
Then $p \in \partial \Int P$ and $p \in \partial \Ext P$, as the Jordan Polygon Theorem shows that $\partial P$ and $\Int P$, $\Ext P$ are disjoint.

Now, suppose that $p$ is a vertex of $S$.
Then we can find a sequence $\sequence {p_k}$ of points that lies on the adjacent sides of $p$ such that the sequence converges to $p$.
As none of the point in $\sequence {x_k}$ are vertices, all $x_k$ lie in $\partial \Int P$ and $\partial \Ext P$.
As Boundary of Set is Closed, it follows that $p \in \partial \Int P$, and $p \in \partial \Ext P$.
Hence, $\partial P \subseteq \partial \Int P$, and $\partial P \subseteq \partial \Ext P$.
$\Box$

The result now follows by definition of set equality.
$\blacksquare$





