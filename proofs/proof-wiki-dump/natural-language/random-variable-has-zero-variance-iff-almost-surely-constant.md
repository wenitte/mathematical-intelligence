# 

Source: https://proofwiki.org/wiki/Random_Variable_has_Zero_Variance_iff_Almost_Surely_Constant



Theorem
Let $X$ be a random variable such that $\expect {X^2}$ exists.
Then $\var X = 0$ if and only if there exists $c \in \R$ with $\map \Pr {X = c} = 1$.
That is, $X$ is almost surely constant.


Proof
Sufficient Condition
Suppose that there exists some $c \in \R$ with $\map \Pr {X = c} = 1$.
From Expectation of Almost Surely Constant Random Variable: 

$\expect X = c$
Let $\map \supp X$ be the support of $X$. 
Since $\map \Pr {X = c} = 1$, we have: 

$\map \supp X = \set c$
We therefore have: 














\(\ds \expect {X^2}\)

\(=\)







\(\ds \sum_{x \mathop \in \map \supp X} x^2 \map \Pr {X = x}\)




















\(\ds \)

\(=\)







\(\ds c^2 \map \Pr {X = c}\)




















\(\ds \)

\(=\)







\(\ds c^2\)









Hence, from Variance as Expectation of Square minus Square of Expectation:














\(\ds \var X\)

\(=\)







\(\ds \expect {X^2} - \paren {\expect X}^2\)




















\(\ds \)

\(=\)







\(\ds c^2 - c^2\)




















\(\ds \)

\(=\)







\(\ds 0\)









$\Box$

Necessary Condition
Suppose now that $\var X = 0$. 
By definition of variance: 

$\expect {\paren {X - \expect X}^2} = 0$
From Condition for Expectation of Non-Negative Random Variable to be Zero: 

$\map \Pr {\paren {X - \expect X}^2 = 0} = 1$
That is: 

$\map \Pr {X - \expect X = 0} = 1$
giving: 

$\map \Pr {X = \expect X} = 1$
Setting $c = \expect X \in \R$, we see that we have $c \in \R$ such that: 

$\map \Pr {X = c} = 1$
$\blacksquare$





