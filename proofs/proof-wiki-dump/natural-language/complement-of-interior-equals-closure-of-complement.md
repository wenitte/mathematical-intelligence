# 

Source: https://proofwiki.org/wiki/Complement_of_Interior_equals_Closure_of_Complement

This page also covers Interior of Complement equals Complement of Closure.


This page has been identified as a candidate for refactoring of basic complexity.In particular: Separate out the second result into its own pageUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Theorem
Let $T$ be a topological space.
Let $H \subseteq T$.
Let $H^-$ denote the closure of $H$ and $H^\circ$ denote the interior of $H$.
Let $\map \complement H$ be the complement of $H$ in $T$:

$\map \complement H = T \setminus H$

Then:

$\map \complement {H^\circ} = \paren {\map \complement H}^-$
and similarly:

$\paren {\map \complement H}^\circ = \map \complement {H^-}$

These can alternatively be written:

$T \setminus H^\circ = \paren {T \setminus H}^-$
$\paren {T \setminus H}^\circ = T \setminus H^-$
which, it can be argued, is easier to follow.


Proof
Let $\tau$ be the topology on $T$.
Let $\mathbb K = \set {K \in \tau: K \subseteq H}$.

Then:














\(\ds T \setminus H^\circ\)

\(=\)







\(\ds T \setminus \bigcup_{K \mathop \in \mathbb K} K\)





Definition of Interior (Topology) of $H$














\(\ds \)

\(=\)







\(\ds \bigcap_{K \mathop \in \mathbb K} \paren {T \setminus K}\)





De Morgan's Laws: Difference with Union




By the definition of closed set, $K$ is open in $T$ if and only if $T \setminus K$ is closed in $T$.
Also, from Set Complement inverts Subsets we have that $T \setminus K \supseteq T \setminus H$.

Now consider the set $\mathbb K'$ defined as:

$\mathbb K' := \set {K' \subseteq T: \paren {T \setminus H} \subseteq K', K' \text { closed in } T}$
From the above we see that:

$K \in \mathbb K \iff T \setminus K \in \mathbb K'$
Thus:














\(\ds T \setminus H^\circ\)

\(=\)







\(\ds \bigcap_{K' \mathop \in \mathbb K'} K'\)




















\(\ds \)

\(=\)







\(\ds \paren {T \setminus H}^-\)





Definition 2 of Closure of $T \setminus H$



$\Box$

Then we note that:














\(\ds H^\circ\)

\(=\)







\(\ds T \setminus \paren {T \setminus H^\circ}\)





Relative Complement of Relative Complement














\(\ds \)

\(=\)







\(\ds T \setminus \paren {\paren {T \setminus H}^-}\)





from above



and so:














\(\ds \paren {T \setminus H}^\circ\)

\(=\)







\(\ds T \setminus \paren {\paren {T \setminus \paren {T \setminus H} }^-}\)





from above














\(\ds \)

\(=\)







\(\ds T \setminus H^-\)





Relative Complement of Relative Complement



$\blacksquare$


Also see
Interior equals Complement of Closure of Complement


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $1$: General Introduction: Closures and Interiors




