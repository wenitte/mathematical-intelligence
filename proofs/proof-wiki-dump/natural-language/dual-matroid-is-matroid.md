# 

Source: https://proofwiki.org/wiki/Dual_Matroid_is_Matroid


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $M = \struct {S, \mathscr I}$ be a matroid.

Then the dual $M^*$ of $M$ is a matroid.


Proof
Let $\mathscr B$ be the set of bases of the matroid $M$.

From Matroid Bases Satisfy Formulation 4 Base Axiom:

$\mathscr B$ satisfies formulation 4 base axiom.
By formulation 5 base axiom:

$\mathscr B$ satisfies formulation 5 base axiom.

Let $\mathscr B^* = \set{S \setminus B : B \in \mathscr B}$.
From Subsets Satisfy Formulation 5 Matroid Base Axiom Iff Complements Satisfy Formulation 1:

$\mathscr B^*$ satisfies formulation 1 base axiom.
From Matroid Bases Iff Satisfies Formulation 1 of Matroid Base Axiom:

there exists a matroid $M^* = \struct{S, \mathscr I^*}$ whose bases is the set:
$\mathscr B^* = \set{S \setminus B : B \in \mathscr B}$.
From Matroid is Uniquely Defined by Bases:

$M^*$ is the unique matroid whose bases is the set:
$\mathscr B^* = \set{S \setminus B : B \in \mathscr B}$.
The result follows.
$\blacksquare$


Sources
1976: Dominic Welsh: Matroid Theory Chapter $2.$ $\S 1.$ The Dual Matroid, Theorem $1$
2011: James Oxley: Matroid Theory (2nd ed.) Chapter $2.$ Duality, $\S 2.1.$ The definition and basic properties, Theorem $2.1.1$




