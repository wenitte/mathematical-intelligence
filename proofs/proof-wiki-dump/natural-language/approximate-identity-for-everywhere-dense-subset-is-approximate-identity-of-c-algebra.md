# 

Source: https://proofwiki.org/wiki/Approximate_Identity_for_Everywhere_Dense_Subset_is_Approximate_Identity_of_C*-Algebra

Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a $\text C^\ast$-algebra.
Let $\DD \subseteq A$ be everywhere dense.
Let $\tuple {\Lambda, \preceq}$ be a directed set. 
Let $\family {e_\lambda}_{\lambda \in \Lambda}$ be a net such that: 

$e_\lambda$ is Hermitian for each $\lambda \in \Lambda$ with $\map {\sigma_A} {e_\lambda} \subseteq \closedint 0 1$
for each $x \in \DD$, $\family {x e_\lambda}_{\lambda \mathop \in \Lambda}$ converges to $x$.

Then $\family {e_\lambda}_{\lambda \mathop \in \Lambda}$ is an approximate identity of $A$.


Proof
We only need to show that for each $x \in A$, the net $\family {x e_\lambda}_{\lambda \mathop \in \Lambda}$ converges to $x$. 
First, for each $\lambda \in \Lambda$ we have:

$\map {\sigma_A} {e_\lambda} \subseteq \closedint 0 1$
Hence, from the definition of spectral radius:

$\map {r_A} {e_\lambda} \le 1$
From Spectral Radius of Normal Element of C*-Algebra Equal to Norm, we have $\norm {e_\lambda} \le 1$ for each $\lambda \in \Lambda$.
Let $x \in A$. 
Let $\epsilon > 0$.
Since $\DD$ is everywhere dense in $A$, there exists a sequence $\sequence {x_n}_{n \mathop \in \N}$ in $\DD$ with $x_n \to x$. 
Now, we have:














\(\ds \norm {x - x e_\lambda}\)

\(\le\)







\(\ds \norm {\paren {x - x_n} - \paren {x - x_n} e_\lambda} + \norm {x_n - x_n e_\lambda}\)





Norm Axiom $\text N 3$: Triangle Inequality














\(\ds \)

\(\le\)







\(\ds \norm {x - x_n} + \norm {\paren {x - x_n} e_\lambda} + \norm {x_n - x_n e_\lambda}\)





Norm Axiom $\text N 3$: Triangle Inequality














\(\ds \)

\(\le\)







\(\ds 2 \norm {x - x_n} + \norm {x_n - x_n e_\lambda}\)





Definition of Norm on Algebra and $\norm {e_\lambda} \le 1$



Take $n \in \N$ large enough to have:

$\norm {x - x_n} < \dfrac \epsilon 3$
By hypothesis, since $x_n \in \DD$, we can take $a \in \Lambda$ such that for $\lambda \succeq a$ we have:

$\norm {x_n - x_n e_\lambda} < \dfrac \epsilon 3$
Then for $\lambda \succeq a$ we have:

$\norm {x - x e_\lambda} < \epsilon$
Hence the net $\family {x e_\lambda}_{\lambda \in \Lambda}$ converges to $x$. 
So $\family {e_\lambda}_{\lambda \mathop \in \Lambda}$ is an approximate identity of $A$.
$\blacksquare$





