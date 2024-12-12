# 

Source: https://proofwiki.org/wiki/Banach-Steinhaus_Theorem/Normed_Vector_Space



Theorem
Let $\struct {X, \norm {\,\cdot\,}_X}$ be a Banach space.
Let $\struct {Y, \norm {\,\cdot\,}_Y}$ be a normed vector space.
Let $\family {T_\alpha: X \to Y}_{\alpha \mathop \in A}$ be an $A$-indexed family of bounded linear transformations from $X$ to $Y$.
Suppose that:

$\ds \forall x \in X: \sup_{\alpha \mathop \in A} \norm {T_\alpha x}_Y$ is finite.

Then:

$\ds \sup_{\alpha \mathop \in A} \norm {T_\alpha}$ is finite
where $\norm {T_\alpha}$ denotes the norm of the linear transformation $T_\alpha$.


Proof 1
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


Proof 2
From Banach Space is F-Space, $\struct {X, \norm {\, \cdot \,}_X}$ can be considered as an $F$-Space.
From Normed Vector Space is Hausdorff Topological Vector Space, $\struct {Y, \norm {\, \cdot \,}_Y}$ can be considered as a topological vector space.
Let $\Gamma = \set {T_\alpha : \alpha \in A}$ and:

$\map \Gamma x = \set {T_\alpha x : \alpha \in A}$
for each $x \in X$. 
By hypothesis, we have:

$\ds \sup_{\alpha \in A} \norm {T_\alpha x}_Y < \infty$ for each $x \in X$.
From Characterization of von Neumann-Boundedness in Normed Vector Space, we have that $\map \Gamma x$ is von Neumann-bounded in $\struct {Y, \norm {\, \cdot \,}_Y}$ for each $x \in X$. 
From Banach-Steinhaus Theorem: $F$-Space, $\Gamma$ is equicontinuous. 
So there exists an open neighborhood $U$ of ${\mathbf 0}_X$ such that:

$T_\alpha \sqbrk U \subseteq \map {B_1^Y} { {\mathbf 0}_Y} \subseteq B^-_Y$ for each $\alpha \in A$.
where:

$\map {B_1^Y} { {\mathbf 0}_Y}$ is the open ball of center ${\mathbf 0}_Y$ and radius $1$ in $\struct {Y, \norm {\, \cdot \,}_Y}$
$B_Y^-$ is the closed unit ball of $\struct {Y, \norm {\, \cdot \,}_Y}$.
From the definition of an open set in a normed vector space, there exists $\delta > 0$ such that:

$\map {B_\delta^X} { {\mathbf 0}_X} \subseteq U$
and so:

$T_\alpha \sqbrk {\map {B_\epsilon^X} { {\mathbf 0}_X} } \subseteq \map {B_1^Y} { {\mathbf 0}_Y}$ for each $\alpha \in A$.
We then have:

$\paren {\delta/2} B_X^- \subseteq \map {B_\delta^X} { {\mathbf 0}_X}$
and:

$\map {B_1^Y} { {\mathbf 0}_Y} \subseteq B_Y^-$
where $B_X^-$ denotes the closed unit ball of $\struct {X, \norm {\, \cdot \,}_X}$. 
Hence by Image of Dilation of Set under Linear Transformation is Dilation of Image, we have: 

$T_\alpha \sqbrk {B_X^-} \subseteq \paren {2/\delta} B_Y^-$ for each $\alpha \in A$.
From Norm of Bounded Linear Transformation in terms of Closed Unit Ball, we have:

$\ds \norm {T_\alpha} \le \frac 2 \delta$ for each $\alpha \in A$.
That is:

$\ds \sup_{\alpha \in A} \norm {T_\alpha} \le \frac 2 \delta$
as required.
$\blacksquare$


Proof 3
It suffices to show that there exist an $x_0 \in X$ and an $r \in \R_{>0}$ such that:

$\ds K : = \sup_{x \mathop \in \map {B_r} {x_0} } \sup_{\alpha \mathop \in A} \norm {T_\alpha x}_Y$ is finite
where $\map {B_r} {x_0}$ is the open $r$-ball of $x_0$.
Indeed, then we have for all $x \in X \setminus \set 0$:














\(\ds \frac{r}{2} \frac {\norm {T_\alpha x}_Y}{\norm x_X}\)

\(=\)







\(\ds \norm {\map {T_\alpha} {x_0 + \frac{r}{2 \norm x_X} x } - T_\alpha x_0 }_Y\)




















\(\ds \)

\(\le\)







\(\ds \norm {\map {T_\alpha} {\underbrace {x_0 + \frac{r}{2 \norm x_X} x}_{\in \map {B_r} {x_0} } } }_Y + \norm {\T_\alpha \underbrace {x_0}_{\in \map {B_r} {x_0} } }_Y\)




















\(\ds \)

\(\le\)







\(\ds 2 K\)









That is:

$\ds \norm {T_\alpha} = \sup_{x \mathop \in X \setminus \set 0} \frac {\norm {T_\alpha x}_Y}{\norm x_X} \le \frac {4 K} r$
$\Box$

Aiming for a contradiction, suppose that for all $x_0 \in X$ and $r \in \R_{>0}$:

$\ds \sup_{x \mathop \in \map {B_r} {x_0} } \sup_{\alpha \mathop \in A} \norm {T_\alpha x}_Y = + \infty$
Then we can choose:

$\map {B_{r_1} } {x_1} \supseteq \map {B_{r_2} } {x_2} \supseteq \cdots$
and:

$\alpha_1, \alpha_2, \ldots \in A$
such that:

$\ds \inf _{x \mathop \in \map {B_{r_k} } {x_k} } \norm {T_{\alpha_k} x}_Y \ge k$
and:

$0 < r_k < \frac 1 k$
Indeed, let $r_0 \in \R_{>0}$ and $x_0 \in X$ be fixed.
Then, for $k = 1, 2, \ldots$, we have:

$\exists x_k \in \map {B_{r_{k-1} } } {x_{k-1} } \exists \alpha_k \in A : \norm {T_{\alpha_k} {x_k} }_Y > k$
Furthermore, as $T_{\alpha_k}$ is continuous, $\exists r_k \in \openint 0 {\frac 1 k}$ such that:

$\map {B_{r_{k-1} } } {x_{k-1} } \supseteq \map {B_{r_k} } {x_k}$
and:

$\ds \inf _{x \mathop \in \map {B_{r_k} } {x_k} } \norm {T_{\alpha_k} x}_Y \ge k$
$\Box$

Then $\sequence {x_k}$ is a Cauchy sequence in $X$, since for each $N \in \N_{>0}$:

$k, l \ge N \implies \norm {x_k - x_l}_X \le \norm {\underbrace {x_k - x_N}_{\in \map {B_{r_N} } {x_N} } }_X + \norm {\underbrace {x_l - x_N}_{\in \map {B_{r_N} } {x_N} } }_X\le 2 \, r_N \le \frac 2 N$
As $X$ is a Banach space, there exists:

$\ds z := \lim_{k \mathop \to +\infty} x_k$
Observe that:

$\ds z \in \bigcap_{k \in \N_{>0} } \map {\overline {B_{r_k} } } {x_k}$
where $\map {\overline  {B_{r_k} } } {x_k}$ is the $r_k$-closed ball of $x_k$.
In particular:

$\forall k \in \N_{>0} : \norm {T_{\alpha_k} z}_Y \ge k$
Thus:

$\ds \sup_{\alpha \mathop \in A} \norm {T_\alpha z}_Y = + \infty$
This is a contradiction.
$\blacksquare$


Also known as
This form of the Banach-Steinhaus Theorem is also known as the Uniform Boundedness Principle.
Some sources give it as the Uniform Bounded Principle, but it is possible that this is a mistake.


Source of Name
This entry was named for Stefan Banach and Władysław Hugo Dionizy Steinhaus.


Historical Note
The Banach-Steinhaus Theorem was first proved, in the context of normed vector spaces, by Eduard Helly in around $1912$.
This was some years before Stefan Banach's work, but Helly failed to obtain recognition for this.


Sources

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.In particular: Links brokenIf you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
2020: James C. Robinson: Introduction to Functional Analysis ... (previous) ... (next) $22.2$: The Principle of Uniform Boundedness




