# 

Source: https://proofwiki.org/wiki/Euler_Phi_Function_of_Non-Square_Semiprime



Theorem
Let $n \in \Z_{>0}$ be a semiprime with distinct prime factors $p$ and $q$.
Let $\map \phi n$ denote the Euler $\phi$ function.
Then:

$\map \phi n = \paren {p - 1} \paren {q - 1}$


Corollary
Let $n \in \Z_{>0}$ be a semiprime of the form $2 p$, where $p$ is an odd prime.
Let $\map \phi n$ denote the Euler $\phi$ function.
Then:

$\map \phi n = p - 1$


Proof 1
As $p$ and $q$ are distinct prime numbers, it follows that $p$ and $q$ are coprime.
Thus by Euler Phi Function is Multiplicative:

$\map \phi n = \map \phi p \, \map \phi q$
From Euler Phi Function of Prime:

$\map \phi p = p - 1$
$\map \phi q = q - 1$
Hence the result.
$\blacksquare$


Proof 2
A semiprime with distinct prime factors is a square-free integer.

$\map \phi n = \ds \prod_{\substack {p \mathop \divides n \\ p \mathop > 2} } \paren {p - 1}$
where $p \divides n$ denotes the primes which divide $n$.
As there are $2$ prime factors: $p$ and $q$, this devolves to:

$\map \phi n = \paren {p - 1} \paren {q - 1}$
except when $p = 2$, in which case:

$\map \phi n = q - 1$
But when $p = 2$, we have that $p - 1 = 1$ and so:

$\paren {p - 1} \paren {q - 1} = q - 1$
Hence the result.
$\blacksquare$


Examples
Euler Phi Function of $87$
$\phi \left({87}\right) = 56$


Euler Phi Function of $91$
$\map \phi {91} = 72$


Euler Phi Function of $95$
$\phi \left({95}\right) = 72$


Euler Phi Function of $111$
$\phi \left({111}\right) = 72$


Euler Phi Function of $1257$
$\phi \left({1257}\right) = 836$




