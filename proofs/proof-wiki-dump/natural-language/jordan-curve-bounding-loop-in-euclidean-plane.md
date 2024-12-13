# 

Source: https://proofwiki.org/wiki/Jordan_Curve_Bounding_Loop_in_Euclidean_Plane



Theorem
Let $f : \closedint 0 1 \to \R^2$ be a loop in the Euclidean plane $\R^2$.
Let $\epsilon \in \R_{>0}$.

Then there exists a Jordan curve $\gamma : \closedint 0 1 \to \R^2$ such that $\Img f \subseteq \Int \gamma$, and for all $t \in \closedint 0 1$:

$\map d {\map \gamma t, \Img f} < \epsilon$
where $\map d {\map \gamma t, \Img f}$ denotes the Euclidean distance between $\map \gamma t$ and $\Img f$.
Here $\Img f$ denotes the image of $f$, and $\Int \gamma$ denotes the interior of $\gamma$.


Proof
Cast a ray from an extreme point of $\Img f$
Let $\norm {\map f t}: \closedint 0 1 \to \R$ denote the Euclidean norm of $\map f t$, considered as a function of $t$.
From Norm on Vector Space is Continuous Function and Composite of Continuous Mappings between Metric Spaces is Continuous, it follows that $\norm {\map f t}$ is continuous.
From Closed Real Interval is Compact, it follows that $\closedint 0 1$ is compact.
Set $\ds K := \max_{t \mathop \in \closedint 0 1} \norm {\map f t}$.
From the Extreme Value Theorem it follows that $K$ is well-defined, and there exists $t_0 \in \closedint 0 1$ such that:

$\ds \norm {\map f {t_0} } = K$
By definition of closed ball, it follows that:

$\Img f \subseteq \map {B_K^-} \bszero$
where $\map {B_K^-} \bszero$ denotes a closed ball with center equal to the origin of $\R^2$.
Let $\LL : \hointr 0 \infty \to \R^2$ be a ray with start point $\map f {t_0}$ defined by:

$\map \LL r = r \map f {t_0} + \map f {t_0}$
Using Norm Axiom $\text N 2$: Positive Homogeneity, it follows that for all $r \in \openint 0 \infty$:

$\norm {\map \LL r} = \paren {1 + r} \norm {\map f {t_0} } > K$
which shows that $\map \LL r \notin \Img f$.
Also, the equality shows that $\norm {\map \LL r}$ is strictly increasing.


Find the intersection of the ray and a regular tesselation of hexagons
Set $s := \epsilon / 4$.
From Three Regular Tessellations:Hexagons, it follows that there exists a tessellation of $\R^2$ consisting of regular hexagons with side length $s$.
Let $S$ be the first side of the hexagons that $\LL$ intersects, going from $\map f {t_0}$ to infinity.
Suppose that $\LL$ intersects $S$ at a vertex, or $\map f {t_0}$ is a vertex.
In this case, translate the tessellation by a small quantity, say $\tuple {\dfrac s 6, \dfrac s 7}$, such that $\LL$ no longer first intersects the hexagons at a vertex.
Let $H, H'$ be the two regular hexagons which both have $S$ as a side, labelled such that $\map f {t_0}$ lies in the interior of $H$.
Suppose that $H'$ and $\Int f$ are not disjoint, which implies that $H'$ intersects the open ball $\map {B_r} \bszero$ with center equal to the origin $\bszero$ of $\R^2$.
In this case, let $S'$ be the second side of the hexagons that $\LL$ intersects, going from $\map f {t_0}$ to infinity.
The two regular hexagons, which have $S'$ as a side, are $H'$ and another hexagon which we label $H' '$.
As $\norm {\map \LL r}$ increases as $r$ increases, it follows that the distance between $H' '$ and $\Img f$ is larger than the distance between $H'$ and $\Img f$.
Hence, $H' '$ and $\Int f$ are disjoint.


Construct a curve consisting of sides of the hexagons
Set $S_0 := S'$ if $S'$ was defined, and if not, set $S_0 := S$.
It follows that of the two hexagons $H_0, H_0'$ which have $S_0$ as a side, the hexagon we label $H_0$ contains elements of $\Img f$, while $H_0'$ and $\Int f$ are disjoint.
Let $V_0, V_1$ be the two vertices of the side $S_0$.
Let $\vec {V_0 V_1}$ be the vector quantity that represents the directed line segment with startpoint $V_0$ and endpoint $V_1$.
Label the two vertices such that $H_0$ lies to the right of $\vec {V_0 V_1}$, and $H_0'$ lies to the left of $\vec {V_0 V_1}$.
That is, if $\vec {V_0 V_1}$ is rotated in clockwise direction around $V_0$, then $V_1$ will first pass through $H_0$.

Next, we define a sequence of vertices $\sequence {V_n}_{n \mathop \in \N}$ in the tessellation by induction.
For $n \in \N_{\ge 2}$, let $H_{n - 1}$ be the hexagon to the right of $\vec {V_{n - 2} V_{n - 1} }$ that contains elements of $\Img f$.
Let $H_{n - 1}'$ be the hexagon to the left of $\vec {V_{n - 2} V_{n - 1} }$ that is disjoint with $\Img f$.
Let $H_n$ be the hexagon that has $V_{n - 1}$ as a vertex, and does not have $\vec {V_{n - 2} V_{n - 1} }$ as a side.
If $H_n$ is disjoint with $\Img f$, define $V_n$ as the vertex shared by $H_n$ and $H_{n - 1}$ that is not equal to $V_{n - 1}$.
If $H_n$ is not disjoint with $\Img f$, define $V_n$ as the vertex shared by $H_n$ and $H_{n - 1}'$ that is not equal to $V_{n - 1}$.
In both cases, the hexagon to the right of $\vec {V_{n - 1} V_n}$ will contain elements of $\Img f$, while the hexagon to the left of $\vec {V_{n - 1} V_n}$ is disjoint from $\Img f$.


Show that the curve is a Jordan polygon
For all $\mathbf p \in \R^2$ that lies on $\vec {V_{n - 1} V_n}$, it follows that $\mathbf p$ and some element of $\Img f$ lie in the hexagon to the right of $\vec {V_{n - 1} V_n}$
From Distance between Points in Regular Hexagon, it follows that:

$\map d {\mathbf p, \Img f} \le 2 s = \epsilon / 2$
As $\Img f \subseteq \map {B_K} \bszero$, it follows by Metric Space Axiom $(\text M 2)$: Triangle Inequality that:

$\mathbf p \in \map {B_{K + 2 s} } \bszero$
From Area of Circle, it follows that the area of $\map {B_{K + 2 s} } \bszero$ is equal to $\pi \paren {K + 2 s}^2$.
From Area of Regular Hexagon, it follows that the area of each regular hexagon in the tessellation is equal to $\dfrac {3 \sqrt 3} 2 s^2$.
It follows that $\vec {V_{n - 1} V_n}$ can be a side of at most $\dfrac {2 \pi \paren {K + 2 s}^2} {3 \sqrt 3 s^2}$ different hexagons.
Hence, there exists $n_0 , n_1 \in \N$ with $n_0 < n_1$ such that $V_{n_0} = V_{n_1}$.
Let $n_0$ be the smallest such number.
Suppose that $n_0 > 0$.
From the construction of $\vec {V_{n_0 - 1} V_{n_0} }$ and $\vec {V_{n_0} V_{n_0 + 1} }$, it follows that of the three hexagons $H_{n_0}, H_{n_0}', H_{n_0 + 1}$:

either $H_{n_0}, H_{n_0 + 1}$ both contain elements of $\Img f$
or $H_{n_0}', H_{n_0 + 1}$ both are disjoint with $\Img f$.
As $\vec {V_{n_1 - 1} V_{n_1} }$ is not equal to $\vec {V_{n_0 - 1} V_{n_0} }$ or $\vec {V_{n_0} V_{n_0 + 1} }$ , it follows that the two hexagons that $\vec {V_{n_1 - 1} V_{n_1} }$ is a side of:

either are equal to $H_{n_0}, H_{n_0 + 1}$, which both contain elements of $\Img f$
or are equal to $H_{n_0}', H_{n_0 + 1}$, which both are disjoint with $\Img f$.
In both cases, this contradicts the construction of $\vec {V_{n_1 - 1} V_{n_1} }$.
It follows that $n_0 = 0$.
Hence, $P = V_0 V_1 \cdots V_{n_1 - 2} V_{n_1 - 1}$ defines a polygon.


Prove the claims of the theorem
From Boundary of Polygon is Jordan Curve, it follows that there exists a Jordan curve $\gamma: \closedint 0 1 \to \R^2$ such that $\Img \gamma = \partial P$, where $\partial P$ denotes the boundary of $P$.
For all $t \in \closedint 0 1$, we have $\map \gamma t \in \partial P$, so from what we have shown above:

$\map d {\map \gamma t, \Img f} \le \epsilon / 2 < \epsilon$

From the Jordan Polygon Theorem, it follows that $\R^2 \setminus \partial P$  is a union of two disjoint open connected components $\Int \gamma$ and $\Ext \gamma$.
From Connected Open Subset of Euclidean Space is Path-Connected, it follows that $\Int \gamma$ and $\Ext \gamma$ are path components of $\R^2 \setminus \partial P$.
As $f$ is a loop that does not intersect $\partial P$, it follows that either $\Int f \subseteq \Int \gamma$, or $\Int f \subseteq \Ext \gamma$.
The ray $\LL$ with start point $\map f {t_0}$ crosses $\partial P$ at the side $V_0 V_1$.
As $\norm {\map \LL r}$ is strictly increasing, and:

$\ds \norm {\map \LL 0} = \norm {\map f {t_0} } = \max_{t \mathop \in \closedint 0 1} \norm {\map f t}$
it follows that $\LL$ does not cross $\partial P$ more than once, as:

$\map d {\partial P, \Img f} \le 2 s$
From the Jordan Polygon Interior and Exterior Criterion, it follows that:

$\map f {t_0} \in \Int \gamma$
As $\Int \gamma$ is path-connected, it follows that:

$\Img f \subseteq \Int \gamma$
$\blacksquare$





