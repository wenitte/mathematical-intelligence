# 

Source: https://proofwiki.org/wiki/Open_Ball_in_Real_Number_Line_is_Open_Interval



Theorem
Let $\struct {\R, d}$ denote the real number line $\R$ with the usual (Euclidean) metric $d$.
Let $x \in \R$ be a point in $\R$.
Let $\map {B_\epsilon} x$ be the open $\epsilon$-ball at $x$.

Then $\map {B_\epsilon} x$ is the open interval $\openint {x - \epsilon} {x + \epsilon}$.


Proof
Let $S = \map {B_\epsilon} x$ be an open $\epsilon$-ball at $x$.
Let $y \in \map {B_\epsilon} x$.
Then:














\(\ds y\)

\(\in\)

\(\, \ds \map {B_\epsilon} x \, \)





\(\ds \)














\(\ds \leadstoandfrom \ \ \)





\(\ds \map d {y, x}\)

\(<\)

\(\, \ds \epsilon \, \)





\(\ds \)





Definition of Open $\epsilon$-Ball








\(\ds \leadstoandfrom \ \ \)





\(\ds \size {y - x}\)

\(<\)

\(\, \ds \epsilon \, \)





\(\ds \)





Definition of Euclidean Metric on Real Number Line








\(\ds \leadstoandfrom \ \ \)





\(\ds -\epsilon\)

\(<\)

\(\, \ds y - x \, \)

\(\, \ds < \, \)



\(\ds \epsilon\)





Definition of Absolute Value








\(\ds \leadstoandfrom \ \ \)





\(\ds x - \epsilon\)

\(<\)

\(\, \ds y \, \)

\(\, \ds < \, \)



\(\ds x + \epsilon\)














\(\ds \leadstoandfrom \ \ \)





\(\ds y\)

\(\in\)

\(\, \ds \openint {x - \epsilon} {x + \epsilon} \, \)





\(\ds \)





Definition of Open Real Interval



As the implications go both ways:

$\map {B_\epsilon} x \subseteq \openint {x - \epsilon} {x + \epsilon}$
and

$\map {B_\epsilon} x \supseteq \openint {x - \epsilon} {x + \epsilon}$
By definition of set equality:

$\map {B_\epsilon} x = \openint {x - \epsilon} {x + \epsilon}$
Hence the result.
$\blacksquare$


Also see
Open Real Interval is Open Ball


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: $2.3$: Open sets in metric spaces: Example $2.3.2$




