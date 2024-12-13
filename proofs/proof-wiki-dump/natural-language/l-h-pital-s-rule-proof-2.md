# 

Source: https://proofwiki.org/wiki/L%27H%C3%B4pital%27s_Rule/Proof_2

Theorem
Let $f$ and $g$ be real functions which are differentiable on the open interval $\openint a b$.
Let:

$\forall x \in \openint a b: \map {g'} x \ne 0$
where $g'$ denotes the derivative of $g$ with respect to $x$.
Let:

$\ds \lim_{x \mathop \to a^+} \map f x = \lim_{x \mathop \to a^+} \map g x = 0$

Then:

$\ds \lim_{x \mathop \to a^+} \frac {\map f x} {\map g x} = \lim_{x \mathop \to a^+} \frac {\map {f'} x} {\map {g'} x}$
provided that the second limit exists.


Proof
Take the Cauchy Mean Value Theorem with $b = x$:

$\exists \xi \in \openint a x: \dfrac {\map {f'} \xi} {\map {g'} \xi} = \dfrac {\map f x - \map f a} {\map g x - \map g a}$

Then if $\map f a = \map g a = 0$ we have:

$\exists \xi \in \openint a x: \dfrac {\map {f'} \xi} {\map {g'} \xi} = \dfrac {\map f x} {\map g x}$

Note that $\xi$ depends on $x$; that is, different values of $x$ may require different values of $\xi$ to make the above statement valid.
It follows from Limit of Function in Interval that $\xi \to a$ as $x \to a$.
Also, $\xi \ne a$ when $x > a$.
So from Hypothesis $2$ of Limit of Composite Function, it follows that:

$\ds \lim_{x \mathop \to a^+} \dfrac {\map {f'} \xi} {\map {g'} \xi} = \lim_{x \mathop \to a^+} \dfrac {\map {f'} x} {\map {g'} x}$
Hence the result.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 11.8 \ (3)$




