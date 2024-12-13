# 

Source: https://proofwiki.org/wiki/Kuratowski%27s_Closure-Complement_Problem/Closure_of_Interior_of_Complement

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




The closure of the interior of the complement of $A$ in $\R$ is given by:














\(\ds A^{\prime \, \circ \, -}\)

\(=\)







\(\ds \hointl \gets 0\)





Definition of Unbounded Closed Real Interval














\(\ds \)

\(\)





\(\, \ds \cup \, \)

\(\ds \closedint 2 4\)





Definition of Closed Real Interval














\(\ds \)

\(\)





\(\, \ds \cup \, \)

\(\ds \hointr 5 \to\)





Definition of Unbounded Closed Real Interval








Proof
From Kuratowski's Closure-Complement Problem: Exterior:














\(\ds A^e\)

\(=\)







\(\ds \openint \gets 0\)





Definition of Unbounded Open Real Interval














\(\ds \)

\(\)





\(\, \ds \cup \, \)

\(\ds \openint 2 3 \cup \openint 3 4\)





Definition of Union of Adjacent Open Intervals














\(\ds \)

\(\)





\(\, \ds \cup \, \)

\(\ds \openint 5 \to\)





Definition of Unbounded Open Real Interval



From Closure of Open Real Interval is Closed Real Interval:

$\openint \gets 0^- = \hointl \gets 0$
and:

$\openint 5 \to^- = \hointr 5 \to$

From Closure of Union of Adjacent Open Intervals:

$\paren {\openint 2 3 \cup \openint 3 4}^- = \closedint 2 4$

The result follows from Closure of Finite Union equals Union of Closures.
$\blacksquare$





