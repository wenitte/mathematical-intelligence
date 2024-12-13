# 

Source: https://proofwiki.org/wiki/Interior_of_Jordan_Curve_is_Subset_of_Image_of_Null-Homotopy

Theorem
Let $f : \closedint 0 1 \to \R^2$ be a Jordan curve.
Let $H : \closedint 0 1 \times \closedint 0 1 \to \R^2$ be a path homotopy between $f$ and a constant loop.

Then:

$\Int f \subseteq \Img H$
where $\Int f$ denotes the interior of $f$, and $\Img H$ denotes the image of $H$.


Proof
Let $c: \closedint 0 1 \to \set { \map f 0 }$ be the constant loop that is path-homotopic to $f$.
By definition of null-homotopy, $H$ is a null-homotopy between $f$ and $c$.

Let $\sim$ be the equivalence relation on $\closedint 0 1$ defined by:










\(\ds \forall s_1 \in \openint 0 1 , s_2 \in \closedint 0 1: \, \)



\(\ds s_1 \sim s_2\)

\(\iff\)







\(\ds s_2 = s_1\)
















\(\ds \forall s_1 \in \set {0, 1} , s_2 \in \closedint 0 1: \, \)



\(\ds s_1 \sim s_2\)

\(\iff\)







\(\ds s_2 \in \set {0,1}\)










From Simple Loop in Hausdorff Space is Homeomorphic to Quotient Space of Interval, it follows that $\Img f$ is homeomorphic to $\closedint 0 1 / \sim$.
Let the homeomorphism between $\closedint 0 1 / \sim$ and $\Img f$ be $h: \closedint 0 1 / \sim \to \Img f$.
It follows that $h$ is a continuous injective mapping, defined by:

$\map h {\eqclass s \sim }  = \map f s$
where $\eqclass x \sim$ denotes the equivalence class defined by $\sim$.
Define $H_0 : \paren{ \closedint 0 1 / \sim } \times \closedint 0 1 \to D$ for all $s \in \closedint 0 1, t \in \closedint 0 1$ by:

$\map {H_0} { \eqclass s \sim,t } = \map H {s,t}$
which is well-defined, as $\map {H}{0,t} = \map {H}{1,t}$ for all $t \in \closedint 0 1$.
It follows that $\Img {H_0} = \Img H$.
From Composite of Continuous Mappings is Continuous, it follows that $H_0$ is continuous.
As $H$ is a null-homotopy between $f$ and $c$, it follows that $H_0$ is a null-homotopy between $h$ and the constant mapping $c_0: \closedint 0 1 / \sim \to \set { \map f 0 }$.

From Closed Real Interval is Compact, it follows that $\closedint 0 1$ is compact.
From Continuous Image of Compact Space is Compact, it follows that $\Img f$, as well as $\closedint 0 1 / \sim$, are compact.
From Topological Product of Compact Spaces, it follows that $\paren{ \closedint 0 1 / \sim } \times \closedint 0 1$ is compact.
From Continuous Image of Compact Space is Compact, it follows that $\Img {H_0}$ is compact.
From Compact Subspace of Metric Space is Bounded, it follows that $\Img {H_0}$ is bounded.

From the Jordan Curve Theorem, it follows that $\R^2 \setminus \Img f$ is a union of two disjoint connected components.
These components are the interior $\Int f$, which is bounded, and the exterior $\Ext f$, which is unbounded.
By definitions of bounded and unbounded, it follows that there exists some $\mathbf a \in \Ext f \setminus \Img {H_0}$.

Let $\mathbf b \in \R^2 \setminus \Img {H_0}$.
From Borsuk Null-Homotopy Lemma:Corollary, it follows that $\mathbf a$ and $\mathbf b$ lie in the same component of $\R^2 \setminus \Img f$.
That is, $\mathbf b \in \Ext f$.
It follows that if $\mathbf x \in \Int f$, then $\mathbf x \in \Img {H_0}$.
Hence, $\Int f \subseteq \Img H$.
$\blacksquare$





