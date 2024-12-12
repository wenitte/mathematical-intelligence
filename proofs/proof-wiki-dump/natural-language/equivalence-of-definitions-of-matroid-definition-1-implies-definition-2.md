# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Matroid/Definition_1_implies_Definition_2

Theorem
Let $M = \struct {S, \mathscr I}$ be an independence system.
Let $M$ also satisfy:




\((\text I 3)\)  

$:$  





  \(\ds \forall U, V \in \mathscr I:\)







\(\ds  \size V < \size U \implies \exists x \in U \setminus V : V \cup \set x \in \mathscr I \)   

  


Then $M$ satisfies:




\((\text I 4)\)  

$:$  





  \(\ds \forall U, V \in \mathscr I:\)







\(\ds  \size U = \size V + 1 \implies \exists x \in U \setminus V : V \cup \set x \in \mathscr I \)   

  



Proof
Since:

$\forall U, V \in \mathscr I : \size U = \size V + 1 \implies \size V < \size U$

If follows that if $M$ satisfies condition $(\text I 3)$ then $M$ satisfies condition $(\text I 4)$.
$\blacksquare$





