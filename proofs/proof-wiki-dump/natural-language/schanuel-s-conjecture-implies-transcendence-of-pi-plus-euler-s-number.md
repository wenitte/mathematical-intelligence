# 

Source: https://proofwiki.org/wiki/Schanuel%27s_Conjecture_Implies_Transcendence_of_Pi_plus_Euler%27s_Number


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let Schanuel's Conjecture be true.

Then $\pi + e$ is transcendental. 


Proof
Assume the truth of Schanuel's Conjecture.
By Schanuel's Conjecture Implies Algebraic Independence of Pi and Euler's Number over the Rationals, $\pi$ and $e$ are algebraically independent over the rational numbers $\Q$.
That is, no non-trivial polynomials $\map f {x, y}$ with rational coefficients satisfy:

$\map f {\pi, e} = 0$
Aiming for a contradiction, suppose $\pi + e$ is algebraic.
Then there would be a non-trivial polynomial $\map g z$ with rational coefficients satisfying:

$\map g {\pi + e} = 0$
However, $\map f {x, y} := \map g {x + y}$ would be a non-trivial polynomial with rational coefficients satisfying:

$\map f {\pi, e} = 0$
which contradicts the earlier statement that no such polynomials exist.
Therefore, if Schanuel's Conjecture holds, $\pi + e$ is transcendental.
$\blacksquare$





