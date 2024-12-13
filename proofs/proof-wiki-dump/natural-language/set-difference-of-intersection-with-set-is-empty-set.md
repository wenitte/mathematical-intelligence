# 

Source: https://proofwiki.org/wiki/Set_Difference_of_Intersection_with_Set_is_Empty_Set

Theorem
The set difference of the intersection of two sets with one of those sets is the empty set.

Let $S, T$ be sets.

Then:

$\paren {S \cap T} \setminus S = \O$
$\paren {S \cap T} \setminus T = \O$


Proof
From Set Difference is Right Distributive over Set Intersection:

$\paren {R \cap S} \setminus T = \paren {R \setminus T} \cap \paren {S \setminus T}$

Hence:














\(\ds \paren {S \cap T} \setminus S\)

\(=\)







\(\ds \paren {S \setminus S} \cap \paren {T \setminus S}\)





Set Difference is Right Distributive over Set Intersection














\(\ds \)

\(=\)







\(\ds \O \cap \paren {T \setminus S}\)





Set Difference with Self is Empty Set














\(\ds \)

\(=\)







\(\ds \O\)





Intersection with Empty Set



$\Box$















\(\ds \paren {S \cap T} \setminus T\)

\(=\)







\(\ds \paren {T \cap S} \setminus T\)





Intersection is Commutative














\(\ds \)

\(=\)







\(\ds \O\)





from above



$\blacksquare$





