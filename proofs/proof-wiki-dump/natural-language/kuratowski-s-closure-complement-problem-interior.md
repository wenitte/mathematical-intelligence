# 

Source: https://proofwiki.org/wiki/Kuratowski%27s_Closure-Complement_Problem/Interior

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




The interior of $A$ in $\R$ is given by:














\(\ds A^\circ\)

\(=\)







\(\ds \openint 0 1 \cup \openint 1 2\)





Union of Adjacent Open Intervals








Proof
From Interior equals Complement of Closure of Complement:

$A^\circ = A^{\prime \, - \, \prime}$
From Kuratowski's Closure-Complement Problem: Closure of Complement:














\(\ds A^{\prime \, -}\)

\(=\)







\(\ds \hointl \gets 0\)





Unbounded Closed Real Interval














\(\ds \)

\(\)





\(\, \ds \cup \, \)

\(\ds \set 1\)





Singleton














\(\ds \)

\(\)





\(\, \ds \cup \, \)

\(\ds \hointr 2 \to\)





Unbounded Closed Real Interval



It can be determined by inspection that:

$A^{\prime \, - \, \prime} = \openint 0 1 \cup \openint 1 2$
Hence the result.
$\blacksquare$





