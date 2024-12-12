# 

Source: https://proofwiki.org/wiki/Electric_Field_Strength_from_Assemblage_of_Point_Charges

Theorem
Let $q_1, q_2, \ldots, q_n$ be point charges.
Let $\mathbf r_1, \mathbf r_2, \ldots, \mathbf r_n$ be the position vectors of $q_1, q_2, \ldots, q_n$ respectively.

Let $\map {\mathbf E} {\mathbf r}$ be the electric field strength at a point $P$ whose position vector is $\mathbf r$.

Then:

$\ds \map {\mathbf E} {\mathbf r} = \dfrac 1 {4 \pi \epsilon_0} \sum_i \dfrac {q_i} {\size {\mathbf r - \mathbf r_i}^3} \paren {\mathbf r - \mathbf r_i}$
where $\varepsilon_0$ denotes the vacuum permittivity.


Proof
Let $q$ be a test charge in the vicinity of $q_1, q_2, \ldots, q_n$ at $\map P {\mathbf r}$.
For all $i$ in $\set {1, 2, \ldots, n}$, let $\mathbf F_i$ denote the force exerted on $q$ by $q_i$.

Let $\mathbf F$ be the force exerted on $q$ by the combined action of $q_1, q_2, \ldots, q_n$.

We have:














\(\ds \mathbf F\)

\(=\)







\(\ds \dfrac 1 {4 \pi \varepsilon_0} \sum_i \dfrac {q q_i} {\size {\mathbf r - \mathbf r_i}^3} \paren {\mathbf r - \mathbf r_i}\)





Total Force on Point Charge from Multiple Point Charges








\(\ds \leadsto \ \ \)





\(\ds \dfrac {\mathbf F} q\)

\(=\)







\(\ds \dfrac 1 {4 \pi \varepsilon_0} \sum_i \dfrac {q_j} {\size {\mathbf r - \mathbf r_i}^3} \paren {\mathbf r - \mathbf r_i}\)





dividing both sides by $q$ which is constant








\(\ds \leadsto \ \ \)





\(\ds \map {\mathbf E} {\mathbf r}\)

\(=\)







\(\ds \dfrac 1 {4 \pi \varepsilon_0} \sum_i \dfrac {q_j} {\size {\mathbf r - \mathbf r_i}^3} \paren {\mathbf r - \mathbf r_i}\)





Definition of Electric Field Strength



Hence the result.
$\blacksquare$


Sources
1990: I.S. Grant and W.R. Phillips: Electromagnetism (2nd ed.) ... (previous) ... (next): Chapter $1$: Force and energy in electrostatics: $1.2$ The Electric Field: $(1.4)$




