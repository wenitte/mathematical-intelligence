# 

Source: https://proofwiki.org/wiki/Formulation_1_Rank_Axioms_Implies_Rank_Function_of_Matroid/Lemma_1


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

  


Then:

$\forall A, B \subseteq S: A \subseteq B \implies \map \rho A \le \map \rho B$


Proof
Aiming for a contradiction, suppose:

$\exists A, B \subseteq S : A \subseteq B$ and $\map \rho A > \map \rho B$

Let $B \subseteq S$:

$\exists A \subseteq B : \map rho A > \map \rho B$
Let $A_0 \subseteq B$:

$\card {A_0} = \max \set{\card A : A \subseteq B \land \map \rho A > \map \rho B}$

As $\map \rho {A_0} > \map \rho B$:

$A_0 \ne B$
From Set Difference with Proper Subset:

$\exists y \in B \setminus A_0$

We have:














\(\ds \map \rho B\)

\(<\)







\(\ds \map \rho {A_0}\)





By Choice of $A_0$














\(\ds \)

\(\le\)







\(\ds \map \rho {A_0 \cup \set y}\)





Rank axiom $(\text R 2)$














\(\ds \)

\(\le\)







\(\ds \map \rho B\)





By Choice of $A_0$



This is a contradiction.

Hence:

$\forall A, B \subseteq S: A \subseteq B \implies \map \rho A \le \map \rho B$
$\blacksquare$





