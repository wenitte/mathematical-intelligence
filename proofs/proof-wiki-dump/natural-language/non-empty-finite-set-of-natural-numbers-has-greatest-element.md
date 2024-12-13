# 

Source: https://proofwiki.org/wiki/Non-Empty_Finite_Set_of_Natural_Numbers_has_Greatest_Element



Theorem
Let $A$ be a non-empty finite set of natural numbers.

Then $A$ has a greatest element.


Proof
The proof proceeds by induction.
By definition, if $A$ is a non-empty finite set, then $A$ has $m$ elements for some $m \in \N$ such that $m > 0$.
So, for all $n \in \N_{>0}$, let $\map P n$ be the proposition:

If $A$ has $n$ elements, then $A$ has a greatest element.


Basis for the Induction
Let $A$ have one element which we will call $x$
Trivially:

$\forall y \in A: y \le x$
and so $A$ has a greatest element $x$, by definition.

Thus $\map P 1$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

If $A$ has $k$ elements, then $A$ has a greatest element

from which it is to be shown that:

If $A$ has $k + 1$ elements, then $A$ has a greatest element.


Induction Step
This is the induction step:
Let $A$ have $k + 1$ elements:

$A = \set {a_1, a_2, \ldots, a_k, a_{k + 1} }$
Then:

$A = \set {a_1, a_2, \ldots, a_k} \cup \set {a_{k + 1} }$
By the induction hypothesis, $\set {a_1, a_2, \ldots, a_k}$ has a greatest element, which we will call $m$.

By definition of greatest element, $m$ is one of the elements of $\set {a_1, a_2, \ldots, a_k}$.
As $A$ is a set, all elements of $A$ are distinct.
Hence:

$\forall a \in \set {a_1, a_2, \ldots, a_k}: a \ne a_{k + 1}$
It follows that $m \ne a_{k + 1}$.

Suppose $a_{k + 1}$ is such that $a_{k + 1} > m$.
By definition of greatest element:

$\forall y \in \set {a_1, a_2, \ldots, a_k}: y \le m$
and so:

$\forall y \in \set {a_1, a_2, \ldots, a_k}: y < a_{k + 1}$
It follows that:

$\forall y \in A: y \le a_{k + 1}$
and so $A$ has a greatest element, that is: $a_{k + 1}$.

Suppose $a_{k + 1}$ is such that $a_{k + 1} < m$.
Then it follows immediately that:

$\forall y \in A: y \le m$
and so $A$ has a greatest element, that is: $m$.

In both cases $A$ has been shown to have a greatest element.
So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore, for all $n \in \N_{>0}$:

If $A$ has $n$ elements, then $A$ has a greatest element.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $3$: The Natural Numbers: $\S 6$ Finite Sets: Exercise $6.1 \ (3)$




