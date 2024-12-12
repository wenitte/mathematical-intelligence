# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Semiring_of_Sets/Definition_2_implies_Definition_1

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

  


\((3')\)  

$:$  





  \(\ds \forall A, B \in \SS:\)







$\exists n \in \N$ and pairwise disjoint sets $A_1, A_2, A_3, \ldots, A_n \in \SS : \ds A \setminus B = \bigcup_{k \mathop = 1}^n A_k$   

  


Then $\SS$ satisfies the semiring of sets axioms:




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





