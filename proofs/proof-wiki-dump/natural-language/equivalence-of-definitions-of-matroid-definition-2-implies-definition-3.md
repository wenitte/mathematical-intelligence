# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Matroid/Definition_2_implies_Definition_3

Theorem
Let $M = \struct {S, \mathscr I}$ be an independence system.
Let $M$ also satisfy:




\((\text I 4)\)  

$:$  





  \(\ds \forall U, V \in \mathscr I:\)







\(\ds  \size U = \size V + 1 \implies \exists x \in U \setminus V : V \cup \set x \in \mathscr I \)   

  


Then $M$ satisfies:




\((\text I 5)\)  

$:$  





  \(\ds \forall U, V \in \mathscr I:\)







\(\ds  \size V < \size U \implies \exists Z \subseteq U \setminus V : \paren{V \cup Z \in \mathscr I} \land \paren{ \size {V \cup Z} = \size U} \)   

  



Proof
From Independent Set can be Augmented by Larger Independent Set it follows that if $M$ satisfies condition $(\text I 4)$ then $M$ satisfies condition $(\text I 5)$.
$\blacksquare$





