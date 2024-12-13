# 

Source: https://proofwiki.org/wiki/Hilbert_Space_is_Hausdorff_Topological_Vector_Space

Theorem
Let $\struct {H, \innerprod \cdot \cdot}$ be a Hilbert space over $\mathbb F \in \set {\R, \C}$.
Let $d: H \times H \to \R_{\ge 0}$ be the metric induced by the inner product norm $\norm {\,\cdot\,}$ on $H$.
Let $\tau$ be the the topology on $H$ induced by the metric $d$.

Then $\struct {H, \tau}$ is a Hausdorff topological vector space.


Proof
If $\mathbb F = \R$, then Real Numbers form Field shows that $\mathbb F$ is a field.
From Euclidean Space is Normed Vector Space, it follows for $r \in \mathbb F$ that:

$\size r = \sqrt {r^2}$
is a norm on $\mathbb F$.
If $\mathbb F = \C$, then Complex Numbers form Field shows that $\mathbb F$ is a field.
From Complex Modulus is Norm, it follows for $z \in \mathbb F$ that:

$\cmod z$
is a norm on $\mathbb F$.
In both cases, it follows from definition of valued field that $\mathbb F$ is a normed division ring.
By definition of normed vector space, $\struct {H, \norm {\,\cdot\,} }$ is a normed vector space.
The result follows from Normed Vector Space is Hausdorff Topological Vector Space.
$\blacksquare$





