# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Kuratowski_Closure_Operator



Theorem
The following definitions of the concept of Kuratowski Closure Operator are equivalent:

Definition 1
Let $S$ be a set.
Let $\cl: \powerset S \to \powerset S$ be a mapping from the power set of $S$ to itself.
Then $\cl$ is a Kuratowski closure operator if and only if it satisfies the following Kuratowski closure axioms for all $A, B \subseteq S$:




\((1)\)  

$:$  







\(\ds A \subseteq \map \cl A \)   







  $\cl$ is inflationary


\((2)\)  

$:$  







\(\ds \map \cl {\map \cl A} = \map \cl A \)   







  $\cl$ is idempotent


\((3)\)  

$:$  







\(\ds \map \cl {A \cup B} = \map \cl A \cup \map \cl B \)   







  $\cl$ preserves binary unions


\((4)\)  

$:$  







\(\ds \map \cl \O = \O \)   







  

Definition 2
Let $S$ be a set.
Let $\cl: \powerset S \to \powerset S$ be a mapping from the power set of $S$ to itself.
Then $\cl$ is a Kuratowski closure operator if and only if it satisfies the following axioms for all $A, B \subseteq X$:




\((1)\)  

$:$  













$\cl$ is a closure operator   

  


\((2)\)  

$:$  













$\map \cl {A \cup B} = \map \cl A \cup \map \cl B$   

  $\cl$ preserves binary unions


\((3)\)  

$:$  













$\map \cl \O = \O$   

  



Proof
Definition 2 implies Definition 1
A closure operator, by definition, is inflationary and idempotent.
Thus it follows immediately that Definition 2 implies Definition 1.


Definition 1 implies Definition 2
Let $X$ be a set.
Let $\cl$ be a Kuratowski closure operator on $X$ by Definition 1.
By definition of closure operator, it remains to be proved that $\cl$ is increasing.

Let $A \subseteq B \subseteq X$.
Then by Definition 1 and Union with Superset is Superset:

$\map \cl B = \map \cl {A \cup B} = \map \cl A \cup \map \cl B$
By Set is Subset of Union:

$\map \cl A \subseteq \map \cl A \cup \map \cl B = \map \cl B$
$\blacksquare$





