# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Ring_of_Sets



Theorem
The following definitions of the concept of Ring of Sets are equivalent:

Definition 1
A system of sets  $\RR$ is a ring of sets if and only if $\RR$ satisfies the ring of sets axioms:




\((\text {RS} 1_1)\)  

$:$  



Non-Empty:   



\(\ds \RR \ne \O \)   







  


\((\text {RS} 2_1)\)  

$:$  



Closure under Intersection:   

  \(\ds \forall A, B \in \RR:\)

\(\ds A \cap B \in \RR \)   







  


\((\text {RS} 3_1)\)  

$:$  



Closure under Symmetric Difference:   

  \(\ds \forall A, B \in \RR:\)

\(\ds A \symdif B \in \RR \)   







  



Definition 2
A system of sets  $\RR$ is a ring of sets if and only if $\RR$ satisfies the ring of sets axioms:




\((\text {RS} 1_2)\)  

$:$  



Empty Set:   



\(\ds \O \in \RR \)   







  


\((\text {RS} 2_2)\)  

$:$  



Closure under Set Difference:   

  \(\ds \forall A, B \in \RR:\)

\(\ds A \setminus B \in \RR \)   







  


\((\text {RS} 3_2)\)  

$:$  



Closure under Union:   

  \(\ds \forall A, B \in \RR:\)

\(\ds A \cup B \in \RR \)   







  



Definition 3
A system of sets  $\RR$ is a ring of sets if and only if $\RR$ satisfies the ring of sets axioms:




\((\text {RS} 1_3)\)  

$:$  



Empty Set:   



\(\ds \O \in \RR \)   







  


\((\text {RS} 2_3)\)  

$:$  



Closure under Set Difference:   

  \(\ds \forall A, B \in \RR:\)

\(\ds A \setminus B \in \RR \)   







  


\((\text {RS} 3_3)\)  

$:$  



Closure under Disjoint Union:   

  \(\ds \forall A, B \in \RR:\)

\(\ds A \cap B = \O \implies A \cup B \in \RR \)   







  



Proof
Definition 1 implies Definition 2
Let $\RR$ be a system of sets such that for all $A, B \in \RR$:

$(\text {RS} 1_1): \quad \RR \ne \O$
$(\text {RS} 2_1): \quad A \cap B \in \RR$
$(\text {RS} 3_1): \quad A \symdif B \in \RR$
As $\RR$ is non-empty, there exists some $A \in \RR$.
From Symmetric Difference with Self is Empty Set:

$A \symdif A = \O$
By hypothesis $A \symdif A \in \RR$ and so $\O \in \RR$.
Thus criterion $(\text {RS} 1_2)$ is fulfilled.

From Closure of Intersection and Symmetric Difference imply Closure of Set Difference it follows that criterion $(\text {RS} 2_2)$ is fulfilled.

From Closure of Intersection and Symmetric Difference imply Closure of Union it follows that criterion $(\text {RS} 3_2)$ is fulfilled.
$\Box$


Definition 2 implies Definition 1
Let $\RR$ be a system of sets such that for all $A, B \in \RR$:

$(\text {RS} 1_2): \quad \O \in \RR$
$(\text {RS} 2_2): \quad A \setminus B \in \RR$
$(\text {RS} 3_2): \quad A \cup B \in \RR$
We have that $\O \in \RR$ and so $\RR$ is non-empty.
Thus criterion $(\text {RS} 1_1)$ is fulfilled.

By hypothesis, $\RR$ is closed under $\setminus$ and $\cup$.
Thus:

$\forall A, B \in \RR: \paren {A \setminus B} \cup \paren {B \setminus A} \in \RR$
But by the definition of symmetric difference:

$A \symdif B := \paren {A \setminus B} \cup \paren {B \setminus A}$
Thus:

$\forall A, B \in \RR: A \symdif B \in \RR$
and so $\RR$ is closed under symmetric difference.
Thus criterion $(\text {RS} 3_1)$ is fulfilled.

From Union minus Symmetric Difference equals Intersection:

$\forall A, B \in \RR: \paren {A \cup B} \setminus \paren {A \symdif B} = A \cap B$
Thus $\RR$ is closed under set intersection.
Thus criterion $(\text {RS} 2_1)$ is fulfilled.
$\Box$


Definition 2 iff Definition 3
Let $\RR$ be a system of sets such that for all $A, B \in \RR$:

$(\text {RS} 1_2): \quad \O \in \RR$
$(\text {RS} 2_2): \quad A \setminus B \in \RR$
$(\text {RS} 3_2): \quad A \cup B \in \RR$
Criteria $(\text {RS} 1_3)$ and $(\text {RS} 2_3)$ are fulfilled immediately.

Consider $A, B \in \RR: A \cap B = \O$.
Then as $A, B \in \RR$ it follows by $(\text {RS} 3_2)$ that $A \cup B \in \RR$ and so $(\text {RS} 3_3)$ is fulfilled.

Now let $\RR$ be a system of sets such that for all $A, B \in \RR$:

$(\text {RS} 1_3): \quad \O \in \RR$
$(\text {RS} 2_3): \quad A \setminus B \in \RR$
$(\text {RS} 3_3): \quad A \cap B = \O \implies A \cup B \in \RR$
Again, criteria $(\text {RS} 1_2)$ and $(\text {RS} 2_2)$ are fulfilled immediately.

Let $A, B \in \RR$.
Then from Set Difference Union Second Set is Union:

$A \cup B = \paren {A \setminus B} \cup B$
From Set Difference Intersection with Second Set is Empty Set:

$\paren {A \setminus B} \cap B = \O$
Thus from $(\text {RS} 3_3)$:

$A \cup B = \paren {A \setminus B} \cup B \in \RR$
$\blacksquare$


Sources
1970: Avner Friedman: Foundations of Modern Analysis ... (previous) ... (next): $\S 1.1$: Rings and Algebras




