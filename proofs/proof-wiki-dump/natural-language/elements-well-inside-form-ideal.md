# 

Source: https://proofwiki.org/wiki/Elements_Well_Inside_Form_Ideal


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $L = \struct{S, \vee, \wedge, \preceq}$ be a distributive lattice with greatest element $\top$ and smallest element $\bot$.
Let $\eqslantless$ denote the well inside relation on $L$.

Then:

$\forall a \in S : \set{b \in S: b \eqslantless a}$ is a a lattice ideal


Proof
Let $a \in S$.
Let $I = \set{b \in S: b \eqslantless a}$.

$I$ is an Lower Section
Let $b \in I$ and $c \in S : c \preceq b$.

By Ordering Axiom $(3)$: Antisymmetry:

$a \preceq a$
Hence we have:

$c \preceq b \eqslantless a \preceq a$

From Well Inside Relation Extends to Predecessor and Successor:

$c \eqslantless a$
Hence:

$c \in I$

It follows that $I$ is a lower section by definition.
$\Box$

$I$ is a Join Subsemilattice
Let $b, c \in I$.
By definition of well inside relation:

$\exists x, y \in S : b \wedge x = \bot, a \vee x = \top, c \wedge y = \bot, a \vee y = \top$

We have:














\(\ds \paren{b \vee c} \wedge \paren{x \wedge y}\)

\(=\)







\(\ds \paren{b \wedge \paren{x \wedge y} } \vee \paren{c \wedge \paren{x \wedge y} }\)





Definition of Distributive Lattice














\(\ds \)

\(=\)







\(\ds \paren{b \wedge \paren{x \wedge y} } \vee \paren{c \wedge \paren{y \wedge x} }\)





Meet is Commutative














\(\ds \)

\(=\)







\(\ds \paren{\paren{b \wedge x} \wedge y} \vee \paren{\paren{c \wedge y} \wedge x}\)





Meet is Associative














\(\ds \)

\(=\)







\(\ds \paren{\bot \wedge y} \vee \paren{\bot \wedge x}\)





as $\paren{b \wedge x} = \bot, \paren{c \wedge y} = \bot$














\(\ds \)

\(=\)







\(\ds \bot \vee \bot\)





Predecessor is Infimum














\(\ds \)

\(=\)







\(\ds \bot\)





Join is Idempotent




Also we have:














\(\ds a \vee \paren{x \wedge y}\)

\(=\)







\(\ds \paren{a \vee x} \wedge \paren{a \vee y}\)





Definition of Distributive Lattice














\(\ds \)

\(=\)







\(\ds \top \wedge \top\)





as $\paren{a \vee x} = \top, \paren{a \vee y} = \top$














\(\ds \)

\(=\)







\(\ds \top\)





Meet is Idempotent




By definition of well inside relation:

$b \vee c \eqslantless a$
By definition of $I$:

$b \vee c \in I$

It follows that $I$ is an join subsemilattice by definition.
$\Box$

It follows that $I$ is a lattice ideal by definition.

The result follows.
$\blacksquare$


Sources
1982: Peter T. Johnstone: Stone Spaces: Chapter $\text {III}$: Compact Hausdorff Spaces, $\S1.1$




