# 

Source: https://proofwiki.org/wiki/Meet_Preserves_Directed_Suprema/Lemma_2

Theorem
Let $\mathscr S = \struct {S, \preceq}$ be an up-complete meet semilattice such that

$\forall x \in S$, a directed subset $D$ of $S$: $x \preceq \sup D \implies x \preceq \sup \set {x \wedge y: y \in D}$

Let $x$ be an element of $S$, $D$ be a directed subset of $S$.
Then:

$\paren {\sup D} \wedge x = \sup \set {d \wedge x: d \in D}$


Proof
By Meet Precedes Operands:

$\paren {\sup D} \wedge x \preceq \sup D$
By assumption:

$\paren {\sup D} \wedge x \preceq \sup \set {\paren {\sup D} \wedge x \wedge d: d \in D}$
By definition of supremum:

$\forall d \in D: d \preceq \sup D$
By Preceding iff Meet equals Less Operand:

$\forall d \in D: d \wedge \sup D = d$
By Meet is Associative and Meet is Commutative:

$\paren {\sup D} \wedge x \preceq \sup \set {d \wedge x: d \in D}$
By Meet Semilattice is Ordered Structure:

$\forall d \in D: d \wedge x \preceq \paren {\sup D} \wedge x$
By definition:

$\paren {\sup D} \wedge x$ is upper bound for $\set {d \wedge x: d \in D}$
By definition of supremum:

$\sup \set {d \wedge x: d \in D} \preceq \paren {\sup D} \wedge x$
if $\set {d \wedge x: d \in D}$ admits a supremum
We will prove that:

$\set {d \wedge x: d \in D}$ is directed
Let $y, z \in \set {d \wedge x: d \in D}$.
Then

$\exists d_1 \in D: y = d_1 \wedge x$
and

$\exists d_2 \in D: z = d_2 \wedge x$
By definition of directed subset:

$\exists d \in D: d_1 \preceq d \land d_2 \preceq d$
By Meet Semilattice is Ordered Structure:

$y \preceq d \wedge x$ and $z \preceq d \wedge x$
Thus

$d \wedge x \in \set {d \wedge x: d \in D}$
Hence by definition:

$\set {d \wedge x: d \in D}$ is directed.
$\Box$

By definition of up-complete:

$\set {d \wedge x: d \in D}$ admits a supremum
Thus by definition of antisymmetry:

$\paren {\sup D} \wedge x = \sup \set {d \wedge x: d \in D}$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_2:28




