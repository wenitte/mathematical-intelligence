# 

Source: https://proofwiki.org/wiki/Banach-Schauder_Theorem



Theorem
Let $\struct {X, \norm \cdot_X}$ and $\struct {Y, \norm \cdot_Y}$ be Banach spaces.
Let $T : X \to Y$ be a surjective bounded linear transformation.

Then $T$ is an open mapping.


Proof
For each $x \in X$ and $r > 0$, let $\map {B_X} {x, r}$ be the open ball in $\struct {X, \norm \cdot_X}$ with centre $x$ and radius $r$.
For each $y \in Y$ and $r > 0$, let $\map {B_Y} {y, r}$ be the open ball in $\struct {Y, \norm \cdot_Y}$ with centre $y$ and radius $r$.
Note that we can write: 

$\ds X = \bigcup_{n \mathop = 1}^\infty \map {B_X} {0, n}$
From Image of Union under Mapping: General Result, we have: 

$\ds T \sqbrk X = \bigcup_{n \mathop = 1}^\infty T \sqbrk {\map {B_X} {0, n} }$
Since $T$ is surjective, we have $T \sqbrk X = Y$, and so: 

$\ds Y = \bigcup_{n \mathop = 1}^\infty T \sqbrk {\map {B_X} {0, n} }$

Since $\struct {Y, \norm \cdot_Y}$ is a Banach space, by the Baire Category Theorem it is also a Baire space.
From Baire Space is Non-Meager:

$Y$ is non-meager.
So:

$Y$ is not the countable union of nowhere dense subsets of $Y$.
So, we must have: 

$T \sqbrk {\map {B_X} {0, m} }$ is not nowhere dense for some $m \in \N$.
So the topological closure of $T \sqbrk {\map {B_X} {0, m} }$ has non-empty interior.
So, there exists a open set $U \subseteq X$ such that: 

$U \subseteq \paren {T \sqbrk {\map {B_X} {0, m} } }^-$
where $\paren {T \sqbrk {\map {B_X} {0, m} } }^-$ denotes the topological closure of $T \sqbrk {\map {B_X} {0, m} }$
Let $y \in U$.
Since $U$ is open set, there exists an open ball $\map {B_Y} {y, r}$ such that $r > 0$ and: 

$\map {B_Y} {y, r} \subseteq U \subseteq \paren {T \sqbrk {\map {B_X} {0, m} } }^-$


Lemma 1
$\map {B_Y} {0, r} \subseteq \paren {T \sqbrk {\map {B_X} {0, m} } }^-$
$\Box$

Lemma 2
$\map {B_Y} {0, r} \subseteq T \sqbrk {\map {B_X} {0, 2 m} }$
$\Box$


This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.
Now let $V \subseteq X$ be an arbitrary open set.
We aim to show that $T \sqbrk V$ is open in $Y$.
Let $y \in T \sqbrk V$, then there exists $x \in V$ such that $y = T x$.
Since $V$ is open there exists $\delta > 0$ such that $\map {B_X} {x, \delta} \subseteq V$. 
We show that: 

$\ds \map {B_Y} {T x, \frac \delta {2 m} r} \subseteq T \sqbrk V$
Let:

$\ds v \in \map {B_Y} {T x, \frac \delta {2 m} r}$
Then: 

$\ds \norm {v - T x}_Y < \frac \delta {2 m} r$
so:

$\ds \norm {\frac {2 m} \delta \paren {v - T x} }_Y < r$
So:

$\ds \frac {2 m} \delta \paren {v - T x} \in \map {B_Y} {0, r}$
Then, from Lemma 2, we have: 

$\ds \frac {2 m} \delta \paren {v - T x} \in T \sqbrk {\map {B_X} {0, 2 m} }$
So: 

$\ds \frac {2 m} \delta \paren {v - T x} = \map T {2 m u} = 2 m T u$
for some $u$ with $\norm u_X < 1$. 
So:

$\ds \frac {v - T x} \delta = T u$
Then: 

$v - T x = \map T {\delta u}$
with $\norm {\delta u}_X < \delta$.
Then: 

$v = \map T {x + \delta u}$
with $x + \delta u \in \map {B_X} {x, \delta}$.
So: 

$v \in T \sqbrk {\map {B_X} {x, \delta} }$
Then $v = T x'$ for some $x' \in \map {B_X} {x, \delta}$.
Since $\map {B_X} {x, \delta} \subseteq V$, we have $x' \in V$.
So $v \in T \sqbrk V$.
So:

$\ds \map {B_Y} {T x, \frac \delta {2 m} r} \subseteq T \sqbrk V$
That is: 

$\ds \map {B_Y} {y, \frac \delta {2 m} r} \subseteq T \sqbrk V$
So $T \sqbrk V$ is open in $Y$.
We have now shown that for each open set $V \subseteq X$, $T \sqbrk V$ is open in $Y$. 
So $T$ is an open mapping.
$\blacksquare$


Axiom of Dependent Choice
This theorem depends on the Axiom of Dependent Choice, by way of Baire Category Theorem.
Although not as strong as the Axiom of Choice, the Axiom of Dependent Choice is similarly independent of the Zermelo-Fraenkel axioms.
The consensus in conventional mathematics is that it is true and that it should be accepted.


Also known as
This theorem is also known as the open mapping theorem.


Source of Name
This entry was named for Stefan Banach and Juliusz Paweł Schauder.


Sources
1993: Serge Lang: Real and Functional Analysis (3rd ed.): Chapter XV, $\S1$. The Open Mapping Theorem
2020: James C. Robinson: Introduction to Functional Analysis ... (previous) ... (next) $23.1$: The Open Mapping and Inverse Mapping Theorems




