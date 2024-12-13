# 

Source: https://proofwiki.org/wiki/Intersection_with_Set_Difference_is_Set_Difference_with_Intersection

Theorem
Let $R, S, T$ be sets.

Then:

$\left({R \setminus S}\right) \cap T = \left({R \cap T}\right) \setminus S$
where:

$R \setminus S$ denotes set difference
$R \cap T$ denotes set intersection.


Proof 1
Consider $R, S, T \subseteq \mathbb U$, where $\mathbb U$ is considered as the universe.

Then:














\(\ds \paren {R \setminus S} \cap T\)

\(=\)







\(\ds \paren {R \cap \map \complement S} \cap T\)





Set Difference as Intersection with Complement














\(\ds \)

\(=\)







\(\ds \paren {R \cap T} \cap \map \complement S\)





Intersection is Commutative and Intersection is Associative














\(\ds \)

\(=\)







\(\ds \paren {R \cap T} \setminus S\)





Set Difference as Intersection with Complement



$\blacksquare$


Proof 2













\(\ds \)

\(\)







\(\ds x \in \paren {R \setminus S} \cap T\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \)

\(\)







\(\ds \paren {x \in R \land x \notin S} \land x \in T\)





Definition of Set Intersection and Definition of Set Difference








\(\ds \leadstoandfrom \ \ \)





\(\ds \)

\(\)







\(\ds \paren {x \in R \land x \in T} \land x \notin S\)





Rule of Commutation and Rule of Association








\(\ds \leadstoandfrom \ \ \)





\(\ds \)

\(\)







\(\ds x \in \paren {R \cap T} \setminus S\)





Definition of Set Intersection and Definition of Set Difference



$\blacksquare$





