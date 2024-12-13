# 

Source: https://proofwiki.org/wiki/Reciprocal_of_Null_Sequence



Theorem
Let $\sequence {x_n}$ be a sequence in $\R$.
Let $\forall n \in \N: x_n > 0$.

Then:

$x_n \to 0$ as $n \to \infty$ if and only if $\size {\dfrac 1 {x_n} } \to \infty$ as $n \to \infty$


Corollary
$x_n \to \infty$ as $n \to \infty$ if and only if $\size {\dfrac 1 {x_n} } \to 0$ as $n \to \infty$


Proof
Suppose $x_n \to 0$ as $n \to \infty$.
Let $H > 0$.
So $H^{-1} > 0$.
Since $x_n \to 0$ as $n \to \infty$:

$\exists N: \forall n > N: \size {x_n} < H^{-1}$
That is:

$\size {\dfrac 1 {x_n} } > H$.
So:

$\exists N: \forall n > N: \size {\dfrac 1 {x_n} } > H$
and thus:

$\sequence {\size {\dfrac 1 {x_n} } }$ diverges to $+\infty$.
$\Box$

Suppose $\size {\dfrac 1 {x_n} } \to \infty$ as $n \to \infty$.
By reversing the argument above, we see that $x_n \to 0$ as $n \to \infty$.
$\blacksquare$


Also known as
Some sources call this the reciprocal rule, but as that name is used throughout mathematical literature for several different concepts, its use is not recommended.


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 4$: Convergent Sequences: Exercise $\S 4.29 \ (4)$




