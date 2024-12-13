# 

Source: https://proofwiki.org/wiki/Quotient_Space_of_Real_Line_may_be_Kolmogorov_but_not_Fr%C3%A9chet



Theorem
Let $T = \struct {\R, \tau}$ denote the real number line with the usual (Euclidean) topology.
Let $\sim$ be an equivalence relation on $\R$.
Let $\struct {\R / {\sim}, \tau_\sim}$ be the quotient space of $\R$ by $\sim$.

Then it is possible for $\struct {\R / {\sim}, \tau_\sim}$ to be a Kolmogorov space but not a Fréchet space.


Proof by Counterexample
Let $\struct {\R, \tau}$ denote the real number line with the usual (Euclidean) topology.
Define an equivalence relation $\sim$ by letting $x \sim y$ if and only if either:

$x = y$
or:

$x, y \in \Q$

Let $\struct {\R / {\sim}, \tau_\sim}$ be the quotient space of $\R$ by $\sim$.

Then $\struct {\R / {\sim}, \tau_\sim}$ is a Kolmogorov space but not a Fréchet space.

Let $Y = \R / {\sim}$.
Let $\phi: \R \to Y$ be the quotient mapping.
Note that:

$\map \phi x = \set x$ if $x$ is irrational.
$\map \phi x = \Q$ if $x$ is rational.


Kolmogorov
Let $x$ be irrational.
Then:

$\phi^{-1} \sqbrk {Y \setminus \set x} = \R \setminus \set x$
Thus $Y \setminus \set x$ is open in $Y$.
Let $p, q \in Y$ such that $p \ne q$.
Then $\set p$ or $\set q$ must be a singleton containing an irrational number.
Without loss of generality, suppose that $\set p$ is a singleton containing an irrational number.
Then as shown above, $Y \setminus P$ is open in $Y$.
Thus so $p$ and $q$ are distinguishable.
Since this holds for any two points in $Y$, the space is Kolmogorov.
$\Box$


Not Fréchet
Aiming for a contradiction, suppose $\set \Q$ is closed in $Y$.
By Identification Mapping is Continuous, $\phi$ is continuous.
Thus $\phi^{-1} \sqbrk {\set \Q} = \Q$ is closed in $\R$.
But this contradicts the fact that $\Q \subsetneqq \R$ and Rationals are Everywhere Dense in Topological Space of Reals.
Thus the singleton $\set \Q$ is not closed in $Y$.
Hence $\struct {Y, \tau_\sim}$ is not a Fréchet space.
$\blacksquare$





