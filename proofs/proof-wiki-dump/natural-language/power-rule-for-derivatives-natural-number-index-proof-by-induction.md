# 

Source: https://proofwiki.org/wiki/Power_Rule_for_Derivatives/Natural_Number_Index/Proof_by_Induction

Theorem
Let $n \in \N$.
Let $f: \R \to \R$ be the real function defined as $\map f x = x^n$.

Then:

$\map {f'} x = n x^{n-1}$
everywhere that $\map f x = x^n$ is defined.

When $x = 0$ and $n = 0$, $\map {f'} x$ is undefined.


Proof
We will use the notation $D \map f x = \map {f'} x$ as it is convenient.

Let $n = 0$.
Then:

$\forall x \in \R: x^n = 1$
Thus $\map f x$ is the constant function $\map {f_1} x$ on $\R$.

Thus from Derivative of Constant, $D \map f x = \map D {x^0} = 0 x^{-1}$, except where $x = 0$.
So the result holds for $n = 0$.

Let $n = 1$.
Then:

$\forall x \in \R: \map f x = x^n = x$
Then from Derivative of Identity Function:

$\map D x = 1 = 1 \cdot x^{1 - 1}$
So the result holds for $n = 1$.

Now assume $\map D {x^k} = k x^{k - 1}$.
Then by the Product Rule for Derivatives:

$\map D {x^{k + 1} } = \map D {x^k x} = x^k \map D x + \map D {x^k} x = x^k \cdot 1 + k x^{k - 1} x = \paren {k + 1} x^k$
The result follows by induction.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 10.10$




