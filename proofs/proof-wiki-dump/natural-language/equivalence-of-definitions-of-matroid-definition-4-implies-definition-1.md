# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Matroid/Definition_4_implies_Definition_1

Theorem
Let $M = \struct {S, \mathscr I}$ be an independence system.
Let $M$ also satisfy:




\((\text I 6)\)  

$:$  





  \(\ds \forall A \subseteq S:\)







\(\ds  \text{ all maximal subsets } Y \subseteq A \text{ with } Y \in \mathscr I \text{ have the same cardinality} \)   

  


Then $M$ satisfies:




\((\text I 3)\)  

$:$  





  \(\ds \forall U, V \in \mathscr I:\)







\(\ds  \size V < \size U \implies \exists x \in U \setminus V : V \cup \set x \in \mathscr I \)   

  



Proof
Let $M$ satisfy condition $(\text I 6)$.
Let $U, V \in \mathscr I$ such that $\size V < \size U$.
Let $W$ be a maximal independent subset of $U \cup V$ containing $U$.
Then:

$\size U \le \size W$
By condition $(\text I 6)$:

$V$ is not a maximal independent subset of $U \cup V$
Then:

$\exists x \in \paren {U \cup V} \setminus V$ such that $V \cup \set x \in \mathscr I$
From Set Difference with Union is Set Difference:

$\exists x \in U \setminus V$ such that $V \cup \set x \in \mathscr I$
It follows that $M$ satisifies $(\text I 3)$
$\blacksquare$





