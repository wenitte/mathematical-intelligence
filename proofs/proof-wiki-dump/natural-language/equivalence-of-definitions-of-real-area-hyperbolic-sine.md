# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Real_Area_Hyperbolic_Sine



Theorem
The following definitions of the concept of Real Area Hyperbolic Sine are equivalent:

Definition 1
The inverse hyperbolic sine $\arsinh: \R \to \R$ is a real function defined on $\R$ as:

$\forall x \in \R: \map \arsinh x := y \in \R: x = \map \sinh y$
where $\map \sinh y$ denotes the hyperbolic sine function.

Definition 2
The inverse hyperbolic sine $\arsinh: \R \to \R$ is a real function defined on $\R$ as:

$\forall x \in \R: \map \arsinh x := \map \ln {x + \sqrt {x^2 + 1} }$
where:

$\ln$ denotes the natural logarithm of a (strictly positive) real number
$\sqrt {x^2 + 1}$ denotes the positive square root of $x^2 + 1$.


Proof
Definition 1 implies Definition 2
Let $x = \sinh y$.
Let $z = e^y$.
Then:














\(\ds x\)

\(=\)







\(\ds \frac {e^y - e^{- y} } 2\)





Definition of Hyperbolic Sine








\(\ds \leadsto \ \ \)





\(\ds 2 x\)

\(=\)







\(\ds e^y - e^{- y}\)














\(\ds \leadsto \ \ \)





\(\ds 2 x e^y\)

\(=\)







\(\ds e^{2 y} - 1\)














\(\ds \leadsto \ \ \)





\(\ds z^2 - 2 x z - 1\)

\(=\)







\(\ds 0\)





Power of Power








\(\ds \leadsto \ \ \)





\(\ds z\)

\(=\)







\(\ds \frac {2 x \pm \sqrt {\paren {-2 x}^2 + 4} } 2\)





Quadratic Formula














\(\ds \)

\(=\)







\(\ds x \pm \sqrt {x^2 + 1}\)














\(\ds \leadsto \ \ \)





\(\ds e^y\)

\(=\)







\(\ds x \pm \sqrt {x^2 + 1}\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds \map \ln {x \pm \sqrt {x^2 + 1} }\)










If $x \ge 0$, then:














\(\ds \sqrt {x^2 + 1}\)

\(>\)







\(\ds \sqrt {x^2}\)





Square Root is Strictly Increasing














\(\ds \)

\(=\)







\(\ds x\)














\(\ds \leadsto \ \ \)





\(\ds \sqrt {x^2 + 1}\)

\(>\)







\(\ds x\)














\(\ds \leadsto \ \ \)





\(\ds x - \sqrt {x^2 + 1}\)

\(<\)







\(\ds 0\)










If $x < 0$, then:




\(\text {(1)}: \quad\)









\(\ds -\sqrt {x^2 + 1}\)

\(<\)







\(\ds 0\)





Positive Square Root is Positive




\(\text {(2)}: \quad\)









\(\ds x\)

\(<\)







\(\ds 0\)





Assumption














\(\ds x - \sqrt {x^2 + 1}\)

\(<\)







\(\ds 0\)





$(1) + (2)$




Since the natural logarithm of a negative number is not defined:

$y = \map \ln {x + \sqrt {x^2 + 1} }$
$\Box$


Definition 2 implies Definition 1
Let $y = x + \sqrt {x^2 + 1}$.














\(\ds \map \sinh {\map \ln {x + \sqrt {x^2 + 1} } }\)

\(=\)







\(\ds \map \sinh {\ln y}\)




















\(\ds \)

\(=\)







\(\ds \frac {e^{\ln y} - e^{-\ln y} } 2\)





Definition of Hyperbolic Sine














\(\ds \)

\(=\)







\(\ds \frac {y - \frac 1 y} 2\)




















\(\ds \)

\(=\)







\(\ds \frac {y^2 - 1} {2 y}\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {x + \sqrt {x^2 + 1} }^2 - 1} {2 x + 2 \sqrt {x^2 + 1} }\)




















\(\ds \)

\(=\)







\(\ds \frac {x^2 + 2 x \sqrt {x^2 + 1} + \paren {x^2 + 1} - 1} {2 x + 2 \sqrt {x^2 + 1} }\)




















\(\ds \)

\(=\)







\(\ds \frac {2 x^2 + 2 x \sqrt {x^2 + 1} } {2 x + 2 \sqrt {x^2 + 1} }\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {2 x + 2 \sqrt {x^2 + 1} } x} {2 x + 2 \sqrt {x^2 + 1} }\)




















\(\ds \)

\(=\)







\(\ds x\)









$\Box$

Therefore:




\(\text {(1)}: \quad\)









\(\ds x = \sinh y\)

\(\implies\)







\(\ds y = \map \ln {x + \sqrt {x^2 + 1} }\)





Definition 1 implies Definition 2




\(\text {(2)}: \quad\)









\(\ds y = \map \ln {x + \sqrt {x^2 + 1} }\)

\(\implies\)







\(\ds x = \sinh y\)





Definition 2 implies Definition 1








\(\ds \leadsto \ \ \)





\(\ds x = \sinh y\)

\(\iff\)







\(\ds y = \map \ln {x + \sqrt {x^2 + 1} }\)









$\blacksquare$


Also see
Equivalence of Definitions of Real Area Hyperbolic Cosine
Equivalence of Definitions of Real Area Hyperbolic Tangent
Equivalence of Definitions of Real Area Hyperbolic Cosecant
Equivalence of Definitions of Real Area Hyperbolic Secant
Equivalence of Definitions of Real Area Hyperbolic Cotangent




