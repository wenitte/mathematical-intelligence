# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Transitive_Closure_of_Set


This page has been identified as a candidate for refactoring.In particular: Use standard technique to structure definition equivalence proof.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.

Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: Establish the differences between the two definitions, which apparently are not exactly equivalent really.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Theorem
Let $x$ and $y$ be sets.
The following definitions of the concept of Transitive Closure of Set are equivalent:

Definition 1
Let $x$ be a set.
Then the transitive closure of $x$ is the smallest transitive superset of $x$.

Definition 2
Let $x$ be a set.
For each natural number $n \in \N_{\ge 0}$ let:

$\bigcup^n x = \underbrace {\bigcup \bigcup \cdots \bigcup}_n x$

Then the transitive closure of $x$ is the union of the sets:

$\set x, x, \bigcup x, \bigcup^2 x, \dots, \bigcup^n x, \dots$


Proof
Let $x^t$ be the transitive closure of $x$ by Definition 2.
Let the mapping $G$ be defined as on that definition page.

$x \in x^t$
$x \in \set x$ by the definition of singleton.
Since $\map G 0 = \set 0$:

$\set x \in \map G \N$
Thus $x \in x^t$ by the definition of union.
$\Box$


$x^t$ is a Set
By Denumerable Class is Set, the image of $G$ is a set.
Thus $x^t$ is a set by the Axiom of Unions.
$\Box$


$x^t$ is a Transitive Set
Let $y \in x^t$ and let $z \in y$.
By the definition of $x^t$:

$\exists n \in \N: y \in \map G n$
Then by definition of union:

$\ds z \in \bigcup \map G n$
But by the definition of $G$:

$z \in \map G {n^+}$
Thus by the definition of $x^t$:

$z \in x^t$
As this holds for all such $y$ and $z$, $x^t$ is transitive.
$\Box$


$x^t$ is Smallest
Let $m$ be a transitive set such that $x \in m$.
We will show by induction that $\map G n \subseteq m$ for each $n \in \N$.
By Union is Smallest Superset, that will show that $x^t \subseteq m$.

Because  $x \in m$:

$\map G 0 = \set x \subseteq m$

Suppose that $\map G n \subseteq m$.
Then by Union is Increasing:

$\ds \bigcup \map G n \subseteq \bigcup m$

This article, or a section of it, needs explaining.In particular: Transitive set includes its union.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Thus:

$\ds \bigcup \map G n \subseteq m$
$\Box$

By Smallest Element is Unique, $x^t$ is the only set satisfying $(2)$.
$\blacksquare$





