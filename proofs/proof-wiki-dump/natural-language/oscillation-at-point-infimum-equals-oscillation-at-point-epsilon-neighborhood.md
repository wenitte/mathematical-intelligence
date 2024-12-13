# 

Source: https://proofwiki.org/wiki/Oscillation_at_Point_(Infimum)_equals_Oscillation_at_Point_(Epsilon-Neighborhood)


This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.

This page has been identified as a candidate for refactoring of medium complexity.In particular: Extract lemma, and see this can be shortenedUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Theorem
Let $f: D \to \R$ be a real function where $D \subseteq \R$.
Let $x$ be a point in $D$.
Let $N_x$ be the set of neighborhoods of $x$.
Let $E_x$ be the set of $\epsilon$-neighborhoods of $x$.
Let $\map {\omega_f} x$ be the oscillation of $f$ at $x$ based on $N_x$:

$\map {\omega_f} x = \inf \set {\map {\omega_f} {I \cap D}: I \in N_x}$
where $\map {\omega_f} {I \cap D}$ is the oscillation of $f$ on $I \cap D$:

$\map {\omega_f} {I \cap D} = \sup \set {\size {\map f y - \map f z}: y, z \in I \cap D}$
Let $\map {\omega^E_f} x$ be the oscillation of $f$ at $x$ based on $E_x$:

$\map {\omega^E_f} x = \inf \set {\map {\omega_f} {I \cap D}: I \in E_x}$

Then:

$\map {\omega_f} x \in \R$ if and only if $\map {\omega^E_f} x \in \R$
and, if $\map {\omega_f} x$ and $\map {\omega^E_f} x$ exist as real numbers:

$\map {\omega_f} x = \map {\omega^E_f} x$


Proof
Lemma
Let $f: D \to \R$ be a real function where $D \subseteq \R$.
Let $x$ be a point in $D$.
Let $N_x$ be the set of neighborhoods of $x$.
Let $E_x$ be the set of $\epsilon$-neighborhoods of $x$.
Let $\map {\omega_f} x$ be the oscillation of $f$ at $x$ based on $N_x$:

$\map {\omega_f} x = \inf \set {\map {\omega_f} {I \cap D}: I \in N_x}$
where $\map {\omega_f} {I \cap D}$ is the oscillation of $f$ on $I \cap D$:

$\map {\omega_f} {I \cap D} = \sup \set {\size {\map f y - \map f z}: y, z \in I \cap D}$
Let $\map {\omega^E_f} x$ be the oscillation of $f$ at $x$ based on $E_x$:

$\map {\omega^E_f} x = \inf \set {\map {\omega_f} {I \cap D}: I \in E_x}$

Let $\map {\omega_f} x \in \R$.
Let $\map {\omega^E_f} x \in \R$.

Then $\map {\omega_f} x = \map {\omega^E_f} x$.


Proof
We have:

$\map {\omega_f} x \in \R$
$\map {\omega^E_f} x \in \R$
We need to prove that:

$\map {\omega_f} x = \map {\omega^E_f} x$

Let:

$N = \set {\map {\omega_f} {I \cap D}: I \in N_x}$
$E = \set {\map {\omega_f} {I \cap D}: I \in E_x}$
$\map {\omega_f} x = \inf N$
$\map {\omega^E_f} x = \inf E$
$\map {\omega_f} {I \cap D} = \sup \set {\size {\map f y - \map f z}: y, z \in I \cap D}$
We have:

$\inf N \in \R$ as $\map {\omega_f} x \in \R$
$\inf E \in \R$ as $\map {\omega^E_f} x \in \R$

Let:

$NR = N \cap \R$

Let $I \in N_x$.
Therefore, $x \in I$.
Oscillation on Set is an Extended Real Number gives that $\map {\omega_f} {I \cap D}$ is an extended real number.
Therefore:

$N$ is a set of extended real numbers as $N = \set {\map {\omega_f} {I \cap D}: I \in N_x}$.

Also, we have that $N$ is bounded below (in $\R$) as $\inf N \in \R$.
This gives by Infimum of Real Subset:

$\inf NR \in \R$ as $\inf N \in \R$
$\inf NR = \inf N$ as $\inf NR \in \R$ and $\inf N \in \R$

Let:

$ER = E \cap \R$

We observe by the definitions of $E_x$ and $N_x$ that every $I$ in $E_x$ is also an element of $N_x$.
Therefore, $E_x$ is a subset of $N_x$.
Accordingly:

$E$ is a subset of $N$ by the definitions of $E$ and $N$
Therefore:

$ER$ is a subset of $NR$ by Set Intersection Preserves Subsets/Corollary

We have that $N$ is a set of extended real numbers.
Also, we have that $E$ is a subset of $N$.
Therefore, $E$ is a set of extended real numbers.
Also, we have that $E$ is bounded below (in $\R$) as $\inf E \in \R$.
This gives by Infimum of Real Subset:

$\inf ER \in \R$ as $\inf E \in \R$
$\inf ER = \inf E$ as $\inf ER \in \R$ and $\inf E \in \R$

Assume that:

$s$ is a real number in $N$
Then an $I \in N_x$ exists such that:

$\map {\omega_f} {I \cap D} = s$ as $N = \set {\map {\omega_f} {I' \cap D}: I' \in N_x}$
We have that $\map {\omega_f} {I \cap D} \in \R$ as $s \in \R$.
The real set $I$ is a neighborhood of $x$ as $I \in N_x$.
This means that $I$ contains an open subset that contains (as an element) $x$.
Therefore, an $h \in \R_{>0}$ exists such that $\openint {x - h} {x + h}$ is a subset of $I$.
Observe that $\openint {x - h} {x + h} \in N_x$.
We have:

$I \in N_x$
$\map {\omega_f} {I \cap D} \in \R$
$\openint {x - h} {x + h} \in N_x$
$\openint {x - h} {x + h} \subset I$
This gives by Oscillation on Subset:

$\map {\omega_f} {\openint {x - h} {x + h} \cap D } \in \R$
$\map {\omega_f} {\openint {x - h} {x + h} \cap D } \le \map {\omega_f} {I \cap D}$

We have that $\openint {x - h} {x + h} \in E_x$ as $\openint {x - h} {x + h}$ is an $\epsilon$-neighborhood of $x$.
Therefore:

$\map {\omega_f} {\openint {x - h} {x + h} \cap D } \in E$ as $E = \set {\map {\omega_f} {I' \cap D}: I' \in E_x}$

Let:

$t = \map {\omega_f} {\openint {x - h} {x + h} \cap D }$
We have $t \in E$ as $\map {\omega_f} {\openint {x - h} {x + h} \cap D } \in E$.
Also, $t \in \R$ as $\map {\omega_f} {\openint {x - h} {x + h} \cap D } \in \R$.
Accordingly:

$t \in ER$ as $ER = E \cap \R$

We have $t = \map {\omega_f} {\openint {x - h} {x + h} \cap D }$ and $s = \map {\omega_f} {I \cap D}$.
Therefore:

$t \le s$ as $\map {\omega_f} {\openint {x - h} {x + h} \cap D } \le \map {\omega_f} {I \cap D}$

We have assumed that $s$ is a real number in $N$.
Therefore:

$s \in NR$ as $NR = N \cap \R$

We have:










\(\ds \forall s \in NR: \exists t \in ER: \, \)



\(\ds s\)

\(\ge\)







\(\ds t\)














\(\ds \leadsto \ \ \)

\(\ds \forall \epsilon \in \R_{>0}: \forall s \in NR: \exists t \in ER: \, \)



\(\ds s\)

\(\ge\)







\(\ds t \land \epsilon > 0\)





as $\epsilon > 0$ is true since $\epsilon \in \R_{>0}$








\(\ds \leadsto \ \ \)

\(\ds \forall \epsilon \in \R_{>0}: \forall s \in NR: \exists t \in ER: \, \)



\(\ds s\)

\(\ge\)







\(\ds t \land s + \epsilon > s\)














\(\ds \leadsto \ \ \)

\(\ds \forall \epsilon \in \R_{>0}: \forall s \in NR: \exists t \in ER: \, \)



\(\ds s + \epsilon\)

\(>\)







\(\ds s \ge t\)














\(\ds \leadsto \ \ \)

\(\ds \forall \epsilon \in \R_{>0}: \forall s \in NR: \exists t \in ER: \, \)



\(\ds s + \epsilon\)

\(>\)







\(\ds t\)














\(\ds \leadsto \ \ \)





\(\ds \inf NR\)

\(=\)







\(\ds \inf ER\)





by Condition for Infimum of Subset to equal Infimum of Set as $ER$ is a subset of $NR$, $\inf NR \in \R$, and $\inf ER \in \R$








\(\ds \leadsto \ \ \)





\(\ds \inf N\)

\(=\)







\(\ds \inf ER\)





as $\inf N = \inf NR$








\(\ds \leadsto \ \ \)





\(\ds \inf N\)

\(=\)







\(\ds \inf E\)





as $\inf E = \inf ER$








\(\ds \leadsto \ \ \)





\(\ds \map {\omega_f} x\)

\(=\)







\(\ds \map {\omega^E_f} x\)





definitions



$\Box$


Necessary Condition
Let:

$\map {\omega_f} x = \inf \set {\map {\omega_f} {I \cap D}: I \in N_x}$
$\map {\omega^E_f} x = \inf \set {\map {\omega_f} {I \cap D}: I \in E_x}$
$\map {\omega_f} {I \cap D} = \sup \set {\size {\map f y - \map f z}: y, z \in I \cap D}$

Let $\map {\omega_f} x \in \R$.
We need to prove:

$\map {\omega^E_f} x \in \R$
$\map {\omega^E_f} x = \map {\omega_f} x$

First, we intend to prove that $\map {\omega^E_f} x \in \R$.

We have $\map {\omega_f} x \in \R$.
Therefore, $\set {\map {\omega_f} {I \cap D}: I \in N_x}$ contains a real number by Infimum of Set of Oscillations on Set.
Accordingly, an $I \in N_x$ exists such that $\map {\omega_f} {I \cap D}$ is a real number.

$I$ is an open subset neighborhood of $x$ as $I \in N_x$.
This means that $I$ contains an open subset that contains (as an element) $x$.
Therefore, an $h \in \R_{>0}$ exists such that $\openint {x - h} {x + h}$ is a subset of $I$.
Observe that $\openint {x - h} {x + h} \in N_x$.
We have:

$I \in N_x$
$\map {\omega_f} {I \cap D} \in \R$
$\openint {x - h} {x + h} \in N_x$
$\openint {x - h} {x + h} \subset I$
This gives by Oscillation on Subset:

$\map {\omega_f} {\openint {x - h} {x + h} \cap D } \in \R$

We observe that $\openint {x - h} {x + h}$ is an $\epsilon$-neighborhood of $x$.
Therefore, $\openint {x - h} {x + h} \in E_x$.
Accordingly, $\map {\omega_f} {\openint {x - h} {x + h} \cap D } \in \set {\map {\omega_f} {I \cap D}: I \in E_x}$.
Therefore, $\set {\map {\omega_f} {I \cap D}: I \in E_x}$ contains a real number as $\map {\omega_f} {\openint {x - h} {x + h} \cap D } \in \R$.
From this follows that $\map {\omega^E_f} x \in \R$ by Infimum of Set of Oscillations on Set.
This is the first statement that we intended to prove.

Next, we need to prove that $\map {\omega^E_f} x = \map {\omega_f} x$.
This result follows by Lemma as $\map {\omega_f} x$ and $\map {\omega^E_f} x$ exist as real numbers.
$\Box$


Sufficient Condition
Let:

$N = \set {\map {\omega_f} {I \cap D}: I \in N_x}$
$E = \set {\map {\omega_f} {I \cap D}: I \in E_x}$
$\map {\omega_f} x = \inf N$
$\map {\omega^E_f} x = \inf E$
$\map {\omega_f} {I \cap D} = \sup \set {\size {\map f y - \map f z}: y, z \in I \cap D}$

Let $\map {\omega^E_f} x \in \R$.
We need to prove:

$\map {\omega_f} x \in \R$
$\map {\omega_f} x = \map {\omega^E_f} x$

First, we intend to prove that $\map {\omega_f} x \in \R$.

We have $\map {\omega^E_f} x \in \R$.
Therefore,  $E$ contains a real number by Infimum of Set of Oscillations on Set.

We observe by the definitions of $E_x$ and $N_x$ that every $I$ in $E_x$ is also an element of $N_x$.
Therefore, $E_x$ is a subset of $N_x$.
Accordingly:

$E$ is a subset of $N$ by the definitions of $E$ and $N$

We have:














\(\ds \)

\(\)







\(\ds E \text { contains a real number}\)




















\(\ds \)

\(\leadsto\)







\(\ds N \text { contains a real number}\)





as $E$ is a subset of $N$














\(\ds \)

\(\leadsto\)







\(\ds \map {\omega_f} x \in \R\)





Infimum of Set of Oscillations on Set



This is the first statement that we intended to prove.

Next, we need to prove that $\map {\omega_f} x = \map {\omega^E_f} x$.
This result follows by Lemma as $\map {\omega^E_f} x$ and $\map {\omega_f} x$ exist as real numbers.
$\blacksquare$





