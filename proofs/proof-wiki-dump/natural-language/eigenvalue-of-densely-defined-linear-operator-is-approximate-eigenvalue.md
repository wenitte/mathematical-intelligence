# 

Source: https://proofwiki.org/wiki/Eigenvalue_of_Densely-Defined_Linear_Operator_is_Approximate_Eigenvalue

Theorem
Let $\struct {\HH, \innerprod \cdot \cdot}$ be a Hilbert space over $\C$. 
Let $\struct {\map D T, T}$ be a densely-defined linear operator.
Let $\lambda$ be an eigenvalue of $T$.

Then $\lambda$ is an approximate eigenvalue of $T$.


Proof
Since $\lambda$ is an eigenvalue of $T$, there exists $x \in \map D T \setminus \set 0$ such that: 

$\paren {T - \lambda I} x = 0$
Then setting:

$\ds x_n = \frac x {\norm x}$
we have: 

$\paren {T - \lambda I} x_n = 0$
for each $n \in \N$, while $\norm {x_n} = 1$.
Then, we have: 

$\paren {T - \lambda I} x_n \to 0$
So $\lambda$ is an approximate eigenvalue of $T$.
$\blacksquare$





