# 

Source: https://proofwiki.org/wiki/Algebra_of_Sets_is_Closed_under_Intersection/Proof_2

Theorem
Let $S$ be a set.
Let $\RR$ be an algebra of sets on $S$.
Then:

$\forall A, B \in S: A \cap B \in \RR$


Proof
By definition $1$ of algebra of sets, we have that:




\((\text {AS} 2)\)  

$:$  



Closure under Union:   

  \(\ds \forall A, B \in \RR:\)

\(\ds A \cup B \in \RR \)   







  


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





\(\ds \relcomp S A \cup \relcomp S B\)

\(\in\)







\(\ds \RR\)





Definition of Algebra of Sets: $\text {AS} 2$ and $\text {AS} 3$








\(\ds \leadsto \ \ \)





\(\ds \relcomp S {A \cap B}\)

\(\in\)







\(\ds \RR\)





De Morgan's Laws: Complement of Intersection








\(\ds \leadsto \ \ \)





\(\ds A \cap B\)

\(\in\)







\(\ds \RR\)





Definition of Algebra of Sets: $\text {AS} 3$



$\blacksquare$





