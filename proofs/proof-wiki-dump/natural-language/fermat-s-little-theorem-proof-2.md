# 

Source: https://proofwiki.org/wiki/Fermat%27s_Little_Theorem/Proof_2

Theorem
Let $p$ be a prime number.
Let $n \in \Z_{>0}$ be a positive integer such that $p$ is not a divisor of $n$.

Then:

$n^{p - 1} \equiv 1 \pmod p$


Proof
By Prime not Divisor implies Coprime:

$p \nmid n \implies p \perp n$
and Euler's Theorem (Number Theory) can be applied.
Thus:

$n^{\map \phi p} \equiv 1 \pmod p$
But from Euler Phi Function of Prime Power:

$\map \phi p = p \paren {1 - \dfrac 1 p} = p - 1$
and the result follows.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Subgroups and Cosets: $\S 42$




