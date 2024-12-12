# 

Source: https://proofwiki.org/wiki/Closure_of_Intersection_and_Symmetric_Difference_imply_Closure_of_Union

Theorem
Let $\R R$ be a system of sets such that for all $A, B \in \RR$:

$(1): \quad A \cap B \in \RR$
$(2): \quad A \symdif B \in \RR$
where $\cap$ denotes set intersection and $\symdif$ denotes set symmetric difference.

Then:

$\forall A, B \in \RR: A \cup B \in \RR$
where $\cup$ denotes set union.


Proof
Let $A, B \in \RR$.
From Union as Symmetric Difference with Intersection‎:

$\paren {A \symdif B} \symdif \paren {A \cap B} = A \cup B$
By hypothesis:

$A \cap B \in \RR$
and:

$\paren {A \symdif B} \symdif \paren {A \cap B} \in \RR$
and so:

$A \cup B \in \RR$
$\blacksquare$





