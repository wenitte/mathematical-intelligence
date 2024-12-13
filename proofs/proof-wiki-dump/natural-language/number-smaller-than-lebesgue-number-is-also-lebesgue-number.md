# 

Source: https://proofwiki.org/wiki/Number_Smaller_than_Lebesgue_Number_is_also_Lebesgue_Number

Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $\epsilon \in \R_{>0}$ be a Lebesgue number for $M$.
Let $\epsilon' \in \R_{>0}: \epsilon' < \epsilon$.

Then $\epsilon'$ is also a Lebesgue number for $M$.


Proof
By hypothesis, let $\epsilon \in \R_{>0}$ be a Lebesgue number for $M$.
Then by definition:

$\forall x \in A: \exists \map U x \in \UU: \map {B_\epsilon} x \subseteq \map U x$
where $\map {B_\epsilon} x$ is the open $\epsilon$-ball of $x$ in $M$.
Let $\epsilon' \in \R_{>0}: \epsilon' < \epsilon$.
Let $y \in \map {B_{\epsilon'} } x$.














\(\ds \map d {y, x}\)

\(<\)







\(\ds \epsilon'\)





Definition of Open Ball of Metric Space








\(\ds \leadsto \ \ \)





\(\ds \map d {y, x}\)

\(<\)







\(\ds \epsilon\)





as $\epsilon' < \epsilon$








\(\ds \leadsto \ \ \)





\(\ds y\)

\(\in\)







\(\ds \map {B_\epsilon} x\)





Definition of Open Ball of Metric Space








\(\ds \leadsto \ \ \)





\(\ds y\)

\(\in\)







\(\ds \map U x\)





Definition of Subset: $\map {B_\epsilon} x \subseteq \map U x$



That is:

$\map {B_{\epsilon'} } x \subseteq \map U x$
The result follows by definition of Lebesgue number.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $7.2$: Sequential compactness




