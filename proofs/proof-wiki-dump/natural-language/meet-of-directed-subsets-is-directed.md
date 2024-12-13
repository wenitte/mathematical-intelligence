# 

Source: https://proofwiki.org/wiki/Meet_of_Directed_Subsets_is_Directed

Theorem
Let $\struct {S, \preceq}$ be a meet semilattice.
Let $D_1, D_2$ be directed subset of $S$.

Then:

$\set {x \wedge y: x \in D_1, y \in D_2}$ is a directed subset of $S$.


Proof
Let $a, b \in \set {x \wedge y: x \in D_1, y \in D_2}$.
Then:

$\exists x \in D_1, y \in D_2: a = x \wedge y$
and

$\exists z \in D_1, t \in D_2: b = z \wedge t$
By definition of directed subset:

$\exists g \in D_1: x \preceq g \land z \preceq g$
and

$\exists h \in D_2: y \preceq h \land t \preceq h$
By Meet Semilattice is Ordered Structure:

$x \wedge y \preceq g \wedge h$ and $z \wedge t \preceq g \wedge h$
$g \wedge h \in \set {x \wedge y: x \in D_1, y \in D_2}$
Thus:

$\exists c \in \set {x \wedge y: x \in D_1, y \in D_2}: a \preceq c \land b \preceq c$
Hence by definition:

$\set {x \wedge y: x \in D_1, y \in D_2}$ is directed.
$\blacksquare$


Sources
Mizar article YELLOW_4:funcreg 6




