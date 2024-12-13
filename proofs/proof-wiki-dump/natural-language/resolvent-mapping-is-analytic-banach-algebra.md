# 

Source: https://proofwiki.org/wiki/Resolvent_Mapping_is_Analytic/Banach_Algebra

Theorem
Let $\struct {A, \norm {\, \cdot \,} }$ be a unital Banach algebra over $\C$. 
Let ${\mathbf 1}_A$ be the identity element of $A$. 
Let $x \in A$.
Let $\map {\rho_A} x$ be the resolvent set of $x$ in $A$.
Define $R : \map {\rho_A} x \to A$ by:

$\map R \lambda = \paren {\lambda {\mathbf 1}_A - x}^{-1}$

Then $R$ is analytic with derivative:

$\map {R'} \lambda = -\paren {\lambda {\mathbf 1}_A - x}^{-2}$

Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: Derivative is not defined for complex domainYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Proof
Let $\lambda, \mu \in \map {\rho_A} x$ be such that $\lambda \ne \mu$.
Then, we have:














\(\ds \frac {\paren {\mu {\mathbf 1}_A - x}^{-1} - \paren {\lambda {\mathbf 1}_A - x}^{-1} } {\mu - \lambda}\)

\(=\)







\(\ds \frac {\paren {\mu {\mathbf 1}_A - x}^{-1} \paren { {\mathbf 1}_A - \paren {\mu {\mathbf 1}_A - x} \paren {\lambda {\mathbf 1}_A - x}^{-1} } } {\mu - \lambda}\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {\mu {\mathbf 1}_A - x}^{-1} \paren { \paren {\lambda {\mathbf 1}_A - x} - \paren {\mu {\mathbf 1}_A - x} } \paren {\lambda {\mathbf 1}_A - x}^{-1} } {\mu - \lambda}\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {\mu {\mathbf 1}_A - x}^{-1} \paren {\lambda - \mu} \paren {\lambda {\mathbf 1}_A - x}^{-1} } {\mu - \lambda}\)




















\(\ds \)

\(=\)







\(\ds -\paren {\mu {\mathbf 1}_A - x}^{-1} \paren {\lambda {\mathbf 1}_A - x}^{-1}\)









From Resolvent Mapping is Continuous: Banach Algebra, we have:

$\paren {\mu {\mathbf 1}_A - x}^{-1} \to \paren {\lambda {\mathbf 1}_A - x}^{-1}$ as $\mu \to \lambda$ in $\map {\rho_A} x$.
So, from Product Rule for Sequence in Normed Algebra, we have:

$-\paren {\mu {\mathbf 1}_A - x}^{-1} \paren {\lambda {\mathbf 1}_A - x}^{-1} \to -\paren {\lambda {\mathbf 1}_A - x}^{-2}$ as $\mu \to \lambda$.
So, we have that:

$\ds \lim_{\mu \mathop \to \lambda} \frac {\paren {\mu {\mathbf 1}_A - x}^{-1} - \paren {\lambda {\mathbf 1}_A - x}^{-1} } {\mu - \lambda}$ exists
and:

$\ds \lim_{\mu \mathop \to \lambda} \frac {\map R \mu - \map R \lambda} {\mu - \lambda} = \lim_{\mu \mathop \to \lambda} \frac {\paren {\mu {\mathbf 1}_A - x}^{-1} - \paren {\lambda {\mathbf 1}_A - x}^{-1} } {\mu - \lambda} = -\paren {\lambda {\mathbf 1}_A - x}^{-2}$
So, we obtain:

$\map {R'} \lambda = -\paren {\lambda {\mathbf 1}_A - x}^{-2}$
$\blacksquare$





