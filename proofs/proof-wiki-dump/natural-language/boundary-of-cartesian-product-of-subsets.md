# 

Source: https://proofwiki.org/wiki/Boundary_of_Cartesian_Product_of_Subsets

Theorem
Let $T_1 = \struct {S_1, \tau_1}$ and $T_2 = \struct {S_2, \tau_2}$ be topological spaces.
Let $T = \struct {T_1 \times T_2, \tau}$ be the product space of $T_1$ and $T_2$, where $\tau$ is the product topology on $S$.
Let $H \subseteq T_1$ and $K \subseteq T_2$.

Then:

$\map \partial {H \times K} = \paren {\map \partial H \times \map \cl K} \cup \paren {\map \cl H \times \map \partial K}$
where:

$\map \cl H$, for example, denotes the closure of $H$.
$\map \partial H$, for example, denotes the boundary of $H$.


Proof













\(\ds \map \partial {H \times K}\)

\(=\)







\(\ds \map \cl {H \times K} \setminus \Int {H \times K}\)





Definition of Boundary (Topology)














\(\ds \)

\(=\)







\(\ds \paren {\map \cl H \times \map \cl K} \setminus \Int {H \times K}\)





Closure of Cartesian Product is Product of Closures














\(\ds \)

\(=\)







\(\ds \paren {\map \cl H \times \map \cl K} \setminus \paren {\Int H \times \Int K}\)





Interior of Cartesian Product is Product of Interiors














\(\ds \)

\(=\)







\(\ds \paren {\map \cl H \times \paren {\map \cl K \setminus \Int K} } \cup \paren {\paren {\map \cl H \setminus \Int H} \times \map \cl K}\)





Set Difference of Cartesian Products














\(\ds \)

\(=\)







\(\ds \paren {\map \partial H \times \map \cl K} \cup \paren {\map \cl H \times \map \partial K}\)





Definition of Boundary (Topology)



$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: Exercise $3.9: 35 \ \text {(iii)}$




