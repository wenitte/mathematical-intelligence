# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Complex_Inverse_Cotangent_Function



Theorem
The following definitions of the concept of Complex Inverse Cotangent are equivalent:
Let $S$ be the subset of the complex plane:

$S = \C \setminus \set {0 + i, 0 - i}$
Definition 1
The inverse cotangent is a multifunction defined on $S$ as:

$\forall z \in S: \cot^{-1} \left({z}\right) := \left\{{w \in \C: \cot \left({w}\right) = z}\right\}$
where $\cot \left({w}\right)$ is the cotangent of $w$.

Definition 2
The inverse cotangent is a multifunction defined on $S$ as:

$\forall z \in S: \cot^{-1} \left({z}\right) := \left\{{\dfrac 1 {2 i} \ln \left({\dfrac {z + i} {z - i}}\right) + k \pi: k \in \Z}\right\}$
where $\ln$ denotes the complex natural logarithm as a multifunction.


Proof
The proof strategy is to how that for all $z \in S$:

$\set {w \in \C: \cot w = z} = \set {\dfrac 1 {2 i} \map \ln {\dfrac {z + i} {z - i} } + k \pi: k \in \Z}$

Note that when $z = 0 - i$:














\(\ds z + i\)

\(=\)







\(\ds 0 + 0 i\)














\(\ds \leadsto \ \ \)





\(\ds \frac {z + i} {z - i}\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \map \ln {\dfrac {z + i} {z - i} }\)

\(\)







\(\ds \text {is undefined}\)










Similarly, when $z = 0 + i$:














\(\ds z - i\)

\(=\)







\(\ds 0 + 0 i\)














\(\ds \leadsto \ \ \)





\(\ds \frac {z + i} {z - i}\)

\(\)







\(\ds \text {is undefined}\)










Thus let $z \in \C \setminus \set {0 + i, 0 - i}$.


Definition 1 implies Definition 2
It is demonstrated that:

$\set {w \in \C: \cot w = z} \subseteq \set {\dfrac 1 {2 i} \map \ln {\dfrac {z + i} {z - i} } + k \pi: k \in \Z}$

Let $w \in \set {w \in \C: z = \cot w}$.

Then:














\(\ds z\)

\(=\)







\(\ds i \frac {e^{i w} + e^{-i w} } {e^{i w} - e^{-i w} }\)





Euler's Cotangent Identity








\(\ds \leadsto \ \ \)





\(\ds e^{2 i w}\)

\(=\)







\(\ds \frac {i z - 1} {i z + 1}\)





solving for $e^{2 i w}$














\(\ds \)

\(=\)







\(\ds \frac {z + i} {z - i}\)





multiplying top and bottom by $-i$, noting $i^2 = -1$








\(\ds \leadsto \ \ \)





\(\ds \map \ln {e^{2 i w} }\)

\(=\)







\(\ds \map \ln {\frac {z + i} {z - i} }\)














\(\ds \leadsto \ \ \)





\(\ds 2 i w + 2 k' \pi i: k' \in \Z\)

\(=\)







\(\ds \map \ln {\frac {z + i} {z - i} }\)





Definition of Complex Natural Logarithm








\(\ds \leadsto \ \ \)

\(\ds \exists k \in \Z: \, \)



\(\ds w\)

\(=\)







\(\ds \frac 1 {2 i} \map \ln {\frac {z + i} {z - i} } + k \pi\)





putting $k = -k'$




Thus by definition of subset:

$\set {w \in \C: \cot w = z} \subseteq \set {\dfrac 1 {2 i} \map \ln {\dfrac {z + i} {z - i} } + k \pi: k \in \Z}$
$\Box$


Definition 2 implies Definition 1
It is demonstrated that:

$\set {w \in \C: \cot w = z} \supseteq \set {\dfrac 1 {2 i} \map \ln {\dfrac {z + i} {z - i} } + k \pi: k \in \Z}$
Let $w \in \set {\dfrac 1 {2 i} \map \ln {\dfrac {z + i} {z - i} } + k \pi: k \in \Z}$.
Then:










\(\ds \exists k \in \Z: \, \)



\(\ds w\)

\(=\)







\(\ds \dfrac 1 {2 i} \map \ln {\dfrac {z + i} {z - i} } + k \pi\)














\(\ds \leadsto \ \ \)

\(\ds \exists k \in \Z:: \, \)



\(\ds 2 i w + 2 \paren {-k} \pi i\)

\(=\)







\(\ds \map \ln {\frac {z + i} {z - i} }\)














\(\ds \leadsto \ \ \)





\(\ds e^{2 i w + 2 \paren {-k} \pi i}\)

\(=\)







\(\ds \frac {z + i} {z - i}\)





Definition of Complex Natural Logarithm








\(\ds \leadsto \ \ \)





\(\ds e^{2 i w}\)

\(=\)







\(\ds \frac {z + i} {z - i}\)





Complex Exponential Function has Imaginary Period








\(\ds \leadsto \ \ \)





\(\ds z\)

\(=\)







\(\ds i \frac {e^{2 i w} + 1} {e^{2 i w} - 1}\)














\(\ds \leadsto \ \ \)





\(\ds z\)

\(=\)







\(\ds \cot w\)





Euler's Cotangent Identity








\(\ds \leadsto \ \ \)





\(\ds w\)

\(\in\)







\(\ds \set {w \in \C: \cot w = z}\)










Thus by definition of superset:

$\set {w \in \C: \cot w = z} \supseteq \set {\dfrac 1 {2 i} \map \ln {\dfrac {z + i} {z - i} } + k \pi: k \in \Z}$
$\Box$

Thus by definition of set equality:

$set {w \in \C: \cot w = z} = \set {\dfrac 1 {2 i} \map \ln {\dfrac {z + i} {z - i} } + k \pi: k \in \Z}$
$\blacksquare$





