# 

Source: https://proofwiki.org/wiki/Kernel_of_Non-Zero_Divisor_Multiple_Function_is_Primary_Ideal_of_Characteristic

Theorem
Let $\struct {R, +, \circ}$ be a ring with unity whose zero is $0_R$ and whose unity is $1_R$.
Let the characteristic of $R$ be $p$.
Let $g_a: \Z \to R$ be the mapping from the integers into $R$ defined as:

$\forall n \in \Z:\forall a \in R: \map {g_a} n = n \cdot a$
where $\cdot$ denotes the multiple operation.

Let $a \in R$ such that $a$ is not a zero divisor of $R$.
Then:

$\map \ker {g_a} = \ideal p$
where:

$\map \ker {g_a}$ is the kernel of $g_a$
$\ideal p$ is the principal ideal of $\Z$ generated by $p$.


Proof
From Principal Ideal of Characteristic of Ring is Subset of Kernel of Multiple Function we have:

$\ideal p \subseteq \map \ker {g_a}$
for all $a \in R$.
It remains to be shown that for all $a \in R$ such that $a$ is not a zero divisor of $R$:

$\map \ker {g_a} \subseteq \ideal p$

So:














\(\ds n\)

\(\in\)







\(\ds \map \ker {g_a}\)














\(\ds \leadsto \ \ \)





\(\ds n \cdot a\)

\(=\)







\(\ds 0_R\)














\(\ds \leadsto \ \ \)





\(\ds n \cdot \paren {a \circ 1_R}\)

\(=\)







\(\ds 0_R\)





Definition of Unity of Ring








\(\ds \leadsto \ \ \)





\(\ds \paren {n \cdot a} \circ 1_R\)

\(=\)







\(\ds 0_R\)





Multiple of Ring Product








\(\ds \leadsto \ \ \)





\(\ds a \circ \paren {n \cdot 1_R}\)

\(=\)







\(\ds 0_R\)





Multiple of Ring Product








\(\ds \leadsto \ \ \)





\(\ds n \cdot 1_R\)

\(=\)







\(\ds 0_R\)





as $a$ is not a zero divisor of $R$








\(\ds \leadsto \ \ \)





\(\ds n\)

\(\in\)







\(\ds \ideal p\)





Definition 2 of Characteristic of Ring



Hence the result by definition of subset.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $24$. The Division Algorithm: Theorem $24.8 \ 2^\circ$



