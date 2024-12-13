# 

Source: https://proofwiki.org/wiki/Matroid_Bases_Iff_Satisfies_Matroid_Base_Axiom


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $S$ be a finite set.
Let $\mathscr B$ be a non-empty set of subsets of $S$.

Then $\mathscr B$ is the set of bases of a matroid on $S$ if and only if $\mathscr B$ satisfies any one of the base axioms:




\((\text B 1)\)  

$:$  





  \(\ds \forall B_1, B_2 \in \mathscr B:\)







\(\ds  x \in B_1 \setminus B_2 \implies \exists y \in B_2 \setminus B_1 : \paren {B_1 \setminus \set x} \cup \set y \in \mathscr B \)   

  




\((\text B 2)\)  

$:$  





  \(\ds \forall B_1, B_2 \in \mathscr B:\)







\(\ds  x \in B_1 \setminus B_2 \implies \exists y \in B_2 \setminus B_1 : \paren {B_1 \cup \set y} \setminus \set x \in \mathscr B \)   

  




\((\text B 3)\)  

$:$  





  \(\ds \forall B_1, B_2 \in \mathscr B:\)







\(\ds  \exists \text{ a bijection } \pi : B_1 \to B_2 : \forall x \in B_1 : \paren {B_1 \setminus \set x } \cup \set {\map \pi x} \in \mathscr B \)   

  




\((\text B 4)\)  

$:$  





  \(\ds \forall B_1, B_2 \in \mathscr B:\)







\(\ds  x \in B_1 \setminus B_2 \implies \exists y \in B_2 \setminus B_1 : \paren {B_1 \setminus \set x} \cup \set y, \paren {B_2 \setminus \set y} \cup \set x \in \mathscr B \)   

  




\((\text B 5)\)  

$:$  





  \(\ds \forall B_1, B_2 \in \mathscr B:\)







\(\ds  x \in B_1 \setminus B_2 \implies \exists y \in B_2 \setminus B_1 : \paren {B_2 \setminus \set y}  \cup \set x \in \mathscr B \)   

  




\((\text B 6)\)  

$:$  





  \(\ds \forall B_1, B_2 \in \mathscr B:\)







\(\ds  x \in B_1 \setminus B_2 \implies \exists y \in B_2 \setminus B_1 : \paren {B_2 \cup \set x} \setminus \set y \in \mathscr B \)   

  




\((\text B 7)\)  

$:$  





  \(\ds \forall B_1, B_2 \in \mathscr B:\)







\(\ds  \exists \text{ a bijection } \pi : B_1 \to B_2 : \forall x \in B_1 : \paren {B_2 \setminus \set {\map \pi x} } \cup \set x \in \mathscr B \)   

  


In which case, $\mathscr B$ satisfies all of the base axioms.

Proof
Follows immediately from:

Matroid Bases Iff Satisfies Formulation 1 of Matroid Base Axiom
Equivalence of Definitions of Matroid Base Axioms
$\blacksquare$


Also see
Definition:Base-Orderable Matroid
Not All Matroids are Base-Orderable
Sources
1969: Richard A. Brualdi: Comments on bases in dependence structures (Bulletin of the Australian Mathematical Society Vol. 1, no. 2: pp. 161 – 167)
1976: Dominic Welsh: Matroid Theory Chapter $1.$ $\S 5.$ Properties of independent sets and bases
2011: James Oxley: Matroid Theory (2nd ed.) Chapter $11$ Submodular Function and Matroid Union $\S 11.3$ Matroid union and its applications, Exercise $10$
2018: Bernhard H. Korte and Jens Vygen: Combinatorial Optimization: Theory and Algorithms (6th ed.) Chapter $13$ Matroids $\S 13.1$ Independence Systems and Matroids, Definition $13.1$
1969: Richard A. Brualdi: Comments on bases in dependence structures (Bulletin of the Australian Mathematical Society Vol. 1, no. 2: pp. 161 – 167)




