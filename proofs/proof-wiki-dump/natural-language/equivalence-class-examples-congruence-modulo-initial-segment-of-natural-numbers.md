# 

Source: https://proofwiki.org/wiki/Equivalence_Class/Examples/Congruence_Modulo_Initial_Segment_of_Natural_Numbers



Example of Equivalence Class
Let $m \in \Z_{>0}$ be a (strictly) positive integer.
Let $\N_{<m}$ denote the initial segment of the natural numbers $\N$:

$\N_{<m} = \set {0, 1, \ldots, m - 1}$
Let $\RR_m$ denote the equivalence relation:

$\forall x, y \in \Z: x \mathrel {\RR_m} y \iff \exists k \in \Z: x = y + k m$
For each $a \in \N_{<m}$, let $\eqclass a m$ be the equivalence class of $a \in \N_{<m}$ under $\RR_m$ is the set:

$\eqclass a m := \set {a + z m: z \in \Z}$


Proof
From Congruence Modulo Integer is Equivalence Relation, $\RR_m$ is an equivalence relation.
From the Division Theorem:

$\forall n \in \Z: \exists! z, a \in \Z: n = a + z m, a \in \N_{<m}$
Hence the result.
$\blacksquare$


Examples
Equivalence Class for Initial Segment of Natural Numbers Modulo $4$













\(\ds \eqclass 3 4\)

\(=\)







\(\ds \set {\dotsc, -13, -9, -5, -1, 3, 7, 11, 15, \dotsc}\)











Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 9$: Compositions Induced on the Set of All Subsets




