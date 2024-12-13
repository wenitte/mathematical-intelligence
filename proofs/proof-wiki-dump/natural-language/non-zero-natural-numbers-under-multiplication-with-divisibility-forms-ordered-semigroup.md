# 

Source: https://proofwiki.org/wiki/Non-Zero_Natural_Numbers_under_Multiplication_with_Divisibility_forms_Ordered_Semigroup

Theorem
Let $\N_{>0}$ be the set of natural numbers without zero, that is, $\N_{>0} = \N \setminus \set 0$.
Let $\divides$ denote the divisibility relation on $\N_{>0}$:

$\forall a, b \in \N_{>0}: a \divides b \iff \exists k \in \Z: k \times a = b$
where $\times$ denotes conventional integer multiplication.

The ordered structure $\struct {\N_{>0}, \times, \divides}$ forms an ordered semigroup.


Proof
First we note that from Non-Zero Natural Numbers under Multiplication form Commutative Semigroup, $\struct {\N_{>0}, \times}$ is a semigroup.
From Divisor Relation on Positive Integers is Partial Ordering, $\struct {\N_{>0}, \divides}$ is an ordered set.
It remains to be shown that $\divides$ is compatible with $\times$.
Let $a, b \in \N_{>0}$ such that $a \divides b$.
We have:














\(\ds a\)

\(\divides\)







\(\ds b\)














\(\ds \leadsto \ \ \)

\(\ds \exists k \in \Z: \, \)



\(\ds k \times a\)

\(=\)







\(\ds b\)





Definition of Divisor of Integer








\(\ds \leadsto \ \ \)

\(\ds \forall m \in \N_{>0}: \, \)



\(\ds m \times k \times a\)

\(=\)







\(\ds m \times b\)














\(\ds \leadsto \ \ \)





\(\ds k \times \paren {m \times a}\)

\(=\)







\(\ds m \times b\)














\(\ds \leadsto \ \ \)





\(\ds m \times a\)

\(\divides\)







\(\ds m \times b\)





Definition of Divisor of Integer



Similarly:














\(\ds a\)

\(\divides\)







\(\ds b\)














\(\ds \leadsto \ \ \)

\(\ds \exists k \in \Z: \, \)



\(\ds k \times a\)

\(=\)







\(\ds b\)





Definition of Divisor of Integer








\(\ds \leadsto \ \ \)

\(\ds \forall m \in \N_{>0}: \, \)



\(\ds k \times a \times m\)

\(=\)







\(\ds b \times m\)














\(\ds \leadsto \ \ \)





\(\ds k \times \paren {a \times m}\)

\(=\)







\(\ds b \times m\)














\(\ds \leadsto \ \ \)





\(\ds a \times m\)

\(\divides\)







\(\ds b \times m\)





Definition of Divisor of Integer



Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 15$: Ordered Semigroups: Exercise $15.9$




