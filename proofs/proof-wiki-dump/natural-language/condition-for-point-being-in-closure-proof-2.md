# 

Source: https://proofwiki.org/wiki/Condition_for_Point_being_in_Closure/Proof_2

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $H \subseteq S$.
Let $H^-$ denote the closure of $H$ in $T$.

Let $x \in S$.
Then $x \in H^-$ if and only if every open neighborhood of $x$ contains a point in $H$.


Proof
The condition to be proved is equivalent to showing that $x \in H^-$ if and only if, for every open neighborhood $U$ of $x$, the intersection $H \cap U$ is non-empty.

For $U \in \tau$, let $U^{\complement}$ denote the relative complement of $U$ in $S$.
By definition, $U^{\complement}$ is closed in $T$

We have that:














\(\ds H \cap U\)

\(=\)







\(\ds \O\)














\(\ds \leadstoandfrom \ \ \)





\(\ds H\)

\(\subseteq\)







\(\ds U^{\complement}\)





Empty Intersection iff Subset of Complement








\(\ds \leadstoandfrom \ \ \)





\(\ds H^-\)

\(\subseteq\)







\(\ds U^{\complement}\)





Set Closure is Smallest Closed Set in Topological Space








\(\ds \leadstoandfrom \ \ \)





\(\ds U\)

\(\subseteq\)







\(\ds \paren {H^-}^{\complement}\)





Relative Complement inverts Subsets and Relative Complement of Relative Complement








\(\ds \leadstoandfrom \ \ \)





\(\ds H^- \cap U\)

\(=\)







\(\ds \O\)









Thus:

$x \in U \iff x \notin H^-$
The result follows from the Rule of Transposition.
$\blacksquare$





