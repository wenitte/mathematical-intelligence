# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Matroid_Circuit_Axioms/Formulation_3_Implies_Formulation_1


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $S$ be a finite set.
Let $\mathscr C$ be a non-empty set of subsets of $S$.

Let $\mathscr C$ satisfy the circuit axioms (formulation 3):




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

  


Then:

$\mathscr C$ satisfies the circuit axioms (formulation 1):



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

  



Proof
Let $\mathscr C$ satisfy the circuit axioms $(\text C 1)$, $(\text C 2)$ and $(\text C 3)$.
We need to show that $\mathscr C$ satisfies circuit axiom:




\((\text C 3)\)  

$:$  





  \(\ds \forall C_1, C_2 \in \mathscr C:\)







\(\ds  C_1 \ne C_2 \land z \in C_1 \cap C_2 \implies \exists C_3 \in \mathscr C : C_3 \subseteq \paren {C_1 \cup C_2} \setminus \set z \)   

  

In fact we prove the contrapositive statement:












  \(\ds \forall C_1, C_2 \in \mathscr C:\)







\(\ds  z \in C_1 \cap C_2 \land \paren{\forall C \in \mathscr C : C \nsubseteq \paren {C_1 \cup C_2} \setminus \set z} \implies C1 = C2 \)   

  


Let:

$C_1, C_2 \in \mathscr C$
$z \in C_1 \cap C_2$
$\forall C \in \mathscr C : C \nsubseteq \paren{C_1 \cup C_2} \setminus \set z$

From circuit axiom $(\text C 5)$:

$\exists \text{ at most one } C \in \mathscr C : C \subseteq \paren{\paren{C_1 \cup C_2} \setminus \set z} \cup \set z = C_1 \cup C_2$
From Set is Subset of Union:

$C_1, C_2 \subseteq C_1 \cup C_2$
Hence:

$C_1 = C_2$
It follows that $\mathscr C$ satisfies circuit axiom $(\text C 3)$.
$\blacksquare$





