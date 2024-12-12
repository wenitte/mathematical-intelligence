# 

Source: https://proofwiki.org/wiki/Formulation_1_Rank_Axioms_Implies_Rank_Function_of_Matroid/Lemma_4


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

  


Let $M = \struct{S, \mathscr I}$ where:

$\mathscr I = \set{X \subseteq S : \map \rho X = \card X}$

Then $M$ satisfies matroid axiom $(\text I 1)$.

Proof
We have:














\(\ds \map \rho \O\)

\(=\)







\(\ds 0\)





Rank axiom $(\text R 1)$














\(\ds \)

\(=\)







\(\ds \card \O\)





Cardinality of Empty Set



So:

$\O \in \mathscr I$
Hence:

$M$ satisfies matroid axiom $(\text I 1)$.
$\blacksquare$





