# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Real_Interval



Theorem
The following definitions of the concept of Real Interval are equivalent:

Definition 1
A (real) interval is a subset $I$ of the real numbers such that:

$\forall x, y \in I: \forall z \in \R : \paren {x \le z \le y \implies z \in I}$


Definition 2
A real interval is a subset of $\R$ that is one of the following real interval types:

closed bounded interval
open bounded interval
left half-open bounded interval
right half-open bounded interval
closed and bounded on the right, also known as a closed unbounded below real interval
open and bounded on the right, also known as an open unbounded below real interval
closed and bounded on the left, also known as a closed unbounded above real interval
open and bounded on the left, also known as an open unbounded above real interval
unbounded interval without endpoints


Outline of proof
That an interval according to the second definition is an interval according to the first, follows by the Ordering Properties of Real Numbers.
To prove the other direction, we distinguish according to if the subset is bounded on the left or on the right, and use the Continuum Property.


Proof
1 implies 2
Let $I \subset \R$ be a subset such that:

$\forall x, y \in I : \forall z \in \R : \paren {x \le z \le y \implies z \in I}$
Let:

$a = \map \inf I$ (or $a = -\infty$ if $I$ is not bounded below)
$b = \map \sup I$ (or $b = +\infty$ if $I$ is not bounded above).

We will prove that:

$\openint a b \subseteq I \subseteq \closedint a b$

In order not to need to provide a long list of cases, the temporary convention is used:

A square bracket "$[$" or "$]$" next to $\pm \infty$ means the same as a round bracket "$($" or "$)$"
$\openint a b$ means $\O$ if and only if $a = b$.

Let $z \in \openint a b$.
Then $z \ge a$, so $\exists x \in I: x \le z$ by definition of $a$.
Similarly $z \le b$, so $\exists y \in S: z \le y$ by definition of $b$.
Hence by hypothesis $z \in I$.
This proves that $\openint a b \subseteq I$.
From the definitions of $a$ and $b$ it follows that $I \subseteq \closedint a b$.
But if $\openint a b \subseteq I \subseteq \closedint a b$, then $I$ must be one of the various types of real interval.
$\Box$


2 implies 1
If $I$ is a real interval of any of the various kinds, then it clearly has this property by definition.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $6.2$: Connectedness: Lemma $6.2.6$
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 2$: Continuum Property: $\S 2.9$: Intervals




