# 

Source: https://proofwiki.org/wiki/Positive_Image_of_Point_of_Continuous_Real_Function_implies_Positive_Closed_Interval_of_Domain

Theorem
Let $f: \R \to \R$ be a continuous real function.
Let $a \in \R$ such that $\map f a > 0$.

Then:

$\exists k \in \R_{>0}: \exists \delta \in \R_{>0}: \forall x \in \closedint {a - \delta} {a + \delta}: \map f x \ge k$


Proof
Let $\map f a = l$ where $l > 0$.
As $f$ is continuous:

$\forall \epsilon \in \R_{>0}: \exists \delta \in \R_{>0}: \size {y - x} < \delta \implies \size {\map f y - \map f x} < \epsilon$
Let $\epsilon = \dfrac l 2 = k$.
Then:

$\exists \delta' \in \R_{>0}: \forall y \in \R: \size {y - x} < \delta' \implies \size {\map f y - \map f a} < \dfrac l 2$
Thus:

$\forall x \in \openint {a - \delta'} {a + \delta'}: \map f x > \dfrac l 2$
Let $\delta = \dfrac {\delta'} 2$
Then $a - \delta \in \openint {a - \delta'} {a + \delta'}$ and $a + \delta \in \openint {a - \delta'} {a + \delta'}$.
Thus:

$\closedint {a - \delta} {a + \delta} \subseteq \openint {a - \delta'} {a + \delta'}$
and hence the result.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 4$: Open Balls and Neighborhoods: Exercise $8$




