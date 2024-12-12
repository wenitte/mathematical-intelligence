# 

Source: https://proofwiki.org/wiki/Characterization_of_Hausdorff_Topological_Vector_Space



Theorem
Let $K$ be a topological field.
Let $\struct {X, \tau}$ be a topological vector space.

The following statements are equivalent:

$(1) \quad$ $\struct {X, \tau}$ is a Hausdorff topological vector space
$(2) \quad$ the intersection of all open neighborhoods of ${\mathbf 0}_X$ in $\struct {X, \tau}$ is $\set { {\mathbf 0}_X}$
$(3) \quad$ $\set { {\mathbf 0}_X}$ is closed in $\struct {X, \tau}$.


Proof
$(1)$ implies $(2)$
Suppose that $\struct {X, \tau}$ is a Hausdorff topological vector space.
Let $\FF$ be the set of open neighborhoods of ${\mathbf 0}_X$.
From Topological Vector Space is Hausdorff iff T1, $\struct {X, \tau}$ is $T_1$.
Clearly:

$\set { {\mathbf 0}_X} \subseteq \bigcap \FF$
Now let $x \in X \setminus \set { {\mathbf 0}_X}$. 
Then there exists an open neighborhood $U \in \FF$ of ${\mathbf 0}_X$ such that $x \not \in U$. 
In particular, $x \not \in \bigcap \FF$. 
So we obtain $\bigcap \FF = \set { {\mathbf 0}_X}$.
$\Box$

$(2)$ implies $(3)$
Let $\FF$ be the set of open neighborhoods of ${\mathbf 0}_X$.
Suppose that $\bigcap \FF = \set { {\mathbf 0}_X}$.
Let $x \in \map \cl {\set { {\mathbf 0}_X} }$.
From Condition for Point being in Closure, for each open neighborhood $U_x$ of $x$ such that ${\mathbf 0}_X \in U_x$.
From Classification of Open Neighborhoods in Topological Vector Space, we equivalently have:

for each open neighborhood $U$ of ${\mathbf 0}_X$ we have ${\mathbf 0}_X \in U + x$.
That is: 

$x \in -U$ for each open neighborhood $U$ of ${\mathbf 0}_X$.
From Dilation of Open Set in Topological Vector Space is Open, $U$ is an open neighborhood of ${\mathbf 0}_X$ if and only if $-U$ is.
Hence, we have $x \in U$ for each open neighborhood $U$ of ${\mathbf 0}_X$.
So $x \in \bigcap \FF = \set { {\mathbf 0}_X}$.
Hence we have $x = {\mathbf 0}_X$, so $\map \cl {\set { {\mathbf 0}_X} } \subseteq \set { {\mathbf 0}_X}$.
Since $\set { {\mathbf 0}_X} \subseteq \map \cl {\set { {\mathbf 0}_X} }$, we have:

$\map \cl {\set { {\mathbf 0}_X} } = \set { {\mathbf 0}_X}$
From Set is Closed iff Equals Topological Closure:

$\set { {\mathbf 0}_X}$ is closed in $\struct {X, \tau}$.
$\Box$

$(3)$ implies $(1)$
Suppose that $\set { {\mathbf 0}_X}$ is closed in $\struct {X, \tau}$. 
Let $x \in X$.
We have $\set x = x + \set { {\mathbf 0}_X}$.
From Translation of Closed Set in Topological Vector Space is Closed Set, $\set x$ is closed.
So for all $x \in X$, $\set x$ is closed.
Hence from Definition 2 of a $T_1$ space, $\struct {X, \tau}$ is a $T_1$ space.
From Topological Vector Space is Hausdorff iff T1, $\struct {X, \tau}$ is Hausdorff.
$\blacksquare$





