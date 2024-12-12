# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Matroid/Definition_1_implies_Definition_4

Theorem
Let $M = \struct {S, \mathscr I}$ be an independence system.
Let $M$ also satisfy:




\((\text I 3)\)  

$:$  





  \(\ds \forall U, V \in \mathscr I:\)







\(\ds  \size V < \size U \implies \exists x \in U \setminus V : V \cup \set x \in \mathscr I \)   

  


Then $M$ satisfies:




\((\text I 6)\)  

$:$  





  \(\ds \forall A \subseteq S:\)







\(\ds  \text{ all maximal subsets } Y \subseteq A \text{ with } Y \in \mathscr I \text{ have the same cardinality} \)   

  



Proof
Let $M$ satisfy condition $(\text I 3)$.
Let $A \subseteq S$.
Let $Y_1, Y_2$ be maximal independent subsets of $A$.
Without loss of generality, let:

$\size {Y_2} \le \size {Y_1}$

Aiming for a contradiction, suppose:

$\size {Y_2} < \size {Y_1}$
By condition $(\text I 3)$:

$\exists y \in Y_1 \setminus Y_2 : Y_2 \cup \set y \in \mathscr I$
From Union of Subsets is Subset:

$Y_2 \cup \set y \subseteq A$
This contradicts the maximality of $Y_2$.
Then:

$\size {Y_2} = \size {Y_1}$

It follows that $M$ satisifies $(\text I 6)$.
$\blacksquare$





