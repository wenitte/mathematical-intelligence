# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Matroid_Base_Axioms/Formulation_1_Iff_Formulation_5


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $S$ be a finite set.
Let $\mathscr B$ be a non-empty set of subsets of $S$.

Then:

$\mathscr B$ satisfies formulation $1$ of base axiom:



\((\text B 1)\)  

$:$  





  \(\ds \forall B_1, B_2 \in \mathscr B:\)







\(\ds  x \in B_1 \setminus B_2 \implies \exists y \in B_2 \setminus B_1 : \paren {B_1 \setminus \set x} \cup \set y \in \mathscr B \)   

  


if and only if

$\mathscr B$ satisfies formulation $5$ of base axiom:



\((\text B 5)\)  

$:$  





  \(\ds \forall B_1, B_2 \in \mathscr B:\)







\(\ds  x \in B_1 \setminus B_2 \implies \exists y \in B_2 \setminus B_1 : \paren {B_2 \setminus \set y}  \cup \set x \in \mathscr B \)   

  



Proof
Necessary Condition
From:

Matroid Bases Iff Satisfies Formulation 1 of Matroid Base Axiom
Matroid Bases Satisfy Formulation 4 Base Axiom
formulation $4$ follows from formulation $1$.

We have formulation $5$ follows from formulation $4$.
$\Box$


Sufficient Condition
Let $\mathscr B$ satisfy formulation $5$ base axiom.

Let $\mathscr B^* = \set{S \setminus B : B \in \mathscr B}$.
From Subsets Satisfy Formulation 5 Matroid Base Axiom Iff Complements Satisfy Formulation 1:

$\mathscr B^*$ satisfies formulation 1 base axiom.
From Matroid Bases Iff Satisfies Formulation 1 of Matroid Base Axiom:

there exists a matroid $M^* = \struct{S, \mathscr I^*}$ whose bases is the set:
$\mathscr B^* = \set{S \setminus B : B \in \mathscr B}$.

From Matroid Bases Satisfy Formulation 4 Base Axiom:

$\mathscr B^*$ satisfies formulation $4$ base axiom
By formulation $5$ base axiom:

$\mathscr B^*$ satisfies formulation $5$ base axiom

From Subsets Satisfy Formulation 1 Matroid Base Axiom Iff Complements Satisfy Formulation 5:

$\mathscr B$ satisfies formulation 1 base axiom.
$\blacksquare$





