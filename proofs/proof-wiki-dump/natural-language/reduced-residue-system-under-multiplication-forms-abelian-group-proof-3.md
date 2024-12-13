# 

Source: https://proofwiki.org/wiki/Reduced_Residue_System_under_Multiplication_forms_Abelian_Group/Proof_3



Theorem
Let $\Z_m$ be the set of set of residue classes modulo $m$.

Let $\struct {\Z'_m, \times}$ denote the multiplicative group of reduced residues modulo $m$.

Then $\struct {\Z'_m, \times}$ is an abelian group, precisely equal to the group of units of $\Z_m$.


Proof
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
1964: Walter Ledermann: Introduction to the Theory of Finite Groups (5th ed.) ... (previous) ... (next): Chapter $\text {I}$: The Group Concept: $\S 6$: Examples of Finite Groups: $\text{(iii)}$: Theorem $2$




