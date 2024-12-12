# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Complex_Inverse_Hyperbolic_Cosecant



Theorem
The following definitions of the concept of Complex Inverse Hyperbolic Cosecant are equivalent:

Definition 1
The inverse hyperbolic cosecant is a multifunction defined as:

$\forall z \in \C_{\ne 0}: \map {\csch^{-1} } z := \set {w \in \C: z = \map \csch w}$
where $\map \csch w$ is the hyperbolic cosecant function.

Definition 2
The inverse hyperbolic cosecant is a multifunction defined as:

$\forall z \in \C_{\ne 0}: \map {\csch^{-1} } z := \set {\map \ln {\dfrac {1 + \sqrt {\size {z^2 + 1} } e^{\paren {i / 2} \map \arg {z^2 + 1} } } z} + 2 k \pi i: k \in \Z}$
where:

$\sqrt {\size {z^2 + 1} }$ denotes the positive square root of the complex modulus of $z^2 + 1$
$\map \arg {z^2 + 1}$ denotes the argument of $z^2 + 1$
$\ln$ denotes the complex natural logarithm considered as a multifunction.


Proof
The proof strategy is to show that for all $z \in \C$:

$\set {w \in \C: z = \csch w} = \set {\map \ln {\dfrac {1 + \sqrt {\cmod {z^2 + 1} } e^{\paren {i / 2} \map \arg {z^2 + 1} } } z} + 2 k \pi i: k \in \Z}$

Thus let $z \in \C$.


Definition 1 implies Definition 2
It will be demonstrated that:

$\set {w \in \C: z = \csch w} \subseteq \set {\map \ln {\dfrac {1 + \sqrt {\cmod {z^2 + 1} } e^{\paren {i / 2} \map \arg {z^2 + 1} } } z} + 2 k \pi i: k \in \Z}$

Let $w \in \set {w \in \C: z = \csch w}$.
From the definition of hyperbolic cosecant:

$(1): \quad z = \dfrac 2 {e^w - e^{- w} }$

Let $v = e^w$.
Then:














\(\ds z \paren {v - \frac 1 v}\)

\(=\)







\(\ds 2\)





multiplying $(1)$ by $v - \dfrac 1 v$








\(\ds \leadsto \ \ \)





\(\ds z v^2 - 2 v - z\)

\(=\)







\(\ds 0\)





multiplying by $v$ and rearranging








\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {1 + \paren {1 + z^2}^{1/2} } z\)





Quadratic Formula




Let $s = z^2 + 1$.
Then:














\(\ds v\)

\(=\)







\(\ds \frac {1 + s^{1/2} } z\)




















\(\ds \)

\(=\)







\(\ds \frac {1 + \sqrt {\cmod s} \paren {\map \cos {\dfrac {\map \arg s} 2} + i \, \map \sin {\dfrac {\map \arg s} 2} } } z\)





Definition of Complex Square Root




\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \ln v\)

\(=\)







\(\ds \map \ln {\frac {1 + \sqrt {\cmod s} \paren {\map \cos {\dfrac {\map \arg s} 2} + i \, \map \sin {\dfrac {\map \arg s} 2} } } z}\)





where $\ln$ denotes the Complex Natural Logarithm




We have that:














\(\ds v\)

\(=\)







\(\ds e^w\)














\(\ds \leadsto \ \ \)





\(\ds \ln v\)

\(=\)







\(\ds \map \ln {e^w}\)










\(\text {(3)}: \quad\)





\(\ds \exists k' \in \Z: \, \)



\(\ds \)

\(=\)







\(\ds w + 2 k' \pi i\)





Definition of Complex Natural Logarithm




Thus from $(2)$ and $(3)$:














\(\ds w + 2 k' \pi i\)

\(=\)







\(\ds \map \ln {\frac {1 + \sqrt {\cmod s} \paren {\map \cos {\dfrac {\map \arg s} 2} + i \, \map \sin {\dfrac {\map \arg s} 2} } } z}\)














\(\ds \leadsto \ \ \)





\(\ds w\)

\(=\)







\(\ds \map \ln {\frac {1 + \sqrt {\cmod s} \paren {\map \cos {\dfrac {\map \arg s} 2} + i \map \sin {\dfrac {\map \arg s} 2} } } z} + 2 k \pi i\)





putting $k = -k'$








\(\ds \leadsto \ \ \)





\(\ds w\)

\(=\)







\(\ds \map \ln {\frac {1 + \sqrt {\cmod {z^2 + 1} } e^{\paren {i / 2} \map \arg {z^2 + 1} } } z} + 2 k \pi i\)





Definition of Exponential Form of Complex Number




Thus by definition of subset:

$\set {w \in \C: z = \csch w} \subseteq \set {\map \ln {\dfrac {1 + \sqrt {\cmod {z^2 + 1} } e^{\paren {i / 2} \map \arg {z^2 + 1} } } z} + 2 k \pi i: k \in \Z}$
$\Box$


Definition 2 implies Definition 1
It will be demonstrated that:

$\set {w \in \C: z = \csch w} \supseteq \set {\map \ln {\dfrac {1 + \sqrt {\cmod {z^2 + 1} } e^{\paren {i / 2} \map \arg {z^2 + 1} } } z} + 2 k \pi i: k \in \Z}$

Let $w \in \set {\map \ln {\dfrac {1 + \sqrt {\cmod {z^2 + 1} } e^{\paren {i / 2} \map \arg {z^2 + 1} } } z} + 2 k \pi i: k \in \Z}$.
Then:










\(\ds \exists k \in \Z: \, \)



\(\ds w + 2 \paren {-k} \pi i\)

\(=\)







\(\ds \map \ln {\dfrac {1 + \sqrt {\cmod {z^2 + 1} } e^{\paren {i / 2} \map \arg {z^2 + 1} } } z}\)














\(\ds \leadsto \ \ \)





\(\ds e^{w + 2 \paren {-k} \pi i}\)

\(=\)







\(\ds \dfrac {1 + \sqrt {\cmod {z^2 + 1} } e^{\paren {i / 2} \map \arg {z^2 + 1} } } z\)





Definition of Complex Natural Logarithm








\(\ds \leadsto \ \ \)





\(\ds e^w\)

\(=\)







\(\ds \dfrac {1 + \sqrt {\cmod {z^2 + 1} } e^{\paren {i / 2} \map \arg {z^2 + 1} } } z\)





Complex Exponential Function has Imaginary Period








\(\ds \leadsto \ \ \)





\(\ds z e^w - 1\)

\(=\)







\(\ds \sqrt {\cmod {z^2 + 1} } e^{\paren {i / 2} \map \arg {z^2 + 1} }\)














\(\ds \leadsto \ \ \)





\(\ds \paren {z e^w - 1}^2\)

\(=\)







\(\ds \cmod {z^2 + 1}  e^{i \map \arg {z^2 + 1} }\)





Roots of Complex Number








\(\ds \leadsto \ \ \)





\(\ds \paren {z e^w - 1}^2\)

\(=\)







\(\ds z^2 + 1\)





Definition of Exponential Form of Complex Number








\(\ds \leadsto \ \ \)





\(\ds z^2 e^{2 w} - 2 z e^w + 1\)

\(=\)







\(\ds z^2 + 1\)





Square of Difference








\(\ds \leadsto \ \ \)





\(\ds z^2 e^{2 w} - 2 z e^w\)

\(=\)







\(\ds z^2\)














\(\ds \leadsto \ \ \)





\(\ds z e^{2 w} - z\)

\(=\)







\(\ds 2 e^w\)














\(\ds \leadsto \ \ \)





\(\ds z \paren {e^w - \frac 1 {e^w} }\)

\(=\)







\(\ds 2\)














\(\ds \leadsto \ \ \)





\(\ds z\)

\(=\)







\(\ds \frac 2 {e^w - e^{-w} }\)














\(\ds \leadsto \ \ \)





\(\ds z\)

\(=\)







\(\ds \csch w\)





Definition of Hyperbolic Cosecant








\(\ds \leadsto \ \ \)





\(\ds w\)

\(\in\)







\(\ds \set {w \in \C: z = \csch w}\)










Thus by definition of superset:

$\set {w \in \C: z = \csch w} \supseteq \set {\map \ln {\dfrac {1 + \sqrt {\cmod {z^2 + 1} } e^{\paren {i / 2} \map \arg {z^2 + 1} } } z} + 2 k \pi i: k \in \Z}$
$\Box$

Thus by definition of set equality:

$\set {w \in \C: z = \csch w} = \set {\map \ln {\dfrac {1 + \sqrt {\cmod {z^2 + 1} } e^{\paren {i / 2} \map \arg {z^2 + 1} } } z} + 2 k \pi i: k \in \Z}$
$\blacksquare$





