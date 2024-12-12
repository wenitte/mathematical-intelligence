# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Complex_Inverse_Cosecant_Function



Theorem
The following definitions of the concept of Complex Inverse Cosecant are equivalent:

Definition 1
Let $z \in \C_{\ne 0}$ be a non-zero complex number.
The inverse cosecant of $z$ is the multifunction defined as:

$\csc^{-1} \left({z}\right) := \left\{{w \in \C: \csc \left({w}\right) = z}\right\}$
where $\csc \left({w}\right)$ is the cosecant of $w$.

Definition 2
Let $z \in \C_{\ne 0}$ be a non-zero complex number.
The inverse cosecant of $z$ is the multifunction defined as:

$\csc^{-1} \left({z}\right) := \left\{{\dfrac 1 i \ln \left({\dfrac {i + \sqrt{\left|{z^2 - 1}\right|} e^{\left({i / 2}\right) \arg \left({z^2 - 1}\right)}} z}\right) + 2 k \pi: k \in \Z}\right\}$
where:

$\sqrt{\left|{z^2 - 1}\right|}$ denotes the positive square root of the complex modulus of $z^2 - 1$
$\arg \left({z^2 - 1}\right)$ denotes the argument of $z^2 - 1$
$\ln$ denotes the complex natural logarithm considered as a  multifunction.


Proof
The proof strategy is to show that for all $z \in \C$:

$\set {w \in \C: z = \csc w} =  \set {\dfrac 1 i \map \ln {\dfrac {i + \sqrt {\cmod {z^2 - 1} } e^{\paren {i / 2} \map \arg {z^2 - 1} } } z} + 2 k \pi: k \in \Z}$

Thus let $z \in \C$.


Definition 1 implies Definition 2
It will be demonstrated that:

$\set {w \in \C: z = \csc w} \subseteq  \set {\dfrac 1 i \map \ln {\dfrac {i + \sqrt {\cmod {z^2 - 1} } e^{\paren {i / 2} \map \arg {z^2 - 1} } } z} + 2 k \pi: k \in \Z}$

Let $w \in \set {w \in \C: z = \csc w}$.
From Euler's Cosecant Identity:

$(1): \quad z = \dfrac {2 i} {e^{i w} - e^{-i w}}$

Let $v = e^{i w}$.
Then:














\(\ds z \paren {v - \frac 1 v}\)

\(=\)







\(\ds 2 i\)





multiplying $(1)$ by $v - \dfrac 1 v$








\(\ds \leadsto \ \ \)





\(\ds z v^2 - 2 i v - z\)

\(=\)







\(\ds 0\)





multiplying by $v$ and rearranging








\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {i + \paren {-1 + z^2}^{1/2} } z\)





Quadratic Formula and $i^2 = -1$




Let $s = z^2 - 1$.
Then:














\(\ds v\)

\(=\)







\(\ds \frac {i + s^{1/2} } z\)




















\(\ds \)

\(=\)







\(\ds \frac {i + \sqrt {\cmod s} \paren {\map \cos {\dfrac {\map \arg s} 2} + i \map \sin {\dfrac {\map \arg s} 2} } } z\)





Definition of Complex Square Root




\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \ln v\)

\(=\)







\(\ds \map \ln {\frac {i + \sqrt {\cmod s} \paren {\map \cos {\dfrac {\map \arg s} 2} + i \map \sin {\dfrac {\map \arg s} 2} } } z}\)





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





\(\ds \exists k' \in \Z: \, \)



\(\ds \)

\(=\)







\(\ds i w + 2 k' \pi i\)





Definition of Complex Natural Logarithm




Thus from $(2)$ and $(3)$:














\(\ds i w + 2 k' \pi i\)

\(=\)







\(\ds \map \ln {\frac {i + \sqrt {\cmod s} \paren {\map \cos {\dfrac {\map \arg s} 2} + i \map \sin {\dfrac {\map \arg s} 2} } } z}\)














\(\ds \leadsto \ \ \)





\(\ds w\)

\(=\)







\(\ds \frac 1 i \map \ln {\frac {i + \sqrt {\cmod s} \paren {\map \cos {\dfrac {\map \arg s} 2} + i \map \sin {\dfrac {\map \arg s} 2} } } z} + 2 k \pi\)





putting $k = -k'$








\(\ds \leadsto \ \ \)





\(\ds w\)

\(=\)







\(\ds \frac 1 i \map \ln {\frac {i + \sqrt {\cmod {z^2 - 1} } e^{\paren {i / 2} \map \arg {z^2 - 1} } } z} + 2 k \pi\)





Definition of Exponential Form of Complex Number




Thus by definition of subset:

$\set {w \in \C: z = \csc w} \subseteq  \set {\dfrac 1 i \map \ln {\dfrac {i + \sqrt {\cmod {z^2 - 1} } e^{\paren {i / 2} \map \arg {z^2 - 1} } } z} + 2 k \pi: k \in \Z}$
$\Box$


Definition 2 implies Definition 1
It will be demonstrated that:

$\set {w \in \C: z = \csc w} \supseteq \set {\dfrac 1 i \map \ln {\dfrac {i + \sqrt {\cmod {z^2 - 1} } e^{\paren {i / 2} \map \arg {z^2 - 1} } } z} + 2 k \pi: k \in \Z}$

Let $w \in \set {\dfrac 1 i \map \ln {\dfrac {i + \sqrt {\cmod {z^2 - 1} } e^{\paren {i / 2} \map \arg {z^2 - 1} } } z} + 2 k \pi: k \in \Z}$.
Then:










\(\ds \exists k \in \Z: \, \)



\(\ds i w + 2 \paren {-k} \pi i\)

\(=\)







\(\ds \map \ln {\dfrac {i + \sqrt {\cmod {z^2 - 1} } e^{\paren {i / 2} \map \arg {z^2 - 1} } } z}\)














\(\ds \leadsto \ \ \)





\(\ds e^{i w + 2 \paren {-k} \pi i}\)

\(=\)







\(\ds \dfrac {i + \sqrt {\cmod {z^2 - 1} } e^{\paren {i / 2} \map \arg {z^2 - 1} } } z\)





Definition of Complex Natural Logarithm








\(\ds \leadsto \ \ \)





\(\ds e^{i w}\)

\(=\)







\(\ds \dfrac {i + \sqrt {\cmod {z^2 - 1} } e^{\paren {i / 2} \map \arg {z^2 - 1} } } z\)





Complex Exponential Function has Imaginary Period








\(\ds \leadsto \ \ \)





\(\ds z e^{i w} - i\)

\(=\)







\(\ds \sqrt {\cmod {z^2 - 1} } e^{\paren {i / 2} \map \arg {z^2 - 1} }\)














\(\ds \leadsto \ \ \)





\(\ds \paren {z e^{i w} - i}^2\)

\(=\)







\(\ds \cmod {z^2 - 1} e^{i \map \arg {z^2 - 1} }\)





Roots of Complex Number








\(\ds \leadsto \ \ \)





\(\ds \paren {z e^{i w} - i}^2\)

\(=\)







\(\ds z^2 - 1\)





Definition of Exponential Form of Complex Number








\(\ds \leadsto \ \ \)





\(\ds z^2 e^{2 i w} - 2 i z e^{i w} - 1\)

\(=\)







\(\ds z^2 - 1\)





Square of Difference and $i^2 = -1$








\(\ds \leadsto \ \ \)





\(\ds z^2 e^{2 i w} - 2 i z e^{i w}\)

\(=\)







\(\ds z^2\)














\(\ds \leadsto \ \ \)





\(\ds z e^{2 i w} - z\)

\(=\)







\(\ds 2 i e^{i w}\)














\(\ds \leadsto \ \ \)





\(\ds z \paren {e^{i w} - \frac 1 {e^{i w} } }\)

\(=\)







\(\ds 2 i\)














\(\ds \leadsto \ \ \)





\(\ds z\)

\(=\)







\(\ds \frac {2 i} {e^{i w} - e^{-i w} }\)














\(\ds \leadsto \ \ \)





\(\ds z\)

\(=\)







\(\ds \csc w\)





Euler's Cosecant Identity








\(\ds \leadsto \ \ \)





\(\ds w\)

\(\in\)







\(\ds \set {w \in \C: z = \csc w}\)










Thus by definition of superset:

$\set {w \in \C: z = \csc w} \supseteq  \set {\dfrac 1 i \map \ln {\dfrac {i + \sqrt {\cmod {z^2 - 1} } e^{\paren {i / 2} \map \arg {z^2 - 1} } } z} + 2 k \pi: k \in \Z}$
$\Box$

Thus by definition of set equality:

$\set {w \in \C: z = \csc w} = \set {\dfrac 1 i \map \ln {\dfrac {i + \sqrt {\cmod {z^2 - 1} } e^{\paren {i / 2} \map \arg {z^2 - 1} } } z} + 2 k \pi: k \in \Z}$
$\blacksquare$





