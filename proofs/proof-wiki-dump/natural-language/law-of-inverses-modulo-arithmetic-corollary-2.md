# 

Source: https://proofwiki.org/wiki/Law_of_Inverses_(Modulo_Arithmetic)/Corollary_2

Corollary to Law of Inverses (Modulo Arithmetic)
Let $m, n \in \Z$ such that:

$m \perp n$
that is, such that $m$ and $n$ are coprime.

Then:

$\exists n' \in \Z: n n' \equiv 1 \pmod m$
where:

$n' \equiv n^{\map \phi n - 1} \pmod m$
where $\map \phi n$ is the Euler $\phi$ function.


Proof
From Law of Inverses (Modulo Arithmetic): Corollary $1$:

$\exists n' \in \Z: n n' \equiv 1 \pmod m$
From Euler's Theorem (Number Theory):

$n^{\map \phi m} \equiv 1 \pmod m$
it follows that:

$n \cdot n^{\map \phi m - 1} \equiv 1 \pmod m$
The result follows directly.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Exercise $28$




