# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Hyperbolic_Cotangent



Theorem
The following definitions of the concept of Hyperbolic Cotangent are equivalent:

Definition 1
The hyperbolic cotangent function is defined on the complex numbers as:

$\coth: X \to \C$:
$\forall z \in X: \coth z := \dfrac {e^z + e^{-z} } {e^z - e^{-z}}$
where:

$X = \set {z : z \in \C, \ e^z - e^{-z} \ne 0}$
Definition 2
The hyperbolic cotangent function is defined on the complex numbers as:

$\coth: X \to \C$:
$\forall z \in X: \coth z := \dfrac {\cosh z} {\sinh z}$
where:

$\sinh$ is the hyperbolic sine
$\cosh$ is the hyperbolic cosine
$X = \set {z : z \in \C, \ \sinh z \ne 0}$
Definition 3
The hyperbolic cotangent function is defined on the complex numbers as:

$\coth: X \to \C$:
$\forall z \in X: \coth z := \dfrac {e^{2 z} + 1} {e^{2 z} - 1}$
where:

$X = \set {z : z \in \C, \ e^{2 z} - 1 \ne 0}$
Definition 4
The hyperbolic cotangent function is defined on the complex numbers as:

$\coth: X \to \C$:
$\forall z \in X: \coth z := \dfrac 1 {\tanh z}$
where:

$\tanh$ is the hyperbolic tangent
$X = \set {z : z \in \C, \ \sinh z \ne 0}$
where $\sinh$ is the hyperbolic sine.


Proof









\(\ds \forall z \in \set {z \in \C: \ e^{2 z} - 1 \ne 0}: \, \)



\(\ds \)

\(\)







\(\ds \frac {e^{2 z} + 1} {e^{2 z} - 1}\)





Definition 3 of Hyperbolic Cotangent








\(\ds \leadstoandfrom \ \ \)

\(\ds \forall z \in \set {z \in \C: \ e^z - e^{-z} \ne 0}: \, \)



\(\ds \)

\(=\)







\(\ds \frac {e^z \paren {e^z + e^{-z} } } {e^z \paren {e^z - e^{-z} } }\)














\(\ds \leadstoandfrom \ \ \)

\(\ds \forall z \in \set {z \in \C: \ e^z - e^{-z} \ne 0}: \, \)



\(\ds \)

\(=\)







\(\ds \frac {e^z + e^{-z} } {e^z - e^{-z} }\)





Definition 1 of Hyperbolic Cotangent








\(\ds \leadstoandfrom \ \ \)

\(\ds \forall z \in \set {z \in \C: \ \frac {e^z - e^{-z} } 2 \ne 0}: \, \)



\(\ds \)

\(=\)







\(\ds \frac {\paren {\dfrac {e^z + e^{-z} } 2} } {\paren {\dfrac {e^z - e^{-z} } 2} }\)














\(\ds \leadstoandfrom \ \ \)

\(\ds \forall z \in \set {z \in \C: \ \sinh z \ne 0}: \, \)



\(\ds \)

\(=\)







\(\ds \frac {\cosh z} {\sinh z}\)





Definition of Hyperbolic Sine, Definition of Hyperbolic Cosine, Definition 2 of Hyperbolic Cotangent








\(\ds \leadstoandfrom \ \ \)

\(\ds \forall z \in \set {z \in \C: \ \sinh z \ne 0}: \, \)



\(\ds \)

\(=\)







\(\ds \dfrac 1 {\frac {\sinh z} {\cosh z} }\)














\(\ds \leadstoandfrom \ \ \)

\(\ds \forall z \in \set {z \in \C: \ \sinh z \ne 0}: \, \)



\(\ds \)

\(=\)







\(\ds \dfrac 1 {\tanh z}\)





Definition 2 of Hyperbolic Tangent, Definition 4 of Hyperbolic Cotangent



$\blacksquare$





