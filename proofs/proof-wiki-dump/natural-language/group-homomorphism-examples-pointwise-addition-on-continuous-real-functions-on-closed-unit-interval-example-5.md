# 

Source: https://proofwiki.org/wiki/Group_Homomorphism/Examples/Pointwise_Addition_on_Continuous_Real_Functions_on_Closed_Unit_Interval/Example_5

Example of Group Homomorphism
Let $J \subseteq \R$ denote the closed unit interval $\closedint 0 1$.
Let $\map {\mathscr C} J$ denote the set of all continuous real functions from $J$ to $\R$.
Let $G = \struct {\map {\mathscr C} J, +}$ be the group formed on $\map {\mathscr C} J$ by pointwise addition.
Let $\struct {\R, +}$ denote the additive group of real numbers.

From Pointwise Addition on Continuous Real Functions on Closed Unit Interval forms Group we have that $G$ is indeed a group.

Let $\phi: \struct {\map {\mathscr C} J, +} \to \struct {\R, +}$ be the mapping defined as:

$\forall f \in \map {\mathscr C} J: \map \phi f = \ds \int_0^1 \map \cos {\dfrac {\pi \map f x} 6} \rd x$

Then $\phi$ is not a homomorphism.


Proof
Let $f, g \in \map {\mathscr C} J$ be arbitrary.

As both $f$ and $g$ are continuous real functions on $J$, both $\map \cos {\dfrac {\pi \map f x} 6}$ and $\map \cos {\dfrac {\pi \map g x} 6}$ are integrable on $\closedint 0 1$.

We have:














\(\ds \map \phi {f + g}\)

\(=\)







\(\ds \int_0^1 \map \cos {\dfrac {\pi \map {\paren {f + g} } x} 6} \rd x\)





Definition of $\phi$














\(\ds \)

\(=\)







\(\ds \int_0^1 \map \cos {\dfrac {\pi \paren {\map f x + \map g x} } 6} \rd x\)





Definition of Pointwise Addition of Real-Valued Functions














\(\ds \)

\(=\)







\(\ds \int_0^1 \paren {\map \cos {\dfrac {\pi \map f x} 6} \map \cos {\dfrac {\pi \map g x} 6} - \map \sin {\dfrac {\pi \map f x} 6} \map \sin {\dfrac {\pi \map g x} 6} } \rd x\)





Cosine of Sum



However:














\(\ds \map \phi f + \map \phi g\)

\(=\)







\(\ds \int_0^1 \map \cos {\dfrac {\pi \map f x} 6} \rd x + \int_0^1 \map \cos {\dfrac {\pi \map g x} 6} \rd x\)





Definition of $\phi$














\(\ds \)

\(=\)







\(\ds \int_0^1 \paren {\map \cos {\dfrac {\pi \map f x} 6} + \map \cos {\dfrac {\pi \map g x} 6} } \rd x\)





Linear Combination of Definite Integrals



Thus:

$\map \phi {f + g} \ne \map \phi f + \map \phi g$
and so $\phi$ is not a homomorphism by definition.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 13$: Compositions Induced on Cartesian Products and Function Spaces: Exercise $13.18 \ \text {(e)}$




