# 

Source: https://proofwiki.org/wiki/Minimally_Inductive_Set_is_Ordinal/Proof_1



Theorem
Let $\omega$ denote the minimally inductive set.

Then $\omega$ is an ordinal.


Proof
The minimally inductive set is a set of ordinals by definition.
From the corollary of ordinals are well-ordered, it is seen that $\left({\omega, \Epsilon \! \restriction_\omega}\right)$ is a strictly well-ordered set.
It is to be shown by induction on minimally inductive set that $\forall n \in \omega: \omega_n = n$


Basis for the Induction













\(\ds \omega_\O\)

\(=\)







\(\ds \set {x \in \omega: x \in \O}\)





Definition of Initial Segment














\(\ds \)

\(=\)







\(\ds \O\)





Definition of Empty Set





Induction Hypothesis
Suppose that $\omega_n = n$ for some $n \in \omega$.


Induction Step













\(\ds \omega_{n^+}\)

\(=\)







\(\ds \set {x \in \omega: x \in n^+}\)




















\(\ds \)

\(=\)







\(\ds \set {x \in \omega: x \in n \lor x \in \set n}\)





Definition of Successor Set














\(\ds \)

\(=\)







\(\ds \set {x \in \omega: x \in n \lor x = n}\)





Definition of Singleton














\(\ds \)

\(=\)







\(\ds \set {x \in \omega: x \in n} \cup \set {x \in \omega: x = n}\)





Definition of Set Union














\(\ds \)

\(=\)







\(\ds \omega_n \cup \set n\)




















\(\ds \)

\(=\)







\(\ds n \cup \set n\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds n^+\)





Definition of Successor Set




And so $\omega$ is an ordinal.
$\blacksquare$





