# 

Source: https://proofwiki.org/wiki/Composition_of_Identification_Mappings_is_Identification_Mapping

Theorem
Let $T_1 = \struct {S_1, \tau_1}$ be a topological space.
Let $S_2$ and $S_3$ be sets.
Let $f_1: S_1 \to S_2$ and $f_2: S_2 \to S_3$ be mappings.
Let $\tau_2$ be the identification topology on $S_2$ with respect to $f_1$ and $\tau_1$.
Let $\tau_3$ be the identification topology on $S_3$ with respect to $f_2$ and $\tau_2$.

Let $\phi: S_1 \to S_3$ be the composition of $f_2$ with $f_1$:

$\phi = f_2 \circ f_1$

Then $\phi$ is itself an identification mapping. 


Proof
Suppose $V \subseteq S_3$ is an arbitrary subset.
We have the following chain of equivalences:














\(\ds V\)

\(\in\)







\(\ds \tau_3\)














\(\ds \leadstoandfrom \ \ \)





\(\ds f_2^{-1} \sqbrk V\)

\(\in\)







\(\ds \tau_2\)





$f_2$ is an identification mapping








\(\ds \leadstoandfrom \ \ \)





\(\ds f_1^{-1} \sqbrk {f_2^{-1} \sqbrk V}\)

\(\in\)







\(\ds \tau_1\)





$f_1$ is an identification mapping








\(\ds \leadstoandfrom \ \ \)





\(\ds \phi^{-1} \sqbrk V\)

\(\in\)







\(\ds \tau_1\)





Preimage of Subset under Composite Mapping



Thus, $\phi$ is an identification mapping.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: Exercise $3.9: 41$




