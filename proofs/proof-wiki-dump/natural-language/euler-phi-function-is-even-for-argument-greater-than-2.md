# 

Source: https://proofwiki.org/wiki/Euler_Phi_Function_is_Even_for_Argument_greater_than_2



Theorem
Let $n \in \Z: n \ge 1$.
Let $\map \phi n$ be the Euler $\phi$ function of $n$.

Then $\map \phi n$ is even if and only if $n > 2$.


Proof
We have from the definition of Euler $\phi$ function:

$\map \phi 1 = 1$
and from Euler Phi Function of Prime Power: Corollary:

$\map \phi 2 = 1$

Now let $n \ge 3$.

There are two possibilities:


Odd Prime Divisor
$n$ has (at least one) odd prime factor: $p$, say.
From the corollary to Euler Phi Function of Integer, it follows that:

$p - 1$ divides $\map \phi n$
But as $p$ is odd, $p - 1$ is even and hence:

$2 \divides \paren {p - 1} \divides \map \phi n$
and so $\map \phi n$ is even.


No Odd Prime Divisor
Now suppose $n$ has no odd prime factors.
Then its only prime factor must be $2$.
Thus:

$n = 2^k$
where $k > 1$.
Then from Euler Phi Function of Prime Power: Corollary:

$\map \phi n = 2^k \paren {1 - \frac 1 2} = 2^{k - 1}$
where $k-1 > 0$.
Hence $\map \phi n$ is even.
$\blacksquare$





