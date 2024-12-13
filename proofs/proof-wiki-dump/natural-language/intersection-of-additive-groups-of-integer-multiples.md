# 

Source: https://proofwiki.org/wiki/Intersection_of_Additive_Groups_of_Integer_Multiples

Theorem
Let $m, n \in \Z_{> 0}$ be (strictly) positive integers.
Let $\struct {m \Z, +}$ and $\struct {n \Z, +}$ be the corresponding additive groups of integer multiples.

Then:

$\struct {m \Z, +} \cap \struct {n \Z, +} = \struct {\lcm \set {m, n} \Z, +}$


Proof
By definition:

$m \Z = \set {x \in \Z: m \divides x}$
Thus:














\(\ds m \Z \cap n \Z\)

\(=\)







\(\ds \set {x \in \Z: n \divides x} \cap \set {x \in \Z: m \divides x}\)




















\(\ds \)

\(=\)







\(\ds \set {x \in \Z: n \divides x \land m \divides x}\)




















\(\ds \)

\(=\)







\(\ds \set {x \in \Z: \lcm \set {m, n} \divides x}\)




















\(\ds \)

\(=\)







\(\ds \lcm \set {m, n} \Z\)









Hence the result.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $5$: Subgroups: Exercise $5$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Subgroups and Cosets: $\S 36 \alpha$




