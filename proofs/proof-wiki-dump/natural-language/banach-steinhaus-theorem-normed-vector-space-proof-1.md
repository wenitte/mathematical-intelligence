# 

Source: https://proofwiki.org/wiki/Banach-Steinhaus_Theorem/Normed_Vector_Space/Proof_1

Theorem
Let $\struct {X, \norm {\,\cdot\,}_X}$ be a Banach space.
Let $\struct {Y, \norm {\,\cdot\,}_Y}$ be a normed vector space.
Let $\family {T_\alpha: X \to Y}_{\alpha \mathop \in A}$ be an $A$-indexed family of bounded linear transformations from $X$ to $Y$.
Suppose that:

$\ds \forall x \in X: \sup_{\alpha \mathop \in A} \norm {T_\alpha x}_Y$ is finite.

Then:

$\ds \sup_{\alpha \mathop \in A} \norm {T_\alpha}$ is finite
where $\norm {T_\alpha}$ denotes the norm of the linear transformation $T_\alpha$.


Proof
For each $n \in \N$, define: 

$F_n = \set {x \in X : \norm {T_\alpha x} \le n \text { for each } \alpha \in A}$
We have: 














\(\ds F_n\)

\(=\)







\(\ds \bigcap_{\alpha \in A} \set {x \in X : \norm {T_\alpha x}_Y \le n}\)




















\(\ds \)

\(=\)







\(\ds \bigcap_{\alpha \in A} {T_\alpha}^{-1} \sqbrk {\map {\overline {B_Y} } {0, n} }\)









where $\map {\overline {B_Y} } {0, n}$ is the closed ball in $\struct {Y, \norm \cdot_Y}$ of radius $n$ centred at $0$. 
From Closed Ball is Closed in Normed Vector Space, we have: 

$\map {\overline {B_Y} } {0, n}$ is closed.
From Mapping is Continuous iff Inverse Images of Open Sets are Open: Corollary, we have: 

${T_\alpha}^{-1} \sqbrk {\map {\overline {B_Y} } {0, n} }$ is closed for each $\alpha \in A$.
From Intersection of Closed Sets is Closed in Normed Vector Space, we have: 

$F_n$ is closed for each $n \in \N$.
Clearly we have: 

$\ds \bigcup_{n \mathop = 1}^\infty F_n \subseteq X$
Recall that by hypothesis, for every $x \in X$, we have:

$\ds \sup_{\alpha \mathop \in A} \norm {T_\alpha x}_Y$ is finite.
So in particular there exists $N \in \N$ such that: 

$\ds \norm {T_\alpha x}_Y \le N$
so that: 

$x \in F_N$
That is: 

$\ds x \in \bigcup_{n \mathop = 1}^\infty F_n$
So:

$\ds X = \bigcup_{n \mathop = 1}^\infty F_n$
Since $\struct {X, \norm \cdot_X}$ is a Banach space, from the Baire Category Theorem we have that: 

$\struct {X, \norm \cdot_X}$ is a Baire space.
From Baire Space is Non-Meager, we therefore have: 

$X$ is non-meager.
So:

$X$ is not the countable union of nowhere dense subsets of $X$.
So, we must have: 

$F_n$ is not nowhere dense for some $n \in \N$.
Fix such an $n$. 
Recall that $F_n$ is closed.
From Set is Closed iff Equals Topological Closure, we therefore have: 

$F_n^- = F_n$
where $F_n^-$ denotes the closure of $F_n$.
So, since $F_n$ is not nowhere dense, we have that:

there exists a non-empty open $U \subseteq X$ such that $U \subseteq F_n$.
Pick $u \in U$. 
Since $U$ is open, there exists $y \in X$ and $r > 0$ such that: 

$\map {B_X} {y, r} \subseteq F_n$
where $\map {B_X} {y, r}$ denotes the open ball in $\struct {X, \norm \cdot_X}$ of radius $r$, centre $y$. 
Now let $\alpha \in A$ and $x \ne 0$. 
Since: 

$\ds \norm {\frac {r x} {2 \norm x} }_X = \frac r 2 < r$
we have: 

$\ds y + \frac {r x} {2 \norm x_X} \in \map {B_X} {y, r}$
So, we have: 

$\ds \norm {\map {T_\alpha} {y + \frac r {2 \norm x_X} } }_Y \le n$
So, from linearity, we have: 

$\ds \norm {T_\alpha y + \frac r {2 \norm x_X} T_\alpha x}_Y \le n$
From Reverse Triangle Inequality: Normed Vector Space and positive homogeneity of the norm, we therefore have: 

$\ds \size {\norm {T_\alpha y}_Y - \frac r {2 \norm x_X} \norm {T_\alpha x}_Y} \le n$
So that: 

$\ds \frac r {2 \norm x_X} \norm {T_\alpha x}_Y \le \norm {T_\alpha y}_Y + n$
Since $y \in F_n$, we have: 

$\ds \norm {T_\alpha y}_Y \le n$
So:

$\ds \frac r {2 \norm x_X} \norm {T_\alpha x}_Y \le 2 n$
That is: 

$\ds \norm {T_\alpha x}_Y \le \frac {4 n} r \norm x_X$
for all $\alpha \in A$ and $x \ne 0$.
This inequality also clearly holds for $x = 0$.
So:

$\ds \norm {T_\alpha} \le \frac {4 n} r$
for all $\alpha \in A$ from the definition of the norm on bounded linear transformations. 
From the Continuum Property, we therefore have: 

$\ds \sup_{\alpha \mathop \in A} \norm {T_\alpha}$ exists as a real number
as required.
$\blacksquare$





