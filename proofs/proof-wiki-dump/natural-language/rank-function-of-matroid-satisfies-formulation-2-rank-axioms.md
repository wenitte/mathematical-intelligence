# 

Source: https://proofwiki.org/wiki/Rank_Function_of_Matroid_Satisfies_Formulation_2_Rank_Axioms


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $S$ be a finite set.
Let $\rho$ is the rank function of a matroid $M = \struct{S, \mathscr I}$.

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
$\rho$ satisfies $(\text R 4)$
This follows immediately from Bounds for Rank of Subset.
$\Box$


$\rho$ satisfies $(\text R 5)$
This follows immediately from Rank Function is Increasing.
$\Box$


$\rho$ satisfies $(\text R 6)$
Let $X, Y \subseteq S$.

Let $A$ be a maximal independent subset of $X \cap Y$.
From Cardinality of Maximal Independent Subset Equals Rank of Set:

$\card A = \map \rho {X \cap Y}$

From Independent Subset is Contained in Maximal Independent Subset:

$\exists B \subseteq X \setminus Y : A \cup B$ is a maximal independent subset of $X$
Simiarly from Independent Subset is Contained in Maximal Independent Subset:

$\exists C \subseteq Y \setminus X : \paren{A \cup B} \cup C$ is a maximal independent subset of $X \cup Y$
and:

$\card{A \cup B \cup C} = \map \rho {X \cup Y}$

By matroid axiom $(\text I 2)$:

$A \cup C$ is an independent subset of $Y$.

We have:














\(\ds \map \rho X + \map \rho Y\)

\(\ge\)







\(\ds \card{A \cup B} + \card{A \cup C}\)





Definition of rank function $\rho$














\(\ds \)

\(=\)







\(\ds \card{A \cup B} + \paren{\card A + \card C }\)





Cardinality of Set Union: Corollary














\(\ds \)

\(=\)







\(\ds \paren{\card{A \cup B} + \card C } + \card A\)





Sum of Cardinals is Commutative and Sum of Cardinals is Associative














\(\ds \)

\(=\)







\(\ds \card{A \cup B \cup C} + \card A\)





Cardinality of Set Union: Corollary














\(\ds \)

\(=\)







\(\ds \map \rho {X \cup Y} + \map \rho {X \cap Y}\)





Definition of rank function $\rho$



$\blacksquare$


Sources
1976: Dominic Welsh: Matroid Theory ... (previous) ... (next) Chapter $1.$ $\S 6.$ Properties of the rank function, Proof of Theorem $2.3$
2018: Bernhard H. Korte and Jens Vygen: Combinatorial Optimization: Theory and Algorithms (6th ed.) Chapter $13$ Matroids $\S 13.2$ Other Matroid Axioms, Theorem $13.10$




