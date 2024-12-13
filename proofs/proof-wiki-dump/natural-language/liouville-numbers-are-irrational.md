# 

Source: https://proofwiki.org/wiki/Liouville_Numbers_are_Irrational

Theorem
Liouville numbers are irrational.


Proof
Let $x$ be a Liouville number. 
Aiming for a contradiction, suppose $x$ were rational, that is:

$x = \dfrac a b$
with $a, b \in \Z$ and $b > 0$.
By definition of a Liouville number, for all $n \in \N$, there exist $p,q \in \Z$ (which may depend on $n$) with $q > 1$ such that:

$0 < \size {x - \dfrac p q} < \dfrac 1 {q^n}$
Let $n$ be a positive integer such that $2^{n - 1} > b$.
Let $p$ and $q$ be any integers with $q > 1$.
We have:

$\size {x - \dfrac p q} = \dfrac {\size {a q - b p} } {b q}$
If $\size {a q - b p} = 0$, this would violate the first inequality.
If $\size {a q - b p} \ne 0$, then:














\(\ds \size {x - \frac p q}\)

\(\ge\)







\(\ds \frac 1 {b q}\)





as $\size {a q - b p}$ is a positive integer














\(\ds \)

\(>\)







\(\ds \frac 1 {2^{n - 1} q}\)





by our choice of $n$














\(\ds \)

\(\ge\)







\(\ds \frac 1 {q^n}\)





as $q > 1$ by definition



which would violate the second inequality.
Therefore, in any case, if $n$ is sufficiently large, there cannot exist integers $p$ and $q$ with $q > 1$ satisfying the two inequalities.
This is a contradiction.
Thus $x$ is irrational.
$\blacksquare$





