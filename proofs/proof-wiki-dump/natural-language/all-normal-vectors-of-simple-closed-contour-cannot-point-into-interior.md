# 

Source: https://proofwiki.org/wiki/All_Normal_Vectors_of_Simple_Closed_Contour_Cannot_Point_into_Interior



Theorem
Let $C$ be a simple closed contour in the complex plane $\C$ with parameterization $\gamma: \closedint a b \to \C$.
Let $t \in \openint a b$ such that $\gamma$ is complex-differentiable at $t$.
Let $S \in \set {-1,1}$.
Let $\Int C$ denote the interior of $C$.

Then there exists $r_0 \in \R_{>0}$ such that:

for all $\epsilon \in \openint 0 {r_0}$, we have $\map \gamma {t} + \epsilon i S \map {\gamma '}{ t } \in \Int C$
if and only if there exists $r_1 \in \R_{>0}$ such that:

for all $\epsilon \in \openint 0 {r_1}$, we have $\map \gamma {t} - \epsilon i S \map {\gamma '}{ t } \notin \Int C$.
Lemma
Let $r_0, R_0 \in \R_{>0}$ such that:

for all $s \in \openint {t - R_0} {t + R_0}$ and for all $\epsilon \in \openint 0 {r_0}$: $\map \gamma s + \epsilon i \map {\gamma'} s \notin \Img C$, and $\map \gamma s - \epsilon i \map {\gamma'} s \notin \Img C$.

There exist $r, R \in \R_{>0}$ with $r \le r_0 , R \le R_0$ such that:

$V_{r,R} = \set {\map \gamma s + \epsilon i \map {\gamma'} s : s \in \openint {t - R} {t + R}, \epsilon \in \openint {-r} r}$
is an open set in $\C$.


Proof
From Normal Vectors Form Space around Simple Complex Contour, it follows that there exists $\tilde r, \tilde R \in \R_{>0}$ such that:

for all $s \in \openint { t - \tilde R }{ t + \tilde R }$ and for all $\epsilon \in \openint 0 {\tilde r}$: $\map \gamma s + \epsilon i \map {\gamma'} s \notin \Img C$, and $\map \gamma s - \epsilon i \map {\gamma'} s \notin \Img C$
where $\Img C$ denotes the image of $C$.
From the Lemma, we find an open set $V_{r,R} \subseteq \C$ with $r \le \tilde r, R \le \tilde R$.
Let $z_1, z_2 \in V_{r,R}$.
Then there exist $s_1 , s_2 \in \openint { t-R }{ t+R }$ and $\epsilon_1 , \epsilon_2 \in \openint 0 r$ with $S_0 \in \set {-1,1}$ such that:

$z_1 = \map \gamma {s_1} + \epsilon_1 i S_0 \map {\gamma'}{ s_1 } \in V_{r,R}, z_2 = \map \gamma {s_2} + \epsilon_2 i S_0 \map {\gamma'}{ s_2 } \in V_{r,R}$.

We now define a path $f: \closedint 0 1 \to V_{r,R}$  with endpoints $z_1$ and $z_2$ by:

$\map f {\hat t} =  \map \gamma { s_1 + \paren{ s_2 - s_1} \hat t } + \paren{ \epsilon_1 + \paren{ \epsilon_2 - \epsilon_1 } \hat t } i S_0 \map {\gamma'}{ s_1 + \paren{ s_2 - s_1} \hat t  }$

As $\paren{ \epsilon_1 + \paren{ \epsilon_2 - \epsilon_1 } \hat t } \in \openint 0 r$, it follows that $\map f {\hat t} \notin \Img C$ for all $\hat t \in \closedint 0 1$.

Complex Plane is Homeomorphic to Real Plane shows that we can identify the complex plane $\C$ with the real plane $\R^2$ by the homeomorphism $\map \phi {x, y} = x + i y$.
Interior of Simple Closed Contour is Well-Defined shows that $\Img C$ can be identified with the image of a Jordan curve $g: \R^2 \to \R^2$.
From the same theorem, it follows that $\Int C$ can be identified with the interior of $g$.
From the Jordan Curve Theorem, it follows that $\C \setminus \Img C$ is a union of two open connected components, which are $\Int C$ and the exterior of $g$, which we denote $\Ext C$.
From Connected Open Subset of Euclidean Space is Path-Connected, it follows that $\Int C$ and $\Ext C$ are path components of $\C \setminus \Img C$.

Sufficient condition
By assumption, it follows that:

$z_0 := \map \gamma {t} + \dfrac {r_0} 2 i S \map {\gamma '}{ s } \in \Int C$.
For $z \in V_{r,R}$ such that $ z = \map \gamma s + \epsilon i S \map {\gamma'} s$, we have shown that there is a path $f$ in $V_{r,R} \setminus \Img C$ between $z_0$ and $z$.
By definition of path component, it follows that $z \in \Int C$.
Set $z_1 := \map \gamma {t} - \dfrac r 2 i S \map {\gamma '}{ s }$.
Suppose $z_1 \in \Int C$.
For $z \in V_{r,R}$ such that $ z = \map \gamma s - \epsilon i S \map {\gamma'} s$, it follows as above that $z \in \Int C$.
For $z \in V_{r,R}$ such that $ z = \map \gamma s$, we have $z \in \Img C$.
It follows that $V_{r,R} \subseteq \Int C \cup \Img C$.
From the Jordan Curve Theorem, it follows that $\Img C$ is the common boundary of $\Int C$ and $\Ext C$.
This leads to a contradiction, as $\map \gamma t \in \Img C$, but $V_{r,R}$ contains no points of $\Ext C$.
It follows that $z_1 \in \Ext C$.
For $z \in V_{r,R}$ such that $ z = \map \gamma s - \epsilon i S \map {\gamma'} s$, it now follows that $z \in \Ext C$.
Specifically, $\map \gamma {t} - \epsilon i S \map {\gamma '}{ t } \notin \Int C$.
It follows that we can set $r_1 := r$.
$\Box$

Necessary condition
By assumption, it follows that:

$z_0 := \map \gamma {t} + \dfrac {r_1} 2 i S \map {\gamma '}{ s } \notin \Int C$.
As $\C \setminus \Img C$ consists of two path components, it follows that $z_0 \in \Ext C$.
For $z \in V_{r,R}$ such that $ z = \map \gamma s + \epsilon i S \map {\gamma'} s$, we have shown that there is a path $f$ in $V_{r,R} \setminus \Img C$ between $z_0$ and $z$.
By definition of path component, it follows that $z \in \Ext C$.
Set $z_1 := \map \gamma {t} - \dfrac r 2 i S \map {\gamma '}{ s }$.
Suppose $z_1 \notin \Int C$.
For $z \in V_{r,R}$ such that $ z = \map \gamma s - \epsilon i S \map {\gamma'} s$, it follows as above that $z \notin \Int C$.
For $z \in V_{r,R}$ such that $ z = \map \gamma s$, we have $z \in \Img C$.
It follows that $V_{r,R} \subseteq \Ext C \cup \Img C$.
From the Jordan Curve Theorem, it follows that $\Img C$ is the common boundary of $\Int C$ and $\Ext C$.
This leads to a contradiction, as $\map \gamma t \in \Img C$, but $V_{r,R}$ contains no points of $\Int C$.
It follows that $z_1 \in \Int C$.
For $z \in V_{r,R}$ such that $ z = \map \gamma s - \epsilon i S \map {\gamma'} s$, it now follows that $z \in \Int C$.
It follows that we can set $r_0 := r$.
$\blacksquare$





