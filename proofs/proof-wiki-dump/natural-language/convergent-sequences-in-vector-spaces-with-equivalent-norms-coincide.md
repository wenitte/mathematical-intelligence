# 

Source: https://proofwiki.org/wiki/Convergent_Sequences_in_Vector_Spaces_with_Equivalent_Norms_Coincide

Theorem
Let $M_a = \struct {X, \norm {\, \cdot \, }_a}$ and $M_b = \struct {X, \norm {\, \cdot \,}_b}$ be normed vector spaces.
Let $\sequence {x_n}_{n \mathop \in \N}$ be an convergent sequence in $M_a$.
Suppose, $\norm {\, \cdot \, }_a$ and $\norm {\, \cdot \,}_b$ are equivalent norms, i.e. $\norm {\, \cdot \, }_a \sim \norm {\, \cdot \,}_b$.

Then $\sequence {x_n}_{n \mathop \in \N}$ is also convergent in $M_b$. 


Proof
Let $L \in X$.
Then:

$\forall \epsilon_a \in \R_{> 0} : \exists N \in \N : \forall n \in \N : n > N \implies \norm {x_n - L}_a < \epsilon_a$
By equivalence of norms:

$\exists M \in \R_{> 0} : \norm {x_n - L}_b \le M \norm {x_n - L}_a < M \epsilon_a$
Let $\epsilon_b := M \epsilon_a$
Then:

$\forall \epsilon_b \in \R_{> 0}: \exists N \in \N : \forall n \in \N : n > N \implies \norm {x_n - L}_b < \epsilon_b$
Therefore, $\sequence{x_n}_{n \mathop \in \N}$ converges to $L$ also in $M_b$.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): $\S 1.4$: Normed and Banach spaces. Sequences in a normed space; Banach spaces




