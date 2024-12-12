# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Complex_Inverse_Hyperbolic_Cosine



Theorem
The following definitions of the concept of Complex Inverse Hyperbolic Cosine are equivalent:

Definition 1
The inverse hyperbolic cosine is a multifunction defined as:

$\forall z \in \C: \map {\cosh^{-1} } z := \set {w \in \C: z = \map \cosh w}$
where $\map \cosh w$ is the hyperbolic cosine function.

Definition 2
The inverse hyperbolic cosine is a multifunction defined as:

$\forall z \in \C: \map {\cosh^{-1} } z := \set {\map \ln {z + \sqrt {\size {z^2 - 1} } e^{\paren {i / 2} \map \arg {z^2 - 1} } } + 2 k \pi i: k \in \Z}$
where:

$\sqrt {\size {z^2 - 1} }$ denotes the positive square root of the complex modulus of $z^2 - 1$
$\map \arg {z^2 - 1}$ denotes the argument of $z^2 - 1$
$\ln$ denotes the complex natural logarithm considered as a  multifunction.


Proof
The proof strategy is to how that for all $z \in \C$:

$\set {w \in \C: z = \cosh w} = \set {\map \ln {z + \sqrt {\cmod {z^2 - 1} } e^{\paren {i / 2} \map \arg {z^2 - 1} } } + 2 k \pi i: k \in \Z}$

Thus let $z \in \C$.


Definition 1 implies Definition 2
It is demonstrated that:

$\set {w \in \C: z = \cosh w} \subseteq \set {\map \ln {z + \sqrt {\cmod {z^2 - 1} } e^{\paren {i / 2} \map \arg {z^2 - 1} } } + 2 k \pi i: k \in \Z}$

Let $w \in \set {w \in \C: z = \cosh w}$.
By definition of hyperbolic cosine:

$(1): \quad z = \dfrac {e^w + e^{-w} } 2$

Let $v = e^w$.
Then:














\(\ds 2 z\)

\(=\)







\(\ds v + \frac 1 v\)





multiplying $(1)$ by $2$








\(\ds \leadsto \ \ \)





\(\ds v^2 - 2 z v + 1\)

\(=\)







\(\ds 0\)





multiplying by $v$ and rearranging








\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds z + \paren {z^2 - 1}^{1/2}\)





Quadratic Formula




Let $s = z^2 - 1$.
Then:














\(\ds v\)

\(=\)







\(\ds z + s^{1/2}\)




















\(\ds \)

\(=\)







\(\ds z + \sqrt {\cmod s} \paren {\map \cos {\frac {\map \arg s} 2} + i \map \sin {\frac {\map \arg s} 2} }\)





Definition of Complex Square Root




\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \ln v\)

\(=\)







\(\ds \map \ln {z + \sqrt {\cmod s} \paren {\map \cos {\frac {\map \arg s} 2} + i \map \sin {\frac {\map \arg s} 2} } }\)





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







\(\ds \map \ln {z + \sqrt {\cmod s} \paren {\map \cos {\frac {\map \arg s} 2} + i \map \sin {\frac {\map \arg s} 2} } }\)














\(\ds \leadsto \ \ \)





\(\ds w\)

\(=\)







\(\ds \map \ln {z + \sqrt {\cmod s} \paren {\map \cos {\frac {\map \arg s} 2} + i \map \sin {\frac {\map \arg s} 2} } } + 2 k \pi i\)





putting $k = -k'$








\(\ds \leadsto \ \ \)





\(\ds w\)

\(=\)







\(\ds \map \ln {z + \sqrt {\cmod {z^2 - 1} } e^{\paren {i / 2} \map \arg {z^2 - 1} } } + 2 k \pi i\)





Definition of Exponential Form of Complex Number




Thus by definition of subset:

$\set {w \in \C: z = \cos w} \subseteq \set {\map \ln {z + \sqrt {\cmod {z^2 - 1} } e^{\paren {i / 2} \map \arg {z^2 - 1} } } + 2 k \pi i: k \in \Z}$
$\Box$


Definition 2 implies Definition 1
It is demonstrated that:

$\set {w \in \C: z = \cos w} \supseteq \set {\map \ln {z + \sqrt {\cmod {z^2 - 1} } e^{\paren {i / 2} \map \arg {z^2 - 1} } } + 2 k \pi i: k \in \Z}$
Let $w \in \set {\map \ln {z + \sqrt {\cmod {z^2 - 1} } e^{\paren {i / 2} \map \arg {z^2 - 1} } } + 2 k \pi i: k \in \Z}$.
Then:










\(\ds \exists k \in \Z: \, \)



\(\ds w + 2 \paren {-k} \pi i\)

\(=\)







\(\ds \map \ln {z + \sqrt {\cmod {z^2 - 1} } e^{\paren {i / 2} \map \arg {z^2 - 1} } }\)














\(\ds \leadsto \ \ \)





\(\ds e^{w + 2 \paren {-k} \pi i}\)

\(=\)







\(\ds z + \sqrt {\cmod {z^2 - 1} } e^{\paren {i / 2} \map \arg {z^2 - 1} }\)





Definition of Complex Natural Logarithm








\(\ds \leadsto \ \ \)





\(\ds e^w\)

\(=\)







\(\ds z + \sqrt {\cmod {z^2 - 1} } e^{\paren {i / 2} \map \arg {z^2 - 1} }\)





Complex Exponential Function has Imaginary Period








\(\ds \leadsto \ \ \)





\(\ds e^w - z\)

\(=\)







\(\ds \sqrt {\cmod {z^2 - 1} } e^{\paren {i / 2} \map \arg {z^2 - 1} }\)














\(\ds \leadsto \ \ \)





\(\ds \paren {e^w - z}^2\)

\(=\)







\(\ds \cmod {z^2 - 1} e^{i \map \arg {z^2 - 1} }\)





Roots of Complex Number








\(\ds \leadsto \ \ \)





\(\ds \paren {e^w - z}^2\)

\(=\)







\(\ds z^2 - 1\)





Definition of Exponential Form of Complex Number








\(\ds \leadsto \ \ \)





\(\ds e^{2 w} - 2 z e^w + z^2\)

\(=\)







\(\ds z^2 - 1\)





Square of Difference








\(\ds \leadsto \ \ \)





\(\ds e^{2 w} + 1\)

\(=\)







\(\ds 2 z e^w\)














\(\ds \leadsto \ \ \)





\(\ds e^w + \frac 1 {e^w}\)

\(=\)







\(\ds 2 z\)














\(\ds \leadsto \ \ \)





\(\ds z\)

\(=\)







\(\ds \frac {e^w + e^{-w} } 2\)














\(\ds \leadsto \ \ \)





\(\ds z\)

\(=\)







\(\ds \cosh w\)





Definition of Hyperbolic Cosine








\(\ds \leadsto \ \ \)





\(\ds w\)

\(\in\)







\(\ds \set {w \in \C: z = \cosh w}\)










Thus by definition of superset:

$\set {w \in \C: z = \cosh w} \supseteq \set {\map \ln {z + \sqrt {\cmod {z^2 - 1} } e^{\paren {i / 2} \map \arg {z^2 - 1} } } + 2 k \pi i: k \in \Z}$
$\Box$

Thus by definition of set equality:

$\set {w \in \C: z = \cosh w} = \set {\map \ln {z + \sqrt {\cmod {z^2 - 1} } e^{\paren {i / 2} \map \arg {z^2 - 1} } } + 2 k \pi i: k \in \Z}$
$\blacksquare$





