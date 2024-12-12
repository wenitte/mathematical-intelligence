# 

Source: https://proofwiki.org/wiki/Decomposition_of_Probability_Measures



Theorem
Let $\struct {\Omega, \Sigma, P}$ be a probability space.
Suppose that for every $\omega \in \Omega$, it holds that:

$\set \omega \in \Sigma$
that is, that $\Sigma$ contains all singletons.

Then there exist a unique diffuse measure $\mu$ and a unique discrete measure $\nu$ such that:

$P = \mu + \nu$


Proof
Existence
For each $n \in \N$, define $\Omega_n$ by:

$\Omega_n := \set {\omega \in \Omega: \map P {\set \omega} \ge \dfrac 1 n}$
Aiming for a contradiction, suppose that $\Omega_n$ has more than $n$ elements, and define $\Omega'_n$ to be a finite subset of $\Omega_n$ with $n + 1$ elements.
From Measure is Monotone and Measure is Finitely Additive Function, it follows that:

$\ds 1 = \map P \Omega \ge \map P {\Omega'_n} = \sum_{\omega \mathop \in \Omega'_n} \map P {\set \omega} \ge \frac {\card {\Omega'_n} } n = \frac {n + 1} n$
This is an obvious contradiction, whence $\Omega_n$ has at most $n$ elements, and in particular, $\Omega_n$ is finite.

It follows from Sequence of Reciprocals is Null Sequence that:

$\forall p \in \R_{>0}: \exists n \in \N: \dfrac 1 n < p$
Therefore, defining $\Omega_\infty$ by:

$\Omega_\infty := \set {\omega \in \Omega: \map P {\set \omega} > 0}$
we have:

$\ds \Omega_\infty = \bigcup_{n \mathop \in \N} \Omega_n$
whence by Countable Union of Countable Sets is Countable, $\Omega_\infty$ is countable.
Also, being the countable union of elements in $\Sigma$, $\Omega_\infty \in \Sigma$.

Thus, let $\Omega_\infty = \set {\omega_0, \omega_1, \omega_2, \ldots}$ be a countably infinite enumeration.


This article, or a section of it, needs explaining.In particular: Is the case that $\Omega_\infty$ is finite, forgotten?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Now define the discrete measure $\nu$ by:

$\ds \nu := \sum_{n \mathop \in \N} \map P {\set {\omega_n} } \delta_{\omega_n}$

Next, we define $\mu$ in the only possible way:

$\mu: \Sigma \to \overline \R: \map \mu E := \map P E - \map \nu E$
It remains to verify that $\mu$ is a measure, and diffuse.

So let $E \in \Sigma$, and write, by Set Difference and Intersection form Partition:

$E = \paren {E \cap \Omega_\infty} \sqcup \paren {E \setminus \Omega_\infty}$
where $\sqcup$ signifies disjoint union.

Then we also have, trivially, the decomposition:

$\ds E \cap \Omega_\infty = \bigsqcup_{\substack n \mathop \in \N  \\ \omega_n \mathop \in E } \set {\omega_n}$
Now, we can compute:














\(\ds \map \nu E\)

\(=\)







\(\ds \sum_{n \mathop \in \N} \map P {\set {\omega_n} } \map {\delta_{\omega_n} } E\)





Definition of $\nu$














\(\ds \)

\(=\)







\(\ds \sum_{\substack n \mathop \in \N \\ \omega_n \mathop \in E } \map P {\set {\omega_n} }\)





Definition of Dirac Measure














\(\ds \)

\(=\)







\(\ds \map P {E \cap \Omega_\infty}\)





$P$ is a Measure








\(\ds \leadsto \ \ \)





\(\ds \map P E - \map \nu E\)

\(=\)







\(\ds \map P {E \cap \Omega_\infty} + \map P {E \setminus \Omega_\infty} - \map P {E \cap \Omega_\infty}\)





Measure is Finitely Additive Function














\(\ds \)

\(=\)







\(\ds \map P {E \setminus \Omega_\infty}\)









From Set Difference as Intersection with Complement, we may write:

$E \setminus \Omega_\infty = E \cap \paren {\Omega \setminus \Omega_\infty}$
So for every $E \in \Sigma$, we have:

$\map \mu E = \map P {E \cap \paren {\Omega \setminus \Omega_\infty} }$
whence by $\mu$ is an intersection measure, and by Intersection Measure is Measure, a measure.

To show that $\mu$ is diffuse, let $\omega \in \Omega$.
Then:

$\map \mu {\set \omega} = \map P {\set \omega \cap \paren {\Omega \setminus \Omega_\infty} }$
Now, by definition of $\Omega_\infty$, we have:

$\set \omega \setminus \Omega_\infty = \begin{cases} \set \omega & \text {if } \map P {\set \omega} = 0 \\
\O & \text{otherwise} \end{cases}$
and so in either case, it follows that:

$\map P {\set \omega \cap \paren {\Omega \setminus \Omega_\infty} } = 0$
that is to say, $\mu$ is diffuse.
$\Box$


Uniqueness
Let $P = \mu_1 + \nu_1 = \mu_2 + \nu_2$ be two decompositions.
Since $\mu_1$ and $\mu_2$ are diffuse, it follows that, for any $\omega \in \Omega$:

$\map P {\set \omega} = \nu_1 \paren {\set \omega} = \map {\nu_2} {\set \omega}$
Suppose that we have the discrete measures $\nu_1$ and $\nu_2$ defined as:

$\ds \nu_1 = \sum_{n \mathop \in \N} \kappa_n \delta_{x_n}$
$\ds \nu_2 = \sum_{m \mathop \in \N} \lambda_m \delta_{y_m}$
where we take $\sequence {x_n}_{n \mathop \in \N}$ and $\sequence {y_n}_{n \mathop \in \N}$ to be sequences of distinct terms.
Then the equality derived for arbitrary $\omega$ above yields, taking $\omega = x_n$:

$\ds \kappa_n = \sum_{m \mathop \in \N} \lambda_m \map {\delta_{y_m} } {\set {x_n} }$
which by definition of Dirac measure implies the existence of a unique $m \in \N$ such that:

$x_n = y_m, \, \kappa_n = \lambda_m$
and reversing the argument, also an $n \in \N$ with this equality for every $y_m$.
That is, it must be that $\nu_1 = \nu_2$.

Whence $\mu_1 = P - \nu_1 = P - \nu_2 = \mu_2$, and uniqueness follows.
$\blacksquare$


Axiom of Countable Choice
This theorem depends on the Axiom of Countable Choice, by way of Countable Union of Countable Sets is Countable.
Although not as strong as the Axiom of Choice, the Axiom of Countable Choice is similarly independent of the Zermelo-Fraenkel axioms.
As such, mathematicians are generally convinced of its truth and believe that it should be generally accepted.


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $\S 6$: Problem $5$




