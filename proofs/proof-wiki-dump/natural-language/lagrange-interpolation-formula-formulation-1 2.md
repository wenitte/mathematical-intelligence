# 

Source: https://proofwiki.org/wiki/Lagrange_Interpolation_Formula/Formulation_1


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $\tuple {x_0, \ldots, x_n}$ and $\tuple {a_0, \ldots, a_n}$ be ordered tuples of real numbers such that $x_i \ne x_j$ for $i \ne j$.
Then there exists a unique polynomial $P \in \R \sqbrk X$ of degree at most $n$ such that:

$\map P {x_i} = a_i$ for all $i \in \set {0, 1, \ldots, n}$
Moreover $P$ is given by the formula:

$\ds \map P X = \sum_{j \mathop = 0}^n a_i \map {L_j} X$
where $\map {L_j} X$ is the $j$th Lagrange basis polynomial associated to the $x_i$.


Proof
Recall the definition:

$\ds \map {L_j} X = \prod_{\substack {0 \mathop \le i \mathop \le n \\ i \mathop \ne j}} \frac {X - x_i} {x_j - x_i} \in \R \sqbrk X$

There is believed to be a mistake here, possibly a typo.In particular: Not sure if it's a mistake or a different way of defining it, but 1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics: Lagrange interpolation formula has the above wrapped up in another product symbolYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by reviewing it, and either correcting it or adding some explanatory material as to why you believe it is actually correct after all.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mistake}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.

From this we see that:

$\map {L_j} {x_i} = \delta_{i j}$
Therefore:

$\ds \map P{x_i} = \sum_{j \mathop = 0}^n a_i \delta_{i j} = a_i$

Moreover, by Degree of Product of Polynomials over Integral Domain and Degree of Sum of Polynomials, the degree of $P$ as defined above is at most $n$.

It remains to show that the choice of $P$ is unique.
Aiming for a contradiction, suppose $\tilde P$ is another polynomial with the required properties.
Let $\Delta = P - \tilde P$.
By Degree of Sum of Polynomials, the degree of $\Delta$ is at most $n$.
Now we see that for $i = 0, \ldots, n$:

$\map \Delta {x_i} = \map P {x_i} - \map {\tilde P} {x_i} = a_i - a_i = 0$
Since by hypothesis the $x_i$ are distinct, $\Delta$ has $n + 1$ distinct zeros in $\R$.
But by the corollary to the Polynomial Factor Theorem this shows that:

$\ds \map \Delta X = \alpha \prod_{i \mathop = 0}^n \paren {X - x_i}$
If $\alpha \ne 0$, then this shows that the degree of $\Delta$ is $n+1$, a contradiction.
Therefore:

$\Delta = 0$
and so:

$P = \tilde P$
This establishes uniqueness.
$\blacksquare$


Also known as
The Lagrange interpolation formula can also be styled as Lagrange's interpolation formula.


Also see
Equivalence of Formulations of Lagrange Interpolation Formula


Source of Name
This entry was named for Joseph Louis Lagrange.


Sources
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Lagrange interpolation formula




