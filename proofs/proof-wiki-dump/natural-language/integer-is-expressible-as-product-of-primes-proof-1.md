# 

Source: https://proofwiki.org/wiki/Integer_is_Expressible_as_Product_of_Primes/Proof_1

Theorem
Let $n$ be an integer such that $n > 1$.

Then $n$ can be expressed as the product of one or more primes.


Proof
Aiming for a contradiction, suppose this supposition is false.
Let $m$ be the smallest integer which can not be expressed as the product of primes.
As a prime number is trivially a product of primes, $m$ can not itself be prime.
Hence:

$\exists r, s \in \Z: 1 < r < m, 1 < s < m: m = r s$
As $m$ is our least counterexample, both $r$ and $s$ can be expressed as the product of primes.
Say $r = p_1 p_2 \cdots p_k$ and $s = q_1 q_2 \cdots q_l$, where all of $p_1, \ldots, p_k, q_1, \ldots, q_l$ are prime.
Hence $m = r s = p_1 p_2 \cdots p_k q_1 q_2 \cdots q_l$, which is a product of primes.
Hence there is no such counterexample.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 13.1$: The fundamental theorem of arithmetic
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $2$: Integers and natural numbers: $\S 2.2$: Divisibility and factorization in $\mathbf Z$: Theorem $4$
1982: Martin Davis: Computability and Unsolvability (2nd ed.) ... (previous) ... (next): Appendix $1$: Some Results from the Elementary Theory of Numbers: Theorem $6$
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): $\S 1.14$: Exercise $19 \ \text{(c)}$




