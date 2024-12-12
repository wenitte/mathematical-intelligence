# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Real_Area_Hyperbolic_Cotangent



Theorem
The following definitions of the concept of Real Area Hyperbolic Cotangent are equivalent:

Definition 1
The inverse hyperbolic cotangent $\arcoth: S \to \R$ is a real function defined on $S$ as:

$\forall x \in S: \arcoth x := y \in \R: x = \coth y$
where $\coth y$ denotes the hyperbolic cotangent function.

Definition 2
The inverse hyperbolic cotangent $\arcoth: S \to \R$ is a real function defined on $S$ as:

$\forall x \in S: \arcoth x := \dfrac 1 2 \map \ln {\dfrac {x + 1} {x - 1} }$
where $\ln$ denotes the natural logarithm of a (strictly positive) real number.


Proof
Definition 1 implies Definition 2













\(\ds x\)

\(=\)







\(\ds \coth y\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac 1 x\)

\(=\)







\(\ds \tanh y\)





Definition of Hyperbolic Cotangent








\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds \artanh \dfrac 1 x\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \map \ln {\dfrac {1 + \frac 1 x} {1 - \frac 1 x} }\)





Definition of Real Area Hyperbolic Tangent














\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \map \ln {\dfrac {x + 1} {x - 1} }\)









$\Box$


Definition 2 implies Definition 1













\(\ds y\)

\(=\)







\(\ds \dfrac 1 2 \map \ln {\dfrac {x + 1} {x - 1} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \map \ln {\dfrac {1 + \frac 1 x} {1 - \frac 1 x} }\)




















\(\ds \)

\(=\)







\(\ds \artanh \dfrac 1 x\)





Definition of Real Area Hyperbolic Tangent








\(\ds \leadsto \ \ \)





\(\ds \dfrac 1 x\)

\(=\)







\(\ds \tanh y\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds \coth y\)





Definition of Real Area Hyperbolic Cotangent



$\Box$

Therefore:




\(\text {(1)}: \quad\)









\(\ds x = \coth y\)

\(\implies\)







\(\ds y = \dfrac 1 2 \map \ln {\dfrac {x + 1} {x - 1} }\)





Definition 1 implies Definition 2




\(\text {(2)}: \quad\)









\(\ds y = \dfrac 1 2 \map \ln {\dfrac {x + 1} {x - 1} }\)

\(\implies\)







\(\ds x = \coth y\)





Definition 2 implies Definition 1








\(\ds \leadsto \ \ \)





\(\ds x = \coth y\)

\(\iff\)







\(\ds y = \dfrac 1 2 \map \ln {\dfrac {x + 1} {x - 1} }\)









$\blacksquare$


Also see
Equivalence of Definitions of Real Area Hyperbolic Sine
Equivalence of Definitions of Real Area Hyperbolic Cosine
Equivalence of Definitions of Real Area Hyperbolic Tangent
Equivalence of Definitions of Real Area Hyperbolic Secant
Equivalence of Definitions of Real Area Hyperbolic Cosecant




