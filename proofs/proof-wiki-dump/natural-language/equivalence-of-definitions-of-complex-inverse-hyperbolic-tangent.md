# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Complex_Inverse_Hyperbolic_Tangent



Theorem
The following definitions of the concept of Complex Inverse Hyperbolic Tangent are equivalent:
Let $S$ be the subset of the complex plane:

$S = \C \setminus \set {-1 + 0 i, 1 + 0 i}$
Definition 1
The inverse hyperbolic tangent is a multifunction defined on $S$ as:

$\forall z \in S: \map {\tanh^{-1} } z := \set {w \in \C: z = \map \tanh w}$
where $\map \tanh w$ is the hyperbolic tangent function.

Definition 2
The inverse hyperbolic tangent is a multifunction defined on $S$ as:

$\forall z \in S: \map {\tanh^{-1} } z := \set {\dfrac 1 2 \map \ln {\dfrac {1 + z} {1 - z} } + k \pi i: k \in \Z}$
where $\ln$ denotes the complex natural logarithm considered as a  multifunction.


Proof
The proof strategy is to how that for all $z \in S$:

$\set {w \in \C: z = \tanh w} = \set {\dfrac 1 2 \map \ln {\dfrac {1 + z} {1 - z} } + k \pi i: k \in \Z}$

Note that when $z = -1 + 0 i$:














\(\ds 1 + z\)

\(=\)







\(\ds 0 + 0 i\)














\(\ds \leadsto \ \ \)





\(\ds \frac {1 + z} {1 - z}\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \map \ln {\dfrac {1 + z} {1 - z} }\)

\(\)







\(\ds \text {is undefined}\)










Similarly, when $z = 1 + 0 i$:














\(\ds 1 - z\)

\(=\)







\(\ds 0 + 0 i\)














\(\ds \leadsto \ \ \)





\(\ds \frac {1 + z} {1 - z}\)

\(\)







\(\ds \text {is undefined}\)










Thus let $z \in \C \setminus \set {-1 + 0 i, 1 + 0 i}$.


Definition 1 implies Definition 2
It is demonstrated that:

$\set {w \in \C: z = \tanh w} \subseteq \set {\dfrac 1 2 \map \ln {\dfrac {1 + z} {1 - z} } + k \pi i: k \in \Z}$

Let $w \in \set {w \in \C: z = \tanh w}$.

Then:














\(\ds z\)

\(=\)







\(\ds \frac {e^w - e^{- w} } {e^w + e^{- w} }\)





Definition of Hyperbolic Tangent














\(\ds z\)

\(=\)







\(\ds \frac {e^{2 w} - 1} {e^{2 w} + 1}\)





multiplying top and bottom by $e^w$








\(\ds \leadsto \ \ \)





\(\ds e^{2 w}\)

\(=\)







\(\ds \frac {1 + z} {1 - z}\)





solving for $e^{2 w}$








\(\ds \leadsto \ \ \)





\(\ds \map \ln {e^{2 w} }\)

\(=\)







\(\ds \ln \frac {1 + z} {1 - z}\)














\(\ds \leadsto \ \ \)

\(\ds \exists k' \in \Z: \, \)



\(\ds 2 w + 2 k' \pi i\)

\(=\)







\(\ds \ln \frac {1 + z} {1 - z}\)





Definition of Complex Natural Logarithm








\(\ds \leadsto \ \ \)

\(\ds \exists k \in \Z: \, \)



\(\ds w\)

\(=\)







\(\ds \frac 1 2 \ln \frac {1 + z} {1 - z} + k \pi i\)





putting $k = -k'$




Thus by definition of subset:

$\set {w \in \C: z = \tanh w} \subseteq \set {\dfrac 1 2 \map \ln {\dfrac {1 + z} {1 - z} } + k \pi i: k \in \Z}$
$\Box$


Definition 2 implies Definition 1
It is demonstrated that:

$\set {w \in \C: z = \tanh w} \supseteq \set {\dfrac 1 2 \map \ln {\dfrac {1 + z} {1 - z} } + k \pi i: k \in \Z}$
Let $w \in \set {\dfrac 1 2 \map \ln {\dfrac {1 + z} {1 - z} } + k \pi i: k \in \Z}$.
Then:










\(\ds \exists k \in \Z: \, \)



\(\ds w\)

\(=\)







\(\ds \dfrac 1 2 \map \ln {\dfrac {1 + z} {1 - z} } + k \pi i\)














\(\ds \leadsto \ \ \)

\(\ds \exists k \in \Z: \, \)



\(\ds 2 w + 2 \paren {-k} \pi i\)

\(=\)







\(\ds \map \ln {\dfrac {1 + z} {1 - z} }\)














\(\ds \leadsto \ \ \)





\(\ds e^{2 w + 2 \paren {-k} \pi i}\)

\(=\)







\(\ds \dfrac {1 + z} {1 - z}\)





Definition of Complex Natural Logarithm








\(\ds \leadsto \ \ \)





\(\ds e^{2 w}\)

\(=\)







\(\ds \dfrac {1 + z} {1 - z}\)





Complex Exponential Function has Imaginary Period








\(\ds \leadsto \ \ \)





\(\ds z\)

\(=\)







\(\ds \dfrac {e^w - e^{- w} } {e^w + e^{- w} }\)














\(\ds \leadsto \ \ \)





\(\ds z\)

\(=\)







\(\ds \tanh w\)





Definition of Hyperbolic Tangent








\(\ds \leadsto \ \ \)





\(\ds w\)

\(\in\)







\(\ds \set {w \in \C: z = \tanh w}\)










Thus by definition of superset:

$\set {w \in \C: z = \tanh w} \supseteq \set {\dfrac 1 2 \map \ln {\dfrac {1 + z} {1 - z} } + k \pi i: k \in \Z}$
$\Box$

Thus by definition of set equality:

$\set {w \in \C: z = \tanh w} = \set {\dfrac 1 2 \map \ln {\dfrac {1 + z} {1 - z} } + k \pi i: k \in \Z}$
$\blacksquare$





