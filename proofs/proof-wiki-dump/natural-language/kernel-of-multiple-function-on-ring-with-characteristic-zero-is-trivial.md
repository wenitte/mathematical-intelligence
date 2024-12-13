# 

Source: https://proofwiki.org/wiki/Kernel_of_Multiple_Function_on_Ring_with_Characteristic_Zero_is_Trivial

Theorem
Let $\struct {R, +, \circ}$ be a ring with unity whose zero is $0_R$ and whose unity is $1_R$.
Let $g_a: \Z \to R$ be the mapping from the integers into $R$ defined as:

$\forall n \in \Z:\forall a \in R: \map {g_a} n = n \cdot a$
where $\cdot$ denotes the multiple operation.

Let $a \in R$ such that $a$ is not a zero divisor of $R$.
Let the characteristic of $R$ be $0$.
Then:

$\map \ker {g_a} = \set {0_R}$
where $\ker$ denotes the kernel of $g_a$.

That is:

$n \cdot a = 0_R$
if and only if:

$n = 0$


Proof
For $n = 0$, we trivially have $n \cdot a = 0_R$.

Aiming for a contradiction, suppose $\exists n \ne 0: n \cdot a = 0_R$.
Then:














\(\ds n\)

\(\in\)







\(\ds \map \ker {g_a}\)





Definition of Kernel of Group Homomorphism








\(\ds \leadsto \ \ \)





\(\ds n\)

\(\in\)







\(\ds \ideal p\)





Kernel of Non-Zero Divisor Multiple Function is Primary Ideal of Characteristic




where $p$ is the characteristic of $R$






\(\ds \leadsto \ \ \)





\(\ds p\)

\(\divides\)







\(\ds n\)





Definition of Integral Ideal








\(\ds \leadsto \ \ \)





\(\ds p\)

\(\ne\)







\(\ds 0\)









This contradicts our assertion that the characteristic of $R$ is $0$.
Hence by Proof by Contradiction there can be no such $n \ne 0$ such that $n \cdot a = 0_R$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $24$. The Division Algorithm: Theorem $24.8 \ 2^\circ$




