# 

Source: https://proofwiki.org/wiki/Separation_Axioms_on_Double_Pointed_Topology/T5_Axiom



Theorem
Let $T_1 = \struct {S, \tau_S}$ be a topological space.
Let $D = \struct {A, \set {\O, A} }$ be the indiscrete topology on an arbitrary doubleton $A = \set {a, b}$.
Let $T = \struct {T_1 \times D, \tau}$ be the double pointed topological space on $T_1$.

Then $T \times D$ is a $T_5$ space if and only if $T$ is also a $T_5$ space.


Proof
Necessary Condition
Suppose that $T \times D$ is a $T_5$ space.
Let $A, B \subseteq T$ be two separated sets.
First, we will show that $A \times D$ and $B \times D$ are also separated.

To this end, observe that:














\(\ds \paren {A \times D}^- \cap \paren {B \times D}\)

\(=\)







\(\ds \paren {A^- \times D} \cap \paren {B \times D}\)





Closure of Subset of Double Pointed Topological Space














\(\ds \)

\(=\)







\(\ds \paren {A^- \cap B} \times D\)





Cartesian Product Distributes over Intersection














\(\ds \)

\(=\)







\(\ds \O \times D\)





$A$ and $B$ are separated














\(\ds \)

\(=\)







\(\ds \O\)





Cartesian Product is Empty iff Factor is Empty



Mutatis mutandis, also:

$\paren {B \times D}^- \cap \paren {A \times D} = \O$
Thus $A \times D$ and $B \times D$ are separated.

Since $T \times D$ is assumed to be a $T_5$ space, find open sets $U, V$ such that:

$U \cap V = \O$
$A^- \times D \subseteq U$
$B^- \times D \subseteq V$
By Open Sets of Double Pointed Topology, there are open sets $U', V'$ of $\tau$ such that:

$U = U' \times D$
$V = V' \times D$

We have, furthermore:














\(\ds \O\)

\(=\)







\(\ds U \cap V\)




















\(\ds \)

\(=\)







\(\ds \paren {U' \times D} \cap \paren {V' \times D}\)




















\(\ds \)

\(=\)







\(\ds \paren {U' \cap V'} \times D\)





Cartesian Product Distributes over Intersection



From Cartesian Product is Empty iff Factor is Empty, $U' \cap V' = \O$ since $D$ is non-empty.
By Cartesian Product of Subsets, we also infer:

$A^- \subseteq U'$
$B^- \subseteq V'$
It follows that $T$ is a $T_5$ space.
$\Box$


Sufficient Condition
Suppose that $T$ is a $T_5$ space.
Let $X, Y \subseteq T \times D$ be separated sets.
By Closure of Subset of Double Pointed Topological Space, we know that:

$X^- = {\pr_1 \sqbrk X}^- \times D$
$Y^- = {\pr_1 \sqbrk Y}^- \times D$
where $\pr_1$ is the first projection.

Suppose now that for some $s \in S$, one has:

$s \in {\pr_1 \sqbrk X}^- \cap \pr_1 \sqbrk Y$
Then it would be that for some $d \in D$:

$\tuple {s, d} \in Y$
However, by the expression for $X^-$ above, also $\tuple {s, d} \in X^-$.
This is a contradiction, for $X$ and $Y$ were assumed separated.
Thus:

${\pr_1 \sqbrk X}^- \cap \pr_1 \sqbrk Y = \O$
and analogously, we derive:

$\pr_1 \sqbrk X \cap {\pr_1 \sqbrk Y}^- = \O$
that is, $\pr_1 \sqbrk X$ and $\pr_1 \sqbrk Y$ are separated.
Since $T$ is a $T_5$ space, we find open sets $U, V$ of $\tau$ such that:

$U \cap V = \O$
${\pr_1 \sqbrk X}^- \subseteq U$
${\pr_1 \sqbrk Y}^- \subseteq V$
By Cartesian Product of Subsets, we have:

$X^- = {\pr_1 \sqbrk X}^- \times D \subseteq U \times D$
$Y^- = {\pr_1 \sqbrk Y}^- \times D \subseteq V \times D$
By Open Sets of Double Pointed Topology, $U \times D$ and $V \times D$ are also open sets in $S \times D$.
Finally, we compute:














\(\ds \paren {U \times D} \cap \paren {V \times D}\)

\(=\)







\(\ds \paren {U \cap V} \times D\)





Cartesian Product Distributes over Intersection














\(\ds \)

\(=\)







\(\ds \O \times D\)





by choice of $U$ and $V$














\(\ds \)

\(=\)







\(\ds \O\)





Cartesian Product is Empty iff Factor is Empty



That is, $T \times D$ is a $T_5$ space.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous): Notes: Part $1$: Basic Definitions: Section $2$. Separation Axioms: $1$




