# 

Source: https://proofwiki.org/wiki/Closure_of_Preimage_under_Continuous_Mapping_is_not_necessarily_Preimage_of_Closure

Theorem
Let $T_1 = \struct {S_1, \tau_1}$ and $T_2 = \struct {S_2, \tau_2}$ be topological spaces.
Let $H \subseteq S_1$ be a subset of $S_1$.
Let $\map \cl H$ denote the closure of $H$.
Let $f: T_1 \to T_2$ be a continuous mapping.

Then it is not necessarily the case that:

$f^{-1} \sqbrk {\map \cl H} = \map \cl {f^{-1} \sqbrk H}$


Proof
Proof by Counterexample:
Let $\R$ be the real numbers under the usual (Euclidean) topology.

Let $f: \R \to \R$ be the real function:

$\forall x \in \R: \map f x = \begin {cases} -1 & : x \le -1 \\ x & : -1 \le x \le 1 \\ 1 & : x \ge 1 \end {cases}$
It is accepted that $f$ is a continuous mapping.

Let $H \subseteq \R$ be the subset of $\R$ defined as:














\(\ds H\)

\(=\)







\(\ds \openint 0 1\)





which is an open set in $\R$.








\(\ds \leadsto \ \ \)





\(\ds \map \cl H\)

\(=\)







\(\ds \closedint 0 1\)





Definition of Closure (Topology)








\(\ds \leadsto \ \ \)





\(\ds f^{-1} \sqbrk H\)

\(=\)







\(\ds \openint 0 1\)





Definition of $f$














\(\ds f^{-1} \sqbrk {\map \cl H}\)

\(=\)







\(\ds \R\)





Definition of $f$














\(\ds \map \cl {f^{-1} \sqbrk H}\)

\(=\)







\(\ds \closedint 0 1\)





Definition of Closure (Topology)



As can be seen:

$f^{-1} \sqbrk {\map \cl H} \ne \map \cl {f^{-1} \sqbrk H}$
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: Exercise $3.9: 27 \ \text {(ii)}$




