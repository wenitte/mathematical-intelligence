# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Complex_Inverse_Hyperbolic_Secant



Theorem
The following definitions of the concept of Complex Inverse Hyperbolic Secant are equivalent:

Definition 1
The inverse hyperbolic secant is a multifunction defined as:

$\forall z \in \C_{\ne 0}: \map {\sech^{-1} } z := \set {w \in \C: z = \map \sech w}$
where $\map \sech w$ is the hyperbolic secant function.


Definition 2
The inverse hyperbolic secant is a multifunction defined as:

$\forall z \in \C_{\ne 0}: \map {\sech^{-1} } z := \set {\map \ln {\dfrac {1 + \sqrt {\size {1 - z^2} } e^{\paren {i / 2} \map \arg {1 - z^2} } } z} + 2 k \pi i: k \in \Z}$
where:

$\sqrt {\size {1 - z^2} }$ denotes the positive square root of the complex modulus of $1 - z^2$
$\map \arg {1 - z^2}$ denotes the argument of $1 - z^2$
$\ln$ denotes the complex natural logarithm as a multifunction.


Proof
The proof strategy is to show that for all $z \in \C_{\ne 0}$:

$\set {w \in \C: z = \sech w} = \set {\map \ln {\dfrac {1 + \sqrt {\cmod {1 - z^2} } e^{\paren {i / 2} \map \arg {1 - z^2} } } z} + 2 k \pi i: k \in \Z}$

Thus let $z \in \C_{\ne 0}$.


Definition 1 implies Definition 2
It will be demonstrated that:

$\set {w \in \C: z = \sech w} \subseteq \set {\map \ln {\dfrac {1 + \sqrt {\cmod {1 - z^2} } e^{\paren {i / 2} \map \arg {1 - z^2} } } z} + 2 k \pi i: k \in \Z}$

Let $w \in \set {w \in \C: z = \sech w}$.
From the definition of hyperbolic secant:

$(1): \quad z = \dfrac 2 {e^w + e^{- w}}$

Let $v = e^w$.
Then:














\(\ds z \paren {v + \frac 1 v}\)

\(=\)







\(\ds 2\)





multiplying $(1)$ by $v + \dfrac 1 v$








\(\ds \leadsto \ \ \)





\(\ds z v^2 - 2 v + z\)

\(=\)







\(\ds 0\)





multiplying by $v$ and rearranging








\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {1 + \paren {1 - z^2}^{1 / 2} } z\)





Quadratic Formula




Let $s = 1 - z^2$.
Then:














\(\ds v\)

\(=\)







\(\ds \frac {1 + s^{1/2} } z\)




















\(\ds \)

\(=\)







\(\ds \frac {1 + \sqrt {\cmod s} \paren {\map \cos {\dfrac {\map \arg s} 2} + i \map \sin {\dfrac {\map \arg s} 2} } } z\)





Definition of Complex Square Root




\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \ln v\)

\(=\)







\(\ds \map \ln {\frac {1 + \sqrt {\cmod s} \paren {\map \cos {\dfrac {\map \arg s} 2} + i \map \sin {\dfrac {\map \arg s} 2} } } z}\)





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



\(\ds \leadsto \ \ \)

\(\ds \exists k' \in \Z: \, \)



\(\ds \ln v\)

\(=\)







\(\ds w + 2 k' \pi i\)





Definition of Complex Natural Logarithm




Thus from $(2)$ and $(3)$:














\(\ds w + 2 k' \pi i\)

\(=\)







\(\ds \map \ln {\frac {1 + \sqrt {\cmod s} \paren {\map \cos {\dfrac {\map \arg s} 2} + i \map \sin {\dfrac {\map \arg s} 2} } } z}\)














\(\ds \leadsto \ \ \)





\(\ds w\)

\(=\)







\(\ds \map \ln {\frac {1 + \sqrt {\cmod s} \paren {\map \cos {\dfrac {\map \arg s} 2} + i \map \sin {\dfrac {\map \arg s} 2} } } z} + 2 k \pi i\)





putting $k = -k'$








\(\ds \leadsto \ \ \)





\(\ds w\)

\(=\)







\(\ds \map \ln {\frac {1 + \sqrt {\cmod {1 - z^2} } e^{\paren {i / 2} \map \arg {1 - z^2} } } z} + 2 k \pi i\)





Definition of Exponential Form of Complex Number




Thus by definition of subset:

$\set {w \in \C: z = \sech w} \subseteq \set {\map \ln {\dfrac {1 + \sqrt {\cmod {1 - z^2} } e^{\paren {i / 2} \map \arg {1 - z^2} } } z} + 2 k \pi i: k \in \Z}$
$\Box$


Definition 2 implies Definition 1
It will be demonstrated that:

$\set {w \in \C: z = \sech w} \supseteq \set {\map \ln {\dfrac {1 + \sqrt {\cmod {1 - z^2} } e^{\paren {i / 2} \map \arg {1 - z^2} } } z} + 2 k \pi i: k \in \Z}$
Let $w \in \set {\map \ln {\dfrac {1 + \sqrt {\cmod {1 - z^2} } e^{\paren {i / 2} \map \arg {1 - z^2} } } z} + 2 k \pi i: k \in \Z}$.
Then:










\(\ds \exists k \in \Z: \, \)



\(\ds w + 2 \paren {-k} \pi i\)

\(=\)







\(\ds \map \ln {\dfrac {1 + \sqrt {\cmod {1 - z^2} } e^{\paren {i / 2} \map \arg {1 - z^2} } } z}\)














\(\ds \leadsto \ \ \)





\(\ds e^{w + 2 \paren {-k} \pi i}\)

\(=\)







\(\ds \dfrac {1 + \sqrt {\cmod {1 - z^2} } e^{\paren {i / 2} \map \arg {1 - z^2} } } z\)





Definition of Complex Natural Logarithm








\(\ds \leadsto \ \ \)





\(\ds e^w\)

\(=\)







\(\ds \dfrac {1 + \sqrt {\cmod {1 - z^2} } e^{\paren {i / 2} \map \arg {1 - z^2} } } z\)





Complex Exponential Function has Imaginary Period








\(\ds \leadsto \ \ \)





\(\ds z e^w - 1\)

\(=\)







\(\ds \sqrt {\cmod {1 - z^2} } e^{\paren {i / 2} \map \arg {1 - z^2} }\)














\(\ds \leadsto \ \ \)





\(\ds \paren {z e^w - 1}^2\)

\(=\)







\(\ds \cmod {1 - z^2} e^{i \map \arg {1 - z^2} }\)





Roots of Complex Number








\(\ds \leadsto \ \ \)





\(\ds \paren {z e^w - 1}^2\)

\(=\)







\(\ds 1 - z^2\)





Definition of Exponential Form of Complex Number








\(\ds \leadsto \ \ \)





\(\ds z^2 e^{2 w} - 2 z e^w + 1\)

\(=\)







\(\ds 1 - z^2\)





Square of Difference








\(\ds \leadsto \ \ \)





\(\ds z^2 e^{2 w} - 2 z e^w\)

\(=\)







\(\ds - z^2\)














\(\ds \leadsto \ \ \)





\(\ds z e^{2 w} + z\)

\(=\)







\(\ds 2 e^w\)














\(\ds \leadsto \ \ \)





\(\ds z \paren {e^w + \frac 1 {e^w} }\)

\(=\)







\(\ds 2\)














\(\ds \leadsto \ \ \)





\(\ds z\)

\(=\)







\(\ds \frac 2 {e^w + e^{- w} }\)














\(\ds \leadsto \ \ \)





\(\ds z\)

\(=\)







\(\ds \sech w\)





Definition of Hyperbolic Secant








\(\ds \leadsto \ \ \)





\(\ds w\)

\(\in\)







\(\ds \set {w \in \C: z = \sech w}\)










Thus by definition of superset:

$\set {w \in \C: z = \sech w} \supseteq \set {\map \ln {\dfrac {1 + \sqrt {\cmod {1 - z^2} } e^{\paren {i / 2} \map \arg {1 - z^2} } } z} + 2 k \pi i: k \in \Z}$
$\Box$

Thus by definition of set equality:

$\set {w \in \C: z = \sech w} = \set {\map \ln {\dfrac {1 + \sqrt {\cmod {1 - z^2} } e^{\paren {i / 2} \map \arg {1 - z^2} } } z} + 2 k \pi i: k \in \Z}$
$\blacksquare$





