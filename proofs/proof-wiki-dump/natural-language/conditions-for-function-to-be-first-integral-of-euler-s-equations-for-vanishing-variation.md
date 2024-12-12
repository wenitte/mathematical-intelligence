# 

Source: https://proofwiki.org/wiki/Conditions_for_Function_to_be_First_Integral_of_Euler%27s_Equations_for_Vanishing_Variation


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $\Phi = \map {\Phi} {x, \family {y_i}_{1 \mathop \le i \mathop \le n}, \family {p_i}_{1 \mathop \le i \mathop \le n} }$ be a real function.
Let $H$ be Hamiltonian.
Then a necessary and sufficient condition for $\Phi$ to be the first integral of Euler's Equations is

$\dfrac {\partial \Phi} {\partial x} + \sqbrk{\Phi, H} = 0$


Corollary 1
Let $\dfrac {\partial\Phi} {\partial x}=0$.

Then $\Phi$ is the first integral if its Poisson Bracket with the Hamiltonian vanishes.


Corollary 2
Let $\Phi = H$.
Let $\dfrac {\partial H} {\partial x} = 0$.

Then $H$ is the first integral of Euler's Equations.


Proof













\(\ds \dfrac {\d \Phi} {\d x}\)

\(=\)







\(\ds \frac {\partial\Phi} {\partial x} + \sum_{i \mathop = 1}^n \frac {\partial \Phi} {\partial y_i} \frac {\partial y_i} {\partial x} + \sum_{i \mathop = 1}^n \frac {\partial \Phi} {\partial p_i} \frac{\partial p_i} {\partial x}\)




















\(\ds \)

\(=\)







\(\ds \frac {\partial \Phi} {\partial x} + \sum_{i \mathop = 1}^n \frac {\partial \Phi} {\partial y_i} \frac {\partial H} {\partial p_i} - \sum_{i \mathop = 1}^n \frac {\partial \Phi} {\partial p_i} \frac{\partial H} {\partial y_i}\)




















\(\ds \)

\(=\)







\(\ds \frac {\partial \Phi} {\partial x} + \sqbrk{\Phi, H}\)









For $\Phi$ to be the first integral:

$\dfrac {\d \Phi} {\d x} = 0$
Hence the result.
$\blacksquare$



This needs considerable tedious hard slog to complete it.In particular: get proof for the other conditionTo discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Sources
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations ... (previous) ... (next): $\S 4.16$: The Canonical Form of the Euler's Equations




