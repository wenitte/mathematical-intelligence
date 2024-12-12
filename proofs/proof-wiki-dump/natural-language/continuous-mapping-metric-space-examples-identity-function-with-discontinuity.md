# 

Source: https://proofwiki.org/wiki/Continuous_Mapping_(Metric_Space)/Examples/Identity_Function_with_Discontinuity

Example of Non-Continuous Mapping
Let $f: \R \to \R$ be the real function defined as:

$\forall x \in \R: \map f x = \begin {cases} x & : x \ne 0 \\ 1 & : x = 0 \end {cases}$
Then $f$ is not continuous.


Proof
Let $U \subseteq \R$ be the open set $\openint 0 \to$.
Then:

$f^{-1} \sqbrk U = \hointr 0 \to$
Note that we have $0 \in f^{-1} \sqbrk U$.
Let $\epsilon \in \R_{>0}$ be arbitrary.
Then:














\(\ds \openint {-\epsilon} 0\)

\(\nsubseteq\)







\(\ds U\)














\(\ds \leadsto \ \ \)



\(\, \ds \not \exists \epsilon \in \R_{>0}: \, \)

\(\ds \map {B_\epsilon} 0\)

\(\subseteq\)







\(\ds U\)









and so $f^{-1} \sqbrk U$ is not open in $\R$.
Thus an open set does not necessarily have an open preimage.
Hence $f$ is not continuous by definition.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: $2.3$: Open sets in metric spaces: Example $2.3.15$




