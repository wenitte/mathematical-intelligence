# 

Source: https://proofwiki.org/wiki/Group_Homomorphism/Examples/Pointwise_Addition_on_Continuous_Real_Functions_on_Closed_Unit_Interval/Example_4



Example of Group Homomorphism
Let $J \subseteq \R$ denote the closed unit interval $\closedint 0 1$.
Let $\map {\mathscr C} J$ denote the set of all continuous real functions from $J$ to $\R$.
Let $G = \struct {\map {\mathscr C} J, +}$ be the group formed on $\map {\mathscr C} J$ by pointwise addition.
Let $\struct {\R, +}$ denote the additive group of real numbers.

From Pointwise Addition on Continuous Real Functions on Closed Unit Interval forms Group we have that $G$ is indeed a group.

Let $\phi: \struct {\map {\mathscr C} J, +} \to \struct {\R, +}$ be the mapping defined as:

$\forall f \in \map {\mathscr C} J: \map \phi f = \ds \dfrac \pi 3 \int_0^1 \map f x \cos \dfrac {\pi x} 6 \rd x$

Then $\phi$ is a homomorphism.


Kernel
The kernel of $\phi$ is given by:

$\map \ker \phi = I_J - f_m$
where:

$f_m: \R \to \R$ denotes the constant mapping on $\R$
$m = \dfrac {6 \paren {\sqrt 3 - 2} } \pi$
$I_J$ denotes the identity mapping on $J$.


Proof
Let $f, g \in \map {\mathscr C} J$ be arbitrary.
As both $f$ and $g$ are continuous real functions on $J$, they are integrable on $\closedint 0 1$.
We have:














\(\ds \map \phi {f + g}\)

\(=\)







\(\ds \dfrac \pi 3 \int_0^1 \map {\paren {f + g} } x \cos \dfrac {\pi x} 6 \rd x\)





Definition of $\phi$














\(\ds \)

\(=\)







\(\ds \dfrac \pi 3 \int_0^1 \paren {\map f x + \map g x} \cos \dfrac {\pi x} 6 \rd x\)





Definition of Pointwise Addition of Real-Valued Functions














\(\ds \)

\(=\)







\(\ds \dfrac \pi 3 \int_0^1 \paren {\map f x \cos \dfrac {\pi x} 6 + \map g x \cos \dfrac {\pi x} 6} \rd x\)





Real Multiplication Distributes over Addition














\(\ds \)

\(=\)







\(\ds \dfrac \pi 3 \int_0^1 \map f x \cos \dfrac {\pi x} 6 \rd x + \dfrac \pi 3 \int_0^1 \map g x \cos \dfrac {\pi x} 6 \rd x\)





Linear Combination of Definite Integrals














\(\ds \)

\(=\)







\(\ds \map \phi f + \map \phi g\)





Definition of $\phi$



Thus $\phi$ is a homomorphism by definition.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 13$: Compositions Induced on Cartesian Products and Function Spaces: Exercise $13.18 \ \text {(d)}$




