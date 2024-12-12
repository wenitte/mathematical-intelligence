# 

Source: https://proofwiki.org/wiki/Characteristic_Function_on_Event_is_Discrete_Random_Variable

Theorem
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $E \in \Sigma$ be any event of $\struct {\Omega, \Sigma, \Pr}$.
Let $\chi_E: \Omega \to \set {0, 1}$ be the characteristic function of $E$.

Then $\chi_E$ is a discrete random variable on $\struct {\Omega, \Sigma, \Pr}$.


Proof
By definition of characteristic function:

$\forall \omega \in \Omega: \chi_E = \begin{cases}
1 & : \omega \in E \\
0 & : \omega \notin E \\
\end{cases}$

Then clearly:

$\forall x \in \R: \map { {\chi_E}^{-1} } x = \begin{cases}
E & : x = 1 \\
\Omega \setminus E & : x = 0 \\
\O & : x \notin \set {0, 1}
\end{cases}$

So whatever the value of $x \in \R$, its preimage is in $\Sigma$.

Hence the result.
$\blacksquare$


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $\S 2.1$: Probability mass functions: Exercise $3$




