# 

Source: https://proofwiki.org/wiki/Closure_of_Union_and_Complement_imply_Closure_of_Set_Difference

Theorem
Let $\RR$ be a system of sets on a universe $\mathbb U$ such that for all $A, B \in \RR$:

$(1): \quad A \cup B \in \RR$
$(2): \quad \map \complement A \in \RR$
where $\cup$ denotes set union and $\complement$ denotes complement (relative to $\mathbb U$).

Then:

$\forall A, B \in \RR: A \setminus B \in \RR$
where $\setminus$ denotes set difference.


Proof
Let $A, B \in \RR$.














\(\ds A \setminus B\)

\(=\)







\(\ds A \cap \map \complement B\)





Set Difference as Intersection with Complement














\(\ds \)

\(=\)







\(\ds \map \complement {\map \complement A \cup B}\)





De Morgan's Laws: Complement of Intersection



As both set union and complement are closed in $\RR$ the result follows.
$\blacksquare$


Sources
1970: Avner Friedman: Foundations of Modern Analysis ... (previous) ... (next): $\S 1.1$: Rings and Algebras




