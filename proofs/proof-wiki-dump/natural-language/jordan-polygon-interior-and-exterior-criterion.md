# 

Source: https://proofwiki.org/wiki/Jordan_Polygon_Interior_and_Exterior_Criterion



Theorem
Let $P$ be a polygon embedded in $\R^2$.
Let $q \in \R^2 \setminus \partial P$, where $\partial P$ denotes the boundary of $P$.
Let $\mathbf v \in \R^2 \setminus \set \bszero$ be a non-zero vector.
Let $\LL = \set {q + s \mathbf v: s \in \R_{\ge 0} }$ be a ray with start point $q$.
Let $\map N q \in \N$ be the number of crossings between $\LL$ and $\partial P$.

Then:

$(1): \quad$ $q \in \Int P$, if and only if $\map N q \equiv 1 \pmod 2$
$(2): \quad$ $q \in \Ext P$, if and only if $\map N q \equiv 0 \pmod 2$
Here, $\Int P$ and $\Ext P$ denote the interior and exterior of $\partial P$, when $\partial P$ is considered as a Jordan curve.


Proof
From Boundary of Polygon is Jordan Curve, it follows that $\partial P$ is equal to the image of a Jordan curve.
From the Jordan Polygon Theorem, it follows that $\Int P$ and $\Ext P$ are path-connected.
Then, Jordan Polygon Parity Lemma shows that $\map N q = \map {\operatorname{par} } q$, where $\map {\operatorname{par} } q$ denotes the parity of $q$.
From Jordan Polygon Theorem, it follows that $\Ext P$ is unbounded, while $\Int P$ is bounded.
As $\partial P$ is the image of a Jordan curve, it follows from Continuous Image of Compact Space is Compact/Corollary 2 that $\partial P$ is also bounded.
Let $\map {B_R} \bszero$ be the open ball with radius $R$ and center $\bszero$.
Then, there exists $R \in \R_{>0}$ such that $\Int P \cup \partial P \subseteq \map {B_R} \bszero$.
If $q_0 \in \R^2 \setminus \map {B_R} \bszero$, then $q_0 \in \Ext P$.
Then, the ray $\set {q_0 + s q_0: s \in \R_{\ge 0} } \subseteq \R^2 \setminus \map {B_R} \bszero$, so there are zero crossings between the ray and $\partial P$.
From Jordan Polygon Parity Lemma, it follows that $\map {\operatorname{par} } {q_0} = 0$.
As $\Ext P$ is path-connected, it follows from the lemma that for all $q \in \Ext P$, we have $\map {\operatorname{par} } q = 0$.
If $q_1 \in \R^2 \setminus \partial P$ with $\map {\operatorname{par} } q = 1$, it follows that $q_1 \notin \Ext P$.
As $\R^2 \setminus \partial P = \Int P \cup \Ext P$, it follows that $q_1 \in \Int P$.
From Jordan Polygon Parity Lemma:

$\forall q \in \Int P: \map {\operatorname{par} } q = 1$
So if instead $q_0 \in \R^2 \setminus \partial P$ with $\map {\operatorname{par} } q = 0$, the only possibility is that $q_0 \in \Ext P$.
$\blacksquare$


Motivation
This criterion is used by computer graphics programs to determine whether a given point lies inside a polygonal region.


Sources
Jeff Ericsson: Computational Topology (dead link?)





