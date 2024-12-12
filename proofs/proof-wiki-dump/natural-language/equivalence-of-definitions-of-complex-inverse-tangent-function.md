# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Complex_Inverse_Tangent_Function



Theorem
The following definitions of the concept of Complex Inverse Tangent are equivalent:
Let $S$ be the subset of the complex plane:

$S = \C \setminus \set {0 + i, 0 - i}$
Definition 1
The inverse tangent is a multifunction defined on $S$ as:

$\forall z \in S: \inv \tan z := \set {w \in \C: \map \tan w = z}$
where $\map \tan w$ is the tangent of $w$.

Definition 2
The inverse tangent is a multifunction defined on $S$ as:

$\forall z \in S: \inv \tan z := \set {\dfrac 1 {2 i} \map \ln {\dfrac {i - z} {i + z} } + k \pi: k \in \Z}$
where $\ln$ denotes the complex natural logarithm as a multifunction.


Proof
The proof strategy is to how that for all $z \in \C$:

$\set {w \in \C: \tan w = z} = \set {\dfrac 1 {2 i} \map \ln {\dfrac {i - z} {i + z} } + k \pi: k \in \Z}$

Note that when $z = 0 + i$:














\(\ds i - z\)

\(=\)







\(\ds 0 + 0 i\)














\(\ds \leadsto \ \ \)





\(\ds \frac {i - z} {i + z}\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \map \ln {\dfrac {i - z} {i + z} }\)

\(\)







\(\ds \text {is undefined}\)










Similarly, when $z = 0 - i$:














\(\ds i + z\)

\(=\)







\(\ds 0 + 0 i\)














\(\ds \leadsto \ \ \)





\(\ds \frac {i - z} {i + z}\)

\(\)







\(\ds \text {is undefined}\)










Thus let $z \in \C \setminus \set {0 + i, 0 - i}$.


Definition 1 implies Definition 2
It is demonstrated that:

$\set {w \in \C: \tan w = z} \subseteq \set {\dfrac 1 {2 i} \map \ln {\dfrac {i - z} {i + z} } + k \pi: k \in \Z}$

Let $w \in \set {w \in \C: z = \tan w}$.

Then:














\(\ds z\)

\(=\)







\(\ds i \frac {1 - e^{2 i w} } {1 + e^{2 i w} }\)





Euler's Tangent Identity








\(\ds \leadsto \ \ \)





\(\ds e^{2 i w}\)

\(=\)







\(\ds \frac {1 + i z} {1 - i z}\)





solving for $e^{2 i w}$














\(\ds \)

\(=\)







\(\ds \frac {i - z} {i + z}\)





multiplying top and bottom by $i$, noting $i^2 = -1$








\(\ds \leadsto \ \ \)





\(\ds \map \ln {e^{2 i w} }\)

\(=\)







\(\ds \ln \frac {i - z} {i + z}\)














\(\ds \leadsto \ \ \)





\(\ds 2 i w + 2 k' \pi i: k' \in \Z\)

\(=\)







\(\ds \ln \frac {i - z} {i + z}\)





Definition of Complex Natural Logarithm








\(\ds \leadsto \ \ \)





\(\ds w\)

\(=\)







\(\ds \frac 1 {2 i} \ln \frac {i - z} {i + z} + k \pi: k \in \Z\)





putting $k = -k'$




Thus by definition of subset:

$\set {w \in \C: \tan w = z} \subseteq \set {\dfrac 1 {2 i} \map \ln {\dfrac {i - z} {i + z} } + k \pi: k \in \Z}$
$\Box$


Definition 2 implies Definition 1
It is demonstrated that:

$\set {w \in \C: \tan w = z} \supseteq \set {\dfrac 1 {2 i} \map \ln {\dfrac {i - z} {i + z} } + k \pi: k \in \Z}$
Let $w \in \set {\dfrac 1 {2 i} \map \ln {\dfrac {i - z} {i + z} } + k \pi: k \in \Z}$.
Then:










\(\ds \exists k \in \Z: \, \)



\(\ds w\)

\(=\)







\(\ds \dfrac 1 {2 i} \map \ln {\dfrac {i - z} {i + z} } + k \pi\)














\(\ds \leadsto \ \ \)

\(\ds \exists k \in \Z: \, \)



\(\ds 2 i w + 2 \paren {-k} \pi i\)

\(=\)







\(\ds \map \ln {\dfrac {i - z} {i + z} }\)














\(\ds \leadsto \ \ \)





\(\ds e^{2 i w + 2 \paren {-k} \pi i}\)

\(=\)







\(\ds \dfrac {i - z} {i + z}\)





Definition of Complex Natural Logarithm








\(\ds \leadsto \ \ \)





\(\ds e^{2 i w}\)

\(=\)







\(\ds \dfrac {i - z} {i + z}\)





Complex Exponential Function has Imaginary Period








\(\ds \leadsto \ \ \)





\(\ds z\)

\(=\)







\(\ds i \dfrac {1 - e^{2 i w} } {1 + e^{2 i w} }\)














\(\ds \leadsto \ \ \)





\(\ds z\)

\(=\)







\(\ds \tan w\)





Euler's Tangent Identity








\(\ds \leadsto \ \ \)





\(\ds w\)

\(\in\)







\(\ds \set {w \in \C: \tan w = z}\)










Thus by definition of superset:

$\set {w \in \C: \tan w = z} \supseteq \set {\dfrac 1 {2 i} \map \ln {\dfrac {i - z} {i + z} } + k \pi: k \in \Z}$
$\Box$

Thus by definition of set equality:

$\set {w \in \C: \tan w = z} = \set {\dfrac 1 {2 i} \map \ln {\dfrac {i - z} {i + z} } + k \pi: k \in \Z}$
$\blacksquare$





