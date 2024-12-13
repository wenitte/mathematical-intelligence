# 

Source: https://proofwiki.org/wiki/Ostrowski%27s_Theorem/Non-Archimedean_Norm/Lemma_2.2

Theorem
Let $\norm {\, \cdot \,}$ be a non-trivial non-Archimedean norm on the rational numbers $\Q$.
Let $n_0 = \min \set {n \in N : \norm n < 1}$.

Then:

$n_0$ is a prime number.


Proof
Aiming for a contradiction, suppose $n_0$ is a composite number. 
Let $n_1, n_2 \in \N$ such that $n_1, n_2 < n_0$ and $n_0 = n_1 n_2$. 
By the definition of $n_0$ then:

$\norm {n_1} = 1$
$\norm {n_2} = 1$
By Non-Archimedean Norm Axiom $\text N 2$: Multiplicativity:

$\norm {n_0} = \norm {n_1 n_2} = \norm {n_1} \norm {n_2} = 1$
This contradicts the assumption that $\norm {n_0} < 1$. 
So $n_0$ must be a prime number.
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction: $\S 3.1$ Absolute Values on $\Q$, Theorem $3.1.3$
2007: Svetlana Katok: p-adic Analysis Compared with Real: $\S 1.9$ Metrics and norms on the rational numbers. Ostrowski’s Theorem, Theorem $1.50$




