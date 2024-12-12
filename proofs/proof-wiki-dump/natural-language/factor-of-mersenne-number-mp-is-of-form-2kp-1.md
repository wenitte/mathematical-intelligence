# 

Source: https://proofwiki.org/wiki/Factor_of_Mersenne_Number_Mp_is_of_form_2kp_%2B_1



Theorem
Let $p$ and $q$ be prime numbers such that $q$ is a divisor of the Mersenne number $M_p$.
Then:

$q = 2 k p + 1$
for some integer $k$.


Proof
Let $q \divides M_p$.
Then:

$2^p \equiv 1 \pmod q$
From Integer to Power of Multiple of Order, the multiplicative order of $2 \pmod q$ divides $p$.
By Fermat's Little Theorem, the multiplicative order of $2 \pmod q$ also divides $q - 1$.
Hence:

$q - 1 = 2 k p$
$\blacksquare$


Historical Note
This result was known to Pierre de Fermat by $1640$, and it has been suggested that Marin Mersenne made use of it when providing his famous list of Mersenne primes in his Cogitata Physico-Mathematica of $1644$.


Sources
1926: Sir Thomas L. Heath: Euclid: The Thirteen Books of The Elements: Volume 2 (2nd ed.) ... (previous) ... (next): Book $\text{IX}$. Proposition $36$: Footnote




