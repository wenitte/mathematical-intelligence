# 

Source: https://proofwiki.org/wiki/Meet_Preserves_Directed_Suprema


This page has been identified as a candidate for refactoring of basic complexity.In particular: Position of Lemmata. Also, there is no Lemma 1 any moreUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Theorem
Let $\mathscr S = \struct {S, \preceq}$ be an up-complete meet semilattice such that

$\forall x \in S$, a directed subset $D$ of $S$: $x \preceq \sup D \implies x \preceq \sup \set {x \wedge y: y \in D}$
Let $f: S \times S \to S$ be a mapping such that:

$\forall s, t \in S: \map f {s, t} = s \wedge t$

Then:

$f$ preserves directed suprema as a mapping from simple order product $\struct{S \times S, \precsim}$ of $\mathscr S$ and $\mathscr S$ into $\mathscr S$.


Proof
Lemma 2
Let $x$ be an element of $S$, $D$ be a directed subset of $S$.
Then:

$\paren {\sup D} \wedge x = \sup \set {d \wedge x: d \in D}$
$\Box$
Let $X$ be a directed subset of $S \times S$ such that

$X$ admits a supremum.
By Up-Complete Product:

the simple order product of $\mathscr S$ and $\mathscr S$ is up-complete.
By Up-Complete Product/Lemma 2:

$X_1 := \map {\pr_1^\to} X$ is directed
and

$X_2 := \map {\pr_2^\to} X$ is directed
where

$\pr_1$ denotes the first projection on $S \times S$
$\pr_2$ denotes the second projection on $S \times S$
$\map {\pr_1^\to} X$ denotes the image of $X$
We will prove that

$(1): \quad \set {x \wedge \sup X_2: x \in X_1} = \set {\sup \set {x \wedge y: y \in X_2}: x \in X_1}$

First inclusion:
Let $a \in \set {x \wedge \sup X_2: x \in X_1}$.
Then

$\exists x \in X: a = x \wedge \sup X_2$
By Meet Precedes Operands:

$x \wedge \sup X_2 \preceq \sup X_2$
By assumption:

$x \wedge \sup X_2 \preceq \sup \set {x \wedge \sup X_2 \wedge y: y \in X_2}$
By definition of supremum:

$\forall y \in X_2: y \preceq \sup X_2$
By Preceding iff Meet equals Less Operand:

$\forall y \in X_2: \sup X_2 \wedge y = y$
By Meet is Associative:

$x \wedge \sup X_2 \preceq \sup \set {x \wedge y: y \in X_2}$
By Meet Semilattice is Ordered Structure:

$\forall y \in X_2: x \wedge y \preceq x \wedge \sup X_2$
By definition:

$x \wedge \sup X_2$ is upper bound for $\set {x \wedge y: y \in X_2}$
By definition of supremum:

$\sup \set {x \wedge y: y \in X_2} \preceq x \wedge \sup X_2$
By definition of antisymmetry:

$a = \sup \set {x \wedge y: y \in X_2}$
Thus

$a \in \set {\sup \set {x \wedge y: y \in X_2}: x \in X_1}$
$\Box$

Second inclusion
Let $a \in \set {\sup \set {x \wedge y: y \in X_2}: x \in X_1}$.
Then

$\exists x \in X_1: a = \sup \set {x \wedge y: y \in X_2}$
Analogically to first inclusion

$a = x \wedge \sup X_2$
Thus

$a \in \set {x \wedge \sup X_2: x \in X_1}$
$\Box$

We will prove as lemma that:

$\paren {\map {f^\to} X}$ is directed.
Let $x, y \in \paren {\map {f^\to} X}$.
By image of set:

$\exists \tuple {a, b} \in X: x = \map f {a, b}$
and

$\exists \tuple {c, d} \in X: y = \map f {c, d}$
By definition of $f$:

$x = a \wedge b$ and $y = c \wedge d$
By definition of directed subset:

$\exists \tuple {g, h} \in X: \tuple {a, b} \precsim \tuple {g, h} \land \tuple {c, d} \precsim \tuple {g, h}$
By simple order product:

$a \preceq g$, $b \preceq h$, $c \preceq g$, and $d \preceq h$
By Meet Semilattice is Ordered Structure:

$x \preceq g \wedge h$ and $y \preceq g \wedge h$
By definition of image of set:

$g \wedge h = \map f {g, h} \in \map {f^\to} X$
Thus:

$\exists z \in \map {f^\to} X: x \preceq z \land y \preceq z$
This ends the proof of lemma.

Thus by definition of up-complete:

$\paren {\map {f^\to} X}$ admits a supremum.
Thus














\(\ds \map \sup {\map {f^\to} X}\)

\(=\)







\(\ds \sup \set {x \wedge y: x \in X_1, y \in X_2}\)





Supremum of Meet Image of Directed Set














\(\ds \)

\(=\)







\(\ds \sup \bigcup \set {\set {x \wedge y: y \in X_2}: x \in X_1}\)




















\(\ds \)

\(=\)







\(\ds \sup \set {\sup \set {x \wedge y: y \in X_2}: x \in X_1}\)





Supremum of Suprema














\(\ds \)

\(=\)







\(\ds \sup \set {x \wedge \sup X_2: x \in X_1}\)





the equality $(1)$














\(\ds \)

\(=\)







\(\ds \paren {\sup X_1} \wedge \paren {\sup X_2}\)





Lemma 2














\(\ds \)

\(=\)







\(\ds \map f {\sup X_1, \sup X_2}\)





Definition of $f$














\(\ds \)

\(=\)







\(\ds \map f {\sup X}\)





Supremum by Suprema of Directed Set in Simple Order Product



$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_2:46




