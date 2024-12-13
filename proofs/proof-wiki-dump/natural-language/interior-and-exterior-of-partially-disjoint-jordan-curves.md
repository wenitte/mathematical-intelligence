# 

Source: https://proofwiki.org/wiki/Interior_and_Exterior_of_Partially_Disjoint_Jordan_Curves



Theorem
Let $\gamma_0 , \gamma_1 , \gamma_2 : \closedint 0 1 \to \R^2$ be Jordan arcs such that:

$ \map {\gamma_0} 0 = \map {\gamma_1} 1 = \map {\gamma_2} 1$
$\map {\gamma_0} 1 = \map {\gamma_1} 0 = \map {\gamma_2} 0$

Let $\gamma_0 \sqbrk { \openint 0 1 }$ and $\gamma_1 \sqbrk { \openint 0 1 }$ be disjoint sets, and let $\gamma_0 \sqbrk { \openint 0 1 }$ and $\gamma_2 \sqbrk { \openint 0 1 }$ be disjoint sets.
Let $\mathbf c \in \R^2$ and $r_0 \in \R_{>0}$ such that:

$\Img {\gamma_1} \cup \Img {\gamma_2} \subseteq \map {B_{r_0} }{ \mathbf c }$
where $\Img {\gamma_1}$ denotes the image of $\gamma_1$, and $\map {B_{r_0} }{ \mathbf c }$ denotes the open ball with radius $r_0$ and center $\mathbf c$.
Let $t \in \openint 0 1$ such that $\map {\gamma_0} t \notin \map {B_{r_0} }{ \mathbf c }$.

Then there exists $r \in \R_{>0}$ such that for all $p \in \map {B_r}{ \map {\gamma_0} t }$:

$p \in \Int { \gamma_0 * \gamma_1 }$, if and only if $p \in \Int { \gamma_0 * \gamma_2 }$
$p \in \Ext { \gamma_0 * \gamma_1 }$, if and only if $p \in \Ext { \gamma_0 * \gamma_2 }$
where $\Int { \gamma_0 * \gamma_1 }$ and $\Ext { \gamma_0 * \gamma_1 }$ denote the interior, respectively the exterior of the Jordan curve created by concatenating $\gamma_0$ and $\gamma_1$.


Proof
By definition of Jordan curve, it follows that $\gamma_0 * \gamma_1$ and $\gamma_0 * \gamma_2$ are Jordan curves.


Define a ray in the exterior of the Jordan curves
Let $l : \hointr 0 \infty \to \R^2$ be the ray with start point $\mathbf c$ that passes through $\map {\gamma_0} t$ defined by:

$\map l s = \mathbf c + s \paren { \map {\gamma_0} t - \mathbf c }$

Set $s_0 = \ds \sup_{ s \in \hointr 0 \infty } \set { \map l s \in \Img { \gamma_0 } }$.
From Closed Real Interval is Compact, it follows that $\closedint 0 1$ is compact.
From Continuous Image of Compact Space is Compact, it follows that $\Img { \gamma_0 }$ is compact.
By definition of compact sets, it follows that $\Img { \gamma_0 }$ is bounded, so $s_0 \in \R$.
By definition of Jordan arc, it follows that $\gamma_0$ is injective.
As $s_0 \in \Img { \gamma_0 }$, it follows from Injection to Image is Bijection that $t_0 := \map { \gamma_0^{-1} }{ s_0 }$ is well-defined.
Let $l \restriction_{ \openint {s_0} \infty }$ denote the restriction of $l$ to $\openint {s_0} \infty$.
By definition of $s_0$, it follows that $l \restriction_{ \openint {s_0} \infty }$ does not intersect $\gamma_0$.
As for all $s \in \openint {s_0} \infty $, we have:














\(\ds \size { \map { l \restriction_{ \openint {s_0} \infty } }{ s } - \mathbf c }\)

\(=\)







\(\ds s \size { \map { \gamma_0 } t - \mathbf c }\)




















\(\ds \)

\(>\)







\(\ds s r_0\)





by assumption of $\map {\gamma_0} t \notin \map {B_{r_0} }{ \mathbf c }$














\(\ds \)

\(>\)







\(\ds r_0\)





as $s > s_0 \ge 1$, given that $\map l 1 = \map \gamma t$



so by assumption of $\Img {\gamma_1} \cup \Img {\gamma_2} \subseteq \map {B_{r_0} }{ \mathbf c }$, it follows that $l \restriction_{ \openint {s_0} \infty }$ does not intersect $\gamma_1$ or $\gamma_2$.
As $\Img { l \restriction_{ \openint {s_0} \infty } }$ is unbounded, it follows by definition of exterior that $\map l s \in \Ext {\gamma_0 * \gamma_1} \cup \Ext {\gamma_0 * \gamma_2}$ for all $s > s_0$.


Find the positive distance between the Jordan arcs
Let $\tilde t , \tilde t_0 \in \closedint 0 1$ be defined such that $\map {\gamma_0 * \gamma_1} {\tilde t} = \map {\gamma_0} t, \map {\gamma_0 * \gamma_1} {\tilde t_0} = \map {\gamma_0}{ t_0 }$. 
Let $\mathbb I \subseteq \closedint 0 1$ be the closed real interval with endpoints  $\tilde t$ and $\tilde t_0$.
By definition of $\gamma_0, \gamma_1, \gamma_2$, it follows that $\gamma_0 * \gamma_1 \sqbrk { \mathbb I }$ is disjoint with $\Img {\gamma_1} \cup \Img {\gamma_2}$.
By definition of concatenation, it follows that for all $s \in \closedint 0 1$ such that $\map {\gamma_0 * \gamma_1} s \in \Img {\gamma_0}$, and especially for all $s \in \mathbb I$, we have $\map {\gamma_0 * \gamma_1} s = \map {\gamma_0 * \gamma_2} s$.

From Continuous Image of Compact Space is Compact, it follows that $\gamma_0 * \gamma_1 \sqbrk{ \mathbb I }$ and $\Img {\gamma_1} \cup \Img {\gamma_2}$ are compact.
From Distance between Disjoint Compact Set and Closed Set in Metric Space is Positive, it follows that:

$\map d {\gamma_0 * \gamma_1 \sqbrk{ \mathbb I } , \Img {\gamma_1} \cup \Img {\gamma_2} } > 0$
where $\map d {X, Y}$ denotes the distance between the sets $X$ and $Y$ induced by the Euclidean norm on $\R^2$.
Set $h := \map d {\gamma_0 * \gamma_1 \sqbrk{ \mathbb I } , \Img {\gamma_1} \cup \Img {\gamma_2} } / 2$.


Connect $p$ with the ray by a path in the exterior
From Paths in Interior and Exterior of Jordan Curve, it follows that there exists $r \in \hointl 0 h$ such that for all $p \in \map {B_r}{ \map {\gamma_0 * \gamma_1 }{\tilde t} }$ and for all $p_0 \in \map {B_r}{ \map {\gamma_0 * \gamma_1 }{\tilde t_0} }$:

if $p, p_0 \in \Ext {\gamma_0 * \gamma_1}$, then there exists a path $\sigma : \closedint 0 1 \to \Ext {\gamma_0 * \gamma_1}$ with $\map \sigma 0 = p, \map \sigma 1 = p_0$ such that $\ds \max_{s \mathop \in \closedint 0 1} \map d {\gamma_0 * \gamma_1 \sqbrk{\mathbb I}, \map \sigma s} < h$.
Set $p_0 := \map { l \restriction_{ \openint {s_0} \infty } }{s_0 + \dfrac{r}{2 \norm{ \map {\gamma_0}{t_0} - \mathbf c } } }$.
By definition of $l$, it follows that $p_0 \in \map {B_r}{ \map {\gamma_0}{t_0} } \cap \paren{ \Ext {\gamma_0 * \gamma_1} \cup \Ext {\gamma_0 * \gamma_2} }$.
Let $p \in \map {B_r}{ \map {\gamma_0 * \gamma_1 }{\tilde t} }$, and suppose $p \in \Ext {\gamma_0 * \gamma_1}$.
It follows that there exists a path $\sigma : \closedint 0 1 \to \Ext {\gamma_0 * \gamma_1}$ between $p$ and $p_0$.


Show that the path does not intersect the Jordan curves
As:

$\ds \max_{s \mathop \in \closedint 0 1} \map d {\Img {\gamma_0 * \gamma_1}, \map \sigma s} < \map d {\gamma_0 * \gamma_1 \sqbrk{ \mathbb I } , \Img {\gamma_1} \cup \Img {\gamma_2} }$
it follows that $\Img \sigma$ is disjoint with $\Img {\gamma_2}$.
As $p_0 \in \Ext {\gamma_0 * \gamma_2}$, it follows that $\sigma$ is also a path in $\Ext {\gamma_0 * \gamma_2}$.
As $\Ext {\gamma_0 * \gamma_2}$ is path-connected, it follows that $p \in \Ext {\gamma_0 * \gamma_2}$.
A symmetry argument shows that if $p \in \Ext {\gamma_0 * \gamma_2}$, then $p \in \Ext {\gamma_0 * \gamma_1}$.


Prove the case where $p$ lies in the interior
For all $p \in \map {B_r}{ \map {\gamma_0 * \gamma_1 }{\tilde t} }$ such that $p \in \Img {\gamma_0 * \gamma_1}$ or $p \in \Img {\gamma_0 * \gamma_2}$, it follows that $p \in \Img {\gamma_0}$.
This shows that $p \in \Img {\gamma_0 * \gamma_1}$, if and only if $p \in \Img {\gamma_0 * \gamma_2}$.
Suppose instead that $p \in \Int {\gamma_0 * \gamma_1}$.
From the Jordan Curve Theorem, it follows that $\R^2 \setminus \Img {\gamma_0 * \gamma_2}$ is the union of two disjoint connected components, which are $\Int {\gamma_0 * \gamma_2}$ and $\Ext {\gamma_0 * \gamma_2}$.
As $p \notin \Img {\gamma_0 * \gamma_2}$, and we have shown that $p \notin \Ext {\gamma_0 * \gamma_2}$, it follows that $p \in \Int {\gamma_0 * \gamma_2}$.
A symmetry argument shows that if $p \in \Int {\gamma_0 * \gamma_2}$, then $p \in \Int {\gamma_0 * \gamma_1}$.
$\blacksquare$





