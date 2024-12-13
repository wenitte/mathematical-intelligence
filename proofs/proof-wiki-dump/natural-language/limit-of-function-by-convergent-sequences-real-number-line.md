# 

Source: https://proofwiki.org/wiki/Limit_of_Function_by_Convergent_Sequences/Real_Number_Line



Theorem
Let $f$ be a real function defined on an open interval $\openint a b$, except possibly at the point $c \in \openint a b$.

Then $\ds \lim_{x \mathop \to c} \map f x = l$ if and only if:

for each sequence $\sequence {x_n}$ of points of $\openint a b$ such that $\forall n \in \N_{>0}: x_n \ne c$ and $\ds \lim_{n \mathop \to \infty} x_n = c$
it is true that:
$\ds \lim_{n \mathop \to \infty} \map f {x_n} = l$


Proof
Necessary Condition
Let $\ds \lim_{x \mathop \to c} \map f x = l$.
Let $\epsilon \in \R_{>0}$.
Then by the definition of the limit of a real function:

$\exists \delta \in \R_{>0}: \size {\map f x - l} < \epsilon$
provided $0 < \size {x - c} < \delta$.
Now suppose that $\sequence {x_n}$ is a sequence of elements of $\openint a b$ such that:

$\forall n \in \N_{>0}: x_n \ne c$
and:

$\ds \lim_{n \mathop \to \infty} x_n = c$
Since $\delta > 0$, from the definition of the limit of a real function:

$\exists N \in \R_{>0}: \forall n > N: \size {x_n - c} < \delta$
But:

$\forall n \in \N_{>0}: x_n \ne c$
That means:

$0 < \size {x_n - c} < \delta$
But that implies:

$\size {\map f {x_n} - l} < \epsilon$
That is, given a value of $\epsilon > 0$, we have found a value of $N$ such that:

$\forall n > N: \size {\map f {x_n} - l} < \epsilon$
Thus:

$\ds \lim_{n \mathop \to \infty} \map f {x_n} = l$
$\Box$


Sufficient Condition
Suppose that for each sequence $\sequence {x_n}$ of elements of $\openint a b$ such that:

$\forall n \in \N_{>0}: x_n \ne c$ and $\ds \lim_{n \mathop \to \infty} x_n = c$, it is true that:
$\ds \lim_{n \mathop \to \infty} \map f {x_n} = l$

Aiming for a contradiction, suppose it is not true that:

$\ds \lim_{x \mathop \to c} \map f x = l$
Thus:

$\exists \epsilon \in \R_{>0}: \forall \delta \in \R_{>0}: \exists x \in \openint a b: 0 < \size {x - c} < \delta: \size {\map f {x_n} - l} \ge \epsilon$
In particular, if $\delta = \dfrac 1 n$, we can find an $x_n$ where $0 < \size {x - c} < \dfrac 1 n$ such that:

$\size {\map f {x_n} - l} \ge \epsilon$
But then $\sequence {x_n}$ is a sequence of elements of $\openint a b$ such that:

$\forall n \in \N_{>0}: x_n \ne c$ and $\ds \lim_{n \mathop \to \infty} x_n = c$
but for which it is not true that:

$\ds \lim_{n \mathop \to \infty} \map f {x_n} = l$
The result follows by Proof by Contradiction.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $1$: Review of some real analysis: $\S 1.3$: Limits of functions: Lemma $1.3.5$
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 8.9$




