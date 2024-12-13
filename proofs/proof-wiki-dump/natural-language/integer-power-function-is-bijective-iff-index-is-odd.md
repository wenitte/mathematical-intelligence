# 

Source: https://proofwiki.org/wiki/Integer_Power_Function_is_Bijective_iff_Index_is_Odd



Theorem
Let $n \in \Z_{\ge 0}$ be a positive integer.
Let $f_n: \R \to \R$ be the real function defined as:

$\map {f_n} x = x^n$
Then $f_n$ is a bijection if and only if $n$ is odd.


Proof
Even Index
Suppose $n$ is even.
Let $x \ne 0$.
Then $1^n = \paren {-1}^n$ by Power of Ring Negative, so $f_n$ is not injective.
Also, by Even Power is Non-Negative, $f_n$ is not surjective.
By definition, a bijection is both injective and surjective.
It follows that for even $n$, $f_n$ is not bijective.
$\Box$


Odd Index
Now suppose $n$ is odd.
From Odd Power Function is Strictly Increasing, $f_n$ is injective.
From Odd Power Function is Surjective, $f^n$ is surjective.

So when $n$ is odd, $f_n$ is both injective and surjective, and so by definition bijective.

Hence the result.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: Mappings: $\S 12 \beta$




