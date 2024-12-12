# 

Source: https://proofwiki.org/wiki/Algebra_of_Sets_is_Closed_under_Set_Difference

Theorem
Let $S$ be a set.
Let $\RR$ be an algebra of sets on $S$.
Then:

$\forall A, B \in S: A \setminus B \in \RR$


Proof 1
By definition $2$ of Algebra of Sets:

$\RR$ is a ring of sets with a unit.
By definition $2$ of Ring of Sets:




\((\text {RS} 2_2)\)  

$:$  



Closure under Set Difference:   

  \(\ds \forall A, B \in \RR:\)

\(\ds A \setminus B \in \RR \)   







  

$\blacksquare$


Proof 2
By definition $1$ of algebra of sets, we have that:




\((\text {AS} 3)\)  

$:$  



Closure under Complement Relative to $S$:   

  \(\ds \forall A \in \RR:\)

\(\ds \relcomp S A \in \RR \)   







  


Thus:














\(\ds A, B\)

\(\in\)







\(\ds \RR\)














\(\ds \leadsto \ \ \)





\(\ds A \cap \relcomp S B\)

\(\in\)







\(\ds \RR\)





Definition of Algebra of Sets: $\text {AS} 3$ and Algebra of Sets is Closed under Intersection








\(\ds \leadsto \ \ \)





\(\ds A \setminus B\)

\(\in\)







\(\ds \RR\)





Set Difference as Intersection with Relative Complement



$\blacksquare$





