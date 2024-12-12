# 

Source: https://proofwiki.org/wiki/Conditions_under_which_Commutative_Semigroup_is_Group



Theorem
Suppose the following:
Let $\struct {S, \circ}$ be a commutative semigroup.

Let $\struct {S, \circ}$ have the following properties:




\((1)\)  

$:$  





  \(\ds \forall x \in S: \exists y \in S:\)

\(\ds y \circ x = x \)   







  


\((2)\)  

$:$  





  \(\ds \forall x, y \in S:\)

\(\ds y \circ x = x \implies \exists z \in S: z \circ x = y \)   







  


Then $\struct {S, \circ}$ is a group.


Proof
Some lemmata:

Lemma 1
If $y \circ x = x = y' \circ x$, then $y = y'$.
$\Box$


Lemma 2
If $y \circ x = x$, then $y \circ y = y$.
$\Box$


Lemma 3
If $y \circ x = x$ and $z \circ w = w$, then $y = z$.
$\Box$

First we note that if $S = \set e$ is a singleton, $\struct {S, e}$ is the trivial group.
So in the following, it is assumed that there are at least two elements of $S$.

Taking the group axioms in turn:


Group Axiom $\text G 0$: Closure and Group Axiom $\text G 1$: Associativity
We have that $\struct {S, \circ}$ is a semigroup.
Hence the semigroup axioms are fulfilled:

Semigroup Axiom $\text S 0$: Closure
Semigroup Axiom $\text S 1$: Associativity
Hence Group Axiom $\text G 0$: Closure and Group Axiom $\text G 1$: Associativity are fulfilled by $\struct {S, \circ}$.
$\Box$


Group Axiom $\text G 2$: Existence of Identity Element

This article needs proofreading.In particular: Check if logic is correct in the case where empty semigroup is allowed for the semigroup definitionIf you believe all issues are dealt with, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
By $(1)$:

$\forall x \in S: \exists y \in S: y \circ x = x$
Hence $S$ is not empty, by definition.
Let $x \in S$.
Let $e \in S$ be the element of $S$ asserted by $(1)$ such that $e \circ x = x$.
From Lemma $1$, this is the only such element of $S$ with this property.
Let $z \in S$ such that $z \ne x$ be arbitrary.
By $(1)$ there exists $e' \in S$ such that $e' \circ z = z$.
By Lemma $3$ we have that $e' = e$.
As $z$ is arbitrary, it follows that:

$\exists e \in S: \forall z \in S: e \circ z = z$
As $\struct {S, \circ}$ is a commutative semigroup, it follows also that:

$\forall z \in S: z \circ e = z$
Thus $e$ has been shown to be an identity of $\struct {S, \circ}$.
From Identity is Unique, $e$ is the only such element of $S$ which is an identity.
Hence $e$ is the identity of $\struct {S, \circ}$.
$\Box$


Group Axiom $\text G 3$: Existence of Inverse Element
We have that $e$ is the identity element of $\struct {S, \circ}$:

$\forall x \in S: x \circ e = x$
It follows directly from $(2)$ that:

$\forall x \in S: \exists z \in S: z \circ x = e$
As $\struct {S, \circ}$ is a commutative semigroup, it follows also that:

$\forall x \in S: x \circ z = e$
Thus every element $x$ of $\struct {S, \circ}$ has an inverse $z$.
$\Box$

All the group axioms are thus seen to be fulfilled, and so $\struct {S, \circ}$ is a group.
$\blacksquare$


Warning
While it is the case that such an algebraic structure $\struct {S, \circ}$ is a group, if $\struct {S, \circ}$ is a semigroup which is not commutative, this does not necessarily follow.


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 7$: Semigroups and Groups: Exercise $7.16 \ \text {(d)}$




