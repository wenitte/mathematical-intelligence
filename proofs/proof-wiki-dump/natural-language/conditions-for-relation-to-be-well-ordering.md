# 

Source: https://proofwiki.org/wiki/Conditions_for_Relation_to_be_Well-Ordering



Theorem
Let $\struct {S, \RR}$ be a relational structure.
$\RR$ is a well-ordering if and only if:

$(1): \quad$ For all $x, y \in S$, either $x \mathrel \RR y$ or $y \mathrel \RR x$
$(2): \quad$ For every non-empty subset $T$ of $S$, there exists $z \in T$ such that:
$\forall x \in T: \paren {x \mathrel \RR z \iff x = z}$


Proof
Sufficient Condition
Let $\RR$ be a well-ordering.
Then $\RR$ is a fortiori a total ordering, and so by definition:

$\forall x, y \in S: x \mathrel \RR y \text { or } y \mathrel \RR x$
Thus condition $(1)$ is fulfilled.

Let $T$ be a non-empty subset of $S$.
Then by definition of well-ordering:

$\exists z \in T: \forall x \in T: z \mathrel \RR x$
As $\RR$ is a well-ordering, a fortiori it is an ordering and so an asymmetric relation.
Hence:

$\forall x \in T: x \mathrel \RR z \implies x = z$
But then as $\RR$ is an ordering and so reflexive:

$x = z \implies x \mathrel \RR z$
Hence:

$\exists z \in T: \forall x \in T: x \mathrel \RR z \iff x = z$
Thus condition $(2)$ is fulfilled.
$\Box$


Necessary Condition
Let $\RR$ be such that: 

$(1): \quad$ For all $x, y \in S$, either $x \mathrel \RR y$ or $y \mathrel \RR x$
$(2): \quad$ For every non-empty subset $T$ of $S$, there exists $z \in T$ such that:
$\forall x \in T: \paren {x \mathrel \RR z \iff x = z}$

First we are to show that $\RR$ is an ordering.

First we note that $\RR$ is by definition a total relation.
From Relation is Connected and Reflexive iff Total:

$\RR$ is reflexive
and:

$\RR$ is connected.
$\Box$

Let $a \mathrel \RR b$ such that $a \ne b$.
Then from $(2)$ we have:

$\exists z \in \set {a, b}: \forall x \in \set {a, b}: \paren {x \mathrel \RR z \iff x = z}$
This applies to both $a$ and $b$.
Hence:










\(\ds \exists z \in \set {a, b}: \, \)



\(\ds a \mathrel \RR z\)

\(\iff\)







\(\ds a = z\)




















\(\ds b \mathrel \RR z\)

\(\iff\)







\(\ds b = z\)









But we have that:

$a \mathrel \RR b$ such that $a \ne b$
and so $z \ne b$.
Hence $z = a$ and:

$b \mathrel \RR a \iff b = a$
Summarising:

$a \mathrel \RR b$ and $b \mathrel \RR a$ if and only if $a = b$
demonstrating that $\RR$ is antisymmetric.
$\Box$

Let $a, b, c \in S$ such that $a \mathrel \RR b$ and $b \mathrel \RR c$.
First we note that if $a = b = c$ we just have that $a \mathrel \RR a$ which is the same as $a \mathrel \RR c$.

Let $a = b$.
Then from $b \mathrel \RR c$ we have $a \mathrel \RR c$.
Let $b = c$.
Then from $a \mathrel \RR b$ we have $a \mathrel \RR c$.
Let $a = c$.
Then from $a \mathrel \RR b$ and $b \mathrel \RR a$ if and only if $a = b$ we have that $a = b = c$.

Finally, let $a \ne b$ and $b \ne c$ and $a \ne c$.
Again from $(2)$, we have:

$\exists z \in \set {a, b, c}: \forall x \in \set {a, b, c}: \paren {x \mathrel \RR z \iff x = z}$

This applies to both $a$, $b$ and $c$.
Hence:










\(\ds \exists z \in \set {a, b, c}: \, \)



\(\ds a \mathrel \RR z\)

\(\iff\)







\(\ds a = z\)




















\(\ds b \mathrel \RR z\)

\(\iff\)







\(\ds b = z\)




















\(\ds c \mathrel \RR z\)

\(\iff\)







\(\ds c = z\)









Suppose $z = c$.
Then we have:

$b \mathrel \RR c \iff b = c$
But we have: 

$b \mathrel \RR c$ such that $b \ne c$
and so $z \ne c$.
Next suppose $z = b$.
Then we have:

$a \mathrel \RR b \iff a = b$
But we have: 

$a \mathrel \RR b$ such that $a \ne b$
and so $z \ne b$.
Hence it must be the case that $z = a$.
Hence we have:

$c \mathrel \RR a \iff c = a$
But it is not the case that $c = a$.
Hence it cannot be the case that $c \mathrel \RR a$.
But from $(1)$ we have that either $c \mathrel \RR a$ or $a \mathrel \RR c$
So it must be the case that $a \mathrel \RR c$.

We also note that:

$a \mathrel \RR a \iff a = a$
which is compatible with $\RR$ being reflexive, and:

$b \mathrel \RR a \iff b = a$
which is compatible with $\RR$ being antisymmetric.

Consolidating what we have, we see that in all cases:

$a \mathrel \RR b$ and $b \mathrel \RR c$ implies that $a \mathrel \RR c$.
That is:

$\RR$ is transitive.
$\Box$

Thus we have that $\RR$ is reflexive, antisymmetric and transitive.
Thus $\RR$ is an ordering.
We also have a priori that $\RR$ is a connected relation.
Hence by definition $\RR$ is a total ordering.

Next we note from $(2)$ that for every non-empty subset $T$ of $S$, there exists $z \in T$ such that:

$\forall x \in T: \paren {x \mathrel \RR z \iff x = z}$
Hence, as $\RR$ is antisymmetric:

$\forall x \in T: z \mathrel \RR x$
and so $z$ is the smallest element of $T$.
In other words, every non-empty subset $T$ of $S$ has a smallest element.
Hence by definition $\RR$ is a well-ordering.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 14$: Orderings: Exercise $14.17$




