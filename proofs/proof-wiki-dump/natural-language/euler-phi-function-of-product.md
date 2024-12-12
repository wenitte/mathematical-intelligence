# 

Source: https://proofwiki.org/wiki/Euler_Phi_Function_of_Product

Theorem
Let $m$ and $n$ be positive integers.
Let $d$ be the greatest common divisor of $m$ and $n$.

Then:

$\map \phi {m n} = \map \phi m \map \phi n \paren {\dfrac d {\map \phi d} }$
where $\phi$ is the Euler $\phi$ function.


Proof
From Euler Phi Function of Integer, we have:

$\ds \frac {\map \phi m} m = \prod_{p \mathop \divides m} \paren {1 - \frac 1 p}$
$\ds \frac {\map \phi n} n = \prod_{p \mathop \divides n} \paren {1 - \frac 1 p}$
$\ds \frac {\map \phi {m n} } {m n} = \prod_{p \mathop \divides m n} \paren {1 - \frac 1 p}$
where the products are understood to run over the primes.
We consider:

$\ds \paren {\prod_{p \mathop \divides m} \paren {1 - \frac 1 p} } \paren {\prod_{p \mathop \divides n} \paren {1 - \frac 1 p} }$
and its relation to:

$\ds \prod_{p \mathop \divides m n} \paren {1 - \frac 1 p}$
From Euclid's Lemma for Prime Divisors, a prime $p$ divides $m n$ if and only if $p$ divides at least one of $m$ or $n$.
So every term in the product:

$\ds \prod_{p \mathop \divides m n} \paren {1 - \frac 1 p}$
is included within:

$\ds \paren {\prod_{p \mathop \divides m} \paren {1 - \frac 1 p} } \paren {\prod_{p \mathop \divides n} \paren {1 - \frac 1 p} } = \Pi$
If $p$ divides exactly one of $m$ or $n$, $\paren {1 - \dfrac 1 p}$ will appear exactly once in the product $\Pi$.
If $p$ divides both of $m$ and $n$, then $\paren {1 - \dfrac 1 p}$ will appear twice in the product $\Pi$.
From the definition of the greatest common divisor, $p$ divides both of $m$ and $n$ if and only if it divides $d$.
Hence, removing the extraneous terms from $\Pi$ we obtain:

$\ds \prod_{p \mathop \divides m n} \paren {1 - \frac 1 p} = \frac { \paren {\prod_{p \mathop \divides m} \paren {1 - \frac 1 p} } \paren {\prod_{p \mathop \divides n} \paren {1 - \frac 1 p} } } {\prod_{p \mathop \divides d} \paren {1 - \frac 1 p} }$
From Euler Phi Function of Integer, we have:

$\ds \prod_{p \mathop \divides d} \paren {1 - \frac 1 p} = \frac {\map \phi d} d$
So, we obtain:

$\dfrac {\map \phi {m n} } {m n} = \dfrac {\frac {\map \phi m \map \phi n} {m n} } {\frac {\map \phi d} d} = \dfrac 1 {m n} \paren {\map \phi m \map \phi n \paren {\dfrac d {\map \phi d} } }$
Hence:

$\map \phi {m n} = \map \phi m \map \phi n \paren {\dfrac d {\map \phi d} }$
as required.
$\blacksquare$





