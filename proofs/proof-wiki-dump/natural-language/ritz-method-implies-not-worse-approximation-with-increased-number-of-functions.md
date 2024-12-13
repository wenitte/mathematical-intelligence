# 

Source: https://proofwiki.org/wiki/Ritz_Method_implies_Not_Worse_Approximation_with_Increased_Number_of_Functions


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Consider the Ritz method.
Let $\eta_n = \boldsymbol \alpha \boldsymbol \phi$.
Let $J \sqbrk {\eta_n} = \mu_n$.

Then:

$\mu_n \ge \mu_{n + 1}$


Proof
Denote $\eta_{n + 1} = \eta_n + \alpha_{n + 1} \phi_{n + 1}$.
For $\alpha_{n + 1} = 0$ we have:

$\eta_n = \eta_{n + 1}$
Suppose that $J \sqbrk {\eta_n}$ has been minimised with respect to $\boldsymbol \alpha$.
If:

$\exists \boldsymbol \alpha \in \R^n: \nexists \alpha_{n + 1} \ne 0: J \sqbrk {\eta_n} > J \sqbrk {\eta_{n + 1} }$
then $J \sqbrk {\eta_{n + 1} }$ is minimised for previously determined $\boldsymbol \alpha$ and $\alpha_{n + 1} = 0$:

$J \sqbrk {\eta_{n + 1} } = J \sqbrk {\eta_n}$
where $\eta_{n + 1} = \eta_n$.

Suppose:

$\exists \boldsymbol \alpha \in \R^n: \exists \alpha_{n + 1} \ne 0: J \sqbrk {\eta_n} > J \sqbrk {\eta_{n + 1} }$
Then $\eta_{n + 1} \ne \eta_n$, because their respective $\boldsymbol \alpha$ differ by at least one value: $\alpha_{n + 1}$.
Hence, for this supposition:

$J \sqbrk {\eta_{n + 1} } > J \sqbrk {\eta_n}$
Finally, both cases together imply that:

$J \sqbrk {\eta_{n + 1} } \ge J \sqbrk {\eta_n}$
or equivalently:

$\mu_n \ge \mu_{n + 1}$
$\blacksquare$


Sources
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations ... (previous) ... (next): $\S 8.40 $: The Ritz Method and the Method of Finite Differences




