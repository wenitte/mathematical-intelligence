# 

Source: https://proofwiki.org/wiki/Matroid_Bases_Iff_Satisfies_Formulation_1_of_Matroid_Base_Axiom/Lemma_2


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $S$ be a finite set.
Let $\mathscr B$ be a non-empty set of subsets of $S$.

Let $\mathscr B$ satisfy the formulation $1$ of base axiom:




\((\text B 1)\)  

$:$  





  \(\ds \forall B_1, B_2 \in \mathscr B:\)







\(\ds  x \in B_1 \setminus B_2 \implies \exists y \in B_2 \setminus B_1 : \paren {B_1 \setminus \set x} \cup \set y \in \mathscr B \)   

  


Then:

$\forall B_1, B_2 \in \mathscr B : \card{B_1} = \card{B_2}$
where $\card{B_1}$ and $\card{B_2}$ denote the cardinality of the sets $B_1$ and $B_2$ respectively.


Proof
Aiming for a contradiction, suppose:

$\exists B_1, B_2 \in \mathscr B : \card{B_1} \ne \card{B_2}$

Without loss of generality and from Max Operation Equals an Operand let:

$\card{B_1 \cap B_2} = \max \set{\card{C_1 \cap C_2} : C_1, C_2 \in \mathscr B : \card{C_1} \ne \card{C_2}}$

Without loss of generality let:

$\card{B_1} > \card{B_2}$

From Set Difference of Larger Set with Smaller is Not Empty:

$\exists x \in B_1 \setminus B_2$
From base axiom $(\text B 1)$:

$\exists y \in B_2 \setminus B_1 : \paren {B_1 \setminus \set x} \cup \set y \in \mathscr B$

Let $B_3 = \paren {B_1 \setminus \set x} \cup \set y$.
From Finite Set Formed by Substitution has Larger Intersection:

$\card{B_3 \cap B_2} = \card{B_1 \cap B_2} + 1$
From Finite Set Formed by Substitution has Same Cardinality:

$\card {B_3} = \card {B_1}$
Hence:

$\card {B_3} \ne \card {B_2}$

This contradicts the choice of $B_1$ and $B_2$ as:

$\card{B_1 \cap B_2} = \max \set{\card{C_1 \cap C_2} : C_1, C_2 \in \mathscr B : \card{C_1} \ne \card{C_2}}$
It follows that:

$\forall B_1, B_2 \in \mathscr B : \card{B_1} = \card{B_2}$
$\blacksquare$





