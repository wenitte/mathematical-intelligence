# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Matroid_Rank_Axioms/Formulation_1_Implies_Formulation_2


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $S$ be a finite set.
Let $\rho : \powerset S \to \Z$ be a mapping from the power set of $S$ to the integers.

Let $\rho$ satisfy formulation 1 of the rank axioms:




\((\text R 1)\)  

$:$  













\(\ds  \map \rho \O = 0 \)   

  


\((\text R 2)\)  

$:$  





  \(\ds \forall X \in \powerset S \land y \in S:\)







\(\ds  \map \rho X \le \map \rho {X \cup \set y} \le \map \rho X + 1 \)   

  


\((\text R 3)\)  

$:$  





  \(\ds \forall X \in \powerset S \land y, z \in S:\)







\(\ds  \map \rho {X \cup \set y} = \map \rho {X \cup \set z} = \map \rho X \implies \map \rho {X \cup \set y \cup \set z} = \map \rho X \)   

  


Then $\rho$ satisfies formulation 2 of the rank axioms:




\((\text R 4)\)  

$:$  





  \(\ds \forall X \in \powerset S:\)







\(\ds  0 \le \map \rho X \le \size X \)   

  


\((\text R 5)\)  

$:$  





  \(\ds \forall X, Y \in \powerset S:\)







\(\ds  X \subseteq Y \implies \map \rho X \le \map \rho Y \)   

  


\((\text R 6)\)  

$:$  





  \(\ds \forall X, Y \in \powerset S:\)







\(\ds  \map \rho {X \cup Y} + \map \rho {X \cap Y} \le \map \rho X + \map \rho Y \)   

  



Proof
Follows immediately from:

Formulation 1 Rank Axioms Implies Rank Function of Matroid
Rank Function of Matroid Satisfies Formulation 2 Rank Axioms
$\blacksquare$





