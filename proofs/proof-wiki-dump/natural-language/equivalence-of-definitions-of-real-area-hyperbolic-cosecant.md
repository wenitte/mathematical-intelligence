# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Real_Area_Hyperbolic_Cosecant



Theorem
The following definitions of the concept of Real Area Hyperbolic Cosecant are equivalent:

Definition 1
The inverse hyperbolic cosecant $\arcsch: \R_{\ne 0} \to \R$ is a real function defined on the non-zero real numbers $\R_{\ne 0}$ as:

$\forall x \in \R_{\ne 0}: \map \arcsch x := y \in \R: x = \map \csch y$
where $\map \csch y$ denotes the hyperbolic cosecant function of $y$.

Definition 2
The inverse hyperbolic cosecant $\arcsch: \R_{\ne 0} \to \R$ is a real function defined on the non-zero real numbers $\R_{\ne 0}$ as:

$\forall x \in \R_{\ne 0}: \map \arcsch x := \map \ln {\dfrac 1 x + \dfrac {\sqrt {x^2 + 1} } {\size x} }$
where:

$\sqrt {x^2 + 1}$ denotes the positive square root of $x^2 + 1$
$\ln$ denotes the natural logarithm of a (strictly positive) real number.


Proof
Definition 1 implies Definition 2













\(\ds x\)

\(=\)







\(\ds \csch y\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac 1 x\)

\(=\)







\(\ds \sinh y\)





Definition of Hyperbolic Cosecant








\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds \map \ln {\dfrac 1 x + \sqrt {\paren {\dfrac 1 x}^2 + 1} }\)





Definition of Real Inverse Hyperbolic Sine














\(\ds \)

\(=\)







\(\ds \map \ln {\dfrac 1 x + \sqrt {\dfrac {1 + x^2} {x^2} } }\)










If $x \ge 0$, then:














\(\ds \map \ln {\dfrac 1 x + \sqrt {\dfrac {1 + x^2} {x^2} } }\)

\(=\)







\(\ds \map \ln {\dfrac 1 x + \dfrac {\sqrt {1 + x^2} } x}\)





Positive Square Root is Positive




If $x < 0$, then:














\(\ds \map \ln {\dfrac 1 x + \sqrt {\dfrac {1 + x^2} {x^2} } }\)

\(=\)







\(\ds \map \ln {\dfrac 1 x + \dfrac {\sqrt {1 + x^2} } {-x} }\)





Positive Square Root is Positive



That is:

$y = \map \ln {\dfrac 1 x + \dfrac {\sqrt {1 + x^2} } {\size x} }$
$\Box$


Definition 2 implies Definition 1













\(\ds y\)

\(=\)







\(\ds \map \ln {\dfrac 1 x + \dfrac {\sqrt {1 + x^2} } {\size x} }\)




















\(\ds \)

\(=\)







\(\ds \map \ln {\dfrac 1 x + \sqrt {\dfrac {1 + x^2} {x^2} } }\)




















\(\ds \)

\(=\)







\(\ds \map \ln {\dfrac 1 x + \sqrt {\dfrac 1 {x^2} + 1} }\)




















\(\ds \)

\(=\)







\(\ds \arsinh \dfrac 1 x\)





Definition of Real Area Hyperbolic Sine








\(\ds \leadsto \ \ \)





\(\ds \dfrac 1 x\)

\(=\)







\(\ds \sinh y\)





Definition of Hyperbolic Sine








\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds \csch y\)





Definition of Hyperbolic Cosecant



$\Box$

Therefore:




\(\text {(1)}: \quad\)









\(\ds x = \csch y\)

\(\implies\)







\(\ds y = \map \ln {\dfrac 1 x + \dfrac {\sqrt {1 + x^2} } {\size x} }\)





Definition 1 implies Definition 2




\(\text {(2)}: \quad\)









\(\ds y = \map \ln {\dfrac 1 x + \dfrac {\sqrt {1 + x^2} } {\size x} }\)

\(\implies\)







\(\ds x = \csch y\)





Definition 2 implies Definition 1








\(\ds \leadsto \ \ \)





\(\ds x = \csch y\)

\(\iff\)







\(\ds y = \map \ln {\dfrac 1 x + \dfrac {\sqrt {1 + x^2} } {\size x} }\)









$\blacksquare$


Also see
Equivalence of Definitions of Real Area Hyperbolic Sine
Equivalence of Definitions of Real Area Hyperbolic Cosine
Equivalence of Definitions of Real Area Hyperbolic Tangent
Equivalence of Definitions of Real Area Hyperbolic Cotangent
Equivalence of Definitions of Real Area Hyperbolic Secant




