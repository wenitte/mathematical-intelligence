# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Real_Area_Hyperbolic_Tangent



Theorem
Let $S$ denote the open real interval:

$S := \openint {-1} 1$

The following definitions of the concept of Real Area Hyperbolic Tangent are equivalent:

Definition 1
The inverse hyperbolic tangent $\artanh: S \to \R$ is a real function defined on $S$ as:

$\forall x \in S: \map \artanh x := y \in \R: x = \map \tanh y$
where $\map \tanh y$ denotes the hyperbolic tangent function.

Definition 2
The inverse hyperbolic tangent $\artanh: S \to \R$ is a real function defined on $S$ as:

$\forall x \in S: \map \artanh x := \dfrac 1 2 \map \ln {\dfrac {1 + x} {1 - x} }$
where $\ln$ denotes the natural logarithm of a (strictly positive) real number.


Proof
Definition 1 implies Definition 2
Let $x = \tanh y$.
Then:














\(\ds x\)

\(=\)







\(\ds \frac {e^{2 y} - 1} {e^{2 y} + 1}\)





Definition 3 of Hyperbolic Tangent








\(\ds \leadsto \ \ \)





\(\ds x e^{2 y} + x\)

\(=\)







\(\ds e^{2 y} - 1\)














\(\ds \leadsto \ \ \)





\(\ds e^{2 y} - x e^{2 y}\)

\(=\)







\(\ds 1 + x\)














\(\ds \leadsto \ \ \)





\(\ds e^{2 y}\)

\(=\)







\(\ds \frac {1 + x} {1 - x}\)














\(\ds \leadsto \ \ \)





\(\ds 2 y\)

\(=\)







\(\ds \map \ln {\frac {1 + x} {1 - x} }\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds \frac 1 2 \map \ln {\frac {1 + x} {1 - x} }\)









$\Box$


Definition 2 implies Definition 1
Let $y = \dfrac {1 + x} {1 - x}$.














\(\ds \map \tanh {\frac 1 2 \map \ln {\frac {1 + x} {1 - x} } }\)

\(=\)







\(\ds \map \tanh {\frac 1 2 \ln y}\)




















\(\ds \)

\(=\)







\(\ds \frac {e^{2 \paren {\frac 1 2 \ln y} - 1} } {e^{2 \paren {\frac 1 2 \ln y} + 1} }\)





Definition 3 of Hyperbolic Tangent














\(\ds \)

\(=\)







\(\ds \frac {e^{\ln y} - 1} {e^{\ln y} + 1}\)




















\(\ds \)

\(=\)







\(\ds \frac {y - 1} {y + 1}\)





Exponential of Natural Logarithm














\(\ds \)

\(=\)







\(\ds \frac {\frac {1 + x} {1 - x} - 1} {\frac {1 + x} {1 - x} + 1}\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {1 + x} - \paren {1 - x} } {\paren {1 + x} + \paren {1 - x} }\)




















\(\ds \)

\(=\)







\(\ds \frac {2 x} 2\)




















\(\ds \)

\(=\)







\(\ds x\)









$\Box$

Therefore:




\(\text {(1)}: \quad\)









\(\ds x = y\)

\(\implies\)







\(\ds y = \frac 1 2 \map \ln {\frac {1 + x} {1 - x} }\)





Definition 1 implies Definition 2




\(\text {(2)}: \quad\)









\(\ds y = \frac 1 2 \map \ln {\frac {1 + x} {1 - x} }\)

\(\implies\)







\(\ds x = \tanh y\)





Definition 2 implies Definition 1








\(\ds \leadsto \ \ \)





\(\ds x = \tanh y\)

\(\iff\)







\(\ds y = \frac 1 2 \map \ln {\frac {1 + x} {1 - x} }\)









$\blacksquare$


Also see
Equivalence of Definitions of Real Area Hyperbolic Sine
Equivalence of Definitions of Real Area Hyperbolic Cosine
Equivalence of Definitions of Real Area Hyperbolic Cosecant
Equivalence of Definitions of Real Area Hyperbolic Secant
Equivalence of Definitions of Real Area Hyperbolic Cotangent




