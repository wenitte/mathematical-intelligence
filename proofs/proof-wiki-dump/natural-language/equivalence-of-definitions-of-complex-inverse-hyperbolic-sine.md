# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Complex_Inverse_Hyperbolic_Sine



Theorem
The following definitions of the concept of Complex Inverse Hyperbolic Sine are equivalent:

Definition 1
The inverse hyperbolic sine is a multifunction defined as:

$\forall z \in \C: \map {\sinh^{-1} } z := \set {w \in \C: z = \map \sinh w}$
where $\map \sinh w$ is the hyperbolic sine function.

Definition 2
The inverse hyperbolic sine is a multifunction defined as:

$\forall z \in \C: \map {\sinh^{-1} } z := \set {\map \ln {z + \sqrt {\size {z^2 + 1} } e^{\paren {i / 2} \map \arg {z^2 + 1} } } + 2 k \pi i: k \in \Z}$
where:

$\sqrt {\size {z^2 + 1} }$ denotes the positive square root of the complex modulus of $z^2 + 1$
$\map \arg {z^2 + 1}$ denotes the argument of $z^2 + 1$
$\ln$ denotes the complex natural logarithm considered as a  multifunction.


Proof
The proof strategy is to how that for all $z \in \C$:

$\set {w \in \C: z = \map \sinh w} = \set {\map \ln {z + \sqrt {\size {z^2 + 1} } e^{\paren {i / 2} \map \arg {z^2 + 1} } } + 2 k \pi i}$

Thus let $z \in \C$.


Definition 1 implies Definition 2
It is demonstrated that:

$\set {w \in \C: z = \map \sinh w} \subseteq \set {\map \ln {z + \sqrt {\size {z^2 + 1} } e^{\paren {i / 2} \map \arg {z^2 + 1} } } + 2 k \pi i}$

Let $w \in \set {w \in \C: z = \map \sinh w}$.
Then by definition of the hyperbolic sine function:

$(1): \quad z = \dfrac {e^w - e^{-w} } 2$

Let $v = e^w$.
Then:














\(\ds 2 z\)

\(=\)







\(\ds v - \frac 1 v\)





multiplying $(1)$ by $2$








\(\ds \leadsto \ \ \)





\(\ds v^2 - 2 z v - 1\)

\(=\)







\(\ds 0\)





multiplying by $v$ and rearranging








\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds z + \paren {1 + z^2}^{1/2}\)





Quadratic Formula




Let $s = z^2 + 1$.
Then:














\(\ds v\)

\(=\)







\(\ds z + s^{1/2}\)




















\(\ds \)

\(=\)







\(\ds z + \sqrt {\size s} \paren {\map \cos {\frac {\map \arg s} 2} + i \map \sin {\frac {\map \arg s} 2} }\)





Definition of Complex Square Root




\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \ln v\)

\(=\)







\(\ds \map \ln {z + \sqrt {\size s} \paren {\map \cos {\frac {\map \arg s} 2} + i \map \sin {\frac {\map \arg s} 2} } }\)





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









\(\ds \)

\(=\)







\(\ds w + 2 k' \pi i: k' \in \Z\)





Definition of Complex Natural Logarithm




Thus from $(2)$ and $(3)$:














\(\ds w + 2 k' \pi i\)

\(=\)







\(\ds \map \ln {z + \sqrt {\size s} \paren {\map \cos {\frac {\map \arg s} 2} + i \map \sin {\frac {\map \arg s} 2} } }\)














\(\ds \leadsto \ \ \)





\(\ds w\)

\(=\)







\(\ds \map \ln {z + \sqrt {\size s} \paren {\map \cos {\frac {\map \arg s} 2} + i \map \sin {\frac {\map \arg s} 2} } } + 2 k \pi i\)





putting $k = -k'$








\(\ds \leadsto \ \ \)





\(\ds w\)

\(=\)







\(\ds \map \ln {z + \sqrt {\size {z^2 + 1} } e^{\frac i 2 \map \arg {z^2 + 1} } } + 2 k \pi i\)





Definition of Exponential Form of Complex Number




Thus by definition of subset:

$\set {w \in \C: z = \map \sinh w} \subseteq \set {\map \ln {z + \sqrt {\size {z^2 + 1} } e^{\paren {i / 2} \map \arg {z^2 + 1} } } + 2 k \pi i}$
$\Box$


Definition 2 implies Definition 1
It is demonstrated that:

$\set {w \in \C: z = \map \sinh w} \supseteq \set {\map \ln {z + \sqrt {\size {z^2 + 1} } e^{\paren {i / 2} \map \arg {z^2 + 1} } } + 2 k \pi i}$
Let $w \in \set {\map \ln {z + \sqrt {\size {z^2 + 1} } e^{\paren {i / 2} \map \arg {z^2 + 1} } } + 2 k \pi i}$.
Then:










\(\ds \exists k \in \Z:: \, \)



\(\ds w + 2 \paren {-k} \pi i\)

\(=\)







\(\ds \map \ln {z + \sqrt {\size {z^2 + 1} } e^{\paren {i / 2} \map \arg {z^2 + 1} } }\)














\(\ds \leadsto \ \ \)





\(\ds e^{w + 2 \paren {-k} \pi i}\)

\(=\)







\(\ds z + \sqrt {\size {z^2 + 1} } e^{\paren {i / 2} \map \arg {z^2 + 1} }\)





Definition of Complex Natural Logarithm








\(\ds \leadsto \ \ \)





\(\ds e^w\)

\(=\)







\(\ds z + \sqrt {\size {z^2 + 1} } e^{\paren {i / 2} \map \arg {z^2 + 1} }\)





Complex Exponential Function has Imaginary Period








\(\ds \leadsto \ \ \)





\(\ds e^w - z\)

\(=\)







\(\ds \sqrt {\size {z^2 + 1} } e^{\paren {i / 2} \map \arg {z^2 + 1} }\)














\(\ds \leadsto \ \ \)





\(\ds \paren {e^w - z}^2\)

\(=\)







\(\ds \size {z^2 + 1} e^{i \map \arg {z^2 + 1} }\)





Roots of Complex Number








\(\ds \leadsto \ \ \)





\(\ds \paren {e^w - z}^2\)

\(=\)







\(\ds z^2 + 1\)





Definition of Exponential Form of Complex Number








\(\ds \leadsto \ \ \)





\(\ds e^{2w} - 2 z e^w + z^2\)

\(=\)







\(\ds z^2 + 1\)














\(\ds \leadsto \ \ \)





\(\ds e^{2w}\)

\(=\)







\(\ds 1 + 2 z e^w\)














\(\ds \leadsto \ \ \)





\(\ds e^w - \frac 1 {e^w}\)

\(=\)







\(\ds 2 z\)














\(\ds \leadsto \ \ \)





\(\ds z\)

\(=\)







\(\ds \frac {e^w - e^{-w} } 2\)














\(\ds \leadsto \ \ \)





\(\ds z\)

\(=\)







\(\ds \sinh w\)





Definition of Hyperbolic Sine








\(\ds \leadsto \ \ \)





\(\ds w\)

\(\in\)







\(\ds \set {w \in \C: z = \map \sinh w}\)










Thus by definition of superset:

$\set {w \in \C: z = \map \sinh w} \supseteq \set {\map \ln {z + \sqrt {\size {z^2 + 1} } e^{\paren {i / 2} \map \arg {z^2 + 1} } } + 2 k \pi i}$
$\Box$

Thus by definition of set equality:

$\set {w \in \C: z = \map \sinh w} = \set {\map \ln {z + \sqrt {\size {z^2 + 1} } e^{\paren {i / 2} \map \arg {z^2 + 1} } } + 2 k \pi i}$
$\blacksquare$


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.




