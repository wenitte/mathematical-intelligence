# 

Source: https://proofwiki.org/wiki/Euler_Phi_Function_is_Multiplicative/Proof_2

Theorem
The Euler $\phi$ function is a multiplicative function:

$m \perp n \implies \map \phi {m n} = \map \phi m \map \phi n$
where $m, n \in \Z_{>0}$.


Proof
From Euler Phi Function of Product, we have:

$\map \phi {m n} = \map \phi m \map \phi n \paren {\dfrac {\map \gcd {m, n} } {\map \phi {\map \gcd {m, n} } } }$
From hypothesis, we have:

$\map \gcd {m, n} = 1$
From Euler Phi Function of 1, we have $\map \phi 1 = 1$, giving the result.
$\blacksquare$





