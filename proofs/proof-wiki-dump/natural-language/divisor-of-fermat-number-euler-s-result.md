# 

Source: https://proofwiki.org/wiki/Divisor_of_Fermat_Number/Euler%27s_Result



Theorem
Let $F_n$ be a Fermat number.
Let $m$ be divisor of $F_n$.
Then $m$ is in the form:

$k \, 2^{n + 1} + 1$
where $k \in \Z_{>0}$ is an integer.


Proof
It is sufficient to prove the result for prime divisors.
The general argument for all divisors follows from the argument:

$\paren {a \, 2^c + 1} \paren {b \, 2^c + 1} = a b \, 2^{2 c} + \paren {a + b} \, 2^c + 1 = \paren {a b \, 2^c + a + b} \, 2^c + 1$
So the product of two factors of the form preserves that form.

Let $n \in \N$.
Let $p$ be a prime divisor of $F_n = 2^{2^n} + 1$.
Then we have:

$2^{2^n} \equiv -1 \pmod p$
Squaring both sides:

$2^{2^{n + 1}} \equiv 1 \pmod p$

From Integer to Power of Multiple of Order, the order of $2$ modulo $p$ divides $2^{n + 1}$ but not $2^n$.
Therefore it must be $2^{n + 1}$.

Hence:










\(\ds \exists k \in \Z: \, \)



\(\ds \map \phi p\)

\(=\)







\(\ds k \, 2^{n + 1}\)





Corollary to Integer to Power of Multiple of Order














\(\ds p - 1\)

\(=\)







\(\ds k \, 2^{n + 1}\)





Euler Phi Function of Prime














\(\ds p\)

\(=\)







\(\ds k \, 2^{n + 1} + 1\)









$\blacksquare$


Historical Note
In $1747$, Leonhard Paul Euler proved that a divisor of a Fermat number $F_n$ is always in the form $k \, 2^{n + 1} + 1$.
This was later refined to $k \, 2^{n + 2} + 1$ by François Édouard Anatole Lucas.


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $257$
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $641$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $257$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $641$




