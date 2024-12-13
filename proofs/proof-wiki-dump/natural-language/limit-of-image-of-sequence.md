# 

Source: https://proofwiki.org/wiki/Limit_of_Image_of_Sequence



Theorem
Let $M_1 = \struct {A_1, d_1}$ and $M_2 = \struct {A_2, d_2}$ be metric spaces.
Let $f: A_1 \to A_2$ be a mapping which is continuous at $a \in A_1$.
Let $\sequence {x_n}$ be a sequence of points in $A_1$ such that:

$\ds \lim_{n \mathop \to \infty} x_n = a$
where $\ds \lim_{n \mathop \to \infty} x_n$ is the limit of $x_n$.

Then:

$\ds \lim_{n \mathop \to \infty} \map f {x_n} = \map f a$
That is:

$\ds \lim_{n \mathop \to \infty} \map f {x_n} = \map f {\lim_{n \mathop \to \infty} x_n}$

That is, for a continuous mapping, the limit and function symbols commute.


Real Number Line
On the real number line, this result becomes as follows:

Let $f$ be a real function which is continuous on the interval $\Bbb I$.
Let $\sequence {x_n}$ be a sequence of points in $\Bbb I$ such that:

$\ds \lim_{n \mathop \to \infty} x_n = \xi$
where:

$(1): \quad \xi \in \Bbb I$
$(2): \quad \ds \lim_{n \mathop \to \infty} x_n$ denotes the limit of $x_n$.

Then:

$\ds \lim_{n \mathop \to \infty} \map f {x_n} = \map f \xi$
That is:

$\ds \lim_{n \mathop \to \infty} \map f {x_n} = \map f {\lim_{n \mathop \to \infty} x_n}$


Proof
From Limit of Function by Convergent Sequences, we have:

$\ds \lim_{x \mathop \to a} \map f x = \map f a$
if and only if:

for each sequence $\sequence {x_n}$ of points of $A_1$ such that:
$\forall n \in \N_{>0}: x_n \ne a$
and:
$\ds \lim_{n \mathop \to \infty} x_n = a$
it is true that:
$\ds \lim_{n \mathop \to \infty} \map f {x_n} = \map f a$

The result follows directly from this and the definition of continuity.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 5$: Limits




