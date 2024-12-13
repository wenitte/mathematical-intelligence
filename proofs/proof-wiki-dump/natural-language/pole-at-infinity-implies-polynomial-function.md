# 

Source: https://proofwiki.org/wiki/Pole_at_Infinity_implies_Polynomial_Function


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $f : \C \to \C$ be an entire function.
Let $f$ have a pole of order $N$ at $\infty$. 

Then $f$ is a polynomial of degree $N$.  


Proof
By Complex Function is Entire iff it has Everywhere Convergent Power Series, there exists a power series: 

$\ds \map f z = \sum_{n \mathop = 0}^\infty a_n z^n$
convergent for all $z \in \C$, where $\sequence {a_n}$ is a sequence of complex coefficients. 
This gives: 

$\ds \map f {\frac 1 z} = \sum_{n \mathop = 0}^\infty \frac {a_n} {z^n}$
It is given that $\map f z$ has a pole of order $N$ at $\infty$, so $\map f {\dfrac 1 z}$ has a pole of order $N$ at $0$. 
So $N$ is the least positive integer such that:

$\ds z^N \map f {\frac 1 z} = \sum_{n \mathop = 0}^\infty a_n z^{N - n}$
is holomorphic at $0$, with $a_N \ne 0$. 
Therefore, all exponents of $z$, with non-zero coefficients, in this series must be non-negative. 
So $a_n = 0$ for $n > N$.  
Hence: 

$\ds \map f z = \sum_{n \mathop = 0}^N a_n z^n$
with $a_N \ne 0$. 
That is, $f$ is a polynomial of degree $N$.  
$\blacksquare$





