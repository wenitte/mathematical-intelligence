# 

Source: https://proofwiki.org/wiki/Extremal_Length_of_Composition

Theorem
Let $\Gamma_1$ and $\Gamma_2$ be families of (unions of) rectifiable curves on a Riemann surface $X$.
Let $\Gamma_1$ and $\Gamma_2$ be disjoint in the sense that there exist disjoint Borel sets $E_1 \subseteq X$ and $E_2 \subseteq X$ with $\bigcup \Gamma_1 \subset E_1$ and $\bigcup \Gamma_2 \subset E_2$.

The extremal length of the family:

$\Gamma := \set {\gamma_1 \cup \gamma_2:\ \gamma_1 \in \Gamma_1 \text{ and }\gamma_2 \in \Gamma_2}$
satisfies:

$\map \lambda \Gamma = \map \lambda {\Gamma_1} + \map \lambda {\Gamma_2}$


Proof
By the Series Law for Extremal Length:

$\map \lambda \Gamma \ge \map \lambda {\Gamma_1} + \map \lambda {\Gamma_2}$
Hence it remains only to prove the opposite inequality.

Let $\rho$ be a metric as in the definition of extremal length, normalized such that $\map A \rho = 1$.
The claim to be proved is that:

$\paren {\map L {\Gamma, \rho} }^2 \le \map \lambda {\Gamma_1} + \map \lambda {\Gamma_2}$

Define $\alpha_j := \sqrt {\map A {\rho {\restriction_{E_j} } } }$ for $j = 1, 2$.

Suppose either $\map \lambda {\Gamma_1}$ or $\map \lambda {\Gamma_2}$ is infinite.
It trivially follows that both $\alpha_1$ and $\alpha_2$ are positive.
Assume both extremal lengths are finite.
Let $\alpha_j = 0$.
Then:

$\map L {\Gamma_j, \rho} = 0$
Indeed, we can choose a metric $\tilde \rho$ that agrees with $\rho$ on $A_j$ and has total area $\epsilon > 0$.
Then:

$\paren {\map L {\Gamma_j, \rho} }^2 = \paren {\map L {\Gamma_j, \tilde \rho} }^2 \le \epsilon \cdot \map \lambda {\Gamma_j}$
Because $\epsilon$ was arbitrary, the claim follows.

Without loss of generality, suppose $\alpha_2 = 0$.
Then:

$\paren {\map L {\Gamma_j, \rho} }^2 = \paren {\map L {\Gamma_1, \rho} + \map L {\Gamma_2, \rho} }^2 = \paren {\map L {\Gamma_j, \rho} }^2 \le \map \lambda {\Gamma_1} \le \map \lambda {\Gamma_1} + \map \lambda {\Gamma_2}$
Thus both $\alpha_1$ and $\alpha_2$ are positive.

Let:

$\rho_j := \dfrac {\rho {\restriction_{E_j} } } {\alpha_j}$
Then $\map A \rho = 1$.

So:














\(\ds \paren {\map L {\Gamma, \rho} }^2\)

\(=\)







\(\ds \paren {\map L {\Gamma_1, \rho} + \map L {\Gamma_2, \rho} }^2\)





Definition of $\Gamma$














\(\ds \)

\(=\)







\(\ds \paren {\map L {\Gamma_1, \alpha_1 \rho_1} + \map L {\Gamma_2, \alpha_2 \rho_2} }^2\)





Definition of $\rho_j$ and disjointness of $E_1$ and $E_2$














\(\ds \)

\(=\)







\(\ds \paren {\alpha_1 \map L {\Gamma_1, \rho_1} + \alpha_2 \map L {\Gamma_2, \rho_2} }^2\)





Definition of $\map L {\Gamma_j, \rho_j}$)














\(\ds \)

\(\le\)







\(\ds \paren {\alpha_1^2 + \alpha_2^2} \paren {\map L {\Gamma_1, \rho_1}^2 + \map L {\Gamma_2, \rho_2}^2}\)





Cauchy-Bunyakovsky-Schwarz Inequality














\(\ds \)

\(\le\)







\(\ds \map L {\Gamma_1, \rho_1}^2 + \map L {\Gamma_2, \rho_2}^2\)





as $\alpha_1^2 + \alpha_2^2 \le \map A \rho = 1$














\(\ds \)

\(\le\)







\(\ds \map \lambda {\Gamma_1} + \map \lambda {\Gamma_2}\)





Definition of Extremal Length




In conclusion:

$\map \lambda \Gamma = \sup_\rho \map L {\Gamma, \rho} \le \map \lambda {\Gamma_1} + \map \lambda {\Gamma_2}$
as claimed.
$\blacksquare$





