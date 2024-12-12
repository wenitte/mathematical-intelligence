# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Complex_Inverse_Sine_Function



Theorem
The following definitions of the concept of Complex Inverse Sine are equivalent:

Definition 1
Let $z \in \C$ be a complex number.
The inverse sine of $z$ is the multifunction defined as:

$\sin^{-1} \paren z := \set {w \in \C: \sin \paren w = z}$
where $\sin \paren w$ is the sine of $w$.

Definition 2
Let $z \in \C$ be a complex number.
The inverse sine of $z$ is the multifunction defined as:

$\sin^{-1} \paren z := \set {\dfrac 1 i \ln \paren {i z + \sqrt {\cmod {1 - z^2} } \exp \paren {\dfrac i 2 \arg \paren {1 - z^2} } } + 2 k \pi: k \in \Z}$
where:

$\sqrt {\cmod {1 - z^2} }$ denotes the positive square root of the complex modulus of $1 - z^2$
$\arg \paren {1 - z^2}$ denotes the argument of $1 - z^2$
$\ln$ is the complex natural logarithm considered as a  multifunction.


Proof
The proof strategy is to show that for all $z \in \C$:

$\set {w \in \C: z = \sin w} = \set {\dfrac 1 i \map \ln {i z + \sqrt {\cmod {1 - z^2} } e^{\paren {i / 2} \map \arg {1 - z^2} } } + 2 k \pi: k \in \Z}$

Thus let $z \in \C$.


Definition 1 implies Definition 2
It will be demonstrated that:

$\set {w \in \C: z = \sin w} \subseteq \set {\dfrac 1 i \map \ln {i z + \sqrt{\cmod {1 - z^2} } e^{\paren {i / 2} \map \arg {1 - z^2} } } + 2 k \pi: k \in \Z}$

Let $w \in \set {w \in \C: z = \sin w}$.
From Euler's Sine Identity:

$(1): \quad z = \dfrac {e^{i w} - e^{-i w} } {2 i}$

Let $v = e^{i w}$.
Then:














\(\ds 2 i z\)

\(=\)







\(\ds v - \frac 1 v\)





multiplying $(1)$ by $2 i$








\(\ds \leadsto \ \ \)





\(\ds v^2 - 2 i z v - 1\)

\(=\)







\(\ds 0\)





multiplying by $v$ and rearranging








\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds i z + \paren {1 - z^2}^{1/2}\)





Quadratic Formula, and $i^2 = -1$




Let $s = 1 - z^2$.
Then:














\(\ds v\)

\(=\)







\(\ds i z + s^{1/2}\)




















\(\ds \)

\(=\)







\(\ds i z + \sqrt {\cmod s} \paren {\map \cos {\frac {\map \arg s} 2} + i \map \sin {\frac {\map \arg s} 2} }\)





Definition of Complex Square Root




\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \ln v\)

\(=\)







\(\ds \map \ln {i z + \sqrt {\cmod s} \paren {\map \cos {\frac {\map \arg s} 2} + i \map \sin {\frac {\map \arg s} 2} } }\)





where $\ln$ denotes the Complex Natural Logarithm




We have that:














\(\ds v\)

\(=\)







\(\ds e^{i w}\)














\(\ds \leadsto \ \ \)





\(\ds \ln v\)

\(=\)







\(\ds \map \ln {e^{i w} }\)










\(\text {(3)}: \quad\)









\(\ds \)

\(=\)







\(\ds i w + 2 k' \pi i: k' \in \Z\)





Definition of Complex Natural Logarithm




Thus from $(2)$ and $(3)$:














\(\ds i w + 2 k' \pi i\)

\(=\)







\(\ds \map \ln {i z + \sqrt {\cmod s} \paren {\map \cos {\frac {\map \arg s} 2} + i \map \sin {\frac {\map \arg s} 2} } }\)














\(\ds \leadsto \ \ \)





\(\ds w\)

\(=\)







\(\ds \frac 1 i \map \ln {i z + \sqrt {\cmod s} \paren {\map \cos {\frac {\map \arg s} 2} + i \map \sin {\frac {\map \arg s} 2} } } + 2 k \pi\)





putting $k = -k'$








\(\ds \leadsto \ \ \)





\(\ds w\)

\(=\)







\(\ds \frac 1 i \map \ln {i z + \sqrt {\cmod {1 - z^2} } e^{\paren {i / 2} \map \arg {1 - z^2} } } + 2 k \pi\)





Definition of Exponential Form of Complex Number




Thus by definition of subset:

$\set {w \in \C: z = \sin w} \subseteq \set {\frac 1 i \map \ln {i z + \sqrt {\cmod {1 - z^2} } e^{\paren {i / 2} \map \arg {1 - z^2} } } + 2 k \pi: k \in \Z}$
$\Box$


Definition 2 implies Definition 1
It will be demonstrated that:

$\set {w \in \C: z = \sin w} \supseteq \set {\dfrac 1 i \map \ln {i z + \sqrt {\cmod {1 - z^2} } e^{\paren {i / 2} \map \arg {1 - z^2} } } + 2 k \pi: k \in \Z}$
Let $w \in \set {\dfrac 1 i \map \ln {i z + \sqrt {\cmod {1 - z^2} } e^{\paren {i / 2} \map \arg {1 - z^2} } } + 2 k \pi: k \in \Z}$.
Then:










\(\ds \exists k \in \Z: \, \)



\(\ds i w + 2 \paren {-k} \pi i\)

\(=\)







\(\ds \map \ln {i z + \sqrt {\cmod {1 - z^2} } e^{\paren {i / 2} \map \arg {1 - z^2} } }\)














\(\ds \leadsto \ \ \)





\(\ds e^{i w + 2 \paren {-k} \pi i}\)

\(=\)







\(\ds i z + \sqrt {\cmod {1 - z^2} } e^{\paren {i / 2} \map \arg {1 - z^2} }\)





Definition of Complex Natural Logarithm








\(\ds \leadsto \ \ \)





\(\ds e^{i w}\)

\(=\)







\(\ds i z + \sqrt {\cmod {1 - z^2} } e^{\paren {i / 2} \map \arg {1 - z^2} }\)





Complex Exponential Function has Imaginary Period








\(\ds \leadsto \ \ \)





\(\ds e^{i w} - i z\)

\(=\)







\(\ds \sqrt {\cmod {1 - z^2} } e^{\paren {i / 2} \map \arg {1 - z^2} }\)














\(\ds \leadsto \ \ \)





\(\ds \paren {e^{i w} - i z}^2\)

\(=\)







\(\ds \cmod {1 - z^2} e^{i \map \arg {1 - z^2} }\)





Roots of Complex Number








\(\ds \leadsto \ \ \)





\(\ds \paren {e^{i w} - i z}^2\)

\(=\)







\(\ds 1 - z^2\)





Definition of Exponential Form of Complex Number








\(\ds \leadsto \ \ \)





\(\ds e^{2 i w} - 2 i z e^{i w} - z^2\)

\(=\)







\(\ds 1 - z^2\)





Square of Difference and $i^2 = -1$








\(\ds \leadsto \ \ \)





\(\ds e^{2 i w}\)

\(=\)







\(\ds 1 + 2 i z e^{i w}\)














\(\ds \leadsto \ \ \)





\(\ds e^{i w} - \frac 1 {e^{i w} }\)

\(=\)







\(\ds 2 i z\)












\(\ds \leadsto \ \ \)







\(\ds z\)

\(=\)







\(\ds \frac {e^{i w} - e^{-i w} } {2 i}\)














\(\ds \leadsto \ \ \)





\(\ds z\)

\(=\)







\(\ds \sin w\)





Euler's Sine Identity








\(\ds \leadsto \ \ \)





\(\ds w\)

\(\in\)







\(\ds \set {w \in \C: z = \sin w}\)










Thus by definition of superset:

$\set {w \in \C: z = \sin w} \supseteq \set {\dfrac 1 i \map \ln {i z + \sqrt {\cmod {1 - z^2} } e^{\paren {i / 2} \map \arg {1 - z^2} } } + 2 k \pi: k \in \Z}$
$\Box$

Thus by definition of set equality:

$\set {w \in \C: z = \sin w} = \set {\dfrac 1 i \map \ln {i z + \sqrt {\cmod {1 - z^2} } e^{\paren {i / 2} \map \arg {1 - z^2} } } + 2 k \pi: k \in \Z}$
$\blacksquare$





