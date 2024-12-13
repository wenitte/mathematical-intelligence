# 

Source: https://proofwiki.org/wiki/Reduced_Residue_System_under_Multiplication_forms_Abelian_Group



Theorem
Let $\Z_m$ be the set of set of residue classes modulo $m$.

Let $\struct {\Z'_m, \times}$ denote the multiplicative group of reduced residues modulo $m$.

Then $\struct {\Z'_m, \times}$ is an abelian group, precisely equal to the group of units of $\Z_m$.


Corollary
Let $p$ be a prime number.
Let $\Z_p$ be the set of integers modulo $p$.

Let $\struct {\Z'_p, \times}$ denote the multiplicative group of reduced residues modulo $p$.

Then $\struct {\Z'_p, \times}$ is an abelian group.


Proof 1
From Ring of Integers Modulo m is Ring, $\struct {\Z_m, +, \times}$‎ forms a (commutative) ring with unity.
Then we have that the units of a ring with unity form a group.
By Multiplicative Inverse in Ring of Integers Modulo m we have that the elements of $\struct {\Z'_m, \times}$ are precisely those that have inverses, and are therefore the units of $\struct {\Z_m, +, \times}$‎.
The fact that $\struct {\Z'_m, \times}$ is abelian follows from Restriction of Commutative Operation is Commutative.
$\blacksquare$


Proof 2
Taking the group axioms in turn:


Group Axiom $\text G 0$: Closure
From Modulo Multiplication on Reduced Residue System is Closed:

$\struct {\Z'_m, \times}$ is closed.
$\Box$


Group Axiom $\text G 1$: Associativity
We have that Modulo Multiplication is Associative.
$\Box$


Group Axiom $\text G 2$: Existence of Identity Element
From Modulo Multiplication has Identity, $\eqclass 1 m$ is the identity element of $\struct {\Z'_m, \times_m})$.
$\Box$


Group Axiom $\text G 3$: Existence of Inverse Element
From Multiplicative Inverse in Monoid of Integers Modulo m, $\eqclass k m \in \Z_m$ has an inverse in $\struct {\Z_m, \times_m}$ if and only if $k$ is coprime to $m$.
Thus every element of $\struct {\Z'_m, \times_m}$ has an inverse.
$\Box$

All the group axioms are thus seen to be fulfilled, and so $\struct {\Z'_m, \times_m}$ is a group.
$\blacksquare$


Proof 3
Taking the finite group axioms in turn:


$\text {FG} 0$: Closure
From Modulo Multiplication on Reduced Residue System is Closed:

$\struct {\Z'_m, \times}$ is closed.
$\Box$


$\text {FG} 1$: Associativity
We have that Modulo Multiplication is Associative.
$\Box$


$\text {FG} 2$: Finiteness
The order of $\struct {\Z'_m, \times}$ is $\map \phi n$ by definition, where $\map \phi n$ denotes the Euler $\phi$ function.
As $\map \phi n < n$ it follows that $\struct {\Z'_m, \times}$ is of finite order.
$\Box$


$\text {FG} 3$: Cancellability
We have that Modulo Multiplication on Reduced Residue System is Cancellable.
$\Box$

Thus all the finite group axioms are fulfilled, and $\struct {\Z'_m, \times}$ is a group.

It remains to note that Modulo Multiplication is Commutative to confirm that $\struct {\Z'_m, \times}$ is abelian.
$\blacksquare$


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 3.4$: Cyclic groups




