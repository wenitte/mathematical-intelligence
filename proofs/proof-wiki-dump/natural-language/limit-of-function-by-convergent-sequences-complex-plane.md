# 

Source: https://proofwiki.org/wiki/Limit_of_Function_by_Convergent_Sequences/Complex_Plane



Theorem
Let $f$ be a complex function defined on an open subset $S \subseteq \C$, except possibly at the point $c \in S$.

Then $\ds \lim_{x \mathop \to c} \map f z = l$ if and only if:

for each sequence $\sequence {z_n}$ of points of $S$ such that $\forall n \in \N_{>0}: z_n \ne c$ and $\ds \lim_{n \mathop \to \infty} z_n = c$
it is true that:

$\ds \lim_{n \mathop \to \infty} \map f {z_n} = l$


Proof
Necessary Condition
Let $\ds \lim_{z \mathop \to c} \map f z = l$.
Let $\epsilon \in \R_{>0}$.
Then by definition of the limit of a complex function:

$\exists \delta \in \R_{>0}: \cmod {\map f z - l} < \epsilon$
provided $0 < \cmod {z - c} < \delta$.
Now suppose that $\sequence {x_n}$ is a sequence of elements of $S$ such that:

$\forall n \in \N_{>0}: z_n \ne c$
and:

$\ds \lim_{n \mathop \to \infty} z_n = c$
Since $\delta > 0$, from the definition of the limit of a complex function:

$\exists N \in \R_{>0}: \forall n \in \N: n > N \implies \cmod {z_n - c} < \delta$
But:

$\forall n \in \N_{>0}: z_n \ne c$
That means:

$0 < \cmod {z_n - c} < \delta$
But that implies:

$\cmod {\map f {z_n} - l} < \epsilon$
That is, given a value of $\epsilon > 0$, we have found a value of $N$ such that:

$\forall n \in \N: n > N \implies \cmod {\map f {z_n} - l} < \epsilon$
Thus:

$\ds \lim_{n \mathop \to \infty} \map f {z_n} = l$
$\Box$


Sufficient Condition
Suppose that for each sequence $\sequence {x_n}$ of elements of $S$ such that:

$\forall n \in \N_{>0}: z_n \ne c$ and $\ds \lim_{n \mathop \to \infty} z_n = c$, it is true that:
$\ds \lim_{n \mathop \to \infty} \map f {z_n} = l$

Aiming for a contradiction, suppose it is not true that:

$\ds \lim_{z \mathop \to c} \map f z = l$
Thus:

$\exists \epsilon > 0: \forall \delta > 0: \exists x: 0 < \cmod {z - c} < \delta: \cmod {\map f {z_n} - l} \ge \epsilon$
In particular, if $\delta = \dfrac 1 n$, we can find a $z_n$ where $0 < \cmod {x - c} < \dfrac 1 n$ such that:

$\cmod {\map f {z_n} - l} \ge \epsilon$
But then $\sequence {z_n}$ is a sequence of elements of $S$ such that:

$\forall n \in \N_{>0}: z_n \ne c$ and $\ds \lim_{n \mathop \to \infty} z_n = c$
but for which it is not true that:

$\ds \lim_{n \mathop \to \infty} \map f {z_n} = l$
The result follows by Proof by Contradiction.
$\blacksquare$


Axiom of Countable Choice
This theorem depends on the Axiom of Countable Choice.
Although not as strong as the Axiom of Choice, the Axiom of Countable Choice is similarly independent of the Zermelo-Fraenkel axioms.
As such, mathematicians are generally convinced of its truth and believe that it should be generally accepted.





