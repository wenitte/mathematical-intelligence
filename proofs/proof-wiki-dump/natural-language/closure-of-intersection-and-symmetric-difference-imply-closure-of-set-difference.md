# 

Source: https://proofwiki.org/wiki/Closure_of_Intersection_and_Symmetric_Difference_imply_Closure_of_Set_Difference

Theorem
Let $\RR$ be a system of sets such that for all $A, B \in \RR$:

$(1): \quad A \cap B \in \RR$
$(2): \quad A \symdif B \in \RR$
where $\cap$ denotes set intersection and $\symdif$ denotes set symmetric difference.

Then:

$\forall A, B \in \RR: A \setminus B \in \RR$
where $\setminus$ denotes set difference.


Proof
Let $A, B \in \RR$.
From Set Difference as Symmetric Difference with Intersection:

$A \symdif \paren {A \cap B} = A \setminus B$
By hypothesis:

$A \cap B \in \RR$
and:

$A \symdif \paren {A \cap B} \in \RR$
and so:

$A \setminus B \in \RR$
$\blacksquare$





