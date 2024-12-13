# 

Source: https://proofwiki.org/wiki/Kuratowski%27s_Closure-Complement_Problem/Complement

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




The complement of $A$ in $\R$ is given by:














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





... adjacent to Half-Open Real Interval














\(\ds \)

\(\)





\(\, \ds \cup \, \)

\(\ds \paren {\paren {\R \setminus \Q} \cap \closedint 4 5}\)





Irrational Numbers from $4$ to $5$














\(\ds \)

\(\)





\(\, \ds \cup \, \)

\(\ds \hointr 5 \to\)





Definition of Unbounded Closed Real Interval








Proof
For ease of analysis, let:

$A_1 := \openint 0 1$
$A_2 := \openint 1 2$
$A_3 := \set 3$
$A_4 := \Q \cap \openint 4 5$
Thus:

$\ds A = \bigcup_{i \mathop = 1}^4 A_i$

By De Morgan's Laws:

$\ds A' := \R \setminus A = \bigcap_{i \mathop = 1}^4 \paren {\R \setminus A_i}$















\(\ds \R \setminus A_1\)

\(=\)







\(\ds \hointl \gets 0 \cup \hointr 1 \to\)




















\(\ds \R \setminus A_2\)

\(=\)







\(\ds \hointl \gets 1 \cup \hointr 2 \to\)




















\(\ds \R \setminus A_3\)

\(=\)







\(\ds \openint \gets 3 \cup \openint 3 \to\)




















\(\ds \R \setminus A_4\)

\(=\)







\(\ds \hointl \gets 4 \cup \paren {\R \setminus \Q} \cup \hointr 5 \to\)





De Morgan's Laws



from which the result follows by inspection.
$\blacksquare$





