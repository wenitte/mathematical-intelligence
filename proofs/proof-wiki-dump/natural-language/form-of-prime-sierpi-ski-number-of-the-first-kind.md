# 

Source: https://proofwiki.org/wiki/Form_of_Prime_Sierpi%C5%84ski_Number_of_the_First_Kind

Theorem
Suppose $S_n = n^n + 1$ is a prime Sierpiński number of the first kind.
Then:

$n = 2^{2^k}$
for some integer $k$.


Proof
Aiming for a contradiction, suppose $n$ has an odd divisor $d$.
By Sum of Two Odd Powers:

$\paren {n^{n/d} + 1} \divides \paren {\paren {n^{n/d}}^d + 1^d} = S_n$
thus $S_n$ is composite, which is a contradiction.
Hence $n$ has no odd divisors.
That is, $n$ is a power of $2$.
Write $n = 2^m$.

Aiming for a contradiction, suppose that $m$ has an odd divisor $f$.
By Sum of Two Odd Powers:

$\paren {2^{n m/f} + 1} \divides \paren {\paren {2^{n m/f}}^f + 1^f} = 2^{m n} + 1 = S_n$
thus $S_n$ is composite, which is a contradiction.
Hence $m$ has no odd divisors.
That is, $m$ is a power of $2$.

Therefore we must have:

$n = 2^{2^k}$
for some integer $k$.
$\blacksquare$


Also see
Prime Sierpiński Numbers of the First Kind




