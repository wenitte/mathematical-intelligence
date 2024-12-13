# 

Source: https://proofwiki.org/wiki/Law_of_Inverses_(Modulo_Arithmetic)



Theorem
Let $m, n \in \Z$.

Then:

$\exists n' \in \Z: n n' \equiv d \pmod m$
where $d = \gcd \set {m, n}$.


Corollary 1
Let $m, n \in \Z$ such that:

$m \perp n$
that is, such that $m$ and $n$ are coprime.

Then:

$\exists n' \in \Z: n n' \equiv 1 \pmod m$


Corollary 2
$n' \equiv n^{\map \phi n - 1} \pmod m$
where $\map \phi n$ is the Euler $\phi$ function.


Proof
We have that $d = \gcd \set {m, n}$.
So:










\(\ds \exists a, b \in \Z: \, \)



\(\ds a m + b n\)

\(=\)







\(\ds d\)





Bézout's Identity








\(\ds \leadsto \ \ \)





\(\ds a m\)

\(=\)







\(\ds d - b n\)














\(\ds \leadsto \ \ \)





\(\ds d - b n\)

\(\equiv\)







\(\ds 0\)

\(\ds \pmod m\)



Definition of Congruence








\(\ds \leadsto \ \ \)





\(\ds b n\)

\(\equiv\)







\(\ds d\)

\(\ds \pmod m\)



Modulo Addition: add $b n$ to both sides of congruence



So $b$ (in the above) fits the requirement for $n'$ in the assertion to be proved.
$\blacksquare$





