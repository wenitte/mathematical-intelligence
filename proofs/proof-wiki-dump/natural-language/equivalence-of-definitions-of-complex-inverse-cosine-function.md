# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Complex_Inverse_Cosine_Function



Theorem
The following definitions of the concept of Complex Inverse Cosine are equivalent:

Definition 1
Let $z \in \C$ be a complex number.
The inverse cosine of $z$ is the multifunction defined as:

$\cos^{-1} \left({z}\right) := \left\{{w \in \C: \cos \left({w}\right) = z}\right\}$
where $\cos \left({w}\right)$ is the cosine of $w$.

Definition 2
Let $z \in \C$ be a complex number.
The inverse cosine of $z$ is the multifunction defined as:

$\cos^{-1} \left({z}\right) := \left\{{\dfrac 1 i \ln \left({z + \sqrt{\left|{z^2 - 1}\right|} e^{\left({i / 2}\right) \arg \left({z^2 - 1}\right)} }\right) + 2 k \pi: k \in \Z}\right\}$
where:

$\sqrt{\left|{z^2 - 1}\right|}$ denotes the positive square root of the complex modulus of $z^2 - 1$
$\arg \left({z^2 - 1}\right)$ denotes the argument of $z^2 - 1$
$\ln$ denotes the complex natural logarithm considered as a  multifunction.


Proof
The proof strategy is to show that for all $z \in \C$:

$\set {w \in \C: z = \cos w} = \set {\dfrac 1 i \map \ln {z + \sqrt {\cmod {z^2 - 1} } e^{\paren {i / 2} \map \arg {z^2 - 1} } } + 2 k \pi: k \in \Z}$

Thus let $z \in \C$.


Definition 1 implies Definition 2
It will be demonstrated that:

$\set {w \in \C: z = \cos w} \subseteq \set {\dfrac 1 i \map \ln {z + \sqrt {\cmod {z^2 - 1} } e^{\paren {i / 2} \map \arg {z^2 - 1} } } + 2 k \pi: k \in \Z}$

Let $w \in \set {w \in \C: z = \cos w}$.
From Euler's Cosine Identity:

$(1): \quad z = \dfrac {e^{i w} + e^{-i w} } 2$

Let $v = e^{i w}$.
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







\(\ds \map \ln {z + \sqrt {\cmod s} \paren {\map \cos {\frac {\map \arg s} 2} + i \map \sin {\frac {\map \arg s} 2} } }\)














\(\ds \leadsto \ \ \)





\(\ds w\)

\(=\)







\(\ds \frac 1 i \map \ln {z + \sqrt {\cmod s} \paren {\map \cos {\frac {\map \arg s} 2} + i \map \sin {\frac {\map \arg s} 2} } } + 2 k \pi\)





putting $k = -k'$








\(\ds \leadsto \ \ \)





\(\ds w\)

\(=\)







\(\ds \frac 1 i \map \ln {z + \sqrt {\cmod {z^2 - 1} } e^{\paren {i / 2} \map \arg {z^2 - 1} } } + 2 k \pi\)





Definition of Exponential Form of Complex Number




Thus by definition of subset:

$\set {w \in \C: z = \cos w} \subseteq \set {\dfrac 1 i \map \ln {z + \sqrt {\cmod {z^2 - 1} } e^{\paren {i / 2} \map \arg {z^2 - 1} } } + 2 k \pi: k \in \Z}$
$\Box$


Definition 2 implies Definition 1
It will be demonstrated that:

$\set {w \in \C: z = \cos w} \supseteq \set {\dfrac 1 i \map \ln {z + \sqrt {\cmod {z^2 - 1} } e^{\paren {i / 2} \map \arg {z^2 - 1} } } + 2 k \pi: k \in \Z}$
Let $w \in \set {\dfrac 1 i \map \ln {z + \sqrt {\cmod {z^2 - 1} } e^{\paren {i / 2} \map \arg {z^2 - 1} } } + 2 k \pi: k \in \Z}$.
Then:










\(\ds \exists k \in \Z: \, \)



\(\ds i w + 2 \paren {-k} \pi i\)

\(=\)







\(\ds \map \ln {z + \sqrt {\cmod {z^2 - 1} } e^{\paren {i / 2} \map \arg {z^2 - 1} } }\)














\(\ds \leadsto \ \ \)





\(\ds e^{i w + 2 \paren {-k} \pi i}\)

\(=\)







\(\ds z + \sqrt {\cmod {z^2 - 1} } e^{\paren {i / 2} \map \arg {z^2 - 1} }\)





Definition of Complex Natural Logarithm








\(\ds \leadsto \ \ \)





\(\ds e^{i w}\)

\(=\)







\(\ds z + \sqrt {\cmod {z^2 - 1} } e^{\paren {i / 2} \map \arg {z^2 - 1} }\)





Complex Exponential Function has Imaginary Period








\(\ds \leadsto \ \ \)





\(\ds e^{i w} - z\)

\(=\)







\(\ds \sqrt {\cmod {z^2 - 1} } e^{\paren {i / 2} \map \arg {z^2 - 1} }\)














\(\ds \leadsto \ \ \)





\(\ds \paren {e^{i w} - z}^2\)

\(=\)







\(\ds \cmod {z^2 - 1} e^{i \map \arg {z^2 - 1} }\)





Roots of Complex Number








\(\ds \leadsto \ \ \)





\(\ds \paren {e^{i w} - z}^2\)

\(=\)







\(\ds z^2 - 1\)





Definition of Exponential Form of Complex Number








\(\ds \leadsto \ \ \)





\(\ds e^{2 i w} - 2 z e^{i w} + z^2\)

\(=\)







\(\ds z^2 - 1\)





Square of Difference








\(\ds \leadsto \ \ \)





\(\ds e^{2 i w} + 1\)

\(=\)







\(\ds 2 z e^{i w}\)














\(\ds \leadsto \ \ \)





\(\ds e^{i w} + \frac 1 {e^{i w} }\)

\(=\)







\(\ds 2 z\)














\(\ds \leadsto \ \ \)





\(\ds z\)

\(=\)







\(\ds \frac {e^{i w} + e^{-i w} } 2\)














\(\ds \leadsto \ \ \)





\(\ds z\)

\(=\)







\(\ds \cos w\)





Euler's Cosine Identity








\(\ds \leadsto \ \ \)





\(\ds w\)

\(\in\)







\(\ds \set {w \in \C: z = \cos w}\)










Thus by definition of superset:

$\set {w \in \C: z = \cos w} \supseteq \set {\dfrac 1 i \map \ln {z + \sqrt {\cmod {z^2 - 1} } e^{\paren {i / 2} \map \arg {z^2 - 1} } } + 2 k \pi: k \in \Z}$
$\Box$

Thus by definition of set equality:

$\set {w \in \C: z = \cos w} = \set {\dfrac 1 i \map \ln {z + \sqrt {\cmod {z^2 - 1} } e^{\paren {i / 2} \map \arg {z^2 - 1} } } + 2 k \pi: k \in \Z}$
$\blacksquare$





