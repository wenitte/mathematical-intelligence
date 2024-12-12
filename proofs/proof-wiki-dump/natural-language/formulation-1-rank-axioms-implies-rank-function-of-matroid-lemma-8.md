# 

Source: https://proofwiki.org/wiki/Formulation_1_Rank_Axioms_Implies_Rank_Function_of_Matroid/Lemma_8


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

  


Let $M = \struct{S, \mathscr I}$ be the matroid where:

$\mathscr I = \set{X \subseteq S : \map \rho X = \card X}$
Let $\rho_M$ be the rank function of the matroid $M = \struct{S, \mathscr I}$.

Then $\rho_M = \rho$.


Lemma 3
Let:

$A \subseteq S : \map \rho A = \card A$
Let:

$B \subseteq S : \forall b \in B \setminus A : \map \rho {A \cup \set b} \ne \card{A \cup \set b}$

Then:

$\map \rho {A \cup B} = \map \rho A$


Proof
Let $X \subseteq S$.

By definition of the rank function:

$\map {\rho_M} X = \max \set{\card Y : Y \subseteq X, Y \in \mathscr I}$
Let $Y_0 \subseteq X$:

$\card {Y_0} = \max \set{\card Y : Y \subseteq X, Y \in \mathscr I}$
Then:














\(\ds \map {\rho_M} X\)

\(=\)







\(\ds \card {Y_0}\)





By choice of $Y_0$














\(\ds \)

\(=\)







\(\ds \map \rho {Y_0}\)





As $Y_0 \in \mathscr I$




So it remains  to show:

$\map \rho {Y_0} = \map \rho X$


Case 1 : $Y_0 = X$
Let $Y_0 = X$.
Then:

$\map \rho {Y_0} = \map \rho X$
$\Box$


Case 2 : $Y_0 \ne X$
Let $Y_0 \ne X$.
Then:

$Y_0 \subsetneq X$
From Set Difference with Proper Subset:

$X \setminus Y_0 \ne \O$
By choice of $Y_0$:

$\forall y \in X \setminus Y_0 : Y_0 \cup \set y \notin \mathscr I$
That is:

$\forall y \in X \setminus Y_0 : \map \rho {Y_0 \cup \set y} \ne \card {Y_0 \cup \set y}$
From Lemma 3:

$\map \rho {Y_0} = \map \rho {Y_0 \cup X} = \map \rho X$
$\Box$

In either case:

$\map \rho {Y_0} = \map \rho X$
It follows that:

$\forall X \subseteq S : \map {\rho_M} X = \map \rho X$
Hence $\rho$ is the rank function of the matroid $M = \struct{S, \mathscr I}$.
$\blacksquare$





