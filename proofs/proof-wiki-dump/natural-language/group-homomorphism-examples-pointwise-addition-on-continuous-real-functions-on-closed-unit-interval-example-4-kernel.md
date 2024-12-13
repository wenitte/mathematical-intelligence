# 

Source: https://proofwiki.org/wiki/Group_Homomorphism/Examples/Pointwise_Addition_on_Continuous_Real_Functions_on_Closed_Unit_Interval/Example_4/Kernel

Example of Group Homomorphism
Let $J \subseteq \R$ denote the closed unit interval $\closedint 0 1$.
Let $\map {\mathscr C} J$ denote the set of all continuous real functions from $J$ to $\R$.
Let $G = \struct {\map {\mathscr C} J, +}$ denote the group formed on $\map {\mathscr C} J$ by pointwise addition.
Let $\struct {\R, +}$ denote the additive group of real numbers.
Let $I_J$ denote the identity mapping on $J$:

$\forall x \in J: \map {I_J} x = x$

Let $\phi: \struct {\map {\mathscr C} J, +} \to \struct {\R, +}$ be the homomorphism defined as:

$\forall f \in \map {\mathscr C} J: \map \phi f = \ds \dfrac \pi 3 \int_0^1 \map f x \cos \dfrac {\pi x} 6 \rd x$

The kernel of $\phi$ is given by:

$\map \ker \phi = I_J - f_m$
where:

$f_m: \R \to \R$ denotes the constant mapping on $\R$
$m = \dfrac {6 \paren {\sqrt 3 - 2} } \pi$
$I_J$ denotes the identity mapping on $J$.


Proof
From Group Homomorphism: Example 4, we have that $\phi$ is indeed a homomorphism.
For all $c \in \R$, let $f_c: \R \to \R$ be the constant mapping:

$\forall x \in \R: \map {f_c} x = c$

First we show that:

$\forall c \in \R: \map \phi {f_c} = c$

Let $c \in \R$ be arbitrary.
We have:














\(\ds \map \phi {f_c}\)

\(=\)







\(\ds \dfrac \pi 3 \int_0^1 \map {f_c} x \cos \dfrac {\pi x} 6 \rd x\)





Definition of $\phi$














\(\ds \)

\(=\)







\(\ds \dfrac \pi 3 \int_0^1 c \cos \dfrac {\pi x} 6 \rd x\)





Definition of Constant Mapping














\(\ds \)

\(=\)







\(\ds \dfrac {c \pi} 3 \intlimits {\dfrac 6 \pi \sin \dfrac {\pi x} 6} 0 1\)





Primitive of $\cos a x$














\(\ds \)

\(=\)







\(\ds 2 c \paren {\sin \dfrac \pi 6 - \sin 0}\)




















\(\ds \)

\(=\)







\(\ds 2 c \dfrac 1 2\)





Sine of $30 \degrees$














\(\ds \)

\(=\)







\(\ds c\)









$\Box$

Then we show that there exists a unique $m \in \R$ such that:

$\map \phi {I_J - f_m} = 0$
where in this case:

$m = \dfrac {6 \paren {\sqrt 3 - 2} } \pi$

We have:














\(\ds \map \phi {I_J - f_m}\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac \pi 3 \int_0^1 \map {\paren {I_J - f_m} } x \cos \dfrac {\pi x} 6 \rd x\)

\(=\)







\(\ds 0\)





Definition of $\phi$








\(\ds \leadsto \ \ \)





\(\ds \dfrac \pi 3 \int_0^1 \map {I_J} x \cos \dfrac {\pi x} 6 \rd x - \dfrac \pi 3 \int_0^1 \map {f_m} x \cos \dfrac {\pi x} 6 \rd x\)

\(=\)







\(\ds 0\)





Definition of Pointwise Addition of Real-Valued Functions








\(\ds \leadsto \ \ \)





\(\ds \dfrac \pi 3 \int_0^1 x \cos \dfrac {\pi x} 6 \rd x - \dfrac \pi 3 \int_0^1 m \cos \dfrac {\pi x} 6 \rd x\)

\(=\)







\(\ds 0\)





Definition of Identity Mapping, Definition of Constant Mapping








\(\ds \leadsto \ \ \)





\(\ds \dfrac \pi 3 \intlimits {\dfrac {6^2} {\pi^2} \cos \dfrac {\pi x} 6 + \dfrac 6 \pi \paren {0 \times \sin \dfrac {\pi x} 6 x} } 0 1 - m\)

\(=\)







\(\ds 0\)





Primitive of $x \cos a x$, a priori








\(\ds \leadsto \ \ \)





\(\ds \dfrac {12} \pi \paren {\cos \dfrac \pi 6 - \cos 0}\)

\(=\)







\(\ds m\)














\(\ds \leadsto \ \ \)





\(\ds m\)

\(=\)







\(\ds \dfrac {12} \pi \paren {\dfrac {\sqrt 3} 2 - 1}\)





Cosine of $30 \degrees$














\(\ds \)

\(=\)







\(\ds \dfrac {6 \paren {\sqrt 3 - 2} } \pi\)





simplifying



Hence the result by definition of kernel.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 13$: Compositions Induced on Cartesian Products and Function Spaces: Exercise $13.18 \ \text {(d)}$




