# 

Source: https://proofwiki.org/wiki/Fermat%27s_Little_Theorem/Corollary_2



Corollary to Fermat's Little Theorem
Let $p$ be a prime number.
Then:

$n^{p - 1} \equiv \sqbrk {p \nmid n} \pmod p$
where:

$\nmid$ denotes non-divisibility
$\sqbrk \cdots$ is Iverson's convention.


Proof
If $p \nmid n$ then from Fermat's Little Theorem:

$n^{p - 1} \equiv 1 \pmod p$
If $p \divides n$ then:

$p \divides n^{p - 1}$
and $n^{p - 1} \equiv 0 \pmod p$ by definition.
Hence the result by definition of Iverson's convention.
$\blacksquare$


Source of Name
This entry was named for Pierre de Fermat.


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Exercise $25$




