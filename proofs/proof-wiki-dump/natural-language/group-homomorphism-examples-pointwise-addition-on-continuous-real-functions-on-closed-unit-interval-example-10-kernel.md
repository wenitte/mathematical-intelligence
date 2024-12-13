# 

Source: https://proofwiki.org/wiki/Group_Homomorphism/Examples/Pointwise_Addition_on_Continuous_Real_Functions_on_Closed_Unit_Interval/Example_10/Kernel

Example of Group Homomorphism
Let $J \subseteq \R$ denote the closed unit interval $\closedint 0 1$.
Let $\map {\mathscr C} J$ denote the set of all continuous real functions from $J$ to $\R$.
Let $G = \struct {\map {\mathscr C} J, +}$ denote the group formed on $\map {\mathscr C} J$ by pointwise addition.
Let $\struct {\R, +}$ denote the additive group of real numbers.
Let $I_J$ denote the identity mapping on $J$:

$\forall x \in J: \map {I_J} x = x$

Let $\phi: \struct {\map {\mathscr C} J, +} \to \struct {\R, +}$ be the homomorphism defined as:

$\forall f \in \map {\mathscr C} J: \map \phi f = -\map f 0 + \ds \int_{-2}^0 \map f {e^x} \rd x$

The kernel of $\phi$ is given by:

$\map \ker \phi = I_J - f_m$
where:

$f_m: \R \to \R$ denotes the constant mapping on $\R$
$m = 1 - e^{-2}$
$I_J$ denotes the identity mapping on $J$.


Proof
From Group Homomorphism: Example 10, we have that $\phi$ is indeed a homomorphism.
For all $c \in \R$, let $f_c: \R \to \R$ be the constant mapping:

$\forall x \in \R: \map {f_c} x = c$

First we show that:

$\forall c \in \R: \map \phi {f_c} = c$

Let $c \in \R$ be arbitrary.
We have:














\(\ds \map \phi {f_c}\)

\(=\)







\(\ds -\map {f_c} 0 + \int_{-2}^0 \map {f_c} {e^x} \rd x\)





Definition of $\phi$














\(\ds \)

\(=\)







\(\ds -c + \int_{-2}^0 c \rd x\)





Definition of Constant Mapping














\(\ds \)

\(=\)







\(\ds -c + \bigintlimits {c x} {-2} 0\)





Primitive of Constant














\(\ds \)

\(=\)







\(\ds -c + \paren {0 - \paren {-2 c} }\)




















\(\ds \)

\(=\)







\(\ds c\)









$\Box$

Then we show that there exists a unique $m \in \R$ such that:

$\map \phi {I_J - f_m} = 0$
where in this case:

$m = 1 - e^{-2}$

We have:














\(\ds \map \phi {I_J - f_m}\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds -\map {\paren {I_J - f_m} } 0 + \int_{-2}^0 \map {\paren {I_J - f_m} } {e^x} \rd x\)

\(=\)







\(\ds 0\)





Definition of $\phi$








\(\ds \leadsto \ \ \)





\(\ds -\map {I_J} 0 + \int_{-2}^0 \map {I_J} {e^x} \rd x - \paren {-\map {f_m} 0 + \int_{-2}^0 \map {f_m} {e^x} \rd x}\)

\(=\)







\(\ds 0\)





Definition of Pointwise Addition of Real-Valued Functions








\(\ds \leadsto \ \ \)





\(\ds -0 + \int_{-2}^0 e^x \rd x - m\)

\(=\)







\(\ds 0\)





Definition of Identity Mapping, a priori








\(\ds \leadsto \ \ \)





\(\ds \bigintlimits {e^x} {-2} 0 \rd x\)

\(=\)







\(\ds m\)





Primitive of Exponential Function








\(\ds \leadsto \ \ \)





\(\ds m\)

\(=\)







\(\ds 1 - e^{-2}\)









$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 13$: Compositions Induced on Cartesian Products and Function Spaces: Exercise $13.18 \ \text {(j)}$




