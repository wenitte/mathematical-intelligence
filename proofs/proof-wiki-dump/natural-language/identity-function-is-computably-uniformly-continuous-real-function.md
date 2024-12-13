# 

Source: https://proofwiki.org/wiki/Identity_Function_is_Computably_Uniformly_Continuous_Real_Function

Theorem
Let $I_\R : \R \to \R$ denote the identity function on $\R$.
Then, $I_\R$ is a computably uniformly continuous real function.


Proof
Let $d : \N \to \N$ be defined as:

$\map d n = n$
As $d$ is precisely the projection function $\pr_1^1$, it is primitive recursive.
By Primitive Recursive Function is Total Recursive Function, $d$ is a total recursive function.

Let $n \in \N$ and $x, y \in \R$ satisfy:

$\size {x - y} < \dfrac 1 {\map d n + 1}$
By definition of identity function:

$\map {I_\R} x = x$
$\map {I_\R} y = y$
By definition of $d$:

$\map d n = n$
Thus:

$\size {\map {I_\R} x - \map {I_\R} y} < \dfrac 1 {n + 1}$

As $n$, $x$, and $y$ were arbitrary, it follows that $I_\R$ is computably uniformly continuous by definition.
$\blacksquare$





