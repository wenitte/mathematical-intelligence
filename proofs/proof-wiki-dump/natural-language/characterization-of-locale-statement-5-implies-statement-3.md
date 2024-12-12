# 

Source: https://proofwiki.org/wiki/Characterization_of_Locale/Statement_5_Implies_Statement_3


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $L = \struct{S, \preceq}$ be a complete Brouwerian lattice.

Then:

$L$ satisfies the infinite join distributive law


Proof
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





