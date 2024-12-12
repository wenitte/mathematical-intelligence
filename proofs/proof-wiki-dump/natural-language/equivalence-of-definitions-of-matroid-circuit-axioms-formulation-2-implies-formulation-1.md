# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Matroid_Circuit_Axioms/Formulation_2_Implies_Formulation_1

Theorem
Let $S$ be a finite set.
Let $\mathscr C$ be a non-empty set of subsets of $S$.

Let $\mathscr C$ satisfy the circuit axioms (formulation 2):




\((\text C 1)\)  

$:$  













\(\ds  \O \notin \mathscr C \)   

  


\((\text C 2)\)  

$:$  





  \(\ds \forall C_1, C_2 \in \mathscr C:\)







\(\ds  C_1 \ne C_2 \implies C_1 \nsubseteq C_2 \)   

  


\((\text C 4)\)  

$:$  





  \(\ds \forall C_1, C_2 \in \mathscr C:\)







\(\ds  C_1 \ne C_2 \land z \in C_1 \cap C_2 \land w \in C_1 \setminus C_2 \implies \exists C_3 \in \mathscr C : w \in C_3 \subseteq \paren {C_1 \cup C_2} \setminus \set z \)   

  


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
Let $\mathscr C$ satisfy the circuit axioms $(\text C 1)$, $(\text C 2)$ and $(\text C 4)$.
We need to show that $\mathscr C$ satisfies circuit axiom:




\((\text C 3)\)  

$:$  





  \(\ds \forall C_1, C_2 \in \mathscr C:\)







\(\ds  C_1 \ne C_2 \land z \in C_1 \cap C_2 \implies \exists C_3 \in \mathscr C : C_3 \subseteq \paren {C_1 \cup C_2} \setminus \set z \)   

  


Let $C_1, C_2 \in \mathscr C : C_1 \ne C_2$.
Let $z \in C_1 \cap C_2$.
From circuit axiom $(\text C 2)$:

$C_2 \nsubseteq C_1$
By definition of subset and set difference:

$\exists w \in C_2 \setminus C_1$
From circuit axiom $(\text C 4)$:

$\exists C_3 \in \mathscr C : w \in C_3 \subseteq \paren{C_1 \cup C_2} \setminus \set z$

It follows that $\mathscr C$ satisfies circuit axiom $(\text C 3)$.
$\blacksquare$





