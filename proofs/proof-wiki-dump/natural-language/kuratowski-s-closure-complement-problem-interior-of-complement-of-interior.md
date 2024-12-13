# 

Source: https://proofwiki.org/wiki/Kuratowski%27s_Closure-Complement_Problem/Interior_of_Complement_of_Interior

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




The interior of the complement of the interior of $A$ in $\R$ is given by:














\(\ds A^{\circ \, \prime \, \circ}\)

\(=\)







\(\ds \openint \gets 0\)





Definition of Unbounded Open Real Interval














\(\ds \)

\(\)





\(\, \ds \cup \, \)

\(\ds \openint 2 \to\)





Definition of Unbounded Open Real Interval








Proof
From Complement of Interior equals Closure of Complement:

$A^{\circ \, \prime} = A^{\prime \, -}$
From Kuratowski's Closure-Complement Problem: Closure of Complement:














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




From Interior of Closed Real Interval is Open Real Interval:

$\hointl \gets 0^\circ = \openint \gets 0$
and:

$\hointr 2 \to^\circ = \openint 2 \to$
From Interior of Singleton in Real Number Line is Empty:

$\set 1^\circ = \O$

This needs considerable tedious hard slog to complete it.In particular: Get past this: Interior of Union is not necessarily Union of InteriorsTo discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
$\blacksquare$





