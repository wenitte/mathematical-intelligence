# 

Source: https://proofwiki.org/wiki/Kuratowski%27s_Closure-Complement_Problem/Closure_of_Complement

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




The closure of the complement of $A$ in $\R$ is given by:














\(\ds A^{\prime \, -}\)

\(=\)







\(\ds \hointl \gets 0\)





Definition of Unbounded Closed Real Interval














\(\ds \)

\(\)





\(\, \ds \cup \, \)

\(\ds \set 1\)





Definition of Singleton














\(\ds \)

\(\)





\(\, \ds \cup \, \)

\(\ds \hointr 2 \to\)





Definition of Unbounded Closed Real Interval








Proof
From Kuratowski's Closure-Complement Problem: Complement:














\(\ds A'\)

\(=\)







\(\ds \hointl \gets 0\)





Definition of Unbounded Closed Real Interval














\(\ds \)

\(\)





\(\, \ds \cup \, \)

\(\ds \set 1\)





Definition of Singleton














\(\ds \)

\(\)





\(\, \ds \cup \, \)

\(\ds \hointr 2 3\)





Definition of Half-Open Real Interval














\(\ds \)

\(\)





\(\, \ds \cup \, \)

\(\ds \hointl 3 4\)





adjacent to Half-Open Real Interval














\(\ds \)

\(\)





\(\, \ds \cup \, \)

\(\ds \paren {\R \setminus \Q \cap \closedint 4 5}\)





Irrational Numbers from $4$ to $5$














\(\ds \)

\(\)





\(\, \ds \cup \, \)

\(\ds \hointr 5 \to\)





Definition of Unbounded Closed Real Interval



From Real Number is Closed in Real Number Line:

$\set 3$ is closed in $\R$
and:

$\hointl \gets 0$ is closed in $\R$
and:

$\hointr 5 \to$ is closed in $\R$
Then from Set is Closed iff Equals Topological Closure:

$\set 3^- = \set 3$
$\hointl \gets 0^- = \hointl \gets 0$
$\hointr 5 \to^- = \hointr 5 \to$

From Closure of Half-Open Real Interval is Closed Real Interval:

$\hointr 2 3 = \closedint 2 3$
and:

$\hointl 3 4 = \closedint 3 4$

From Closure of Irrational Interval is Closed Real Interval:

$\paren {\R \setminus \Q \cap \closedint 4 5}^- = \closedint 4 5$

From Closure of Finite Union equals Union of Closures:














\(\ds A^{\prime \, -}\)

\(=\)







\(\ds \hointl \gets 0\)





Definition of Unbounded Closed Real Interval














\(\ds \)

\(\)





\(\, \ds \cup \, \)

\(\ds \set 1\)





Definition of Singleton














\(\ds \)

\(\)





\(\, \ds \cup \, \)

\(\ds \closedint 2 3\)





Definition of Closed Real Interval














\(\ds \)

\(\)





\(\, \ds \cup \, \)

\(\ds \closedint 3 4\)





Definition of Closed Real Interval














\(\ds \)

\(\)





\(\, \ds \cup \, \)

\(\ds \closedint 4 5\)





Definition of Closed Real Interval














\(\ds \)

\(\)





\(\, \ds \cup \, \)

\(\ds \hointr 5 \to\)





Definition of Unbounded Closed Real Interval



The result follows.
$\blacksquare$





