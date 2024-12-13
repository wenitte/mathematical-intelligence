# 

Source: https://proofwiki.org/wiki/Infima_of_two_Real_Sets



Theorem
Let $S$ and $T$ be sets of real numbers.
Let $S$ and $T$ admit infima.

Then:

$\inf S \ge \inf T \iff \forall \epsilon \in \R_{>0}: \forall s \in S: \exists t \in T: s + \epsilon > t$


Proof
Let:

$-S = \set {-s: s \in S}$
$-T = \set {-t: t \in T}$
Observe that:

$s \in S \iff -s \in -S$
$t \in T \iff -t \in -T$

We know that $\inf S$ and $\inf T$ exist.
The expression $\inf S \ge \inf T$ exists as $\inf S$ and $\inf T$ exist.
In other words, for fixed sets $S$ and $T$, $\inf S \ge \inf T$ is either true or false.

We find:














\(\ds \inf S\)

\(\ge\)







\(\ds \inf T\)














\(\ds \leadstoandfrom \ \ \)





\(\ds -\sup -S\)

\(\ge\)







\(\ds -\sup -T\)





by the lemma








\(\ds \leadstoandfrom \ \ \)





\(\ds \sup -S\)

\(\le\)







\(\ds \sup -T\)














\(\ds \leadstoandfrom \ \ \)

\(\ds \forall \epsilon \in \R_{>0}: \forall x \in -S: \exists y \in -T: \, \)



\(\ds x\)

\(<\)







\(\ds y + \epsilon\)





Suprema of two Real Sets








\(\ds \leadstoandfrom \ \ \)

\(\ds \forall \epsilon \in \R_{>0}: \forall s \in S: \set {x: = -s}: \exists t \in T: \paren {y: = -t}: \, \)



\(\ds x\)

\(<\)







\(\ds y + \epsilon\)





as $s \in S \iff -s \in −S$ and $t \in T \iff -t \in −T$








\(\ds \leadstoandfrom \ \ \)

\(\ds \forall \epsilon \in \R_{>0}: \forall s \in S: \exists t \in T: \, \)



\(\ds -s\)

\(<\)







\(\ds -t + \epsilon\)














\(\ds \leadstoandfrom \ \ \)

\(\ds \forall \epsilon \in \R_{>0}: \forall s \in S: \exists t \in T: \, \)



\(\ds s + \epsilon\)

\(>\)







\(\ds t\)











Lemma
Let $X$ be a set of real numbers.
Let $X$ admit an infimum.
Let $-X = \set {-x: x \in X}$.

Then:

$ \sup -X = -\inf X$


Proof
Because $X$ admits an infimum, it follows that it is not empty.
The result follows by Negative of Infimum is Supremum of Negatives.
$\Box$
$\blacksquare$


Also see
Suprema of two Real Sets




