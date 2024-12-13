# 

Source: https://proofwiki.org/wiki/Minimally_Inductive_Set_is_Ordinal



Theorem
Let $\omega$ denote the minimally inductive set.

Then $\omega$ is an ordinal.


Proof 1
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


Proof 2
Let $K_I$ denote the set of all nonlimit ordinals.
Let $\On$ denote the set of all ordinals.
Let $a \in \omega$.
It follows that $a^+ \subseteq K_I$, so $a \in K_I$.
Thus:

$\omega \subseteq K_I \subseteq \On$

We now must prove that $\omega$ is a transitive set, at which point it will satisfy the Alternative Definition of Ordinal.
Let $x \in y$ and $y \in \omega$.
Then:

$y \in \On \land y^+ \subseteq K_I$
Because $y$ is an ordinal, it is transitive.
Therefore:

$x \subseteq y$
and:

$x^+ \subseteq y^+ \subseteq K_I$
Therefore, $x^+ \subseteq K_I$.
Applying the definition of minimally inductive set:

$x \in \omega$
so $\omega$ is transitive.
$\blacksquare$


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 7.32$




