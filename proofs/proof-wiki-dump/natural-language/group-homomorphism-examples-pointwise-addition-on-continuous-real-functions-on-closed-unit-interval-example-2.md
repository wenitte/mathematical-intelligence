# 

Source: https://proofwiki.org/wiki/Group_Homomorphism/Examples/Pointwise_Addition_on_Continuous_Real_Functions_on_Closed_Unit_Interval/Example_2

Example of Group Homomorphism
Let $J \subseteq \R$ denote the closed unit interval $\closedint 0 1$.
Let $\map {\mathscr C} J$ denote the set of all continuous real functions from $J$ to $\R$.
Let $G = \struct {\map {\mathscr C} J, +}$ be the group formed on $\map {\mathscr C} J$ by pointwise addition.
Let $\struct {\R, +}$ denote the additive group of real numbers.

From Pointwise Addition on Continuous Real Functions on Closed Unit Interval forms Group we have that $G$ is indeed a group.

Let $\phi: \struct {\map {\mathscr C} J, +} \to \struct {\R, +}$ be the mapping defined as:

$\forall f \in \map {\mathscr C} J: \map \phi f = \size {\map f 0}$
where $\size {\, \cdot \,}$ denotes the absolute value function.

Then $\phi$ is not a homomorphism.


Proof
Let $f, g \in \map {\mathscr C} J$ be such that:










\(\ds \forall x \in J: \, \)



\(\ds \map f x\)

\(=\)







\(\ds 1\)
















\(\ds \forall x \in J: \, \)



\(\ds \map g x\)

\(=\)







\(\ds -1\)









By Constant Real Function is Continuous, both $f$ and $g$ are continuous on $J$.

We have:














\(\ds \map \phi {f + g}\)

\(=\)







\(\ds \size {\map {\paren {f + g} } 0}\)





Definition of $\phi$














\(\ds \)

\(=\)







\(\ds \size {\map f 0 + \map g 0}\)





Definition of Pointwise Addition of Real-Valued Functions














\(\ds \)

\(=\)







\(\ds \size {1 + \paren {-1} }\)





Definition of $f$ and $g$














\(\ds \)

\(=\)







\(\ds \size 0\)





arithmetic














\(\ds \)

\(=\)







\(\ds 0\)





Definition of Absolute Value



However:














\(\ds \map \phi f + \map \phi g\)

\(=\)







\(\ds \size {\map f 0} + \size {\map g 0}\)





Definition of $\phi$














\(\ds \)

\(=\)







\(\ds \size 1 + \size {-1}\)





Definition of $f$ and $g$














\(\ds \)

\(=\)







\(\ds 1 + 1\)





Definition of Absolute Value














\(\ds \)

\(=\)







\(\ds 2\)





arithmetic



Thus:

$\map \phi {f + g} \ne \map \phi f + \map \phi g$
and so $\phi$ is not a homomorphism by definition.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 13$: Compositions Induced on Cartesian Products and Function Spaces: Exercise $13.18 \ \text {(b)}$




