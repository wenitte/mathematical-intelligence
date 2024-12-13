# 

Source: https://proofwiki.org/wiki/Injection/Examples/Square_Function_on_Natural_Numbers

Example of Injection
Let $f: \N \to \N$ be the mapping defined as:

$\forall n \in \N: \map f n = n^2$
Then $f$ is an injection, but not a surjection.


Proof
Let $g: \R_{\ge 0} \to \R$ be the mapping defined as:

$\forall x \in \R_{\ge 0}: \map g x = x^2$
We have that $f$ is a restriction of $g$.
From Positive Power Function on Non-negative Reals is Strictly Increasing, $g$ is strictly increasing.
From Strictly Monotone Real Function is Bijective, it follows that $g$ is bijective.
By definition of bijection, $g$ is an injection.
It follows from Restriction of Injection is Injection that $f$ is an injection.
$\Box$

Let $p \in \N$ be a prime number.
From Square Root of Prime is Irrational:

$\nexists n \in \N: n^2 = p$
and so $f$ is not a surjection.
$\blacksquare$


Sources
1972: A.G. Howson: A Handbook of Terms used in Algebra and Analysis ... (previous) ... (next): $\S 2$: Sets and functions: Some special types of function




