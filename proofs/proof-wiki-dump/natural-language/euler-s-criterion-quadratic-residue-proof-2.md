# 

Source: https://proofwiki.org/wiki/Euler%27s_Criterion/Quadratic_Residue/Proof_2



Theorem
Let $p$ be an odd prime.
Let $a \not \equiv 0 \pmod p$.
Then:














\(\ds a^{\frac {p-1} 2}\)

\(\equiv\)







\(\ds 1\)

\(\ds \pmod p\)



if and only if $a$ is a quadratic residue of $p$














\(\ds a ^{\frac {p-1} 2}\)

\(\equiv\)







\(\ds -1\)

\(\ds \pmod p\)



if and only if $a$ is a quadratic non-residue of $p$.





Proof
First note that the square roots of $1$ are $1, -1 \pmod p$.
Also, we have that $a^{p - 1} \equiv 1 \pmod p$ by Fermat's Little Theorem.
Combining these two observations, we find:

$a^{\frac {p - 1} 2} \equiv 1 \text{ or } -1 \pmod p$

The theorem is therefore equivalent to stating that $a$ is a quadratic residue modulo $p$ if and only if $a^{\frac{p - 1} 2} \equiv 1 \pmod p$.
Namely, considering the above, we see this also implies that all quadratic non-residues will be congruent to $-1 \pmod p$.

We prove each direction of the equivalent statement separately:


Sufficient Condition
Assume $a$ is a quadratic residue modulo $p$.
We pick $k$ such that $k^2 \equiv a \pmod p$.
Then by Congruence of Powers and Fermat's Little Theorem:

$a^{\frac{p-1} 2} \equiv k^{p-1} \equiv 1 \pmod p$


Necessary Condition
Now assume $a^{\frac{p - 1} 2} \equiv 1 \pmod p$.
Then let $y$ be a primitive root modulo $p$, so that $a$ can be written as $y^j$.
In particular:

$y^{j \frac {p - 1} 2} \equiv 1 \pmod p$
From the definition of $y$, it has order $p-1$.
It follows that $p - 1 \divides j \dfrac {p - 1} 2$ from Element to Power of Multiple of Order is Identity.
We conclude that $j$ is necessarily an even integer, and denote $j' = \dfrac j 2$.
Let $k$ be such that $k \equiv y^{j'} \pmod p$.
By construction, we have:

$k^2 \equiv y^{2 j'} \equiv y^j \equiv a \pmod p$
Hence $a$ is a quadratic residue modulo $p$.
$\blacksquare$





