# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Matroid



Theorem
Let $M = \struct {S, \mathscr I}$ be an independence system.

The following definitions of the concept of Matroid are equivalent:

Definition 1
$M$ is called a matroid on $S$ if and only if $M$ also satisfies:




\((\text I 3)\)  

$:$  





  \(\ds \forall U, V \in \mathscr I:\)







\(\ds  \size V < \size U \implies \exists x \in U \setminus V : V \cup \set x \in \mathscr I \)   

  

Definition 2
$M$ is called a matroid on $S$ if and only if $M$ also satisfies:




\((\text I 4)\)  

$:$  





  \(\ds \forall U, V \in \mathscr I:\)







\(\ds  \size U = \size V + 1 \implies \exists x \in U \setminus V : V \cup \set x \in \mathscr I \)   

  

Definition 3
$M$ is called a matroid on $S$ if and only if $M$ also satisfies:




\((\text I 5)\)  

$:$  





  \(\ds \forall U, V \in \mathscr I:\)







\(\ds  \size V < \size U \implies \exists Z \subseteq U \setminus V : \paren {V \cup Z \in \mathscr I} \land \paren {\size {V \cup Z} = \size U} \)   

  

Definition 4
$M$ is called a matroid on $S$ if and only if $M$ also satisfies:




\((\text I 6)\)  

$:$  





  \(\ds \forall A \subseteq S:\)







\(\ds  \text {all maximal subsets $Y \subseteq A$ with $Y \in \mathscr I$ have the same cardinality} \)   

  



Proof
Definition 1 implies Definition 2
Since:

$\forall U, V \in \mathscr I : \size U = \size V + 1 \implies \size V < \size U$

If follows that if $M$ satisfies condition $(\text I 3)$ then $M$ satisfies condition $(\text I 4)$.
$\Box$


Definition 2 implies Definition 3
From Independent Set can be Augmented by Larger Independent Set it follows that if $M$ satisfies condition $(\text I 4)$ then $M$ satisfies condition $(\text I 5)$.
$\Box$


Definition 3 implies Definition 1
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
$\Box$


Definition 1 implies Definition 4
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
$\Box$


Definition 4 implies Definition 1
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


Sources
1976: Dominic Welsh: Matroid Theory ... (previous) ... (next) Chapter $1.$ $\S 5.$ Properties of independent sets and bases, Theorem $2$
2018: Bernhard H. Korte and Jens Vygen: Combinatorial Optimization: Theory and Algorithms (6th ed.) Chapter $13$ Matroids $\S 13.1$ Independence Systems and Matroids, Theorem $13.5$




