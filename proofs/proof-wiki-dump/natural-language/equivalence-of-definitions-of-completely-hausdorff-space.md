# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Completely_Hausdorff_Space



Theorem
The following definitions of the concept of a completely Hausdorff space are equivalent:

Let $T = \struct {S, \tau}$ be a topological space.

Definition 1
$\struct {S, \tau}$ is a completely Hausdorff space or $T_{2 \frac 1 2}$ space if and only if:

$\forall x, y \in S, x \ne y: \exists U, V \in \tau: x \in U, y \in V: U^- \cap V^- = \O$

That is, for any two distinct elements $x, y \in S$ there exist open sets $U, V \in \tau$ containing $x$ and $y$ respectively whose closures are disjoint.

Definition 2
$\struct {S, \tau}$ is a completely Hausdorff space or $T_{2 \frac 1 2}$ space if and only if:

$\forall x, y \in S, x \ne y : \exists N_x, N_y \subseteq S: \exists U, V \in \tau: x \subseteq U \subseteq N_x, y \subseteq V \subseteq N_y: N_x^- \cap N_y^- = \O$

That is:

$\struct {S, \tau}$ is a $T_{2 \frac 1 2}$ space if and only if every two points in $S$ are separated by closed neighborhoods.


Proof
Definition 1 implies Definition 2
Let $\struct {S, \tau}$ satisfy:

$\forall x, y \in S, x \ne y: \exists U, V \in \tau: x \in U, y \in V: U^- \cap V^- = \O$

Let $x, y \subseteq S , x \ne y $ be arbitrary.
Then:

$\exists U, V \in \tau: x \in U, y \in V: U^- \cap V^- = \O$
Let $N_x = U$ and $N_y = V$.
From Set is Subset of Itself then:

$\exists N_x, N_y \subseteq S: \exists U, V \in \tau: x \in U \subseteq N_x, y \in V \subseteq N_y: N_x^- \cap N_y^- = \O$

Because $x, y \in S$ were arbitrary:

$\forall x, y \in S, x \ne y : \exists N_x, N_y \subseteq S: \exists U, V \in \tau: x \subseteq U \subseteq N_x, y \subseteq V \subseteq N_y: N_x^- \cap N_y^- = \O$
$\Box$


Definition 2 implies Definition 1
Let $\struct {S, \tau}$ satisfy:

$\forall x, y \in S, x \ne y : \exists N_x, N_y \subseteq S: \exists U, V \in \tau: x \subseteq U \subseteq N_x, y \subseteq V \subseteq N_y: N_x^- \cap N_y^- = \O$

Let $x, y \subseteq S , x \ne y $ be arbitrary.
Then:

$\exists N_x, N_y \subseteq S: \exists U, V \in \tau: x \in U \subseteq N_x, y \in V \subseteq N_y: N_x^- \cap N_y^- = \O$
From Topological Closure of Subset is Subset of Topological Closure:

$U^- \subseteq N_x^-, V^- \subseteq N_y^-$
From Subsets of Disjoint Sets are Disjoint then:

$U^- \cap V^- = \O$
Thus:

$\exists U, V \in \tau: x \in U, y \in V: U^- \cap V^- = \O$

Because $x, y \in S$ were arbitrary:

$\forall x, y \in S, x \ne y: \exists U, V \in \tau: x \in U, y \in V: U^- \cap V^- = \O$
$\blacksquare$





