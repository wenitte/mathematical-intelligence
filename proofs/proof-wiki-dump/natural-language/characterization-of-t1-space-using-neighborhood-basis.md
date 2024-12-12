# 

Source: https://proofwiki.org/wiki/Characterization_of_T1_Space_using_Neighborhood_Basis


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $T = \struct {S, \tau}$ be a topological space.

For each $x \in S$, let $\NN_x$ be a neighborhood basis at $x$.

Then:

$T$ is a $T_1$ Space
if and only if

$\forall x, y \in S : x \ne y$, both:
$\exists N \in \NN_x : y \notin N$
and:
$\exists M \in \NN_y : x \notin M$


Proof
Necessary Condition
Let $T$ be a $T_1$ Space.

Let $x, y \in S$ such that $x \ne y$.
By definition of $T_1$ Space:

$\exists U \in \tau : x \in U, y \notin U$
From Set is Open iff Neighborhood of all its Points:

$U$ is a neighborhood of $x$
By definition of neighborhood basis:

$\exists N \in \NN_x : N \subseteq U$
It follows that:

$y \notin N$
Similarly:
$\exists M \in \NN_y : x \notin M$
The result follows.
$\Box$

Sufficient Condition
Let $T$ satisfy:

$\forall x, y \in S : x \ne y$, both:
$\exists N \in \NN_x : y \notin N$
and:
$\exists M \in \NN_y : x \notin M$

Let $x, y \in S$ such that $x \ne y$.
by hypothesis:

$\exists N \in \NN_x : y \notin N$
By definition of neighborhood:

$\exists U \in \tau : x \in U : U \subseteq N$
It follows that:

$x \in U, y \notin U$
Similarly:

$\exists V \in \tau : y \in V, x \notin V$

Since $x, y$ were arbitrary:

$\forall x, y \in S$ such that $x \ne y$, both:
$\exists U \in \tau: x \in U, y \notin U$
and:
$\exists V \in \tau: y \in V, x \notin V$

It follows that $T$ is a $T_1$ Space by definition.
$\blacksquare$





