# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Real_Area_Hyperbolic_Secant



Theorem
The following definitions of the concept of Real Area Hyperbolic Secant are equivalent:

Definition 1
The inverse hyperbolic secant $\sech^{-1}: S \to \R$ is a real function defined on $S$ as:

$\forall x \in S: \map {\sech^{-1} } x := y \in \R_{\ge 0}: x = \map \sech y$
where $\map \sech y$ denotes the hyperbolic secant function.

Definition 2
The inverse hyperbolic secant $\sech^{-1}: S \to \R$ is a real function defined on $S$ as:

$\forall x \in S: \map {\sech^{-1} } x := \map \ln {\dfrac {1 + \sqrt {1 - x^2} } x}$
where:

$\ln$ denotes the natural logarithm of a (strictly positive) real number.
$\sqrt {1 - x^2}$ denotes the positive square root of $1 - x^2$


Proof
Definition 1 implies Definition 2













\(\ds x\)

\(=\)







\(\ds \sech y\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac 1 x\)

\(=\)







\(\ds \cosh y\)





Definition of Hyperbolic Secant








\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds \map \ln {\dfrac 1 x + \sqrt {\paren {\dfrac 1 x}^2 - 1} }\)





Definition of Real Inverse Hyperbolic Cosine














\(\ds \)

\(=\)







\(\ds \map \ln {\dfrac 1 x + \sqrt {\dfrac {1 - x^2} {x^2} } }\)




















\(\ds \)

\(=\)







\(\ds \map \ln {\dfrac 1 x + \dfrac {\sqrt {1 - x^2} } x}\)





as $x > 1$














\(\ds \)

\(=\)







\(\ds \map \ln {\dfrac {1 + \sqrt {1 - x^2} } x}\)









$\Box$


Definition 2 implies Definition 1













\(\ds y\)

\(=\)







\(\ds \map \ln {\dfrac {1 + \sqrt {1 - x^2} } x}\)




















\(\ds \)

\(=\)







\(\ds \map \ln {\dfrac 1 x + \sqrt {\dfrac {1 - x^2} {x^2} } }\)




















\(\ds \)

\(=\)







\(\ds \map \ln {\dfrac 1 x + \sqrt {\paren {\dfrac 1 x}^2 - 1} }\)




















\(\ds \)

\(=\)







\(\ds \arcosh \dfrac 1 x\)





Definition of Real Area Hyperbolic Cosine








\(\ds \leadsto \ \ \)





\(\ds \dfrac 1 x\)

\(=\)







\(\ds \cosh y\)





Definition of Hyperbolic Cosine








\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds \sech y\)





Definition of Hyperbolic Secant



$\Box$

Therefore:




\(\text {(1)}: \quad\)









\(\ds x = \sech y\)

\(\implies\)







\(\ds y = \map \ln {\dfrac {1 + \sqrt {1 - x^2} } x}\)





Definition 1 implies Definition 2




\(\text {(2)}: \quad\)









\(\ds y = \map \ln {\dfrac {1 + \sqrt {1 - x^2} } x}\)

\(\implies\)







\(\ds x = \sech y\)





Definition 2 implies Definition 1








\(\ds \leadsto \ \ \)





\(\ds x = \sech y\)

\(\iff\)







\(\ds y = \map \ln {\dfrac {1 + \sqrt {1 - x^2} } x}\)









$\blacksquare$


Also see
Equivalence of Definitions of Real Area Hyperbolic Sine
Equivalence of Definitions of Real Area Hyperbolic Cosine
Equivalence of Definitions of Real Area Hyperbolic Tangent
Equivalence of Definitions of Real Area Hyperbolic Cotangent
Equivalence of Definitions of Real Area Hyperbolic Cosecant




