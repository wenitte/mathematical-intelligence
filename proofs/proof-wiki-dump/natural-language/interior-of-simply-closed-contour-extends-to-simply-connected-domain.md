# 

Source: https://proofwiki.org/wiki/Interior_of_Simply_Closed_Contour_Extends_to_Simply_Connected_Domain

Theorem
Let $C$ be a simple closed contour in $U$, where $U \subseteq \C$ is an open set.
Let $\Int C \subseteq U$, where $\Int C$ denotes the interior of $C$.

Then there exists a simply connected domain $V$ such that $\Int C \subseteq V \subseteq U$, and $C$ is a contour in $V$.


Proof
Let $\mathbb S^1$ denote the unit circle in $\R^2$ whose center is at the origin $\mathbf 0$ of $\R^2$.
Let $\map {B_1} { \mathbf 0 }$ denote the open ball in $\R^2$ with radius $1$ and center $\mathbf 0$, and let $\map {B_1^-} { \mathbf 0 }$ denote the closed ball in $\R^2$ with radius $1$ and center $\mathbf 0$.

We use the Jordan-Schönflies Theorem to show that $\Int C$ is homeomorphic with an open ball in $\R^2$.
By Complex Plane is Homeomorphic to Real Plane, the function $\phi : \R^2 \to \C$, defined by $\map \phi {x, y} = x + i y$, is a homeomorphism between $\R^2$ and $\C$.
By Interior of Simple Closed Contour is Well-Defined, there exists a Jordan curve $f : \closedint 0 1 \to \R^2$ with $\Img C = \phi \sqbrk {\Img f}$, and $\Int C = \phi \sqbrk {\Int f}$.
As $\phi$ is bijective, it follows that $\Img f = \phi^{-1} \sqbrk {\Img C}$, and $\Int f = \phi^{-1} \sqbrk {\Int C}$.
By the Jordan-Schönflies Theorem, there exists a homeomorphism $\psi: \R^2 \to \R^2$ such that $\psi \sqbrk {\Img f} = \mathbb S_1$, and $\psi \sqbrk{ \Int f } = \map{B_1}{\mathbf 0}$.
By Composite of Homeomorphisms between Metric Spaces is Homeomorphism, $\psi \circ \phi^{-1} : \C \to \R^2$ is a homeomorphism.
It follows that $\mathbb S_1 = \psi \circ \phi^{-1} \sqbrk {\Img C}$, and $\map{B_1}{\mathbf 0} = \psi \circ \phi^{-1} \sqbrk {\Int C}$.

$\begin{xy} \xymatrix{
\Int C \ar[r]^*{ \phi^{-1} } &
\Int f \ar[r]^*{\psi} & 
\map {B_1}{\mathbf 0} \ar@{^{(}->}[d]^*{ \textrm{extend radius with $\epsilon$ } } \\
V &
&
\map {B_{1 + \epsilon} }{\mathbf 0}  \ar[ll]^*{ \phi \circ \psi^{-1} }
}\end{xy}$

Next, we extend the radius of the open ball in such a way that $\map {B_{1 + \epsilon} }{\mathbf 0}$ does not overlap with the homeomorphic image of the complement of $U$.
By definition of closed ball, it follows that $\map {B_1^-}{ \mathbf 0} = \mathbb S_1 \cup \map{B_1}{\mathbf 0}$.
By Closed Ball in Euclidean Space is Compact, $\map {B_1^-}{\mathbf 0}$ is compact.
By Complement of Open Set in Complex Plane is Closed, $\relcomp \C U$ is closed in $\C$.
Set $K = \psi \circ \phi^{-1} \sqbrk { \relcomp \C U }$, so $K$ becomes the homeomorphic image of the complement of $U$.
By Continuity of Mapping between Metric Spaces by Closed Sets, $K$ is closed in $\R^2$.
As $\Img C \cup \Int C$ and $\relcomp \C U$ are disjoint in $\C$, and $\psi \circ \phi^{-1}$ is bijective, it follows that $\map{B_1^-}{\mathbf 0}$ and $K$ are disjoint in $\R^2$.
By Distance between Disjoint Compact Set and Closed Set in Metric Space is Positive, the distance between $\map{B_1^-}{\mathbf 0}$ and $K$ is equal to some $\epsilon \in \R_{>0}$.
For each $\mathbf x \in \map { B_{1+\epsilon} }{\mathbf 0}$, the distance between $\mathbf x$ and $\map {B_1^-}{\mathbf 0}$ is smaller than $\epsilon$.
By definition of distance, it follows that $\mathbf x \notin K$, so $\map { B_{1+\epsilon} }{\mathbf 0}$ and $K$ are disjoint in $\R^2$.

Finally, we define $V$ as the homeomorphic image of $\map { B_{1+\epsilon} }{\mathbf 0}$, and show that it fulfils the conditions of the theorem.
By Open Ball is Open Set in Normed Vector Space, $\map { B_{1+\epsilon} }{\mathbf 0}$ is open in $\R^2$. 
By Open Ball is Simply Connected, $\map { B_{1+\epsilon} }{\mathbf 0}$ is simply connected.
Set $V = \phi \circ \psi^{-1} \sqbrk {\map { B_{1+\epsilon} }{\mathbf 0} } \subseteq \C$.
By Simple Connectedness is Preserved under Homeomorphism, it follows that $V$ is simply connected.
By definition of continuity, $V$ is open in $\C$.
By definition of simply connected domain, $V$ is a simply connected domain.
As $\map {B_1^-}{\mathbf 0} \subseteq \map { B_{1+\epsilon} }{\mathbf 0}$, and $\phi \circ \psi^{-1}$ is bijective, it follows that $\Img C \cup \Int C \subseteq V$.
As $\map { B_{1+\epsilon} }{\mathbf 0}$ and $K$ are disjoint, it follows that $\phi \circ \psi^{-1} \sqbrk{ \map { B_{1+\epsilon} }{\mathbf 0} } = V$ and $\phi \circ \psi^{-1} \sqbrk K = \relcomp \C U$ are disjoint in $C$.
It follows that $V \subseteq U$.
$\blacksquare$





