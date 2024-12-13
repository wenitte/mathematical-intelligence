# 

Source: https://proofwiki.org/wiki/Limit_of_Image_of_Sequence/Real_Number_Line

Theorem
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

That is, for a continuous function, the limit and function symbols commute.


Proof
From Limit of Real Function by Convergent Sequences, we have:

$\ds \lim_{x \mathop \to \xi} \map f x = l$
if and only if:

for each sequence $\sequence {x_n}$ of points of $\openint a b$ such that:
$\forall n \in \N_{>0}: x_n \ne \xi$
and:
$\ds \lim_{n \mathop \to \infty} x_n = \xi$
it is true that:
$\ds \lim_{n \mathop \to \infty} \map f {x_n} = l$
The result follows directly from this and the definition of continuity on an interval.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 9.6$




