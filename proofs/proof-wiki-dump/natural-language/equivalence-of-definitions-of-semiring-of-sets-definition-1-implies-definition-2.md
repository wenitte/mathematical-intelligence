# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Semiring_of_Sets/Definition_1_implies_Definition_2

Theorem
Let $\SS$ be a system of sets satisfying the semiring of sets axioms:




\((1)\)  

$:$  













\(\ds  \O \in \SS \)   

  


\((2)\)  

$:$  



$\cap$-stable   

  \(\ds \forall A, B \in \SS:\)







\(\ds  A \cap B \in \SS \)   

  


\((3)\)  

$:$  





  \(\ds \forall A, A_1 \in \SS : A_1 \subseteq A:\)







$\exists n \in \N$ and pairwise disjoint sets $A_2, A_3, \ldots, A_n \in \SS : \ds A = \bigcup_{k \mathop = 1}^n A_k$   

  


Then $\SS$ satisfies the semiring of sets axioms:




\((1)\)  

$:$  













\(\ds  \O \in \SS \)   

  


\((2)\)  

$:$  



$\cap$-stable   

  \(\ds \forall A, B \in \SS:\)







\(\ds  A \cap B \in \SS \)   

  


\((3')\)  

$:$  





  \(\ds \forall A, B \in \SS:\)







$\exists n \in \N$ and pairwise disjoint sets $A_1, A_2, A_3, \ldots, A_n \in \SS : \ds A \setminus B = \bigcup_{k \mathop = 1}^n A_k$   

  



Proof
Let $\SS$ be a system of sets satisfying the axioms:




\((1)\)  

$:$  













\(\ds  \O \in \SS \)   

  


\((2)\)  

$:$  



$\cap$-stable   

  \(\ds \forall A, B \in \SS:\)







\(\ds  A \cap B \in \SS \)   

  


\((3)\)  

$:$  





  \(\ds \forall A, A_1 \in \SS : A_1 \subseteq A:\)







$\exists n \in \N$ and pairwise disjoint sets $A_2, A_3, \ldots, A_n \in \SS : \ds A = \bigcup_{k \mathop = 1}^n A_k$   

  


It remains to be shown that $\SS$ satisfies the axiom 




\((3')\)  

$:$  





  \(\ds \forall A, B \in \SS:\)







$\exists n \in \N$ and pairwise disjoint sets $A_1, A_2, A_3, \ldots, A_n \in \SS : \ds A \setminus B = \bigcup_{k \mathop = 1}^n A_k$   

  


Let $A, B \in \SS$. 
Let $A_1 = A \cap B$.
By axiom $(2)$:

$A_1 \in \SS$
From Intersection is Subset:

$A_1 \subseteq A$
By axiom $(3)$:

$\exists$ a finite sequence of pairwise disjoint sets $A_2, A_3, \ldots, A_n \in \SS : \ds A = \bigcup_{k \mathop = 1}^n A_k$

Then:














\(\ds A \setminus B\)

\(=\)







\(\ds A \setminus \paren {A \cap B}\)





Set Difference with Intersection is Difference














\(\ds \)

\(=\)







\(\ds A \setminus A_1\)




















\(\ds \)

\(=\)







\(\ds \paren {\bigcup_{k \mathop = 1}^n A_k} \setminus A_1\)




















\(\ds \)

\(=\)







\(\ds \bigcup_{k \mathop = 1}^n \paren {A_k \setminus A_1}\)





Set Difference is Right Distributive over Union














\(\ds \)

\(=\)







\(\ds \bigcup_{k \mathop = 2}^n \paren {A_k \setminus A_1}\)





Set Difference with Self is Empty Set and Union with Empty Set














\(\ds \)

\(=\)







\(\ds \bigcup_{k \mathop = 2}^n A_k\)





Set Difference with Disjoint Set




As $A$ and $B$ were arbitrary, then $\SS$ satisfies axiom $(3')$
The result follows
$\blacksquare$





