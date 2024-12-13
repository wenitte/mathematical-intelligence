# 

Source: https://proofwiki.org/wiki/Group_Isomorphism/Examples/Congruence_Modulo_Initial_Segment_of_Natural_Numbers

Example of Group Isomorphism
Let $m \in \Z_{>0}$ be a (strictly) positive integer.
Let $\N_{<m}$ denote the initial segment of the natural numbers $\N$:

$\N_{<m} = \set {0, 1, \ldots, m - 1}$
Let $\RR_m$ denote the equivalence relation:

$\forall x, y \in \Z: x \mathrel {\RR_m} y \iff \exists k \in \Z: x = y + k m$
For each $a \in \N_{<m}$, let $\eqclass a m$ be the equivalence class of $a \in \N_{<m}$ under $\RR_m$:

$\eqclass a m := \set {a + z m: z \in \Z}$
Let $\Z_m$ be the set defined as:

$\Z_m := \set {\eqclass a m: a \in \N_{<m} }$
Let $+_\PP$ denote the operation induced on $\powerset \Z$ by integer addition.

Let $\phi_m: \struct {\N_m, +_m} \to \struct {\Z_m, +_\PP}$ be the mapping defined by:

$\forall a \in \N_m: \map {\phi_m} a = \eqclass a m$
where $\struct {\N_m, +_m}$ denotes the additive group of integers modulo $m$.
Then $\phi_m$ is a (group) isomorphism.


Proof
We have that:










\(\ds \forall a, b \in \N_m: \, \)



\(\ds \map {\phi_m} {a +_m b}\)

\(=\)







\(\ds \eqclass {a + b} m\)




















\(\ds \)

\(=\)







\(\ds \eqclass a m + \eqclass b m\)




















\(\ds \)

\(=\)







\(\ds \map {\phi_m} a + \map {\phi_m} b\)









demonstrating that $\phi_m$ is a homomorphism.
Then we have that:










\(\ds \forall a, b \in \N_m: \, \)



\(\ds \map {\phi_m} a\)

\(=\)







\(\ds \map {\phi_m} b\)














\(\ds \leadsto \ \ \)





\(\ds \eqclass a m\)

\(=\)







\(\ds \eqclass b m\)














\(\ds \leadsto \ \ \)





\(\ds a\)

\(=\)







\(\ds b\)









Hence $\phi_m$ is injective.
We also have that $\phi_m$ is trivially surjective.
Hence $\phi_m$ is a bijection.
Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 9$: Compositions Induced on the Set of All Subsets: Exercise $9.2$




