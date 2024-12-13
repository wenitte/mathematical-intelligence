# 

Source: https://proofwiki.org/wiki/Homotopic_Paths_Implies_Homotopic_Composition



Theorem
Let $T = \left({S, \tau}\right)$ be a topological space.
Let $f_1, f_2, g_1, g_2: \left[{0 \,.\,.\, 1}\right] \to S$ be paths in $T$.
Let $f_1$ be homotopic to $f_2$ and $g_1$ be homotopic to $g_2$.

Then the concatenated paths $f_1 * g_1$ and $f_2 * g_2$ are homotopic.


Proof
Let $F: \left[{0 \,.\,.\, 1}\right] \times \left[{0 \,.\,.\, 1}\right] \to S$ be a homotopy between $f_1$ and $f_2$.
Let $G: \left[{0 \,.\,.\, 1}\right] \times \left[{0 \,.\,.\, 1}\right] \to S$ be a homotopy between $g_1$ and $g_2$.
Define $H: \left[{0 \,.\,.\, 1}\right] \times \left[{0 \,.\,.\, 1}\right] \to S$ by:

$H \left({s, t}\right) = \begin{cases} F \left({2 s, t}\right) & : s \in \left[{0 \,.\,.\, \dfrac 1 2}\right] \\
G \left({2 s - 1, t}\right) & : s \in \left[{\dfrac 1 2 \,.\,.\, 1}\right]\end{cases}$
By Continuous Mapping on Finite Union of Closed Sets, $H$ is continuous.
By definition of concatenation of paths, $H$ is a homotopy between $f_1 * g_1$ and $f_2 * g_2$.
$\blacksquare$


Also see
Definition:Multiplication of Homotopy Classes of Paths


Sources
2000: James R. Munkres: Topology (2nd ed.) ... (previous) ... (next): $9$: The Fundamental Group: $\S 52$: The Fundamental Group




