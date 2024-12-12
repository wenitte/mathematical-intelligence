# 

Source: https://proofwiki.org/wiki/Expectation_of_Almost_Surely_Constant_Random_Variable

Theorem
Let $X$ be an almost surely constant random variable.
That is, there exists some $c \in \R$ such that: 

$\map \Pr {X = c} = 1$

Then: 

$\expect X = c$


Proof
Note that since $\map \Pr {X = c} = 1$, we have $\map \Pr {X \ne c} = 0$ from Probability of Event not Occurring.
Therefore: 

$\map {\mathrm {supp} } X = \set c$

This article needs to be linked to other articles.In particular: suppYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
We therefore have:














\(\ds \expect X\)

\(=\)







\(\ds \sum_{x \mathop \in \map {\mathrm {supp} } X} x \map \Pr {X = x}\)





Definition of Expectation of Discrete Random Variable














\(\ds \)

\(=\)







\(\ds c \map \Pr {X = c}\)




















\(\ds \)

\(=\)







\(\ds c\)









$\blacksquare$





