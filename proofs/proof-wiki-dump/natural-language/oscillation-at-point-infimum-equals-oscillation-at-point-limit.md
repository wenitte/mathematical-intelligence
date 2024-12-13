# 

Source: https://proofwiki.org/wiki/Oscillation_at_Point_(Infimum)_equals_Oscillation_at_Point_(Limit)


This page has been identified as a candidate for refactoring of medium complexity.In particular: Needs to be broken up. At least one of the lemmas (may be more, I don't have the patience today to study all of this) already exists on $\mathsf{Pr} \infty \mathsf{fWiki}$ and so can be removed, to be replaced by a link to the result in question. The rest of the lemmas are to be removed and placed into proof pages of their own, and linked accordingly. Then the rest of the theorem is to be analysed to see whether sub-results already exist, and if so, link to them without repeating them here.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Theorem
Let $f: D \to \R$ be a real function where $D \subseteq \R$.
Let $x$ be a point in $D$.
Let $N_x$ be the set of neighborhoods of $x$.
Let $\map {\omega_f} x$ be the oscillation of $f$ at $x$ as defined by:

$\map {\omega_f} x = \inf \set {\map {\omega_f} {I \cap D}: I \in N_x}$
where $\map {\omega_f} {I \cap D}$ is the oscillation of $f$ on a real set $I \cap D$:

$\map {\omega_f} {I \cap D} = \sup \set {\size {\map f y - \map f z}: y, z \in I \cap D}$
Let $\map {\omega^L_f} x$ be the oscillation of $f$ at $x$ as defined by:

$\map {\omega^L_f} x = \ds \lim_{h \mathop \to 0^+} \map {\omega_f} {\openint {x - h} {x + h} \cap D}$

Then:

$\map {\omega_f} x \in \R$ if and only if $\map {\omega^L_f} x \in \R$
and, if $\map {\omega_f} x$ and $\map {\omega^L_f} x$ exist as real numbers:

$\map {\omega_f} x = \map {\omega^L_f} x$


Proof
Lemma
Let $f: D \to \R$ be a real function where $D \subseteq \R$.
Let $x$ be a point in $D$.
Let $N_x$ be the set of neighborhoods of $x$.
Let $\map {\omega_f} x$ be the oscillation of $f$ at $x$ as defined by:

$\map {\omega_f} x = \ds \inf \set {\map {\omega_f} {I \cap D}: I \in N_x}$
where $\map {\omega_f} {I \cap D}$ is the oscillation of $f$ on a real set $I \cap D$:

$\map {\omega_f} {I \cap D} = \ds \sup \set {\size {\map f y - \map f z}: y, z \in I \cap D}$
Let $\map {\omega^L_f} x$ be the oscillation of $f$ at $x$ as defined by:

$\map {\omega^L_f} x = \ds \lim_{h \mathop \to 0^+} \map {\omega_f} {\openint {x - h} {x + h} \cap D}$

Let $\map {\omega^L_f} x \in \R$.
Let $\map {\omega_f} x \in \R$.

Then $\map {\omega^L_f} x = \map {\omega_f} x$.
$\Box$


Necessary Condition
Let $\map {\omega_f} x \in \R$.
We need to prove:

$\map {\omega^L_f} x \in \R$
$\map {\omega^L_f} x = \map {\omega_f} x$
where:

$\map {\omega^L_f} x = \ds \lim_{h \mathop \to 0^+} \map {\omega_f} {\openint {x - h} {x + h} \cap D}$
$\map {\omega_f} {\openint {x - h} {x + h} \cap D} = \sup \set {\size {\map f y - \map f z}: y, z \in \openint {x - h} {x + h} \cap D}$
$\map {\omega_f} x = \inf \set {\map {\omega_f} {I \cap D}: I \in N_x}$
$\map {\omega_f} {I \cap D} = \sup \set {\size {\map f y - \map f z}: y, z \in I \cap D}$

Let $\epsilon \in \R_{>0}$.
Then an $I \in N_x$ exists such that:

$\map {\omega_f} {I \cap D} - \map {\omega_f} x < \epsilon$ by Infimum of Set of Oscillations on Set is Arbitrarily Close
Let $I$ be such an element of $N_x$.
We observe in particular that $\map {\omega_f} {I \cap D} \in \R$.

A neighborhood in $N_x$ contains an open subset that contains the point $x$.
So, $I$ contains such an open subset as $I \in N_x$.
Therefore, a $\delta \in \R_{>0}$ exists such that $\openint {x - \delta} {x + \delta}$ is a subset of $I$.
Let $h$ be a real number that satisfies: $0 < h < \delta$.
We observe that $\openint {x - h} {x + h} \subset I$.
Also, $\openint {x - h} {x + h} \in N_x$.

We have:

$I \in N_x$
$\openint {x - h} {x + h} \in N_x$
$\openint {x - h} {x + h} \subset I$
$\map {\omega_f} {I \cap D} \in \R$
from which follows by Oscillation on Subset:

$\map {\omega_f} {\openint {x - h} {x + h} \cap D} \in \R$
$\map {\omega_f} {\openint {x - h} {x + h} \cap D} \le \map {\omega_f} {I \cap D}$
We have that:

$\map {\omega_f} {\openint {x - h} {x + h} \cap D} \in \set {\map {\omega_f} {I' \cap D}: I' \in N_x}$
as $\openint {x - h} {x + h} \in N_x$.
Also, $\map {\omega_f} x$ is a lower bound for $\set {\map {\omega_f} {I' \cap D}: I' \in N_x}$ by the definition of $\map {\omega_f} x$.
Therefore:

$\map {\omega_f} {\openint {x - h} {x + h} \cap D} \ge \map {\omega_f} x$

We find:














\(\ds \map {\omega_f} x \le \map {\omega_f} {\openint {x - h} {x + h} \cap D}\)

\(\le\)







\(\ds \map {\omega_f} {I \cap D}\)














\(\ds \leadsto \ \ \)





\(\ds 0 \le \map {\omega_f} {\openint {x - h} {x + h} \cap D} - \map {\omega_f} x\)

\(\le\)







\(\ds \map {\omega_f} {I \cap D} - \map {\omega_f} x\)














\(\ds \leadsto \ \ \)





\(\ds 0 \le \map {\omega_f} {\openint {x - h} {x + h} \cap D} - \map {\omega_f} x\)

\(\le\)







\(\ds \map {\omega_f} {I \cap D} - \map {\omega_f} x < \epsilon\)





as $\map {\omega_f} {I \cap D} - \map {\omega_f} x < \epsilon$ is true








\(\ds \leadsto \ \ \)





\(\ds 0 \le \map {\omega_f} {\openint {x - h} {x + h} \cap D} - \map {\omega_f} x\)

\(<\)







\(\ds \epsilon\)














\(\ds \leadsto \ \ \)





\(\ds \size {\map {\omega_f} {\openint {x - h} {x + h} \cap D} - \map {\omega_f} x}\)

\(<\)







\(\ds \epsilon\)









which means that $\ds \lim_{h \mathop \to 0^+} \map {\omega_f} {\openint {x - h} {x + h} \cap D}$ exists and equals $\map {\omega_f} x$ by the definition of limit.
In other words, $\map {\omega^L_f} x \in \R$ and $\map {\omega^L_f} x = \map {\omega_f} x$.
$\Box$


Sufficient Condition
Let $\map {\omega^L_f} x \in \R$.
We need to prove:

$\map {\omega_f} x \in \R$
$\map {\omega_f} x = \map {\omega^L_f} x$
where:

$\map {\omega_f} x = \inf \set {\map {\omega_f} {I \cap D}: I \in N_x}$
$\map {\omega_f} {I \cap D} = \sup \set {\size {\map f y - \map f z}: y, z \in I \cap D}$
$\map {\omega^L_f} x = \ds \lim_{h \mathop \to 0^+} \map {\omega_f} {\openint {x - h} {x + h} \cap D}$

We have:

$\ds \lim_{h \mathop \to 0^+} \map {\omega_f} {\openint {x - h} {x + h} \cap D} \in \R$ as $\map {\omega^L_f} x \in \R$
Therefore, $\map {\omega_f} {\openint {x - h} {x + h} \cap D} \in \R$ for a small enough $h$ in $\R_{>0}$ by the definition of limit.
Let $h$ be such a real number.
We observe that $\openint {x - h} {x + h}$ is a neighborhood in $N_x$.

We have:

$\openint {x - h} {x + h} \in N_x$
$\map {\omega_f} {\openint {x - h} {x + h} \cap D} \in \R$
Accordingly:

$\map {\omega_f} x \in \R$ by Infimum of Set of Oscillations on Set
$\map {\omega_f} x = \map {\omega^L_f} x$ follows by Lemma.
This finishes the proof of the theorem.
$\blacksquare$





