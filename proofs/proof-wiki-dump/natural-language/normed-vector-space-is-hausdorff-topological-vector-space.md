# 

Source: https://proofwiki.org/wiki/Normed_Vector_Space_is_Hausdorff_Topological_Vector_Space



Theorem
Let $\struct { K, +_K, \circ_K }$ be a valued field with norm  $\norm {\,\cdot\,}_K$.
Let $\struct {X, \norm {\, \cdot \,}_X }$ be a normed vector space over $K$.
Let $\tau$ be the topology on $X$ that consists of all open sets in $X$.
That is, $U \in \tau$ if and only if:

$\forall x \in U: \exists \epsilon \in \R_{>0}: \map {B_\epsilon} x \subseteq U$
where $\map {B_\epsilon} x$ is the open $\epsilon$-ball of $x$.

Then $\struct { X, \tau }$ is a Hausdorff topological vector space.


Proof
By its definition, a valued field is a normed division ring.
Let $\tau_K$ be the topology on $K$ induced by the metric induced by the norm $\norm {\,\cdot\,}_K$
From Normed Division Ring Operations are Continuous:Corollary, it follows that $\struct {K, \tau_K}$ is a topological field.

Let $d_X : X \times X \to \R_{\ge 0}$ be the metric induced by the inner product norm $\norm {\,\cdot\,}_X$ on $X$.
By definition of open set in normed vector space, it follows that $\tau$ is the topology on $X$ induced by the metric $d_X$.
To show that $\tau$ is a topology on $X$, we examine each of the open set axioms in turn:

Open Set Axiom $\paren {\text O 1 }$: Union of Open Sets
Follows from Union of Open Sets of Normed Vector Space is Open.

Open Set Axiom $\paren {\text O 2 }$: Pairwise Intersection of Open Sets
Follows from Finite Intersection of Open Sets of Normed Vector Space is Open.

Open Set Axiom $\paren {\text O 3 }$: Underlying Set is Element of Topology
Follows from Normed Vector Space is Open in Itself.
$\Box$

Let $+_{\scriptscriptstyle X}$ denote the vector addition on $X$ , and let $\circ_{\scriptscriptstyle X}$ denote 
the scalar multiplication on $X$.
To show that $\struct { X, \tau }$ is a topological vector space, we examine each of the axioms from the definition of topological vector space in turn:

$\tau$ is a Hausdorff topology
Follows from Normed Vector Space is Hausdorff.

$+_{\scriptscriptstyle X}: X \times X \to X$ is continuous with respect to $\tau$
Follows from Vector Addition on Normed Vector Space is Continuous.

$\circ_{\scriptscriptstyle X}: K \times X \to X$ is continuous with respect to $\tau$
Follows from Scalar Multiplication on Normed Vector Space is Continuous.
$\blacksquare$





