# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Transitive_Closure_of_Relation


This page has been identified as a candidate for refactoring of medium complexity.In particular: Find a better way of organising subproofs to make it simpler.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Theorem
The following definitions of the concept of Transitive Closure of Relation are equivalent:

Smallest Transitive Superset
Let $\RR$ be a relation on a set $S$.

The transitive closure of $\RR$ is defined as the smallest transitive relation on $S$ which contains $\RR$ as a subset.

Intersection of Transitive Supersets
Let $\RR$ be a relation on a set $S$.

The transitive closure of $\RR$ is defined as the intersection of all transitive relations on $S$ which contain $\RR$.

Finite Chain
Let $\RR$ be a relation on a set or class $S$.

The transitive closure of $\RR$ is the relation $\RR^+$ defined as follows:
For $x, y \in S$, $x \mathrel {\RR^+} y$ if and only if for some $n \in \N_{>0}$ there exist $s_0, s_1, \dots, s_n \in S$ such that $s_0 = x$, $s_n = y$, and:














\(\ds s_0\)

\(\RR\)







\(\ds s_1\)




















\(\ds s_1\)

\(\RR\)







\(\ds s_2\)




















\(\ds \)

\(\vdots\)







\(\ds \)




















\(\ds s_{n - 1}\)

\(\RR\)







\(\ds s_n\)









Union of Compositions
Let $\RR$ be a relation on a set $S$.
Let:

$\RR^n := \begin {cases} \RR & : n = 1 \\ \RR^{n-1} \circ \RR & : n > 1 \end {cases}$
where $\circ$ denotes composition of relations.
Finally, let:

$\ds \RR^+ = \bigcup_{i \mathop = 1}^\infty \RR^i$

Then $\RR^+$ is called the transitive closure of $\RR$.


Proof
Let $\RR$ be a relation on a set $S$.
First note that by Smallest Element is Unique, once it has been shown that some relation, $\QQ$, is the smallest transitive superset of $\RR$, it is the only such.
Thus we need only prove that each of the other definitions lead to relations with this property.

First we have:


Intersection of Transitive Supersets is Smallest Transitive Superset
Let $\RR$ be a relation on a set $S$.

Then the intersection of all transitive relations on $S$ that contain $\RR$ is the smallest transitive relation on $S$ that contains $\RR$.


The Finite Chain Definition is Equivalent to the Union of Compositions Definition

This article, or a section of it, needs explaining.In particular: more detail requiredYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Follows from the definition of composition of relations.
$\blacksquare$


Union of Compositions is Smallest Transitive Superset
$\RR^+$ is Transitive
By Relation contains Composite with Self iff Transitive, we can prove that $\RR^+$ is transitive by proving the following:

$\RR^+ \circ \RR^+ \subseteq \RR^+$

Let $\tuple {a, c} \in \RR^+ \circ \RR^+$.
Then:

$\exists b \in S: \tuple {a, b} \in \RR^+, \tuple {b, c} \in \RR^+$
Thus:

$\exists n \in \N: \tuple {a, b} \in \RR^n$
$\exists m \in \N: \tuple {b, c} \in \RR^m$
From Composition of Relations is Associative:

$\RR^{n + m} = \RR^n \circ \RR^m$
so:

$\tuple {a, c} \in \RR^{n + m} \subseteq \RR^+$
Since this holds for all $\tuple {a, c} \in \RR^+ \circ \RR^+$:

$\RR^+ \circ \RR^+ \subseteq \RR^+$
Thus $\RR^+$ is transitive.
$\Box$


$\RR^+$ contains $\RR$
$\RR \subseteq \RR^+$ by Set is Subset of Union of Family.


$\RR^+$ is Smallest
Let $\RR'$ be a transitive relation on $S$ such that $\RR \subseteq \RR'$.
We must show that $\RR^+ \subseteq \RR'$.
Let $\tuple {a, b} \in \RR^+$.
That is:

$a \mathrel \RR b$
Then:

$\exists n \in \N: \tuple {a, b} \in \RR^n$
Thus by the definition of composition of relations, there exists $x_{n - 1} \in S$ such that:

$a \mathrel {\RR^{n - 1} } x_{n - 1} \land x_{n - 1} \mathrel \RR b$
Likewise there exists $x_{n - 2} \in S$ such that:

$a \mathrel {\RR^{n - 2} } x_{n - 2} \land x_{n - 2} \mathrel \RR x_{n - 1}$
And so forth there exist elements $x_0, \dots, x_n \in S$ such that:

$x_0 = a$
$x_n = b$
$\forall k \in \N_n: x_k \mathrel \RR x_{k + 1}$
Since $\RR \subseteq \RR'$:

$\forall k \in \N_n: x_k \mathrel {\RR'} x_{k + 1}$
Since $\RR'$ is transitive:

$a \mathrel {\RR'} b$
That is:

$\tuple {a, b} \in \RR'$
Since this holds for all $\tuple {a, b} \in \RR^+$:

$\RR^+ \subseteq \RR'$
Since this holds for all transitive relations $\RR'$ that contain $\RR$:

$\RR^+$ is the smallest transitive relation containing $\RR$.
$\blacksquare$


Finite Chain Definition gives Smallest Transitive Superset
Let $S$ be a set or class.
Let $\RR$ be a relation on $S$.
Let $\RR^+$ be the transitive closure of $\RR$ by the finite chain definition.
That is, for $x, y \in S$ let $x \mathrel {\RR^+} y$ if and only if for some natural number $n > 0$ there exist $s_0, s_1, \dots, s_n \in S$ such that $s_0 = x$, $s_n = y$, and:

$\forall k \in \N_n: s_k \mathrel \RR s_{k + 1}$

Then $\RR^+$ is transitive and if $\QQ$ is a transitive relation on $S$ such that $\RR \subseteq \QQ$ then $\RR \subseteq \QQ$.


Also see
Recursive Construction of Transitive Closure




