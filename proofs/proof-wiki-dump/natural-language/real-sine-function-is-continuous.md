# 

Source: https://proofwiki.org/wiki/Real_Sine_Function_is_Continuous

Theorem
The real sine function $\sin: \R \to \R$ is continuous on $\R$.


Proof
Recall the definition of the sine function:

$\ds \forall x \in \R: \sin x = \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {x^{2 n + 1} } {\paren {2 n + 1}!} = x - \frac {x^3} {3!} + \frac {x^5} {5!} - \cdots$
Thus $\sin x$ is expressible in the form of a power series.
From Sine Function is Absolutely Convergent, we have that the interval of convergence of $\sin x$ is the whole of $\R$. 
From Power Series is Differentiable on Interval of Convergence, it follows that $\sin x$ is continuous on the whole of $\R$.
$\blacksquare$





