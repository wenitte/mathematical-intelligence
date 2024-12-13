# 

Source: https://proofwiki.org/wiki/Real_Number_lies_between_Unique_Pair_of_Consecutive_Integers


This article is incomplete.In particular: the proof is for the right-open case onlyYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by expanding it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Stub}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Theorem
Let $x$ be a real number.


Right-open Interval
There exists a unique integer $n\in\Z$ such that:

$n \leq x < n + 1$
Left-open Interval
There exists a unique integer $n\in\Z$ such that:

$n - 1 < x \leq n$


Proof
Existence
By Set of Integers Bounded Above by Real Number has Greatest Element, the set:

$S = \left\{{m \in \Z: m \le x}\right\}$
has a greatest element, say $n$.
Because $n+1>n$, $n+1\notin S$.
Thus $n+1> x$.
Thus $n\leq x < n+1$.
$\Box$


Uniqueness
Let $n\in\Z$ be such that:

$n \leq x < n + 1$
We show that $n$ is a greatest element of the set:

$S = \left\{{m \in \Z: m \le x}\right\}$
so that the uniqueness follows from Greatest Element is Unique.
Because $n\leq x$, we have $n \in S$.
Let $m \in S$.
Because $m \leq x < n+1$, $n+1 > m$.
By Weak Inequality of Integers iff Strict Inequality with Integer plus One:

$n \geq m$.
Because $m$ was arbitrary, $n$ is a greatest element of $S$.
$\blacksquare$


Also see
Definition:Floor Function
Definition:Ceiling Function




