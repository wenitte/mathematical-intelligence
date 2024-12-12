# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Real_Hyperbolic_Cotangent



Theorem
The following definitions of the concept of Real Hyperbolic Cotangent are equivalent:

Definition 1
The real hyperbolic cotangent function is defined on the real numbers as:

$\coth: \R_{\ne 0} \to \R$:
$\forall x \in \R_{\ne 0}: \coth x := \dfrac {e^x + e^{-x} } {e^x - e^{-x} }$
where it is noted that at $x = 0$:

$e^x - e^{-x} = 0$
and so $\coth x$ is not defined at that point.

Definition 2
The real hyperbolic cotangent function is defined on the real numbers as:

$\coth: \R_{\ne 0} \to \R$:
$\forall x \in \R_{\ne 0}: \coth x := \dfrac {\cosh x} {\sinh x}$
where:

$\sinh$ is the real hyperbolic sine
$\cosh$ is the real hyperbolic cosine
It is noted that at $x = 0$ we have that $\sinh x = 0$, and so $\coth x$ is not defined at that point.

Definition 3
The real hyperbolic cotangent function is defined on the real numbers as:

$\coth: \R_{\ne 0} \to \R$:
$\forall x \in \R_{\ne 0}: \coth x := \dfrac 1 {\tanh x}$
where $\tanh$ is the real hyperbolic tangent.
It is noted that at $x = 0$ we have that $\tanh x = 0$, and so $\coth x$ is not defined at that point.


Proof













\(\ds \coth x\)

\(=\)







\(\ds \dfrac {\cosh x} {\sinh x}\)





Definition 2 of Real Hyperbolic Cotangent














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {\dfrac {e^x - e^{-x} } 2} } {\paren {\dfrac {e^x + e^{-x} } 2} }\)





Definition of Real Hyperbolic Sine, Definition of Real Hyperbolic Cosine














\(\ds \)

\(=\)







\(\ds \dfrac {e^x + e^{-x} } {e^x - e^{-x} }\)





simplification














\(\ds \)

\(=\)







\(\ds \coth x\)





Definition 1 of Real Hyperbolic Cotangent



$\Box$















\(\ds \coth x\)

\(=\)







\(\ds \dfrac {\cosh x} {\sinh x}\)





Definition 2 of Real Hyperbolic Cotangent














\(\ds \)

\(=\)







\(\ds \dfrac 1 {\paren {\dfrac {\sinh x} {\cosh x} } }\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {\tanh x}\)





Definition 2 of Real Hyperbolic Tangent














\(\ds \)

\(=\)







\(\ds \coth x\)





Definition 3 of Real Hyperbolic Cotangent



$\blacksquare$





