# 

Source: https://proofwiki.org/wiki/Limit_of_Function_by_Convergent_Sequences



Theorem
Let $M_1 = \struct {A_1, d_1}$ and $M_2 = \struct {A_2, d_2}$ be metric spaces.
Let $S \subseteq A_1$ be an open set of $M_1$.
Let $f: S \to A_2$ be a mapping defined on $S$, except possibly at the point $c \in S$.

Then $\ds \lim_{x \mathop \to c} \map f x = l$ if and only if:

for each sequence $\sequence {x_n}$ of points of $S$ such that $\forall n \in \N_{>0}: x_n \ne c$ and $\ds \lim_{n \mathop \to \infty} x_n = c$
it is true that:

$\ds \lim_{n \mathop \to \infty} \map f {x_n} = l$


Real Number Line
On the real number line, this result becomes as follows:

Let $f$ be a real function defined on an open interval $\openint a b$, except possibly at the point $c \in \openint a b$.

Then $\ds \lim_{x \mathop \to c} \map f x = l$ if and only if:

for each sequence $\sequence {x_n}$ of points of $\openint a b$ such that $\forall n \in \N_{>0}: x_n \ne c$ and $\ds \lim_{n \mathop \to \infty} x_n = c$
it is true that:
$\ds \lim_{n \mathop \to \infty} \map f {x_n} = l$


Corollary
The above result holds for a real function tending to a limit both from the right and from the left:

Let $\openint a b$ be an open real interval.
Let $f: \openint a b \to \R$ be a real function.
Let $l \in \R$.

Then:

$(1): \quad \ds \lim_{x \mathop \to a^+} \map f x = l \iff \forall \sequence {x_n} \subseteq \openint a b: \lim_{n \mathop \to \infty} x_n = a \implies \lim_{n \mathop \to \infty} \map f {x_n} = l$
$(2): \quad \ds \lim_{x \mathop \to b^-} \map f x = l \iff \forall \sequence {x_n} \subseteq \openint a b: \lim_{n \mathop \to \infty} x_n = b \implies \lim_{n \mathop \to \infty} \map f {x_n} = l$
where:

$\ds \lim_{x \mathop \to a^+} \map f x$ denotes the limit of $f$ from the right
$\ds \lim_{x \mathop \to b^-} \map f x$ denotes the limit of $f$ from the left.


Complex Plane
On the complex plane, this result becomes as follows:

Let $f$ be a complex function defined on an open subset $S \subseteq \C$, except possibly at the point $c \in S$.

Then $\ds \lim_{x \mathop \to c} \map f z = l$ if and only if:

for each sequence $\sequence {z_n}$ of points of $S$ such that $\forall n \in \N_{>0}: z_n \ne c$ and $\ds \lim_{n \mathop \to \infty} z_n = c$
it is true that:

$\ds \lim_{n \mathop \to \infty} \map f {z_n} = l$


Proof
Necessary Condition
Suppose that:

$\ds \lim_{x \mathop \to c} \map f x = l$
Let $\epsilon > 0$.
Then by the definition of the limit of a mapping:

$\exists \delta > 0: \map {d_2} {\map f x, l} < \epsilon$
provided $0 < \map {d_1} {x, c} < \delta$.
Now suppose that $\sequence {x_n}$ is a sequence of points of $S$ such that such that:

$\forall n \in \N_{>0}: x_n \ne c$ and $\ds \lim_{n \mathop \to \infty} x_n = c$
Since $\delta > 0$, from the definition of the limit of a sequence:

$\exists N \in \N_{>0}: \forall n > N: \map {d_1} {x_n, c} < \delta$
But:

$\forall n \in \N_{>0}: x_n \ne c$
That means:

$0 < \map {d_1} {x_n, c} < \delta$
by the definition of a metric.
But that implies:

$\map {d_2} {\map f {x_n}, l} < \epsilon$
That is, given a value of $\epsilon > 0$, we have found a value of $N$ such that:

$\forall n > N: \map {d_2} {\map f {x_n}, l} < \epsilon$
Thus:

$\ds \lim_{n \mathop \to \infty} \map f {x_n} = l$
$\Box$


Sufficient Condition
Now suppose that for each sequence $\sequence {x_n}$ of points of $S$ such that $\forall n \in \N_{>0}: x_n \ne c$ and $\ds \lim_{n \mathop \to \infty} x_n = c$, it is true that:

$\ds \lim_{n \mathop \to \infty} \map f {x_n} = l$
Aiming for a contradiction, suppose it is not true that:

$\ds \lim_{x \mathop \to c} \map f s = l$
So:

$\exists \epsilon > 0: \forall \delta > 0: \exists x \in S: 0 < \map {d_1} {x, c} < \delta \land \map {d_2} {\map f x, l} \ge \epsilon$
where $\land$ denotes logical and.
For all $n \in \N_{>0}$, define:

$S_n = \set {x \in S: 0 < \map {d_1} {x, c} < \dfrac 1 n \land \map {d_2} {\map f x, l} \ge \epsilon}$
By hypothesis, $S_n$ is non-empty for all $n \in \N_{>0}$.
Using the axiom of countable choice, there exists a sequence $\sequence {x_n}$ of elements of $S$ such that $x_n \in S_n$ for all $n \in \N_{>0}$.
Then:

$\forall n \in \N_{>0}: x_n \ne c$ and $\ds \lim_{n \mathop \to \infty} x_n = c$
but it is not true that:

$\ds \lim_{n \mathop \to \infty} \map f {x_n} = l$
So there is our contradiction, and so the result follows.
$\blacksquare$


Axiom of Countable Choice
This theorem depends on the Axiom of Countable Choice.
Although not as strong as the Axiom of Choice, the Axiom of Countable Choice is similarly independent of the Zermelo-Fraenkel axioms.
As such, mathematicians are generally convinced of its truth and believe that it should be generally accepted.





