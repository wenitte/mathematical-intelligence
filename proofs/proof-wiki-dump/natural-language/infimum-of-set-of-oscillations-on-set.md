# 

Source: https://proofwiki.org/wiki/Infimum_of_Set_of_Oscillations_on_Set



Lemma
Let $f: D \to \R$ be a real function where $D \subseteq \R$.
Let $x$ be a point in $D$.
Let $S_x$ be a set of real sets that contain (as an element) $x$.
Let:

$\map {\omega_f} x = \inf \set {\map {\omega_f} {I \cap D}: I \in S_x}$
where $\map {\omega_f} {I \cap D}$ denotes the oscillation of $f$ on the set $I \cap D$:

$\map {\omega_f} {I \cap D} = \sup \set {\size {\map f y - \map f z}: y, z \in I \cap D}$

Then:

$\map {\omega_f} x \in \R$ if and only if $\set {\map {\omega_f} {I \cap D}: I \in S_x}$ contains a real number.


Proof
Let:

$S = \set {\map {\omega_f} {I \cap D}: I \in S_x}$
We observe that:

$\inf S = \map {\omega_f} x$


Necessary Condition
Let $\inf S \in \R$.
We need to prove that $S$ contains a real number.

Note that $S$ is non-empty as the empty set does not admit an infimum (in $\R$).
Therefore, $S$ has at least one element.
Accordingly, there is an $I \in S_x$ such that $\map {\omega_f} {I \cap D} \in S$.

Let $I \in S_x$.
Therefore, $x \in I$.
From this follows by Oscillation on Set is an Extended Real Number that $\map {\omega_f} {I \cap D}$ is an extended real number.
Therefore $S$ is a set of extended real numbers as $S = \set {\map {\omega_f} {I \cap D}: I \in S_x}$.
Accordingly, $S$ contains a real number by Infimum of Subset of Extended Real Numbers is Arbitrarily Close as $\inf S \in \R$.
$\Box$


Sufficient Condition
Let $S$ contain a real number.
We need to prove that $\inf S \in \R$.

We have:

$S \cap \R$ is non-empty as $S$ contains a real number.

Let $I \in S_x$.
Therefore, $x \in I$.
From this follows by Oscillation on Set is an Extended Real Number that $\map {\omega_f} {I \cap D} \in \overline \R_{\ge 0}$.
Therefore:

$S$ is a subset of $\overline \R_{\ge 0}$ as $S = \set {\map {\omega_f} {I \cap D}: I \in S_x}$
Accordingly:

$S$ is bounded below.
From this follows that:

$S \cap \R$ is bounded below as $SR$ is a subset of $S$

We have:

$S \cap \R$ is bounded below
$S \cap \R$ is not empty
Therefore:

$\inf S \cap \R \in \R$ Continuum Property

We have:

$S$ is a set of extended real numbers as $S$ is a subset of $\overline \R_{\ge 0}$
$S$ is bounded below
Therefore:

$\inf S \in \R$ by Infimum of Real Subset as $\inf S \cap \R \in \R$
$\blacksquare$





