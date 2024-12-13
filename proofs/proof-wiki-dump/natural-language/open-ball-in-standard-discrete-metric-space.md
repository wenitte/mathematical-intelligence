# 

Source: https://proofwiki.org/wiki/Open_Ball_in_Standard_Discrete_Metric_Space

Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $d$ be the standard discrete metric on $M$.

Let $a \in A$.
Let $\map {B_\epsilon} {a; d}$ be an open $\epsilon$-ball of $a$ in $M$.

Then:

$\map {B_\epsilon} {a; d} = \begin {cases} \set a & : \epsilon \le 1 \\ A & : \epsilon > 1 \end {cases}$


Proof
Let $\epsilon \in \R_{>0}: \epsilon \le 1$.
Then:










\(\ds \forall x \in A: \, \)



\(\ds x\)

\(\ne\)







\(\ds a\)














\(\ds \leadsto \ \ \)





\(\ds \map d {x, a}\)

\(\ge\)







\(\ds \epsilon\)





Definition of Standard Discrete Metric








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\notin\)







\(\ds \map {B_\epsilon} {a; d}\)





Definition of Open $\epsilon$-Ball








\(\ds \leadsto \ \ \)





\(\ds \map {B_\epsilon} {a; d}\)

\(=\)







\(\ds \set a\)









$\Box$

Let $\epsilon \in \R_{>0}: \epsilon > 1$.
Then:










\(\ds \forall x \in A: \, \)



\(\ds \map d {x, a}\)

\(>\)







\(\ds \epsilon\)





Definition of Standard Discrete Metric








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds \map {B_\epsilon} {a; d}\)





Definition of Open $\epsilon$-Ball








\(\ds \leadsto \ \ \)





\(\ds \map {B_\epsilon} {a; d}\)

\(=\)







\(\ds A\)









Hence the result.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: $2.3$: Open sets in metric spaces: Example $2.3.4$




