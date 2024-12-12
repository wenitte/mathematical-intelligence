# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Floor_Function



Theorem
Let $x$ be a real number.
The following definitions of the concept of Floor Function are equivalent:

Definition 1
The floor function of $x$ is defined as the supremum of the set of integers no greater than $x$:

$\floor x := \sup \set {m \in \Z: m \le x}$
where $\le$ is the usual ordering on the real numbers.

Definition 2
The floor function of $x$, denoted $\floor x$, is defined as the greatest element of the set of integers:

$\set {m \in \Z: m \le x}$
where $\le$ is the usual ordering on the real numbers.

Definition 3
The floor function of $x$ is the unique integer $\floor x$ such that:

$\floor x \le x < \floor x + 1$


Proof
Definition 1 equals Definition 2
Follows from Supremum of Set of Integers equals Greatest Element.
$\Box$


Definition 1 equals Definition 3
Let $S$ be the set:

$S = \set {m \in \Z: m \le x}$
Let $n = \sup S$.
By Supremum of Set of Integers is Integer, $n \in \Z$.
By Supremum of Set of Integers equals Greatest Element, $n\in S$.
Because $n \in S$, we have $n \le x$.
Because $n + 1 > n$, we have by definition of supremum:

$n + 1 \notin S$
Thus $n + 1 > x$.
Thus $n$ is an integer such that:

$n \le x < n + 1$
So $n$ is the floor function by definition 3.
$\Box$


Definition 3 equals Definition 2
Let $n$ be an integer such that:

$n \le x < n + 1$
We show that $n$ is the greatest element of the set:

$S = \set {m \in \Z: m \le x}$
Let $m \in \Z$ such that $m \le x$.
We show that $n \ge m$.
Aiming for a contradiction, suppose $m > n$.
By Weak Inequality of Integers iff Strict Inequality with Integer plus One:

$m \ge n + 1$
and so from the definition of $g$ it follows that $m > x$.
By Proof by Contradiction it follows that $m \le n$.
Because $m \in S$ was arbitrary, $n$ is the greatest element of $S$.
Thus $n$ is the floor function by definition 2.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 10$: The well-ordering principle




