# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Matroid_Base_Axioms/Formulation_1_Iff_Formulation_4


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $S$ be a finite set.
Let $\mathscr B$ be a non-empty set of subsets of $S$.

Then:

$\mathscr B$ satisfies formulation $1$ of base axiom



\((\text B 1)\)  

$:$  





  \(\ds \forall B_1, B_2 \in \mathscr B:\)







\(\ds  x \in B_1 \setminus B_2 \implies \exists y \in B_2 \setminus B_1 : \paren {B_1 \setminus \set x} \cup \set y \in \mathscr B \)   

  


if and only if

$\mathscr B$ satisfies formulation $4$ of base axiom



\((\text B 4)\)  

$:$  





  \(\ds \forall B_1, B_2 \in \mathscr B:\)







\(\ds  x \in B_1 \setminus B_2 \implies \exists y \in B_2 \setminus B_1 : \paren {B_1 \setminus \set x} \cup \set y, \paren {B_2 \setminus \set y} \cup \set x \in \mathscr B \)   

  



Proof
Necessary Condition
Follows immediately from:

Matroid Bases Iff Satisfies Formulation 1 of Matroid Base Axiom
Matroid Bases Satisfy Formulation 4 Base Axiom
$\Box$

Sufficient Condition
Follows immediately from formulation $4$ and formulation $1$.
$\blacksquare$





