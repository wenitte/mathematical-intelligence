# 

Source: https://proofwiki.org/wiki/Harmonic_Number_is_not_Integer/Proof_2

Theorem
Let $H_n$ be the $n$th harmonic number.

Then $H_n$ is not an integer for $n \ge 2$.
That is, the only harmonic numbers that are integers are $H_0$ and $H_1$.


Proof
Aiming for a contradiction, suppose:

$(\text P): \quad \exists m \in \N: H_m \in \Z$
By the definition of the harmonic numbers:

$1 + \dfrac 1 2 + \dfrac 1 3 + \cdots +\dfrac 1 m = H_m$
$m$ is either prime or composite.

If $m$ is prime, we have that:














\(\ds 1 + \frac 1 2 + \frac 1 3 + \dots + \frac 1 m\)

\(=\)







\(\ds H_m\)




















\(\ds m! + \frac {m!} 2 + \frac {m!} 3 + \cdots + \paren {m - 1}!\)

\(=\)







\(\ds m!\cdot H_m\)





multiplying by $m!$



If $k \le n$, then $k$ divides $n!$, so all terms are integers.
Every term on the left hand side is divisible by $m$ except for one, namely $\paren {m - 1}!$.
Hence, the left hand side is not divisible by $m$.
But the right hand side is divisible by $m$, so this is a contradiction.

If $m$ is composite, let $p$ be the largest prime which is less than $m$.
Then we have:














\(\ds 1 + \frac 1 2 + \frac 1 3 + \dots + \frac 1 p + \cdots + \frac 1 m\)

\(=\)







\(\ds H_m\)




















\(\ds m! + \frac {m!} 2 + \frac {m!} 3 + \cdots \frac {m!} p + \cdots + \paren {m - 1}!\)

\(=\)







\(\ds m! \cdot H_m\)





multiplying by $m!$



For $k < p$, we have that $m!$ is divisible by $p$ and $k$ is not.
So from Euclid's Lemma, every term $\dfrac {m!} k$ is an integer divisible by $p$.

Aiming for a contradiction, suppose there exists $k \in \Z$, with $p< k< m$ such that $\dfrac {m!} k$ is not divisible by $p$.
Because $m!$ is divisible by $p$ and $\dfrac{m!} k$ is not, it follows from Euclid's Lemma that $k$ is a multiple of $p$.
Since $k$ is a multiple of $p$ which is greater than $p$:

$2 p \le k$
Thus:

$p < 2 p \le k < m$
From Bertrand's Postulate, there exists a prime $q$ such that $p < q < 2 p$.
Hence:

$p < q <m $
This contradicts the fact that $p$ is the largest prime less than $m$.

Hence, the assumption that there exists $k \in \Z$ with $p < k < m$ such that $\dfrac {m!} k$ is not divisible by $p$ is false.
Therefore, every term of the left hand side, except perhaps $\dfrac{m!} p$, is a multiple of $p$.

From above:

$p < m < 2 p$
so $p$ is the only positive integer less than $m$ which is divisible by $p$.
Since $m!$ is the product of positive integer less than or equal to $m$, it follows that $m!$ is divisible by $p$ only once.
Therefore, $\dfrac {m!} p$ is not divisible by $p$.
Because every term of the left hand side is divisible by $p$ except for one, it follows that the left hand side is not divisible by $p$.
Because the right hand side is a multiple of $m!$, and hence a multiple of $p$, this is a contradiction.
So the assumption that there exists $m \in \N: H_m \in \Z$ is false.
$\blacksquare$





