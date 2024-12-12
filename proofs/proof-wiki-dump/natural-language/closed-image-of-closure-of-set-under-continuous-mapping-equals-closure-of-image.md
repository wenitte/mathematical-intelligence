# 

Source: https://proofwiki.org/wiki/Closed_Image_of_Closure_of_Set_under_Continuous_Mapping_equals_Closure_of_Image

Theorem
Let $T_1 = \struct {S_1, \tau_1}$ and $T_2 = \struct {S_2, \tau_2}$ be topological spaces.
Let $H \subseteq S_1$ be a subset of $S_1$.
Let $\map \cl H$ denote the closure of $H$.
Let $f: T_1 \to T_2$ be a continuous mapping.
Let $f \sqbrk {\map \cl H}$ be closed in $T_2$.

Then:

$f \sqbrk {\map \cl H} = \map \cl {f \sqbrk H}$


Proof
By Continuity Defined by Closure:

$f \sqbrk {\map \cl H} \subseteq \map \cl {f \sqbrk H}$
$\Box$















\(\ds H\)

\(\subseteq\)







\(\ds \map \cl H\)





Set is Subset of its Topological Closure








\(\ds \leadsto \ \ \)





\(\ds f \sqbrk H\)

\(\subseteq\)







\(\ds f \sqbrk {\map \cl H}\)





Image of Subset is Subset of Image




We are given that $f \sqbrk {\map \cl H}$ is closed in $T_2$, hence:






\(\ds \leadsto \ \ \)





\(\ds \map \cl {f \sqbrk H}\)

\(\subseteq\)







\(\ds f \sqbrk {\map \cl H}\)





Closure of Subset of Closed Set of Topological Space is Subset



$\Box$

The proof follows by definition of set equality.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: Exercise $3.9: 26$




