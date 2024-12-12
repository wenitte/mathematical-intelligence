# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Hyperbolic_Tangent



Theorem
The following definitions of the concept of Hyperbolic Tangent are equivalent:

Definition 1
The hyperbolic tangent function is defined on the complex numbers as:

$\tanh: X \to \C$:
$\forall z \in X: \tanh z := \dfrac {e^z - e^{-z} } {e^z + e^{-z} }$
where:

$X = \set {z : z \in \C, \ e^z + e^{-z} \ne 0}$
Definition 2
The hyperbolic tangent function is defined on the complex numbers as:

$\tanh: X \to \C$:
$\forall z \in X: \tanh z := \dfrac {\sinh z} {\cosh z}$
where:

$\sinh$ is the hyperbolic sine
$\cosh$ is the hyperbolic cosine
$X = \set {z : z \in \C, \ \cosh z \ne 0}$
Definition 3
The hyperbolic tangent function is defined on the complex numbers as:

$\tanh: X \to \C$:
$\forall z \in X: \tanh z := \dfrac {e^{2 z} - 1} {e^{2 z} + 1}$
where:

$X = \set {z: z \in \C, \ e^{2 z} + 1 \ne 0}$


Proof









\(\ds \forall z \in \set {z \in \C: \ e^{2 z} + 1 \ne 0}: \, \)



\(\ds \)

\(\)







\(\ds \frac {e^{2 z} - 1} {e^{2 z} + 1}\)





Definition 3 of Hyperbolic Tangent










\(\ds \forall z \in \set {z \in \C: \ e^z + e^{-z} \ne 0}: \, \)



\(\ds \)

\(=\)







\(\ds \frac {e^z \paren {e^z - e^{-z} } } {e^z \paren {e^z + e^{-z} } }\)
















\(\ds \forall z \in \set {z \in \C: \ e^z + e^{-z} \ne 0}: \, \)



\(\ds \)

\(=\)







\(\ds \frac {e^z - e^{-z} } {e^z + e^{-z} }\)





Definition 1 of Hyperbolic Tangent










\(\ds \forall z \in \set {z \in \C: \ \frac {e^z + e^{-z} } 2 \ne 0}: \, \)



\(\ds \)

\(=\)







\(\ds \frac {\paren {\dfrac {e^z - e^{-z} } 2} } {\paren {\dfrac {e^z + e^{-z} } 2} }\)
















\(\ds \forall z \in \set {z \in \C: \ \cosh z \ne 0}: \, \)



\(\ds \)

\(=\)







\(\ds \frac {\sinh z} {\cosh z}\)





Definition 2 of Hyperbolic Tangent



$\blacksquare$





