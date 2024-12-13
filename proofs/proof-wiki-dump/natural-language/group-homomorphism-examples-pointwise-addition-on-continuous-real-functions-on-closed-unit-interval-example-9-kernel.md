# 

Source: https://proofwiki.org/wiki/Group_Homomorphism/Examples/Pointwise_Addition_on_Continuous_Real_Functions_on_Closed_Unit_Interval/Example_9/Kernel

Example of Group Homomorphism
Let $J \subseteq \R$ denote the closed unit interval $\closedint 0 1$.
Let $\map {\mathscr C} J$ denote the set of all continuous real functions from $J$ to $\R$.
Let $G = \struct {\map {\mathscr C} J, +}$ denote the group formed on $\map {\mathscr C} J$ by pointwise addition.
Let $\struct {\R, +}$ denote the additive group of real numbers.
Let $I_J$ denote the identity mapping on $J$:

$\forall x \in J: \map {I_J} x = x$

Let $\phi: \struct {\map {\mathscr C} J, +} \to \struct {\R, +}$ be the homomorphism defined as:

$\forall f \in \map {\mathscr C} J: \map \phi f = \ds 2 \int_0^1 \int_0^x \map f y \rd y \rd x$

The kernel of $\phi$ is given by:

$\map \ker \phi = I_J - f_m$
where:

$f_m: \R \to \R$ denotes the constant mapping on $\R$
$m = \dfrac 1 3$
$I_J$ denotes the identity mapping on $J$.


Proof
From Group Homomorphism: Example 9, we have that $\phi$ is indeed a homomorphism.
For all $c \in \R$, let $f_c: \R \to \R$ be the constant mapping:

$\forall x \in \R: \map {f_c} x = c$

First we show that:

$\forall c \in \R: \map \phi {f_c} = c$

Let $c \in \R$ be arbitrary.
We have:














\(\ds \map \phi {f_c}\)

\(=\)







\(\ds 2 \int_0^1 \int_0^x \map {f_c} y \rd y \rd x\)





Definition of $\phi$














\(\ds \)

\(=\)







\(\ds 2 \int_0^1 \int_0^x c \rd y \rd x\)





Definition of Constant Mapping














\(\ds \)

\(=\)







\(\ds 2 \int_0^1 \bigintlimits {c y} 0 x \rd x\)





Primitive of Constant














\(\ds \)

\(=\)







\(\ds 2 \int_0^1 c x \rd x\)




















\(\ds \)

\(=\)







\(\ds 2 \intlimits {c \dfrac {x^2} 2} 0 1\)





Primitive of Constant














\(\ds \)

\(=\)







\(\ds 2 c \dfrac 1 2\)




















\(\ds \)

\(=\)







\(\ds c\)









$\Box$

Then we show that there exists a unique $m \in \R$ such that:

$\map \phi {I_J - f_m} = 0$
where in this case:

$m = \dfrac 1 3$

We have:














\(\ds \map \phi {I_J - f_m}\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds 2 \int_0^1 \int_0^x \map {\paren {I_J - f_m} } y \rd y \rd x\)

\(=\)







\(\ds 0\)





Definition of $\phi$








\(\ds \leadsto \ \ \)





\(\ds 2 \int_0^1 \int_0^x \map {I_J} y \rd y \rd x - 2 \int_0^1 \int_0^x \map {f_m} y \rd y \rd x\)

\(=\)







\(\ds 0\)





Definition of Pointwise Addition of Real-Valued Functions








\(\ds \leadsto \ \ \)





\(\ds 2 \int_0^1 \int_0^x y \rd y \rd x - m\)

\(=\)







\(\ds 0\)





Definition of Identity Mapping, a priori








\(\ds \leadsto \ \ \)





\(\ds 2 \int_0^1 \intlimits {\dfrac {y^2} 2} {y \mathop = 0}  {y \mathop = x} \rd x\)

\(=\)







\(\ds m\)





Primitive of Power








\(\ds \leadsto \ \ \)





\(\ds 2 \int_0^1 \dfrac {x^2} 2 \rd x\)

\(=\)







\(\ds m\)














\(\ds \leadsto \ \ \)





\(\ds \int_0^1 x^2 \rd x\)

\(=\)







\(\ds m\)














\(\ds \leadsto \ \ \)





\(\ds \intlimits {\dfrac {x^3} 3} {x \mathop = 0}  {x \mathop = 1}\)

\(=\)







\(\ds m\)





Primitive of Power








\(\ds \leadsto \ \ \)





\(\ds m\)

\(=\)







\(\ds \dfrac 1 3\)









Hence the result by definition of kernel.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 13$: Compositions Induced on Cartesian Products and Function Spaces: Exercise $13.18 \ \text {(i)}$




