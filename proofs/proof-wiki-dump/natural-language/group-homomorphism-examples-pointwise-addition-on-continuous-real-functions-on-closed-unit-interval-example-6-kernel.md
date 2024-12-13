# 

Source: https://proofwiki.org/wiki/Group_Homomorphism/Examples/Pointwise_Addition_on_Continuous_Real_Functions_on_Closed_Unit_Interval/Example_6/Kernel

Example of Group Homomorphism
Let $J \subseteq \R$ denote the closed unit interval $\closedint 0 1$.
Let $\map {\mathscr C} J$ denote the set of all continuous real functions from $J$ to $\R$.
Let $G = \struct {\map {\mathscr C} J, +}$ denote the group formed on $\map {\mathscr C} J$ by pointwise addition.
Let $\struct {\R, +}$ denote the additive group of real numbers.
Let $I_J$ denote the identity mapping on $J$:

$\forall x \in J: \map {I_J} x = x$

Let $\phi: \struct {\map {\mathscr C} J, +} \to \struct {\R, +}$ be the homomorphism defined as:

$\forall f \in \map {\mathscr C} J: \map \phi f = \ds \int_0^1 \map f {\cos \dfrac {\pi x} 6} \rd x$

The kernel of $\phi$ is given by:

$\map \ker \phi = I_J - f_m$
where:

$f_m: \R \to \R$ denotes the constant mapping on $\R$
$m = \dfrac 3 \pi$
$I_J$ denotes the identity mapping on $J$.


Proof
From Group Homomorphism: Example 6, we have that $\phi$ is indeed a homomorphism.
For all $c \in \R$, let $f_c: \R \to \R$ be the constant mapping:

$\forall x \in \R: \map {f_c} x = c$

First we show that:

$\forall c \in \R: \map \phi {f_c} = c$

Let $c \in \R$ be arbitrary.
We have:














\(\ds \map \phi {f_c}\)

\(=\)







\(\ds \int_0^1 \map {f_c} {\cos \dfrac {\pi x} 6} \rd x\)





Definition of $\phi$














\(\ds \)

\(=\)







\(\ds \int_0^1 c \rd x\)





Definition of Constant Mapping














\(\ds \)

\(=\)







\(\ds \bigintlimits {c x} 0 1\)





Primitive of Constant














\(\ds \)

\(=\)







\(\ds c\)









$\Box$

Then we show that there exists a unique $m \in \R$ such that:

$\map \phi {I_J - f_m} = 0$
where in this case:

$m = \dfrac 3 \pi$

We have:














\(\ds \map \phi {I_J - f_m}\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \int_0^1 \map {\paren {I_J - f_m} } {\cos \dfrac {\pi x} 6} \rd x\)

\(=\)







\(\ds 0\)





Definition of $\phi$








\(\ds \leadsto \ \ \)





\(\ds \int_0^1 \map {I_J} {\cos \dfrac {\pi x} 6} \rd x - \int_0^1 \map {f_m} {\cos \dfrac {\pi x} 6} \rd x\)

\(=\)







\(\ds 0\)





Definition of Pointwise Addition of Real-Valued Functions








\(\ds \leadsto \ \ \)





\(\ds \int_0^1 \cos \dfrac {\pi x} 6 \rd x - m\)

\(=\)







\(\ds 0\)





Definition of Identity Mapping, a priori








\(\ds \leadsto \ \ \)





\(\ds \dfrac 6 \pi \intlimits {\sin \dfrac {\pi x} 6} 0 1 - m\)

\(=\)







\(\ds 0\)





Primitive of $\cos a x$








\(\ds \leadsto \ \ \)





\(\ds \dfrac 6 \pi \paren {\sin \dfrac \pi 6 - \sin  0}\)

\(=\)







\(\ds m\)














\(\ds \leadsto \ \ \)





\(\ds m\)

\(=\)







\(\ds \dfrac 6 \pi \paren {\dfrac 1 2}\)





Sine of $30 \degrees$














\(\ds \)

\(=\)







\(\ds \dfrac 3 \pi\)





simplifying



Hence the result by definition of kernel.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 13$: Compositions Induced on Cartesian Products and Function Spaces: Exercise $13.18 \ \text {(f)}$




