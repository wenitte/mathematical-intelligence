# 

Source: https://proofwiki.org/wiki/Rank_Function_of_Matroid_Satisfies_Formulation_1_Rank_Axioms


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $S$ be a finite set.
Let $\rho : \powerset S \to \Z$ be the rank function of a matroid on $S$.

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
Let $\rho$ be the rank function of a matroid $M = \struct{S, \mathscr I}$ on $S$


$\rho$ satisfies $(\text R 1)$
$\rho$ satisfies $(\text R 1)$ follows immediately from Rank of Empty Set is Zero.
$\Box$


$\rho$ satisfies $(\text R 2)$
Let:

$X \subseteq S$
$y \in S$
From Rank Function is Increasing:

$\map \rho X \le \map \rho {X \cup \set y}$

Let $Y$ be a maximal independent subset of $X \cup \set y$.
From Cardinality of Maximal Independent Subset Equals Rank of Set

$\card Y = \map \rho {X \cup \set y}$
By matroid axiom $(\text I 2)$:

$Y \setminus \set y \in \mathscr I$
We now consider two cases.

Case 1: $y \in Y$
We have:














\(\ds \map \rho X\)

\(\ge\)







\(\ds \card{Y \setminus \set y}\)





Definition of Rank Function














\(\ds \)

\(=\)







\(\ds \card Y - \card{Y \cap \set y}\)





Cardinality of Set Difference














\(\ds \)

\(=\)







\(\ds \card Y - \card{\set y}\)





Singleton of Element is Subset














\(\ds \)

\(=\)







\(\ds \card Y - 1\)





Cardinality of Singleton








\(\ds \leadsto \ \ \)





\(\ds \map \rho X + 1\)

\(\ge\)







\(\ds \card Y\)





Add one to both sides



$\Box$


Case 2: $y \notin Y$
We have:














\(\ds \map \rho X + 1\)

\(>\)







\(\ds \map \rho X\)




















\(\ds \)

\(\ge\)







\(\ds \card{Y \setminus \set y}\)





Definition of Rank Function














\(\ds \)

\(=\)







\(\ds \card Y - \card{Y \cap \set y}\)





Cardinality of Set Difference














\(\ds \)

\(=\)







\(\ds \card Y - \O\)





Intersection With Singleton is Disjoint if Not Element














\(\ds \)

\(=\)







\(\ds \card Y - 0\)





Cardinality of Empty Set














\(\ds \)

\(=\)







\(\ds \card Y\)









$\Box$

In either case:

$\map \rho X + 1 \ge \card Y = \map \rho {X \cup \set y}$
$\Box$


$\rho$ satisfies $(\text R 3)$
Let:

$X \subseteq S$
$y, z \in S$
Case 1: $y, z \notin X$
Let $A = X \cup \set y \cup \set z$.
From Rank Function is Increasing:

$\map \rho A \ge \map \rho X$
We now prove the contrapositive statement:

$\map \rho A > \map \rho X \implies$ either $\map \rho {X \cup \set y} > \map \rho X$ or $\map \rho {X \cup \set z} > \map \rho X$

Let $\map \rho A > \map \rho X$.
Let $Y$ be a maximal independent subset of $X$.
Let $Z$ be a maximal independent subset of $A$.
From Cardinality of Maximal Independent Subset Equals Rank of Set:

$\card Y = \map \rho X < \map \rho A = \card Z$
From Independent Set can be Augmented by Larger Independent Set there exists non-empty set $Z' \subseteq Z \setminus Y$:

$Y \cup Z' \in \mathscr I$
$\card{Y \cup Z'} = \card Z$

Aiming for a contradiction, suppose:

$y, z \notin Z'$
We have:














\(\ds Z'\)

\(=\)







\(\ds Z' \cap Z\)




















\(\ds \)

\(\subseteq\)







\(\ds Z' \cap A\)




















\(\ds \)

\(=\)







\(\ds Z' \cap \paren{X \cup \set y \cup \set z}\)




















\(\ds \)

\(=\)







\(\ds \paren{Z' \cap  X} \cup \paren{Z' \cap \paren{\set y \cup \set z} }\)




















\(\ds \)

\(=\)







\(\ds \paren{Z' \cap X} \cup \O\)




















\(\ds \)

\(=\)







\(\ds \paren{Z' \cap X}\)




















\(\ds \)

\(\subseteq\)







\(\ds X\)














\(\ds \leadsto \ \ \)





\(\ds Y \cup Z'\)

\(\subseteq\)







\(\ds X\)









Hence:














\(\ds \card{Y \cup Z'}\)

\(=\)







\(\ds \card Z\)




















\(\ds \)

\(=\)







\(\ds \map \rho A\)




















\(\ds \)

\(>\)







\(\ds \map \rho X\)




















\(\ds \)

\(\ge\)







\(\ds \card{Y \cup Z'}\)









This is a contradiction.
Hence:

either $y \in Z'$ or $z \in Z'$

Without loss of generality, assume $y \in Z'$.
From matroid axiom $(\text I 2)$:

$Y \cup \set y \in \mathscr I$
We have:














\(\ds \map \rho {X \cup \set y}\)

\(\ge\)







\(\ds \card{Y \cup \set y}\)





Definition of Rank Function (Matroid)














\(\ds \)

\(=\)







\(\ds \card Y + \card{\set y}\)





Corollary of Cardinality of Set Union














\(\ds \)

\(=\)







\(\ds \card Y + 1\)





Cardinality of Singleton














\(\ds \)

\(>\)







\(\ds \card Y\)




















\(\ds \)

\(=\)







\(\ds \map \rho X\)





Definition of Rank Function (Matroid)



This proves the contrapositive statement.
$\Box$


Case 2: Either $y \in X$ or $z \in X$
Without loss of generality, assume $y \in X$.

Let:

$\map \rho {X \cup \set y} = \map \rho {X \cup \set z} = \map \rho X$.
We have:

$X \cup \set y \cup \set z = X \cup \set z$
Hence:

$\map \rho {X \cup \set y \cup \set z} = \map \rho {X \cup \set z} = \map \rho X$
$\Box$

In either case:

$\map \rho {X \cup \set y} = \map \rho {X \cup \set z} = \map \rho X \implies \map \rho {X \cup \set y \cup \set z} = \map \rho X$
$\blacksquare$


Sources
1976: Dominic Welsh: Matroid Theory ... (previous) ... (next) Chapter $1.$ $\S 6.$ Properties of the rank function




