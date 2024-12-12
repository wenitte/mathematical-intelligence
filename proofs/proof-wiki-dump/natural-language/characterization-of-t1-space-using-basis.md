# 

Source: https://proofwiki.org/wiki/Characterization_of_T1_Space_using_Basis


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $T = \struct {S, \tau}$ be a topological space.

Let $\BB$ be a basis for $T$.

Then:

$T$ is a $T_1$ Space
if and only if

$\forall x, y \in S : x \ne y$, both:
$\exists B_x \in \BB : x \in B_x, y \notin B_x$
and:
$\exists B_y \in \BB : y \in B_y, x \notin B_y$


Proof
Necessary Condition
From Basis induces Local Basis:

$\forall x \in S : \BB_x = \set{B \in \BB : x \in B}$ is a local basis of $x$
By definition of local basis:

$\forall x \in S : \BB_x$ is a neighborhood basis of open sets
From Characterization of T1 Space using Neighborhood Basis:

$\forall x, y \in S : x \ne y$, both:
$\exists B_x \in \BB_x : y \notin B_x$
and:
$\exists B_y \in \BB_y : x \notin B_y$
Hence:

$\forall x, y \in S : x \ne y$, both:
$\exists B_x \in \BB : x \in B_x, y \notin B_x$
and:
$\exists B_y \in \BB : y \in B_y, x \notin B_y$
$\Box$

Sufficient Condition
Let $T$ satisfy:

$\forall x, y \in S : x \ne y$, both:
$\exists B_x \in \BB : x \in B_x, y \notin B_x$
and:
$\exists B_y \in \BB : y \in B_y, x \notin B_y$
By definition of basis:

$\BB \subseteq \tau$.
It follows that:

$\forall x, y \in S : x \ne y$, both:
$\exists B_x \in \tau : x \in B_x, y \notin B_x$
and:
$\exists B_y \in \tau : y \in B_y, x \notin B_y$
Hence $T$ is a $T_1$ Space by definition.
$\blacksquare$





