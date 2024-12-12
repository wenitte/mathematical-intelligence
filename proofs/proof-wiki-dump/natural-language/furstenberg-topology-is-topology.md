# 

Source: https://proofwiki.org/wiki/Furstenberg_Topology_is_Topology



Theorem
Let $\struct {\Z, \tau}$ be the topological space formed by the Furstenberg topology on the set of integers $\Z$.

Then $\tau$ is indeed a topology on $\Z$.


Proof
Recall the definition of the Furstenberg topology:
Let:

$\BB := \set {a \Z + b : a,b \in \Z, a \ne 0}$
where:

$a \Z + b := \set {a k + b : k \in \Z}$
Let:

$\tau := \set {\bigcup \AA : \AA \subseteq \BB}$

Then $\tau$ is called Furstenberg topology on $\Z$.
$\Box$

In view of Union from Synthetic Basis is Topology it suffices to show that $\BB$ is a synthetic basis on $\Z$.
Recall the definition of synthetic basis:
A synthetic basis on $S$ is a subset $\BB \subseteq \powerset S$ of the power set of $S$ such that:




\((\text B 1)\)  

$:$  













$\BB$ is a cover for $S$   

  


\((\text B 2)\)  

$:$  





  \(\ds \forall U, V \in \BB:\)







$\exists \AA \subseteq \BB: U \cap V = \bigcup \AA$   

  

That is, the intersection of any pair of elements of $\BB$ is a union of sets of $\BB$.


$(\text B 1)$
$\BB$ is trivially a cover of $\Z$, since $\Z \in \BB$.
$\Box$


$(\text B 2)$
Let $a_1 \Z + b_1, a_2 \Z + b_2 \in \BB$.
If:

$\paren {a_1 \Z + b_1} \cap \paren {a_2 \Z + b_2} = \O$
then it is done, since $\O = \bigcup \O$ and $\O \subseteq \BB$.

Now, suppose that:

$\exists x \in \paren {a_1 \Z + b_1} \cap \paren {a_2 \Z + b_2}$
Let $\lcm \set {a_1, a_2}$ be the lowest common multiple of $a_1$ and $a_2$.
Then:














\(\ds y\)

\(\in\)







\(\ds \paren {a_1 \Z + b_1} \cap \paren {a_2 \Z + b_2}\)














\(\ds \leadstoandfrom \ \ \)

\(\ds \forall i \in \set {1,2}: \, \)



\(\ds y\)

\(\in\)







\(\ds a_i \Z + b_i\)





Definition of Set Intersection








\(\ds \leadstoandfrom \ \ \)

\(\ds \forall i \in \set {1,2}: \, \)



\(\ds y - x\)

\(\in\)







\(\ds a_i \Z + b_i - x\)














\(\ds \leadstoandfrom \ \ \)

\(\ds \forall i \in \set {1,2}: \, \)



\(\ds y - x\)

\(\in\)







\(\ds a_i \Z\)





as $b_i - x \in a_i \Z$








\(\ds \leadstoandfrom \ \ \)





\(\ds y - x\)

\(\in\)







\(\ds a_1 \Z \cap a_2 \Z\)





Definition of Set Intersection








\(\ds \leadstoandfrom \ \ \)





\(\ds y - x\)

\(\in\)







\(\ds \lcm \set {a_1, a_2} \Z\)





Intersection of Integer Ideals is Lowest Common Multiple








\(\ds \leadstoandfrom \ \ \)





\(\ds y\)

\(\in\)







\(\ds \lcm \set {a_1, a_2} \Z + x\)









That is:

$\paren {a_1 \Z + b_1} \cap \paren {a_2 \Z + b_2} = \lcm \set {a_1, a_2} \Z + x$
This concludes the proof, because:

$\lcm \set {a_1, a_2} \Z + x = \bigcup \AA$
where:

$\AA := \set {\lcm \set {a_1, a_2} \Z + x} \subseteq \BB$
$\blacksquare$


Also see
Definition:Furstenberg Topology




