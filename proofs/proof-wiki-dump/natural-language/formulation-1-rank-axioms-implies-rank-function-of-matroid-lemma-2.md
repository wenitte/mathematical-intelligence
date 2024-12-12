# 

Source: https://proofwiki.org/wiki/Formulation_1_Rank_Axioms_Implies_Rank_Function_of_Matroid/Lemma_2


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

$\forall A \subseteq S: \map \rho A \le \card A$


Proof
Aiming for a contradiction, suppose:

$\exists A \subseteq S : \map \rho A > \card A$

Let:

$A_0 \subseteq S : \card{A_0} = \min \set{\card A : \map \rho A > \card A}$
We have:














\(\ds \map \rho \O\)

\(=\)







\(\ds 0\)





Rank axiom $(\text R 1)$














\(\ds \)

\(=\)







\(\ds \card \O\)





Cardinality of Empty Set



Hence:

$A_0 \ne \O$

Let $y \in A_0$.
From Cardinality of Set Difference:

$\card {A_0 \setminus \set y} = \card{A_0} - 1 < \card {A_0}$
We have:














\(\ds \map \rho {A_0}\)

\(=\)







\(\ds \map \rho {\paren {A_0 \setminus \set y} \cup \set y}\)




















\(\ds \)

\(\le\)







\(\ds \map \rho {A_0 \setminus \set y} + 1\)





Rank axiom $(\text R 2)$














\(\ds \)

\(\le\)







\(\ds \card {A_0 \setminus \set y} + 1\)





By choice of $A_0$














\(\ds \)

\(=\)







\(\ds \card {A_0} - \card{\set y} + 1\)





Cardinality of Set Difference with Subset














\(\ds \)

\(=\)







\(\ds \card {A_0} - 1 + 1\)





Cardinality of Singleton














\(\ds \)

\(=\)







\(\ds \card {A_0}\)









This contradicts the choice of $A_0$:

$\card{A_0} = \min \set{\card A : \map \rho A > \card A}$

It follows that:

$\forall A \subseteq S: \map \rho A \le \card A$
$\blacksquare$





