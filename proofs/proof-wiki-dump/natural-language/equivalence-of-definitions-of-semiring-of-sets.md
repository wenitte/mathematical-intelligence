# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Semiring_of_Sets



Theorem
The following definitions of the concept of Semiring of Sets are equivalent:

Definition 1
Let $\SS$ be a system of sets.

$\SS$ is a semiring of sets or semi-ring of sets if and only if $\SS$ satisfies the semiring of sets axioms:




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

  



Definition 2
Let $\SS$ be a system of sets.

$\SS$ is a semiring of sets or semi-ring of sets if and only if $\SS$ satisfies the semiring of sets axioms:




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
Definition 1 implies Definition 2
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
$\Box$

Definition 2 implies Definition 1
Let $\SS$ be a system of sets satisfying the axioms:




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

  


It remains to be shown that $\SS$ satisfies the axiom 




\((3)\)  

$:$  





  \(\ds \forall A, A_1 \in \SS : A_1 \subseteq A:\)







$\exists n \in \N$ and pairwise disjoint sets $A_2, A_3, \ldots, A_n \in \SS : \ds A = \bigcup_{k \mathop = 1}^n A_k$   

  


Let $A, B \in \SS : B \subseteq A$.
By axiom $(3)$:

$\exists$ a finite sequence of pairwise disjoint sets $A_1, A_2, \ldots, A_n \in \SS : \ds A \setminus B = \bigcup_{k \mathop = 1}^n A_k$.
Then $B$ is disjoint with each of the sets $A_k$.
Then:














\(\ds B \cup \bigcup_{k \mathop = 1}^n A_k\)

\(=\)







\(\ds \paren {A \setminus B} \cup B\)




















\(\ds \)

\(=\)







\(\ds A \cup B\)





Set Difference Union Second Set is Union














\(\ds \)

\(=\)







\(\ds A\)





Union with Superset is Superset



As $A$ and $B$ were arbitrary, then $\SS$ satisfies axiom $(3)$
The result follows
$\blacksquare$





