# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Matroid_Rank_Axioms/Formulation_2_Implies_Formulation_1


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $S$ be a finite set.
Let $\rho : \powerset S \to \Z$ be a mapping from the power set of $S$ to the integers.

Let $\rho$ satisfy formulation 2 of the rank axioms:




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

  


Then $\rho$ satisfies formulation 1 of the rank axioms:




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

  



Proof
$\rho$ satisfies $(\text R 1)$
We have:














\(\ds 0\)

\(\le\)







\(\ds \map \rho \O\)





Rank axiom $(\text R 4)$














\(\ds \)

\(\le\)







\(\ds \card \O\)





Rank axiom $(\text R 4)$














\(\ds \)

\(=\)







\(\ds 0\)





Cardinality of Empty Set



Hence:

$\map \rho \O = 0$
$\Box$


$\rho$ satisfies $(\text R 2)$
Let $X \subseteq S$.
Let $y \in S$.

We have:














\(\ds \map \rho X\)

\(\le\)







\(\ds \map \rho {X \cup y}\)





Rank axiom $(\text R 5)$














\(\ds \)

\(\le\)







\(\ds \map \rho X + \map \rho {\set y} - \map \rho {X \cup \set y}\)





Rank axiom $(\text R 6)$














\(\ds \)

\(\le\)







\(\ds \map \rho X + \map \rho {\set y}\)




















\(\ds \)

\(\le\)







\(\ds \map \rho X + \card {\set y}\)





Rank axiom $(\text R 4)$














\(\ds \)

\(\le\)







\(\ds \map \rho X + 1\)





Cardinality of Singleton



This proves rank axiom $(\text R 2)$
$\Box$


$\rho$ satisfies $(\text R 3)$
Let $X \subseteq S$.
Let $x, y \in S$.
Let $\map \rho {X \cup \set x} = \map \rho {X \cup \set y} = \map \rho X$.

We have:














\(\ds \map \rho X\)

\(\le\)







\(\ds \map \rho {X \cup \set x \cup \set y }\)





Rank axiom $(\text R 5)$














\(\ds \)

\(=\)







\(\ds \map \rho {\paren{X \cup \set x} \cup  \paren{X \cup \set y} }\)




















\(\ds \)

\(\le\)







\(\ds \map \rho {X \cup \set x} + \map \rho {X \cup \set x} - \map \rho {\paren{X \cup \set x} \cap  \paren{X \cup \set y} }\)





Rank axiom $(\text R 6)$














\(\ds \)

\(\le\)







\(\ds \map \rho {X \cup \set x} + \map \rho {X \cup \set x} - \map \rho X\)




















\(\ds \)

\(=\)







\(\ds \map \rho X + \map \rho X - \map \rho X\)




















\(\ds \)

\(=\)







\(\ds \map \rho X\)









Hence:

$\map \rho {X \cup \set x \cup \set y} = \map \rho X$
This proves rank axiom $(\text R 3)$
$\blacksquare$


Sources
1976: Dominic Welsh: Matroid Theory ... (previous) Chapter $1.$ $\S 6.$ Properties of the rank function, Proof of Theorem $2.3$
2018: Bernhard H. Korte and Jens Vygen: Combinatorial Optimization: Theory and Algorithms (6th ed.) Chapter $13$ Matroids $\S 13.2$ Other Matroid Axioms, Theorem $13.10$




