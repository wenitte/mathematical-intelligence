# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Complex_Inverse_Secant_Function



Theorem
The following definitions of the concept of Complex Inverse Secant are equivalent:

Definition 1
Let $z \in \C_{\ne 0}$ be a non-zero complex number.
The inverse secant of $z$ is the multifunction defined as:

$\inv \sec z := \set {w \in \C: \map \sec w = z}$
where $\map \sec w$ is the secant of $w$.

Definition 2
Let $z \in \C_{\ne 0}$ be a non-zero complex number.
The inverse secant of $z$ is the multifunction defined as:

$\sec^{-1} z := \set {\dfrac 1 i \map \ln {\dfrac {1 + \sqrt {\size {1 - z^2} } e^{\paren {i / 2} \map \arg {1 - z^2} } } z} + 2 k \pi: k \in \Z}$
where:

$\sqrt {\size {1 - z^2} }$ denotes the positive square root of the complex modulus of $1 - z^2$
$\map \arg {1 - z^2}$ denotes the argument of $1 - z^2$
$\ln$ denotes the complex natural logarithm as a multifunction.


Proof
The proof strategy is to show that for all $z \in \C_{\ne 0}$:

$\set {w \in \C: \sec w = z} = \set {\dfrac 1 i \map \ln {\dfrac {1 + \sqrt {\cmod {1 - z^2} } e^{\paren {i / 2} \map \arg {1 - z^2} } } z} + 2 k \pi: k \in \Z}$

Thus let $z \in \C$.


Definition 1 implies Definition 2
It will be demonstrated that:

$\set {w \in \C: \sec w = z} \subseteq \set {\dfrac 1 i \map \ln {\dfrac {1 + \sqrt {\cmod {1 - z^2} } e^{\paren {i / 2} \map \arg {1 - z^2} } } z} + 2 k \pi: k \in \Z}$

Let $w \in \set {w \in \C: \sec w = z}$.
From Euler's Secant Identity:

$(1): \quad z = \dfrac 2 {e^{i w} + e^{-i w} }$

Let $v = e^{i w}$.
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







\(\ds \frac {1 + \paren {1 - z^2}^{1/2} } z\)





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







\(\ds \map \ln {\frac {1 + \sqrt {\cmod s} \paren {\map \cos {\dfrac {\map \arg s} 2} + i \map \sin {\dfrac {\map \arg s} 2} } } z}\)














\(\ds \leadsto \ \ \)





\(\ds w\)

\(=\)







\(\ds \frac 1 i \map \ln {\frac {1 + \sqrt {\cmod s} \paren {\map \cos {\dfrac {\map \arg s} 2} + i \map \sin {\dfrac {\map \arg s} 2} } } z} + 2 k \pi\)





putting $k = -k'$








\(\ds \leadsto \ \ \)





\(\ds w\)

\(=\)







\(\ds \dfrac 1 i \map \ln {\dfrac {1 + \sqrt {\cmod {1 - z^2} } e^{\paren {i / 2} \map \arg {1 - z^2} } } z} + 2 k \pi\)





Definition of Exponential Form of Complex Number




Thus by definition of subset:

$\set {w \in \C: \sec w = z} \subseteq \set {\dfrac 1 i \map \ln {\dfrac {1 + \sqrt {\cmod {1 - z^2} } e^{\paren {i / 2} \map \arg {1 - z^2} } } z} + 2 k \pi: k \in \Z}$
$\Box$


Definition 2 implies Definition 1
It will be demonstrated that:

$\set {w \in \C: \sec w = z} \supseteq \set {\dfrac 1 i \map \ln {\dfrac {1 + \sqrt {\cmod {1 - z^2} } e^{\paren {i / 2} \map \arg {1 - z^2} } } z} + 2 k \pi: k \in \Z}$
Let $w \in \set {\dfrac 1 i \map \ln {\dfrac {1 + \sqrt {\cmod {1 - z^2} } e^{\paren {i / 2} \map \arg {1 - z^2} } } z} + 2 k \pi: k \in \Z}$.
Then:










\(\ds \exists k \in \Z: \, \)



\(\ds i w + 2 \paren {-k} \pi i\)

\(=\)







\(\ds \map \ln {\dfrac {1 + \sqrt {\cmod {1 - z^2} } e^{\paren {i / 2} \map \arg {1 - z^2} } } z}\)














\(\ds \leadsto \ \ \)





\(\ds e^{i w + 2 \paren {-k} \pi i}\)

\(=\)







\(\ds \dfrac {1 + \sqrt {\cmod {1 - z^2} } e^{\paren {i / 2} \map \arg {1 - z^2} } } z\)





Definition of Complex Natural Logarithm








\(\ds \leadsto \ \ \)





\(\ds e^{i w}\)

\(=\)







\(\ds \dfrac {1 + \sqrt {\cmod {1 - z^2} } e^{\paren {i / 2} \map \arg {1 - z^2} } } z\)





Complex Exponential Function has Imaginary Period








\(\ds \leadsto \ \ \)





\(\ds z e^{i w} - 1\)

\(=\)







\(\ds \sqrt {\cmod {1 - z^2} } e^{\paren {i / 2} \map \arg {1 - z^2} }\)














\(\ds \leadsto \ \ \)





\(\ds \paren {z e^{i w} - 1}^2\)

\(=\)







\(\ds \cmod {1 - z^2} e^{i \arg \paren {1 - z^2} }\)





Roots of Complex Number








\(\ds \leadsto \ \ \)





\(\ds \paren {z e^{i w} - 1}^2\)

\(=\)







\(\ds 1 - z^2\)





Definition of Exponential Form of Complex Number








\(\ds \leadsto \ \ \)





\(\ds z^2 e^{2 i w} - 2 z e^{i w} + 1\)

\(=\)







\(\ds 1 - z^2\)





Square of Difference








\(\ds \leadsto \ \ \)





\(\ds z^2 e^{2 i w} - 2 z e^{i w}\)

\(=\)







\(\ds - z^2\)














\(\ds \leadsto \ \ \)





\(\ds z e^{2 i w} + z\)

\(=\)







\(\ds 2 e^{i w}\)














\(\ds \leadsto \ \ \)





\(\ds z \paren {e^{i w} + \frac 1 {e^{i w} } }\)

\(=\)







\(\ds 2\)














\(\ds \leadsto \ \ \)





\(\ds z\)

\(=\)







\(\ds \frac 2 {e^{i w} + e^{-i w} }\)














\(\ds \leadsto \ \ \)





\(\ds z\)

\(=\)







\(\ds \sec w\)





Euler's Secant Identity








\(\ds \leadsto \ \ \)





\(\ds w\)

\(\in\)







\(\ds \set {w \in \C: z = \sec w}\)










Thus by definition of superset:

$\set {w \in \C: \sec w = z} \supseteq \set {\dfrac 1 i \map \ln {\dfrac {1 + \sqrt {\cmod {1 - z^2} } e^{\paren {i / 2} \map \arg {1 - z^2} } } z} + 2 k \pi: k \in \Z}$
$\Box$

Thus by definition of set equality:

$\set {w \in \C: \sec w = z} = \set {\dfrac 1 i \map \ln {\dfrac {1 + \sqrt {\cmod {1 - z^2} } e^{\paren {i / 2} \map \arg {1 - z^2} } } z} + 2 k \pi: k \in \Z}$
$\blacksquare$


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.




