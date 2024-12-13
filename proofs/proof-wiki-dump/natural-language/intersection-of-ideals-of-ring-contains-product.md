# 

Source: https://proofwiki.org/wiki/Intersection_of_Ideals_of_Ring_contains_Product

Theorem
Let $R$ be a ring.
Let $I$ be a right ideal of $R$.
Let $J$ be a left ideal of $R$.
Let $I J$ be their product.

Then $I J \subseteq I \cap J$.


Proof
Let $a_1, \ldots, a_n \in I$ and $b_1, \ldots, b_n \in J$ be arbitrary.
Then:










\(\ds \forall k \in \set {1, \ldots, n}: \, \)



\(\ds a_k b_k\)

\(\in\)







\(\ds I\)





Definition of Right Ideal of Ring








\(\ds \leadsto \ \ \)





\(\ds \sum_{k \mathop = 1}^n a_k b_k\)

\(\in\)







\(\ds I\)









and:










\(\ds \forall k \in \set {1, \ldots, n}: \, \)



\(\ds a_k b_k\)

\(\in\)







\(\ds J\)





Definition of Left Ideal of Ring








\(\ds \leadsto \ \ \)





\(\ds \sum_{k \mathop = 1}^n a_k b_k\)

\(\in\)







\(\ds J\)









By definition of set intersection:

$\ds \sum_{k \mathop = 1}^n a_k b_k \in I \cap J$
As $a_1, \ldots, a_n$ and $b_1, \ldots, b_n$ were arbitrary, this completes the proof.
$\blacksquare$





