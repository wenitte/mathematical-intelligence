# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Algebra_of_Sets



Theorem
The following definitions of the concept of Algebra of Sets are equivalent:

Definition 1
Let $S$ be a set.
Let $\powerset S$ be the power set of $S$.
Let $\RR \subseteq \powerset S$ be a set of subsets of $S$.

$\RR$ is an algebra of sets over $S$ if and only if $\RR$ satisfies the algebra of sets axioms:




\((\text {AS} 1)\)  

$:$  



Unit:   



\(\ds S \in \RR \)   







  


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







  



Definition 2
An algebra of sets is a ring of sets with a unit.


Proof
Definition 1 implies Definition 2
Let $\RR$ be a system of sets such that $\forall A, B \in \RR$:

$(1): \quad A \cup B \in \RR$
$(2): \quad \relcomp X A \in \RR$

Let $A, B \in \RR$.
From the definition:

$\forall A \in \RR: A \subseteq X$.
Hence from Intersection with Subset is Subset:

$\forall A \in \RR: A \cap X = A$
Hence $X$ is the unit of $\RR$.
From Properties of Algebras of Sets, we have that $\RR$ is closed under set intersection.

From the definition of symmetric difference:

$A \symdif B = \paren {A \setminus B} \cup \paren {B \setminus A}$
Since both set union and set difference are closed operations, it follows that symmetric difference is also closed.

So by definition 1 of ring of sets, it follows that $\RR$ is indeed a ring of sets.
$\Box$


Definition 2 implies Definition 1
Let $\RR$ be a ring of sets with a unit $X$.
By definition, $X \in \RR$.
From definition 2 of ring of sets, $\RR$ is:

$(1) \quad$ closed under set union
$(2) \quad$ closed under set difference.

From Unit of System of Sets is Unique, we have that:

$\forall A \in \RR: A \subseteq X$
from which we have that $X \setminus A = \relcomp X A$.

So $\RR$ is an algebra of sets by definition 1.
$\blacksquare$


Sources
1970: Avner Friedman: Foundations of Modern Analysis ... (previous) ... (next): $\S 1.1$: Rings and Algebras




