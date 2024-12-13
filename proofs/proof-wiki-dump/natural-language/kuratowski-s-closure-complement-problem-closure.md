# 

Source: https://proofwiki.org/wiki/Kuratowski%27s_Closure-Complement_Problem/Closure

Theorem
Let $\R$ be the real number line with the usual (Euclidean) topology.
Let $A \subseteq \R$ be defined as:














\(\ds A\)

\(:=\)







\(\ds \openint 0 1 \cup \openint 1 2\)





Definition of Union of Adjacent Open Intervals














\(\ds \)

\(\)





\(\, \ds \cup \, \)

\(\ds \set 3\)





Definition of Singleton














\(\ds \)

\(\)





\(\, \ds \cup \, \)

\(\ds \paren {\Q \cap \openint 4 5}\)





Rational Numbers from $4$ to $5$ (not inclusive)




The closure of $A$ in $\R$ is given by:














\(\ds A^-\)

\(=\)







\(\ds \closedint 0 2\)





Definition of Closed Real Interval














\(\ds \)

\(\)





\(\, \ds \cup \, \)

\(\ds \set 3\)





Definition of Singleton














\(\ds \)

\(\)





\(\, \ds \cup \, \)

\(\ds \closedint 4 5\)





Definition of Closed Real Interval








Proof
From Closure of Union of Adjacent Open Intervals:

$\paren {\openint 0 1 \cup \openint 1 2}^- = \closedint 0 2$

From Real Number is Closed in Real Number Line:

$\set 3$ is closed in $\R$
From Set is Closed iff Equals Topological Closure:

$\set 3^- = \set 3$

From Closure of Rational Interval is Closed Real Interval:

$\paren {\Q \cap \openint 4 5 }^- = \closedint 4 5$

The result follows from Closure of Finite Union equals Union of Closures.
$\blacksquare$





