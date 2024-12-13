# 

Source: https://proofwiki.org/wiki/Jordan_Curve_and_Jordan_Arc_form_Two_Jordan_Curves



Theorem
Let $\gamma: \closedint a b \to \R^2$ be a Jordan curve, where $\closedint a b$ is the closed real interval between $a, b \in \R$ with $a < b$.
Let the interior of $\gamma$ be denoted $\Int \gamma$.
Let the image of $\gamma$ be denoted $\Img \gamma$.

Let $\sigma: \closedint c d \to \R^2$ be a Jordan arc such that:

$\map \sigma c, \map \sigma d \in \Img \gamma$
and:

$\forall t \in \openint c d: \map \sigma t \in \Int \gamma$

Let $t_1 = \map {\gamma^{-1} } {\map \sigma c}$.
Let $t_2 = \map {\gamma^{-1} } {\map \sigma d}$.
Let $t_1 < t_2$.

Define:

$-\sigma: \closedint c d \to \Img \sigma$ by $-\map \sigma t = \map \sigma {c + d - t}$
Let $*$ denote concatenation of paths.
Let $\gamma \restriction_{\closedint a {t_1} }$ denote the restriction of $\gamma$ to $\closedint a {t_1}$.

Define:

$\gamma_1 = \gamma \restriction_{\closedint a {t_1} } * \sigma * \gamma {\restriction_{\closedint {t_2} b} }$
Define:

$\gamma_2 = \gamma \restriction_{\closedint {t_1} {t_2} } * \paren {-\sigma}$

Then $\gamma_1$ and $\gamma_2$ are Jordan curves such that:

$\Int {\gamma_1} \cup \Int {\gamma_2} \cup \paren {\Img \sigma \setminus \set {\map \sigma c , \map \sigma d } } = \Int \gamma$


Corollary
Define:

$\gamma_1 = \gamma {\restriction_{\closedint a {t_2} } } * \paren {-\sigma} * \gamma {\restriction_{\closedint {t_1} b} }$
Define:

$\gamma_2 = \gamma {\restriction_{\closedint {t_2} {t_1} } } * \sigma$

Then $\gamma_1$ and $\gamma_2$ are Jordan curves such that:

$\Int {\gamma_1} \cup \Int {\gamma_2} \cup \paren { \Img \sigma \setminus \set { \map \sigma c , \map \sigma d } } = \Int \gamma$


Proof
$\gamma_1$ and $\gamma_2$ are Jordan curves
Let $\closedint {a_1}{b_1}$ denote the domain of $\gamma_1$, and $\closedint {a_2}{b_2}$ denote the domain of $\gamma_2$.
As:

$\Int \gamma$ and $\Img \gamma$ are disjoint by the Jordan Curve Theorem
and:

$\map \sigma {\openint c d} \subseteq \Int \gamma$
it follows that:

$\Img \gamma \cap \Img \sigma = \set {\map \sigma c, \map \sigma d}$.

As $\gamma$ is a Jordan curve, it follows that $\gamma {\restriction_{\closedint a {t_1} } }$ and $\gamma {\restriction_{\closedint {t_2} b} }$ intersect only in $\map \gamma a$.
It follows that:

$\map {\gamma_1 }{t_1} \ne \map {\gamma_1} {t_2}$ for all $t_1 ,t_2 \in \hointr {a_1} {b_1}$ with $t_1 \ne t_2$

As the initial point of $\gamma_1$ is $\map \gamma a$, and the final point of $\gamma_1$ is $\map \gamma b = \map \gamma a$, it follows that $\gamma_1$ is a Jordan curve.
As $\Img {-\sigma} = \Img \sigma$, it follows that:

$\map {\gamma_2 }{t_1} \ne \map {\gamma_2 }{t_2}$ for all $t_1 ,t_2 \in \hointr {a_2}{b_2}$ with $t_1 \ne t_2$

As $\map \gamma {t_1} = \map \sigma c = -\map \sigma d$, it follows that $\gamma_2$ is a Jordan curve.
$\Box$


$\Int {\gamma_1} \cup \Int {\gamma_2} \cup \paren {\Img \sigma \setminus \set {\map \sigma c, \map \sigma d} }$ is a subset of $\Int \gamma$
Denote the exterior of $\gamma$ as $\Ext \gamma$.
Let $q_0 \in \Ext \gamma$ be determined.
By the Jordan Curve Theorem, $\Ext \gamma$ is unbounded.
Hence for all $N \in \N$ there exists $q \in \Ext \gamma$ such that:

$\map d {\mathbf 0, q} > N$
where $d$ denotes the Euclidean metric on $\R^2$.
The Jordan Curve Theorem also shows that $\Ext \gamma$ is open and connected.
From Connected Open Subset of Euclidean Space is Path-Connected, it follows that $\Ext \gamma$ is path-connected.
Then, there exists a path $\rho$ in $\Ext \gamma$ from $q$ to $q_0$.

We have:

$\Img {\gamma_1} \subseteq \Int \gamma \cup \Img \gamma$
This is disjoint with $\Ext \gamma$
Thus it follows that $\rho$ is a path in either $\Ext {\gamma_1}$ or $\Int {\gamma_1}$.

We have that $\map d {\mathbf 0, q}$ can be arbitrary large.
Also, $\Int {\gamma_1}$ is bounded.
So follows that $\rho$ is a path in $\Ext {\gamma_1}$.
In particular:

$q \in \Ext {\gamma_1}$
Therefore:

$\Ext \gamma \subseteq \Ext {\gamma_1}$

Let $q_1 \in \Int {\gamma_1}$.
Then:

$q_1 \notin \Ext \gamma$
as $\Int {\gamma_1}$ and $\Ext {\gamma_1}$ are disjoint.
It follows that:

$q_1 \in \Int {\gamma_1}$
Therefore:

$\Int {\gamma_1} \subseteq \Int \gamma$
Similarly, it follows that:

$\Int {\gamma_2} \subseteq \Int \gamma$
It follows from the definition of $\sigma$ that:

$\Img \sigma \setminus \set {\map \sigma c, \map \sigma d} \subseteq \Int \gamma$
and thus:

$\Int {\gamma_1} \cup \Int {\gamma_2} \cup \paren {\Img \sigma \setminus \set {\map \sigma c, \map \sigma d} } \subseteq \Int \gamma$
$\Box$


$\Int \gamma$ is a subset of  $\Int {\gamma_1} \cup \Int {\gamma_2} \cup \paren {\Img \sigma \setminus \set {\map \sigma c, \map \sigma d} }$
Let $q_2 \in \Int \gamma$.
Suppose $q_2 \in \Ext {\gamma_1}$.
Then there exists a path $\rho$ in $\Ext {\gamma_1}$ from $q_2$ to $q \in \Ext {\gamma_1}$.
As $q \in \Ext \gamma$, it follows that $\rho$ must intersect $\gamma$ in $\map \gamma t \notin \Img {\gamma_1}$ for some $t \in \closedint a b$.
As $\Img \gamma \subseteq \Img {\gamma_1} \cup \Img {\gamma_2}$, it follows that $\map \gamma t \in \Img {\gamma_2}$.
By the Jordan-Schönflies Theorem, there exists a homeomorphism $\phi : \R^2 \to \R^2$ such that:

$\phi \sqbrk {\Int \gamma} = \map {B_1} {\mathbf 0}$
where $\map {B_1} {\mathbf 0}$ denotes the open ball with radius $1$ and center at the origin $\mathbf 0$.

$\phi \sqbrk {\Img \gamma} = \mathbb S^1$
where $\mathbb S^1$ denotes the unit circle with center $\mathbf 0$.

Let $p = \map \phi {\map \gamma t} \in \mathbb S^1$ be the corresponding intersection point under the homeomorphism $\phi$.
From Closed Real Interval is Compact and Continuous Image of Compact Space is Compact, it follows that $\phi \sqbrk {\Img {\gamma_1} } = \phi \circ \gamma _1 \sqbrk {\closedint 0 1}$ is compact.
From Distance between Disjoint Compact Set and Closed Set in Metric Space is Positive, it follows that there exists $r \in \R_{>0}$ such the open ball $\map {B_r} p$ is disjoint with $\phi \sqbrk {\Img {\gamma_1} }$.
The set $\map {B_r} p \setminus \mathbb S^1$ is split into these two path components:

$B_{\operatorname {Int} } = \set {p' \in \map {B_r} p : \norm {p'} < 1 }$
$B_{\operatorname {Ext} } = \set {p' \in \map {B_r} p : \norm {p'} > 1 }$
where $\norm {p'}$ denotes the Euclidean norm on $\R^2$.
From the Jordan-Schönflies Theorem, it follows that $B_{\operatorname{Int} } \subseteq \phi \sqbrk {\Int \gamma}$, and $B_{\operatorname {Ext} } \subseteq \phi \sqbrk {\Ext \gamma}$.
It follows that there exists a path from any point in $B_{\operatorname{Ext} }$ to any point in $\phi \sqbrk {\Ext \gamma}$ that does not intersect $\mathbb S_1 \cup \map {B_1} {\mathbf 0}$.
As $\phi \sqbrk {\Ext {\gamma} }$ and $\phi \sqbrk {\Ext {\gamma_2} }$ are both unbounded path components, it follows that $B_{\operatorname{Ext} } \subseteq \phi \sqbrk {\Ext {\gamma_2} }$.
From the Jordan Curve Theorem, it follows that $\phi \sqbrk {\Img {\gamma_2} }$ is the common boundary between $\phi \sqbrk {\Int {\gamma_2} }$ and $\phi \sqbrk {\Ext {\gamma_2} }$.
As $B_{\operatorname {Int} }$ is the only other path component of $\map {B_r} p \setminus \mathbb S^1$, it follows that $B_{\operatorname {Int} } \subseteq \phi \sqbrk {\Int {\gamma_2} }$.
As the path $\rho$ begins in $\phi \sqbrk {\Int \gamma}$, it connects $\map \phi {q_2}$ with $B_{\operatorname{Int} }$.
As $B_{\operatorname {Int} } \subseteq \phi \sqbrk {\Int {\gamma_2} }$, it follows that $\map \phi {q_2} \in \phi \sqbrk {\Int {\gamma_2} }$.
As $\Int {\gamma_2}$ and $\Ext {\gamma_2}$ are disjoint sets, it follows that $\map \phi {q_2} \notin \phi \sqbrk {\Ext {\gamma_2} }$.
Thus, $\phi \sqbrk {\Int {\gamma} }$ and $\phi \sqbrk {\Ext {\gamma_1} } \cap \phi \sqbrk {\Ext {\gamma_2} }$ are disjoint.
When we apply the inverse function $\phi^{-1}$ to these images of $\phi$, we have:














\(\ds \Int \gamma\)

\(\subseteq\)







\(\ds \relcomp {\R^2} {\paren {\Ext {\gamma_1} \cap \Ext {\gamma_2} } } \setminus \Img \gamma\)





Definition of Disjoint Sets, and using $\Int \gamma$ is disjoint with $\Img \gamma$














\(\ds \)

\(=\)







\(\ds \relcomp {\R^2} {\Ext {\gamma_1} } \cup \relcomp {\R^2} {\Ext {\gamma_2} } \setminus \Img \gamma\)





De Morgan's Law














\(\ds \)

\(=\)







\(\ds \Int {\gamma_1} \cup \Img {\gamma_1} \cup \Int {\gamma_2} \cup \Img {\gamma_2} \setminus \Img \gamma\)





Jordan Curve Theorem














\(\ds \)

\(=\)







\(\ds \Int {\gamma_1} \cup \Int {\gamma_2} \cup \paren {\Img \sigma \setminus \set {\map \sigma c, \map \sigma d} }\)









$\blacksquare$





