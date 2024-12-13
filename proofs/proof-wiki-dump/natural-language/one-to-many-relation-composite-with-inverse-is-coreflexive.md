# 

Source: https://proofwiki.org/wiki/One-to-Many_Relation_Composite_with_Inverse_is_Coreflexive

Theorem
Let $\RR \subseteq S \times S$ be a relation which is one-to-many.
Then the composite of $\RR$ with its inverse is a coreflexive relation:

$\RR^{-1} \circ \RR \subseteq \Delta_X$

This page has been identified as a candidate for refactoring of basic complexity.In particular: This is a separate result.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
That is, by Relation is Symmetric and Antisymmetric iff Coreflexive, $\RR^{-1} \circ \RR$ is both symmetric and antisymmetric.


Proof
As $\RR$ is one-to-many, it follows from Inverse of Many-to-One Relation is One-to-Many that $\RR^{-1}$ is many-to-one.
Let $\tuple {x, z} \in \RR^{-1} \circ \RR$.
Then:

$\exists y \in S: \tuple {x, y} \in \RR, \tuple {y, z} \in \RR^{-1}$
As $\tuple {x, y} \in \RR$, from the definition of inverse relation:

$\tuple {y, x} \in \RR^{-1}$
As $\RR^{-1}$ is many-to-one:

$\tuple {y, z} = \tuple {y, x}$
Thus if $\tuple {x, z} \in \RR^{-1} \circ \RR$, it follows that:

$\tuple {x, z} = \tuple {x, x}$
Thus:

$\RR^{-1} \circ \RR \subseteq \Delta_X$
The result follows by definition of coreflexive relation.
$\blacksquare$





