# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Matroid/Definition_3_implies_Definition_1

Theorem
Let $M = \struct {S, \mathscr I}$ be an independence system.
Let $M$ also satisfy:




\((\text I 5)\)  

$:$  





  \(\ds \forall U, V \in \mathscr I:\)







\(\ds  \size V < \size U \implies \exists Z \subseteq U \setminus V : \paren {V \cup Z \in \mathscr I} \land \paren {\size {V \cup Z} = \size U} \)   

  


Then $M$ satisfies:




\((\text I 3)\)  

$:$  





  \(\ds \forall U, V \in \mathscr I:\)







\(\ds  \size V < \size U \implies \exists x \in U \setminus V : V \cup \set x \in \mathscr I \)   

  



Proof
Let $M$ satisfy condition $(\text I 5)$.

Let $U, V \in \mathscr I$ such that $\size V < \size U$.
By condition $(\text I 5)$:

$\exists Z : \exists Z \subseteq U \setminus V : \paren {V \cup Z \in \mathscr I} \land \paren {\size {V \cup Z} = \size U}$
Then:

$V \cup Z \ne V$

From Union with Empty Set:

$Z \ne \O$
Then:

$\exists x : x \in Z$
From Singleton of Element is Subset:

$\set x \subseteq Z$
From Set Union Preserves Subsets:

$V \cup \set x \subseteq V \cup Z$
From independence system axiom $(\text I 2)$:

$V \cup \set x \in \mathscr I$
By definition of a subset:

$x \in U \setminus V$
It follows that $M$ satisfies condition $(\text I 3)$.
$\blacksquare$





