# 

Source: https://proofwiki.org/wiki/Reduced_Residue_System_under_Multiplication_forms_Abelian_Group/Proof_2



Theorem
Let $\Z_m$ be the set of set of residue classes modulo $m$.

Let $\struct {\Z'_m, \times}$ denote the multiplicative group of reduced residues modulo $m$.

Then $\struct {\Z'_m, \times}$ is an abelian group, precisely equal to the group of units of $\Z_m$.


Proof
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


Sources
1964: Walter Ledermann: Introduction to the Theory of Finite Groups (5th ed.) ... (previous) ... (next): Chapter $\text {I}$: The Group Concept: $\S 6$: Examples of Finite Groups: $\text{(iii)}$: $(1.34)$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Examples of Group Structure: $\S 34$
1974: Thomas W. Hungerford: Algebra ... (previous) ... (next): $\text{I}$: Groups: $\S 1$: Semigroups, Monoids and Groups




