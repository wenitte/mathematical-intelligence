# 

Source: https://proofwiki.org/wiki/Inductive_Set_under_Mapping_has_Minimally_Inductive_Subset

Theorem
Let $A$ be an inductive class under a mapping $g$.
Let $A$ be a set.

Then there exists some subset $S$ of $A$ such that $S$ is minimally inductive under $g$.


Proof
Let $S$ be the set defined as:

$S = \set {s: \exists t \in A: t = \map g s} \cup \set \O$

By definition, we have that:

$\O \in S$
$s \in S \implies \map g s \in S$
So, by definition, $S$ is inductive under $g$.
Because $A$ is inductive under $g$:

$\O \in A$
and so by definition of subset:

$S \subseteq A$
It remains to be shown that $S$ is minimally inductive under $g$.

Let $T \subseteq S$ such that $T$ is inductive under $g$.
It will be demonstrated by the Principle of General Induction that $T = S$.
That is:

$\forall x \in T: x \in S$
Let $P: T \to \set {\T, \F}$ be the propositional function defined as:

$\forall x \in T: \map P x \iff x \in S$

First it is noted that as $T$ is inductive under $g$:

$\O \in T$
But a priori $\O \in S$.
Hence we have that:

$\map P \O = \T$
This is the basis for the induction.

Now suppose $x \in T$ such that $\map P x = \T$.
That is:

$x \in S$
This is the induction hypothesis.

The induction step is to show that $\map P {\map g x} = \T$.
That is:

$\map g x \in S$
Indeed, as $T$ is inductive under $g$:

$x \in T \implies \map g x \in T$
But again, a priori:

$\map g x \in S$
Hence we have shown that:

$\map P x = \T \implies \map P {\map g x} = \T$
Hence it follows by the Principle of General Induction:

$\forall x \in T: \map P x = \T$
That is:

$\forall x \in T: x \in S$
That is:

$T = S$

Thus a subset of $S$ which is inductive under $g$ is necessarily equal to $S$.
Hence $S$ has no proper subset which is inductive under $g$.
Hence, by definition, $S$ is minimally inductive under $g$.
The result follows.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $3$: The Natural Numbers: $\S 4$ A double induction principle and its applications: Exercise $4.2$




