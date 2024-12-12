# 

Source: https://proofwiki.org/wiki/Complement_in_Boolean_Algebra_is_Unique

Theorem
Let $\left({S, \vee, \wedge}\right)$ be a Boolean algebra.

Then for all $a \in S$, there is a unique $b \in S$ such that:

$a \wedge b = \bot, a \vee b = \top$
i.e., a valid choice for $\neg a$ as in axiom $(BA \ 4)$ for Boolean algebras.


Proof
Suppose $b, c \in S$ both satisfy the identities.
Then:














\(\ds b\)

\(=\)







\(\ds b \wedge \top\)





$\top$ is the identity for $\wedge$














\(\ds \)

\(=\)







\(\ds b \wedge \left({a \vee c}\right)\)





by hypothesis














\(\ds \)

\(=\)







\(\ds \left({b \wedge a}\right) \vee \left({b \wedge c}\right)\)





$\wedge$ distributes over $\vee$














\(\ds \)

\(=\)







\(\ds \bot \vee \left({b \wedge c}\right)\)





by hypothesis














\(\ds \)

\(=\)







\(\ds \left({a \wedge c}\right) \vee \left({b \wedge c}\right)\)





Axiom $(BA \ 4)$














\(\ds \)

\(=\)







\(\ds \left({a \vee b}\right) \wedge c\)





$\wedge$ distributes over $\vee$














\(\ds \)

\(=\)







\(\ds \top \wedge c\)





by hypothesis














\(\ds \)

\(=\)







\(\ds c\)





$\top$ is the identity for $\wedge$



That is, $b = c$.
The result follows.
$\blacksquare$





