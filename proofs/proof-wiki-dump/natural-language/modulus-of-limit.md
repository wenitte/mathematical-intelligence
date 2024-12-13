# 

Source: https://proofwiki.org/wiki/Modulus_of_Limit



Theorem
Let $X$ be one of the standard number fields $\Q, \R, \C$.
Let $\sequence {x_n}$ be a sequence in $X$.
Let $\sequence {x_n}$ be convergent to the limit $l$.
That is, let $\ds \lim_{n \mathop \to \infty} x_n = l$.

Then

$\ds \lim_{n \mathop \to \infty} \cmod {x_n} = \cmod l$
where $\cmod {x_n}$ is the modulus of $x_n$.


Normed Division Ring
Let $\struct {R, \norm {\, \cdot \,} }$ be a normed division ring.
Let $\sequence {x_n}$ be a convergent sequence in $R$ to the limit $l$.
That is, let $\ds \lim_{n \mathop \to \infty} x_n = l$.

Then

$\ds \lim_{n \mathop \to \infty} \norm {x_n} = \norm l$


Normed Vector Space
Let $\struct {X, \norm {\, \cdot \,} }$ be a normed vector space.
Let $\sequence {x_n}$ be a convergent sequence in $R$ to the limit $x$.
That is, let $\ds \lim_{n \mathop \to \infty} x_n = x$.

Then:

$\ds \lim_{n \mathop \to \infty} \norm {x_n} = \norm x$


Proof
By the Triangle Inequality, we have:

$\cmod {\cmod {x_n} - \cmod l} \le \cmod {x_n - l}$
Hence by the Squeeze Theorem and Convergent Sequence Minus Limit, $\cmod {x_n} \to \cmod l$ as $n \to \infty$.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 4$: Convergent Sequences: Exercise $\S 4.29 \ (1) \ \text{(ii)}$




