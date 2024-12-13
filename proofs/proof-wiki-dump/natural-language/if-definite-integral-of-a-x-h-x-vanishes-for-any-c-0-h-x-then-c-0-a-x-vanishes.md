# 

Source: https://proofwiki.org/wiki/If_Definite_Integral_of_a(x)h(x)_vanishes_for_any_C%5E0_h(x)_then_C%5E0_a(x)_vanishes


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $\map \alpha x$ be a continuous real function on the closed real interval $\closedint a b$.
Let $\ds \int_a^b \map \alpha x \map h x \rd x = 0$ for every real function $\map h x \in C^0 \closedint a b$ such that $\map h a = 0$ and $\map h b = 0$.
where $C^0 \closedint a b$ means continuous functions on $\closedint a b$.

Then $\map \alpha x = 0$ for all $x \in \closedint a b$.


Proof
Aiming for a contradiction, suppose the real function $\map \alpha x$ is nonzero at some point in $\closedint a b$ for some arbitrary $\map h x$. 
Due to belonging to $C^0$ it is also nonzero in some interval $\closedint {x_1} {x_2}$ contained in $\closedint a b$.

Let us choose $\map h x$ to be of a specific form, while still satisfying the requirements in the statement of the theorem:

$\map h x = \begin {cases}
\map \sgn {\map \alpha x} \paren {x - x_1} \paren {x_2 - x} & : x \in \closedint {x_1} {x_2} \\
0 & : x \notin \closedint {x_1} {x_2}
\end {cases}$
Then:

$\ds \int_a^b \map \alpha x \map h x \rd x = \int_{x_1}^{x_2} \size {\map \alpha x} \paren {x - x_1} \paren {x_2 - x} \rd x$
where we used the fact that:

$\map \alpha x = \map \sgn {\map \alpha x} \size {\map \alpha x}$
as well as:

$\map {\sgn^2} x = 1$ if $x \ne 0$ and $x \in \R$.
The integrand is positive for $x \in \closedint {x_1} {x_2}$, whence the integral is positive.
However, that contradicts the condition on the integral in the statement of the theorem.
Thus, with the provided assumption the condition for the integral does not hold for all $\map h x$ with aforementioned conditions.
Hence the result by Proof by Contradiction.
$\blacksquare$


Remark
The lemma still holds if we replace $C^0 \closedint a b$ by $C^n \closedint a b$.
To see this, modify $\map h x$:

$\map h x = \begin {cases}
\map \sgn {\map \alpha x} \paren {\paren {x - x_1} \paren {x_2 - x} }^{n + 1} & : x \in \closedint {x_1} {x_2} \\
0 & : x \notin \closedint {x_1} {x_2}
\end {cases}$
then we can use the same proof

Sources
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations: $\S 1.3$: The Variation of a Functional. A Necessary Condition for an Extremum




