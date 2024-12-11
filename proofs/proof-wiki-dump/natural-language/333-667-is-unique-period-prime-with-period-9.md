# 

Source: https://proofwiki.org/wiki/333,667_is_Unique_Period_Prime_with_Period_9

Theorem
$333 \, 667$ is a unique period prime whose reciprocal has a period of $9$:

$\dfrac 1 {333 \, 667} = 0 \cdotp \dot 00000 \, 299 \dot 7$


Proof
By long division:

       0.000002997000002...
      ---------------------
333667)1.000000000000000000
         667334
       --------
         3326660
         3003003
         -------
          3236570
          3003003
          -------
           2335670
           2335669
           -------
                 1000000
                  667334
                 -------
                  ......

It remains to be shown that $333 \, 667$ is the only prime number whose reciprocal has a period of $9$.
We have that:

$333 \, 667 \nmid 10$
From Period of Reciprocal of Prime, the period of such a prime is the order of $10$ modulo $p$.
That is, the smallest integer $d$ such that:

$10^d \equiv 1 \pmod p$

From the above long division we know that the period of $\dfrac 1 {333 \, 667}$ is $9$, so $10^9 \equiv 1 \pmod {333 \, 667}$.
The only other possible primes $p$ whose reciprocals might have a period of $9$ must also satisfy:

$10^9 \equiv 1 \pmod p$
that is:

$p \divides 10^9 - 1$

Consider:














\(\ds 10^9 - 1\)

\(=\)







\(\ds 999 \, 999 \, 999\)




















\(\ds \)

\(=\)







\(\ds 3^4 \times 37 \times 333 \, 667\)





prime factorization



Therefore the only other possible primes whose reciprocals might have a period of $9$ are $3$ and $37$.

From Reciprocal of $37$:

$\dfrac 1 {37} = 0 \cdotp \dot 02 \dot 7$
and trivially:

$\dfrac 1 3 = 0 \cdotp \dot 3$
which has a period of $1$.
As required, the only prime number whose reciprocal has a period of $9$ is $333 \, 667$.
$\blacksquare$


Sources
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $333,667$




