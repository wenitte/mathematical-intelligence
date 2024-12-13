# 

Source: https://proofwiki.org/wiki/Radon-Nikodym_Theorem/Lemma_1



Lemma
Let $\struct {X, \Sigma}$ be a measurable space.
Let $\mu$ and $\nu$ be $\sigma$-finite measures on $\struct {X, \Sigma}$ such that: 

$\nu$ is absolutely continuous with respect to $\mu$.
Define $\mathcal F$ to be the set of $\Sigma$-measurable functions $f : X \to \overline \R_{\ge 0}$ with: 

$\ds \int_A f \rd \mu \le \map \nu A$
for each $A \in \Sigma$.
Let $\sequence {f_n}_{n \mathop \in \N}$ be a sequence in $\mathcal F$. 

Then:

for each $n \in \N$, the pointwise maximum $\max \set {f_1, f_2, \ldots, f_n}$ is contained in $\mathcal F$.


Proof
Let $A \in \Sigma$. 
We first prove that for each $f, g \in \mathcal F$, we have: 

$\max \set {f, g} \in \mathcal F$
From Measurable Functions Determine Measurable Sets, we have: 

$\set {x \in X : \map f x < \map g x}$ is $\Sigma$-measurable
and:

$\set {x \in X : \map f x \ge \map g x}$ is $\Sigma$-measurable.
Define: 

$A_1 = \set {x \in X : \map f x < \map g x} \cap A$
and:

$A_2 = \set {x \in X : \map f x \ge \map g x} \cap A$
For $x \in A_1$, we have:

$\map {\max \set {f, g} } x = \map g x$
and for $x \in A_1$, we have:

$\map {\max \set {f, g} } x = \map f x$
From Sigma-Algebra Closed under Countable Intersection, we have: 

$A_1$ and $A_2$ are $\Sigma$-measurable.
Clearly we also have:

$A = A_1 \cup A_2$
with $A_1$ and $A_2$ disjoint.
From Pointwise Maximum of Measurable Functions is Measurable, we have: 

$\max \set {f, g}$ is $\Sigma$-measurable.
Then:














\(\ds \int_A \max \set {f, g} \rd \mu\)

\(=\)







\(\ds \int_{A_1 \cup A_2} \max \set {f, g} \rd \mu\)




















\(\ds \)

\(=\)







\(\ds \int_{A_1} \max \set {f, g} \rd \mu + \int_{A_2} \max \set {f, g} \rd \mu\)




















\(\ds \)

\(=\)







\(\ds \int_{A_1} g \rd \mu + \int_{A_2} f \rd \mu\)




















\(\ds \)

\(\le\)







\(\ds \map \nu {A_1} + \map \nu {A_2}\)





since $f, g \in \mathcal F$














\(\ds \)

\(=\)







\(\ds \map \nu A\)





since $\nu$ is countably additive



So, we have: 

$\ds \int_A \max \set {f, g} \rd \mu \le \map \nu A$
for each $A \in \Sigma$. 
So:

$\max \set {f, g} \in \mathcal F$.

We now prove that:

for each $n \in \N$, the pointwise maximum $\max \set {f_1, f_2, \ldots, f_n}$ is contained in $\mathcal F$.
by induction. 
For all $n \in \N$ let $\map P n$ be the proposition:

$\max \set {f_1, f_2, \ldots, f_n} \in \mathcal F$


Basis for Induction
We have: 

$\max \set {f_1} = f_1$
so:

$\max \set {f_1} \in \mathcal F$
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P n$ is true, where $n \ge 1$, then it logically follows that $\map P {n + 1}$ is true.

Our induction hypothesis is:

$\max \set {f_1, f_2, \ldots, f_n} \in \mathcal F$
We aim to show that: 

$\max \set {f_1, f_2, \ldots, f_{n + 1} } \in \mathcal F$


Induction Step
We have: 

$f_{n + 1} \in \mathcal F$
and:

$\max \set {f_1, f_2, \ldots, f_n} \in \mathcal F$
so: 














\(\ds \max \set {f_1, f_2, \ldots, f_{n + 1} }\)

\(=\)







\(\ds \max \set {\max \set {f_1, f_2, \ldots, f_n}, f_{n + 1} }\)





Definition of Pointwise Maximum of Extended Real-Valued Functions: General Definition














\(\ds \)

\(\in\)







\(\ds \mathcal F\)





since the pointwise maximum of two elements of $\mathcal F$ is contained in $\mathcal F$



as required.

We therefore obtain:

for each $n \in \N$, the pointwise maximum $\max \set {f_1, f_2, \ldots, f_n}$ is contained in $\mathcal F$.
$\blacksquare$





