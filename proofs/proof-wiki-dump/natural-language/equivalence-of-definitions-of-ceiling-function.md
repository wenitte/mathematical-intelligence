# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Ceiling_Function



Theorem
Let $x$ be a real number.
The following definitions of the concept of Ceiling Function are equivalent:

Definition 1
The ceiling function of $x$ is defined as the infimum of the set of integers no smaller than $x$:

$\ceiling x := \inf \set {m \in \Z: x \le m}$
where $\le$ is the usual ordering on the real numbers.

Definition 2
The ceiling function of $x$, denoted $\ceiling x$, is defined as the smallest element of the set of integers:

$\set {m \in \Z: x \le m}$
where $\le$ is the usual ordering on the real numbers.

Definition 3
The ceiling function of $x$ is the unique integer $\ceiling x$ such that:

$\ceiling x - 1 < x \le \ceiling x$


Proof
Definition 1 equals Definition 2
Follows from Infimum of Set of Integers equals Smallest Element.
$\Box$


Definition 1 equals Definition 3
Let $S$ be the set:

$S = \left\{ {m \in \Z: m \ge x}\right\}$
Let $n = \inf S$.
By Infimum of Set of Integers is Integer, $n \in \Z$.
By Infimum of Set of Integers equals Smallest Element, $n\in S$.
Because $n\in S$, we have $n \geq x$.
Because $n-1 < n$, we have by definition of supremum:

$n-1 \notin S$
Thus $n-1 < x$.
Thus $n$ is an integer such that:

$n-1 < x \leq n$
So $n$ is the ceiling function by definition 3.
$\Box$


Definition 3 equals Definition 2
Let $n$ be an integer such that:

$n-1 < x \leq n$
We show that $n$ is the smallest element of the set:

$S = \left\{ {m \in \Z: m \ge x}\right\}$
Let $m \in \Z$ such that $m \ge x$.
We show that $n\leq m$.
Aiming for a contradiction, suppose $m < n$.
By Weak Inequality of Integers iff Strict Inequality with Integer minus One:

$m \le n - 1$
and so from the definition of $g$ it follows that $m < x$.
By Proof by Contradiction it follows that $m \ge n$.
Because $m \in S$ was arbitrary, $n$ is the smallest element of $S$.
Thus $n$ is the ceiling function by definition 2.
$\blacksquare$


Also see
Equivalence of Definitions of Floor Function




