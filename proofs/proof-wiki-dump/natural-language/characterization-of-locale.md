# 

Source: https://proofwiki.org/wiki/Characterization_of_Locale


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $L = \struct{S, \preceq}$ be an ordered set.

The following statements are equivalent:

$(1)\quad L$ is a locale
$(2)\quad L$ is a frame
$(3)\quad L$ is a complete lattice satisfying the infinite join distributive law
$(4)\quad L$ is a complete Heyting algebra
$(5)\quad L$ is a complete Brouwerian lattice


Proof
Statement $(1)$ if and only if Statement $(2)$
The equivalence of Statement $(1)$ and Statement $(2)$ follows immediately from the definition of locale
$\Box$

Statement $(2)$ if and only if Statement $(3)$
The equivalence of Statement $(2)$ and Statement $(3)$ follows immediately from the definition of frame
$\Box$

Statement $(3)$ implies Statement $(4)$
Let $L$ be a complete lattice satisfying the infinite join distributive law.

Let $a, b \in S$.
Let $a \to b = \sup \set{c \in S : a \wedge c \preceq b}$

We have:














\(\ds a \wedge \paren{a \to b}\)

\(=\)







\(\ds a \wedge \sup \set{c : a \wedge c \preceq b}\)





Definition of $a \to b$














\(\ds \)

\(=\)







\(\ds \sup \set{a \wedge c : a \wedge c \preceq b}\)





Infinite join distributive law














\(\ds \)

\(\preceq\)







\(\ds b\)





Definition of Supremum of Set




Hence:

$a \to b$ is the greatest element $c$ such that:
$c \wedge a \preceq b$
It follows that $a \to b$ is a relative psuedocomplement by definition.

Since $a, b$ were arbitrary, then:

$\forall a, b \in S : \exists a \to b \in S : a \to b$ is the greatest element $c \in L$ such that $a \wedge c \preceq b$
Hence $L$ is a Heyting algebra by definition.
$\Box$

Statement $(4)$ implies Statement $(5)$
Let $L$ be a complete Heyting algebra.

That $L$ is a complete Brouwerian lattice follows immediately from the definition of Heyting algebra.
$\Box$

Statement $(5)$ implies Statement $(3)$
Let $L$ be a complete Brouwerian lattice.

Let $A \subseteq S$.
Let $a \in S$.


Lemma 1
$\sup \set{a \wedge b : b \in A} \preceq a \wedge \sup A$
Proof of Lemma 1
By definition of meet::

$\forall b \in A : a \wedge b \preceq a, a \wedge b \preceq b$

By definition of upper bound:

$a$ is an upper bound for $\set{a \wedge b : b \in A}$
By definition of supremum:

$\sup \set{a \wedge b : b \in A} \preceq a$

From Finer Supremum Precedes Supremum:

$\sup \set{a \wedge b : b \in A} \preceq \sup A$

By definition of meet:

$\sup \set{a \wedge b : b \in A} \preceq a \wedge \sup A$
$\Box$


Lemma 2
$a \wedge \sup A \preceq \sup \set{a \wedge b : b \in A}$
Proof of Lemma 2
By definition of supremum:

$\forall b \in A : a \wedge b \preceq \sup \set{a \wedge b : b \in A}$
From Relative Pseudocomplement Preserves Order:

$\forall b \in A : a \to a \wedge b \preceq a \to \sup \set{a \wedge b : b \in A}$
By definition of supremum:

$\sup \set{a \to a \wedge b : b \in A} \preceq a \to \sup \set{a \wedge b : b \in A}$

From Inequality with Meet Operation is Equivalent to Inequality with Relative Pseudocomplement in Brouwerian Lattice:

$\forall b \in A : b \preceq a \to a \wedge b$
From Finer Supremum Precedes Supremum:

$\sup A \preceq \sup \set{a \to a \wedge b : b \in A}$
By Ordering Axiom $(3)$: Antisymmetry:

$\sup A \preceq a \to \sup \set{a \wedge b : b \in A}$
From Inequality with Meet Operation is Equivalent to Inequality with Relative Pseudocomplement in Brouwerian Lattice:

$a \wedge \sup A \preceq \sup \set{a \wedge b : b \in A}$
$\Box$

By Ordering Axiom $(1)$: Reflexivity:

$a \wedge \sup A = \sup \set{a \wedge b : b \in A}$

Since $A$ and $a$ were arbitrary:

$\forall A \subseteq S, a \in S : a \wedge \sup A = \sup \set{a \wedge b : b \in A}$
It follows that $L$ satisfies the infinite join distributive law by definition.
$\blacksquare$





