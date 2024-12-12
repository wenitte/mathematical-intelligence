# 

Source: https://proofwiki.org/wiki/Boundary_of_Compact_Convex_Set_with_Nonempty_Interior_is_Homeomorphic_to_Sphere

Theorem
Let $n \in \N_{> 0}$.
Let $C \subseteq \R^n$ be a compact convex subset of real Euclidean $n$-space.
Suppose that the interior $C^\circ$ is non-empty.
Then, the boundary $\partial C$ is homeomorphic to $\Bbb S^{n - 1}$, the unit $n - 1$-sphere.


Proof
Let $\bsx_0 \in C^\circ$ be an element of $C^\circ$.
Define $\phi : \R^n \setminus \set {\bsx_0} \to \Bbb S^{n - 1}$ as:

$\map \phi \bsx = \dfrac 1 {\norm {\bsx - \bsx_0}} \paren {\bsx - \bsx_0}$
As Normed Vector Space is Hausdorff Topological Vector Space, it follows that $\phi$ is continuous.

Define $\phi^* : \partial C \to \Bbb S^{n - 1}$ as:

$\map {\phi^*} \bsx = \map \phi \bsx$
which is well-defined as the boundary is disjoint from the interior by definition.
By Restriction of Continuous Mapping is Continuous:

$\phi^*$ is continuous.
$\Box$

It remains to show that $\phi^*$ is a bijection.
Let $\bsy \in \Bbb S^{n - 1}$ be arbitrary.
We need to prove that there is a unique $\bsx \in \partial C$ such that:

$\map \phi \bsx = \bsy$
By Ray from Interior of Compact Convex Set Meets Boundary Exactly Once, there is a unique $t \in \R_{> 0}$ such that:

$\bsx_0 + t \bsy \in \partial C$
Therefore:














\(\ds \map \phi {\bsx_0 + t \bsy}\)

\(=\)







\(\ds \frac 1 {\norm {t \bsy} } \paren {t \bsy}\)





Definition of $\phi$














\(\ds \)

\(=\)







\(\ds \bsy\)





Definition of Unit Sphere



Now, $\bsx \in \partial C$ satisfies:

$\map \phi \bsx = \bsy$.
Then:














\(\ds \bsy\)

\(=\)







\(\ds \map \phi \bsx\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {\norm {\bsx - \bsx_0} } \paren {\bsx - \bsx_0}\)














\(\ds \leadsto \ \ \)





\(\ds \norm {\bsx - \bsx_0} \bsy\)

\(=\)







\(\ds \bsx - \bsx_0\)














\(\ds \leadsto \ \ \)





\(\ds \bsx\)

\(=\)







\(\ds \bsx_0 + \norm {\bsx - \bsx_0} \bsy\)









Therefore:

$\bsx_0 + \norm {\bsx - \bsx_0} \bsy \in \partial C$
so:

$\norm {\bsx - \bsx_0} = t$
Hence:

$\bsx = \bsx_0 + t \bsy$
Therefore, for every $\bsy \in \Bbb S^{n - 1}$, there is a unique $\bsx \in \partial C$ such that:

$\map {\phi^*} \bsx = \map \phi \bsx = \bsy$
and so $\phi^*$ is a bijection by definition.
$\Box$

We have shown that $\phi^*$ is a continuous bijection.
By Boundary of Compact Set in Hausdorff Space is Compact, $\partial C$ is compact.
Therefore, by Continuous Bijection from Compact to Hausdorff is Homeomorphism:

$\phi^*$ is a homeomorphism from $\partial C$ to $\Bbb S^{n - 1}$
$\blacksquare$





