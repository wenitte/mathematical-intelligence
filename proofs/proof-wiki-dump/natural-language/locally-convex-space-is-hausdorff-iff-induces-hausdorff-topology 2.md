# 

Source: https://proofwiki.org/wiki/Locally_Convex_Space_is_Hausdorff_iff_induces_Hausdorff_Topology



Theorem
Let $\struct {X, \mathcal P}$ be a locally convex space.
Let $\tau$ be the standard topology on $\struct {X, \mathcal P}$.

Then $\struct {X, \mathcal P}$ is Hausdorff if and only if $\struct {X, \tau}$ is a Hausdorff topological space. 


Proof
Sufficient Condition
Suppose that $\struct {X, \tau}$ is a Hausdorff space.
Let $x \in X$ have $x \ne {\mathbf 0}_X$.
If there exists no such $x$, then we have the claim by vacuous truth.
Otherwise, since $\struct {X, \tau}$ is Hausdorff, there exists $U, V \in \tau$ with $x \in U$ and ${\mathbf 0}_X \in V$ and $U \cap V = \O$. 
Then $x \not \in V$ and ${\mathbf 0}_X \not \in V$.
From Open Sets in Standard Topology of Locally Convex Space, there exists $\epsilon > 0$ and seminorms $p_1, p_2, \ldots, p_n$ such that: 

$\set {z \in X : \map {p_k} z < \epsilon, \text { for all } k \in \set {1, 2, \ldots, n} } \subseteq V$
Then we have, since $x \not \in V$:

$x \not \in \set {z \in X : \map {p_k} z < \epsilon, \text { for all } k \in \set {1, 2, \ldots, n} }$
Then there exists $k \in \set {1, 2, \ldots, n}$ such that: 

$\map {p_k} x \ge \epsilon > 0$
In particular: 

$\map {p_k} x \ne 0$
with $p_k \in \mathcal P$.
So $\struct {X, \mathcal P}$ is Hausdorff.
$\Box$


Necessary Condition
Suppose that $\struct {X, \mathcal P}$ is Hausdorff.
Let $x, y \in X$ have $x \ne y$.
We aim to find $U, V \in \tau$ such that $x \in U$ and $y \in V$ with $U \cap V = \O$.
Since $x \ne y$, we have $y - x \ne {\mathbf 0}_X$.
So from the definition of a Hausdorff locally convex space, there exists $p \in \mathcal P$ such that: 

$\map p {y - x} \ne 0$
That is: 

$\map p {y - x} > 0$
since seminorms map onto the non-negative real numbers. 
Let: 

$\epsilon = \map p {y - x}$
Then consider: 

$U = \set {z \in X : \map p {z - x} < \epsilon/2}$
and:

$V = \set {z \in X : \map p {z - y} < \epsilon/2}$
From Open Sets in Standard Topology of Locally Convex Space, we have that $U, V \in \tau$. 
From Seminorm Maps Zero Vector to Zero, we have: 

$\map p { {\mathbf 0}_X} = 0 < \epsilon/2$
So we have $x \in U$ and $y \in V$.
We now show that $U \cap V = \O$.
Suppose that $U \cap V \ne \O$.
Let $z \in U \cap V$.
Then: 

$\map p {z - x} < \epsilon/2$
and:

$\map p {z - y} < \epsilon/2$
Then, we have: 














\(\ds \map p {y - x}\)

\(=\)







\(\ds \map p {\paren {y - z} + \paren {z - x} }\)




















\(\ds \)

\(\le\)







\(\ds \map p {y - z} + \map p {z - x}\)





property $(\text N 3)$ of a seminorm














\(\ds \)

\(=\)







\(\ds \cmod {-1} \map p {z - y} + \map p {z - x}\)





property $(\text N 2)$ of a seminorm














\(\ds \)

\(=\)







\(\ds \map p {z - y} + \map p {z - x}\)




















\(\ds \)

\(<\)







\(\ds \epsilon\)




















\(\ds \)

\(=\)







\(\ds \map p {y - x}\)









a contradiction.
So there exists no such $z \in U \cap V$, so $U \cap V = \O$.
Since $x, y \in X$ were arbitrary, we have that $\struct {X, \tau}$ is Hausdorff.
$\blacksquare$





