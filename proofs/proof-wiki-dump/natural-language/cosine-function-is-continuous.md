# 

Source: https://proofwiki.org/wiki/Cosine_Function_is_Continuous

Theorem
Let $x \in \R$ be a real number.
Let $\cos x$ be the cosine of $x$.

Then:

$\cos x$ is continuous on $\R$.


Proof
Recall the definition of the cosine function:

$\ds \cos x = \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {x^{2 n} } {\paren {2 n}!} = 1 - \frac {x^2} {2!} + \frac {x^4} {4!} - \cdots$
Thus $\cos x$ is expressible in the form of a power series.
From Cosine Function is Absolutely Convergent, we have that the interval of convergence of $\cos x$ is the whole of $\R$. 
From Power Series is Differentiable on Interval of Convergence, it follows that $\cos x$ is continuous on the whole of $\R$.
$\blacksquare$





