# 

Source: https://proofwiki.org/wiki/Paths_in_Interior_and_Exterior_of_Jordan_Curve



Theorem
Let $\gamma : \closedint 0 1 \to \R^2$ be a Jordan curve.
Let $t_1 , t_2 \in \closedint 0 1$ with $t_1 < t_2$.
Let $h \in \R_{>0}$.
Let $\Img \gamma$, $\Int \gamma$ and $\Ext \gamma$ denote the image, interior, and exterior of $\gamma$.

Then there exists $r \in \R_{>0}$ such that $r \le h$, and for all $p_1 \in \map {B_r}{ \map \gamma {t_1} }$ and $p_2 \in \map {B_r}{ \map \gamma {t_2} }$:

if $p_1, p_2 \in \Int \gamma$, then there exists a path $\sigma : \closedint 0 1 \to \Int \gamma$ with $\map \sigma 0 = p_1, \map \sigma 1 = p_2$ such that $\ds \max_{s \mathop \in \closedint 0 1} \map d {\gamma \sqbrk{\closedint {t_1}{t_2} }, \map \sigma s} < h$;
if $p_1, p_2 \in \Ext \gamma$, then there exists a path $\sigma : \closedint 0 1 \to \Ext \gamma$ with $\map \sigma 0 = p_1, \map \sigma 1 = p_2$ such that $\ds \max_{s \mathop \in \closedint 0 1} \map d {\gamma \sqbrk{\closedint {t_1}{t_2} }, \map \sigma s} < h$.
Here $\map {B_r} x$ denotes the open ball with radius $r$ and center $x$, and $\map d {X,y}$ denotes the distance between the set $X$ and $y \in \R^2$.


Proof
Let $\phi : \R^2 \to \R^2$ be the homeomorphism defined in the Jordan-Schönflies Theorem such that:














\(\ds \phi \sqbrk {\Img \gamma}\)

\(=\)







\(\ds \mathbb S_1\)




















\(\ds \phi \sqbrk {\Int \gamma}\)

\(=\)







\(\ds \map {B_1}{ \mathbf 0 }\)




















\(\ds \phi \sqbrk {\Ext \gamma}\)

\(=\)







\(\ds \R^2 \setminus \map {B_1^-} { \mathbf 0 }\)









where $\mathbb S_1$ denotes the unit circle in $\R^2$, and $\map {B_1^- }{ \mathbf 0 }$ denotes a closed ball.
For the main part of this proof, we will assume that $p_1 , p_2 \in \Int \gamma$.
We will construct a path between $\map \phi {p_1}$ and $\map \phi {p_2}$ in the interior of $\phi \circ \gamma$.
This path will be a concatenation of three segments $\sigma_{\epsilon_\sigma, \operatorname {Int} }$, $\overline \sigma_1$, and $\overline \sigma_2$.


Construction of the path segment $\sigma_{\epsilon_\sigma, \operatorname {Int} }$
For all $\epsilon \in \openint 0 {\dfrac 1 2}$, let $\sigma_{\epsilon, \operatorname {Int} }, \sigma_{\epsilon, \operatorname {Ext} } : \closedint {t_1}{t_2}$ be the paths defined by:










\(\ds \forall s \in \closedint {t_1}{t_2}: \, \)



\(\ds \map { \sigma_{\epsilon, \operatorname {Int} } } s\)

\(=\)







\(\ds \paren { 1 - \epsilon } \paren{ \map {\phi \circ \gamma} s }\)
















\(\ds \forall s \in \closedint {t_1}{t_2}: \, \)



\(\ds \map { \sigma_{\epsilon, \operatorname {Ext} } } s\)

\(=\)







\(\ds \paren { 1 + \epsilon } \paren{ \map {\phi \circ \gamma} s }\)










As $\norm{ \map {\phi \circ \gamma} s } = 1$, it follows that $\norm{ \map { \sigma_{\epsilon, \operatorname {Int} } } s } = 1 - \epsilon$, where $\norm {\mathbf x}$ denotes the Euclidean norm of $\mathbf x$ on $\R^2$.
It follows that $\sigma_{\epsilon, \operatorname {Int} }$ is a path in $\map {B_1}{ \mathbf 0 }$.
From the Jordan-Schönflies Theorem, it follows that $\Img { \phi^{-1} \circ \sigma_{\epsilon, \operatorname {Int} } } \subseteq \Int \gamma$.
For all $s \in \closedint 0 1$, the distance between $\map { \sigma_{\epsilon, \operatorname {Int} } } s$ and $\map {\phi \circ \gamma} s$ is:

$\norm { \map { \sigma_{\epsilon, \operatorname {Int} } } s - \map  {\phi \circ \gamma} s} = \epsilon \norm {\map  {\phi \circ \gamma} s} = \epsilon$
which is independent of the value of $s$, and converges to $0$ as $\epsilon$ tends to $0$.
It follows that $\sigma_{\epsilon, \operatorname {Int} }$ converges to $\phi \circ \gamma$ uniformly as $\epsilon$ tends to $0$.
Closed Real Interval is Compact shows that $\closedint 0 1$ is compact.
From Composition of Continuous Mapping on Compact Space Preserves Uniform Convergence, it follows that $\phi ^{-1} \circ \sigma_{\epsilon, \operatorname {Int} }$ converges to $\phi^{-1} \circ \phi \circ \gamma$ uniformly as $\epsilon$ tends to $0$.
From Composite of Bijection with Inverse is Identity Mapping, it follows that $\phi^{-1} \circ \phi \circ \gamma = \gamma$.
By definition of uniform convergence, it follows that given $h \in \R_{>0}$, we can find $\Epsilon_\sigma \in \R_{>0}$ such that for all $\epsilon_\sigma \le \Epsilon_\sigma$:

$\ds \max_{s \mathop \in \closedint {t_1}{t_2} } \norm{ \map { \phi ^{-1} \circ \sigma_{\epsilon_\sigma , \operatorname {Int} } }{ s } - \map \gamma s } < h$


Defining the radius $r$
Let $k \in \set {1, 2}$, and let $c_{ \epsilon, 1}, c _{ \epsilon, 2} : \closedint 0 1 \to \R^2$ be defined by:

$\map { c_{ \epsilon, k} }{ s } = \map {\phi \circ \gamma}{t_k} + \epsilon \tuple{ \map \cos {2 \pi s } , \map \sin {2 \pi s } }$

From Parametric Equation of Circle, it follows that $\Img { c_{ \epsilon, k} } = \map {S_\epsilon}{ \map {\phi \circ \gamma}{t_k} }$, where $\map {S_\epsilon}{ \map {\phi \circ \gamma}{t_k} }$ denotes the sphere with center $\map {\phi \circ \gamma}{t_k}$ and radius $\epsilon$.
By definition of sphere, it follows that for all $s \in \closedint 0 1$:

$\norm { \map { c_{ \epsilon, k} }{ s } - \map {\phi \circ \gamma}{t_k} } = \epsilon$

It follows that $c_{ \epsilon, k}$ converges uniformly to the constant mapping $s \mapsto \map {\phi \circ \gamma}{t_k}$, as $\epsilon$ tends to $0$.
Similar to the previous calculations, we can find $\Epsilon_1, \Epsilon_2 \in \R_{>0}$ such that for $k \in \set {1,2}$, and for all $\epsilon_k \le \Epsilon_K$:

$\ds \max_{s \mathop \in \closedint 0 1} \norm{ \map { \phi ^{-1} \circ c_{ \epsilon_k , k } }{ s } - \map \gamma {t_k} } < h$

Set $\epsilon_0 := \map \min { \Epsilon_\sigma , \Epsilon_1 , \Epsilon_2 }$.
Set $r := \ds \min_{ k \mathop \in \set {1, 2} } \max_{s \mathop \in \closedint 0 1} \norm{ \map { \phi ^{-1} \circ c_{ \epsilon_k , k } }{ s } - \map \gamma {t_k} }$.
By definition of open ball, it follows that for all $\tilde p \in \map {B_{\epsilon_0} }{ \map \gamma {t_k} }$ that $\norm {\tilde p - \map {\phi \circ \gamma}{ t_k } }  < \epsilon_0$.
It follows that $\tilde p \in \map {S_{ \norm {\tilde p - \map {\phi \circ \gamma}{ t_k } } } }{ \map {\phi \circ \gamma }{t_k} }$, and $\map { \phi^{-1} }{ \tilde p } \in \map {B_r}{ \map \gamma {t_k} }$.
This implies that $\phi^{-1} \sqbrk{ \map {B_{\epsilon_0 }^- }{ \map { \phi \circ \gamma }{ t_k } } } \subseteq \map {B_r}{\map \gamma {t_k} }$.


Construction of the line segments $\overline \sigma_1$ and $\overline \sigma_2$
Let $p_1 \in \map {B_r}{ \map \gamma {t_1} }$ and $p_2 \in \map {B_r}{ \map \gamma {t_2} }$, and suppose $p_1, p_2 \in \Int \gamma$.
From the Jordan-Schönflies Theorem, it follows for $k \in \set{1, 2}$ that $\map \phi {p_k} \in \map {B_1}{ \mathbf 0 }$.
By definition of $r$, we have $\map \phi {p_k} \in \map {B_{\epsilon_0} }{ \map {\phi \circ \gamma}{ t_k } }$.
Let $\overline \sigma_1 , \overline \sigma_2 : \closedint 0 1 \to \R^2$ be the line segments between $p_k$ and $\map { \phi \circ \gamma }{ t_k }$ defined by:

$\map {\overline \sigma_1} s = s \paren{ \map { \phi \circ \gamma }{ t_1 } }  + \paren { 1-s } p_1$
$\map {\overline \sigma_2} s = s p_2  + \paren { 1-s } \paren{ \map { \phi \circ \gamma }{ t_2 } }$

By definition of $\epsilon_\sigma$, we have $\map { \phi \circ \gamma }{ t_k } \in \map {B_{\epsilon_0 }^- }{ \map { \phi \circ \gamma }{ t_k } }$.
By definition of closed ball, we have $\map \phi {p_k} \in \map {B_{\epsilon_0 }^- }{ \map { \phi \circ \gamma }{ t_k } }$.
From Closed Ball is Convex Set, it follows that $\Img {\overline \sigma_k} \subseteq \map {B_{\epsilon_0 }^- }{ \map { \phi \circ \gamma }{ t_k } }$.
As we have shown that $\phi^{-1} \sqbrk{ \map {B_{\epsilon_0 }^- }{ \map { \phi \circ \gamma }{ t_k } } } \subseteq \map {B_r}{\map \gamma {t_k} }$, it follows that $\Img {\phi^{-1} \circ \overline \sigma_k } \subseteq \map {B_r}{\map \gamma {t_k} }$.
From Open Ball is Convex Set, it follows that $\Img {\overline \sigma_k} \subseteq \map {B_1}{ \mathbf 0 }$.
From the Jordan-Schönflies Theorem, it follows that $\Img {\phi^{-1} \circ \overline \sigma_k } \subseteq \Int \gamma$.


Defining the path $\sigma$
Let $\sigma: \closedint 0 1 \to \R^2$ be defined by $\sigma := \phi^{-1} \circ \paren{ \overline \sigma_1 * \sigma_{\epsilon_0 , \operatorname {Int} } * \overline \sigma_2 }$, where $*$ denotes concatenations of paths.
From what we have shown about $\Img {\overline \sigma_k}$ and $\Img { \sigma_{\epsilon_0 , \operatorname {Int} } }$, it follows that $\sigma$ is a path in $\Int \gamma$.
For all $s \in \closedint 0 1$, we have shown there exists some $s' \in \closedint {t_1}{t_2}$ such that $\norm{ \map \sigma s - \map \gamma {s'} } < h$.
By the definition of distance function, it follows that $\ds \max_{s \mathop \in \closedint 0 1} \map d {\gamma \sqbrk{\closedint {t_1}{t_2} }, \map \sigma s} < h$.


Finding a path in the exterior
Finally, suppose $p_1, p_2 \in \Ext \gamma$.
Using similar calculations, we can find a path $\sigma_{\epsilon_0 , \operatorname {Ext} }$ in $\R^2 \setminus \map {B_1^-} { \mathbf 0 }$ and two line segments $\overline \sigma_1$ and $\overline \sigma_2$ in $\map {B_{\epsilon_0 }^- }{ \map { \phi \circ \gamma }{ t_1 } }$, respectively $\map {B_{\epsilon_0 }^- }{ \map { \phi \circ \gamma }{ t_2 } }$.
As above, the path $\sigma := \phi^{-1} \circ \paren{ \overline \sigma_1 * \sigma_{\epsilon_0 , \operatorname {Ext} } * \overline \sigma_2 }$ will fulfil the requirements.
$\blacksquare$





