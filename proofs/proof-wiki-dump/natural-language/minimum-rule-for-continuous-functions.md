# 

Source: https://proofwiki.org/wiki/Minimum_Rule_for_Continuous_Functions



Theorem
Let $\struct {S, \tau}$ be a topological space.
Let $f, g: S \to \R$ be continuous real-valued functions.
Let $\min \set {f, g}: S \to \R$ denote the pointwise minimum of $f$ and $g$.

Then:

$\min \set {f, g}$ is continuous.


Proof
Let $x \in S$.
Let $\epsilon > 0$.
Without loss of generality, assume that $\map f x \le \map g x$. 


Case 1 : $\map f x = \map g x$
Let $ y = \map f x = \map g x$

By definition of the min operation, $\min \set {\map f x, \map g x} = y$.

From Continuity Test for Real-Valued Functions applied to $f$:

$\exists U \in \tau : x \in U : \forall z \in U : \map f z \in \openint {y - \epsilon} {y + \epsilon}$
Similarly, Continuity Test for Real-Valued Functions applied to $g$:

$\exists V \in \tau : x \in V : \forall z \in V : \map g z \in \openint {y - \epsilon} {y + \epsilon}$

Thus for all $z \in U \cap V$:

$\map f z \in \openint {y - \epsilon} {y + \epsilon}$
$\map g z \in \openint {y - \epsilon} {y + \epsilon}$
By definition of the min operation, for all $z \in U \cap V$:

$\min \set {\map f z, \map g z} \in \openint {y - \epsilon} {y + \epsilon}$
By the Open Set Axiom $\paren {\text O 2 }$: Pairwise Intersection of Open Sets:

$U \cap V \in \tau$

Since $\epsilon > 0$ was arbitrary then:

$\forall \epsilon > 0 : \exists W \in \tau : x \in W : \forall z \in W : \min \set {\map f z, \map g z} \in \openint {y - \epsilon} {y + \epsilon}$
From Continuity Test for Real-Valued Functions, $\min \set {f, g}$ is continuous at $x$.
$\Box$


Case 2 : $\map f x < \map g x$
Let $\map f x < \map g x$.
Then:

$\min \set {\map f x, \map g x} = \map f x$

Let $\delta = \min \set {\epsilon, \dfrac 1 2 \paren {\map g x - \map f x} }$.
Then $\delta > 0$.

From Continuity Test for Real-Valued Functions applied to $f$:

$\exists U \in \tau : x \in U : \forall z \in U : \map f z \in \openint {\map f x - \delta} {\map f x + \delta}$
Similarly, Continuity Test for Real-Valued Functions applied to $g$:

$\exists V \in \tau : x \in V : \forall z \in V : \map g z \in \openint {\map g x - \delta} {\map g x + \delta}$

Thus for all $z \in U \cap V$:

$\map f z \in \openint {\map f x - \delta} {\map f x + \delta}$
$\map g z \in \openint {\map g x - \delta} {\map g x + \delta}$
Now:














\(\ds \map f z\)

\(<\)







\(\ds \map f x + \delta\)





as $\map f z \in \openint {\map f x - \delta} {\map f x + \delta}$














\(\ds \)

\(\le\)







\(\ds \map f x + \frac 1 2 \paren {\map g x - \map f x}\)





as $\delta \le \dfrac 1 2 \paren {\map g x - \map f x}$














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {2 \map f x + \map g x - \map f x}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\map g x + \map f x}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\map g x + \map g x - \map g x + \map f x}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {2 \map g x - \paren{\map g x - \map f x} }\)




















\(\ds \)

\(=\)







\(\ds \map g x - \frac 1 2 \paren {\map g x - \map f x}\)




















\(\ds \)

\(\le\)







\(\ds \map g x - \delta\)





as $-\dfrac 1 2 \paren {\map g x - \map f x} \le -\delta$














\(\ds \)

\(<\)







\(\ds \map g z\)





as $\map g z \in \openint {\map g x - \delta} {\map g x + \delta}$



Thus:

$\min \set {\map f z, \map g z} = \map f z$

As

$\map f z \in \openint {\map f x - \delta} {\map f x + \delta}$
and

$\map f x = \min \set {\map f x, \map g x}$
then

$\min \set {\map f z, \map g z} \in \openint {\min \set {\map f x, \map g x} - \delta} {\min \set {\map f x, \map g x} + \delta}$

By the Open Set Axiom $\paren {\text O 2 }$: Pairwise Intersection of Open Sets:

$U \cap V \in \tau$

Since $\epsilon > 0$ was arbitrary then:

$\forall \epsilon > 0 : \exists W \in \tau : x \in W : \forall z \in W : \min \set{\map f z, \map g z} \in \openint {\min \set {\map f x, \map g x} - \delta} {\min \set {\map f x, \map g x} + \delta}$
From Continuity Test for Real-Valued Functions, $\min \set {f, g}$ is continuous at $x$.
$\Box$

In either case, $\min \set {f, g}$ is continuous at $x$.
Since $x \in S$ was arbitrary, then $\min \set {f, g}$ is everywhere continuous.
$\blacksquare$


Also see
Maximum Rule for Continuous Functions




