# 

Source: https://proofwiki.org/wiki/Euler_Phi_Function_of_Square-Free_Integer/Proof_2



Theorem
Let $n$ be an integer such that $n \ge 2$.
Let $n$ be square-free.
Let $\map \phi n$ be the Euler $\phi$ function of $n$.
That is, let $\map \phi n$ be the count of strictly positive integers less than or equal to $n$ which are prime to $n$.

Then:

$\map \phi n = \ds \prod_{\substack {p \mathop \divides n \\ p \mathop > 2} } \paren {p - 1}$
where $p \divides n$ denotes the primes which divide $n$.


Proof
From Euler Phi Function of Integer:

$\ds \map \phi n = n \prod_{p \mathop \divides n} \paren {1 - \frac 1 p}$

As $n$ is square-free:

$\ds n = \prod_{p \mathop \divides n} p$

Hence:

$\ds \map \phi n = \prod_{p \mathop \divides n} p \paren {1 - \frac 1 p}$
and so:

$\ds \map \phi n = \prod_{p \mathop \divides n} \paren {p - 1}$

When $p = 2$ we have that:

$p - 1 = 1$
and so:

$\ds \prod_{p \mathop \divides n} \paren {p - 1} = \prod_{\substack {p \mathop \divides n \\ p \mathop > 2} } \paren {p - 1}$
Hence the result.
$\blacksquare$


Examples
Euler Phi Function of $6$
$\map \phi 6 = 2$


Euler Phi Function of $30$
$\map \phi {30} = 8$


Euler Phi Function of $42$
$\map \phi {42} = 12$


Euler Phi Function of $78$
$\map \phi {78} = 24$


Euler Phi Function of $182$
$\map \phi {182} = 72$


Euler Phi Function of $190$
$\map \phi {190} = 72$


Euler Phi Function of $222$
$\map \phi {222} = 72$


Euler Phi Function of $1798$
$\map \phi {1798} = 840$


Euler Phi Function of $5002$
$\map \phi {5002} = 2400$


Euler Phi Function of $9374$
$\map \phi {9374} = 4536$




