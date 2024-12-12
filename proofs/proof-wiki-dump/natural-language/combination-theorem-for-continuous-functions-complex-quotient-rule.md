# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Continuous_Functions/Complex/Quotient_Rule

Theorem
Let $\C$ denote the complex numbers.
Let $f$ and $g$ be complex functions which are continuous on an open subset $S \subseteq \C$.

Then:

$\dfrac f g$ is continuous on $S \setminus \set {z \in S: \map g z = 0}$
that is, on all the points $z$ of $S$ where $\map g z \ne 0$.


Proof
By definition of continuous:

$\forall c \in S: \ds \lim_{z \mathop \to c} \map f z = \map f c$
$\forall c \in S: \ds \lim_{z \mathop \to c} \map g z = \map g c$

Let $f$ and $g$ tend to the following limits:

$\ds \lim_{z \mathop \to c} \map f z = l$
$\ds \lim_{z \mathop \to c} \map g z = m$

From the Quotient Rule for Limits of Complex Functions, we have that:

$\ds \lim_{z \mathop \to c} \frac {\map f z} {\map g z} = \frac l m$
wherever $m \ne 0$.

So, by definition of continuous again, we have that $\dfrac f g$ is continuous on all points $z$ of $S$ where $\map g z \ne 0$.
$\blacksquare$





