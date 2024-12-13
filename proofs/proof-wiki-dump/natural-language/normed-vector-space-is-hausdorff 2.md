# 

Source: https://proofwiki.org/wiki/Normed_Vector_Space_is_Hausdorff

Theorem
Let $\struct {X, \norm {\, \cdot \,}_X }$ be a normed vector space.
Let $\tau$ be the topology on $X$ that consists of all open sets in $X$.
That is, $U \in \tau$ if and only if:

$\forall x \in U: \exists \epsilon \in \R_{>0}: \map {B_\epsilon} x \subseteq U$
where $\map {B_\epsilon} x$ is the open $\epsilon$-ball of $x$.

Then $\struct {X, \tau}$ is a $T_2$ (Hausdorff) space.


Proof
From Metric Induced by Norm is Metric, it follows that the norm $\norm {\,\cdot\,}$ induces a metric $d$ on $X$.
From the definition of open set in normed vector space, it follows that $\tau$ is the topology induced by the metric $d$.
The result now follows from Metric Space is Hausdorff.
$\blacksquare$





