# 

Source: https://proofwiki.org/wiki/Jordan_Polygon_Parity_Lemma



Definition
Let $P$ be a polygon embedded in $\R^2$.
Let $U \subseteq \R^2 \setminus \partial P$ be a path-connected subset of $\R^2 \setminus \partial P$.
Let $q \in U$, and let $\mathbf v \in \R^2 \setminus \set {\mathbf 0}$ be a non-zero vector.
Let $\LL = \set {q + s \mathbf v: s \in \R_{\ge 0} }$ be a ray with start point $q$.

Then:

$(1): \quad$ The parity $\map {\operatorname{par} } q$ is independent of the choice of $v$.
$(2): \quad$ All points in $U$ have the same parity.


Proof
Define $g: \R \to \R^2$ by $\map g \theta = \tuple {\cos \theta, \sin \theta}$.
Define $\LL_\theta = \set {q + s \map g \theta: s \in \R_{\ge 0} }$ as a ray with start point $q$.
Note that the image of $g$ is equal to the unit circle.
Then:

$\dfrac v {\norm {\mathbf v} } = \map g {\theta'}$
for some $\theta' \in \R$, where $\norm {\mathbf v}$ denotes the Euclidean norm of $v$.
Then $\LL = \LL_{\theta'}$, as $q + s \mathbf v = q + \paren {s \norm {\mathbf v} } \, \map g {\theta'}$.

$\LL_\theta \cap \partial P$ consists of a finite number of line segments, some of which are crossings.
Let $\map {N_\theta} q \in \N$ be the number of crossings of $\LL_\theta$.
As the value of $\theta$ increases, the value of $\map {N_\theta} q \in \N$ only changes when $\LL_\theta$ crosses a vertex of $P$.
If $\theta_0 \in \R$ is a value for which $\LL_{\theta_0}$ crosses exactly one vertex $A$ or side $S$, there are three possibilities:

$\ds \map {N_{\theta_0} } q = \lim_{\theta \mathop \to \theta_0} \map {N_\theta} q$, if $A$ or $S$ is not part of a crossing.
$\ds \map {N_{\theta_0} } q = \lim_{\theta \mathop \to \theta_0^-} \map {N_\theta} q = \lim_{\theta \mathop \to \theta_0^+} \map {N_\theta} q - 2$, if $A$ or $S$ is part of a crossing, and $\LL_{\theta_0}$ intersects both lines adjacent to $A$ or $S$ for some $\theta > \theta_0$.
$\ds \map {N_{\theta_0} } q = \lim_{\theta \mathop \to \theta_0^-} \map {N_\theta} q - 2 = \lim_{\theta \mathop \to \theta_0^+} \map {N_\theta} q$, if $A$ or $S$ is part of a crossing, and $\LL_{\theta_0}$ intersects both lines adjacent to $A$ or $S$ for some $\theta < \theta_0$.
Here, $\ds \lim_{\theta \mathop \to \theta_0^-} $ denotes a limit from the left, and $\ds \lim_{\theta \mathop \to \theta_0^+} $ denotes a limit from the right.


The figure shows the change of $\map {N_\theta} q$ each time $\LL_\theta$ intersects a vertex. 
The change of $\map {N_\theta} q$ is for increasing values of $\theta$, which corresponds to a counterclockwise rotation of $\LL_\theta$ around $q$.


This article, or a section of it, needs explaining.In particular: Prove the above statement.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

If $\LL_{\theta_0}$ crosses more than one vertex, $\ds \map {N_{\theta_0} } q$ may change be a larger number, but always by a multiple of $2$.
Hence, $\map {N_\theta} q \bmod 2$ is independent of $\theta$.
Thus we define the parity of $q$ as $\map {\operatorname{par} } q := \map {N_\theta} q \bmod 2$.
Since $\LL = \LL_{\theta'}$ for some $\theta' \in \R$, it follows that $\map {\operatorname{par} } q$ can also be defined as the number of crossings modulo $2$ between $\LL$ and $\partial P$.

Let $\sigma: \closedint 0 1 \to \R^2 \setminus \partial P$ be any path in $U$ with initial point $q$.
For fixed $\theta \in \R$ and $t \in \closedint 0 1$, define $\LL_{\theta, t} = \set {\map \sigma t + s \map g \theta: s \in \R_{\ge 0} }$ as a ray with start point $\map \sigma t$.
A similar argument to the one above shows that for all $t_0 \in \closedint 0 1$:

$\ds \lim_{t \mathop \to t_0} \map {N_\theta} {\map \sigma t + s \map g \theta} \equiv \map {N_\theta} {\map \sigma {t_0} + s \map g \theta} \pmod 2$
So all points in $\Img \sigma$ have the same parity.
This shows that all points in $U$ have the same parity.
$\blacksquare$


Source of Name
This entry was named for Marie Ennemond Camille Jordan.


Sources

Work In ProgressIn particular: Replace this with a link to a hard-copy; links to web pages have been known to be ephemeral. See house style: Help:Sources.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by completing it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{WIP}} from the code.
Jeff Ericsson: Computational Topology




