# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Matroid_Circuit_Axioms/Formulation_1_Implies_Formulation_3


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $S$ be a finite set.
Let $\mathscr C$ be a non-empty set of subsets of $S$.

Let $\mathscr C$ satisfy the circuit axioms (formulation 1):




\((\text C 1)\)  

$:$  













\(\ds  \O \notin \mathscr C \)   

  


\((\text C 2)\)  

$:$  





  \(\ds \forall C_1, C_2 \in \mathscr C:\)







\(\ds  C_1 \ne C_2 \implies C_1 \nsubseteq C_2 \)   

  


\((\text C 3)\)  

$:$  





  \(\ds \forall C_1, C_2 \in \mathscr C:\)







\(\ds  C_1 \ne C_2 \land z \in C_1 \cap C_2 \implies \exists C_3 \in \mathscr C : C_3 \subseteq \paren {C_1 \cup C_2} \setminus \set z \)   

  


Then:

$\mathscr C$ satisfies the circuit axioms (formulation 3):



\((\text C 1)\)  

$:$  













\(\ds  \O \notin \mathscr C \)   

  


\((\text C 2)\)  

$:$  





  \(\ds \forall C_1, C_2 \in \mathscr C:\)







\(\ds  C_1 \ne C_2 \implies C_1 \nsubseteq C_2 \)   

  


\((\text C 5)\)  

$:$  





  \(\ds \forall X \subseteq S \land \forall x \in S:\)







\(\ds  \paren {\forall C \in \mathscr C : C \nsubseteq X} \implies \paren {\exists \text{ at most one } C \in \mathscr C : C \subseteq X \cup \set x} \)   

  



Proof
Let $\mathscr C$ satisfy the circuit axioms $(\text C 1)$, $(\text C 2)$ and $(\text C 3)$.
We need to show that $\mathscr C$ satisfies circuit axiom:




\((\text C 5)\)  

$:$  





  \(\ds \forall X \subseteq S \land \forall x \in S:\)







\(\ds  \paren {\forall C \in \mathscr C : C \nsubseteq X} \implies \paren {\exists \text{ at most one } C \in \mathscr C : C \subseteq X \cup \set x} \)   

  


Let $X \subset S : \forall C \in \mathscr C : C \nsubseteq X$.
Let $x \in S$.

Aiming for a contradiction, suppose:

$\exists C_1, C_2 \in \mathscr C : C_1 \neq C_2 : C_1, C_2 \subseteq X \cup \set x$.
Since $C_1, C_2 \nsubseteq X$ then:

$x \in C_1 \cap C_2$
From circuit axiom $(\text C 3)$:

$\exists C_3 \in \mathscr C : C_3 \subseteq \paren{C_1 \cup C_2} \setminus \set x$
We have:

$\paren{C_1 \cup C_2} \setminus \set x \subseteq X$
Hence:

$C_3 \subseteq X$
This contradicts the assumption that:

$X \subset S : \forall C \in \mathscr C : C \nsubseteq X$

It follows that:

$\exists \text{ at most one } C \in \mathscr C : C \subseteq X \cup \set x$
It follows that $\mathscr C$ satisfies circuit axiom $(\text C 5)$.
$\blacksquare$




