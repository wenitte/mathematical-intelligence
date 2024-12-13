# 

Source: https://proofwiki.org/wiki/Matroid_Bases_Satisfy_Formulation_4_Base_Axiom


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $M = \struct {S, \mathscr I}$ be a matroid.
Let $\mathscr B$ be the set of bases of the matroid $M$.

Then $\mathscr B$ satisfies formulation $4$ of base axiom:




\((\text B 4)\)  

$:$  





  \(\ds \forall B_1, B_2 \in \mathscr B:\)







\(\ds  x \in B_1 \setminus B_2 \implies \exists y \in B_2 \setminus B_1 : \paren {B_1 \setminus \set x} \cup \set y, \paren {B_2 \setminus \set y} \cup \set x \in \mathscr B \)   

  



Proof
Let $B_1, B_2 \in \mathscr B$.
Let $x \in B_1 \setminus B_2$.

From Matroid Base Union External Element has Fundamental Circuit:

there exists a fundamental circuit $\map C {x, B_2}$ of $M$ such that $x \in \map C {x, B_2} \subseteq B_2 \cup \set x$
By definition of set intersection:

$x \in B_1 \cap \map C {x, B_2}$
From Element of Matroid Base and Circuit has Substitute:

$\exists y \in \map C {x, B_2} \setminus B_1 : \paren{B_1 \setminus \set x} \cup \set y \in \mathscr B$
We have:














\(\ds y\)

\(\in\)







\(\ds \map C {x, B_2} \setminus B_1\)




















\(\ds \)

\(\subseteq\)







\(\ds \map C {x, B_2} \setminus \set x\)





Set Difference with Subset is Superset of Set Difference














\(\ds \)

\(\subseteq\)







\(\ds \paren{B_2 \cup \set x} \setminus \set x\)





Set Difference over Subset














\(\ds \)

\(\subseteq\)







\(\ds B_2 \setminus \set x\)





Set Difference with Union is Set Difference














\(\ds \)

\(\subseteq\)







\(\ds B_2\)





Set Difference is Subset



From Matroid Base Substitution From Fundamental Circuit:

$\paren{B_2 \setminus \set y} \cup \set x \in \mathscr B$

It follows that $\mathscr B$ satisfies formulation $4$ of base axiom:




\((\text B 4)\)  

$:$  





  \(\ds \forall B_1, B_2 \in \mathscr B:\)







\(\ds  x \in B_1 \setminus B_2 \implies \exists y \in B_2 \setminus B_1 : \paren {B_1 \setminus \set x} \cup \set y, \paren {B_2 \setminus \set y} \cup \set x \in \mathscr B \)   

  


$\blacksquare$





