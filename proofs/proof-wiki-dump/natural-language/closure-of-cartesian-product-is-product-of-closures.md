# 

Source: https://proofwiki.org/wiki/Closure_of_Cartesian_Product_is_Product_of_Closures



Theorem
Let $T_1 = \struct {S_1, \tau_1}$ and $T_2 = \struct {S_2, \tau_2}$ be topological spaces.
Let $T = \struct {T_1 \times T_2, \tau}$ be the product space of $T_1$ and $T_2$, where $\tau$ is the product topology on $S$.
Let $H \subseteq T_1$ and $K \subseteq T_2$.

Then:

$\map \cl {H \times K} = \map \cl H \times \map \cl K$
where $\map \cl H$, for example, denotes the closure of $H$.

Indexed Family
Closure of Cartesian Product is Product of Closures/Family

Proof
Consider the relative complements of $H$ and $K$ in $T_1$ and $T_2$ respectively:

$\overline H = \relcomp {S_1} H$
$\overline K = \relcomp {S_2} K$

Then from Interior of Cartesian Product is Product of Interiors:

$\Int {\overline H \times \overline K} = \Int {\overline H} \times \Int {\overline K}$

From Complement of Interior equals Closure of Complement:

$\map \cl H = \Int {\overline H}$
$\map \cl K = \Int {\overline K}$
$\map \cl {H \times K} = \Int {\overline H \times \overline K}$

The validity of the material on this page is questionable.In particular: The complement of $H \times K$ is not $\overline H \times \overline K$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Questionable}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Hence the result.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: Exercise $3.9: 35 \ \text {(ii)}$




