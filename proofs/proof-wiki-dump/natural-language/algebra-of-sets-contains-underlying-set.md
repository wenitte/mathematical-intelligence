# 

Source: https://proofwiki.org/wiki/Algebra_of_Sets_contains_Underlying_Set

Theorem
Let $S$ be a set.
Let $\RR$ be an algebra of sets on $S$.
Then:

$S \in \RR$


Proof 1
By definition $1$ of algebra of sets, we have that:




\((\text {AS} 1)\)  

$:$  



Unit:   



\(\ds S \in \RR \)   







  

The result is hence immediate.
$\blacksquare$


Proof 2
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







  


We have that $\RR \ne \O$ and so:

$\exists A \subseteq S: A \in \RR$

Then:














\(\ds \relcomp S A\)

\(\in\)







\(\ds \RR\)





Definition of Algebra of Sets: $\text {AS} 3$








\(\ds \leadsto \ \ \)





\(\ds \relcomp S A \cup A\)

\(\in\)







\(\ds \RR\)





Definition of Algebra of Sets: $\text {AS} 2$








\(\ds \leadsto \ \ \)





\(\ds S\)

\(\in\)







\(\ds \RR\)





Union with Relative Complement



$\blacksquare$





