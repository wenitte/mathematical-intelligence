# 

Source: https://proofwiki.org/wiki/Characterisation_of_UFDs

Theorem
Let $A$ be an integral domain.

The following statements are equivalent:

$(1): \quad A$ is a unique factorisation domain
$(2): \quad A$ is a GCD domain satisfying the ascending chain condition on principal ideals.
$(3): \quad A$ satisfies the ascending chain condition on principal ideals and every irreducible element of $A$ is a prime element of $A$.


Proof

This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
We use the notation $a \sim b$ to mean $a \mid b$ and $b \mid a$, or equivalently that $a = bu$ for some unit $u \in A^\times$. We say $a$ and $b$ are "associates".

$\left( 1 \rightarrow 2 \right)$ Let $a \sim p_1^{\alpha_1} \cdots p_k ^ {\alpha_k}$, $b \sim p_1^{\beta_1} \cdots p_k ^ {\beta_k}$, where $\alpha_i, \beta_i \in \N \cup \{0\}$. Then we claim that $\gcd(a,b) \sim d = p_1^{\text{min}(\alpha_1, \beta_1)} \cdots p_k^{\text{min}(\alpha_k, \beta_k)}$. 
Clearly $a \sim d \cdot p_1^{\alpha_1 - \text{min}(\alpha_1,\beta_1)} \cdots p_k^{\alpha_k - \text{min}(\alpha_k,\beta_k)}$ noting all exponents are non-negative. Similarly for $b$, it suffices to prove that if $e \mid a$ and $e \mid b$ then $e \mid d$. $e$ only has factors associated to each $p_i$, and none of the exponents in $e$'s irreducible factorization can be greater than both $\alpha_i$ and $\beta_i$, so $e = p_1^{\gamma_1} \cdots p_n^{\gamma_n}$ where $\gamma_i \leq \text{min}(\alpha_i, \beta_i)$, clearly now $e \mid d$ so we have a GCD domain.

Aiming for a contradiction, suppose we had a chain:

$\sequence {a_1} \subsetneq \sequence {a_2} \subsetneq \dots$
that did not terminate.
Let $a_i = p_1^{\large \gamma_{1,i}} \cdots p_n^{\large \gamma_{n,i}}$. It is easy to that the sum of the exponents must be a strictly decreasing sequence of positive integers, which cannot occur.

$\left( 2 \rightarrow 3 \right)$ By assumption we have the ascending chain condition on principal ideals.
Let $p$ be irreducible and $p \mid ab$, let $d = \gcd(a,p)$. Since $d \mid p$, either $d \sim p$, in which case since $d \mid a$ we have that $p \mid a$.
Otherwise, $d \sim 1$, in which case $\gcd(ab,pb) \sim b$ so since $p \mid ab$ and $p \mid pb$ we have $p \mid b$.

$\left( 3 \rightarrow 1 \right)$ Suppose irreducible factorization was false, let $d \in A$ be an element that cannot be written as a product of irreducible elements. Then $d$ is not irreducible, so $d = a_1 x_1$ for some non-units $a_1, x_1 \in A \setminus A^{\times}$. Not both of $a_1, x_1$ can be irreducible so assume without loss of generality that $x_1$ is reducible, say $x_1 = a_2 x_2$ where neither are units, continuing onwards we have the following chain:

$\sequence d \subsetneq \sequence {x_1} \subsetneq \sequence {x_2} \subsetneq \dots$
This contradicts the ascending chain condition on principal ideals. Therefore, every elements can be factored as a product of irreducible elements.
Now to prove uniqueness, suppose $p_1 p_2 \cdots p_i = q_1 q_2 \cdots q_j$ were two equal products of irreducibles. Then $p_1 \mid q_1 \cdots q_j$ and since $p_1$ is prime, (without loss of generality) $p_1 \sim q_1$, since $A$ is an integral domain, by Cancellation Law for Ring Product of Integral Domain, we have that $p_2 \cdots p_i \sim q_2 \cdots q_j$, continuing onwards shows that each $p_a \sim q_a$ and $i=j$ so the factorizations are unique up to unit.
$\blacksquare$





